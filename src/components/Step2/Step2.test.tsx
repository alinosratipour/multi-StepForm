import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Step2, { Step2Props } from "./Step2"; // Make sure to import the Step2Props interface
import { plans } from "../../data/planData"; // Import the plans variable

describe("Step2 Component", () => {
  // Mock the necessary props using a beforeEach block
  let props: Step2Props;

  beforeEach(() => {
    props = {
      selectedCard: 0,
      setSelectedCard: jest.fn(),
      onPlanTypeChange: jest.fn(),
      toggleState: false,
      planType: "",
      setToggleState: jest.fn(),
      setPlanPrice: jest.fn(),
      setSelectedPlanName: jest.fn(),
    };
  });

  it("should render the component with the header", () => {
    const { getByText } = render( <Step2 {...props}/>)
    expect(getByText("Select your plan")).toBeInTheDocument();
  });


  it("should render the ToggleSwitch component", () => {
    // Render the Step2 component with the mock props
    render(<Step2 {...props} />);

    // Use getByTestId to check if the ToggleSwitch is in the document
    const toggleSwitch = screen.getByTestId("toggle-switch");

    // Assert that the ToggleSwitch is present
    expect(toggleSwitch).toBeInTheDocument();
  });


  it("should toggle to Yearly option when ToggleSwitch is clicked", () => {
    // Render the Step2 component with the mock props
    render(<Step2 {...props} />);

    // Click the ToggleSwitch to toggle the options
    fireEvent.click(screen.getByTestId("toggle-switch"));

    // Get the Monthly and Yearly options after toggling
    const monthlyOption = screen.getByTestId("monthly-toggle");
    const yearlyOption = screen.getByTestId("yearly-toggle");

    // Assert that the Yearly option is visible and Monthly option is grayed out
    expect(monthlyOption).toBeVisible();
    expect(yearlyOption).toBeVisible();
    expect(monthlyOption).toHaveClass("monthly-option");
    expect(yearlyOption).toHaveClass("yearly-option");
  });

  
  it("should initially display Monthly option and grayed out Yearly option", () => {
    // Render the Step2 component with the mock props
    render(<Step2 {...props} />);

    // Use getByTestId to get the Monthly and Yearly options
    const monthlyOption = screen.getByTestId("monthly-toggle");
    const yearlyOption = screen.getByTestId("yearly-toggle");

    // Assert that the Monthly option is visible and Yearly option is grayed out
    expect(monthlyOption).toBeVisible();
    expect(yearlyOption).toBeVisible();
    expect(monthlyOption).toHaveClass("monthly-option");
    expect(yearlyOption).toHaveClass("yearly-option");
  });



  it("should render Cards with titles and subtitles", () => {
    // Render the Step2 component with the mock props
    render(<Step2 {...props} />);
  
    // Use getByText to check if the Card titles and subtitles are in the document
    plans.forEach((plan) => {
      const cardTitle = screen.getByText(plan.name);
      const cardSubtitle = screen.getByText(
        !props.toggleState
          ? `$${plan.price.monthly}/mo`
          : `$${plan.price.yearly}/yr`
      );
  
      // Assert that both card title and subtitle are present for each plan
      expect(cardTitle).toBeInTheDocument();
      expect(cardSubtitle).toBeInTheDocument();
    });
});

});

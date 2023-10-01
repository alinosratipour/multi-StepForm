import Step4, { Step4Props } from "./Step4";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { AddonsProvider, useAddonsContext } from "../../context/AddonsContext";
import { Addon } from "../../context/AddonsContext"; // Import the Addon type

// Mock the AddonsContext module
jest.mock("../../context/AddonsContext", () => {
  // Import the actual AddonsContext module within the mock callback
  const actualAddonsContext = jest.requireActual("../../context/AddonsContext");

  // Return the mock implementation
  return {
    ...actualAddonsContext,

    // Mock the useAddonsContext function with a Jest mock function
    useAddonsContext: jest.fn(),
  };
});

describe("Step 4 Component", () => {
  let props: Step4Props;
  let selectedAddOns: Addon[]; // Define the selected addons

  beforeEach(() => {
    props = {
      selectedPlanPrice: 5, // Set the selected plan price
      planType: "monthly", // Set the plan type
      selectedPlanName: "Test Plan",
      onJumpToStep2: jest.fn(),
    };

    selectedAddOns = [
      // Define the selected addons here
      {
        name: "Addon 1",
        description: "Description 1",
        price: { monthly: 2, yearly: 20 },
      },
      {
        name: "Addon 2",
        description: "Description 2",
        price: { monthly: 3, yearly: 30 },
      },
    ];

    // Mock the useAddonsContext hook to return the selected addons
    (useAddonsContext as jest.Mock).mockReturnValue({ selectedAddOns });
  });

  afterEach(() => {
    cleanup();
  });

  const renderStep4 = () =>
    render(
      <AddonsProvider>
        <Step4 {...props} />
      </AddonsProvider>
    );

  it("Verify that header in Step 4 Is present", () => {
    renderStep4();
    const Header = screen.getByText("Finishing up");
    expect(Header).toBeInTheDocument();
  });

  it("Verify that selected plan name is present", () => {
    props.selectedPlanName = "Test Plan";
    renderStep4();
    const planNameElement = screen.getByText(props.selectedPlanName, {
      exact: false,
    });

    expect(planNameElement).toBeInTheDocument();
  });

  it("Verify that selected plan type is present", () => {
    props.planType = "Yearly";
    renderStep4();
    const planTypeElement = screen.getByText(props.planType, { exact: false });
    expect(planTypeElement).toBeInTheDocument();
  });

  it("Verify that selected plan price and plan type is present", () => {
    renderStep4();

    const planPriceText = `$${props.selectedPlanPrice}/${
      props.planType === "monthly" ? "mo" : "yr"
    }`;

    expect(screen.queryByText(planPriceText)).not.toBeNull();
  });

  it("Verify that addon names are present", () => {
    renderStep4();

    // Check if each addon name is present
    selectedAddOns.forEach((addon) => {
      const addonNameElement = screen.getByText(addon.name);
      expect(addonNameElement).toBeInTheDocument();
    });
  });

  // Your test case for addon prices with /mo and /yr
  it("Verifies that addon prices are displayed correctly with /mo", () => {
    // Set the plan type to "monthly" for this test
    props.planType = "monthly";
    renderStep4();

    // Loop through each selected addon and check if its price is displayed with /mo
    selectedAddOns.forEach((addon) => {
      const expectedPriceText = `$${addon.price.monthly}/mo`;
      const addonPriceElement = screen.queryByText(expectedPriceText);
      expect(addonPriceElement).not.toBeNull();
    });
  });

  it("Verifies that addon prices are displayed correctly with /yr", () => {
    // Set the plan type to "yearly" for this test
    props.planType = "yearly";
    renderStep4();

    // Loop through each selected addon and check if its price is displayed with /yr
    selectedAddOns.forEach((addon) => {
      const expectedPriceText = `$${addon.price.yearly}/yr`;
      const addonPriceElement = screen.queryByText(expectedPriceText);
      expect(addonPriceElement).not.toBeNull();
    });
  });

  it("Verifies total price is displayed with /mo for monthly", () => {
    renderStep4();
    const totalText = screen.getByText("Total ( per month)");
    expect(totalText).toBeInTheDocument();
  });

  it("Renders with a className equal to the variant", () => {
    const { container } = renderStep4();
    expect(container.getElementsByClassName("total").length).toBe(1);
  });

  // Test for yearly plan
  it("displays the correct totalSelectedPrice for yearly plan", () => {
    // Define the test data for a yearly plan
    const selectedPlanPrice = 5;
    props.planType = "yearly"; // Set the planType to "yearly" for this test

    // Calculate the expected totalSelectedPrice based on the test data
    const expectedTotalPrice = selectedAddOns.reduce((total, addon) => {
      return total + addon.price.yearly;
    }, selectedPlanPrice);

    // Render the Step4 component with the test data
    renderStep4();

    // Find the total element by its data-testid
    const totalElement = screen.getByTestId("total");

    // Assert that the displayed totalSelectedPrice matches the expectedTotalPrice for "yearly" plans
    expect(totalElement).toHaveTextContent(`+$${expectedTotalPrice}/yr`);
  });

  // Test for yearly plan
  it("displays the correct totalSelectedPrice for monthly plan", () => {
    // Define the test data for a yearly plan
    const selectedPlanPrice = 5;
    props.planType = "monthly"; // Set the planType to "yearly" for this test

    // Calculate the expected totalSelectedPrice based on the test data
    const expectedTotalPrice = selectedAddOns.reduce((total, addon) => {
      return total + addon.price.monthly;
    }, selectedPlanPrice);

    // Render the Step4 component with the test data
    renderStep4();

    // Find the total element by its data-testid
    const totalElement = screen.getByTestId("total");

    // Assert that the displayed totalSelectedPrice matches the expectedTotalPrice for "yearly" plans
    expect(totalElement).toHaveTextContent(`+$${expectedTotalPrice}/mo`);
  });
});

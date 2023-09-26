import Step4, { Step4Props } from "./Step4";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AddonsProvider, useAddonsContext } from "../../context/AddonsContext";
import { Addon } from "../../context/AddonsContext"; // Import the Addon type

// Mock the useAddonsContext hook to return selected addons
jest.mock("../../context/AddonsContext", () => ({
  ...jest.requireActual("../../context/AddonsContext"),
  useAddonsContext: jest.fn(),
}));

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
      { name: "Addon 1", description: "Description 1", price: { monthly: 2, yearly: 20 } },
      { name: "Addon 2", description: "Description 2", price: { monthly: 3, yearly: 30 } },
    ];

    // Mock the useAddonsContext hook to return the selected addons
    (useAddonsContext as jest.Mock).mockReturnValue({ selectedAddOns });
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
});

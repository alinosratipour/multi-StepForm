import Step4, { Step4Props } from "./Step4";
import "@testing-library/jest-dom";
import { getByText, render, screen, waitFor } from "@testing-library/react";
import { AddonsProvider } from "../../context/AddonsContext";
import { addOns } from "../../data/addOns";
import { debug } from "console";

describe("Step 4 Component", () => {
  let props: Step4Props;

  beforeEach(() => {
    props = {
      selectedPlanPrice: 5, // Set the selected plan price
      planType: "monthly", // Set the plan type
      selectedPlanName: "Test Plan",
      onJumpToStep2: jest.fn(),
    };
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
    props.selectedPlanName = "Test Plan"; // Set the selected plan name
    renderStep4();
    const planNameElement = screen.getByText(props.selectedPlanName, {
      exact: false,
    });

    expect(planNameElement).toBeInTheDocument();
  });

  it("Verify that selected plan type is present", () => {
    props.planType = "Yearly"; // Set the selected plan name
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
});

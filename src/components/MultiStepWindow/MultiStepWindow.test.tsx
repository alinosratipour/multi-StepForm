import { render, fireEvent, waitFor } from "@testing-library/react";
import MultiStepWindow from "./MultiStepWindow";
import "@testing-library/jest-dom";

jest.mock("../../context/AddonsContext", () => ({
  useAddonsContext: jest.fn(() => ({
    selectedAddOns: [],
    setSelectedAddOns: jest.fn(),
  })),
}));

describe("MultiStepWindow component", () => {
  it("renders Step1 component", () => {
    const { getByText } = render(<MultiStepWindow />);
    expect(getByText("YOUR INFO")).toBeInTheDocument();
  });

  it("renders Step2 component", () => {
    const { getByText } = render(<MultiStepWindow />);
    expect(getByText("SELECTED PLAN")).toBeInTheDocument();
  });

  it("renders Step3 component", () => {
    const { getByText } = render(<MultiStepWindow />);
    expect(getByText("ADD-ONS")).toBeInTheDocument();
  });

  it("renders Step4 component", () => {
    const { getByText } = render(<MultiStepWindow />);
    expect(getByText("SUMMARY")).toBeInTheDocument();
  });

  it("renders confirmation message", () => {
    const { getByText } = render(<MultiStepWindow />);
    expect(getByText("Thank you!")).toBeInTheDocument();
  });

  describe("verify steps", () => {
    it("should go to step 2 when Next Step button is clicked", async () => {
      const { getByText } = render(<MultiStepWindow />);

      // Check if the initial step is 1
      expect(getByText("YOUR INFO")).toBeInTheDocument();

      // Find and click the Next Step button
      const nextStepButton = getByText("Next Step");
      fireEvent.click(nextStepButton);

      // Wait for the component to update (you can adjust the wait time as needed)
      await waitFor(() => {
        // Check if the current step is now 2
        expect(getByText("SELECTED PLAN")).toBeInTheDocument();
      });
    });
  });
});

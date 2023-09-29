import {
  render,
  fireEvent,
  waitFor,
  RenderResult,
} from "@testing-library/react";
import MultiStepWindow from "./MultiStepWindow";
import "@testing-library/jest-dom";

jest.mock("../../context/AddonsContext", () => ({
  useAddonsContext: jest.fn(() => ({
    selectedAddOns: [],
    setSelectedAddOns: jest.fn(),
  })),
}));

describe("verify steps", () => {
  let renderResult: RenderResult; // Specify the type here
  beforeEach(() => {
    renderResult = render(<MultiStepWindow />);
  });

  it("should start at the initial step", () => {
    const { getByText } = renderResult;
    expect(getByText("YOUR INFO")).toBeInTheDocument();
  });

  it("should go to step 2 when Next Step button is clicked", async () => {
    const { getByTestId, getByText } = renderResult;
    // Check if the initial step is 1
    expect(getByText("YOUR INFO")).toBeInTheDocument();
    // Find and click the Next Step button
    const nextStepButton = getByTestId("next-button");
    fireEvent.click(nextStepButton);

    // Wait for the component to update
    await waitFor(() => {
      expect(getByText("SELECTED PLAN")).toBeInTheDocument(); // Check if the current step is now 2
    });
  });

  it("should go to step 3when Next Step button is clicked", async () => {
    const { getByTestId, getByText } = renderResult;
    expect(getByText("SELECTED PLAN")).toBeInTheDocument();
    const nextStepButton = getByTestId("next-button");
    fireEvent.click(nextStepButton);

    await waitFor(() => {
      expect(getByText("ADD-ONS")).toBeInTheDocument();
    });
  });

  it("should go to step 4 when Next Step button is clicked", async () => {
    const { getByTestId, getByText } = renderResult;
    expect(getByText("ADD-ONS")).toBeInTheDocument();
    const nextStepButton = getByTestId("next-button");
    fireEvent.click(nextStepButton);

    await waitFor(() => {
      expect(getByText("SUMMARY")).toBeInTheDocument();
    });
  });

  it("renders confirmation message when Confirm button is clicked", async () => {
    const { getByTestId, getByText } = renderResult;

    // Find the Confirm button by its id
    const confirmButton = getByTestId("confirm-button");

    // Simulate a click on the Confirm button
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(getByText("Thank you!")).toBeInTheDocument();
    });
  });
});

import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ToggleSwitch from "./ToggleSwitch";

describe("ToggleSwitch Component", () => {
  it("should toggle correctly", async () => {
    render(<ToggleSwitch />);
    const toggleSwitch = screen.getByTestId("toggle-switch");

    // Verify that the initial state is unchecked
    expect(toggleSwitch).not.toBeChecked();

    // Simulate a click event on the toggle switch
    fireEvent.click(toggleSwitch);

    // Use waitFor to wait for the state to update
    await waitFor(() => {
      // Verify that the state is now checked
      expect(toggleSwitch).toBeChecked();
    });

    // Simulate another click event to toggle it off
    fireEvent.click(toggleSwitch);

    // Use waitFor again to wait for the state to update
    await waitFor(() => {
      // Verify that the state is now unchecked
      expect(toggleSwitch).not.toBeChecked();
    });
  });
});

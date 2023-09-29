import Step3, { Step3Props } from "./Step3";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { AddonsProvider } from "../../context/AddonsContext";
import { addOns } from "../../data/addOns";

describe("Step3 Component", () => {
  let props: Step3Props;

  beforeEach(() => {
    props = {
      planType: "",
      toggleState: false,
      selectedCard: 0,
    };
  });

  const renderStep3 = () =>
    render(
      <AddonsProvider>
        <Step3 {...props} />
      </AddonsProvider>
    );

  it("verifies that step 3 header presence on the page", () => {
    const { getByText } = renderStep3();
    expect(getByText("Pick add-ons")).toBeInTheDocument();
  });

  it("verifies that the checkbox is present for each add-on and all are unselected", () => {
    renderStep3();

    // Get all checkboxes
    const checkboxes = screen.getAllByRole("checkbox");

    // Assert that at least one checkbox is present
    expect(checkboxes.length).toBeGreaterThan(0);
    // Assert that none of the checkboxes are checked
    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });
  });

  it("verifies that Cards are rendered correctly", () => {
    renderStep3();
    waitFor(() => {
      addOns.forEach((addon) => {
        const elementsWithPrice = screen.getAllByText(
          `+$${addon.price.yearly}/yr`
        );
        // Locate the card that corresponds to the addon
        const card = screen.getByTestId(`addon-card-${addon.name}`);
        // Ensure that the card is present
        expect(card).toBeInTheDocument();

        // Verify card content: title, description, and price
        if (card) {
          // Add a null check
          const cardName = card.querySelector(".add-on-name");
          const cardDescription = card.querySelector(".add-on-desciption");
          const cardPrice = card.querySelector(".add-on-price");

          // Assert that card content is correct
          expect(cardName).toHaveTextContent(addon.name);
          expect(cardDescription).toHaveTextContent(addon.description);
          expect(cardPrice).toHaveTextContent(`+$${addon.price.yearly}/yr`);
          expect(elementsWithPrice.length).toBeGreaterThan(0);
        }
      });
    });
  });
});

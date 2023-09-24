import React, { useEffect } from "react";
import PlanCard from "../UILiberary/ToggleSwitch/PlanCard/PlanCard";
import { addOns } from "../../data/addOns";
import { useAddonsContext } from "../../context/AddonsContext";
import "./Step3.scss";

interface Step3Props {
  planType: string;
  toggleState: boolean;
  selectedCard: number;
}

interface Addon {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

const Step3: React.FC<Step3Props> = ({ planType }) => {
  const { selectedAddOns, setSelectedAddOns } = useAddonsContext();

  // Load selected add-ons from local storage on component mount
  useEffect(() => {
    const storedAddOns = localStorage.getItem("selectedAddOns");
    if (storedAddOns) {
      setSelectedAddOns(JSON.parse(storedAddOns));
    }
  }, [setSelectedAddOns]);

  // Update selected add-ons and store in local storage
  const toggleAddOnSelection = (selectedAddon: Addon) => {
    const isSelected = selectedAddOns.some(
      (addon) => addon.name === selectedAddon.name
    );

    let updatedSelection;

    if (isSelected) {
      // If the add-on is already selected, remove it
      updatedSelection = selectedAddOns.filter(
        (addon) => addon.name !== selectedAddon.name
      );
    } else {
      // If the add-on is not selected, add it
      updatedSelection = [...selectedAddOns, selectedAddon];
    }

    setSelectedAddOns(updatedSelection);

    // Store the updated selection in local storage
    localStorage.setItem("selectedAddOns", JSON.stringify(updatedSelection));
  };

  return (
    <div className="step3-container">
      <h1 className="step3-header">Pick add-ons</h1>
      <p className="step3-subheader">Add-ons help enhance your gaming experience.</p>

      <div className="add-on-container">
        {addOns.map((item) => {
          const price =
            planType === "monthly" ? item.price.monthly : item.price.yearly;
          const formattedPrice =
            planType === "monthly" ? `+$${price}/mo` : `+$${price}/yr`;
          const isSelected = selectedAddOns && selectedAddOns.some(
            (addon) => addon.name === item.name
          );
          const isHighlighted = isSelected;
//const isSelected = selectedAddOns && selectedAddOns.some(/
          return (
            <PlanCard
              key={item.name}
              title={item.name}
              description={item.description}
              price={formattedPrice}
              onClick={() => toggleAddOnSelection(item)}
              colorscheme={isHighlighted ? "primary" : undefined}
            >
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isSelected}
                  onChange={() => toggleAddOnSelection(item)}
                />
              </div>
            </PlanCard>
          );
        })}
      </div>
    </div>
  );
};

export default Step3;

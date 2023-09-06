import React, { useEffect } from "react";
import PlanCard from "../UILiberary/ToggleSwitch/PlanCard/PlanCard";
import { addOns } from "../../data/addOns.js";
import { useAddonsContext } from "../../context/AddonsContext"

interface Setep3Props {
  planType: string;
  toggleState: boolean;
  selectedCard: number;
}

const Setep3: React.FC<Setep3Props> = ({
  planType,

}) => {
  const { selectedAddOns, setSelectedAddOns } = useAddonsContext(); // Access the context

  // Load selected add-ons from local storage on component mount
  useEffect(() => {
    const storedAddOns = localStorage.getItem("selectedAddOns");
    if (storedAddOns) {
      setSelectedAddOns(JSON.parse(storedAddOns));
    }
  }, [setSelectedAddOns]);

  // Update selected add-ons and store in local storage
  const toggleAddOnSelection = (addOnName: string) => {
    const updatedSelection = selectedAddOns.includes(addOnName)
      ? selectedAddOns.filter((name) => name !== addOnName)
      : [...selectedAddOns, addOnName];

    setSelectedAddOns(updatedSelection);

    localStorage.setItem("selectedAddOns", JSON.stringify(updatedSelection));
  };

  return (
    <div className="title">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="add-on-container">
        {addOns.map((item) => {
          const price =
            planType === "monthly" ? item.price.monthly : item.price.yearly;
          const formattedPrice =
            planType === "monthly" ? `+$${price}/mo` : `+$${price}/yr`;
          const isChecked = selectedAddOns.includes(item.name);
          const isHighlighted = isChecked;

          return (
            <PlanCard
              key={item.name}
              title={item.name}
              description={item.description}
              price={formattedPrice}
              onClick={() => toggleAddOnSelection(item.name)}
              colorscheme={isHighlighted ? "primary" : undefined}
            >
              <div className="checkbox-container">
                {/* <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={isChecked}
                    onChange={() => toggleAddOnSelection(item.name)}
                  />
                  <span className="checkmark"></span>
                </label> */}
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={isChecked}
                    onChange={() => toggleAddOnSelection(item.name)}
                  />
              </div>
            </PlanCard>
          );
        })}
      </div>
    </div>
  );
};

export default Setep3;

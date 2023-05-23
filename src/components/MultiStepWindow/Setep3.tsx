import PlanCard from "../UILiberary/ToggleSwitch/PlanCard/PlanCard";
import { addOns } from "../../data/addOns.js";
import { useState, useEffect } from "react";

interface Setep3Props {
  planType: string;
}

const Setep3: React.FC<Setep3Props> = ({ planType }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  // Load selected add-ons from local storage on component mount
  useEffect(() => {
    const storedAddOns = localStorage.getItem("selectedAddOns");
    if (storedAddOns) {
      setSelectedAddOns(JSON.parse(storedAddOns));
    }
  }, []);

  // Update selected add-ons and store in local storage
  const handleAddOnClick = (addOnName: string) => {
    setSelectedAddOns((prevSelectedAddOns) => {
      const updatedAddOns = prevSelectedAddOns.includes(addOnName)
        ? prevSelectedAddOns.filter((name) => name !== addOnName)
        : [...prevSelectedAddOns, addOnName];

      localStorage.setItem("selectedAddOns", JSON.stringify(updatedAddOns));
      return updatedAddOns;
    });
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
              onClick={() => handleAddOnClick(item.name)}
              colorscheme={isHighlighted ? "primary" : undefined}
            >
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={isChecked}
                    onChange={() => handleAddOnClick(item.name)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </PlanCard>
          );
        })}
      </div>
    </div>
  );
};

export default Setep3;

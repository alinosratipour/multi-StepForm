import PlanCard from "../UILiberary/ToggleSwitch/PlanCard/PlanCard";
import { addOns } from "../../data/addOns.js";
import { Dispatch, SetStateAction, useState } from "react";

interface Setep3Props {
  planType: string;
  toggleState: boolean;
  selectedCard: number;
  setSelectedCard: Dispatch<SetStateAction<number>>;
}

const Setep3: React.FC<Setep3Props> = ({
  planType,
  selectedCard,
  setSelectedCard,
}) => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleAddOnClick = (addOnName: string, cardIndex: number) => {
    setSelectedCard(cardIndex);
    setSelectedAddOns((prevSelectedAddOns) => {
      if (prevSelectedAddOns.includes(addOnName)) {
        return prevSelectedAddOns.filter((name) => name !== addOnName);
      } else {
        return [...prevSelectedAddOns, addOnName];
      }
    });
  };

  return (
    <div className="title">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="add-on-container">
        {addOns.map((item, index) => {
          const price =
            planType === "monthly" ? item.price.monthly : item.price.yearly;
          const formattedPrice =
            planType === "monthly" ? `+$${price}/mo` : `+$${price}/yr`;
          const isChecked = selectedAddOns.includes(item.name);
          const isHighlighted = index === selectedCard || isChecked;
          return (
          
            <PlanCard
              key={item.name}
              title={item.name}
              description={item.description}
              price={formattedPrice}
              onClick={() => handleAddOnClick(item.name, index)}
            //  colorscheme={index === selectedCard && "primary"}
              colorscheme={isHighlighted ? "primary" : undefined}
            >
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={isChecked}
                    onClick={() => handleAddOnClick(item.name, index)}
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

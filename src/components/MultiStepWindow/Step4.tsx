import React from "react";
import { useAddonsContext } from "../../context/AddonsContext"; // Import the context
import "./Step4.scss";

interface Step4Props {
  selectedPlanPrice: number;
  planType: string;
  selectedPlanName: string;
  onJumpToStep2: () => void;
}

const Step4: React.FC<Step4Props> = ({
  selectedPlanPrice,
  planType,
  selectedPlanName,
  onJumpToStep2,
}) => {
  const { selectedAddOns } = useAddonsContext(); // Access the context

  return (
    <div className="summary">
      <h1>Finishing up</h1>
      <p className="desciption">
        Double-check everything looks OK before confirming.
      </p>
      <div className="selected-addons">
        <div className="planName">
          <div className="link-wrapper">
            <div>
              {selectedPlanName} ({planType === "monthly" ? "Monthly" : "Yearly"})
            </div>
            <a className="link" onClick={onJumpToStep2}>
              Change
            </a>
          </div>
        
        </div>
        <div className="price">
          ${selectedPlanPrice}/{planType === "monthly" ? "mo" : "yr"}
        </div>
      </div>
      
      {/* Display selected add-ons */}
      <div className="item-name">
       
        <div className="addons-list">
          {selectedAddOns.map((addOn) => (
            <span key={addOn}>{addOn}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step4;

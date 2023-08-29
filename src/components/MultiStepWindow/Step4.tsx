import React from "react";
import "./Step4.scss";

interface Step4Props {
  selectedPlanPrice: number;
  planType: string;
  selectedPlanName: string; // Receive the selected plan name as a prop
  onJumpToStep2: () => void; // New prop for jump back functionality
}

const Step4: React.FC<Step4Props> = ({
  selectedPlanPrice,
  planType,
  selectedPlanName,
  onJumpToStep2,
}) => {
  return (
    <div className="summary">
      <h1>Finishing up</h1>
      <p className="desciption">Double-check everything looks OK before confirming.</p>
      <div className="selected-addons">
        <div className="planName">
        
          <div className="link-wrapper">
           <div >{selectedPlanName} ({planType === "monthly" ? "Monthly" : "Yearly"}){" "}</div> 
            <a className="link" onClick={onJumpToStep2}>Change</a>
          </div>
        </div>

        <div className="price">
          ${selectedPlanPrice}/{planType === "monthly" ? "mo" : "yr"}
        </div>
      </div>
      <div className="total-price"></div>
    </div>
  );
};

export default Step4;

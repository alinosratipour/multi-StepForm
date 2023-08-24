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
      <p>Double-check everything looks OK before confirming.</p>
      <div className="selected-addons">
        <div className="planName">
        
          <span>
            {selectedPlanName}({planType === "monthly" ? "Monthly" : "Yearly"}){" "}
            <a className="back" onClick={onJumpToStep2}>change</a>
          </span>
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

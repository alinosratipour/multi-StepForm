import React from "react";
import "./Step4.scss";
import { Link } from "react-router-dom";

interface Step4Props {
  selectedPlanPrice: number;
  planType: string;
  selectedPlanName: string; // Receive the selected plan name as a prop

}

const Step4: React.FC<Step4Props> = ({
  selectedPlanPrice,
  planType,
  selectedPlanName,
}) => {
  return (
    <div className="summary">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="selected-addons">
        <div className="planName">
          {" "}
          <span>
            {selectedPlanName}({planType === "monthly" ? "Monthly" : "Yearly"}){" "}
          </span>
        </div>
        <Link to="/step2">change</Link>
        <div className="price">
          ${selectedPlanPrice}/{planType === "monthly" ? "mo" : "yr"}
        </div>
      </div>
      <div className="total-price"></div>
    </div>
  );
};

export default Step4;

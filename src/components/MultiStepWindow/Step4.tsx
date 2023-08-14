import React from "react";

interface Step4Props {
  selectedPlanPrice: number;
  planType: string;
}

const Step4: React.FC<Step4Props> = ({ selectedPlanPrice, planType }) => {
  return (
    <div className="summary">
      <h1>Step 4: SUMMARY</h1>
      <div className="selected-addons">
        {/* ... (display selected add-ons, if applicable) */}
      </div>
      <div className="total-price">
        <p>Selected Plan: {planType === "monthly" ? "Monthly" : "Yearly"}</p>
        <p>Total Price: {planType === "monthly" ? "+$" : "+$"}{selectedPlanPrice}</p>
      </div>
    </div>
  );
};

export default Step4;

import React from "react";

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
        {/* ... (display selected add-ons, if applicable) */}
      </div>
      <div className="total-price">
        <p>
          {selectedPlanName}({planType === "monthly" ? "Monthly" : "Yearly"}){" "}
        </p>
        <p>
          Total Price: {planType === "monthly" ? "+$" : "+$"}
          {selectedPlanPrice}
        </p>
        <p>Plan Name: {selectedPlanName}</p>{" "}
        {/* Display the selected plan name */}
      </div>
    </div>
  );
};

export default Step4;

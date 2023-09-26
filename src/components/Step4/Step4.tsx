import React from "react";
import { useAddonsContext } from "../../context/AddonsContext";
import "./Step4.scss";

export interface Step4Props {
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
  const { selectedAddOns } = useAddonsContext();

  // Calculate the total price by summing up selected add-ons and selected plan price
  const totalSelectedPrice =selectedAddOns ? selectedAddOns.reduce((total, addon) => {
    return (
      total +
      (planType === "monthly" ? addon.price.monthly : addon.price.yearly)
    );
  }, selectedPlanPrice): 0;

  return (
    <div className="summary">
      <h1 className="step4-header">Finishing up</h1>
      <p className="step4-subheader">
        Double-check everything looks OK before confirming.
      </p>
      <div className="selected-addons">
        <div className="planName">
          <div className="link-wrapper">
            <div className="planPrice">
              <div>
                {selectedPlanName} (
                {planType === "monthly" ? "Monthly" : "Yearly"})
              </div>
              <div className="plan-price">
               ${selectedPlanPrice}/
                {planType === "monthly" ? "mo" : "yr"}
              </div>
            </div>
            <a className="link" onClick={onJumpToStep2}>
              Change
            </a>
            <hr className="line"></hr>
            {/* Display selected add-ons */}
            <div className="item-name">
              <div className="addons-list">
                {selectedAddOns && selectedAddOns.map((addon) => (
                  <div key={addon.name} className="addonContent">
                    <span className="addon-name">{addon.name}</span>
                    <span>
                      <span>
                        $
                        {planType === "monthly"
                          ? `${addon.price.monthly}/mo`
                          : `${addon.price.yearly}/yr`}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Display the total price below */}
      <div className="price-container">
        <span className="total-text">
          Total ( {planType === "monthly" ? "per month" : "per year"})
        </span>
        <span className="total">
          +${totalSelectedPrice}/{planType === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
};

export default Step4;

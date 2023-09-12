import React from "react";
import { useAddonsContext } from "../../context/AddonsContext";
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
  const { selectedAddOns } = useAddonsContext();

  return (
    <div className="summary">
      <h1>Finishing up</h1>
      <p className="description">
        Double-check everything looks OK before confirming.
      </p>
      <div className="selected-addons">
        <div className="planName">
          <div className="link-wrapper">
            <div>
              {selectedPlanName} (
              {planType === "monthly" ? "Monthly" : "Yearly"})
            </div>
            <a className="link" onClick={onJumpToStep2}>
              Change
            </a>

            {/* Display selected add-ons */}
            <div className="item-name">
              <div className="addons-list">
                {selectedAddOns.map((addon) => (
                  <div key={addon.name}>
                    <span>{addon.name}</span>
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
        <div className="price">
          ${selectedPlanPrice}/{planType === "monthly" ? "mo" : "yr"}
        </div>
      </div>
    </div>
  );
};

export default Step4;

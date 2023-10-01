import { ChangeEvent, useEffect, Dispatch, SetStateAction } from "react";
import { If } from "tsx-control-statements/components";
import Card from "../UILiberary/Card/Card";
import { plans } from "../../data/planData";
import ToggleSwitch from "../UILiberary/ToggleSwitch/ToggleSwitch";
import "./Step2.scss";

export interface Step2Props {
  selectedCard: number;
  setSelectedCard: Dispatch<SetStateAction<number>>;
  planType: string; // Add planType to the interface
  onPlanTypeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleState: boolean;
  setToggleState: Dispatch<SetStateAction<boolean>>;
  setPlanPrice: Dispatch<SetStateAction<number>>;
  setSelectedPlanName: Dispatch<SetStateAction<string>>;
}

const Step2: React.FC<Step2Props> = ({
  selectedCard,
  toggleState,
  setToggleState,
  setSelectedCard,
  onPlanTypeChange,
  setPlanPrice,
  setSelectedPlanName,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToggleState(e.target.checked);
    onPlanTypeChange(e);
    localStorage.setItem("toggleState", e.target.checked ? "true" : "false");
  };

  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex);
  };

  const selectedPlan = plans[selectedCard];
  const selectedPlanPrice = toggleState
    ? selectedPlan.price.yearly
    : selectedPlan.price.monthly;

  useEffect(() => {
    localStorage.setItem("selectedCard", String(selectedCard));
  }, [selectedCard]);

  useEffect(() => {
    const storedSelectedCard = localStorage.getItem("selectedCard");
    if (storedSelectedCard) {
      setSelectedCard(parseInt(storedSelectedCard));
    }
  }, [setSelectedCard]);

  useEffect(() => {
    const storedToggleState = localStorage.getItem("toggleState");
    if (storedToggleState) {
      setToggleState(storedToggleState === "true");
    }
  }, [setToggleState]);

  useEffect(() => {
    localStorage.setItem("toggleState", String(toggleState));
    setPlanPrice(selectedPlanPrice);
    setSelectedPlanName(selectedPlan.name);
  }, [selectedCard, toggleState, setPlanPrice, setSelectedPlanName]);

  return (
    <div className="step2-container">
      <h1 className="step2-header">Select your plan</h1>
      <p className="step2-sub-header">
        You have the option of monthly or yearly billing.
      </p>
      <div className="cardContainer">
        {plans.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            icon={item.img}
            subtitle={`${
              !toggleState
                ? `$${item.price.monthly}/mo`
                : `$${item.price.yearly}/yr`
            }`}
            colorscheme={index === selectedCard && "primary"}
            onClick={() => handleCardClick(index)}
            stackContent={true}
          >
            {toggleState && <span className="yearlyOffer">2 months free</span>}
          </Card>
        ))}
      </div>

      <div className="toggleContainer">
        <div
          className={`monthly-option ${toggleState && "yearly-option"}`}
          data-testid="monthly-toggle"
        >
          Monthly
        </div>
        <ToggleSwitch onChange={handleChange} isChecked={toggleState} />
        <div
          className={`monthly-option ${!toggleState && "yearly-option"}`}
          data-testid="yearly-toggle"
        >
          Yearly
        </div>
      </div>
    </div>
  );
};

export default Step2;

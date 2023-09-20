import { ChangeEvent, useEffect, Dispatch, SetStateAction } from "react";
import { If } from "tsx-control-statements/components";
import Card from "../UILiberary/Card/Card";
import Icon from "../../assets/images/icon-arcade.svg";
import AdvancIcon from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";
import ToggleSwitch from "../UILiberary/ToggleSwitch/ToggleSwitch";
import "../MultiStepWindow/MultiStepWindow.scss";
import "./Step2.scss";
const plans = [
  {
    name: "Arcade",
    img: Icon,
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    name: "Advanced",
    img: AdvancIcon,
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    name: "Pro",
    img: IconPro,
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];

interface Step2Props {
  selectedCard: number;
  setSelectedCard: Dispatch<SetStateAction<number>>;
  planType: string;
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
  setPlanPrice, // Receive the selected plan price as a prop
  setSelectedPlanName,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToggleState(e.target.checked);
    onPlanTypeChange(e);
  };

  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex);
  };

  // Get the selected plan price
  const selectedPlan = plans[selectedCard];
  toggleState ? selectedPlan.price.yearly : selectedPlan.price.monthly;

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
  }, [toggleState]);

  useEffect(() => {
    // Calculate the selected plan price based on the plan type (monthly or yearly)
    const selectedPlan = plans[selectedCard];
    const selectedPlanPrice = toggleState
      ? selectedPlan.price.yearly
      : selectedPlan.price.monthly;

    // Set the selected plan's price in the state
    setPlanPrice(selectedPlanPrice);
    setSelectedPlanName(selectedPlan.name);
  }, [selectedCard, toggleState, setPlanPrice, setSelectedPlanName]);
  return (
    <div >
      <div className="step2-container">
        <h1 className="step2-header">Select your plan</h1>
        <p className="step2-sub-header">You have the option of monthly or yearly billing.</p>
        <div className="cardContaier">
          {plans.map((item, index) => {
            return (
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
              >
                <If condition={toggleState}>
                  <span className="yearlyOffer">2 months free</span>
                </If>
              </Card>
            );
          })}
        </div>

        <div className="toggleContainer">
          <div className={`on ${toggleState && "off"}`}>Monthly</div>
          <ToggleSwitch onChange={handleChange} isChecked={toggleState} />
          <div className={`on ${!toggleState && "off"}`}>Yearly</div>
        </div>
      </div>
    </div>
  );
};

export default Step2;

import { ChangeEvent, useState } from "react";
import { If } from "tsx-control-statements/components";
import Card from "../UILiberary/Card/Card";
import Icon from "../../assets/images/icon-arcade.svg";
import AdvancIcon from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";
import ToggleSwitch from "../UILiberary/ToggleSwitch/ToggleSwitch";
import "./MultiStepWindow.scss";

const Step2 = () => {
  const [toggled, setToggled] = useState(false);
  const [selectedCard, setSelectedCard] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToggled(e.target.checked);
  };

  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex);
    console.log(cardIndex);
  };

  return (
    <div>
      <div className="title">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="cardContaier">
          <Card
            title="Arcade"
            icon={Icon}
            subtitle={`${!toggled ? "$9/mo" : "$90/yr"}`}
            colorscheme={selectedCard === 1 && "primary"}
            onClick={() => handleCardClick(1)}
          >
            <If condition={toggled === true}>
              <span className="yearlyOffer">2 months free</span>
            </If>
          </Card>

          <Card
            title="Advance"
            icon={AdvancIcon}
            subtitle={`${!toggled ? "$12/mo" : "$120/yr"}`}
            colorscheme={selectedCard === 2 && "primary"}
            onClick={() => handleCardClick(2)}
          >
            <If condition={toggled === true}>
              <span className="yearlyOffer">2 months free</span>
            </If>
          </Card>
          <Card
            title="Pro"
            icon={IconPro}
            subtitle={`${!toggled ? "$15/mo" : "$150/yr"}`}
            colorscheme={selectedCard === 3 && "primary"}
            onClick={() => handleCardClick(3)}
          >
            <If condition={toggled === true}>
              <span className="yearlyOffer">2 months free</span>
            </If>
          </Card>
        </div>
        <div className="toggleContainer">
          <div className={`on ${toggled && "off"}`}>Monthly</div>
          <ToggleSwitch onChange={handleChange} />
          <div className={`on ${!toggled && "off"}`}>Yearly</div>
        </div>
      </div>
    </div>
  );
};

export default Step2;

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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToggled(e.target.checked);
  };

  return (
    <div>
      <div className="title">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="cardContaier">
          <Card>
            <img src={Icon} className="image" />
            <div className="titleWrapper">
              <span className="CardTitle">Arcade</span>
              <span className="subtitle">{`${
                !toggled ? "$9/mo" : "$90/yr"
              }`}</span>
              <If condition={toggled === true}>
                <span className="yearlyOffer">2 months free</span>
              </If>
            </div>
          </Card>

          <Card>
            <img src={AdvancIcon} className="image" />
            <div className="titleWrapper">
              <span className="CardTitle">Advance</span>
              <span className="subtitle">{`${
                !toggled ? "$12/mo" : "$120/yr"
              }`}</span>
              <If condition={toggled === true}>
                <span className="yearlyOffer">2 months free</span>
              </If>
            </div>
          </Card>
          <Card>
            <img src={IconPro} className="image" />
            <div className="titleWrapper">
              <span className="CardTitle">Pro</span>

              <span className="subtitle">{`${
                !toggled ? "$15/mo" : "$150/yr"
              }`}</span>
              <If condition={toggled === true}>
                <span className="yearlyOffer">2 months free</span>
              </If>
            </div>
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

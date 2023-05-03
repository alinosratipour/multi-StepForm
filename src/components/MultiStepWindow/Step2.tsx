import Card from "../UILiberary/Card/Card";
import Icon from "../../assets/images/icon-arcade.svg";
import AdvancIcon from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";
import ToggleSwitch from "../UILiberary/ToggleSwitch/ToggleSwitch";
import { ChangeEvent, useState } from "react";
import { If } from "tsx-control-statements/components";
import "./MultiStepWindow.scss";

const Step2 = () => {
  const [toggled, setToggled] = useState(false);
  const [option, setOption] = useState(["Monthly"]);
  const [option2, setOption2] = useState(["Yearly"]);
  const ali = ["Monthly", "Yearly"];
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToggled(e.target.checked);
    //setOption("Monthly");
  };

  console.log(toggled);

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
              <span className="subtitle">$9/mo</span>
            </div>
          </Card>

          <Card>
            <img src={AdvancIcon} className="image" />
            <div className="titleWrapper">
              <span className="CardTitle">Advance</span>
              <span className="subtitle">$12/mo</span>
            </div>
          </Card>
          <Card>
            <img src={IconPro} className="image" />
            <div className="titleWrapper">
              <span className="CardTitle">Pro</span>
              <span className="subtitle">$15/mo</span>
            </div>
          </Card>
        </div>
        <div className="toggleContainer">
       
            <div className={`on ${toggled && "off"}`}>{option}</div>
         

          <ToggleSwitch onChange={handleChange} />

          <div className={`on ${!toggled && "off"}`}>
            {option2}
          </div>
          {/* <div className={`off ${toggled ? "on" : "off"}`}>Yearly</div> */}
          {/* <p>the switch is {toggled ? "on" : "off"}</p> */}

          {/* className={`stepBlock ${selected ? "selected" : ""}`} */}
        </div>
      </div>
    </div>
  );
};

export default Step2;

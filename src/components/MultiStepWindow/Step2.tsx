import Card from "../generics/Card/Card";
import Icon from "../../assets/images/icon-arcade.svg";
import AdvancIcon from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";

const Step2 = () => {
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
      </div>
    </div>
  );
};

export default Step2;

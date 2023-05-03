import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./ToggleSwitch.scss";

interface Props {
  isChecked?: boolean;
  onChange?: () => void;
  children?:React.ReactNode;
 
}

const ToggleSwitch:React.FC<Props> = ({ isChecked, onChange,children }: Props) => {
 

  return (
    <div className="togleContainer">
      {/* <div className="left">Monthly</div> */}
      <label className="toggle-button">
        <input
          type="checkbox"
          onChange={onChange}
          checked={isChecked}
          role="switch"
        />
        <span className={`toggle-btn`}> </span>
      </label>
      {/* <div className="right">Yearly</div> */}
      {children}
    </div>
  );
};

export default ToggleSwitch;

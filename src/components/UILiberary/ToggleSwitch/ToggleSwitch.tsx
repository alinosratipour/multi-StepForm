import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from "react";
import "./ToggleSwitch.scss";

interface Props {
  isChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const ToggleSwitch: React.FC<Props> = ({
  isChecked,
  onChange,
  children,
}: Props) => {
  return (
    <div className="togleContainer">
      <label className="toggle-button">
        <input
          data-testid="toggle-switch" 
          type="checkbox"
          onChange={onChange}
          checked={isChecked}
          role="switch"
        />
        <span className={`toggle-btn`}> </span>
      </label>
      {children}
    </div>
  );
};

export default ToggleSwitch;

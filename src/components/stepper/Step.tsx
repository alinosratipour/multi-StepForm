import "./steper.scss";
import classNames from "classnames";
interface Props {
  stepInfo: string;
  index: number;
  stepNumber: string;
  updateStep: (p: number) => void;
  selected: boolean;
}

const Step = ({ stepInfo, index, stepNumber, updateStep, selected }: Props) => {
  return (
    <div className={`stepBlock ${selected ? "selected" : ""}`}>
      <div className={"circlWrapper"}>
        <div className="circle">{index + 1}</div>
      </div>
      <div>
        <div>
          <div className="StepsLabelWrapper">
            <span className="stepNumberText">{stepNumber}</span>{" "}
            <span className="stepInfo">{stepInfo}</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;

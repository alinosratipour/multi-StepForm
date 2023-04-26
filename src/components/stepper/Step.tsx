import "./steper.scss";

interface Props {
  stepInfo: string;
  index: number;
  stepNumber: string;
}

const Step = ({ stepInfo, index, stepNumber }: Props) => {
  return (
    <div className="stepBlock">
      <div className="circlWrapper">
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

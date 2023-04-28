import Step from "./Step";
import "./steper.scss";

interface Steps {
  [steps: string]: any;
}

const StepNavigation = ({ stepNumberArray,updateStep,currentStep }: Steps) => {
  return (
    <div className="steperWrapper">
      {Object.keys(stepNumberArray).map((key, index) => (
        <Step
          key={index}
          index={index}
          stepNumber={key}
          stepInfo={stepNumberArray[key]}
          updateStep={updateStep}
          selected={currentStep === index + 1}
        ></Step>
      ))}
    </div>
  );
};

export default StepNavigation;

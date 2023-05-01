import React, { useState } from "react";
import CustomButton from "../generics/Button/NewButton";
import "./MultiStepWindow.scss";
import "../stepper/steper.scss";
import StepNavigation from "../stepper/StepNavigation";
import { If } from "tsx-control-statements/components";
import Step1 from "./Step1";
import Step2 from "./Step2";

const MultiStepWindow = () => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const stepText = {
    "STEP 1": "YOUR INFO",
    "STEP 2": "SELECTED PLAN",
    "STEP 3": "ADD-ONS",
    "STEP 4": "SUMMARY",
  };

  const goBack = () => {
    if (currentStep <= 1) {
      currentStep === 1;
    } else {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="container">
      <div className="form-content">
        <div className="form-left-side">
          <StepNavigation
            stepNumberArray={stepText}
            currentStep={currentStep}
          ></StepNavigation>
        </div>
        <div className="form-right-side">
          <div className="form-header">
            <div className="form-text-fields-container">
              <If condition={currentStep === 1}>
                <Step1 />
              </If>
              <If condition={currentStep === 2}>
                <Step2 />
              </If>
            </div>
          </div>

          <div className="button-wrapper">
            
            <a onClick={() => goBack()} className="back">
              Go Back
            </a>

            <CustomButton
              colorscheme="primary"
              size="md"
              ref={ref}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next Step
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepWindow;

import React, { ChangeEvent, useState } from "react";
import CustomButton from "../UILiberary/Button/NewButton";
import "./MultiStepWindow.scss";
import "../stepper/steper.scss";
import StepNavigation from "../stepper/StepNavigation";
import { If } from "tsx-control-statements/components";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { validateInput } from "../../utils/validationUtils";
import { validationSchema } from "../../utils/validationSchema";
import { ZodError } from "zod";
import Step3 from "./Step3";
import Step4 from "./Step4";

// ### Primary

// - Marine blue: hsl(213, 96%, 18%)
// - Purplish blue: hsl(243, 100%, 62%)
// - Pastel blue: hsl(228, 100%, 84%)
// - Light blue: hsl(206, 94%, 87%)
// - Strawberry red: hsl(354, 84%, 57%)

// ### Neutral

// - Cool gray: hsl(231, 11%, 63%)
// - Light gray: hsl(229, 24%, 87%)
// - Magnolia: hsl(217, 100%, 97%)
// - Alabaster: hsl(231, 100%, 99%)
// - White: hsl(0, 0%, 100%)

const MultiStepWindow = () => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCard, setSelectedCard] = useState(0);
  const [planType, setPlanType] = useState("monthly");
  const [selectedPlanName, setSelectedPlanName] = useState(""); // Add this state

  const stepText = {
    "STEP 1": "YOUR INFO",
    "STEP 2": "SELECTED PLAN",
    "STEP 3": "ADD-ONS",
    "STEP 4": "SUMMARY",
  };
  const handlePlanTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPlanType = e.target.checked ? "yearly" : "monthly";
    setPlanType(newPlanType);
  };
  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

const confirmButton =()=>{
setCurrentStep(currentStep);
}

// const buttonClasses = classNames("form-text-fields-container", {
//   "button--small": size === "ali",
  
// });

  const jumpToStep2 = () => {
    setCurrentStep(2);
  };
  const [values, setValues] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    phone: "",
  });
  const [toggleState, setToggleState] = useState(false);
  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    const { name, value } = event.currentTarget;
    validateInput(name, value, values, setValues, setErrors);
  };

  const moveToNextStep = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await validationSchema.parseAsync(values);

      setCurrentStep(currentStep + 1);
    } catch (error) {
      if (error instanceof ZodError) {
        const updatedErrors: { [key: string]: string } = {};

        error.errors.forEach((validationError) => {
          const { path, message } = validationError;
          const fieldName = path[0];
          updatedErrors[fieldName] = message;
        });

        setErrors((prevErrors) => ({ ...prevErrors, ...updatedErrors }));
      }
    }
  };
  // State to store the selected plan price from Step 2
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<number>(0);

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
                <Step1
                  values={values}
                  errors={errors}
                  handleInputChange={handleInputChange}
                />
              </If>

              <If condition={currentStep === 2}>
                <Step2
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  planType={planType}
                  onPlanTypeChange={handlePlanTypeChange}
                  toggleState={toggleState}
                  setToggleState={setToggleState}
                  setPlanPrice={setSelectedPlanPrice} // Pass the state setter to Step 2
                  setSelectedPlanName={setSelectedPlanName} // Pass the state setter to Step 2
                />
              </If>

              <If condition={currentStep === 3}>
                <Step3
                  planType={planType}
                  toggleState={toggleState}
                  selectedCard={selectedCard}
                />{" "}
              </If>
              <If condition={currentStep === 4}>
                <Step4
                  selectedPlanPrice={selectedPlanPrice}
                  planType={planType}
                  selectedPlanName={selectedPlanName} // Pass the selected plan name to Step 4
                  onJumpToStep2={jumpToStep2}
                />
              </If>
            </div>
          </div>

          <div className="button-wrapper">
            <a onClick={goBack} className={currentStep <= 1 ? "hide" : "back"}>
              Go Back
            </a>
            <If condition={currentStep !== 4}>
              <CustomButton
                colorscheme="primary"
                size="md"
                ref={ref}
                onClick={moveToNextStep}
              >
                Next Step
              </CustomButton>
            </If>
            <If condition={currentStep === 4}>
              <CustomButton
                colorscheme="primary"
                size="md"
                ref={ref}
                onClick={confirmButton}
              >
                Confirm
              </CustomButton>
            </If>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepWindow;

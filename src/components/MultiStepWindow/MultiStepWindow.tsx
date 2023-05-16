import React, { useState } from "react";
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
import Setep3 from "./Setep3";

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
  const stepText = {
    "STEP 1": "YOUR INFO",
    "STEP 2": "SELECTED PLAN",
    "STEP 3": "ADD-ONS",
    "STEP 4": "SUMMARY",
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
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

      // Proceed to the next step if validation succeeds
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
                <Step2 />
              </If>
              <If condition={currentStep === 3}>
                <Setep3 />
              </If>
            </div>
          </div>

          <div className="button-wrapper">
            <a onClick={goBack} className={currentStep <= 1 ? "hide" : "back"}>
              Go Back
            </a>
            <CustomButton
              colorscheme="primary"
              size="md"
              ref={ref}
              onClick={moveToNextStep}
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

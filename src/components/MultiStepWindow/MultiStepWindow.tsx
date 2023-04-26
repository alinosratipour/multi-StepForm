import React,{useState }from "react";
import CustomButton from "../generics/Button/NewButton";
import EmailField from "../generics/Email-Field/EmailField";
import TextField from "../generics/Text-Field/TextField";
import "./MultiStepWindow.scss";
import "../stepper/steper.scss";
import StepNavigation from "../stepper/StepNavigation";



const MultiStepWindow = () => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [currentStep, setCurrentStep]= useState(1);


const stepText = {
  'STEP 1': 'YOUR INFO',
  'STEP 2': 'SELECTED PLAN',
  'STEP 3': 'ADD-ONS',
  'STEP 4':'SUMMARY',

}

  return (
    <div className="container">
      <div className="form-wraper">
        <div className="form-content-wrapper">
          <div className="form-content">
            <div className="form-left-side">
            
   
                <StepNavigation stepNumberArray={stepText}   currentStep={currentStep}></StepNavigation>
            
            </div>   
            <div className="form-right-side">
              <div className="form-header">
                <h1>Personal Info</h1>
                <p>
                  Please provide your name, email address, and phone number.
                </p>
              </div>
              <div className="form-text-fields-container">
                <TextField
                  label="Name"
                  name="name"
                  placeholder="e.g. Stephen King"
                />
                <EmailField
                  label="Email"
                  email="email"
                  placeholder="e.g. Stephenking@lorem.com"
                />
                <TextField
                  label="Phone Number"
                  name="name"
                  placeholder="e.g. 1 234 567 890"
                />
              </div>
              <div className="button-wrapper">
                <CustomButton
                  colorscheme="primary"
                  size="md"
                   ref={ref}
                  onClick={() =>
                    console.log("You clicked on the yellow square!")
                  }
                >
                  Next Step
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepWindow;

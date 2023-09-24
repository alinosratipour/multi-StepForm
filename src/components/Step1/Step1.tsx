import React from "react";
import TextField from "../UILiberary/Text-Field/TextField";
import EmailField from "../UILiberary/Email-Field/EmailField";
import  "./Step1.scss";

interface Step1Props {
  values: { [key: string]: string };
  errors: { [key: string]: string };
  handleInputChange?: (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const Step1: React.FC<Step1Props> = ({ values, errors, handleInputChange }) => {
  return (
    <div className="step1-container">
      <form>
        <div>
          <h1 className="step1-header">Personal Info</h1>
          <p className="step1-subheader">Please provide your name, email address, and phone number.</p>
        </div>

        <TextField
          label="Name"
          name="name"
          placeholder="e.g. Stephen King"
          onChange={handleInputChange}
          value={values.name}
          error={errors.name}
          errorMessagePosition="above"
          inputSize="large"
          data-testid="name-field" 
          
         
        />
        <EmailField
          label="Email Address"
          email="email"
          placeholder="e.g. Stephenking@lorem.com"
          onChange={handleInputChange}
          value={values.email}
          error={errors.email}
          errorMessagePosition="above"
          inputSize="large"
          data-testid="email-field" 
        />
        <TextField
          label="Phone Number"
          name="phone"
          placeholder="e.g. 1 234 567 890"
          onChange={handleInputChange}
          value={values.phone}
          error={errors.phone}
          errorMessagePosition="above"
          inputSize="large"
          data-testid="phone-field" 
        />
      </form>
    </div>
  );
};

export default Step1;

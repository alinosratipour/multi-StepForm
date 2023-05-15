import TextField from "../UILiberary/Text-Field/TextField";
import EmailField from "../UILiberary/Email-Field/EmailField";
import React, { useState } from "react";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../../utils/validate";

const Step1 = () => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    let errorMessage: string | undefined;
    if (value.length === 0) {
      errorMessage = validateName(value);
    } else if (name === "email") {
      errorMessage = validateEmail(value);
    } else if (name === "phone") {
      errorMessage = validatePhone(value);
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage || "" }));
  };

  return (
    <div>
      <form>
        <div className="title">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <TextField
          label="Name"
          name="name"
          placeholder="e.g. Stephen King"
          onChange={handleChange}
          value={values.name}
          error={errors.name}
        />
        <EmailField
          label="Email Address"
          email="email"
          placeholder="e.g. Stephenking@lorem.com"
          onChange={handleChange}
          value={values.email}
          error={errors.email}
        />
        <TextField
          label="Phone Number"
          name="phone"
          placeholder="e.g. 1 234 567 890"
          onChange={handleChange}
          value={values.phone}
          error={errors.phone}
        />
      </form>
    </div>
  );
};

export default Step1;

import TextField from "../UILiberary/Text-Field/TextField";
import EmailField from "../UILiberary/Email-Field/EmailField";
import React, { useState } from "react";
import { validationSchema } from "../../utils/validationSchema";
import { ZodError } from "zod";

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

    try {
      // Create a partial data object with the updated field value
      const data = { ...values, [name]: value };


      // Validate the specific field against the validation schema
      const fieldValidationSchema = validationSchema.pick({
        [name]:
          validationSchema.shape[name as keyof typeof validationSchema.shape],
      });
      fieldValidationSchema.parse(data);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      if (error instanceof ZodError) {
        // Set the error message if validation fails for the specific field
        const fieldErrors = error.errors.map((err) => err.message);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: fieldErrors[0] }));
      }
    }
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
          errorMessagePosition={"above"}
        />
        <EmailField
          label="Email Address"
          email="email"
          placeholder="e.g. Stephenking@lorem.com"
          onChange={handleChange}
          value={values.email}
          error={errors.email}
          errorMessagePosition={"above"}
        />
        <TextField
          label="Phone Number"
          name="phone"
          placeholder="e.g. 1 234 567 890"
          onChange={handleChange}
          value={values.phone}
          error={errors.phone}
          errorMessagePosition={"above"}
        />
      </form>
    </div>
  );
};

export default Step1;

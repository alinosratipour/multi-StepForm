// validationUtils.ts
import { ZodError } from "zod";
import { validationSchema } from "../utils/validationSchema";

export const validateInput = async (
  name: string,
  value: string,
  values: { [key: string]: string },
  setValues: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
) => {
  setValues((prevValues) => ({ ...prevValues, [name]: value }));

  try {
    // Create a partial data object with the updated field value
    const data = { ...values, [name]: value };

    // Validate the specific field against the validation schema
    const fieldValidationSchema = validationSchema.pick({
      [name]: validationSchema.shape[name as keyof typeof validationSchema.shape],
    });

    // Perform async validation
    await fieldValidationSchema.parseAsync(data);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  } catch (error) {
    if (error instanceof ZodError) {
      // Set the error message if validation fails for the specific field
      const fieldErrors = error.errors.map((err) => err.message);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: fieldErrors[0] }));
    }
  }
};

export const handleSubmit = async (values: { [key: string]: string }) => {
    try {
      // Validate all form fields against the validation schema
      await validationSchema.parseAsync(values);
      // Proceed with form submission or additional logic
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors as needed
      }
    }
  };
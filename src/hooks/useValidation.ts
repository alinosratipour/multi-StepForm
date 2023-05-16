import { useState, ChangeEvent, useEffect } from "react";
import { ZodError, ZodType, ZodTypeDef, z } from "zod";

export interface Values {
  [key: string]: string;
}

export interface Errors {
  [key: string]: string;
}

interface ValidationOptions<T extends ZodType<any, ZodTypeDef, any>> {
  initialValues: Values;
  validationSchema: T;
}

export const useValidation = <T extends ZodType<any, ZodTypeDef, any>>({ initialValues, validationSchema }: ValidationOptions<T>) => {
    const [values, setValues] = useState<Values>(initialValues);
    const [errors, setErrors] = useState<Errors>({});
    const [isValid, setIsValid] = useState(true); // New state for validation flag
  
    const validateInput = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
  
      try {
        const data = { ...values, [name]: value };
        validationSchema.parse(data);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      } catch (error) {
        if (error instanceof ZodError) {
          const fieldErrors = error.errors.map((err) => err.message);
          setErrors((prevErrors) => ({ ...prevErrors, [name]: fieldErrors[0] }));
        }
      }
    };
  
    useEffect(() => {
      // Check if there are any errors in the errors object
      const hasErrors = Object.values(errors).some((error) => error !== "");
      setIsValid(!hasErrors);
    }, [errors]);
  
    return { values, errors, validateInput, isValid }; // Include isValid in the hook return value
  };
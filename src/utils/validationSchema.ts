import { object, string } from "zod";

// Define the validation schema using zod
export const validationSchema = object({
  name: string().nonempty("This field is required"),
  email: string()
    .nonempty("This field is required")
    .email("Invalid email format"),
  phone: string()
    .nonempty("This field is required")
    .refine((value) => value === "" || !isNaN(Number(value)), {
      message: "Invalid phone number",
    }),
});

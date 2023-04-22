import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import "./EmailField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  email: string;
  label: string;
  placeholder:string;
  ref: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { email, placeholder, label, ...otherProps },
  ref
) => {
  return (
    <label>
      {label}
      <input {...otherProps} name={email} placeholder={placeholder} ref={ref} />
    </label>
  );
};

const EmailField = React.forwardRef(Input);

export default EmailField;

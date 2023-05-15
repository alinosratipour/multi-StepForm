import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import classNames from "classnames";
import "./EmailField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  email?: string;
  label: string;
  placeholder: string;
  ref: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  errorMessagePosition?: "default" | "above";
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    email,
    placeholder,
    onChange,
    label,
    error,
    errorMessagePosition = "default",
    ...otherProps
  },
  ref
) => {
  const errorMessageClassName = classNames({
    "error-message": errorMessagePosition === "default" && error,
    "error-message-above": errorMessagePosition === "above" && error,
  });

  return (
    <div className="text-field">
      <label >
        {label}
        {error && errorMessagePosition === "above" && <span className={errorMessageClassName}>{error}</span>}
      </label>
      <input
        {...otherProps}
        name={email}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        
      />
      {error && errorMessagePosition === "default" && <span className={errorMessageClassName}>{error}</span>}
    </div>
  );
};

const EmailField = React.forwardRef(Input);

export default EmailField;

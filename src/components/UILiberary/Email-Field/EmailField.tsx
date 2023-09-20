import React, { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import "./EmailField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  email?: string;
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  errorMessagePosition?: "default" | "above";
  inputSize?: "small" | "medium" | "large"; // Rename the size prop
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    email,
    placeholder,
    onChange,
    label,
    error,
    errorMessagePosition = "default",
    inputSize,
    ...otherProps
  },
  ref
) => {
  const id = `email-${Math.random().toString(36).substring(7)}`;
  const errorMessageClassName = classNames({
    "error-message": errorMessagePosition === "default" && error,
    "error-message-above": errorMessagePosition === "above" && error,
  });

  const inputClassName = classNames('input', {
    'input-border-error': error,
    'input-small': inputSize === 'small', 
    'input-medium': inputSize === 'medium', 
    'input-large': inputSize === 'large', 
  });

  return (
    <div className="text-field">
      <label htmlFor={id} className="label">
        {label}
        {error && errorMessagePosition === "above" && (
          <span className={errorMessageClassName}>{error}</span>
        )}
      </label>
      <input
        {...otherProps}
        type="email"
        id={id} 
        name={email}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        className={inputClassName}
        autoComplete="on"
      />
      
      {error && errorMessagePosition === "default" && (
        <span className={errorMessageClassName}>{error}</span>
      )}
    </div>
  );
};

const EmailField = forwardRef(Input);

export default EmailField;

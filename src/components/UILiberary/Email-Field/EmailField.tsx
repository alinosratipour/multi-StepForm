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
  const errorMessageClassName = classNames({
    "error-message": errorMessagePosition === "default" && error,
    "error-message-above": errorMessagePosition === "above" && error,
  });

  const inputClassName = classNames('input', {
    'input-border-error': error,
    'input-small': inputSize === 'small', // Use inputSize here
    'input-medium': inputSize === 'medium', // Use inputSize here
    'input-large': inputSize === 'large', // Use inputSize here
  });

  return (
    <div className="text-field">
      <label className="label">
        {label}
        {error && errorMessagePosition === "above" && (
          <span className={errorMessageClassName}>{error}</span>
        )}
      </label>
      <input
        {...otherProps}
        name={email}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        className={inputClassName} // Use the inputClassName here
      />
      {error && errorMessagePosition === "default" && (
        <span className={errorMessageClassName}>{error}</span>
      )}
    </div>
  );
};

const EmailField = React.forwardRef(Input);

export default EmailField;

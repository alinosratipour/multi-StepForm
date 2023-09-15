import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import classNames from "classnames";
import "./TextField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string;
  placeholder?: string;
  ref?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  errorMessagePosition?: "default" | "above";
  inputSize?: "small" | "medium" | "large"; // Rename the size prop
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    placeholder,
    label,
    onChange,
    error,
    errorMessagePosition = "default",
    inputSize, // Rename the size prop in the function arguments
    ...otherProps
  },
  ref
) => {
  const errorMessageClassName = classNames({
    "error-message-default": errorMessagePosition === "default" && error,
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
        name={name}
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

const TextField = React.forwardRef(Input);

export default TextField;

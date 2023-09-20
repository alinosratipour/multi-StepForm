import React, { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import "./TextField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string;
  placeholder?: string;
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
  const id = `text-${Math.random().toString(36).substring(7)}`; // Generate a random ID
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
      <label htmlFor={id} className="label">
        {label}
        {error && errorMessagePosition === "above" && (
          <span className={errorMessageClassName}>{error}</span>
        )}
      </label>
      <input
        {...otherProps}
        type="text"
        id={id} 
        name={name}
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

const TextField = forwardRef(Input);

export default TextField;

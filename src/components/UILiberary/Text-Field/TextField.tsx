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
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    placeholder,
    label,
    onChange,
    error,
    errorMessagePosition = "default",
    ...otherProps
  },
  ref
) => {
  const errorMessageClassName = classNames({
    "error-message-default": errorMessagePosition === "default" && error,
    "error-message-above": errorMessagePosition === "above" && error,
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
        className={error ? 'input-border-error' : ""}
      />
      {error && errorMessagePosition === "default" && (
        <span className={errorMessageClassName}>{error}</span>
      )}
    </div>
  );
};

const TextField = React.forwardRef(Input);

export default TextField;

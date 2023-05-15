import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import "./EmailField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  email?: string;
  label: string;
  placeholder: string;
  ref: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { email, placeholder, onChange, label, error, ...otherProps },
  ref
) => {
  return (
    <label>
      {label}
      <input
        {...otherProps}
        name={email}
        placeholder={placeholder}
        ref={ref}
        className={error ? "error" : undefined}
        onChange={onChange}
      />
      {error && <span className="error-message">{error}</span>}
    </label>
  );
};

const EmailField = React.forwardRef(Input);

export default EmailField;

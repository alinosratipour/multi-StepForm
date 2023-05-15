import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import "./TextField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string;
  placeholder?: string;
  ref?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, placeholder, label, onChange, error, ...otherProps },
  ref
) => {
  return (
    <label>
      {label}
      <input
        {...otherProps}
        name={name}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        className={error ? "error" : undefined}
      />
      {error && <span className="error-message">{error}</span>}
    </label>
  );
};

const TextField = React.forwardRef(Input);

export default TextField;

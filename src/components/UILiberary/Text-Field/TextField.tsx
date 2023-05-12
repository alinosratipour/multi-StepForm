import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import "./TextField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
  ref: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, placeholder, label, onChange, ...otherProps },
  ref
) => {
  return (
    <label>
      {label}
      <input {...otherProps} name={name} placeholder={placeholder} ref={ref} onChange={onChange} />
    </label>
  );
};

const TextField = React.forwardRef(Input);

export default TextField;

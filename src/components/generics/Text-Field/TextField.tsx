import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import "./TextField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder:string;
  ref: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, placeholder, label, ...otherProps },
  ref
) => {
  return (
    <label>
      {label}
      <input {...otherProps} name={name} placeholder={placeholder} ref={ref} />
    </label>
  );
};

const TextField = React.forwardRef(Input);

export default TextField;

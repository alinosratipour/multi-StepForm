import React, { ButtonHTMLAttributes, ForwardRefRenderFunction } from "react";
import "./Button.scss";

interface ButtontProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  buttonType: string;
  ref?: React.Ref<HTMLButtonElement>;
}

const BUTTON_TYPE_CLASSES: ButtonTypeIndex = {
  darkblue: 'primary',
  lightblue: 'secondery',
  isDisabled: 'disabled'
};

interface ButtonTypeIndex {
  [props: string]: string;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtontProps> = (
  { onClick, children, disabled, buttonType, ...otherProps },
  ref
) => {
  return (
    <button      
      disabled
      onClick={onClick}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      ref={ref}
      {...otherProps}
    >
      {children}
     
    </button>
  );
};

const CustomButton = React.forwardRef(Button);

export default CustomButton;

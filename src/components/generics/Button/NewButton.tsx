import {
  ButtonHTMLAttributes,
  ForwardRefRenderFunction,
  ReactElement,
} from "react";
import "./Button.scss";
import React from "react";
import classNames from "classnames";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  colorscheme?: string | null;
  size?: string | null;
  disabled?: boolean;
  icon?: ReactElement;
  iconPosition?:string
  ref?: React.Ref<HTMLButtonElement>;
}

const NewButton: ForwardRefRenderFunction<HTMLButtonElement, ButtonType> = (
  { children, colorscheme, size, disabled, icon, iconPosition, onClick, ...otherProps },
  ref
) => {
  const buttonClasses = classNames("button", {
    "button--small": size === "sm",
    "button--medium": size === "md",
    "button--large": size === "lg",
    "button--primary": colorscheme === "primary",
    "button--secondery": colorscheme === "secondery",
    "button--whatsApp": colorscheme === "whatsApp",
    "button--disabled": disabled === true,
  });
  const iconClasses = classNames("div",{
    "iconright": iconPosition === "right",
    "iconLeft":  iconPosition === "left",
  })
  return (
    <button
      ref={ref}
      {...otherProps}
      disabled={disabled}
      className={buttonClasses}
      onClick={onClick}
    >
      
      <div className={iconClasses} >
        {icon && iconPosition=== "left" && icon} {children}
        {icon && iconPosition=== "right" && icon}
      
       
      </div>
    
    </button>
    
  );
};

const CustomButton = React.forwardRef(NewButton);

export default CustomButton;

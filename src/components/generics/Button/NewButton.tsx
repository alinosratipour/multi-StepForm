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
  //   iconLeft?: {
  //     icon: JSX.Element;
  //     url?: string;
  //     state?: string;
  //     label?: string;
  // };
  icon?: JSX.Element;
  ref?: React.Ref<HTMLButtonElement>;
}

const NewButton: ForwardRefRenderFunction<HTMLButtonElement, ButtonType> = (
  { children, colorscheme, size, disabled, icon, onClick },
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
  return (
    <button
      ref={ref}
      disabled={disabled}
      icon={icon}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const CustomButton = React.forwardRef(NewButton);

export default CustomButton;

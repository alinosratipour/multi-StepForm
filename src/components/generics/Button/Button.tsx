import React, { ForwardRefRenderFunction, HTMLAttributes } from "react";
import classNames from "classnames";
import "./Button.css";

interface ButtontProps extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  border?: string;
  bgcolor?: string;
  color?: string;
  padding?: string;
  height?: string;
  radius?: string;
  width?: string;
  cursor?: string;
  ref: string;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtontProps> = (
  {
    onClick,
    children,
    padding,
    bgcolor,
    disabled,
    className,
    radius,
    width,
    height,
    cursor,
    border,
    color,
    ...otherProps
  },
  ref
) => {
  return (
    <button
      {...otherProps}
      style={{
        backgroundColor: bgcolor,
        border,
        borderRadius: radius,
        height,
        width,
        color,
        padding,
        cursor,
      }}
      disabled
      ref={ref}
    >
      {children}
    </button>
  );
};

const CustomButton = React.forwardRef(Button);

export default CustomButton;

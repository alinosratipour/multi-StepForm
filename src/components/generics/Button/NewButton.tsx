import { ButtonHTMLAttributes, ForwardRefRenderFunction } from "react";
import "./Button.scss";
import React from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  colorscheme?: string | null;
  size?: string | null;
  ref?: React.Ref<HTMLButtonElement>;
};

  const NewButton: ForwardRefRenderFunction<HTMLButtonElement, ButtonType> = (
    { children, colorscheme, size, onClick },
    ref
  ) => {

  const buttonSize = (btnSize: string | null | undefined) => {
    switch (btnSize) {
      case "sm": {
        return {
          height: "30px",
          width: "60px",
        };
      }
      case "md": {
        return {
          height: "60px",
          width: "120px",
        };
      }
      case "lg": {
        return {
          height: "60px",
          width: "120px",
        };
      }
    }
  };

  const buttonColors = (btnColor: string | null | undefined) => {
    switch (btnColor) {
      case "orange": {
        return {
          backgroundColor: "#orange",
        };
      }
      case "blue": {
        return {
          backgroundColor: "#ff00ff",
          cursor: "pointer",
          color: "linen",
          opacity: "1",
        };
      }
      case "google": {
        return {
          backgroundColor: "#00A0DC",
        };
      }
    }
  };


  return (
    <button
      ref={ref}
      style={{ ...buttonSize(size), ...buttonColors(colorscheme) }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
const CustomButton = React.forwardRef(NewButton);
export default CustomButton;

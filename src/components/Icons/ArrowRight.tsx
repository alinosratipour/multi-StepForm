import React from "react";
import "./Icon.scss";
import classNames from "classnames";

interface IconType {
 pos?: string;
  color?: string;
  size?:string;
}

const ArrowRight: React.FC<IconType> = ({ pos, color, size }) => {
 
  const buttonClasses = classNames("svg", {
    "arrow-icon-md": size === "medium",
    "arrow-icon-sm": size === "small",
    "arrow-icon-lg": size === "large",
    "icon-position": pos === "right",
    "icon-direction-right": pos === "right",
    "icon-direction-left": pos === "left",
    
  });
 
  return (
    <svg
      className={buttonClasses}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      // width={iconSize} // added size here
      // height={iconSize} // added size here
      fill={color}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
    </svg>
  );
};

export default ArrowRight;

import React from "react";
import classNames from "classnames";
import "./Card.scss";
export interface CardProps extends React.PropsWithChildren<{}> {
  children?: React.ReactNode;
  colorscheme?: string | boolean | number;
  title: string;
  icon?: string;
  subtitle?: string;
  content?: string;
  onClick?: () => void;
  showYearlyOffer?: boolean; 
  stackContent?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  colorscheme,
  onClick,
  title,
  subtitle,
  icon,
  content,
  showYearlyOffer,
  stackContent,
  
}) => {
  const cardClasses = classNames("cardWrapper", {
    "bg--color": colorscheme === "primary",
  });

  const titleWrapperClasses = classNames("titleWrapper", {
    "stack-content": stackContent, // Apply class to stack content if prop is true
  });


  return (
    <div className={cardClasses} onClick={onClick}>
      <img src={icon} className="image" />
      <p>{content}</p>
      <div className={titleWrapperClasses}>
        <span className="CardTitle">{title}</span>
        <span className="subtitle">{subtitle}</span>
        {/* {showYearlyOffer && <span className="yearlyOffer">2 months free</span>} */}
        {children}
      </div>
    </div>
  );
};

export default Card;

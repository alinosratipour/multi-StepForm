import React from "react";
import classNames from "classnames";
import "./Card.scss";
export interface CardProps extends React.PropsWithChildren<{}> {
  children?: React.ReactNode;
  colorscheme?: string | boolean |number;
  title: string;
  icon?: string;
  subtitle?: string;
  content?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  colorscheme,
  onClick,
  title,
  subtitle,
  icon,
  content,
  
}) => {
  const cardClasses = classNames("cardWrapper", {
    "bg--color": colorscheme === "primary",
  });

  return (
    <div className={cardClasses} onClick={onClick}>
      <img src={icon} className="image" />
      <p>{content}</p>
      <div className="titleWrapper">
        <span className="CardTitle">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>

      {children}
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import "./Card.scss";
import classNames from "classnames";

export interface CardProps extends React.PropsWithChildren<{}> {
  children?: React.ReactNode;
  colorscheme?: string | boolean;
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
  ...props
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

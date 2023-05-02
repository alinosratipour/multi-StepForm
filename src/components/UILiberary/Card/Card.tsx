import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import "./Card.scss"

export interface CardProps extends React.PropsWithChildren<{}> {
    children?:React.ReactNode;
  }

const Card: React.FC<CardProps> = ({children,...props})=> {
  return(
    <div className= "cardWrapper" {...props} tabIndex={0}>
    {children}
    </div>
  );
};

export default Card;

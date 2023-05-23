import { useState } from "react";
import "./PlanCard.scss";
import classNames from "classnames";

export interface CardProps extends React.PropsWithChildren<{}> {
  children?: React.ReactNode;
  colorscheme?: string | boolean | number;
  title: string;
  icon?: string;
  description?: string;
  price?: string;
  checked?: boolean; // Add a new prop for the checked state
  onClick?: () => void;
 // onChange?:()=>void;
 //onChange?: (checked: boolean) => void;
}

const PlanCard: React.FC<CardProps> = ({
  children,
  colorscheme,
  onClick,
  //onChange,
  title,
  description,
  icon,
  price,
  checked,
  ...props
}) => {
 // const [isChecked, setIsChecked] = useState(checked);



  // const handleCardClick = () => {
  //   setIsChecked(!isChecked);
  //   if (onClick) {
  //     onClick();
  //   }
  // };


  const cardClasses = classNames("add-on-box", {
    "bg--color": colorscheme === "primary",
  });

  return (
    <div className={cardClasses} onClick={onClick} >
    
      <div className="add-on-contents">
        {children}
        
        <div className="name-and-desciption">
          <span className="add-on-name">{title}</span>
          <span className="add-on-desciption">{description}</span>
        </div>

        <span className="add-on-price">{price}</span>
        </div>
      </div>
   
  );
};

export default PlanCard;

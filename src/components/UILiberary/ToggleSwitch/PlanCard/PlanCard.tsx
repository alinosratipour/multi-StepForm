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
}

const PlanCard: React.FC<CardProps> = ({
  children,
  colorscheme,
  onClick,
  title,
  description,
  icon,
  price,
  checked,
}) => {
  const cardClasses = classNames("add-on-box", {
    "bg--color2": colorscheme === "primary",
  });

  return (
    <div className={cardClasses} onClick={onClick}>
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

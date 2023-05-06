import { useState } from "react";
import Card, { CardProps } from "./Card";

interface CardListProps {
    cards: CardProps[];
  }
  
  const CardList: React.FC<CardListProps> = ({ cards }) => {
    const [lastClickedIndex, setLastClickedIndex] = useState(-1);
    const [currentClickedIndex, setCurrentClickedIndex] = useState(-1);
  
    const handleCardClick = (index: number) => {
      if (lastClickedIndex !== -1 && lastClickedIndex !== index) {
        cards[lastClickedIndex].onClick(false);
      }
      cards[index].onClick(true);
      setLastClickedIndex(currentClickedIndex);
      setCurrentClickedIndex(index);
    };
  
    return (
      <div>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            colorscheme={card.colorscheme}
            index={index}
            onClick={(isClicked: boolean) => card.onClick(isClicked)}
            isClicked={currentClickedIndex === index}
          />
        ))}
      </div>
    );
  };
  
  export default CardList;
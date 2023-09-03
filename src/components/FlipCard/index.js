import React, { useState } from "react";
import "./FlipCard.scss";
import CustomCard from "../CustomCard";

const FlipCard = ({ cardData }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onCardFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-wrapper flip-card-front">
            <CustomCard isFront onCardFlip={onCardFlip} cardData={cardData} />
          </div>
          <div className="flip-card-wrapper flip-card-back">
            <CustomCard onCardFlip={onCardFlip} cardData={cardData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;

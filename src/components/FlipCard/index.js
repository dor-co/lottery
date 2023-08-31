import React, { useState } from "react";
import "./FlipCard.scss";
import { Card, Button } from "react-bootstrap";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

const FlipCard = ({ isFrontSide }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-wrapper flip-card-front">
            <FrontCard onCardFlip={onCardFlip} />
          </div>

          <div className="flip-card-wrapper flip-card-back">
            <BackCard onCardFlip={onCardFlip} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;

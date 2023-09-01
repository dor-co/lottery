import React from "react";
import { Button } from "react-bootstrap";
import "./FrontSide.scss";
const FrontSide = ({ cardData, onCardFlip }) => {
  return (
    <div className="front-body-wrapper">
      <div className="logo-wrapper">
        <img className="logo" src={cardData.logo} />
      </div>
      <div className="btn-and-texts-wrapper">
        <div className="result-btn-wrapper">
          <Button variant="light" onClick={onCardFlip}>
            result
          </Button>
        </div>
        <div className="texts-wrapper">
          <span>{cardData.lotteryName}</span>
          <span className="jackpot-text">{cardData.jackpotText}</span>
        </div>
      </div>
    </div>
  );
};

export default FrontSide;

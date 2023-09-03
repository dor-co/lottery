import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FrontSide.scss";

const FrontSide = ({ cardData, onCardFlip }) => {
  const navigate = useNavigate();

  const handleClickFrontCard = () => {
    navigate(`/lottery-details?id=${cardData.id}`);
  };

  return (
    <div className="front-body-wrapper" onClick={handleClickFrontCard}>
      <div className="logo-wrapper">
        <img className="logo" src={cardData.logo} />
      </div>
      <div className="btn-and-texts-wrapper">
        <div className="result-btn-wrapper">
          <Button variant="light" onClick={onCardFlip}>
            Result
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

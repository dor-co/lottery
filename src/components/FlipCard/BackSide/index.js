import moment from "moment";
import React from "react";
import { Button } from "react-bootstrap";
import Balls from "../../Balls";
import "./BackSide.scss";
const BackSide = ({ cardData, onCardFlip }) => {
  return (
    <div className="back-body-wrapper">
      <div className="btn-and-texts-wrapper">
        <div className="back-btn-wrapper">
          <Button variant="light" onClick={onCardFlip} />
        </div>
        <div className="date">
          {moment(cardData.dateTime, "DD/MM/YYYY").format("LLL")}
        </div>
      </div>
      <div className="balls-wrapper">
        <Balls ballsList={cardData.ballsList} />
      </div>
      <Button size="sm" variant="danger" className="btn-other-link">
        LINK TO
      </Button>
    </div>
  );
};

export default BackSide;

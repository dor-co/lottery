import moment from "moment";
import React from "react";
import { Button } from "react-bootstrap";
import Balls from "../../Balls";
import "./BackSide.scss";
import { useNavigate } from "react-router-dom";

const BackSide = ({ cardData, onCardFlip }) => {
  const navigate = useNavigate();

  const onHandleOtherLink = () => {
    navigate("/test");
  };

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
      <Button
        size="sm"
        variant="danger"
        className="btn-other-link"
        onClick={onHandleOtherLink}
      >
        LINK TO
      </Button>
    </div>
  );
};

export default BackSide;

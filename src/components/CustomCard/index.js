import React from "react";
import { Card } from "react-bootstrap";
import "./CustomCard.scss";
import FrontSide from "../FlipCard/FrontSide";
import BackSide from "../FlipCard/BackSide";
import moment from "moment";

const CustomCard = ({ isFront, onCardFlip, cardData }) => {
  console.log(cardData);
  return (
    <Card className="custom-card-wrapper">
      <Card.Body>
        {isFront ? (
          <FrontSide cardData={cardData} onCardFlip={onCardFlip} />
        ) : (
          <BackSide cardData={cardData} onCardFlip={onCardFlip} />
        )}
      </Card.Body>
      {isFront && (
        <Card.Footer>
          {moment(cardData.drawTime, "HH:mm").format("LT")}
        </Card.Footer>
      )}
    </Card>
  );
};

export default CustomCard;

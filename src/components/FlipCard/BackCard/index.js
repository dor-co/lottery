import React from "react";
import { Button, Card } from "react-bootstrap";
import "./BackCard.scss";

const BackCard = ({ onCardFlip }) => {
  return (
    <Card>
      <Card.Body>
        <div className="back-btn-wrapper">
          <Button variant="light" onClick={onCardFlip} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BackCard;

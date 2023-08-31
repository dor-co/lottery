import React from "react";
import { Button, Card } from "react-bootstrap";
import "./FrontCard.scss";

const FrontCard = ({ onCardFlip }) => {
  return (
    <Card>
      <Card.Body>
        <div className="result-btn-wrapper">
          <Button variant="light" onClick={onCardFlip}>
            Result
          </Button>
        </div>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  );
};

export default FrontCard;

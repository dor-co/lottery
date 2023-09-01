import React from "react";
import "./Balls.scss";

const Balls = ({ ballsList }) => {
  return (
    <div className="balls-list-wrapper">
      {ballsList.map((ball, key) => {
        return (
          <div key={key} className="ball">
            {ball}
          </div>
        );
      })}
    </div>
  );
};

export default Balls;

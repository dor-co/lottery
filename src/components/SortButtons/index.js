import React from "react";
import { Button } from "react-bootstrap";
import { onSortCards } from "../../utils/pipe";
import "./SortButtons.scss";

const SortButtons = ({ sortButtonsList, data, setData }) => {
  return (
    <>
      {sortButtonsList?.map((btn, key) => {
        return (
          <Button
            key={key}
            variant="outline-primary"
            onClick={() => onSortCards(btn.value, data, setData)}
          >
            {btn.text}
          </Button>
        );
      })}
    </>
  );
};

export default SortButtons;

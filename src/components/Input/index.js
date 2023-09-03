import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Input.scss";
import cx from "classnames";

const Input = ({ value, handleSearchChange, handleClearSearch }) => {
  const inputClassName = cx({
    "input-with-clear-btn": handleClearSearch,
  });

  return (
    <div className="input-wrapper">
      <Form.Control
        value={value}
        onChange={handleSearchChange}
        placeholder="Search"
        className={inputClassName}
      />
      {handleClearSearch && (
        <Button
          variant="light"
          className="clear-btn-input"
          onClick={handleClearSearch}
        />
      )}
    </div>
  );
};

export default Input;

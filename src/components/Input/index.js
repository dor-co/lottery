import React from "react";
import { Form } from "react-bootstrap";
import "./Input.scss";

const Input = ({ value, handleSearchChange }) => {
  return (
    <div className="input-wrapper">
      <Form.Control
        value={value}
        onChange={handleSearchChange}
        placeholder="Search"
      />
    </div>
  );
};

export default Input;

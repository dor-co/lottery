import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({ numOfPages, onLoadCardsData, currentPage }) => {
  const [items, setItems] = useState([]);

  const onChangePage = (el) => {
    const pageChoose = el.target.text;
    onLoadCardsData(pageChoose);
  };

  useEffect(() => {
    let subItems = [];

    for (let number = 1; number <= numOfPages; number++) {
      subItems.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={onChangePage}
        >
          {number}
        </Pagination.Item>
      );
    }

    setItems(subItems);
  }, [currentPage]);

  return (
    <>
      <Pagination>{items}</Pagination>
    </>
  );
};

export default CustomPagination;

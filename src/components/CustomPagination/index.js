import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import useWindowSize from "../../utils/useWindowSize";
import "./CustomPagination.scss";

const CustomPagination = ({ numOfPages, onLoadCardsData, currentPage }) => {
  const [items, setItems] = useState([]);

  const { widthWindow } = useWindowSize();

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
  }, [numOfPages, currentPage]);

  return (
    <>
      {widthWindow > 576 && (
        <div className="custom-pagination-wrapper">
          <Pagination>{items}</Pagination>
        </div>
      )}
    </>
  );
};

export default CustomPagination;

import React, { useEffect, useState } from "react";
import FlipCard from "../../components/FlipCard";
import "./Main.scss";
import { useSelector, useDispatch } from "react-redux";
import { onLoadCardsData } from "./actions";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import CustomPagination from "../../components/CustomPagination";

const Main = () => {
  const { appReducer } = useSelector((state) => state);

  const { isLoading, cards, totalLengthCards, currentPage } = appReducer;

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(null);

  useEffect(() => {
    dispatch(onLoadCardsData());
  }, []);

  useEffect(() => {
    setData(cards);

    if (totalLengthCards) {
      setNumOfPages(Math.ceil(totalLengthCards / 10));
    }
  }, [cards]);

  useEffect(() => {
    let filterData = [...cards];
    filterData = filterData?.filter(
      (el) => el.lotteryName.includes(searchValue) || searchValue.trim() === ""
    );
    setData(filterData);
  }, [searchValue]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="main-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Input
            value={searchValue}
            handleSearchChange={handleSearchChange}
            handleClearSearch={handleClearSearch}
          />
          <div className="cards-wrapper">
            {data?.map((card, key) => {
              return <FlipCard key={key} cardData={card} />;
            })}
          </div>

          <CustomPagination
            currentPage={currentPage}
            numOfPages={numOfPages}
            onLoadCardsData={(pageNumber) => {
              dispatch(onLoadCardsData(pageNumber));
            }}
          />
        </>
      )}
    </div>
  );
};

export default Main;

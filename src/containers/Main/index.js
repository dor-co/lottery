import React, { useEffect, useState } from "react";
import FlipCard from "../../components/FlipCard";
import "./Main.scss";
import { useSelector, useDispatch } from "react-redux";
import { onLoadCardsData } from "./actions";
import Input from "../../components/Input";

const Main = () => {
  const { appReducer } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(onLoadCardsData());
  }, []);

  useEffect(() => {
    setData(appReducer.cards);
  }, [appReducer.cards]);

  useEffect(() => {
    let filterData = [...appReducer.cards];
    filterData = filterData.filter(
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
    <div className="app-wrapper">
      <Input
        value={searchValue}
        handleSearchChange={handleSearchChange}
        handleClearSearch={handleClearSearch}
      />
      <div className="cards-wrapper">
        {data.map((card, key) => {
          return <FlipCard key={key} cardData={card} />;
        })}
      </div>
    </div>
  );
};

export default Main;

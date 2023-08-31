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

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    dispatch(onLoadCardsData());
  }, []);

  return (
    <div className="app-wrapper">
      <Input value={searchValue} handleSearchChange={handleSearchChange} />
      <div className="cards-wrapper">
        {appReducer.cards.map((x, key) => {
          return <FlipCard key={key} />;
        })}
      </div>
    </div>
  );
};

export default Main;

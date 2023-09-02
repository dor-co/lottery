import React, { useEffect, useState } from "react";
import FlipCard from "../../components/FlipCard";
import "./Main.scss";
import { useSelector, useDispatch } from "react-redux";
import { onLoadCardsData } from "./actions";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import CustomPagination from "../../components/CustomPagination";
import useWindowSize from "../../utils/useWindowSize";
import { Carousel } from "react-bootstrap";
import SortButtons from "../../components/SortButtons";

const Main = () => {
  const { appReducer } = useSelector((state) => state);

  const { isLoading, cards, totalLengthCards, currentPage } = appReducer;

  const dispatch = useDispatch();
  const { widthWindow } = useWindowSize();

  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(null);
  // desktop: 1, mobile: 2
  const [viewType, setViewType] = useState();

  const sortButtonsList = [
    {
      value: "drawTime",
      text: "Draw Time",
    },
    {
      value: "jackpotText",
      text: "Jackpot",
    },
    {
      value: "lotteryName",
      text: "Lottery Name",
    },
  ];

  useEffect(() => {
    if (widthWindow) {
      if (widthWindow < 576) {
        setViewType(2);
      } else {
        setViewType(1);
      }
    }
  }, [widthWindow]);

  useEffect(() => {
    if (widthWindow) {
      if (viewType === 2) {
        dispatch(onLoadCardsData(0));
      } else {
        dispatch(onLoadCardsData());
      }
    }
  }, [viewType]);

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
      {isLoading || !widthWindow ? (
        <Loader />
      ) : (
        <>
          <div className="actions-fields-wrapper">
            <Input
              value={searchValue}
              handleSearchChange={handleSearchChange}
              handleClearSearch={handleClearSearch}
            />

            <div className="sort-buttons-wrapper">
              <SortButtons
                sortButtonsList={sortButtonsList}
                data={data}
                setData={setData}
              />
            </div>
          </div>
          {widthWindow > 576 ? (
            <div className="cards-wrapper">
              {data?.map((card, key) => {
                return <FlipCard key={key} cardData={card} />;
              })}
            </div>
          ) : (
            <Carousel interval={null} className="custom-carousel-wrapper">
              {data?.map((card, key) => {
                return (
                  <Carousel.Item key={key}>
                    <div className="custom-carousel">
                      <FlipCard key={key} cardData={card} />
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          )}

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

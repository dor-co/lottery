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

  const carouselData = [
    {
      title: "Slide 1",
      text: "This is the first slide.",
    },
    {
      title: "Slide 2",
      text: "Here comes the second slide.",
    },
    {
      title: "Slide 3",
      text: "And here is the third slide.",
    },
  ];

  return (
    <div className="main-wrapper">
      {isLoading || !widthWindow ? (
        <Loader />
      ) : (
        <>
          <Input
            value={searchValue}
            handleSearchChange={handleSearchChange}
            handleClearSearch={handleClearSearch}
          />
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

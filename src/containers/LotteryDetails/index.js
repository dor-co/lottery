import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLoadCardsData } from "../Main/actions";
import { useLocation } from "react-router-dom";
import Balls from "../../components/Balls";
import "./LotteryDetails.scss";
import moment from "moment";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LotteryDetails = () => {
  const { appReducer } = useSelector((state) => state);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const { cards } = appReducer;

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(onLoadCardsData(0));
  }, []);

  useEffect(() => {
    if (cards) {
      let filteredCards = cards?.filter((card) => card.id == id)[0];
      setData(filteredCards);
    }
  }, [cards]);

  const onClickBack = () => {
    navigate("/");
  };

  return (
    <>
      {data && (
        <div className="lottery-details-wrapper">
          <div className="back-btn-wrapper">
            <Button variant="light" className="back-btn" onClick={onClickBack}>
              Back
            </Button>
          </div>
          <h1 className="title">Lottery Details:</h1>
          <div className="details-wrapper">
            <h2 className="lottery-name">{data.lotteryName}</h2>
            <div>
              <p className="sub-title">Date Time</p>
              <span>{moment(data.dateTime, "DD/MM/YYYY").format("LLL")}</span>
            </div>
            <div>
              <p className="sub-title">Draw Time:</p>
              <span>{moment(data.drawTime, "HH:mm").format("LT")}</span>
            </div>
            <div>
              <p className="sub-title">Jackpot:</p>
              <span>{data.jackpotText}</span>
            </div>
            <div>
              <p className="sub-title">Balls:</p>
              <Balls ballsList={data.ballsList} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LotteryDetails;

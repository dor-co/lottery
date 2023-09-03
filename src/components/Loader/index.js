import React from "react";
import LoadingAnimation from "../../images/gif/loader.gif";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={LoadingAnimation} className="loader" />
    </div>
  );
};

export default Loader;

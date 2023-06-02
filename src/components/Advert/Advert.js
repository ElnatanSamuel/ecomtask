import React from "react";
import "./Advert.scss";

const Advert = () => {
  return (
    <div className="advert">
      <div className="left">
        <div className="details">
          <h1>Xiaomi Band 7</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            sint?
          </p>
        </div>
      </div>
      <div className="price">
        <span>Starting at</span>
        <p>$189.99</p>
      </div>
      <div className="right">
        <img src="/img/watch.png" alt="" />
      </div>
    </div>
  );
};

export default Advert;

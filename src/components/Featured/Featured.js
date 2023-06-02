import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="left">
        <div className="image">
          <img src="/img/polaroidf.png" alt="" />
        </div>
        <div className="details">
          <h1>Polaroid Go Starter Set</h1>
          <p>NOW GRAB IT AT</p>
          <div className="prices">
            <div className="newprice">
              <span>$299</span>
            </div>
            <div className="oldprice">
              <span>$399</span>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="details">
          <h1>Redmi Watch 2 Lite Strap</h1>
          <p>NOW GRAB IT AT</p>
          <div className="prices">
            <div className="newprice">
              <span>$199</span>
            </div>
            <div className="oldprice">
              <span>$299</span>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="/img/redmi.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;

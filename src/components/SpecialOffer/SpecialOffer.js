import React from "react";
import "./SpecialOffer.scss";

const SpecialOffer = () => {
  return (
    <div className="specialoffer w-full max-w-7xl m-auto">
      <div className="left">
        <div className="image">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/3/2020/01/Screen-Shot-2020-01-28-at-10.11.59-27e1f82.png?quality=90&resize=980,654"
            alt=""
          />
        </div>
        <div className="details">
          <span>Deals of the day</span>
          <h1>Xbox Elite Wireless Controller Series 2</h1>
          <div className="prices">
            <span className="newprice">$200</span>
            <span className="oldprice">$400</span>
          </div>
          <p>
            Xbox elite wireless controller series 2 features over 30 ways to
            play like a pro, including adjestable tension thumbsticks.
          </p>
          <div className="time">
            <p>Offer ends in</p>
            <div className="counter">
              <span>10</span>
              <span>:</span>
              <span>26</span>
              <span>:</span>
              <span>52</span>
            </div>
            <div className="shower">
              <span>Hours</span>
              <span>Minutes</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="col">
          <div className="row">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBw0X03Eevxh0czAfctqqM7Yxuhj30Jh3Wg&usqp=CAU"
              alt=""
            />

            <div className="details">
              <h1>Mi Smart Compact Projector</h1>
              <div className="minorDetails">
                <p>Weekend discount</p>
                <div className="prices">
                  <span className="newprice">$499.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJky5QO0Ap9tFAqOjmBMhbn41PG2f76kJpwg&usqp=CAU"
              alt=""
            />

            <div className="details">
              <h1>Mi Air Purifier 3H</h1>
              <div className="minorDetails">
                <p>Weekend discount</p>
                <div className="prices">
                  <span className="newprice">$269.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;

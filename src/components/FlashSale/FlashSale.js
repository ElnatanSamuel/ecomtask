import React, { useContext } from "react";
import "./FlashSale.scss";
import List from "../List/List";
import data from "../../data.json";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/Context";

const FlashSale = () => {
  const flashData = data.slice(1, 5);
  const { setItemQuantity } = useContext(cartContext);

  return (
    <div className="flashsale w-full max-w-7xl m-auto">
      <div className="top">
        <h1>Flash Sale</h1>
        <div className="clock">
          <p>Offer ends in</p>
          <div className="countdown">
            <p>10</p>
            <span>:</span>
            <p>54</p>
            <span>:</span>
            <p>26</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        {flashData?.map((item) => (
          <Link to={`/product/` + item.id} onClick={(e) => setItemQuantity(1)}>
            <List item={item} key={item.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;

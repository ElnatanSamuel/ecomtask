import React, { useContext } from "react";
import "./Popular.scss";
import List from "../List/List";
import data from "../../data.json";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/Context";

const Popular = () => {
  const popularData = data.slice(2, 8);
  const { setItemQuantity } = useContext(cartContext);

  return (
    <div className="popular">
      <div className="left">
        <div className="top">
          <h1>Popular Items</h1>
          <div className="seminav">
            <span className="special">Popular</span>
            <span className="navitem">On Sale</span>
            <span className="navitem">Top</span>
            <span className="navitem">Reviews</span>
          </div>
        </div>
        <div className="bottom">
          {popularData?.map((item) => (
            <Link
              to={"/product/" + item.id}
              onClick={(e) => setItemQuantity(1)}
            >
              <List item={item} key={item.id} />
            </Link>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="details">
          <span>Mobile</span>
          <h1>OnePlus 8</h1>
          <p>Don't miss this opportunity</p>
          <div className="sale">
            <p>NOW GRAB IT AT</p>
            <div className="prices">
              <div className="newprice">$299</div>
              <div className="oldprice">$399</div>
            </div>
          </div>
        </div>
        <div className="images">
          <img src="/img/oneplus2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Popular;

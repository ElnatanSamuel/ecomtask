import React, { useEffect, useState } from "react";
import "./AllProducts.scss";
import List from "../../components/List/List";
import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
import Advert from "../../components/Advert/Advert";
import OverView from "../../components/OverView/OverView";
import RecentlyAdded from "../../components/RecentlyAdded/RecentlyAdded";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(10);
  const [sort, setSort] = useState(0);

  const priceFilterd = data.filter((item) => item.price >= maxPrice);

  return (
    <>
      <div className="products w-full max-w-7xl m-auto">
        <div className="left">
          <div className="leftoption">
            <div className="option">
              <MenuOutlinedIcon />
              <span>Browse Categories</span>
            </div>
            <div className="catagories">
              <Link to="/products/105">
                <div className="category">
                  <span>Cellphone</span>
                  <ArrowForwardIosOutlinedIcon />
                </div>
              </Link>
              <Link to="/products/102">
                <div className="category">
                  <span>Computers & Accessories</span>
                  <ArrowForwardIosOutlinedIcon />
                </div>
              </Link>
              <Link to="/products/107">
                <div className="category">
                  <span>Smartwatches</span>
                  <ArrowForwardIosOutlinedIcon />
                </div>
              </Link>
              <Link to="/products/101">
                <div className="category">
                  <span>Camera & Headphones</span>
                  <ArrowForwardIosOutlinedIcon />
                </div>
              </Link>
              <Link to="/products/100">
                <div className="category">
                  <span>Video Games</span>
                  <ArrowForwardIosOutlinedIcon />
                </div>
              </Link>
              <Link to="/products/110">
                <div className="category">
                  <span>TV</span>
                  <ArrowForwardIosOutlinedIcon />
                </div>
              </Link>
            </div>
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>$0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>${maxPrice}</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            className="catImg"
            alt=""
            src="https://hips.hearstapps.com/hmg-prod/images/pc-gaming-controller-lead-640b81d470aa4.jpg"
          />
          <div className="categories">
            {priceFilterd?.map((item) => (
              <Link to={"/product/" + item.id}>
                <List item={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="others  w-full max-w-7xl m-auto">
        <Advert />
        <RecentlyAdded />
        <OverView />
      </div>
    </>
  );
};

export default Products;

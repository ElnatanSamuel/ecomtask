import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
import Advert from "../../components/Advert/Advert";
import OverView from "../../components/OverView/OverView";
import RecentlyAdded from "../../components/RecentlyAdded/RecentlyAdded";

const Products = () => {
  const catId = parseInt(useParams().id);
  console.log(catId);
  const [maxPrice, setMaxPrice] = useState(10);
  const [sort, setSort] = useState(null);
  const [brand, setBrand] = useState(null);

  const catFilterd = data.filter((item) => item.CategoryId === catId);
  const priceFilterd = catFilterd.filter((item) => item.price >= maxPrice);

  return (
    <>
      <div className="products w-full max-w-7xl m-auto">
        <div className="left">
          <div className="filterItem">
            <h2>Brands</h2>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Apple</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2">Huawei</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="3">HP</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={4} />
              <label htmlFor="3">Dell</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={5} />
              <label htmlFor="3">PlayStation</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={6} />
              <label htmlFor="3">XBOX</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={7} />
              <label htmlFor="3">Xiaomi</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={8} />
              <label htmlFor="3">Samsung</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={9} />
              <label htmlFor="3">LG</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={10} />
              <label htmlFor="3">JBL</label>
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
                <List
                  item={item}
                  catId={catId}
                  maxPrice={maxPrice}
                  sort={sort}
                />
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

import React from "react";
import "./TopCategories.scss";
import { Link } from "react-router-dom";

const TopCategories = () => {
  return (
    <div className="topcategory max-w-7xl m-auto">
      <h1>Top Categories</h1>
      <div className="categories">
        <Link to="/products/102">
          <div className="categoryitem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChYgKQSn3cPQlla2G-AlhBwebHc0ehLCe-Q&usqp=CAU"
              alt=""
            />
            <p>Speakers</p>
          </div>
        </Link>
        <Link to="/products/100">
          <div className="categoryitem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2H8yLtiQ7SRkONfWjRnZ2Z__Yiexni4NHQ&usqp=CAU"
              alt=""
            />
            <p>Gaming</p>
          </div>
        </Link>
        <Link to="/products/107">
          <div className="categoryitem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlZsyNx9FKzAUq0QDopK94PUh2ZCaotyS9Q&usqp=CAU"
              alt=""
            />
            <p>Smartwatches</p>
          </div>
        </Link>
        <Link to="/products/102">
          <div className="categoryitem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX73yaHw1gY5hLG9GcnVF7uYf6b6s71C4OXw&usqp=CAU"
              alt=""
            />
            <p>Audio & Video</p>
          </div>
        </Link>
        <Link to="/products/105">
          <div className="categoryitem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YEvReJu-N0YRdr3neTtvPcdoEVs35bg_WQ&usqp=CAU"
              alt=""
            />
            <p>Tablets</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;

import React from "react";
import "./List.scss";

const List = ({ item }) => {
  return (
    <div className="list">
      <div className="image">
        <img src={item.img} alt="" />
      </div>
      <div className="details">
        <div className="topdetail">{item.category}</div>
        <div className="bottomdetail">
          <p>{item.title}</p>
          <span>${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default List;

import React from "react";
import "./OverView.scss";

const OverView = () => {
  const data = [
    {
      id: 1,
      title: "Game controller",
      category: "Video Games",
      price: 50,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzrz_L0uCxAKcVzdLV507R84s8qChpOeHAQ&usqp=CAU",
    },
    {
      id: 2,
      title: "Stereo Headsets",
      category: "Cameras & Headphones",
      price: 34,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsaH53-PXdv2BCYC4OZbWZambUzdxQPvQVQ&usqp=CAU",
    },
    {
      id: 3,
      title: "JBL Pulse 2",
      category: "Computers & Accessories",
      price: 75,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHy0VSlxGMpIw2S4X7Lp25mJqDfSkJTH19nA&usqp=CAU",
    },
  ];

  return (
    <div className="overview">
      <div className="col">
        <h1>Featured Product</h1>
        <div className="line"></div>
        <div className="items">
          {data?.map((item) => (
            <div className="item">
              <img src={item.img} alt="" />

              <div className="details">
                <p>{item.title}</p>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col">
        <h1>Top Selling Product</h1>
        <div className="line"></div>
        <div className="items">
          {data?.map((item) => (
            <div className="item">
              <img src={item.img} alt="" />

              <div className="details">
                <p>{item.title}</p>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col">
        <h1>Recently Added</h1>
        <div className="line"></div>
        <div className="items">
          {data?.map((item) => (
            <div className="item">
              <img src={item.img} alt="" />

              <div className="details">
                <p>{item.title}</p>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rightmost">
        <div className="details">
          <p>HP EliteBook Resolve</p>
          <div className="prices">
            <span className="text">Starting at</span>
            <span className="price">$499.99</span>
          </div>
        </div>
        <div className="image">
          <img src="/img/laptop.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OverView;

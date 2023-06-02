import React, { useContext } from "react";
import "./RecentlyAdded.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import List from "../List/List";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/Context";

SwiperCore.use([Autoplay, Pagination]);

const RecentlyAdded = () => {
  const { setItemQuantity } = useContext(cartContext);
  const data = [
    {
      id: 1,
      title: "DualShock 4",
      category: "Video Games",
      price: 50,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvr74iE847p7Jv-lX1eIvTIkdX97-Eb2mUPg&usqp=CAU",
    },
    {
      id: 2,
      title: "Huawei Headphones",
      category: "Cameras & Headphones",
      price: 34,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeVPx4caGLxOAAiYVBMegpEINF8RrwfZwEQ&usqp=CAU",
    },
    {
      id: 3,
      title: "JBL Pulse 2",
      category: "Computers & Accessories",
      price: 75,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHy0VSlxGMpIw2S4X7Lp25mJqDfSkJTH19nA&usqp=CAU",
    },
    {
      id: 4,
      title: "MI Smart Clock",
      category: "Smartwatches",
      price: 68,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QE5IGEEhiAxv5E6rZ0QY7c5PIjdcuJqKdQ&usqp=CAU",
    },
    {
      id: 5,
      title: "AirPod pro",
      category: "Cameras & Headphones",
      price: 20,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0qoIHbVBez943-8O3JW-nUDIIJBBVKcK_w&usqp=CAU",
    },
    {
      id: 6,
      title: "Imac Pro",
      category: "Computers & Accessories",
      price: 68,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eoZ_MgG6Z_-bsmKvmpFGawUbEXRsFgcsVQ&usqp=CAU",
    },
    {
      id: 7,
      title: "Imac Pro",
      category: "Computers & Accessories",
      price: 68,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eoZ_MgG6Z_-bsmKvmpFGawUbEXRsFgcsVQ&usqp=CAU",
    },
    {
      id: 8,
      title: "Imac Pro",
      category: "Computers & Accessories",
      price: 68,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eoZ_MgG6Z_-bsmKvmpFGawUbEXRsFgcsVQ&usqp=CAU",
    },
  ];
  return (
    <div className="recentlyadded">
      <h1>Top Products</h1>
      <div className="products">
        <Swiper
          className="swiper"
          spaceBetween={50}
          autoplay={true}
          pagination={true}
          slidesPerView={4}
        >
          {data?.map((item) => (
            <SwiperSlide>
              <Link
                to={"/product/" + item.id}
                onClick={(e) => setItemQuantity(1)}
              >
                <List item={item} key={item.id} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentlyAdded;

import React from "react";
import "./Home.scss";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  FreeMode,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination, FreeMode, Autoplay]);

const Home = () => {
  return (
    <div className="home max-w-7xl m-auto">
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
        freeMode={true}
        autoplay={true}
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

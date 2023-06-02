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
import Hero from "../../components/Hero/Hero";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import FlashSale from "../../components/FlashSale/FlashSale";
import Popular from "../../components/Popular/Popular";
import Featured from "../../components/Featured/Featured";
import TopCategories from "../../components/TopCategories/TopCategories";
import RecentlyAdded from "../../components/RecentlyAdded/RecentlyAdded";
import Advert from "../../components/Advert/Advert";
import OverView from "../../components/OverView/OverView";

SwiperCore.use([Pagination, FreeMode, Autoplay]);

const Home = () => {
  return (
    <div className="home w-full max-w-7xl m-auto">
      <Hero />
      <FlashSale />
      <SpecialOffer />
      <Popular />
      <Featured />
      <TopCategories />
      <RecentlyAdded />
      <Advert />
      <OverView />
    </div>
  );
};

export default Home;

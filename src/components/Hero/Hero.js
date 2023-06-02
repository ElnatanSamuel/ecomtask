import React from "react";
import "./Hero.scss";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Pagination]);

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
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
      <div className="right">
        <div className="roof"></div>
        <div className="seminav">
          <div className="navitems">Home</div>
          <div className="navitems">Today's Deals</div>
          <div className="navitems">Trending Products</div>
          <div className="navitems">Blog</div>
          <div className="special">Special Offers</div>
        </div>
        <div className="herosection">
          <Swiper
            className="swiper"
            spaceBetween={50}
            autoplay={true}
            pagination={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="col">
                <div className="row">
                  <div className="details">
                    <span>Summer sale upto 60%</span>
                    <h1>Polaroid i-Type Instant Camera</h1>
                    <p>
                      Save and shoot straight from the box with 3 packs of
                      iconic Polaroid
                    </p>
                    <Link to="/products">
                      <button>SHOP NOW</button>
                    </Link>
                  </div>
                  <div className="image">
                    <img src="/img/polaroid.png" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="righthero">
                <div className="col">
                  <div className="row2">
                    <div className="details">
                      <span>Summer sale upto 60%</span>
                      <h1>OPPO Tablet</h1>
                      <p>
                        Save and shoot straight from the box with 3 packs of
                        iconic Polaroid
                      </p>
                      <Link to="/products">
                        {" "}
                        <button>SHOP NOW</button>
                      </Link>
                    </div>
                    <div className="image">
                      <img src="/img/tab.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="righthero">
                <div className="col">
                  <div className="row3">
                    <div className="details">
                      <span>Summer sale upto 60%</span>
                      <h1>DUALSHOCK Controller</h1>
                      <p>
                        Save and shoot straight from the box with 3 packs of
                        iconic Polaroid
                      </p>
                      <Link to="/products">
                        <button>SHOP NOW</button>
                      </Link>
                    </div>
                    <div className="image">
                      <img src="/img/gamec.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="lefthero">
            <div className="col">
              <div className="row">
                <div className="details">
                  <h1>JBL Music Speakers</h1>
                  <div className="minorDetails">
                    <p>Weekend discount</p>
                    <div className="prices">
                      <span className="newprice">$100</span>
                      <span className="oldprice">$250</span>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <img src="/img/jbl.png" alt="" />
                </div>
              </div>
              <div className="row2">
                <div className="details">
                  <h1>Apple AirPods</h1>
                  <div className="minorDetails">
                    <p>Weekend discount</p>
                    <div className="prices">
                      <span className="newprice">$200</span>
                      <span className="oldprice">$400</span>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <img src="/img/airpods.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useContext } from "react";
import "./HamMenu.scss";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/Context";

const HamMenu = () => {
  const { isOpen, setOpen } = useContext(cartContext);
  return (
    <div className="hammenu">
      <div className="left">
        <div className="option">
          <MenuOutlinedIcon />
          <span>Browse Categories</span>
        </div>
        <div className="catagories">
          <Link to="/products/105">
            <div className="category" onClick={(e) => setOpen(false)}>
              <span>Cellphone</span>
              <ArrowForwardIosOutlinedIcon />
            </div>
          </Link>
          <Link to="/products/102">
            <div className="category" onClick={(e) => setOpen(false)}>
              <span>Computers & Accessories</span>
              <ArrowForwardIosOutlinedIcon />
            </div>
          </Link>
          <Link to="/products/107">
            <div className="category" onClick={(e) => setOpen(false)}>
              <span>Smartwatches</span>
              <ArrowForwardIosOutlinedIcon />
            </div>
          </Link>
          <Link to="/products/101">
            <div className="category" onClick={(e) => setOpen(false)}>
              <span>Camera & Headphones</span>
              <ArrowForwardIosOutlinedIcon />
            </div>
          </Link>
          <Link to="/products/100">
            <div className="category" onClick={(e) => setOpen(false)}>
              <span>Video Games</span>
              <ArrowForwardIosOutlinedIcon />
            </div>
          </Link>
          <Link to="/products/110">
            <div className="category" onClick={(e) => setOpen(false)}>
              <span>TV</span>
              <ArrowForwardIosOutlinedIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamMenu;

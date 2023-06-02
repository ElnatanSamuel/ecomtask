import React, { useContext, useState } from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { cartContext } from "../../Context/Context";
import Hamburger from "hamburger-react";
import HamMenu from "../HamMenu/HamMenu";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishOpen, setWishOpen] = useState(false);
  const { cartQuantity, isOpen, setOpen } = useContext(cartContext);

  return (
    <div className="navbar max-w-7xl m-auto h-24">
      <div className="left">
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <Link to="/">
          <div className="logo">LOGO.</div>
        </Link>
      </div>
      <div className="center">
        <input type="text" placeholder="Search for products..." />
        <div className="cat">
          <span>All Categories</span>
          <ExpandMoreOutlinedIcon />
        </div>
        <button>
          <SearchOutlinedIcon sx={{ color: "#fff" }} />
        </button>
      </div>
      <div className="right">
        <div className="icon">
          <PersonOutlineOutlinedIcon
            className="avatar"
            sx={{ fontSize: "42px", color: "#7b7b7b" }}
          />
          <div className="detail">
            <span className="sign">Sign in</span>
            <span className="acc">Account</span>
          </div>
        </div>
        <div className="icon" onClick={(e) => setWishOpen(!wishOpen)}>
          {/* <FavoriteBorderOutlinedIcon
            sx={{ fontSize: "30px", color: "#7b7b7b" }}
          /> */}
          <UilHeart className="icont" color="#7b7b7b" />
          <div className="count">
            <span>0</span>
          </div>
        </div>
        <div className="icon" onClick={(e) => setCartOpen(!cartOpen)}>
          {/* <ShoppingBagOutlinedIcon
            sx={{ fontSize: "30px", color: "#7b7b7b" }}
          /> */}
          <UilShoppingBag className="icont" color="#7b7b7b" />
          <div className="count">
            <span>{cartQuantity}</span>
          </div>
        </div>
      </div>

      {cartOpen && <Cart />}
      {wishOpen && <WishList />}
      {isOpen && <HamMenu />}
    </div>
  );
};

export default Navbar;

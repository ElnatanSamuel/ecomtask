import React, { useState } from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="navbar max-w-7xl m-auto h-18">
      <Link to="/">
        <div className="logo">LOGO</div>
      </Link>
      {searchOpen ? (
        <div className="searchbar">
          <input type="text" placeholder="Search for products" />
          <button>
            <SearchOutlinedIcon sx={{ fontSize: "26px" }} />
          </button>
        </div>
      ) : null}
      <div className="icons">
        <div className="icon" onClick={(e) => setSearchOpen(!searchOpen)}>
          <SearchOutlinedIcon sx={{ fontSize: "26px" }} />
        </div>
        <div className="icon">
          <FavoriteBorderOutlinedIcon sx={{ fontSize: "26px" }} />
        </div>
        <div className="icon">
          <PersonOutlineOutlinedIcon sx={{ fontSize: "26px" }} />
        </div>
        <div className="icon">
          <ShoppingBagOutlinedIcon sx={{ fontSize: "26px" }} />
          <div className="cart">
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

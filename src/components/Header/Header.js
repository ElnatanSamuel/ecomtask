import React from "react";
import "./Header.scss";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Header = () => {
  return (
    <div className="header h-12">
      <div className="content max-w-7xl m-auto">
        <div className="left">
          <StorefrontOutlinedIcon />
          <span>Upto 60% off the entire store</span>
        </div>
        <div className="right">
          <div className="drop">
            <span>USD</span>
            <ExpandMoreOutlinedIcon />
          </div>
          <div className="drop">
            <span>English</span>
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

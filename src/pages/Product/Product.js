import React, { useContext, useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import RecentlyAdded from "../../components/RecentlyAdded/RecentlyAdded";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import OverView from "../../components/OverView/OverView";
import Featured from "../../components/Featured/Featured";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { cartContext } from "../../Context/Context";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [itemInCart, setItemInCart] = useState(false);
  const {
    cartQuantity,
    setCartQuantity,
    cartItems,
    setCartItems,
    itemQuantity,
    setItemQuantity,
    price,
    setPrice,
  } = useContext(cartContext);

  const id = useParams();
  console.log(id.id);

  const activeId = [parseInt(id.id)];

  const result = data.filter(({ id }) => activeId.includes(id));
  console.log(result);

  const images = [
    "https://images.pexels.com/photos/5480698/pexels-photo-5480698.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5480688/pexels-photo-5480688.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const handleAddToCart = (item) => {
    if (item) {
      item.quantity = itemQuantity;

      const singleItem = cartItems.find(
        (existingItem) => existingItem.id === item.id
      );

      if (singleItem) {
        singleItem.quantity += itemQuantity;
        setItemInCart(true);
        setTimeout(() => {
          setItemInCart(false);
        }, 3000);
      } else {
        setCartQuantity(cartQuantity + 1);
        cartItems.push(item);
      }

      setPrice(price + item.price * quantity);
    }
  };

  return (
    <>
      {itemInCart && <div className="itemincart">Item already in cart</div>}
      <div className="product  w-full max-w-7xl m-auto">
        {result?.map((item) => (
          <>
            <div className="left">
              <div className="images">
                <img src={item.img} alt="" onClick={(e) => setSelectedImg(0)} />
              </div>
              <div className="mainImg">
                <img src={item.img} alt="" />
              </div>
            </div>
            <div className="right">
              <h1>{item.title}</h1>
              <span className="price">${item.price}</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                consectetur, a autem consequatur quaerat aliquam nemo dolorem at
                facere cupiditate.
              </p>
              <div className="quantity">
                <button
                  onClick={() =>
                    setItemQuantity((prev) =>
                      prev <= 1 ? (prev = 1) : prev - 1
                    )
                  }
                >
                  -
                </button>
                {itemQuantity}
                <button onClick={() => setItemQuantity(itemQuantity + 1)}>
                  +
                </button>
              </div>

              <button className="add" onClick={(e) => handleAddToCart(item)}>
                <AddShoppingCartIcon /> ADD TO CART
              </button>
              <div className="links">
                <div className="item">
                  <FavoriteBorderIcon /> ADD TO WISHLIST
                </div>
                <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>
              <div className="info">
                <span>Vendor:</span>
                <span>Product Type:</span>
                <span>Tag:</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="addition w-full max-w-7xl m-auto">
        <RecentlyAdded />
        <Featured />
        <OverView />
      </div>
    </>
  );
};

export default Product;

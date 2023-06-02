import React, { useContext, useEffect, useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import { cartContext } from "../../Context/Context";

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    cartQuantity,
    setCartQuantity,
    itemQuantity,
    setItemQuantity,
    price,
    setPrice,
  } = useContext(cartContext);
  const [localCartItems, setLocalCartItems] = useState([]);

  // useEffect(() => {
  //   setLocalCartItems(JSON.parse(localStorage.getItem("cartItems")));
  // }, [cartItems]);

  const handleDeleteItem = (item) => {
    const index = cartItems.indexOf(item);
    const newCartItem = cartItems
      .slice(0, index)
      .concat(cartItems.slice(index + 1));

    setCartItems(newCartItem);
    setCartQuantity(cartQuantity - 1);
  };

  const handleCartReset = () => {
    setCartItems([]);
    setCartQuantity(0);
  };

  const quantity = itemQuantity;
  return (
    <div className="cart">
      <h1>Products in cart</h1>
      {cartItems?.map((item) => (
        <div className="item" key={item.id}>
          <div className="left">
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>

              <div className="price">
                {item.quantity} x ${item.price}
              </div>
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={(e) => handleDeleteItem(item)}
          />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${price}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={(e) => handleCartReset()}>
        Reset cart
      </span>
    </div>
  );
};

export default Cart;

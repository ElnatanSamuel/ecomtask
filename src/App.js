import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newletter/Newsletter";
import Header from "./components/Header/Header";
import { cartContext } from "./Context/Context";
import { useEffect, useState } from "react";
import AllProducts from "./pages/AllProducts/Allproducts";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
    ],
  },
]);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [isOpen, setOpen] = useState(false);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("cartItems"));
  //   const quantity = localStorage.getItem("cartQuantity");
  //   if (items) setCartItems(items);
  //   if (quantity) {
  //     setCartQuantity(cartQuantity + quantity);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (cartItems?.length) {
  //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //     localStorage.setItem("cartQuantity", cartQuantity);
  //   }
  // }, [cartItems, cartQuantity]);

  return (
    <cartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartQuantity,
        setCartQuantity,
        itemQuantity,
        setItemQuantity,
        price,
        setPrice,
        isOpen,
        setOpen,
      }}
    >
      <div className="App relative">
        <RouterProvider router={router} />
      </div>
    </cartContext.Provider>
  );
}

export default App;

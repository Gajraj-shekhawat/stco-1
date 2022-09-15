import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Checkout from "../pages/Checkout";
import Homepage from "../pages/Homepage";
import Order from "../pages/Order";
import Product from "../pages/Product";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Checkout />} />
      <Route path="/order" element={<Order />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AllRoutes;

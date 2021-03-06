import Header from "../layouts/Header";
import SliderBar from "./SlideBar";
import Footer from "../layouts/Footer";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {  useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";
import CardItem from "./Card";

function ProductItem() {
  return (
    <div className="App">
      <Header />
      <SliderBar />
      <Footer />
    </div>
  );
}


export default ProductItem;

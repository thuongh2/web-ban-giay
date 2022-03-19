import "../styles/productDetail.scss";
import AddCard from "./AddCard";
import Footer from "./Footer";
import Header from "./Header";
import ProductCarousel from "./ProductCarousel";
import ProductOffer from "./ProductOffer";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase.js";
import { useParams } from "react-router-dom";

export default function ProductDetail() {

  let { productId} = useParams();

  console.log(productId);

  return (
    <div className="productDetail">
      <Header />
      {/* product detail */}
      <div className="product">
        <div className="productCarousel">
          {/* slidebar */}
          <ProductCarousel />
        </div>
        <div className="productDiscription">
          {/* disciption */}
          
          <AddCard />
        </div>
      </div>
      <ProductOffer />

      <Footer />
    </div>
  );
}

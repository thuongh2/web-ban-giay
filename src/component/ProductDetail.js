import "../styles/productDetail.scss";
import AddCard from "./AddCard";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ProductCarousel from "./ProductCarousel";
import ProductOffer from "./ProductOffer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadSelectedItem } from "../redux/Shopping/shoppingActions";

export default function ProductDetail() {
  // const [product, setProduct] = useState([]);
  const product = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();

  let { productId } = useParams();
  console.log(productId);

  useEffect(async () => {
    dispatch(loadSelectedItem(productId));

    // getProduct();
  }, []);

  return (
    <div className="productDetail">
      {/* product detail */}
      <div className="product">
        {product != null && product !== undefined ? (
          <>
            <div className="productCarousel">
              {/* slidebar */}
              <ProductCarousel image={product.image} />
            </div>
            <div className="productDiscription mb-5">
              <h3 className="mb-3">{product.name}</h3>
              <div className="h5 mb-3 mt-2">
                <span>{product.price} VNĐ</span>
              </div>
              <span>{product.description}</span>
              <AddCard product={product} />
            </div>
          </>
        ) : (
          "no"
        )}
      </div>
        <ProductOffer category={product.category} />
    </div>
  );
}

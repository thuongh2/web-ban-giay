import "../styles/productDetail.scss";
import AddCard from "./AddCard";
import Footer from "./Footer";
import Header from "./Header";
import ProductCarousel from "./ProductCarousel";
import ProductOffer from "./ProductOffer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);

  let { productId } = useParams();

  console.log(productId);

  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get(`http://localhost:8080/product/${productId}`)
        .then((res) => {
          const persons = res.data;
          console.log(persons);
          setProduct(persons);
        })
        .catch((error) => console.log(error));
    };

    getProduct();

    console.log(product);
  }, []);

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
          <h3>{product.name}</h3>
          <span>{product.price}</span>

          <AddCard />
        </div>
      </div>
      <ProductOffer />

      <Footer />
    </div>
  );
}

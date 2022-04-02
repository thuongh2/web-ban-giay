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
  }, [productId]);


  return (
    <div className="productDetail">
      <Header />
      {/* product detail */}
      <div className="product">
        <div className="productCarousel">
          {/* slidebar */}
          <ProductCarousel image={product.image}/>
        </div>
        <div className="productDiscription mb-5">
          <h3>{product.name}</h3>
          <div className='h5 mb-3 mt-2'>
            <span>{product.price} VNĐ</span>
          </div>
          <span >{product.description}</span>
          <AddCard product={product} />
        </div>
      </div>
      <ProductOffer category={product.category} />

      <Footer />
    </div>
  );
}

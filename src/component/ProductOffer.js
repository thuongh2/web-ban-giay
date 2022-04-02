import "../styles/productOffer.scss";
import { products } from "../data/header";
import CardItem from "./Card";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "../styles/hideScrollbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductOffer(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get(`http://localhost:8080/product/category/${props.category.name.toLowerCase()}`)
        .then((res) => {
          setProducts(res.data);
          console.log(products);
        })
        .catch((error) => console.log(error));
      };
    getProducts();
  }, [props]);

  console.log(products);
  
  return (
    <div className="productOffer container">
      <h3>Similar Product</h3>
      <div>
        <ScrollMenu>
          {products.map((product) => (
            <Link
              className=" text-secondary text-decoration-none"
              to={`/product/${product.code}`}
              key={product.code}
            >
              <CardItem
                className="productCard"
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </Link>
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}

import "../styles/productOffer.scss";
import { products } from "../data/header";
import CardItem from "./Card";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "../styles/hideScrollbar.css";
import { Link } from "react-router-dom";

export default function ProductOffer(props) {
  console.log("ProductOffer")
  return (
    <div className="productOffer container">
      <h3>Similar Product</h3>
      <div>
        <ScrollMenu>
          {products.map((product) => (
            <Link className=" text-secondary text-decoration-none" to={`/product/${product.id}`} key={product.id}>
              <CardItem
                className="productCard"
                image={product.src}
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

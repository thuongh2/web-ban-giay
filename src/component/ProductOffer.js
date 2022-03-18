import "../styles/productOffer.scss";
import { products } from "../data/header";
import CardItem from "./Card";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "../styles/hideScrollbar.css";

export default function ProductOffer(props) {
  return (
    <div className="productOffer container">
      <h3>Similar Product</h3>
      <div>
        <ScrollMenu>
          {products.map((product) => (
            <CardItem 
              className="productCard"
              image={product.src}
              name={product.name}
              price={product.price}
            />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}

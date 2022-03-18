import { Row } from "react-bootstrap";
import "../styles/product.scss";
import CardItem from "./Card";
import { products } from "../data/header";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="container">
      <div className="headerProduct">
        <h2>Spring&Summer Models</h2>
      </div>
      <div className="products">
        {products.map((product) => (
          <Link className=" text-secondary text-decoration-none" to={`/product/${product.id}`}  key={product.id}>
            <CardItem
              key={product.id}
              className="productCard"
              image={product.src}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
      </div>

      {/* <div className="cardItem">
        <div>
          <div>
            <CardItem />
          </div>
          <div>
            <CardItem />
          </div>
          <div>
            <CardItem />
          </div>
        </div>
        <div>
          <div>
            <CardItem />
          </div>
          <div>
            <CardItem />
          </div>
          <div>
            <CardItem />
          </div>
        </div>
      </div> */}
    </div>
  );
}

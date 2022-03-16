import { Row } from "react-bootstrap";
import "../styles/product.scss";
import CardItem from "./Card";

export default function Product() {
  return (
    <div className="container">
      <div>
        <h2>Spring&Summer Models</h2>
      </div>
    <div className="products">
      <CardItem className="productCard"  />
      <CardItem className="productCard" />
      <CardItem className="productCard"/>
      <CardItem className="productCard"/>
      <CardItem className="productCard" />
      <CardItem className="productCard"/>
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

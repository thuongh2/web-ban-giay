import "../styles/addCard.scss";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function AddCard(props) {
  const [p, setP] = useState([]);



  const handelSubmit = async (e) => {
    e.preventDefault();
    setP(props.product);
    let products = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }
    // check unique product
    if (products != null) { 
      products.push(p);
      localStorage.setItem("products", JSON.stringify(products));
    }
  };
  console.log(p);

  return (
    <div className="inputSize">
      <form onSubmit={handelSubmit}>
        <div>
          <label for="cars">Size:</label>
        </div>
        <div className="select">
          <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="btnSubmit">
          <input type="submit" class="btn btn-primary" value="ADD" />
        </div>
      </form>
    </div>
  );
}

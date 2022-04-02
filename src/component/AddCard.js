import "../styles/addCard.scss";
import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Select from "react-select";

export default function AddCard(props) {
  const [p, setP] = useState([]);
  const [size, setSize] = useState("");
  //bug
  useEffect(async () => {
    setSize(props.product.size);
  }, [props.product]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setP(props.product);
    let products = [];
    let count = 0;
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
      count = JSON.parse(localStorage.getItem("counters"));
    }
    // check unique product
    if (products != null || products.length != 0) {
      products.push(p);
      count++;
      localStorage.setItem("products", JSON.stringify(products));
      localStorage.setItem("counters", JSON.stringify(count));
    } else {
      localStorage.setItem("products", JSON.stringify(p));
      localStorage.setItem("counters", JSON.stringify(count));
    }
  };

  const converSize = () => {
    if (size !== undefined) {
      const options = [];
      size.split(",").map((s) => options.push({ value: s, label: s }));
      console.log(options);
      return options;
    }
  };

  const handleChange = (selectedOption) => {
    props.product.size = selectedOption.value;
  };
  //bug
  return (
    <div className="inputSize">
      <form onSubmit={handelSubmit}>
        <div>
          <label className="mt-2 mb-3">Size:</label>
        </div>
        <div className="select">
          <Select
            value={props.product.size}
            onChange={handleChange}
            options={converSize()}
          />
        </div>
        <div className="btnSubmit">
          <input type="submit" class="btn btn-primary" value="ADD" />
        </div>
      </form>
    </div>
  );
}

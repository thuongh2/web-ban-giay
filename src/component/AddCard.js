import "../styles/addCard.scss";
import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Select from "react-select";
// Redux
import {
  addToCart
} from "../redux/Shopping/shopping-actions";
import { useDispatch } from "react-redux";

function AddCard(props) {
  const [p, setP] = useState([]);
  const [size, setSize] = useState("");
  const dispatch = useDispatch()
  //bug
  useEffect(async () => {
    setSize(props.product.size);
  }, [props.product]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    dispatch(addToCart(props.product))
  };

  console.log(props.product)

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


export default (AddCard);


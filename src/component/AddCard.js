import "../styles/addCard.scss";
import { useEffect, useState } from "react";
import Select from "react-select";
// Redux
import { addToCart } from "../redux/Shopping/shopping-actions";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";

function AddCard(props) {
  const [size, setSize] = useState(props.product.size);
  const productCurrent = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();

  const handelSubmit = async (e) => {
    e.preventDefault();
    dispatch(addToCart(productCurrent));
  };

  const converSize = () => {
    if (size !== undefined) {
      const options = [];
      size.split(",").map((s) => options.push({ value: s, label: s }));
      console.log(options);
      return options;
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    productCurrent.size = e.target.value;
  };

  //if dont select

  return (
    <div className="inputSize">
      <form onSubmit={handelSubmit}>
        <div>
          <label className="mt-2 mb-3">Size:</label>
        </div>
        <div className="select">
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option>Open this select menu</option>
         
          </Form.Select>
        </div>
        <div className="btnSubmit">
          <input type="submit" class="btn btn-primary" value="ADD" />
        </div>
      </form>
    </div>
  );
}

export default AddCard;

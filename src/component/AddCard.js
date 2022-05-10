import "../styles/addCard.scss";
import { useEffect, useState } from "react";
import Select from "react-select";
// Redux
import { addToCart } from "../redux/Shopping/shoppingActions";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function AddCard(props) {
  const [size, setSize] = useState(props.product.size);
  const productCurrent = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  let history = useHistory();

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (productCurrent.size == null) {
      console.error("day")
      setError("Vui long chon size");
    } else {
      await dispatch(addToCart(productCurrent));
      history.push("/cart");
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
          <select value={size} onChange={handleChange}>
            {productCurrent.sizes.map((option) => (
              <option value={option.id}>{option.size}</option>
            ))}
          </select>
        </div>
        <div className="btnSubmit">
          <input type="submit" class="btn btn-primary" value="ADD" />
        </div>
        {error}
      </form>
    </div>
  );
}

export default AddCard;

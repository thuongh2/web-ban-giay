import "../styles/ProductCard.scss";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Shopping/shoppingActions";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [product, setProduct] = useState(props.product);
  const dispatch = useDispatch();


  const handleDelete = (event, productCode) => {
    console.log(productCode);
    dispatch(removeFromCart(product.id));
  };

  var image = null;

  if (product.image.length > 0) {
    image = product.image[0].thumbnail;
  }

  return (
    <>
      <div className="productCard">
        <Link
          className=" text-secondary text-decoration-none"
          to={`product/${product.id}`}
          key={product.id}
        >
          {/* product */}
          <div className="product">
            <div className="image">
              <img src={image}></img>
            </div>
            <div className="infomation">
              <div className="name">{product.name}</div>
              <div className="price">{product.price}</div>
            </div>
          </div>
        </Link>

        {/* amount */}
        <div>
          <div className="amount">
            <MdDeleteForever
              size={30}
              color={"#C5CAE9"}
              onClick={(e) => handleDelete(e, product.code)}
            />
            <input type="number" value={product.qty} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

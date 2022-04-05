import "../styles/ProductCard.scss";
import { MdDeleteForever } from 'react-icons/md'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Shopping/shopping-actions";

function ProductCard(props) {
  const [product, setProduct] = useState(props.product)
  const dispatch = useDispatch()

  console.log(props.product.qty)

  const handleDelete = (event, productCode)=>{
    dispatch(removeFromCart(productCode))
  }

  return (
    <div className="productCard">
      {/* product */}
      <div className="product">
        <div className="image">
          <img src={product.image}></img>
        </div>
        <div className="infomation">
          <div className="name">{product.name}</div>
          <div className="price">{product.price}</div>
        </div>
      </div>
      {/* amount */}
      <div className="amount">
        <MdDeleteForever size={30} color='#333' onClick={(e)=>handleDelete(e, product.code)}/>
        <input type="number" value={product.qty} />
      </div>
    </div>
  );
}

export default ProductCard;

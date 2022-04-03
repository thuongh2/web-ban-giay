import "../styles/ProductCard.scss";
import { MdDeleteForever } from 'react-icons/md'
import { useState } from "react";

function ProductCard(props) {
  const [product, setProduct] = useState(props.product)

  const handleDelete = (event)=>{
    
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
        <MdDeleteForever size={30} color='#333' onClick={handleDelete}/>
        <input type="number" />
      </div>
    </div>
  );
}

export default ProductCard;

import "../styles/product.scss";
import CardItem from "./Card";
import { Link } from "react-router-dom";
import LoadingIcons from "react-loading-icons";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getAllProductByCategoryId, getAllProduct
} from "../redux/Shopping/shopping-actions";
import { useEffect } from "react";

function Product(props) {

  const products = useSelector((state) => state.shop.product)
  const dispatch = useDispatch()

  useEffect( async ()=>{
    // if(props.category.name && props.category.name != "")
    //   dispatch(getAllProductByCategoryId(props.category.name))
    dispatch(getAllProduct())
  }, [])


  let productsR = <LoadingIcons.Bars stroke="#000" strokeOpacity={0.125} />;
  if (products !== undefined && products !== null) {
    productsR = products.map((product) => (
      <>
        <Link
          className=" text-secondary text-decoration-none"
          to={`/product/${product.id}`}
          key={product.id}
        >
          <CardItem
            key={product.id}
            className="productCard"
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </Link>
 
      </>
    ));
  }

  return (
    <div className="container">
      <div className="headerProduct">
        {/* <h2>{props.category.name}</h2> */}
      </div>
      <div className="products">{productsR}</div>
    </div>
  );
}




export default (Product);

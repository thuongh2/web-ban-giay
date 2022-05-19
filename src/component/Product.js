import "../styles/product.scss";
import CardItem from "./Card";
import { Link, useParams } from "react-router-dom";
import LoadingIcons from "react-loading-icons";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getAllProductByCategoryId,
  getAllProduct,
} from "../redux/Shopping/shoppingActions";
import { useEffect } from "react";
import SliderBar from "./SlideBar";

function Product(props) {
  const products = useSelector((state) => state.shop.product);
  const categories = useSelector((state) => state.shop.category);
  const dispatch = useDispatch();
  const categoryName = useParams();

  useEffect(async () => {
    // Get all products in reducer
    await dispatch(getAllProduct());
  }, [categoryName]);

  console.log(categoryName);

  //list products by category
  const listProducts = (category) => {
    // filter products by category

    const productCategory = products.filter(
      (product) => product.category.name === category.name
    );

    return (
      <div>
        <h1 className="category">{category.name}</h1>
        <div className="products">
          {productCategory.map((product) => (
            <Link
              className=" text-secondary text-decoration-none"
              to={`/product/${product.id}`}
              key={product.id}
            >
              <CardItem
                type="big"
                key={product.id}
                className="productCard"
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  // check path when to render
  function productMain() {
    if (categoryName.name !== undefined) {
      return listProducts(categoryName);
    } else {
      return categories.map((category) => listProducts(category));
    }
  }

  return (
    <>
      <SliderBar />
      <div className="container">{productMain()}</div>
    </>
  );
}

export default Product;

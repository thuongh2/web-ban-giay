import "../styles/productOffer.scss";
import { products } from "../data/header";
import CardItem from "./Card";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "../styles/hideScrollbar.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadSelectedItem } from "../redux/Shopping/shoppingActions";

export default function ProductOffer(props) {
  const products = useSelector((state) => state.shop.product);

  const dispatch = useDispatch();

  let { productId } = useParams();

  //load page when change product
  useEffect(async () => {
    dispatch(loadSelectedItem(productId));
  }, [productId]);


  const productCategory = products.filter(
      (product) => product.category.id === props.category.id)


  return (
    <div className="productOffer container">
      <h3 className="m-5">Similar Product</h3>
      <div>
        <ScrollMenu className="productScroll">
        {productCategory.map((product) => (
            <Link
              className=" text-secondary text-decoration-none"
              to={`/product/${product.id}`}
              key={product.id}
            >
              <CardItem
                type="min"
                className="productCard"
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </Link>
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}

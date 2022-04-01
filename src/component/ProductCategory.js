import axios from "axios";
import "../styles/product.scss";
import { useEffect, useState } from "react";
import LoadingIcons from "react-loading-icons";
import { Link, useLocation } from "react-router-dom";
import CardItem from "./Card";

export default function ProductCategory() {
  const { pathname } = useLocation();
  const [product, setProduct] = useState([]);

  console.log(pathname);

  useEffect(() => {
    const getProduct = async () => {
      axios
        .get(`http://localhost:8080/product/category${pathname.toLowerCase()}`)
        .then((res) => {
          const persons = res.data;
          setProduct(persons);
          console.log(product);
        })
        .catch((error) => console.log(error));
    };
    getProduct();
  }, [pathname]);

  let productsCategory = (
    <LoadingIcons.Bars stroke="#000" strokeOpacity={0.125} />
  );
  if (product != undefined || product.length != 0) {
    productsCategory = product.map((product) => (
      <Link
        className=" text-secondary text-decoration-none"
        to={`/product/${product.code}`}
        key={product.code}
      >
        <CardItem
          key={product.code}
          className="productCard"
          image={product.image}
          name={product.name}
          price={product.price}
        />
      </Link>
    ));
  }
  return (
    <div className="mb-5">
      <div className="headerProduct">
        <h2>{pathname.slice(1)}</h2>
      </div>
      <div className="products">{productsCategory}</div>
    </div>
  );
}

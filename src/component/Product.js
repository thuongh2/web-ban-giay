import "../styles/product.scss";
import CardItem from "./Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";

export default function Product(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    await axios
      .get(`http://127.0.0.1:8080/product?category=${props.category.id}`)
      .then((res) => {
        const persons = res.data;
        setTasks(persons);
      })
      .catch((error) => console.log(error));
  }, []);

  let products = <LoadingIcons.Bars stroke="#000" strokeOpacity={.125} />;
  if (tasks != undefined || tasks.length != 0) {
    products = tasks.map((product) => (
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
    <div className="container">
      <div className="headerProduct">
        <h2>{props.category.name}</h2>
      </div>
      <div className="products">
        {products}
      </div>
    </div>
  );
}

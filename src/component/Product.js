import "../styles/product.scss";
import CardItem from "./Card";
import { products } from "../data/header";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import {collection, query, onSnapshot} from "firebase/firestore"
import {db} from '../firebase.js'
import axios from 'axios';

export default function Product() {
  const [tasks, setTasks] = useState([])

  useEffect(async() => {
    await axios.get(`http://127.0.0.1:8080/products`)
    .then(res => {
      const persons = res.data;
      setTasks(persons);
    })
    .catch(error => console.log(error));
  },[])

  console.log(tasks)

  return (
    <div className="container">
      <div className="headerProduct">
        <h2>Spring&Summer Models</h2>
      </div>
      <div className="products">
        {tasks.map((product) => (
          <Link className=" text-secondary text-decoration-none" to={`/product/${product.code}`}  key={product.code}>
            <CardItem
              key={product.code}
              className="productCard"
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
      </div>

      {/* <div className="cardItem">
        <div>
          <div>
            <CardItem />
          </div>
          <div>
            <CardItem />
          </div>
          <div>
            <CardItem />
          </div>
        </div>
        <div>
          <div>
            <CardItem />
          </div>
          <div>
            <CardItem />
          </div>
          <div>
            <CardItem />
          </div>
        </div>
      </div> */}
    </div>
  );
}

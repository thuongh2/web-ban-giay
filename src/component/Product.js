import "../styles/product.scss";
import CardItem from "./Card";
import { products } from "../data/header";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import {collection, query, onSnapshot} from "firebase/firestore"
import {db} from '../firebase.js'

export default function Product() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const q = query(collection(db, '20133012'))
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  console.log(tasks)

  return (
    <div className="container">
      <div className="headerProduct">
        <h2>Spring&Summer Models</h2>
      </div>
      <div className="products">
        {tasks.map((product) => (
          <Link className=" text-secondary text-decoration-none" to={`/product/${product.id}`}  key={product.id}>
            <CardItem
              key={product.id}
              className="productCard"
              image={product.data.image}
              name={product.data.name}
              price={product.data.price}
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

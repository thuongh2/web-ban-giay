import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/ProductList.scss";
import Product from "./Product";

function ProductList(props) {
  const [categorys, setCategorys] = useState([]);

  useEffect(async () => {
    const getCategorys = await axios
      .get("http://localhost:8080/categories")
      .then((res) => {
        setCategorys(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  return <div className="productList">
      {categorys.map(category => <Product category={category}/>)}
  </div>;
}

export default ProductList;

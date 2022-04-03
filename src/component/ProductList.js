import axios from "axios";
import { useEffect, useState } from "react";
import LoadingIcons from "react-loading-icons";
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

  let categories = <LoadingIcons.Bars stroke="#000" />;
  if (categorys !== undefined || categorys !== null) {
    categories = categorys.map((category) => <Product category={category} />);
  }
  return (
    <div className="productList">
      {/* {categorys.map((category) => (
        <Product category={category} />
      ))} */}
      <Product />
    </div>
  );
}

export default ProductList;

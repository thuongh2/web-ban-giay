import { Table } from "react-bootstrap";
import { products } from "../data/header";
import "../styles/ProductTable.scss";

function ProductTable() {
  const titleColumn = ["Product", "Price", "Quantity", "Total"];
  const products = JSON.parse(localStorage.getItem('products'));
  console.log(products);
  return (
    <div className="table">
      123
      
    </div>
  );
}

export default ProductTable;

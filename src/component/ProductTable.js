import { Table } from "react-bootstrap";
import { products } from "../data/header";
import "../styles/ProductTable.scss";

function ProductTable() {
  const titleColumn = ["Product", "Price", "Quantity", "Total"];

  return (
    <div className="table">
      <Table responsive size="sm">
        <thead>
          <tr>
            {titleColumn.map((t) => (
              <th className="tableTitle">{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr className="tableTitle">
                <td className="productInfo">
                  <div>
                    <img src={product.src} alt="Product" />
                  </div>
                  <div className="productName">
                    <h5>{product.name}</h5>
                    <span className="size">{product.size}</span>
                    <a href="#">Remove</a>
                  </div>
                </td>
                <td>
                  <span className="">{product.price}</span>
                </td>
                <td className="quantity">
                  <input id="number" type="number" className="quantityInput" />
                </td>
                <td>
                  <span>{product.price}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductTable;

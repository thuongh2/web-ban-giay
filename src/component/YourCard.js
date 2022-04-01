import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";
import "../styles/yourCard.scss";
import ProductTable from "./ProductTable";
import { useEffect, useMemo, useState } from "react";

function YourCard() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  useEffect(() => {}, []);

  console.log(products);

  const columns = useMemo(
    () => [
      {
        Header: "Product table",
        columns: [
          {
            Header: "code",
            accessor: "code",
          },
          {
            Header: "name",
            accessor: "name",
            // Cell method will provide the cell value; we pass it to render a custom component
          },
          {
            Header: "price",
            accessor: "price",
            // Cell method will provide the value of the cell; we can create a custom element for the Cell
          },
          {
            Header: "image",
            accessor: "image",
            Cell: ({ cell: { value } }) => {
              return (
                <img className="" width="150px" height="150px" src={value} />
              );
            },
          },
        ],
      },
    ],
    []
  );
  return (
    <div>
      <Header />
      <div className="container youCard">
        <div className="header">
          <h2>Your Card</h2>
        </div>
        {/* <Table columns={columns} data={products} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default YourCard;

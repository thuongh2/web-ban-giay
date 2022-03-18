import Header from "./Header";
import Footer from "./Footer";
import "../styles/yourCard.scss";
import ProductTable from "./ProductTable";

function YourCard() {
  return (
    <div>
      <Header />
      <div className="container youCard">
        <div className="header">
          <h2>Your Card</h2>
        </div>

        <div className="">
          <ProductTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default YourCard;

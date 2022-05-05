import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import "../styles/yourCard.scss";
import ProductCard from "./ProductCard";
import FormBuy from "./FormBuy";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function YourCard() {
  const products = useSelector((state) => state.shop.cart);

  let productCard = <p>Khong co san pham</p>;

  console.log(products);

  let cost = products
    .map((product) => product.price)
    .reduce((prev, curr) => prev + curr, 0);
  console.log(cost);

  let deliver = 0;

  let nonProduct = (
    <div className="d-flex align-items-center justify-content-center h4 nonProduct">
      <div>
        <p>
          Chưa có sản phẩm <Link to="/">.Đi đến trang chủ</Link>
        </p>
      </div>
    </div>
  );

  if (products.length > 0) {
    productCard = products.map((product) => <ProductCard product={product} />);

    nonProduct = (
      <div className="yourProduct">
        <div className="product ml-2">
          {productCard}
          <div className="productTotal">
            <div className="productPrice d-flex flex-row justify-content-between">
              <div className="">
                <h4>Tạm tính: </h4>
              </div>
              <div className="h4 text-danger">{cost} VNĐ</div>
            </div>
            <div className="productDelivery d-flex flex-row justify-content-between">
              <div className="">
                <h4>Phí vận chuyển: </h4>
              </div>
              <div className="h4 text-danger">{deliver} VNĐ</div>
            </div>
            <div className="productTotalPrice d-flex flex-row justify-content-between">
              <div className="h4 ">
                <h4>Tổng cộng: </h4>
              </div>
              <div className="h4 text-danger">{cost + deliver} VNĐ</div>
            </div>
          </div>
        </div>
        <div className="info">
          <FormBuy />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container youCard">
        <div className="header">
          <h2>Your Card</h2>
        </div>
        {nonProduct}
      </div>
      <Footer />
    </div>
  );
}

export default YourCard;

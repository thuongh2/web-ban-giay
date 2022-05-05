import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import NotFound from "../component/NotFound";
import ProductItem from "../component/ProductItem";
import ProductCategory from "../component/ProductCategory";
import Login from "../component/Login";
import Register from "../component/Register";
import YourCard from "../component/YourCard";
import ProductDetail from "../component/ProductDetail";
import Product from "../component/Product";
import Header from "./Header";
import Footer from "./Footer";
import AdminBusiness from "../admin/AdminBusiness";

function Body() {
  return (
    <div className="Body">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Product} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/admin" component={AdminBusiness} /> */}
          <Route exact path="/product/:productId" component={ProductDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Body;

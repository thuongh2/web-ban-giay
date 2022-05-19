import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../component/Login";
import Register from "../component/Register";
import YourCard from "../component/YourCard";
import ProductDetail from "../component/ProductDetail";
import Product from "../component/Product";
import Header from "./Header";
import Footer from "./Footer";

function Body() {
  return (
    <div className="Body">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route index exact path="/" component={Product} />
          <Route exact path="/category/:name" component={Product} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={YourCard} />
          <Route exact path="/product/:productId" component={ProductDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Body;

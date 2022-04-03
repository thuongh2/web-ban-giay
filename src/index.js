import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import YourCard from "./component/YourCard";
import ProductDetail from "./component/ProductDetail";
import ProductItem from "./component/ProductItem";
import Register from "./component/Register";
import AdminPro from "./component/AdminPro";
import AddminProduct from "./component/AddminProduct";
import ProductCategory from "./component/ProductCategory";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import NotFound from "./component/NotFound"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path='*' element={<NotFound />} />
        <Route path="" element={<App />} />

        <Route path="" element={<ProductItem />}>
          <Route path=":name" element={<ProductCategory />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<YourCard />} />
        <Route path="product/:productId" element={<ProductDetail />}></Route>
        <Route path="admin" element={<AddminProduct />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="collections">
          <Route path="collections/Men" element={<ProductItem />}></Route>
          <Route path="collections/Women" element={<ProductItem />}></Route>
          <Route path="collections/Accessories" element={<ProductItem />} />
          <Route path="collections/Oulet" element={<ProductItem />}></Route>
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<YourCard />} />
      <Route path="product/:productId" element={<ProductDetail />}></Route>
      <Route path="admin" element={<AddminProduct />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

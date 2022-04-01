import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderBar from "./component/SlideBar";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Register from "./component/Register";
import ProductDetail from "./component/ProductDetail";
import YourCard from "./component/YourCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddminProduct from "./component/AddminProduct";
import ProductList from "./component/ProductList";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="silerbar">
        <SliderBar />
      </div>
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;

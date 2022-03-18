import Header from "./Header";
import SliderBar from "./SlideBar";
import Product from "./Product";
import Footer from "./Footer";


function ProductItem() {
  return (
    <div className="App">
      <Header />
      <SliderBar />
      <Product />
      <Product />
      <Product />
      <Footer />
    </div>
  );
}

export default ProductItem;

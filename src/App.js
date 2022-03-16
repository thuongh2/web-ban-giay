import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderBar from './component/SlideBar';
import Product from './component/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <SliderBar/>
      <Product/>
    </div>
  );
}

export default App;

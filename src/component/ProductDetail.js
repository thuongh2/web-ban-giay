import "../styles/productDetail.scss";
import AddCard from "./AddCard";
import Footer from "./Footer";
import Header from "./Header";
import ProductCarousel from "./ProductCarousel";
import ProductOffer from "./ProductOffer";

export default function ProductDetail() {
  return (
    <div className="productDetail">
      <Header />
      {/* product detail */}
      <div className="product">
        <div className="productCarousel">
          {/* slidebar */}
          <ProductCarousel />
        </div>
        <div className="productDiscription">
          {/* disciption */}
          <p>
            One another year, as a Star Wars movie, a new redesign of our
            Materia returns. This time we introduce Materia Olimpia, the new
            standard bearer of the maximum sports performance of Muroexe.
          </p>
          <p>
            The recipe for this model is very simple, take note: A base of our
            iconic Materia sole, we add a surface in polyester, elastane and
            cotton (always technical), we put some reinforced heel to facilitate
            the fit and serve it with a unique thermosealed tongue.
          </p>
          <p>
            Oh and don't forget that it has our 2 pieces of anti-slip rubber. We
            don't want you to suffer any slip this season.
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip{" "}
          </p>

          <AddCard />
        </div>
      </div>
      <ProductOffer />

      <Footer />
    </div>
  );
}

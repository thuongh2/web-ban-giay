import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import '../styles/productCarousel.scss'


export default function ProductCarousel() {

  return (
    <Carousel className="carouselProduct">
      <div>
        <img src="https://cdn.shopify.com/s/files/1/1241/4530/products/MateriaOlimpiaBlack_perfil_1024x1024@2x.jpg?v=1579770058" />
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/1241/4530/products/MateriaOlimpiaBlack_perfil_1024x1024@2x.jpg?v=1579770058" />
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/1241/4530/products/MateriaOlimpiaBlack_perfil_1024x1024@2x.jpg?v=1579770058" />
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/1241/4530/products/MateriaOlimpiaBlack_perfil_1024x1024@2x.jpg?v=1579770058" />
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/1241/4530/products/MateriaOlimpiaBlack_perfil_1024x1024@2x.jpg?v=1579770058" />
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/1241/4530/products/MateriaOlimpiaBlack_perfil_1024x1024@2x.jpg?v=1579770058" />
      </div>
    </Carousel>
  );
}

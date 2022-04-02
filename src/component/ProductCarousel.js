import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/productCarousel.scss";

export default function ProductCarousel(props) {
  let carousel = <span>"no"</span>;
  if (props.image !== undefined ) {
    carousel = (
      <Carousel className="carouselProduct">
        <div>
          <img src={props.image} alt="no" />
        </div>
        <div>
          <img src={props.image} alt="no" />
        </div>
        <div>
          <img src={props.image} alt="no" />
        </div>
        
      </Carousel>
    );
  }
  return <div>{carousel}</div>;
}

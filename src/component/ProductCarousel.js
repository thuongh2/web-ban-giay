import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/productCarousel.scss";

export default function ProductCarousel(props) {
  let carousel = <span>"no"</span>;

  if (props.image.length > 0) {
    carousel = (
      <Carousel className="carouselProduct">
        {props.image.map((img) => {
          return (
            <div>
              <img src={img.thumbnail != null ? img.thumbnail : ''}></img>
            </div>
          );
        })}
      </Carousel>
    );
  }
  return <div>{carousel}</div>;
}

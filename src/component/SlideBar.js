import { Carousel } from "react-bootstrap";
import "../styles/sliderBar.scss";

export default function SliderBar() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ps.w.org/wp-carousel-free/assets/banner-1544x500.png?rev=2000936"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ps.w.org/wp-carousel-free/assets/banner-1544x500.png?rev=2000936"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ps.w.org/wp-carousel-free/assets/banner-1544x500.png?rev=2000936"
          alt="Third slide"
        />

        <Carousel.Caption className="carouselCaption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

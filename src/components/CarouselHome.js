import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/p1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Apple iPhone</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/p2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Google Pixel</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/l2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>MacBook Pro</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
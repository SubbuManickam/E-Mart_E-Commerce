import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/p1.png"
          alt="First slide"
          style={{height: '35rem'}}
        />
        <Carousel.Caption>
          <h3>Apple iPhone</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/p2.jpg"
          alt="Second slide"
          style={{height: '35rem'}}
        />
        <Carousel.Caption>
          <h3>Google Pixel</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/l2.png"
          alt="Third slide"
          style={{height: '35rem'}}
        />
        <Carousel.Caption>
          <h3>MacBook Pro</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/l1.jpg"
          alt="Fourth slide"
          style={{height: '35rem'}}
        />
        <Carousel.Caption>
          <h3>Laptops</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselHome;
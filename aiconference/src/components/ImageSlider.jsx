import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import psg1 from '../assets/DJI_0165.JPG';
import psg2 from '../assets/DJI_0192.JPG';
import psg3 from '../assets/DJI_0200.JPG';
import psg4 from '../assets/DJI_0234.JPG';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  &.left {
    left: 20px;
  }

  &.right {
    right: 20px;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const images = [
  psg4,
  psg2,
  psg3,
  psg1,
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SliderContainer>
        {images.map((image, index) => (
          <Slide
            key={index}
            image={image}
            active={index === currentSlide}
          />
        ))}
        
        <Arrow className="left" onClick={prevSlide}>
          ←
        </Arrow>
        <Arrow className="right" onClick={nextSlide}>
          →
        </Arrow>

        <DotsContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      </SliderContainer>
    </>
    
  );
};

export default ImageSlider;
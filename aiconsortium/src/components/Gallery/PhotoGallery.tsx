import { useState, useEffect, useCallback } from 'react';
import './PhotoGallery.css';
import { Gallery } from '../../data/gallery.ts';
import {gallery} from '../../data/gallery.ts';


interface PhotoGalleryProps {
  photos?: Gallery[];
}

const PhotoGallery = ({ photos = gallery}: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="photo-gallery">
      <div className="photo-gallery-container">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`gallery-item ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
          >
            <img src={photo.image}/>
          </div>
        ))}
      </div>

      <button className="gallery-nav-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="gallery-nav-button next" onClick={nextSlide}>
        &gt;
      </button>

      <div className="gallery-dots">
        {photos.map((_, index) => (
          <div
            key={index}
            className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
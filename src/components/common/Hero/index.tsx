import styles from './Hero.module.css';
import { useState, useEffect } from 'react';

type HeroProps = {
  images: string[],
  title:string;
  subtitle?: string;
  interval?:number; // default 5 seconds
}

const Hero = ({ images, title, subtitle, interval = 5000 }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); //Clear interval when component is dismount
  }, [images.length, interval]);

  const goPrev = () => {
    setCurrentIndex(prev => (prev -1 + images.length) % images.length);
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }

  return (
    <div className={`${styles.heroContainer} position-relative`}>
      <div className={styles.carouselWrapper}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          />
        ))}
      </div>

      {/* Flechas de navegación */}
      <button className={styles.prevBtn} onClick={goPrev}>❮</button>
      <button className={styles.nextBtn} onClick={goNext}>❯</button>

      {/* Texto superpuesto */}
      <div className={`${styles.heroText} position-absolute top-50 start-50 translate-middle text-white text-center`}>
        <h1 className="display-4 fw-bold">{title}</h1>
        { subtitle && (
          <p className={`lead ${styles.subtitle}`}>{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;

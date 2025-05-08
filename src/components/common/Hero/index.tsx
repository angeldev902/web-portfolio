import React from 'react';
import styles from './Hero.module.css';

type HeroProps = {
  images: string[],
  title:string;
  subtitle: string;
}

const Hero = ({ images, title, subtitle }: HeroProps) => {
  return (
    <div className={`${styles.heroContainer} position-relative`}>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {
            images.map(picture => (
              <div className="carousel-item active" key={picture}>
                <img src={picture} className={`d-block w-100 ${styles.heroImg}`} alt="Slide 1" />
              </div>
            ))
          }
        </div>

        {/* Flechas de navegación */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Capa de texto encima del carrusel */}
      <div className={`${styles.heroText} position-absolute top-50 start-50 translate-middle text-white text-center`}>
        <h1 className="display-4 fw-bold">{ title }</h1>
        <p className="lead">{ subtitle }</p>
      </div>
    </div>
  );
};

export default Hero;

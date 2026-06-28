import React from 'react';
import adPlaceholder from '../assets/ad-placeholder.png';

function AdSection() {
  return (
    <section className="ad-section section">
      <div className="container">
        <div className="ad-section__banner">
          <img
            src={adPlaceholder}
            alt="Рекламний банер"
            className="ad-section__image"
          />
        </div>
        <p className="ad-section__text">
          Щоб замовити рекламу, перейдіть у наш{' '}
          <a
            href="https://disflip.com/guild/1509667234237382806"
            target="_blank"
            rel="noopener noreferrer"
            className="ad-section__link"
          >
            Діскорд
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default AdSection;

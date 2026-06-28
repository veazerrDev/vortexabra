import React from 'react';
import adPlaceholder from '../assets/ad-placeholder.png';

function AdSection() {
  return (
    <section className="ad-section">
      <h2 class="section__title">Реклама</h2>
      <div className="container">
        <div className="ad-section__banner">
          <img
            src={ adPlaceholder }
            alt="Рекламний банер"
            className="ad-section__image"
          />
        </div>
        <p className="ad-section__text">
          Щоб замовити рекламу, перейдіть у наш{ ' ' }
          <a
            href="https://discord.com/channels/1509667234237382806/1520784359735431168/1520784759582625915"
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

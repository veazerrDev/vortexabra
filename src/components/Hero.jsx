import React from 'react';

function Hero({ t }) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">{t('hero.title')}</h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
          <p className="hero__desc">{t('hero.desc')}</p>
          <div className="hero__actions">
            <a href="https://t.me/vortexabra" target="_blank" rel="noopener" className="btn btn--primary">{t('hero.join')}</a>
            <a href="#projects" className="btn btn--outline">{t('hero.projects')}</a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__shape"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

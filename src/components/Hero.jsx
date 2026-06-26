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
            <a href="https://disflip.com/guild/1509667234237382806" target="_blank" rel="noopener" className="btn btn--primary">{t('hero.join')}</a>
            <a href="#projects" className="btn btn--outline">{t('hero.projects')}</a>
          </div>
        </div>
        <div className="hero__visual">
          <img src="/src/assets/vortexabralogo.png" alt="Vortexabra logo" className="hero__logo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

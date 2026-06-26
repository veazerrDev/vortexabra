import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Hero({ t }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
        scale: 1.05,
      });
    }
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

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
          <div ref={tiltRef} className="hero__tilt-wrapper">
            <img src="/src/assets/vortexabralogo.png" alt="Vortexabra logo" className="hero__logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

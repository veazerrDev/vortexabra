import React, { useRef, useCallback } from 'react';

function Hero({ t }) {
  const tiltRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = tiltRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15; // max 15 deg
    const rotateY = ((x - centerX) / centerX) * 15;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05,1.05,1.05)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
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
          <div
            ref={tiltRef}
            className="hero__tilt-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/src/assets/vortexabralogo.png" alt="Vortexabra logo" className="hero__logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React, { useState } from 'react';

function Header({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="logo">Vortexabra</a>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <ul className="nav__list">
            <li><a href="#about" className="nav__link" onClick={() => setMenuOpen(false)}>{t('nav.about')}</a></li>
            <li><a href="#projects" className="nav__link" onClick={() => setMenuOpen(false)}>{t('nav.projects')}</a></li>
            <li><a href="#social" className="nav__link" onClick={() => setMenuOpen(false)}>{t('nav.social')}</a></li>
          </ul>
        </nav>
        <div className="lang-switch">
          <button
            className={`lang-btn ${lang === 'uk' ? 'lang-btn--active' : ''}`}
            onClick={() => setLang('uk')}
          >
            UA
          </button>
          <button
            className={`lang-btn ${lang === 'en' ? 'lang-btn--active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
        <button className="burger" aria-label="Меню" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;

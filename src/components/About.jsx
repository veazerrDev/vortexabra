import React from 'react';

function About({ t }) {
  const cards = [
    { icon: '🎮', titleKey: 'about.card1.title', descKey: 'about.card1.desc' },
    { icon: '🌍', titleKey: 'about.card2.title', descKey: 'about.card2.desc' },
    { icon: '🚀', titleKey: 'about.card3.title', descKey: 'about.card3.desc' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section__title">{t('about.title')}</h2>
        <div className="about__grid">
          {cards.map((card, idx) => (
            <div className="about__card" key={idx}>
              <div className="about__icon">{card.icon}</div>
              <h3>{t(card.titleKey)}</h3>
              <p>{t(card.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

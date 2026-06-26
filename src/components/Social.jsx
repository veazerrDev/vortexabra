import React from 'react';

function Social({ t }) {
  const items = [
    { icon: '✈️', name: 'Telegram', url: 'https://t.me/vortexabra' },
    { icon: '💬', name: 'Discord', url: 'https://disflip.com/guild/1509667234237382806' },
    { icon: '▶️', name: 'YouTube', url: 'https://www.youtube.com/@Vortexabra' },
    { icon: '🎵', name: 'TikTok', url: 'https://www.tiktok.com/@vortex_abra' },
  ];

  return (
    <section id="social" className="social section">
      <div className="container">
        <h2 className="section__title">{t('social.title')}</h2>
        <div className="social__grid">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener"
              className="social__item"
            >
              <span className="social__icon">{item.icon}</span>
              <span className="social__name">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Social;

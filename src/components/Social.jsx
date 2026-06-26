import React from 'react';

function Social({ t }) {
  const items = [
    { icon: '/src/assets/telegram.png', name: 'Telegram', url: 'https://t.me/vortexabra' },
    { icon: '/src/assets/discord.png', name: 'Discord', url: 'https://disflip.com/guild/1509667234237382806' },
    { icon: '/src/assets/youtube.png', name: 'YouTube', url: 'https://www.youtube.com/@Vortexabra' },
    { icon: '/src/assets/tiktok.webp', name: 'TikTok', url: 'https://www.tiktok.com/@vortex_abra' },
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
              <img src={item.icon} alt={item.name} className="social__icon-img" />
              <span className="social__name">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Social;

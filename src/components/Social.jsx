import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import youtube from '../assets/youtube.png';
import tiktok from '../assets/tiktok.webp';
import miysvit from '../assets/miysvit.png';

function Social({ t }) {
  const items = [
    { icon: telegram, name: 'Telegram', url: 'https://t.me/vortexabra' },
    { icon: discord, name: 'Discord', url: 'https://disflip.com/guild/1509667234237382806' },
    { icon: youtube, name: 'YouTube', url: 'https://www.youtube.com/@Vortexabra' },
    { icon: tiktok, name: 'TikTok', url: 'https://www.tiktok.com/@vortex_abra' },
    { icon: miysvit, name: 'MiySvit', url: 'https://www.miysvit.com/profile/vortexabra' },
  ];

  return (
    <section id="social" className="social section">
      <div className="container">
        <h2 className="section__title">{ t('social.title') }</h2>
        <div className="social__grid">
          { items.map((item, idx) => (
            <a
              key={ idx }
              href={ item.url }
              target="_blank"
              rel="noopener"
              className="social__item"
            >
              <img src={ item.icon } alt={ item.name } className="social__icon-img" />
              <span className="social__name">{ item.name }</span>
            </a>
          )) }
        </div>
      </div>
    </section>
  );
}

export default Social;

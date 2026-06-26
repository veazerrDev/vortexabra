import { socialLinks } from '../data/siteData'

function HeroSection() {
  return (
    <section className="hero" style={heroStyle}>
      <div className="container" style={heroContentStyle}>
        <h1 className="fade-in" style={heroTitleStyle}>
          Vortexabra
        </h1>
        <p className="fade-in" style={heroSubtitleStyle}>
          Створюємо український метавсесвіт у Roblox
        </p>
        <p className="fade-in" style={heroDescStyle}>
          Українська спільнота розробників Roblox, що створює ігри рідною
          мовою. Ми розвиваємо український сегмент Roblox, підтримуємо авторів
          та надихаємо нове покоління творців. Приєднуйся та стань частиною
          українського метавсесвіту!
        </p>
        <div className="fade-in" style={heroButtonsStyle}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={heroBtnStyle}
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const heroStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #0b0c10 0%, #1f2833 50%, #0b0c10 100%)',
  textAlign: 'center',
  padding: '2rem 0',
}

const heroContentStyle: React.CSSProperties = {
  maxWidth: '800px',
}

const heroTitleStyle: React.CSSProperties = {
  fontSize: '3.5rem',
  marginBottom: '0.5rem',
  color: '#66fcf1',
  textShadow: '0 0 20px rgba(102,252,241,0.5)',
}

const heroSubtitleStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  color: '#45a29e',
  marginBottom: '1.5rem',
}

const heroDescStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
  marginBottom: '2rem',
  color: '#c5c6c7',
}

const heroButtonsStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem',
}

const heroBtnStyle: React.CSSProperties = {
  fontSize: '1rem',
  padding: '0.7rem 1.5rem',
}

export default HeroSection

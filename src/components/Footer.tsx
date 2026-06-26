import { socialLinks } from '../data/siteData'

function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container" style={footerContentStyle}>
        <p style={copyrightStyle}>© Vortexabra</p>
        <p style={taglineStyle}>Українська Roblox-спільнота</p>
        <div style={linksStyle}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

const footerStyle: React.CSSProperties = {
  backgroundColor: '#0b0c10',
  borderTop: '1px solid #45a29e',
  padding: '2rem 0',
  textAlign: 'center',
}

const footerContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
}

const copyrightStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#66fcf1',
  fontWeight: 600,
}

const taglineStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: '#45a29e',
}

const linksStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1.2rem',
  marginTop: '0.5rem',
}

const linkStyle: React.CSSProperties = {
  color: '#c5c6c7',
  textDecoration: 'none',
  fontSize: '0.95rem',
  transition: 'color 0.3s ease',
}

export default Footer

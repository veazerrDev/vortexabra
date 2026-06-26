import { SocialLink } from '../data/siteData'

interface SocialCardProps {
  link: SocialLink
}

function SocialCard({ link }: SocialCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={cardStyle}
      className="social-card"
    >
      <div style={iconStyle}>{link.icon}</div>
      <h3 style={nameStyle}>{link.name}</h3>
      <p style={descStyle}>{link.description}</p>
    </a>
  )
}

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 1.5rem',
  backgroundColor: '#1f2833',
  borderRadius: '16px',
  border: '1px solid #45a29e',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#c5c6c7',
  minWidth: '220px',
  flex: '1 1 200px',
}

const iconStyle: React.CSSProperties = {
  fontSize: '3rem',
  marginBottom: '0.8rem',
}

const nameStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  color: '#66fcf1',
  marginBottom: '0.5rem',
}

const descStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  textAlign: 'center',
  lineHeight: '1.5',
}

export default SocialCard

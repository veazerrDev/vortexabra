import { socialLinks } from '../data/siteData'
import SocialCard from './SocialCard'

function SocialSection() {
  return (
    <section id="social" style={sectionStyle}>
      <div className="container">
        <h2 className="fade-in">Наші соціальні мережі</h2>
        <div style={gridStyle} className="fade-in">
          {socialLinks.map((link) => (
            <SocialCard key={link.id} link={link} />
          ))}
        </div>
      </div>
    </section>
  )
}

const sectionStyle: React.CSSProperties = {
  backgroundColor: '#0b0c10',
}

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
  marginTop: '2rem',
}

export default SocialSection

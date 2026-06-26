import { projects } from '../data/siteData'

function ProjectsSection() {
  return (
    <section id="projects" style={sectionStyle}>
      <div className="container">
        <h2 className="fade-in">Наші проєкти</h2>
        <div style={gridStyle} className="fade-in">
          {projects.map((project) => (
            <div key={project.id} style={cardStyle}>
              <h3 style={projectNameStyle}>{project.name}</h3>
              <p style={projectDescStyle}>{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={btnStyle}
              >
                Перейти
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const sectionStyle: React.CSSProperties = {
  backgroundColor: '#1f2833',
}

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
  marginTop: '2rem',
}

const cardStyle: React.CSSProperties = {
  backgroundColor: '#0b0c10',
  borderRadius: '16px',
  padding: '2rem',
  border: '1px solid #45a29e',
  flex: '1 1 300px',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
}

const projectNameStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#66fcf1',
  marginBottom: '1rem',
}

const projectDescStyle: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
  color: '#c5c6c7',
}

const btnStyle: React.CSSProperties = {
  marginTop: 'auto',
}

export default ProjectsSection

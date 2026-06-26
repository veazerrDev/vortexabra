function AboutSection() {
  return (
    <section id="about" style={sectionStyle}>
      <div className="container">
        <h2 className="fade-in">Про нас</h2>
        <div className="fade-in" style={contentStyle}>
          <p>
            <strong>Vortexabra</strong> — українська спільнота розробників
            Roblox, що створює ігри рідною мовою. Ми розвиваємо український
            сегмент Roblox, підтримуємо авторів та надихаємо нове покоління
            творців.
          </p>
          <p>
            Наша мета — об'єднати українських розробників, допомогти їм
            реалізувати свої ідеї та популяризувати українську мову в
            ігровій індустрії. Ми віримо, що разом зможемо створити
            унікальний український метавсесвіт у Roblox.
          </p>
          <p>
            Приєднуйся до нас у соціальних мережах, бери участь у
            обговореннях, ділися своїми проєктами та стань частиною
            української Roblox-спільноти!
          </p>
        </div>
      </div>
    </section>
  )
}

const sectionStyle: React.CSSProperties = {
  backgroundColor: '#1f2833',
}

const contentStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  fontSize: '1.1rem',
  lineHeight: '1.8',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
}

export default AboutSection

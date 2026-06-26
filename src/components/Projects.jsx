import React from 'react';

function Projects({ t }) {
  const projects = [
    {
      title: 'ScriptForge',
      descKey: 'projects.scriptforge',
      link: 'https://veazerrdev.github.io/ScriptForge/',
      linkKey: 'projects.scriptforge.link',
      img: 'https://via.placeholder.com/400x250/1a1a2e/e94560?text=ScriptForge',
    },
    {
      title: 'Survive the Duolingo Owl',
      descKey: 'projects.duolingo',
      link: 'https://www.roblox.com/games/77856461499278/Survive-the-Duolingo-Owl',
      linkKey: 'projects.duolingo.link',
      img: 'https://via.placeholder.com/400x250/16213e/0f3460?text=Survive+the+Duolingo+Owl',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section__title">{t('projects.title')}</h2>
        <div className="projects__grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-card__image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{t(project.descKey)}</p>
                <a href={project.link} target="_blank" rel="noopener" className="btn btn--small">{t(project.linkKey)}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

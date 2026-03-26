import React from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    subtitle: 'A modern e-commerce platform built with React and Stripe',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1300&q=80',
    view: '#',
    github: '#'
  },
  {
    title: 'AI Chat Application',
    subtitle: 'Real-time chat application powered by OpenAI',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1300&q=80',
    view: '#',
    github: '#'
  },
  {
    title: 'Task Management',
    subtitle: 'Collaborative task management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1300&q=80',
    view: '#',
    github: '#'
  },
  {
    title: 'Portfolio Generator',
    subtitle: 'Dynamic portfolio generator for developers',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1300&q=80',
    view: '#',
    github: '#'
  }
];

function Projects() {
  return (
    <section>
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <article
            key={i}
            className="project-tile"
            style={{ backgroundImage: `linear-gradient(rgba(8,15,30,0.45), rgba(8,15,30,0.45)), url(${project.image})` }}
          >
            <div className="project-meta">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <div className="project-actions">
                <a href={project.view} className="btn">View Project</a>
                <a href={project.github} className="btn" style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(148, 163, 184, 0.35)' }}>GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
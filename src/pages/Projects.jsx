import React, { useState } from 'react';
import projects from '../data/projects.json'

function Projects() {
    const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

    return (
        <section>
            <h2>Projects</h2>
            <div class="container-div">
                <p>Click a project to see more details!</p>
            </div>
            <div className="project-grid">
            {projects.map((project, i) => (
                <article
                    key={i}
                    className="project-tile"
                    onClick={() => {
                        const newFlipped = [...flipped];
                        newFlipped[i] = !newFlipped[i];
                        setFlipped(newFlipped);
                    }}
                >
                <div className={`project-inner ${flipped[i] ? 'flipped' : ''}`}>
                    <div
                        className="project-front"
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
                    </div>
                    <div className="project-back">
                        <div className="project-back-inner">
                            {project.info && project.info.length > 0 ? (
                                <ul>
                                    {project.info.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ color: '#cbd5e1', textAlign: 'center', margin: 0 }}>No details available.</p>
                            )}
                        </div>
                    </div>
                </div>
                </article>
            ))}
            </div>
        </section>
    );
}

export default Projects;
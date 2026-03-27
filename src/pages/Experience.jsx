import React, { useState } from 'react';
import experiences from '../data/experiences.json'

function Experience(){
    const [flipped, setFlipped] = useState(Array(experiences.length).fill(false));

    return(
        <section>
            <h2>Experiences</h2>
            <div class="container-div">
                <p>Click an experience to see more details!</p>
            </div>
            <div className="project-grid">
            {experiences.map((experience, i) => (
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
                        style={{ backgroundImage: `linear-gradient(rgba(8,15,30,0.45), rgba(8,15,30,0.45)), url(${experience.image})` }}
                    >
                        <div className="project-meta">
                            <h3>{experience.title}</h3>
                            <a href={experience.company_url}>{experience.subtitle}</a>
                            <p>{experience.start} &ndash; {experience.end}</p>
                        </div>
                    </div>
                    <div className="project-back">
                        <div className="project-back-inner">
                            {experience.info && experience.info.length > 0 ? (
                                <ul>
                                    {experience.info.map((item, idx) => (
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
    )
}

export default Experience;
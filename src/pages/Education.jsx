import React, { useState } from 'react';
import education from '../data/education.json';
import RichText from '../components/RichText';

function Education() {
    const [flipped, setFlipped] = useState(Array(education.length).fill(false));

    return (
        <section>
            <h2>Education</h2>
            <div class="container-div">
                <p>Click an institution to see more details!</p>
            </div>
            <div className="project-grid">
                {education.map((institution, i) => (
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
                                style={{ backgroundImage: `linear-gradient(rgba(8,15,30,0.45), rgba(8,15,30,0.45)), url(${institution.image})` }}
                            >
                                <div className="project-meta">
                                    <h3>{institution.title}</h3>
                                    <a href={institution.institution_url}>{institution.subtitle}</a>
                                    <p>{institution.start} {institution.end !== "" && `\u2013 ${institution.end}`}</p>
                                </div>
                            </div>
                            <div className="project-back">
                                <div className="project-back-inner">
                                    {institution.info && institution.info.length > 0 ? (
                                        <ul>
                                            {institution.info.map((item, idx) => (
                                                <li key={idx}><RichText item={item} /></li>
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

export default Education;
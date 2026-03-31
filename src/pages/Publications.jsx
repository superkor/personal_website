import React, { useState } from 'react';
import publications from '../data/publications.json';

function Publications() {
    const [flipped, setFlipped] = useState(Array(publications.length).fill(false));

    return (
        <section>
            <h2>Publications</h2>
            <div class="container-div">
                {/* <p>Click a publication to see more details!</p> */}
            </div>
            <div className="project-grid">
                {publications.map((publication, i) => (
                    <article
                        key={i}
                        className="project-tile"
                        onClick={() => {
                            const newFlipped = [...flipped];
                            newFlipped[i] = !newFlipped[i];
                            // setFlipped(newFlipped);
                        }}
                    >
                        <div className={`project-inner ${flipped[i] ? 'flipped' : ''}`}>
                            <div
                                className="project-front"
                                style={{ backgroundImage: `linear-gradient(rgba(8,15,30,0.45), rgba(8,15,30,0.45)), url(${publication.image})` }}
                            >
                                <div className="project-meta">
                                    <h3>{publication.title}</h3>
                                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                                        <div style={{ flex: 1 }}>
                                            <p>{publication.authors.join(', ')}</p>
                                            <p>Published {publication.date}</p>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <p>Presented at {publication.presented_at}</p>
                                            <div className="project-actions" style={{ display: 'flex', justifyContent: 'center' }}>
                                                {publication.url !== "#" && <a href={publication.url} className="btn" style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(148, 163, 184, 0.35)' }}>View Publication</a>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="project-back">
                                <div className="project-back-inner">
                                    {publication.info && publication.info.length > 0 ? (
                                        <ul>
                                            {publication.info.map((item, idx) => (
                                                <li key={idx}><RichText item={item} /></li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p style={{ color: '#cbd5e1', textAlign: 'center', margin: 0 }}>No details available.</p>
                                    )}
                                </div>
                            </div> */}
                        </div>
                    </article>
                ))}
            </div>
        </section >
    );
}

export default Publications;

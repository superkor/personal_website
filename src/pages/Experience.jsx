import React from 'react';

const experiences = [
    {
        title: "Undergraduate Research Assistant",
        subtitle: "Wireless Sensors & Devices Lab at the University of Waterloo",
        start: "May 2024",
        end: "April 2026",
        location: "Waterloo, Canada",
        info: []
    },
    {
        title: "Full Stack Software Developer",
        subtitle: "StackAdapt",
        start: "September 2025",
        end: "December 2025",
        location: "Toronto, Canada",
        info: []
    },
    {
        title: "Software Developer",
        subtitle: "ON Semiconductors (Onsemi)",
        start: "January 2025",
        end: "April 2025",
        location: "Toronto, Canada",
        info: []
    },
    {
        title: "Software Developer",
        subtitle: "Imagine Communications",
        start: "January 2024",
        end: "April 2024",
        location: "Toronto, Canada",
        info: []
    },
    {
        title: "Full Stack Software Developer",
        subtitle: "Consolidated Fastfrate",
        start: "May 2023",
        end: "August 2023",
        location: "Vaughan, Canada",
        info: []
    },
    {
        title: "QA Developer",
        subtitle: "Super (formerly Snapcommerce)",
        start: "September 2022",
        end: "December 2022",
        location: "Toronto, Canada",
        info: []
    },
    {
        title: "Network Support Technician",
        subtitle: "University of Waterloo",
        start: "January 2022",
        end: "April 2022",
        location: "Waterloo, Canada",
        info: []
    },
]

function Experience(){
    return(
        <section>
            <h2>Experiences</h2>
            <div className="project-grid">
            {experiences.map((project, i) => (
            <article
                key={i}
                className="project-tile"
                style={{ backgroundImage: `linear-gradient(rgba(8,15,30,0.45), rgba(8,15,30,0.45)), url(${project.image})` }}
            >
                <div className="project-meta">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <p>{project.start} &ndash; {project.end}</p>
                </div>
            </article>
            ))}
        </div>
        </section>
    )
}

export default Experience;
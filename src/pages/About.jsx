import React from 'react';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>I'm a problem solver who loves building usable web products. My experience includes component-driven design systems, performance optimization, and full-stack feature development.</p>
      <div className="card-grid">
        <div className="card">
          <h3>Skills</h3>
          <p>React, TypeScript, Vite, CSS Modules, Tailwind, Figma, Node.js</p>
        </div>
        <div className="card">
          <h3>Experience</h3>
          <p>2+ years building modern user-facing applications at startup and agency clients.</p>
        </div>
        <div className="card">
          <h3>Focus</h3>
          <p>Performance-first interfaces, accessible products, and well-tested systems.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
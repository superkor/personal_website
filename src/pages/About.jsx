import React from 'react';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div class="container-div">
        <p>I'm a problem solver who loves building usable web products. My experience includes component-driven design systems, performance optimization, and full-stack feature development.</p>
      </div>
      <div className="card-grid">
        <div className="card">
          <h3>Languages</h3>
          <p>C, C++, Python</p>
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
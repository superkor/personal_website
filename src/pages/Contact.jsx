import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <div class="container-div">
        <p>Want to collaborate or just say hello? Reach out via email or social.</p>
      </div>
      <a href="/resume.pdf" target="_blank" className="btn" style={{ marginRight: '0.75rem' }}>Download Resume</a>
      <div className="card-grid" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <h3>Email</h3>
          <p><a href="mailto:justinchow03@hotmail.com" style={{ color: '#93c5fd' }}>justinchow03 [at] hotmail [dot] com</a></p>
        </div>
        <div className="card">
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/chowhjustin" target="_blank" rel="noreferrer" style={{ color: '#93c5fd' }}>linkedin.com/in/chowhjustin</a></p>
        </div>
        <div className="card">
          <h3>GitHub</h3>
          <p><a href="https://github.com/superkor" target="_blank" rel="noreferrer" style={{ color: '#93c5fd' }}>github.com/superkor</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
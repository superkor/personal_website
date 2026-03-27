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
          <p><a href="mailto:youremail@example.com" style={{ color: '#93c5fd' }}>youremail@example.com</a></p>
        </div>
        <div className="card">
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" style={{ color: '#93c5fd' }}>linkedin.com/in/your-profile</a></p>
        </div>
        <div className="card">
          <h3>GitHub</h3>
          <p><a href="https://github.com/yourusername" target="_blank" rel="noreferrer" style={{ color: '#93c5fd' }}>github.com/yourusername</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
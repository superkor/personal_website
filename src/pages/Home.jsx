import React from 'react';
import pfp from '/pic.jpg'

function Home() {
  return (
    <section className="hero">
        <div class="intro-div">
            <div class="container-div">
                <img src={pfp} alt="Profile Picture"/>
            </div>
            <div class="container-div">
                <h2>Hi, I am Justin Chow!</h2>
            </div>
            <div class="container-div">
                <p>I am in my final year of a Computer Engineering degree with a specialization in Signal Processing and Communications. 
                I have experience in embedded systems and software development. I enjoy designing systems and solving problems! 
                I am interested in communications and networks, particularly how they can be used in off-grid remote locations.</p>
            </div>
        </div>
        <a href="#projects" className="btn">Explore My Projects!</a>
    </section>
  );
}

export default Home;
import React from 'react';
import pfp from '/pic.jpg';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
  const { current } = useLanguage();

  return (
    <section className="hero">
      <div className="intro-div">
        <div className="container-div">
          <img src={pfp} alt="Profile Picture" />
        </div>
        <div className="container-div">
          <h2>{current.title}</h2>
        </div>
        <div className="container-div">
          <p>{current.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
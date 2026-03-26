import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-inner container">
          <div className="brand">Justin Chow</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="home" className="container">
          <Home />
        </section>

        <section id="about" className="container">
          <About />
        </section>

        <section id="projects" className="container">
          <Projects />
        </section>

        <section id="contact" className="container">
          <Contact />
        </section>
      </main>

      <footer className="footer">
        Built with React + Vite • © {new Date().getFullYear()} Justin Huefone Chow
      </footer>
    </div>
  );
}

export default App;
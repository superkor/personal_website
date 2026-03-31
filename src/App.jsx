import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Publications from './pages/Publications';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import './App.css';

function NavBar() {
    const { current, toggleLanguage } = useLanguage();

    return (
        <nav>
            <div className="nav-inner container">
                <div className="brand">Justin Chow / 주효봉 </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experiences">Experiences</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#publications">Publications</a></li>
                    <li><a href="#contact">Contact + Resume</a></li>
                    <li>
                        <a onClick={toggleLanguage}>
                            {current.toggleLabel}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function App() {
    return (
        <LanguageProvider>
            <div className="App">
                <NavBar />

                <main>
                    <section id="home" className="container">
                        <Home />
                    </section>

                    <section id="experiences" className="container">
                        <Experience />
                    </section>

                    <section id="projects" className="container">
                        <Projects />
                    </section>

                    <section id="education" className="container">
                        <Education />
                    </section>

                    <section id="publications" className="container">
                        <Publications />
                    </section>

                    <section id="contact" className="container">
                        <Contact />
                    </section>
                </main>

                <footer className="footer">
                    Built with React + Vite • © {new Date().getFullYear()} Justin Huefone Chow
                </footer>
            </div>
        </LanguageProvider>
    );
}

export default App;
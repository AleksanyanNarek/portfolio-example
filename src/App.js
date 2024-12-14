import { useRef } from 'react';
import './App.css';

import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Education from './components/education/Education';
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <Nav homeRef={homeRef} aboutRef={aboutRef} educationRef={educationRef} projectsRef={projectsRef}/>
      <section className="home-section" ref={homeRef}>
        <Home/>
      </section>
      <section className="about-section" ref={aboutRef}>
        <About/>
      </section>
      <section className='education-section' ref={educationRef}>
        <Education/>
      </section>
      <section className='projects-section' ref={projectsRef}>
        <Projects/>
      </section>
      <Footer homeRef={homeRef}/>
    </div>
  );
}

export default App;
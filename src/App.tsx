import { useState } from 'react'
import { Element } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Header from './components/Header'
import Skills from './components/Skills'  // Import Skills component
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import HomePage from './components/HomePage'
import Experience from './components/Experience'
export default function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        <Element name="home">
          <HomePage />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="experience">
          <Experience />
          </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      <footer className="py-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/suryavignesh1304" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/surya-vignesh-kapuganti-b02a84226/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400 transition-colors" />
          </a>
          <a href="mailto:suryavigneshkapuganti@gmail.com">
            <FaEnvelope className="text-2xl hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import FeaturedWork from './components/FeaturedWork'
import CommandPalette from './components/CommandPalette'
import AIExpertise from './components/AIExpertise'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedWork />
        <AIExpertise />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  )
}

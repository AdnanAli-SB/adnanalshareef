import { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import Docs from '../components/Docs.jsx'
import About from '../components/About.jsx'
import { Contact, Footer } from '../components/Contact.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Adnan Alshareef — Frontend Developer & UI/UX Designer'
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectsSection
          id="frontend"
          category="frontend"
          tag="Frontend"
          color="var(--c-fe)"
          heading="Things I’ve developed."
        />
        <ProjectsSection
          id="design"
          category="uiux"
          tag="UI/UX"
          color="var(--c-ux)"
          heading="Things I’ve designed."
        />
        <Docs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

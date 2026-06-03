import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './pages/projects/ProjectsPage'
import { scrollToHash } from './lib/navigation'

function App() {
  const [locationKey, setLocationKey] = useState(() => `${window.location.pathname}${window.location.hash}`)

  useEffect(() => {
    const handlePopState = () => {
      setLocationKey(`${window.location.pathname}${window.location.hash}`)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const { pathname, hash } = window.location

    if (pathname === '/projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (hash) {
      window.requestAnimationFrame(() => {
        scrollToHash(hash)
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [locationKey])

  if (window.location.pathname === '/projects') {
    return <ProjectsPage />
  }

  return (
    <div className="page-shell page-enter min-h-screen bg-white font-sans">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <section className="border-t border-[#EAEAEA] bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <Projects />
          </div>
        </section>

        <section className="bg-white pb-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mt-4">
              <Blog />
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

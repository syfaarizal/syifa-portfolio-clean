import { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './pages/projects/ProjectsPage'
import BlogPage from './pages/blog/BlogPage'
import Day1Page from './pages/blog/days-challenge/day1Page'
import Day2Page from './pages/blog/days-challenge/day2Page'
import Day3Page from './pages/blog/days-challenge/day3Page'
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

  useLayoutEffect(() => {
    const { hash } = window.location

    if (hash) {
      window.requestAnimationFrame(() => {
        scrollToHash(hash)
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [locationKey])

  if (window.location.pathname === '/projects') {
    return <ProjectsPage />
  }

  if (window.location.pathname === '/blog/days-challenge/day1') {
    return <Day1Page />
  }

  if (window.location.pathname === '/blog/days-challenge/day2') {
    return <Day2Page />
  }

  if (window.location.pathname === '/blog/days-challenge/day3') {
    return <Day3Page />
  }

  if (window.location.pathname.startsWith('/blog')) {
    return <BlogPage />
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

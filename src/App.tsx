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
import Day4Page from './pages/blog/days-challenge/day4Page'
import Day5Page from './pages/blog/days-challenge/day5Page'
import Day6Page from './pages/blog/days-challenge/day6Page'
import Html1Page from './pages/blog/html-modul/html1Page'
import Html2Page from './pages/blog/html-modul/html2Page'
import Css1Page from './pages/blog/css-modul/css1Page'
import Css2Page from './pages/blog/css-modul/css2Page'
import Css3Page from './pages/blog/css-modul/css3Page'
import Css4Page from './pages/blog/css-modul/css4Page'
import Js1Page from './pages/blog/js-modul/js1Page'
import Js2Page from './pages/blog/js-modul/js2Page'
import Js2SolutionPage from './pages/blog/js-modul/js2SolutionPage'
import Js3Page from './pages/blog/js-modul/js3Page'
import Js3SolutionPage from './pages/blog/js-modul/js3SolutionPage'
import Js4Page from './pages/blog/js-modul/js4Page'
import { scrollToHash, scrollToTopInstant } from './lib/navigation'

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

    scrollToTopInstant()
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

  if (window.location.pathname === '/blog/days-challenge/day4') {
    return <Day4Page />
  }

  if (window.location.pathname === '/blog/days-challenge/day5') {
    return <Day5Page />
  }

  if (window.location.pathname === '/blog/days-challenge/day6') {
    return <Day6Page />
  }

  if (window.location.pathname === '/blog/html-modul/html1') {
    return <Html1Page />
  }

  if (window.location.pathname === '/blog/html-modul/html2') {
    return <Html2Page />
  }

  if (window.location.pathname === '/blog/css-modul/css1') {
    return <Css1Page />
  }

  if (window.location.pathname === '/blog/css-modul/css2') {
    return <Css2Page />
  }

  if (window.location.pathname === '/blog/css-modul/css3') {
    return <Css3Page />
  }

  if (window.location.pathname === '/blog/css-modul/css4') {
    return <Css4Page />
  }

  if (window.location.pathname === '/blog/js-modul/js1') {
    return <Js1Page />
  }

  if (window.location.pathname === '/blog/js-modul/js2') {
    return <Js2Page />
  }

  if (window.location.pathname === '/blog/js-modul/js2-solutions') {
    return <Js2SolutionPage />
  }

  if (window.location.pathname === '/blog/js-modul/js3') {
    return <Js3Page />
  }

  if (window.location.pathname === '/blog/js-modul/js3-solutions') {
    return <Js3SolutionPage />
  }

  if (window.location.pathname === '/blog/js-modul/js4') {
    return <Js4Page />
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

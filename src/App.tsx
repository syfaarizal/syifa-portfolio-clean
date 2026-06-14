import { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'
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
import Js4SolutionPage from './pages/blog/js-modul/js4SolutionPage'
import Js5Page from './pages/blog/js-modul/js5Page'
import Js5SolutionPage from './pages/blog/js-modul/js5SolutionPage'
import Js6Page from './pages/blog/js-modul/js6Page'
import Js6SolutionPage from './pages/blog/js-modul/js6SolutionPage'
import Js7Page from './pages/blog/js-modul/js7Page'
import { scrollToHash, scrollToTopInstant } from './lib/navigation'

type BlogRoute = {
  path: string
  Component: () => JSX.Element
}

const dayChallengeRoutes: BlogRoute[] = [
  { path: '/blog/days-challenge/day1', Component: Day1Page },
  { path: '/blog/days-challenge/day2', Component: Day2Page },
  { path: '/blog/days-challenge/day3', Component: Day3Page },
  { path: '/blog/days-challenge/day4', Component: Day4Page },
  { path: '/blog/days-challenge/day5', Component: Day5Page },
  { path: '/blog/days-challenge/day6', Component: Day6Page },
]

const htmlModuleRoutes: BlogRoute[] = [
  { path: '/blog/html-modul/html1', Component: Html1Page },
  { path: '/blog/html-modul/html2', Component: Html2Page },
]

const cssModuleRoutes: BlogRoute[] = [
  { path: '/blog/css-modul/css1', Component: Css1Page },
  { path: '/blog/css-modul/css2', Component: Css2Page },
  { path: '/blog/css-modul/css3', Component: Css3Page },
  { path: '/blog/css-modul/css4', Component: Css4Page },
]

const jsModuleRoutes: BlogRoute[] = [
  { path: '/blog/js-modul/js1', Component: Js1Page },
  { path: '/blog/js-modul/js2', Component: Js2Page },
  { path: '/blog/js-modul/js2-solutions', Component: Js2SolutionPage },
  { path: '/blog/js-modul/js3', Component: Js3Page },
  { path: '/blog/js-modul/js3-solutions', Component: Js3SolutionPage },
  { path: '/blog/js-modul/js4', Component: Js4Page },
  { path: '/blog/js-modul/js4-solutions', Component: Js4SolutionPage },
  { path: '/blog/js-modul/js5', Component: Js5Page },
  { path: '/blog/js-modul/js5-solutions', Component: Js5SolutionPage },
  { path: '/blog/js-modul/js6', Component: Js6Page },
  { path: '/blog/js-modul/js6-solutions', Component: Js6SolutionPage },
  { path: '/blog/js-modul/js7', Component: Js7Page },
]

const blogRoutes: BlogRoute[] = [...dayChallengeRoutes, ...htmlModuleRoutes, ...cssModuleRoutes, ...jsModuleRoutes]

function App() {
  const [locationKey, setLocationKey] = useState(() => `${window.location.pathname}${window.location.hash}`)
  const pathname = window.location.pathname
  const blogRoute = blogRoutes.find((route) => route.path === pathname)

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

  if (pathname === '/projects') {
    return <ProjectsPage />
  }

  if (blogRoute) {
    const { Component } = blogRoute
    return <Component />
  }

  if (pathname.startsWith('/blog')) {
    return <BlogPage />
  }

  return (
    <div className="page-shell page-enter min-h-screen bg-white font-sans">
      <Navbar />

      <main>
        <ScrollReveal direction="down">
          <Hero />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <About />
        </ScrollReveal>
        <ScrollReveal direction="down">
          <Skills />
        </ScrollReveal>

        <section className="border-t border-[#EAEAEA] bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <Projects />
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-white pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="down" className="mt-4">
              <Blog />
            </ScrollReveal>
          </div>
        </section>

        <ScrollReveal direction="up">
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}

export default App

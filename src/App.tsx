import { Suspense, lazy, useEffect, useLayoutEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'
import { scrollToHash, scrollToTopInstant } from './lib/navigation'

// Code-split blog pages — loaded lazily on navigation
const BlogPage = lazy(() => import('./pages/blog/BlogPage'))
const ProjectsPage = lazy(() => import('./pages/projects/ProjectsPage'))

const Day1Page = lazy(() => import('./pages/blog/days-challenge/day1Page'))
const Day2Page = lazy(() => import('./pages/blog/days-challenge/day2Page'))
const Day3Page = lazy(() => import('./pages/blog/days-challenge/day3Page'))
const Day4Page = lazy(() => import('./pages/blog/days-challenge/day4Page'))
const Day5Page = lazy(() => import('./pages/blog/days-challenge/day5Page'))
const Day6Page = lazy(() => import('./pages/blog/days-challenge/day6Page'))
const Html1Page = lazy(() => import('./pages/blog/html-modul/html1Page'))
const Html2Page = lazy(() => import('./pages/blog/html-modul/html2Page'))
const Css1Page = lazy(() => import('./pages/blog/css-modul/css1Page'))
const Css2Page = lazy(() => import('./pages/blog/css-modul/css2Page'))
const Css3Page = lazy(() => import('./pages/blog/css-modul/css3Page'))
const Css4Page = lazy(() => import('./pages/blog/css-modul/css4Page'))
const Js1Page = lazy(() => import('./pages/blog/js-modul/js1Page'))
const Js2Page = lazy(() => import('./pages/blog/js-modul/js2Page'))
const Js2SolutionPage = lazy(() => import('./pages/blog/js-modul/js2SolutionPage'))
const Js3Page = lazy(() => import('./pages/blog/js-modul/js3Page'))
const Js3SolutionPage = lazy(() => import('./pages/blog/js-modul/js3SolutionPage'))
const Js4Page = lazy(() => import('./pages/blog/js-modul/js4Page'))
const Js4SolutionPage = lazy(() => import('./pages/blog/js-modul/js4SolutionPage'))
const Js5Page = lazy(() => import('./pages/blog/js-modul/js5Page'))
const Js5SolutionPage = lazy(() => import('./pages/blog/js-modul/js5SolutionPage'))
const Js6Page = lazy(() => import('./pages/blog/js-modul/js6Page'))
const Js6SolutionPage = lazy(() => import('./pages/blog/js-modul/js6SolutionPage'))
const Js7Page = lazy(() => import('./pages/blog/js-modul/js7Page'))

type BlogRoute = {
  path: string
  Component: React.LazyExoticComponent<() => JSX.Element>
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
  const [loadingDone, setLoadingDone] = useState(false)
  const pathname = window.location.pathname
  const blogRoute = blogRoutes.find((route) => route.path === pathname)

  const handleLoadingComplete = () => {
    setLoadingDone(true)
  }

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

  return (
    <>
      {!loadingDone && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div
        style={{
          opacity: loadingDone ? 1 : 0,
          transition: loadingDone ? 'opacity 0.28s cubic-bezier(0.4,0,0.2,1)' : 'none',
        }}
      >
        {pathname === '/projects' ? (
          <Suspense fallback={<PageLoader />}>
            <ProjectsPage />
          </Suspense>
        ) : blogRoute ? (
          <Suspense fallback={<PageLoader />}>
            <blogRoute.Component />
          </Suspense>
        ) : pathname.startsWith('/blog') ? (
          <Suspense fallback={<PageLoader />}>
            <BlogPage />
          </Suspense>
        ) : (
          <div className="page-shell home-shell min-h-screen bg-white font-sans">
            <Navbar />

            <main>
              <ScrollReveal direction="down" delay={0}>
                <Hero />
              </ScrollReveal>
              <ScrollReveal direction="up" delay={120}>
                <About />
              </ScrollReveal>
              <ScrollReveal direction="down" delay={200}>
                <Skills />
              </ScrollReveal>

              <section className="border-t border-[#EAEAEA] bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <ScrollReveal direction="up" delay={260}>
                    <Projects />
                  </ScrollReveal>
                </div>
              </section>

              <section className="bg-white pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <ScrollReveal direction="down" className="mt-4" delay={320}>
                    <Blog />
                  </ScrollReveal>
                </div>
              </section>

              <ScrollReveal direction="up" delay={380}>
                <Contact />
              </ScrollReveal>
            </main>

            <Footer />
          </div>
        )}
      </div>
    </>
  )
}

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-burgundy border-t-transparent" aria-label="Loading page" />
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects + Blog side by side */}
        <section className="py-20 bg-white border-t border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-[55fr_45fr] gap-14">
              <Projects />
              <Blog />
            </div>
          </div>
        </section>

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

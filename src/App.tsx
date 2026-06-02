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

        {/* Projects */}
        <section className="border-t border-[#EAEAEA] bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <Projects />
          </div>
        </section>

        {/* Blog */}
        <section className="bg-white pb-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="mt-4">
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

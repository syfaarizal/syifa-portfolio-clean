import { useState } from 'react'

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('Pesan berhasil dikirim! (demo)')
  }

  return (
    <section id="contact" className="py-20 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-16 items-center">

          {/* ── Left: Heading ── */}
          <div className="w-72 flex-shrink-0">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-heading mb-3">
              Let's Work Together
            </h2>
            <div className="w-10 h-0.5 bg-burgundy mb-4 rounded-full" />
            <p className="font-sans text-gray-500 text-sm leading-relaxed">
              Punya proyek atau ide menarik? Saya siap membantu
              mewujudkannya menjadi solusi digital yang impactful.
            </p>
          </div>

          {/* ── Right: Form ── */}
          <div className="flex-1">
            <div className="flex gap-3 items-stretch">
              {/* Name */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="flex-1 border border-[#EAEAEA] rounded-xl px-4 py-3 font-sans text-sm text-gray-700
                           placeholder:text-gray-400 focus:outline-none focus:border-burgundy focus:ring-1
                           focus:ring-burgundy/20 transition-colors duration-200 min-w-0"
              />
              {/* Email */}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="flex-1 border border-[#EAEAEA] rounded-xl px-4 py-3 font-sans text-sm text-gray-700
                           placeholder:text-gray-400 focus:outline-none focus:border-burgundy focus:ring-1
                           focus:ring-burgundy/20 transition-colors duration-200 min-w-0"
              />
              {/* Message */}
              <input
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="flex-[1.5] border border-[#EAEAEA] rounded-xl px-4 py-3 font-sans text-sm text-gray-700
                           placeholder:text-gray-400 focus:outline-none focus:border-burgundy focus:ring-1
                           focus:ring-burgundy/20 transition-colors duration-200 min-w-0"
              />
              {/* Send */}
              <button
                onClick={handleSubmit}
                className="bg-burgundy text-white font-sans font-medium text-sm px-5 py-3 rounded-xl
                           flex items-center gap-2 whitespace-nowrap hover:bg-burgundy-900
                           transition-colors duration-200 flex-shrink-0"
              >
                Send Message <SendIcon />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

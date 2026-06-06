import { useState, type ChangeEvent, type FormEvent } from 'react'

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const payload = (await response.json().catch(() => null)) as { message?: string; error?: string } | null

      if (!response.ok) {
        throw new Error(payload?.error || 'Gagal mengirim pesan.')
      }

      setForm({ name: '', email: '', message: '' })
      setStatus({
        type: 'success',
        message: payload?.message || 'Pesan berhasil dikirim.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Gagal mengirim pesan.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-16 items-center">

          {/* ── Left: Heading ── */}
          <div className="w-72 flex-shrink-0">
            <p className="section-label sm:text-[1.2rem]">Get In Touch</p>
            <h2 className="section-heading mb-3 sm:text-[2.2rem]">
              Let's Work Together
            </h2>
            <div className="w-10 h-0.5 bg-burgundy mb-4 rounded-full" />
            <p className="font-sans text-gray-500 text-[1.2rem] leading-relaxed">
              Have an interesting project or idea? I'm ready to help you turn it into an impactful digital solution.
            </p>
          </div>

          {/* ── Right: Form ── */}
          <div className="flex-1">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-3 items-stretch">
              {/* Name */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
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
                required
                className="flex-1 border border-[#EAEAEA] rounded-xl px-4 py-3 font-sans text-sm text-gray-700
                           placeholder:text-gray-400 focus:outline-none focus:border-burgundy focus:ring-1
                           focus:ring-burgundy/20 transition-colors duration-200 min-w-0"
              />
              {/* Message */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={1}
                className="flex-[1.5] resize-none border border-[#EAEAEA] rounded-xl px-4 py-3 font-sans text-sm text-gray-700
                           placeholder:text-gray-400 focus:outline-none focus:border-burgundy focus:ring-1
                           focus:ring-burgundy/20 transition-colors duration-200 min-w-0"
              />
              {/* Send */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-burgundy text-white font-sans font-medium text-sm px-5 py-3 rounded-xl
                           flex items-center gap-2 whitespace-nowrap hover:bg-burgundy-900
                           transition-colors duration-200 flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <SendIcon />
              </button>
              </div>

              {status.type !== 'idle' && (
                <p
                  className={`font-sans text-sm ${
                    status.type === 'success' ? 'text-emerald-700' : 'text-red-600'
                  }`}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

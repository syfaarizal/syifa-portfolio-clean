import { useState, type ChangeEvent, type FormEvent } from 'react'

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
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
    <section id="contact" className="border-t border-[#EAEAEA] bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <p className="section-label sm:text-[1.2rem]">Get In Touch</p>
            <h2 className="section-heading mb-3 sm:text-[2.2rem]">Let's Work Together</h2>
            <div className="mb-4 h-0.5 w-10 rounded-full bg-burgundy" />
            <p className="font-sans text-[1rem] leading-relaxed text-gray-500 sm:text-[1.1rem] lg:text-[1.2rem]">
              Have an interesting project or idea? I'm ready to help you turn it into an impactful digital solution.
            </p>
          </div>

          <div className="w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="min-w-0 rounded-xl border border-[#EAEAEA] px-4 py-3 font-sans text-sm text-gray-700 transition-colors duration-200 placeholder:text-gray-400 focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy/20"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="min-w-0 rounded-xl border border-[#EAEAEA] px-4 py-3 font-sans text-sm text-gray-700 transition-colors duration-200 placeholder:text-gray-400 focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy/20"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="min-w-0 md:col-span-2 resize-none rounded-xl border border-[#EAEAEA] px-4 py-3 font-sans text-sm text-gray-700 transition-colors duration-200 placeholder:text-gray-400 focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy/20"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-burgundy px-5 py-3 font-sans text-sm font-medium text-white transition-colors duration-200 hover:bg-burgundy-900 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2 md:w-auto md:justify-self-start"
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

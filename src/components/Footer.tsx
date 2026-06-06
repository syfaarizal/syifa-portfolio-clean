import { navigateTo, navigateWithTransition } from '../lib/navigation'

const LogoIcon = () => (
  <img src="/assets/logo-libr.png" alt="LIBR Logo" className="h-9 w-9 object-contain" />
)

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

const projectLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/#blog' },
]

const services = ['Web Development', 'UI/UX Implementation', 'Responsive Design', 'Performance Optimization']

const socialIcons = [
  { Icon: GithubIcon, href: '#', label: 'GitHub' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: MailIcon, href: 'mailto:syifaarizal@gmail.com', label: 'Email' },
]

const handleLink = (href: string) => {
  if (href.startsWith('/')) {
    if (href.startsWith('/#')) {
      navigateTo(href)
      return
    }

    navigateWithTransition(href)
    return
  }

  window.location.href = href
}

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #4a0810 0%, #2d050b 40%, #1a0306 100%)' }}>
      <div className="mx-auto max-w-7xl px-8 pb-10 pt-14">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <div className="mb-4 flex items-center gap-1.5">
              <LogoIcon />
              <span className="font-serif text-xl font-bold tracking-wide text-white">LIBR</span>
            </div>
            <p className="mb-6 font-sans text-sm leading-relaxed text-white/50">
              Building elegant, functional, and impactful digital experiences.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors duration-200 hover:bg-white/20 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-sm font-semibold uppercase tracking-widest text-white opacity-90">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[...navLinks, ...projectLinks].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      if (link.href.startsWith('/')) {
                        event.preventDefault()
                        handleLink(link.href)
                      }
                    }}
                    className="font-sans text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-sm font-semibold uppercase tracking-widest text-white opacity-90">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="font-sans text-sm text-white/50 transition-colors duration-200 hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-sm font-semibold uppercase tracking-widest text-white opacity-90">
              Let&apos;s Connect
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/50">
                <MailIcon />
                <a href="mailto:syifaarizal@gmail.com" className="font-sans text-sm transition-colors duration-200 hover:text-white">
                  syifaarizal@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/50">
                <MapPinIcon />
                <span className="font-sans text-sm">Indonesia</span>
              </li>
              <li className="flex items-center gap-2 text-white/50">
                <div className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-green-400" />
                <span className="font-sans text-sm">Available Worldwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <p className="font-sans text-xs text-white/40">© 2026 LIBR. All rights reserved.</p>
          <p className="font-sans text-xs text-white/40">
            Built with <span className="text-red-400">♥</span> by Syifa Fauziyah Arizal
          </p>
        </div>
      </div>
    </footer>
  )
}

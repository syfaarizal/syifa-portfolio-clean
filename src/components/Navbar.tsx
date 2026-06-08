import { useState } from 'react'
import { scrollToSection } from '../lib/navigation'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'] as const

const LogoIcon = () => (
  <img src="/assets/logo-libr.png" alt="LIBR Logo" className="h-11 w-11 object-contain" />
)

const ExternalArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </svg>
)

export default function Navbar() {
  const [active, setActive] = useState<string>('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNav = (item: string) => {
    setActive(item)
    setIsMenuOpen(false)
    const id = item.toLowerCase()
    scrollToSection(id)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EAEAEA]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:h-16 lg:flex-nowrap lg:px-8 lg:py-0">
        <button type="button" className="flex items-center gap-1" onClick={() => handleNav('Home')}>
          <LogoIcon />
          <span className="font-serif text-[1.35rem] font-bold tracking-wide text-gray-900 sm:text-[1.55rem]">LIBR</span>
        </button>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#EAEAEA] bg-white text-gray-700 shadow-sm transition-colors duration-200 hover:border-burgundy hover:text-burgundy"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className={`relative pb-0.5 font-sans text-[0.95rem] font-medium transition-colors duration-200 xl:text-[1.05rem] ${
                  active === item ? 'text-burgundy' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
                {active === item && <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 rounded-full bg-burgundy" />}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <button
            onClick={() => handleNav('Contact')}
            className="inline-flex items-center gap-1.5 rounded-xl bg-burgundy px-5 py-2.5 font-sans text-[1rem] font-medium text-white transition-colors duration-200 hover:bg-burgundy-900"
          >
            Let&apos;s Talk
            <ExternalArrow />
          </button>
        </div>

        {isMenuOpen && (
          <div className="w-full rounded-2xl border border-[#EAEAEA] bg-white p-3 shadow-[0_18px_40px_rgba(17,24,39,0.08)] lg:hidden">
            <div className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNav(item)}
                  className={`rounded-xl border px-4 py-3 text-left font-sans text-sm font-medium transition-colors duration-200 ${
                    active === item
                      ? 'border-burgundy bg-[#fff7f5] text-burgundy'
                      : 'border-[#EAEAEA] bg-white text-gray-700 hover:border-burgundy hover:text-burgundy'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleNav('Contact')}
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-burgundy px-4 py-3 font-sans text-sm font-medium text-white transition-colors duration-200 hover:bg-burgundy-900"
            >
              Let&apos;s Talk
              <ExternalArrow />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

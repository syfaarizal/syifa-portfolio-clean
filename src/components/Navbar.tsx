import { useState } from 'react'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'] as const

const LogoIcon = () => (
  <img src="/public/assets/logo-libr.png" alt="LIBR Logo" className="w-10 h-10 object-contain" />
)

const ExternalArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Navbar() {
  const [active, setActive] = useState<string>('Home')

  const handleNav = (item: string) => {
    setActive(item)
    const id = item.toLowerCase()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleNav('Home')}>
          <LogoIcon />
          <span className="font-serif font-bold sm:text-[1.7rem] tracking-wide text-gray-900">LIBR</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className={`relative font-sans sm:text-[1.2rem] font-medium pb-0.5 transition-colors duration-200 ${
                active === item
                  ? 'text-burgundy'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-burgundy rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNav('Contact')}
          className="bg-burgundy text-white font-sans font-medium sm:text-[1.05rem] px-5 py-2 rounded-xl flex items-center gap-1.5 hover:bg-burgundy-900 transition-colors duration-200"
        >
          Let's Talk
          <ExternalArrow />
        </button>
      </div>
    </nav>
  )
}

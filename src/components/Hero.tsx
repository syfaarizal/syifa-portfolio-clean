import { useEffect, useState } from 'react'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const socialLinks = [
  { icon: GithubIcon, href: '#', label: 'GitHub' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: EmailIcon, href: 'mailto:syifaarizal@gmail.com', label: 'Email' },
]

const title = 'Front-End Developer';

const valueProps = [
  'Responsive Interfaces',
  'Clean UI Systems',
  'AI-Ready Experiences',
  'Ideas Into Products',
];

const Dot = ({ cx, cy }: { cx: number; cy: number }) => (
  <circle cx={cx} cy={cy} r="2.5" fill="#D1D5DB" />
)

const DotsPattern = () => {
  const dots = []

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      dots.push(<Dot key={`${row}-${col}`} cx={col * 18} cy={row * 18} />)
    }
  }

  return (
    <svg width="150" height="130" viewBox="0 0 100 80" className="opacity-60">
      {dots}
    </svg>
  )
}

export default function Hero() {
  const [valuePropIndex, setValuePropIndex] = useState(0)
  const [valuePropVisible, setValuePropVisible] = useState(true)

  useEffect(() => {
    const fadeDuration = 180
    const holdDuration = 2600

    const interval = window.setInterval(() => {
      setValuePropVisible(false)

      window.setTimeout(() => {
        setValuePropIndex((current) => (current + 1) % valueProps.length)
        setValuePropVisible(true)
      }, fadeDuration)
    }, holdDuration)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fffaf9_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-burgundy/8 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#e7c6cb]/35 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[32rem] -translate-x-1/2 rounded-full bg-burgundy/5 blur-3xl animate-[pulse_14s_ease-in-out_infinite]" />
      </div>

      <div className="mx-auto max-w-7xl px-0 sm:px-0">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-14 py-12 lg:grid-cols-[1fr_0.98fr] lg:gap-8 lg:py-0">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-4 font-sans text-[1.5rem] tracking-wide text-gray-600">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-[12ch] font-serif text-[clamp(3rem,6vw,5.35rem)] leading-[0.95] font-semibold text-gray-950">
              Syifa Fauziyah Arizal
            </h1>

            <div className="mt-3">
              <p className="font-sans text-[1.05rem] font-semibold uppercase tracking-[0.28em] text-gray-500 sm:text-[1.1rem]">
                {title}
              </p>

              <div className="mt-3 flex items-start gap-3">
                <span className="mt-1 h-[54px] w-[3px] rounded-full bg-burgundy" aria-hidden="true" />
                <span
                  className="font-serif text-[clamp(1.8rem,3.7vw,3.05rem)] leading-none font-semibold text-burgundy transition-all duration-200 ease-out"
                  style={{
                    opacity: valuePropVisible ? 1 : 0,
                    transform: valuePropVisible ? 'translateY(0)' : 'translateY(8px)',
                  }}
                >
                  {valueProps[valuePropIndex]}
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-[34rem] font-sans text-[2rem] leading-7 text-gray-600 sm:text-[1.3rem]">
              I build products, systems, and AI experiences that help people turn ideas into reality.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="btn-primary min-w-[148px] justify-center shadow-sm sm:text-[1.05rem]">
                View My Work <ArrowRightIcon />
              </button>
              <button className="btn-outline min-w-[148px] justify-center sm:text-[1.05rem]">
                Download CV <DownloadIcon />
              </button>
            </div>

            <div className="mt-7 flex items-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-burgundy/25" />
                <span className="relative h-2 w-2 rounded-full bg-burgundy" />
              </span>
              <span className="font-sans sm:text-[1rem] text-gray-500">Open to Front-End Opportunities</span>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#ECE1DD] bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E0DD] bg-white text-gray-700 shadow-[0_1px_0_rgba(255,255,255,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:border-burgundy hover:bg-burgundy hover:text-white hover:shadow-float"
                  >
                    <span className="transition-transform duration-200 group-hover:scale-110">
                      <Icon />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[620px] items-end justify-center lg:min-h-[760px] lg:justify-end">
            <div
              className="absolute left-1/2 top-3 h-[580px] w-[350px] -translate-x-[54%] rounded-t-[170px] rounded-b-[0] bg-burgundy shadow-[0_24px_60px_rgba(122,15,22,0.18)] transition-transform duration-500 ease-out hover:-translate-y-1 sm:h-[640px] sm:w-[380px] lg:left-[8%] lg:top-14 lg:-translate-x-0 lg:rounded-t-[190px]"
              aria-hidden="true"
            />

            <div
              className="absolute right-[10%] top-[34%] hidden h-[255px] w-[255px] rounded-full border border-[#E9D9D2] lg:block"
              aria-hidden="true"
            />

            <div className="absolute right-6 top-14 hidden lg:block" aria-hidden="true">
              <DotsPattern />
            </div>

            <div className="absolute top-[18.9%] left-1/2 z-10 -translate-x-[54%] transition-transform duration-500 ease-out sm:-translate-x-[45%] lg:left-[8%] lg:translate-x-0">
              <img
                src="/assets/gambar-syifa-nobg.png"
                alt="Syifa Fauziyah Arizal"
                className="w-[250px] select-none object-contain sm:w-[300px] lg:w-[405px]"
                draggable={false}
              />
            </div>

            <div className="absolute left-1/2 top-[57%] z-20 -translate-x-1/2 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-float backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:left-auto sm:right-0 sm:translate-x-0 sm:px-6 sm:py-5">
              <div className="font-serif text-[2.9rem] leading-none font-bold text-burgundy">
                10+
              </div>
              <div className="mt-2 font-sans text-[0.96rem] font-semibold text-gray-800">
                Projects Built
              </div>
            </div>

            <div className="absolute bottom-5 left-[10%] z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-float ring-4 ring-red-700 transition-transform duration-300 hover:scale-105 lg:left-[6%] lg:bottom-10">
              <img src="/assets/logo-libr.png" alt="Logo" className="w-12 h-12 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#EAEAEA]" />
    </section>
  )
}

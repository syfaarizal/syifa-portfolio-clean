import { useEffect, useRef, useState } from 'react'
import { navigateWithTransition } from '../lib/navigation'
import useParallax from '../hooks/useParallax'
import CvModal from './CvModal'

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

const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
  </svg>
)

const UpworkIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Upwork"
    role="img"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M357.2 296.9c-17 0-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6 13.1-47.2 43.8-47.2 23 0 41.7 18.7 41.7 41.7s-18.8 41.7-41.7 41.7zm0-125.5c-39.2 0-69.5 25.4-81.9 67.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0 21.7-17.6 39.3-39.3 39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0 44.9 36.5 81.8 81.4 81.8s81.4-36.9 81.4-81.8v-18.4c8.2 17.1 18.2 34.4 30.4 49.6l-25.8 121.4h43.1l18.7-88c16.4 10.5 35.2 17.1 56.8 17.1 46.2 0 83.8-37.8 83.8-84.1 0-46.2-37.5-83.8-83.8-83.8z"
    />
  </svg>
)

const DocumentIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8M8 17h5" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const WHATSAPP_MESSAGE =
  'Halo Syifa, saya lihat portfolio kamu dan mau diskusi soal website untuk bisnis saya'

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/syfaarizal', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/syifaarizal', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://instagram.com/syfaarizal', label: 'Instagram' },
  { icon: EmailIcon, href: 'mailto:syifairgi@gmail.com', label: 'Email' },
  {
    icon: WhatsappIcon,
    href: `https://wa.me/6285864864931?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    label: 'WhatsApp',
  },
  { icon: UpworkIcon, href: 'https://www.upwork.com/freelancers/syfaarizal?mp_source=share', label: 'Upwork' }
]

const title = 'Front-End Developer';

// --- Geometri kartu ID
const CARD_W = 900 // lebar gambar syifa-card.png saat tampil di desktop
const CARD_H = 950 // tinggi gambar (rasio 2:3)
const STRAP_W = 143 // lebar tali merah
const STRAP_END_Y = 33 // titik tali "masuk" ke ring besi, diukur dari atas PNG. Geser kalau kurang pas
const HANGER_TOP_DESKTOP = 97 // jarak atas PNG dari tepi atas hero (menentukan panjang tali yang kelihatan)
const HANGER_TOP_MOBILE = 64

// --- Fisika kartu ---
const INTRO_DROP = 900 // kartu mulai dari atas layar (px) lalu jatuh dan memantul saat halaman masuk
const GRAVITY = 3200 // px/s², kecepatan jatuh saat tali masih longgar
const STRAP_STIFFNESS = 554 // kekakuan saat tali kencang: makin besar, pantulan makin pendek
const STRAP_DAMPING = 13 // makin besar, pantulan makin cepat habis
const PULL_LIMIT_X = 150 // batas tarik ke samping (makin dekat batas, makin berat)
const PULL_LIMIT_DOWN = 240
const PULL_LIMIT_UP = 36

// Tarikan makin berat mendekati batas (karet), bukan berhenti mendadak.
const softLimit = (value: number, down: number, up: number) =>
  value >= 0 ? down * Math.tanh(value / down) : -up * Math.tanh(-value / up)

const softLimitInverse = (value: number, down: number, up: number) => {
  const limit = value >= 0 ? down : up
  const ratio = Math.min(0.98, Math.abs(value) / limit)
  return Math.sign(value) * limit * Math.atanh(ratio)
}

const valueProps = [
  'Workflow Automation',
  'Creating Digital Experiences',
  'AI-Powered Products',
  'Responsive UI',
]

export default function Hero({ introReady = true }: { introReady?: boolean }) {
  const [valuePropIndex, setValuePropIndex] = useState(0)
  const [valuePropVisible, setValuePropVisible] = useState(true)
  const [cvOpen, setCvOpen] = useState(false)
  const [cardPull, setCardPull] = useState({ x: 0, y: -INTRO_DROP, a: 0 })
  const cardSim = useRef({ x: 0, y: -INTRO_DROP, vx: 0, vy: 0, a: 0, va: 0, tx: 0, ty: 0, dragging: false, intro: false })
  const dragOrigin = useRef({ px: 0, py: 0, rawX: 0, rawY: 0 })
  const simFrame = useRef<number | null>(null)
  const simLastTime = useRef(0)
  const parallaxOffset = useParallax(0.08)
  const stageRef = useRef<HTMLDivElement>(null)
  const [cardScale, setCardScale] = useState(1)
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => setIsDesktop(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const measure = () => setCardScale(stage.clientWidth / CARD_W)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

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

  const stepSim = (time: number) => {
    const sim = cardSim.current
    const dt = Math.min(Math.max((time - simLastTime.current) / 1000, 0), 1 / 30)
    simLastTime.current = time
    const steps = 4
    const h = dt / steps

    for (let i = 0; i < steps; i++) {
      // Sumbu X: ayunan ke samping (lebih kaku saat dipegang, lebih longgar saat dilepas)
      const kx = sim.dragging ? 320 : 105
      const cx = sim.dragging ? 26 : 7.2
      sim.vx += (kx * (sim.tx - sim.x) - cx * sim.vx) * h
      sim.x += sim.vx * h

      // Sumbu Y
      if (sim.intro) {
        // Jatuh bebas saat tali longgar, memantul elastis saat tali kencang
        sim.vy += (sim.y > 0 ? -STRAP_STIFFNESS * sim.y - STRAP_DAMPING * sim.vy : GRAVITY) * h
      } else {
        const ky = sim.dragging ? 320 : 105
        const cy = sim.dragging ? 26 : 7.2
        sim.vy += (ky * (sim.ty - sim.y) - cy * sim.vy) * h
      }
      sim.y += sim.vy * h

      // Sudut: mengejar arah tali dengan sedikit delay, jadi kartu terlihat berayun
      const targetA = Math.atan2(sim.x, Math.max(520 + sim.y, 260))
      const ka = sim.dragging ? 160 : 70
      const ca = sim.dragging ? 16 : 5.5
      sim.va += (ka * (targetA - sim.a) - ca * sim.va) * h
      sim.a += sim.va * h
    }

    if (sim.intro && sim.y >= -0.3 && Math.abs(sim.vy) < 6) sim.intro = false

    const resting =
      !sim.dragging && !sim.intro &&
      Math.abs(sim.x) < 0.2 && Math.abs(sim.y) < 0.2 &&
      Math.abs(sim.vx) < 2 && Math.abs(sim.vy) < 2 &&
      Math.abs(sim.a) < 0.0005 && Math.abs(sim.va) < 0.01

    if (resting) {
      Object.assign(sim, { x: 0, y: 0, vx: 0, vy: 0, a: 0, va: 0 })
      setCardPull({ x: 0, y: 0, a: 0 })
      simFrame.current = null
      return
    }

    setCardPull({ x: sim.x, y: sim.y, a: sim.a })
    simFrame.current = window.requestAnimationFrame(stepSim)
  }

  const startSim = () => {
    if (simFrame.current !== null) return
    simLastTime.current = performance.now()
    simFrame.current = window.requestAnimationFrame(stepSim)
  }

  // Animasi masuk: kartu jatuh dari atas lalu memantul. Mulai setelah loading screen selesai (introReady).
  useEffect(() => {
    if (!introReady) return
    const sim = cardSim.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      Object.assign(sim, { x: 0, y: 0, vx: 0, vy: 0, a: 0, va: 0, intro: false })
      setCardPull({ x: 0, y: 0, a: 0 })
      return
    }
    Object.assign(sim, { x: 0, y: -INTRO_DROP, vx: 90, vy: 0, a: 0, va: 0, tx: 0, ty: 0, dragging: false, intro: true })
    if (simFrame.current !== null) window.cancelAnimationFrame(simFrame.current)
    simFrame.current = null
    startSim()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introReady])

  const startCardDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    const sim = cardSim.current
    sim.dragging = true
    sim.intro = false
    sim.tx = sim.x
    sim.ty = sim.y
    dragOrigin.current = {
      px: event.clientX,
      py: event.clientY,
      rawX: softLimitInverse(sim.x, PULL_LIMIT_X, PULL_LIMIT_X),
      rawY: softLimitInverse(sim.y, PULL_LIMIT_DOWN, PULL_LIMIT_UP),
    }
    startSim()
  }

  const moveCardDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    const sim = cardSim.current
    if (!sim.dragging) return
    const origin = dragOrigin.current
    sim.tx = softLimit(origin.rawX + (event.clientX - origin.px), PULL_LIMIT_X, PULL_LIMIT_X)
    sim.ty = softLimit(origin.rawY + (event.clientY - origin.py), PULL_LIMIT_DOWN, PULL_LIMIT_UP)
  }

  const endCardDrag = () => {
    const sim = cardSim.current
    if (!sim.dragging) return
    sim.dragging = false
    sim.tx = 0
    sim.ty = 0
    startSim()
  }

  useEffect(() => () => {
    if (simFrame.current !== null) window.cancelAnimationFrame(simFrame.current)
    simFrame.current = null
  }, [])

  // Tali: dari tepi atas hero (tetap) -> ring kartu (ikut ketarik). Kartu miring mengikuti arah tali.
  const hangerTop = isDesktop ? HANGER_TOP_DESKTOP : HANGER_TOP_MOBILE
  const tilt = cardPull.a
  const strapStartX = CARD_W / 2
  const strapStartY = isDesktop ? -120 / cardScale : 0
  const strapEndX = strapStartX + cardPull.x / cardScale
  const strapEndY = hangerTop / cardScale + STRAP_END_Y + cardPull.y / cardScale
  const strapSpan = strapEndY - strapStartY
  const strapPath = [
    `M ${strapStartX} ${strapStartY}`,
    `C ${strapStartX} ${strapStartY + strapSpan * 0.4}`,
    `${strapEndX - Math.sin(tilt) * strapSpan * 0.45} ${strapEndY - Math.cos(tilt) * strapSpan * 0.45}`,
    `${strapEndX} ${strapEndY}`,
  ].join(' ')

  return (
    <>
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fffaf9_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-20 h-72 w-72 animate-[pulse_10s_ease-in-out_infinite] sm:h-80 sm:w-80">
          <div
            className="h-full w-full rounded-full bg-burgundy/8 blur-3xl"
            style={{ transform: `translate3d(0, ${parallaxOffset * 0.15}px, 0)` }}
          />
        </div>
        <div className="absolute right-0 top-40 h-72 w-72 animate-[pulse_12s_ease-in-out_infinite] sm:h-80 sm:w-80">
          <div
            className="h-full w-full rounded-full bg-[#e7c6cb]/35 blur-3xl"
            style={{ transform: `translate3d(0, ${parallaxOffset * -0.12}px, 0)` }}
          />
        </div>
        <div className="absolute bottom-0 left-1/2 h-32 w-[20rem] -translate-x-1/2 animate-[pulse_14s_ease-in-out_infinite] sm:h-40 sm:w-[32rem]">
          <div
            className="h-full w-full rounded-full bg-burgundy/5 blur-3xl"
            style={{ transform: `translate3d(0, ${parallaxOffset * -0.08}px, 0)` }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 py-12 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1fr_0.98fr] lg:items-center lg:gap-8 lg:py-0">
          <div
            className="relative z-10 max-w-2xl xl:pl-[50px] 2xl:pl-0"
            style={{ transform: `translate3d(0, ${parallaxOffset * -0.06}px, 0)` }}
          >
            <p className="mb-4 font-sans text-[1.05rem] tracking-wide text-gray-600 sm:text-[1.2rem] lg:text-[1.5rem]">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-[12ch] font-serif text-[clamp(2.7rem,10vw,5.35rem)] leading-[0.95] font-semibold text-gray-950 sm:text-[clamp(3rem,6vw,5.35rem)]">
              Syifa Arizal
            </h1>

            <div className="mt-3">
              <p className="font-sans text-[0.82rem] font-semibold uppercase tracking-[0.24em] text-gray-500 sm:text-[1rem] lg:text-[1.1rem]">
                {title}
              </p>

              <div className="mt-3 flex items-start gap-3">
                <span className="mt-1 h-[40px] w-[3px] rounded-full bg-burgundy sm:h-[54px]" aria-hidden="true" />
                <span
                  className="pt-[6px] font-serif text-[clamp(1.45rem,7vw,3.05rem)] leading-none font-semibold text-burgundy transition-all duration-200 ease-out sm:text-[clamp(1.8rem,3.7vw,3.05rem)]"
                  style={{
                    opacity: valuePropVisible ? 1 : 0,
                    transform: valuePropVisible ? 'translateY(0)' : 'translateY(8px)',
                  }}
                >
                  {valueProps[valuePropIndex]}
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-[34rem] font-sans text-[1.05rem] leading-7 text-gray-600 sm:text-[1.15rem] lg:text-[1.3rem]">
              I build products, systems, and AI experiences that help people turn ideas into reality.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => navigateWithTransition('/projects')}
                className="btn-primary justify-center shadow-sm sm:text-[1.05rem]"
              >
                View My Work <ArrowRightIcon />
              </button>
              <button
                type="button"
                onClick={() => setCvOpen(true)}
                className="btn-outline justify-center sm:text-[1.05rem]"
              >
                View CV <DocumentIcon />
              </button>
            </div>

            <div className="mt-7 flex items-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-burgundy/25" />
                <span className="relative h-2 w-2 rounded-full bg-burgundy" />
              </span>
              <span className="font-sans text-[0.9rem] text-gray-500 sm:text-[1rem]">Open to Front-End Opportunities</span>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <div className="inline-flex flex-wrap items-center gap-3 rounded-2xl border border-[#ECE1DD] bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm sm:rounded-full">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E0DD] bg-white text-gray-700 shadow-[0_1px_0_rgba(255,255,255,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:border-burgundy hover:bg-burgundy hover:text-white hover:shadow-float sm:h-12 sm:w-12"
                  >
                    <span className="transition-transform duration-200 group-hover:scale-110">
                      <Icon />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative flex justify-center lg:self-stretch"
            style={isDesktop ? undefined : { clipPath: 'inset(0 -100vw -320px -100vw)' }}
          >
            <div
              ref={stageRef}
              className="relative flex w-[275px] flex-col items-center pb-6 sm:w-[325px] md:w-[355px] lg:w-[390px]"
              style={{ paddingTop: hangerTop }}
            >
              {/* Tali lanyard: satu kurva yang ujung bawahnya selalu nempel di ring kartu */}
              <svg
                className="pointer-events-none absolute left-0 top-0 z-0 h-auto w-full overflow-visible"
                viewBox={`0 0 ${CARD_W} ${CARD_H}`}
                aria-hidden="true"
                style={{
                  filter: 'drop-shadow(0 8px 10px rgba(75,10,18,0.14))',
                  ...(isDesktop
                    ? {}
                    : {
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, #000 40px)',
                        maskImage: 'linear-gradient(to bottom, transparent 0, #000 40px)',
                      }),
                }}
              >
                <path d={strapPath} fill="none" stroke="#940b25" strokeWidth={STRAP_W + 3} />
                <path d={strapPath} fill="none" stroke="#ad0c2b" strokeWidth={STRAP_W} />
                <path d={strapPath} fill="none" stroke="#c9253f" strokeWidth={STRAP_W * 0.35} opacity=".28" />
              </svg>

              <button
                type="button"
                aria-label="Drag Syifa's ID card"
                onPointerDown={startCardDrag}
                onPointerMove={moveCardDrag}
                onPointerUp={endCardDrag}
                onPointerCancel={endCardDrag}
                className="relative z-10 block w-full cursor-grab touch-none select-none will-change-transform active:cursor-grabbing"
                style={{
                  transform: `translate3d(${cardPull.x}px, ${cardPull.y}px, 0) rotate(${-tilt * (180 / Math.PI)}deg)`,
                  transformOrigin: `50% ${(STRAP_END_Y / CARD_H) * 100}%`,
                }}
              >
                <img
                  src="/assets/syifa-card.png"
                  alt="Syifa Arizal ID card, Front-End Developer"
                  className="block h-auto w-full drop-shadow-[0_18px_24px_rgba(75,10,18,0.16)]"
                  width={1024}
                  height={1536}
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                />
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#EAEAEA]" />
    </section>

    <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  )
}
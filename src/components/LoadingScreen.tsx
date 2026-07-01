import { useEffect, useState } from 'react'

const GREETINGS = [
  'Halo',
  'Hello',
  '你好',
  'こんにちは',
  '안녕하세요',
  'مرحبا',
  'Hallo',
  'Ciao',
  'Bonjour',
  'Hola',
  'Olá',
  'Привет',
]

const DISPLAY_DURATION = 280
const TRANSITION_DURATION = 130
const CYCLE_DURATION = DISPLAY_DURATION + TRANSITION_DURATION
const EXIT_DELAY = 5100
const EXIT_TRANSITION = 280

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let frame = 0
    const totalFrames = GREETINGS.length

    const interval = setInterval(() => {
      frame++
      if (frame < totalFrames) {
        setVisible(false)
        setTimeout(() => {
          setCurrentIndex(frame)
          setVisible(true)
        }, TRANSITION_DURATION)
      } else {
        clearInterval(interval)
      }
    }, CYCLE_DURATION)

    const exitTimer = setTimeout(() => {
      setExiting(true)
      setTimeout(onComplete, EXIT_TRANSITION)
    }, EXIT_DELAY)

    return () => {
      clearInterval(interval)
      clearTimeout(exitTimer)
    }
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#ffffff',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'scale(1.01)' : 'scale(1)',
        filter: exiting ? 'blur(2px)' : 'blur(0px)',
        transition: exiting
          ? `opacity ${EXIT_TRANSITION}ms cubic-bezier(0.4,0,0.2,1), transform ${EXIT_TRANSITION}ms cubic-bezier(0.4,0,0.2,1), filter ${EXIT_TRANSITION}ms cubic-bezier(0.4,0,0.2,1)`
          : 'none',
        pointerEvents: exiting ? 'none' : 'all',
      }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          top: '-10%',
          left: '-10%',
          width: '45vw',
          height: '45vw',
          background: 'radial-gradient(circle, rgba(17,24,39,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div
        className="pointer-events-none absolute"
        style={{
          bottom: '-10%',
          right: '-10%',
          width: '38vw',
          height: '38vw',
          background: 'radial-gradient(circle, rgba(17,24,39,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div
        className="pointer-events-none absolute left-0 top-0 w-full"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(17,24,39,0.15) 40%, rgba(17,24,39,0.08) 60%, transparent 100%)',
        }}
      />

      <div className="relative flex select-none flex-col items-center gap-6">
        <div
          className="mb-2 flex h-12 w-12 items-center justify-center rounded-full"
          style={{
            borderColor: 'rgba(17,24,39,0.16)',
            background: 'rgba(17,24,39,0.04)',
          }}
        >
            <img src="/assets/logo-libr.png" alt="Logo LIBR" className="h-10 w-10 object-contain" />
        </div>

        <div className="relative flex h-[3.5rem] w-[16rem] items-center justify-center overflow-hidden">
          <span
            key={currentIndex}
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 300,
              letterSpacing: '0.06em',
              color: '#111827',
              display: 'block',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(4px)',
              transition: `opacity ${TRANSITION_DURATION}ms cubic-bezier(0.4,0,0.2,1), transform ${TRANSITION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
              willChange: 'opacity, transform',
              textAlign: 'center',
            }}
          >
            {GREETINGS[currentIndex]}
          </span>
        </div>

        <div
          style={{
            width: '2rem',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(17,24,39,0.28), transparent)',
          }}
        />

        <p
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(17,24,39,0.45)',
            fontWeight: 800,
          }}
        >
          Portfolio
        </p>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(17,24,39,0.08) 50%, transparent 100%)',
        }}
      />
    </div>
  )
}

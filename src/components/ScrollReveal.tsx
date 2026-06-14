import { type ReactNode, useEffect, useRef, useState } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down'
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -4% 0px',
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-scroll-reveal=""
      data-revealed={isVisible ? 'true' : 'false'}
      data-reveal-direction={direction}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

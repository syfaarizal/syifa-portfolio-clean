import { useEffect, useState } from 'react'

export default function useParallax(intensity = 0.12) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let rafId = 0

    const update = () => {
      const nextOffset = Math.min(window.scrollY * intensity, 96)
      setOffset(nextOffset)
      rafId = 0
    }

    const onScroll = () => {
      if (rafId !== 0) {
        return
      }

      rafId = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [intensity])

  return offset
}

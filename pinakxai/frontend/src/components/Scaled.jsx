import { useLayoutEffect, useRef, useState } from 'react'

/** Renders children at a fixed design size and scales them to fit the box (like a screenshot). */
export default function Scaled({ width = 1280, height = 800, className = '', children }) {
  const box = useRef(null)
  const [scale, setScale] = useState(null)

  useLayoutEffect(() => {
    const el = box.current
    if (!el) return undefined
    const measure = () => setScale(el.clientWidth / width)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])

  return (
    <div
      ref={box}
      className={`scaled ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
      aria-hidden="true"
      inert
    >
      <div
        className="scaled__in"
        style={{ width, height, transform: `scale(${scale ?? 0})`, visibility: scale ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </div>
  )
}

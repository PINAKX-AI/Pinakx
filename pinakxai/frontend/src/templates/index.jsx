import { useEffect, useRef, useState } from 'react'
import { themeVars } from '../data/templates.js'
import Apex from './Apex.jsx'
import Nimbus from './Nimbus.jsx'
import Foundry from './Foundry.jsx'
import Saffron from './Saffron.jsx'
import Studio from './Studio.jsx'
import Bazaar from './Bazaar.jsx'
import './templates.css'

const registry = { apex: Apex, nimbus: Nimbus, foundry: Foundry, saffron: Saffron, studio: Studio, bazaar: Bazaar }

/** Renders a template with the chosen palette + mode. Links are inert inside previews. */
export function TemplateView({ id, palette, mode }) {
  const Cmp = registry[id]
  if (!Cmp) return null
  const stop = (e) => {
    if (e.target.closest('a[href^="#"]')) e.preventDefault()
  }
  return (
    <div className={`tpl tpl--${id}`} style={themeVars(palette, mode)} onClick={stop}>
      <Cmp />
    </div>
  )
}

/** Scaled, non-interactive live thumbnail of a template. */
export function TemplateThumb({ id, palette, mode, width = 1200, ratio = 0.62 }) {
  const box = useRef(null)
  const [scale, setScale] = useState(0.3)

  useEffect(() => {
    const el = box.current
    if (!el) return undefined
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])

  return (
    <div className="tpl-thumb" ref={box} style={{ aspectRatio: `1 / ${ratio}` }} aria-hidden="true" inert>
      <div className="tpl-thumb__in" style={{ width, transform: `scale(${scale})` }}>
        <TemplateView id={id} palette={palette} mode={mode} />
      </div>
    </div>
  )
}

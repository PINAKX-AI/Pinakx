import {
  Building2,
  Circle,
  Cpu,
  Droplets,
  FileCheck2,
  FilePlus,
  FileText,
  Gem,
  Headset,
  KeyRound,
  LifeBuoy,
  Monitor,
  Palette,
  PenLine,
  Presentation,
  Search,
  Smartphone,
  Sparkle,
  TrendingUp,
  Wrench,
} from 'lucide-react'

// Named imports keep the bundle tree-shaken; add an icon here before referencing it from data.
const icons = {
  Building2,
  Circle,
  Cpu,
  Droplets,
  FileCheck2,
  FilePlus,
  FileText,
  Gem,
  Headset,
  KeyRound,
  LifeBuoy,
  Monitor,
  Palette,
  PenLine,
  Presentation,
  Search,
  Smartphone,
  Sparkle,
  TrendingUp,
  Wrench,
}

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.6 }) {
  const Cmp = icons[name] || icons.Circle
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
}

const socialPaths = {
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.54h.06c.53-1 1.82-2.04 3.75-2.04 4 0 4.74 2.63 4.74 6.05V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75Z',
  instagram:
    'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z',
  youtube:
    'M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.76 2 12 2 12s0 3.24.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.7 19 12 19 12 19s6.3 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.4-4.8ZM10 15V9l5.2 3L10 15Z',
  x: 'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.7H5.57l11.1 14.5Z',
}

export function Social({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d={socialPaths[name]} />
    </svg>
  )
}

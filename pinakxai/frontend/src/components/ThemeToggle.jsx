import { Moon, Sun } from 'lucide-react'
import { toggleTheme, useTheme } from '../theme.js'

export default function ThemeToggle() {
  const theme = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  const onClick = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 })
  }

  return (
    <button
      type="button"
      className="theme-toggle round-btn"
      onClick={onClick}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {/* both icons are always rendered; CSS picks one from <html data-theme>, so there is no flash */}
      <Sun className="theme-toggle__sun" size={18} strokeWidth={1.6} aria-hidden="true" />
      <Moon className="theme-toggle__moon" size={18} strokeWidth={1.6} aria-hidden="true" />
    </button>
  )
}

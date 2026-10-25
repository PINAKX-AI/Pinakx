import { flushSync } from 'react-dom'
import { useSyncExternalStore } from 'react'

/**
 * Theme store. The source of truth is <html data-theme>, set before first paint by the inline
 * script in index.html (so there is never a flash), then kept in sync here.
 * Default is dark — that is the brand look — and a visitor's explicit choice is remembered.
 */
const KEY = 'theme'
const META = { dark: '#08090c', light: '#faf8f4' }
const listeners = new Set()

const read = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
const subscribe = (cb) => {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

export function applyTheme(next) {
  document.documentElement.dataset.theme = next
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* private mode: the choice just won't persist */
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META[next])
  listeners.forEach((l) => l())
}

export function useTheme() {
  return useSyncExternalStore(subscribe, read, () => 'dark')
}

/** Switch theme, revealing the new one as a circle growing out of (x, y) when View Transitions exist. */
export function toggleTheme(origin) {
  const next = read() === 'dark' ? 'light' : 'dark'
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduced) {
    applyTheme(next)
    return
  }
  const root = document.documentElement
  root.style.setProperty('--vt-x', `${origin?.x ?? window.innerWidth - 40}px`)
  root.style.setProperty('--vt-y', `${origin?.y ?? 40}px`)
  root.dataset.vt = 'theme'
  const vt = document.startViewTransition(() => flushSync(() => applyTheme(next)))
  vt.finished.finally(() => {
    delete root.dataset.vt
  })
}

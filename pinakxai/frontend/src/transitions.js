/**
 * Tags the document while a "swap" View Transition runs, so CSS can pick a plain cross-fade
 * (instead of the page-to-page slide). The flag is cleared once the animation is over.
 */
export function withSwapTransition(run) {
  const root = document.documentElement
  root.dataset.vt = 'swap'
  run()
  setTimeout(() => {
    delete root.dataset.vt
  }, 800)
}

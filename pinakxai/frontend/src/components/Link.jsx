import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom'

/**
 * App-wide links. Identical to React Router's, but every navigation runs inside a View
 * Transition (a soft cross-fade, or a shared-element morph where a page opts in) on browsers
 * that support it. Elsewhere they behave exactly like normal links.
 */
export function Link(props) {
  return <RouterLink viewTransition {...props} />
}

export function NavLink(props) {
  return <RouterNavLink viewTransition {...props} />
}

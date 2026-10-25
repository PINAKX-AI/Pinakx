import { brand } from '../data/site.js'

/**
 * How an enquiry leaves the browser.
 *
 *  • With VITE_FORM_ENDPOINT set (Formspree, Getform, Basin, your own API…) the form POSTs JSON there
 *    and the visitor sees "message sent" only after the server confirms it.
 *  • Without it, the form composes an email in the visitor's mail app — so nothing is ever
 *    silently dropped, and the UI says honestly what happened.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

export const deliveryMode = ENDPOINT ? 'endpoint' : 'email'

export function enquiryText(v, context = {}) {
  return [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    v.company ? `Company: ${v.company}` : null,
    `Project type: ${v.type}`,
    v.budget ? `Budget: ${v.budget}` : null,
    context.template ? `Template: ${context.template}` : null,
    '',
    v.message,
  ]
    .filter((line) => line !== null)
    .join('\n')
}

export async function sendEnquiry(values, context = {}) {
  const subject = `New enquiry — ${values.type} — ${values.name}`

  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        company: values.company,
        projectType: values.type,
        budget: values.budget,
        message: values.message,
        template: context.template || '',
        page: window.location.href,
        _subject: subject,
      }),
    })
    if (!res.ok) throw new Error(`Enquiry endpoint responded ${res.status}`)
    return { mode: 'sent' }
  }

  const href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiryText(values, context))}`
  window.location.href = href
  return { mode: 'email', text: enquiryText(values, context) }
}

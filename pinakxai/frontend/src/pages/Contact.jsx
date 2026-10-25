import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from '../components/Link.jsx'
import { AlertCircle, ArrowRight, ArrowUpRight, CheckCircle2, Copy, MailOpen } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui.jsx'
import { Social } from '../components/Icon.jsx'
import TemplateThumb from '../components/TemplateThumb.jsx'
import { brand, budgets, projectTypes, socials } from '../data/site.js'
import { getPalette, getTemplate } from '../data/templates.js'
import { deliveryMode, sendEnquiry } from '../lib/enquiry.js'

const empty = { name: '', email: '', company: '', type: '', budget: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (!v.type) e.type = 'Please choose a project type.'
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).'
  return e
}

function Field({ id, label, error, filled, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''} ${filled ? 'is-filled' : ''}`}>
      {children}
      <label htmlFor={id}>{label}</label>
      {error && (
        <span className="field__err" id={`${id}-err`}>
          {error}
        </span>
      )}
    </div>
  )
}

export default function Contact() {
  const [params] = useSearchParams()
  const tpl = getTemplate(params.get('template'))
  const pal = getPalette(params.get('palette') || tpl?.palette)
  const mode = params.get('mode') === 'dark' ? 'dark' : params.get('mode') === 'light' ? 'light' : tpl?.mode

  const [values, setValues] = useState(() =>
    tpl
      ? {
          ...empty,
          type: 'Website',
          message: `Hi PinakXAI, I'd like the "${tpl.name}" template in ${pal.name} (${mode} mode). Please get in touch with next steps.`,
        }
      : empty,
  )
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | email | error
  const [composed, setComposed] = useState('')
  const [copied, setCopied] = useState(false)

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }
  const aria = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  const submit = async (e) => {
    e.preventDefault()
    const er = validate(values)
    setErrors(er)
    if (Object.keys(er).length) return
    // honeypot: real people never see or fill this field, bots do
    if (e.currentTarget.elements.website?.value) {
      setStatus('sent')
      return
    }
    setStatus('sending')
    try {
      const res = await sendEnquiry(values, { template: tpl ? `${tpl.name} · ${pal.name} · ${mode}` : '' })
      if (res.mode === 'sent') {
        setStatus('sent')
        setValues(empty)
      } else {
        setComposed(res.text)
        setStatus('email')
      }
    } catch {
      setStatus('error')
    }
  }

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(composed)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable: the text is also in the email draft */
    }
  }

  return (
    <>
      <PageHero
        row
        eyebrow="Contact"
        title={
          <>
            Let’s build something <em>amazing together</em>
          </>
        }
        sub="Tell us about your project. We reply to every enquiry within one business day with next steps and an honest estimate."
      />

      <section className="section">
        <div className="container contact">
          <Reveal className="contact__form card">
            {status === 'sent' ? (
              <div className="sent" role="status">
                <CheckCircle2 size={44} />
                <h3>Thank you — message received</h3>
                <p>We will review your project and reply within one business day.</p>
                <button className="btn btn--secondary btn--sm" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : status === 'email' ? (
              <div className="sent" role="status">
                <MailOpen size={44} />
                <h3>Your email is ready to send</h3>
                <p>
                  We opened your email app with the details filled in — just press send. If nothing opened, write to{' '}
                  <a href={`mailto:${brand.email}`}>{brand.email}</a> or copy your message.
                </p>
                <div className="sent__actions">
                  <button className="btn btn--secondary btn--sm" onClick={copyMessage}>
                    <Copy size={15} /> {copied ? 'Copied' : 'Copy message'}
                  </button>
                  <button className="btn btn--ghost btn--sm" onClick={() => setStatus('idle')}>
                    Back to the form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h2>Start a project</h2>
                <p>Share a few details and we will take it from there.</p>
                <input type="text" name="website" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                {status === 'error' && (
                  <p className="form-error" role="alert">
                    <AlertCircle size={18} /> We couldn’t send that just now. Please try again, or email us at{' '}
                    <a href={`mailto:${brand.email}`}>{brand.email}</a>.
                  </p>
                )}
                {tpl && (
                  <div className="picked">
                    <div className="picked__thumb">
                      <TemplateThumb id={tpl.id} palette={pal.id} mode={mode} width={1000} ratio={0.62} />
                    </div>
                    <div>
                      <small>Selected template</small>
                      <strong>{tpl.name}</strong>
                      <span>
                        <i style={{ background: `linear-gradient(135deg, ${pal.p2}, ${pal.p})` }} /> {pal.name} · {mode}
                      </span>
                      <Link to={`/templates/${tpl.id}?palette=${pal.id}&mode=${mode}`}>Change</Link>
                    </div>
                  </div>
                )}
                <div className="form-row">
                  <Field id="name" label="Your name" error={errors.name}>
                    <input
                      id="name"
                      placeholder=" "
                      value={values.name}
                      onChange={set('name')}
                      autoComplete="name"
                      {...aria('name')}
                    />
                  </Field>
                  <Field id="email" label="Email address" error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      placeholder=" "
                      value={values.email}
                      onChange={set('email')}
                      autoComplete="email"
                      {...aria('email')}
                    />
                  </Field>
                </div>
                <Field id="company" label="Company (optional)">
                  <input
                    id="company"
                    placeholder=" "
                    value={values.company}
                    onChange={set('company')}
                    autoComplete="organization"
                  />
                </Field>
                <div className="form-row">
                  <Field id="type" label="Project type" error={errors.type} filled={!!values.type}>
                    <select id="type" value={values.type} onChange={set('type')} {...aria('type')}>
                      <option value="" disabled />
                      {projectTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="budget" label="Budget (optional)" filled={!!values.budget}>
                    <select id="budget" value={values.budget} onChange={set('budget')}>
                      <option value="" disabled />
                      {budgets.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field id="message" label="Tell us about your project" error={errors.message}>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder=" "
                    value={values.message}
                    onChange={set('message')}
                    {...aria('message')}
                  />
                </Field>
                <button className="btn btn--primary btn--lg btn--block" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    'Sending…'
                  ) : (
                    <>
                      Send message <ArrowRight size={17} />
                    </>
                  )}
                </button>
                <p className="form-note">
                  {deliveryMode === 'email'
                    ? 'Sending opens your email app with your message ready to go.'
                    : 'We never share your details. No spam, ever.'}
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={100} className="contact__side">
            <div>
              <h3>Reach us directly</h3>
              <div className="contact__list">
                <a href={`mailto:${brand.email}`}>
                  <span>
                    <small>Email</small>
                    {brand.email}
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>
                  <span>
                    <small>Phone</small>
                    {brand.phone}
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <div>
                  <span>
                    <small>Office hours</small>
                    {brand.hours}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3>What happens next</h3>
              <ol className="next-steps">
                <li>
                  <div>
                    <strong>We reply within one business day</strong>
                    With a few questions, or to book a short call.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Free 30-minute discovery call</strong>
                    We understand your goals, users and timeline.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Written proposal</strong>
                    Fixed scope, timeline and price — no obligation.
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <h3>Follow us</h3>
              <div className="footer__social">
                {socials.map((s) => (
                  <a key={s.id} href={s.href} aria-label={s.label}>
                    <Social name={s.id} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

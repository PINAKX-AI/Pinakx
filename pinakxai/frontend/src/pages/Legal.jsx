import { Link } from '../components/Link.jsx'
import { PageHero } from '../components/ui.jsx'
import { brand } from '../data/site.js'

const UPDATED = '13 October 2026'

function LegalPage({ eyebrow, title, children }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} sub={`Last updated ${UPDATED}`} />
      <section className="section">
        <div className="container">
          <article className="prose prose--legal">{children}</article>
        </div>
      </section>
    </>
  )
}

export function Privacy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy policy">
      <p className="lede">
        This policy explains what information PinakXAI collects when you use this website or contact us, how we use it
        and the choices you have.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Details you give us</strong> — such as your name, email address, company and project details when you
          submit the contact form or email us.
        </li>
        <li>
          <strong>Usage data</strong> — anonymous information such as pages visited and device type, collected through
          privacy-friendly analytics.
        </li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and prepare proposals you ask for</li>
        <li>To deliver and support projects we carry out for you</li>
        <li>To understand how the website is used so we can improve it</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not use it for unrelated marketing without your consent.
      </p>
      <h2>Sharing</h2>
      <p>
        We share information only with service providers who help us run our business — for example hosting, email and
        analytics providers — and only as far as needed for that purpose, or where required by law.
      </p>
      <h2>Retention and security</h2>
      <p>
        We keep enquiry details for as long as needed to respond and for reasonable record-keeping, and we use
        appropriate technical and organisational measures to protect them.
      </p>
      <h2>Your choices</h2>
      <p>
        You can ask us to access, correct or delete the personal information we hold about you at any time by emailing{' '}
        <a href={`mailto:${brand.email}`}>{brand.email}</a>.
      </p>
      <h2>Changes</h2>
      <p>We may update this policy from time to time. The date at the top of this page shows when it last changed.</p>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of service">
      <p className="lede">
        These terms apply to your use of the PinakXAI website. Project work is governed by the individual proposal or
        agreement signed for that project.
      </p>
      <h2>Use of this website</h2>
      <p>
        You may browse and share content from this website for personal and business research. You may not copy, resell
        or misuse its content, design or code without our written permission.
      </p>
      <h2>Templates and previews</h2>
      <p>
        Website templates shown on this site are previews. Content, names and figures inside them are illustrative. A
        template becomes yours to use once it is purchased and customised as part of a project.
      </p>
      <h2>Quotes and pricing</h2>
      <p>
        Prices on this website are indicative starting points and exclude GST. The final scope, price and timeline for
        any project are confirmed in a written proposal.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Unless agreed otherwise in a project agreement, ownership of deliverables transfers to the client once the
        project has been paid in full.
      </p>
      <h2>Liability</h2>
      <p>
        We take care to keep this website accurate and available, but it is provided “as is”. We are not liable for
        losses arising from its use, to the extent permitted by law.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${brand.email}`}>{brand.email}</a> or use our{' '}
        <Link to="/contact">contact page</Link>.
      </p>
    </LegalPage>
  )
}

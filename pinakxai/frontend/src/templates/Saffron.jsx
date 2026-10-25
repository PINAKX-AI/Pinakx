import { useState } from 'react'
import { ArrowRight, CalendarDays, Clock, Flame, Leaf, MapPin, Quote, Star, Utensils } from 'lucide-react'
import { Head, TplFooter, TplNav } from './parts.jsx'

const menu = {
  Starters: [
    ['Burrata & Heirloom Tomato', 'Basil oil, aged balsamic, sourdough crisp', '14'],
    ['Charred Octopus', 'Smoked paprika, chickpea purée, lemon', '18'],
    ['Wild Mushroom Arancini', 'Truffle aioli, parmesan, thyme', '12'],
    ['Beef Carpaccio', 'Rocket, capers, shaved grana, mustard', '16'],
  ],
  Mains: [
    ['Saffron Risotto', 'Slow-cooked carnaroli, marrow, gremolata', '26'],
    ['Herb-crusted Lamb Rack', 'Rosemary jus, pomme purée, greens', '38'],
    ['Pan-seared Sea Bass', 'Fennel, citrus beurre blanc, samphire', '32'],
    ['Wild Mushroom Pappardelle', 'Hand-rolled pasta, parmesan, sage', '24'],
  ],
  Desserts: [
    ['Dark Chocolate Fondant', 'Salted caramel, vanilla bean gelato', '12'],
    ['Lemon & Olive Oil Cake', 'Mascarpone, candied zest', '10'],
    ['Pistachio Panna Cotta', 'Rose syrup, crushed pistachio', '11'],
    ['Affogato', 'Espresso, amaretto, vanilla gelato', '9'],
  ],
  Drinks: [
    ['Saffron Negroni', 'Gin, saffron vermouth, bitters', '15'],
    ['Smoked Old Fashioned', 'Bourbon, maple, orange', '16'],
    ['Garden Spritz', 'Elderflower, cucumber, prosecco', '13'],
    ['Artisan Espresso', 'Single-origin, house roast', '4'],
  ],
}

const specials = [
  { icon: Flame, title: 'Chef’s tasting menu', text: 'Seven courses with optional wine pairing.', price: '$85' },
  { icon: Leaf, title: 'Seasonal vegetarian', text: 'Five plant-forward courses from local farms.', price: '$62' },
  { icon: Utensils, title: 'Sunday family feast', text: 'Sharing platters for four, all afternoon.', price: '$120' },
]

export default function Saffron() {
  const [tab, setTab] = useState('Starters')

  return (
    <div className="sf" id="top">
      <TplNav
        brand="Saffron"
        links={['Home', 'Menu', 'Our Story', 'Gallery', 'Contact']}
        cta="Reserve"
        className="t-nav--center"
      />

      <section className="sf-hero">
        <div className="sf-hero__bg" aria-hidden="true" />
        <div className="t-wrap sf-hero__in">
          <span className="t-eyebrow">Modern Mediterranean · Est. 2012</span>
          <h1 className="t-h1">
            Where every meal becomes a <em>memory</em>
          </h1>
          <p className="t-lead">
            Seasonal ingredients, open-fire cooking and warm hospitality in the heart of the city.
          </p>
          <div className="t-actions t-actions--c">
            <a href="#top" className="t-btn t-btn--p">
              <CalendarDays size={16} /> Reserve a table
            </a>
            <a href="#top" className="t-btn t-btn--o">
              View menu
            </a>
          </div>
          <div className="sf-rate">
            <span>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </span>{' '}
            Rated 4.9 by 2,300+ guests
          </div>
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap sf-about">
          <div className="sf-about__art">
            <div className="t-art t-art--a" />
            <div className="t-art t-art--e" />
          </div>
          <div>
            <Head eyebrow="Our story" title="Honest food, cooked over fire" />
            <p className="t-lead">
              Saffron began as a tiny kitchen with a wood-fired oven and a simple idea: cook what is in season, waste
              nothing and make every guest feel at home.
            </p>
            <p className="t-lead">
              Today our team still butchers, bakes and ferments in-house — and buys from farms within 80 miles.
            </p>
            <a href="#top" className="t-link">
              Meet the team <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="t-sec t-sec--alt">
        <div className="t-wrap">
          <Head eyebrow="The menu" title="Taste the season" center />
          <div className="t-chips t-chips--c" role="tablist">
            {Object.keys(menu).map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={tab === k}
                className={tab === k ? 'on' : ''}
                onClick={() => setTab(k)}
              >
                {k}
              </button>
            ))}
          </div>
          <ul className="sf-menu" key={tab}>
            {menu[tab].map(([n, d, p]) => (
              <li key={n}>
                <div>
                  <h3>{n}</h3>
                  <p>{d}</p>
                </div>
                <i aria-hidden="true" />
                <strong>${p}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <Head eyebrow="Experiences" title="Made for special occasions" center />
          <div className="t-cols t-c3">
            {specials.map((s) => (
              <article key={s.title} className="t-card sf-special">
                <span className="t-ico">
                  <s.icon size={22} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <strong>
                  {s.price} <small>per person</small>
                </strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sf-gallery">
        <div className="t-art t-art--a" />
        <div className="t-art t-art--c" />
        <div className="t-art t-art--e" />
        <div className="t-art t-art--b" />
        <div className="t-art t-art--d" />
        <div className="t-art t-art--a" />
      </section>

      <section className="t-sec">
        <div className="t-wrap sf-quote">
          <Quote size={30} />
          <blockquote>
            The best meal we have had all year. Every plate felt considered, and the staff made us feel like regulars on
            our first visit.
          </blockquote>
          <figcaption>— Elena M., Guest review</figcaption>
        </div>
      </section>

      <section className="t-sec t-sec--alt">
        <div className="t-wrap sf-book">
          <div>
            <Head eyebrow="Reservations" title="Book your table" />
            <ul className="sf-info">
              <li>
                <Clock size={17} />
                <div>
                  <strong>Opening hours</strong>
                  <span>Tue – Sun · 12:00 – 23:00</span>
                </div>
              </li>
              <li>
                <MapPin size={17} />
                <div>
                  <strong>Find us</strong>
                  <span>24 Harbour Lane, Old Town</span>
                </div>
              </li>
            </ul>
          </div>
          <form className="t-card sf-form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your name" aria-label="Name" />
            <div className="sf-form__row">
              <input type="date" aria-label="Date" />
              <select aria-label="Guests" defaultValue="2">
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="4">4 guests</option>
                <option value="6">6 guests</option>
              </select>
            </div>
            <input placeholder="Phone or email" aria-label="Contact" />
            <button className="t-btn t-btn--p">Confirm reservation</button>
          </form>
        </div>
      </section>

      <TplFooter
        brand="Saffron"
        blurb="Modern Mediterranean kitchen & bar."
        cols={[
          { title: 'Visit', items: ['24 Harbour Lane', 'Tue – Sun 12–23', 'hello@saffron.co'] },
          { title: 'Explore', items: ['Menu', 'Our Story', 'Private dining', 'Gift cards'] },
          { title: 'Follow', items: ['Instagram', 'Facebook', 'TripAdvisor'] },
        ]}
        note="© 2026 Saffron Restaurant"
      />
    </div>
  )
}

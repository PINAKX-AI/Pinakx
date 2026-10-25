import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Backpack,
  Coffee,
  Footprints,
  Glasses,
  Headphones,
  Heart,
  Lamp,
  RotateCcw,
  Search,
  Shirt,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  Watch,
  X,
  Headset,
} from 'lucide-react'
import { Head, TplFooter, TplNav } from './parts.jsx'

const products = [
  {
    id: 1,
    name: 'Aero Wireless Headphones',
    price: 129,
    old: 169,
    icon: Headphones,
    art: 'a',
    rating: 4.8,
    tag: 'Best seller',
  },
  { id: 2, name: 'Chrono Smart Watch', price: 199, icon: Watch, art: 'b', rating: 4.7 },
  { id: 3, name: 'Trail Running Shoes', price: 89, old: 119, icon: Footprints, art: 'c', rating: 4.6, tag: '-25%' },
  { id: 4, name: 'Urban Commuter Backpack', price: 74, icon: Backpack, art: 'd', rating: 4.9 },
  { id: 5, name: 'Essential Cotton Tee', price: 29, icon: Shirt, art: 'e', rating: 4.5 },
  { id: 6, name: 'Sunset Aviator Glasses', price: 59, icon: Glasses, art: 'a', rating: 4.4, tag: 'New' },
  { id: 7, name: 'Arc Desk Lamp', price: 49, icon: Lamp, art: 'b', rating: 4.7 },
  { id: 8, name: 'Ceramic Pour-over Set', price: 39, icon: Coffee, art: 'c', rating: 4.8 },
]

const cats = [
  { name: 'Electronics', count: 124, icon: Headphones },
  { name: 'Fashion', count: 312, icon: Shirt },
  { name: 'Home & Living', count: 86, icon: Lamp },
  { name: 'Accessories', count: 148, icon: Glasses },
]

export default function Bazaar() {
  const [cart, setCart] = useState({})
  const [wish, setWish] = useState({})
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  const cartBtnRef = useRef(null)

  // Esc closes; focus moves into the drawer on open and returns to the cart button on close
  useEffect(() => {
    if (!open) return undefined
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    const btn = cartBtnRef.current
    return () => {
      window.removeEventListener('keydown', onKey)
      btn?.focus()
    }
  }, [open])

  const count = Object.values(cart).reduce((a, b) => a + b, 0)
  const total = products.reduce((s, p) => s + (cart[p.id] || 0) * p.price, 0)
  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  const remove = (id) =>
    setCart((c) => {
      const n = { ...c }
      delete n[id]
      return n
    })

  const cartBtn = (
    <button ref={cartBtnRef} className="bz-cartbtn" onClick={() => setOpen(true)} aria-label={`Cart, ${count} items`}>
      <ShoppingBag size={20} />
      {count > 0 && <b>{count}</b>}
    </button>
  )

  return (
    <div className="bz" id="top">
      <div className="bz-announce">
        Free shipping on orders over $75 · Use code <b>WELCOME10</b> for 10% off
      </div>
      <TplNav
        brand="Bazaar"
        links={['Shop', 'New', 'Deals', 'Journal', 'Help']}
        extra={
          <>
            <button className="bz-iconbtn" aria-label="Search">
              <Search size={19} />
            </button>
            {cartBtn}
          </>
        }
      />

      <section className="bz-hero">
        <div className="t-wrap bz-hero__in">
          <div>
            <span className="t-eyebrow">Summer collection 2026</span>
            <h1 className="t-h1">
              Everyday essentials, <em>thoughtfully</em> made
            </h1>
            <p className="t-lead">
              Discover quality products at honest prices — with free returns and delivery you can count on.
            </p>
            <div className="t-actions">
              <a href="#shop" className="t-btn t-btn--p">
                Shop the collection <ArrowRight size={16} />
              </a>
              <a href="#top" className="t-btn t-btn--o">
                View deals
              </a>
            </div>
          </div>
          <div className="bz-hero__art">
            <div className="t-art t-art--a bz-hero__main">
              <Headphones size={110} strokeWidth={1.1} />
            </div>
            <div className="bz-chip bz-chip--1">
              <Star size={14} fill="currentColor" /> 4.9 · 3,200 reviews
            </div>
            <div className="bz-chip bz-chip--2">
              Up to <b>40% off</b>
            </div>
          </div>
        </div>
      </section>

      <section className="bz-benefits">
        <div className="t-wrap">
          {[
            [Truck, 'Free delivery', 'Orders over $75'],
            [RotateCcw, '30-day returns', 'No questions asked'],
            [ShieldCheck, 'Secure payment', '256-bit encryption'],
            [Headset, '24/7 support', 'Real humans'],
          ].map(([Ic, a, b]) => (
            <div key={a}>
              <Ic size={22} />
              <span>
                <strong>{a}</strong>
                <small>{b}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <Head eyebrow="Browse" title="Shop by category" />
          <div className="t-cols t-c4">
            {cats.map((c, i) => (
              <a key={c.name} href="#top" className="bz-cat">
                <span className={`t-art t-art--${['b', 'c', 'd', 'e'][i]}`}>
                  <c.icon size={44} strokeWidth={1.2} />
                </span>
                <strong>{c.name}</strong>
                <small>{c.count} products</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="t-sec t-sec--alt" id="shop">
        <div className="t-wrap">
          <Head eyebrow="Trending now" title="Customer favourites" />
          <div className="t-cols t-c4">
            {products.map((p) => (
              <article key={p.id} className="bz-prod">
                <div className={`t-art t-art--${p.art} bz-prod__img`}>
                  <p.icon size={56} strokeWidth={1.2} />
                  {p.tag && <span className="bz-tag">{p.tag}</span>}
                  <button
                    className={`bz-heart ${wish[p.id] ? 'on' : ''}`}
                    aria-pressed={!!wish[p.id]}
                    aria-label="Add to wishlist"
                    onClick={() => setWish((w) => ({ ...w, [p.id]: !w[p.id] }))}
                  >
                    <Heart size={16} fill={wish[p.id] ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="bz-prod__body">
                  <small className="bz-rating">
                    <Star size={12} fill="currentColor" /> {p.rating}
                  </small>
                  <h3>{p.name}</h3>
                  <div className="bz-prod__foot">
                    <span className="bz-price">
                      ${p.price}
                      {p.old && <s>${p.old}</s>}
                    </span>
                    <button className="bz-add" onClick={() => add(p.id)}>
                      {cart[p.id] ? `Added · ${cart[p.id]}` : 'Add'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <div className="t-cta">
            <div>
              <h2 className="t-h2">Join the Bazaar club</h2>
              <p>Get 10% off your first order plus early access to new drops.</p>
            </div>
            <form className="bz-news" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" aria-label="Email" />
              <button className="t-btn t-btn--inv">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <TplFooter
        brand="Bazaar"
        blurb="Quality everyday essentials, delivered."
        cols={[
          { title: 'Shop', items: ['Electronics', 'Fashion', 'Home', 'Accessories'] },
          { title: 'Help', items: ['Shipping', 'Returns', 'Order tracking', 'Contact'] },
          { title: 'Company', items: ['About', 'Careers', 'Sustainability'] },
        ]}
        note="© 2026 Bazaar Retail"
      />

      <div className={`bz-drawer ${open ? 'is-open' : ''}`} inert={!open}>
        <div className="bz-drawer__scrim" onClick={() => setOpen(false)} />
        <aside role="dialog" aria-modal="true" aria-label="Shopping cart">
          <header>
            <h3>Your cart ({count})</h3>
            <button ref={closeRef} onClick={() => setOpen(false)} aria-label="Close cart">
              <X size={20} />
            </button>
          </header>
          <ul>
            {count === 0 && <li className="bz-empty">Your cart is empty.</li>}
            {products
              .filter((p) => cart[p.id])
              .map((p) => (
                <li key={p.id}>
                  <span className={`t-art t-art--${p.art}`}>
                    <p.icon size={22} />
                  </span>
                  <div>
                    <strong>{p.name}</strong>
                    <small>
                      {cart[p.id]} × ${p.price}
                    </small>
                  </div>
                  <button onClick={() => remove(p.id)} aria-label="Remove">
                    <X size={16} />
                  </button>
                </li>
              ))}
          </ul>
          <footer>
            <div>
              <span>Subtotal</span>
              <strong>${total}</strong>
            </div>
            <button className="t-btn t-btn--p">Checkout</button>
          </footer>
        </aside>
      </div>
    </div>
  )
}

/**
 * Illustrative product screens for the portfolio, rendered as real UI at
 * 1280×800 and scaled down. Swap any of these for a real screenshot by
 * replacing the matching entry in `screens` with an <img>.
 */
import {
  Bell,
  BarChart3,
  Building2,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardList,
  Download,
  FileText,
  Filter,
  Hammer,
  HardHat,
  Home,
  LayoutDashboard,
  Package,
  Paintbrush,
  Phone,
  Receipt,
  ScanLine,
  Search,
  Settings,
  ShieldCheck,
  Sparkle,
  Star,
  Truck,
  Upload,
  Users,
  Wallet,
  Wrench,
  Zap,
} from 'lucide-react'
import Scaled from '../Scaled.jsx'
import './screens.css'

function Hrms() {
  const nav = [
    [LayoutDashboard, 'Dashboard'],
    [Users, 'Employees'],
    [CalendarCheck, 'Attendance'],
    [ClipboardList, 'Leave'],
    [Wallet, 'Payroll'],
    [Receipt, 'Expenses'],
    [BarChart3, 'Reports'],
    [Settings, 'Settings'],
  ]
  const bars = [72, 80, 76, 88, 91, 64, 40, 86, 92, 89, 94, 90, 70, 93]
  const rows = [
    ['Rahul Verma', 'Engineering', '09:02', 'Present'],
    ['Sneha Iyer', 'Finance', '09:14', 'Present'],
    ['Arjun Mehta', 'Operations', '—', 'On leave'],
    ['Kavya Nair', 'Sales', '09:41', 'Late'],
    ['Imran Shaikh', 'Engineering', '08:55', 'Present'],
  ]
  return (
    <div className="scr hr">
      <aside className="hr-side">
        <div className="hr-logo">
          <span>
            <Users size={16} />
          </span>
          HRMS
        </div>
        {nav.map(([I, l], i) => (
          <div key={l} className={`hr-nav ${i === 0 ? 'on' : ''}`}>
            <I size={17} />
            {l}
          </div>
        ))}
        <div className="hr-user">
          <b>AD</b>
          <div>
            <strong>Admin</strong>
            <small>Hydromaterials</small>
          </div>
        </div>
      </aside>
      <main className="hr-main">
        <header className="hr-top">
          <div>
            <h1>Dashboard</h1>
            <small>Overview for October 2026</small>
          </div>
          <div className="hr-search">
            <Search size={15} />
            Search employees, payslips…
          </div>
          <span className="hr-icon">
            <Bell size={17} />
            <i />
          </span>
          <button className="hr-btn">Run payroll</button>
        </header>
        <section className="hr-kpis">
          {[
            ['Total employees', '248', '+6 this month'],
            ['Present today', '231', '93.1% attendance'],
            ['On leave', '9', '3 pending approval'],
            ['October payroll', '₹18.42L', 'Ready to process'],
          ].map(([a, b, c], i) => (
            <div key={a} className={i === 3 ? 'accent' : ''}>
              <small>{a}</small>
              <strong>{b}</strong>
              <em>{c}</em>
            </div>
          ))}
        </section>
        <section className="hr-row">
          <div className="hr-card">
            <div className="hr-card__h">
              <h3>Attendance · last 14 days</h3>
              <span>Daily %</span>
            </div>
            <div className="hr-bars">
              {bars.map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="hr-card">
            <div className="hr-card__h">
              <h3>Pending approvals</h3>
              <span>4</span>
            </div>
            {[
              ['Leave · 3 days', 'Arjun Mehta'],
              ['Expense · ₹2,450', 'Kavya Nair'],
              ['Leave · 1 day', 'Sneha Iyer'],
              ['Expense · ₹860', 'Rahul Verma'],
            ].map(([a, b]) => (
              <div key={a + b} className="hr-appr">
                <div>
                  <strong>{b}</strong>
                  <small>{a}</small>
                </div>
                <button>Approve</button>
              </div>
            ))}
          </div>
        </section>
        <section className="hr-card hr-table">
          <div className="hr-card__h">
            <h3>Today’s attendance</h3>
            <span>View all</span>
          </div>
          {rows.map(([n, d, t, s]) => (
            <div key={n} className="hr-tr">
              <span className="hr-av">
                {n
                  .split(' ')
                  .map((x) => x[0])
                  .join('')}
              </span>
              <strong>{n}</strong>
              <span>{d}</span>
              <span>{t}</span>
              <em className={`hr-st hr-st--${s.split(' ')[0].toLowerCase()}`}>{s}</em>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

function HelpGlow() {
  return (
    <div className="scr hg">
      <nav className="hg-nav">
        <div className="hg-logo">
          <Sparkle size={20} />
          HelpGlow
        </div>
        <div className="hg-links">
          <span>Services</span>
          <span>How it works</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <button className="hg-btn">Get a free quote</button>
      </nav>
      <section className="hg-hero">
        <div>
          <span className="hg-badge">
            <ShieldCheck size={15} />
            Verified · Reliable · On time
          </span>
          <h1>Professional help, right when you need it.</h1>
          <p>
            Book trusted professionals for your home and business in minutes — transparent pricing, no hidden charges.
          </p>
          <div className="hg-search">
            <Search size={18} />
            <span>What do you need help with?</span>
            <button>Search</button>
          </div>
          <div className="hg-rate">
            <span>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </span>
            Rated 4.9 by our customers
          </div>
        </div>
        <div className="hg-art">
          <div className="hg-blob" />
          <div className="hg-float hg-float--1">
            <span>
              <Check size={16} />
            </span>
            <div>
              <strong>Request received</strong>
              <small>We’ll call you in 10 minutes</small>
            </div>
          </div>
          <div className="hg-float hg-float--2">
            <Phone size={16} />
            <div>
              <strong>Expert assigned</strong>
              <small>Arriving today, 4–5 PM</small>
            </div>
          </div>
        </div>
      </section>
      <section className="hg-cats">
        {[
          [Home, 'Home cleaning'],
          [Wrench, 'Repairs'],
          [Zap, 'Electrical'],
          [Paintbrush, 'Painting'],
        ].map(([I, l]) => (
          <div key={l}>
            <span>
              <I size={22} />
            </span>
            <strong>{l}</strong>
            <small>Book now →</small>
          </div>
        ))}
      </section>
    </div>
  )
}

function Invoice() {
  const fields = [
    ['Vendor', 'Shree Ganesh Traders', 99],
    ['GSTIN', '27AABCS1429B1Z5', 98],
    ['Invoice no.', 'INV-2041', 99],
    ['Invoice date', '04 Oct 2026', 97],
    ['Taxable value', '₹1,05,407.00', 96],
    ['GST (18%)', '₹18,973.26', 84],
    ['Total', '₹1,24,380.26', 99],
  ]
  return (
    <div className="scr iv">
      <header className="iv-top">
        <div className="iv-logo">
          <ScanLine size={18} />
          Invoice AI
        </div>
        <div className="iv-steps">
          {['Upload', 'Extract', 'Review', 'Export'].map((s, i) => (
            <span key={s} className={i < 2 ? 'done' : i === 2 ? 'now' : ''}>
              <b>{i < 2 ? <Check size={12} /> : i + 1}</b>
              {s}
            </span>
          ))}
        </div>
        <button className="iv-ghost">
          <Upload size={15} />
          Upload
        </button>
      </header>
      <div className="iv-body">
        <section className="iv-doc">
          <div className="iv-paper">
            <div className="iv-ph">
              <div>
                <strong>Shree Ganesh Traders</strong>
                <small>Plot 14, MIDC, Pune 411019</small>
                <small className="hl">GSTIN 27AABCS1429B1Z5</small>
              </div>
              <div className="iv-tt">
                TAX INVOICE<small className="hl">INV-2041 · 04/10/2026</small>
              </div>
            </div>
            <div className="iv-bill">
              <small>Bill to</small>
              <strong>Hydromaterials Pvt. Ltd.</strong>
            </div>
            <div className="iv-lines">
              <div className="h">
                <span>Item</span>
                <span>Qty</span>
                <span>Rate</span>
                <span>Amount</span>
              </div>
              {[
                ['PVC pipe 4" (6m)', '120', '412.00', '49,440.00'],
                ['Gate valve 2"', '45', '780.00', '35,100.00'],
                ['Fittings assorted', '1', '20,867.00', '20,867.00'],
              ].map((r) => (
                <div key={r[0]}>
                  {r.map((c, i) => (
                    <span key={i}>{c}</span>
                  ))}
                </div>
              ))}
            </div>
            <div className="iv-tot">
              <div>
                <span>Taxable value</span>
                <span>1,05,407.00</span>
              </div>
              <div>
                <span>CGST 9%</span>
                <span>9,486.63</span>
              </div>
              <div>
                <span>SGST 9%</span>
                <span>9,486.63</span>
              </div>
              <div className="hl">
                <span>Total</span>
                <span>₹1,24,380.26</span>
              </div>
            </div>
          </div>
        </section>
        <section className="iv-panel">
          <div className="iv-ph2">
            <h3>Extracted data</h3>
            <span>7 fields · 1 to review</span>
          </div>
          {fields.map(([k, v, c]) => (
            <div key={k} className={`iv-f ${c < 90 ? 'warn' : ''}`}>
              <small>{k}</small>
              <strong>{v}</strong>
              <em>{c < 90 ? 'Review' : `${c}%`}</em>
            </div>
          ))}
          <div className="iv-actions">
            <button className="iv-ghost">Edit fields</button>
            <button className="iv-primary">
              <Download size={15} />
              Export to Excel
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

function Bharat() {
  return (
    <div className="scr bf">
      <nav className="bf-nav">
        <div className="bf-logo">
          <span>B</span>Bharat Filing
        </div>
        <div className="bf-links">
          <span>Services</span>
          <span>Why us</span>
          <span>About</span>
        </div>
        <button className="bf-btn">Contact Us</button>
      </nav>
      <section className="bf-hero">
        <div className="bf-copy">
          <p className="bf-kicker">
            <span>
              <i />
              Coming soon
            </span>
            Compliance. Simplified.
          </p>
          <h1>
            Something Better for{' '}
            <em>
              Bharat
              <svg viewBox="0 0 220 16" fill="none">
                <path d="M3 11.5C48 4.5 120 2.5 217 7" stroke="#f2811b" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </em>{' '}
            is Coming.
          </h1>
          <p>
            Bharat Filing is building a simpler and more transparent way to manage tax filing, business compliance and
            professional CA services — all in one place.
          </p>
          <div className="bf-actions">
            <button className="bf-btn">Explore Services</button>
            <button className="bf-out">Contact Us</button>
          </div>
        </div>
        <div className="bf-cards">
          {[
            [FileText, 'GST registration & returns', 'Monthly and quarterly filing'],
            [Receipt, 'Income tax returns', 'For individuals and businesses'],
            [Building2, 'Company registration', 'Pvt Ltd, LLP and more'],
            [ShieldCheck, 'Compliance & CA services', 'Expert support, year-round'],
          ].map(([I, a, b]) => (
            <div key={a}>
              <span>
                <I size={18} />
              </span>
              <div>
                <strong>{a}</strong>
                <small>{b}</small>
              </div>
              <Check size={16} className="ok" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Manjula() {
  return (
    <div className="scr mj">
      <div className="mj-sky" />
      <div className="mj-city">
        {[38, 56, 44, 70, 52, 82, 48, 64, 40, 58, 74, 46].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mj-crane">
        <b />
        <i />
      </div>
      <nav className="mj-nav">
        <div className="mj-logo">
          <HardHat size={20} />
          Manjula Construction
        </div>
        <div className="mj-links">
          <span>Projects</span>
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <button className="mj-btn">Request a quote</button>
      </nav>
      <section className="mj-hero">
        <small>Residential · Commercial · Renovation</small>
        <h1>
          Building with integrity.
          <br />
          Delivering with pride.
        </h1>
        <p>From foundations to finishing, we build homes and commercial spaces that stand the test of time.</p>
        <div>
          <button className="mj-btn">View our projects</button>
          <button className="mj-out">Talk to an engineer</button>
        </div>
      </section>
      <section className="mj-tiles">
        {[
          [Home, 'Residential'],
          [Building2, 'Commercial'],
          [Hammer, 'Renovation'],
          [Paintbrush, 'Interiors'],
        ].map(([I, l]) => (
          <div key={l}>
            <I size={22} />
            <strong>{l}</strong>
            <small>Explore →</small>
          </div>
        ))}
      </section>
    </div>
  )
}

function Ops() {
  const rows = [
    ['#4821', 'Sharma Hardware', '14', '₹38,400', 'Pending', 'RK'],
    ['#4820', 'Patel Builders', '6', '₹12,950', 'Packed', 'SN'],
    ['#4819', 'Nova Interiors', '22', '₹71,200', 'Shipped', 'AM'],
    ['#4818', 'Green Valley Farms', '3', '₹6,480', 'Delivered', 'RK'],
    ['#4817', 'Metro Plumbing Co.', '18', '₹44,100', 'Packed', 'PD'],
    ['#4816', 'Sai Traders', '9', '₹19,800', 'Shipped', 'SN'],
    ['#4815', 'Urban Spaces', '11', '₹27,350', 'Pending', 'AM'],
    ['#4814', 'Coastal Supplies', '5', '₹9,120', 'Delivered', 'PD'],
  ]
  return (
    <div className="scr op">
      <aside className="op-side">
        <span className="op-logo">
          <Package size={18} />
        </span>
        {[LayoutDashboard, ClipboardList, Package, Truck, Users, BarChart3, Settings].map((I, i) => (
          <span key={i} className={i === 1 ? 'on' : ''}>
            <I size={18} />
          </span>
        ))}
      </aside>
      <main className="op-main">
        <header className="op-top">
          <div>
            <h1>Orders</h1>
            <small>Updated just now · 128 open</small>
          </div>
          <div className="op-search">
            <Search size={15} />
            Search orders
          </div>
          <button className="op-btn">+ New order</button>
        </header>
        <div className="op-kpis">
          {[
            ['Pending', '24'],
            ['Packed', '31'],
            ['In transit', '47'],
            ['Delivered today', '26'],
          ].map(([a, b]) => (
            <div key={a}>
              <small>{a}</small>
              <strong>{b}</strong>
            </div>
          ))}
        </div>
        <div className="op-filters">
          {['All', 'Pending', 'Packed', 'Shipped', 'Delivered'].map((f, i) => (
            <span key={f} className={i === 0 ? 'on' : ''}>
              {f}
            </span>
          ))}
          <span className="op-f">
            <Filter size={14} />
            Filters
            <ChevronDown size={14} />
          </span>
        </div>
        <div className="op-table">
          <div className="h">
            <span>Order</span>
            <span>Customer</span>
            <span>Items</span>
            <span>Amount</span>
            <span>Status</span>
            <span>Owner</span>
          </div>
          {rows.map((r) => (
            <div key={r[0]}>
              <span>{r[0]}</span>
              <strong>{r[1]}</strong>
              <span>{r[2]}</span>
              <span>{r[3]}</span>
              <span>
                <em className={`op-ps op-ps--${r[4].toLowerCase()}`}>{r[4]}</em>
              </span>
              <span>
                <b>{r[5]}</b>
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

const screens = { hrms: Hrms, helpglow: HelpGlow, invoice: Invoice, bharat: Bharat, manjula: Manjula, tools: Ops }
const titles = {
  hrms: 'HRMS · Dashboard',
  helpglow: 'HelpGlow.in',
  invoice: 'Invoice AI · Review',
  bharat: 'Bharat Filing',
  manjula: 'Manjula Construction',
  tools: 'Operations Console · Orders',
}

/** Browser-framed project screen. `full` adds a bottom edge for standalone use. */
export default function ProjectShot({ id, full = false }) {
  const Screen = screens[id]
  if (!Screen) return null
  return (
    <div className={`frame ${full ? 'frame--full' : ''}`}>
      <div className="frame__bar">
        <i />
        <i />
        <i />
        <span>{titles[id]}</span>
      </div>
      <Scaled width={1280} height={800}>
        <Screen />
      </Scaled>
    </div>
  )
}

/* All site copy lives here so it can be edited without touching layout code. */

export const brand = {
  name: 'PinakXAI',
  tagline: 'Build · Grow · Scale',
  email: 'hello@pinakxai.com',
  phone: '+91 98765 43210',
  location: 'India',
  hours: 'Mon – Sat, 10:00 – 19:00 IST',
}

// Replace '#' with your real profile URLs; links open in a new tab once set.
export const socials = [
  { id: 'linkedin', label: 'LinkedIn', href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'youtube', label: 'YouTube', href: '#' },
  { id: 'x', label: 'X (Twitter)', href: '#' },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/templates', label: 'Templates' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
]

export const clients = [
  { name: 'HelpGlow.in', icon: 'Sparkle' },
  { name: 'Manjula Construction', icon: 'Building2' },
  { name: 'Bharat Filing', icon: 'FileCheck2' },
  { name: 'Hydromaterials', icon: 'Droplets' },
]

export const proofPoints = ['Fixed-price proposals', 'Weekly progress demos', 'You own the code']

/* ---------------------------------------------------------------------- */

export const services = [
  {
    slug: 'web',
    icon: 'Monitor',
    title: 'Website Development',
    summary: 'Fast, search-friendly websites that turn visitors into customers.',
    description:
      'From a focused five-page company site to a full e-commerce store, we design and build websites that load fast, rank well and are easy for your team to update.',
    deliverables: [
      'Custom UI/UX design',
      'Responsive development',
      'CMS or admin panel',
      'On-page SEO & analytics',
      'Hosting, domain & SSL',
      'Speed & accessibility audit',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'WordPress', 'Tailwind CSS'],
    timeline: '2 – 6 weeks',
    from: '₹19,999',
  },
  {
    slug: 'mobile',
    icon: 'Smartphone',
    title: 'Mobile App Development',
    summary: 'Android and iOS apps people keep coming back to.',
    description:
      'Cross-platform apps with native performance — from an MVP that validates an idea to production apps with payments, notifications and offline support.',
    deliverables: [
      'Product & UX workshops',
      'Android + iOS, one codebase',
      'Push notifications & analytics',
      'Payments & third-party APIs',
      'Play Store & App Store launch',
      'Crash monitoring & updates',
    ],
    stack: ['React Native', 'Expo', 'Flutter', 'Firebase', 'Node.js'],
    timeline: '6 – 12 weeks',
    from: '₹29,999',
  },
  {
    slug: 'ai',
    icon: 'Cpu',
    title: 'AI-Powered Solutions',
    summary: 'Automation and AI tools that take repetitive work off your team.',
    description:
      'We find the manual, repetitive parts of your operations and replace them with dependable AI — document extraction, assistants trained on your data, smart search and workflow automation.',
    deliverables: [
      'Use-case discovery & ROI estimate',
      'Document & invoice extraction',
      'Assistants trained on your data',
      'Workflow & report automation',
      'Dashboards and alerts',
      'Human review where it matters',
    ],
    stack: ['Python', 'FastAPI', 'OCR', 'LLM APIs', 'PostgreSQL'],
    timeline: '3 – 8 weeks',
    from: 'Custom quote',
  },
  {
    slug: 'marketing',
    icon: 'TrendingUp',
    title: 'Digital Marketing',
    summary: 'SEO, ads and content that bring in qualified leads.',
    description:
      'Marketing measured against enquiries and revenue, not vanity metrics — planned around your goals and reported clearly every month.',
    deliverables: [
      'Technical & local SEO',
      'Google & Meta ad campaigns',
      'Content calendar & copywriting',
      'Landing page optimisation',
      'Conversion tracking setup',
      'Monthly performance reports',
    ],
    stack: ['Google Ads', 'Meta Ads', 'GA4', 'Search Console'],
    timeline: 'Monthly',
    from: '₹9,999 / month',
  },
  {
    slug: 'branding',
    icon: 'Palette',
    title: 'Branding & Design',
    summary: 'A clear, consistent identity your customers remember.',
    description:
      'Logo, colour, typography and the guidelines that keep it all consistent — across your website, social media, packaging and print.',
    deliverables: [
      'Brand strategy & positioning',
      'Logo & visual identity',
      'Colour & typography system',
      'Brand guidelines',
      'Social media templates',
      'Stationery & print design',
    ],
    stack: ['Figma', 'Illustrator', 'Photoshop', 'After Effects'],
    timeline: '2 – 4 weeks',
    from: '₹9,999',
  },
  {
    slug: 'support',
    icon: 'Headset',
    title: 'Consultation & Support',
    summary: 'Expert guidance before, during and after launch.',
    description:
      'Not sure what to build or which technology to pick? We help you plan — and once you are live, we keep everything secure, updated and running smoothly.',
    deliverables: [
      'Technology & product roadmaps',
      'Code & architecture reviews',
      'Security & performance audits',
      'Monthly maintenance plans',
      'Priority bug fixes',
      'Uptime monitoring & backups',
    ],
    stack: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'GitHub Actions'],
    timeline: 'Flexible',
    from: '₹4,999 / month',
  },
]

export const process = [
  {
    when: 'Week 1',
    title: 'Discover',
    text: 'We learn your business, users and goals, then agree scope, timeline and a fixed price in writing.',
  },
  {
    when: 'Weeks 1 – 2',
    title: 'Design',
    text: 'Wireframes and high-fidelity designs you review and approve before any code is written.',
  },
  {
    when: 'Weeks 2 – 6',
    title: 'Build',
    text: 'Development in short sprints with a working demo every week — no surprises at the end.',
  },
  {
    when: 'Ongoing',
    title: 'Launch & grow',
    text: 'We deploy, train your team, then monitor, support and keep improving what we shipped.',
  },
]

export const engagement = [
  {
    title: 'Fixed-scope project',
    text: 'Clear deliverables, a fixed price and an agreed timeline. Ideal for websites, apps and defined builds.',
    best: 'New websites, apps, AI tools',
  },
  {
    title: 'Monthly retainer',
    text: 'A reserved block of design, development or marketing time every month, with a monthly report.',
    best: 'Marketing, maintenance, iteration',
  },
  {
    title: 'Dedicated team',
    text: 'A designer and developers working as an extension of your team, on your roadmap.',
    best: 'Long-term products and scale-ups',
  },
]

/* ---------------------------------------------------------------------- */

export const workFilters = ['All', 'Websites', 'Apps', 'AI Solutions']

export const projects = [
  {
    id: 'hrms',
    industry: 'Manufacturing',
    title: 'HRMS Platform',
    kind: 'Web + mobile app',
    category: 'Apps',
    year: '2026',
    platform: 'Web, Android, iOS',
    tint: '#6366f1',
    services: ['Product design', 'Web app', 'Mobile app', 'Reporting'],
    summary:
      'One platform for attendance, leave, payroll and expenses — a web dashboard for admins and a mobile app for employees.',
    challenge:
      'HR and payroll were spread across spreadsheets and messaging apps. Month-end payroll took days, numbers differed between reports, and employees had no simple way to check attendance or apply for leave.',
    solution:
      'We built a single system with role-based access. Employees mark attendance and request leave from their phones; admins run payroll, approve expenses and export statutory reports from the web dashboard. One calculation engine feeds every screen and export, so the numbers always agree.',
    features: [
      'Attendance & leave management',
      'Payroll with PF, ESI, PT & TDS',
      'Expense claims with Excel export',
      'Role-based admin dashboard',
      'Mobile-first employee app',
      'PDF & Excel reports',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'SQLite'],
  },
  {
    id: 'helpglow',
    industry: 'Local services',
    title: 'HelpGlow.in',
    kind: 'Service business website',
    category: 'Websites',
    year: '2025',
    platform: 'Web',
    tint: '#14b8a6',
    services: ['UI/UX design', 'Web development', 'SEO'],
    summary:
      'A fast, conversion-focused website that explains HelpGlow’s services at a glance and makes it easy to get in touch.',
    challenge:
      'HelpGlow needed a professional online presence that built trust quickly and turned visitors into enquiries — with most traffic arriving on mobile.',
    solution:
      'We designed a clean, trust-led layout with clear service pages and prominent calls to action, kept pages light so they load quickly on mobile networks, and set up analytics and on-page SEO from day one.',
    features: [
      'Clear service pages',
      'Mobile-first responsive design',
      'Enquiry forms with notifications',
      'On-page SEO & analytics',
    ],
  },
  {
    id: 'invoice',
    industry: 'Finance operations',
    title: 'Invoice Extractor',
    kind: 'AI document processing',
    category: 'AI Solutions',
    year: '2025',
    platform: 'Web',
    tint: '#a855f7',
    services: ['AI / OCR', 'Web app', 'Integrations'],
    summary:
      'An AI tool that reads invoices — PDFs or phone photos — and turns them into clean, structured data ready for accounting.',
    challenge:
      'Invoices arrived in dozens of layouts, and the team was typing vendors, tax numbers and line items into spreadsheets by hand — slow, repetitive and error-prone.',
    solution:
      'We combined OCR with AI extraction to pull out vendor details, GSTIN, line items and totals, added a review screen for anything the model is unsure about, and made the result exportable in one click.',
    features: [
      'Works with PDFs and photos',
      'Line-item & tax extraction',
      'Confidence scores with review',
      'One-click Excel export',
    ],
    stack: ['Python', 'FastAPI', 'OCR', 'React'],
  },
  {
    id: 'bharat',
    industry: 'Tax & compliance',
    title: 'Bharat Filing',
    kind: 'Tax & compliance brand site',
    category: 'Websites',
    year: '2026',
    platform: 'Web',
    tint: '#f2811b',
    services: ['Brand direction', 'Web design', 'Development'],
    summary:
      'A modern pre-launch website introducing Bharat Filing’s tax, GST and compliance services with a calm, trustworthy voice.',
    challenge:
      'Tax and compliance is a trust business. Before launch, Bharat Filing needed a site that felt credible and approachable — not like another cluttered filing portal.',
    solution:
      'We created a warm, editorial design system built around clear typography and a restrained saffron accent, with a focused services overview and simple ways to get in touch.',
    features: [
      'Distinctive editorial design',
      'Services overview',
      'Fully responsive & accessible',
      'SEO-ready metadata',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'manjula',
    industry: 'Construction',
    title: 'Manjula Construction',
    kind: 'Construction company website',
    category: 'Websites',
    year: '2025',
    platform: 'Web',
    tint: '#eab308',
    services: ['Web design', 'Development', 'Content'],
    summary:
      'A portfolio-led website that showcases completed work and makes it simple for prospective clients to request a quote.',
    challenge:
      'Most new business came through word of mouth, and there was nowhere to send prospects to see the quality of past projects.',
    solution:
      'We built a confident, image-led site organised around services and completed projects, with quote requests one tap away on every page.',
    features: ['Project portfolio', 'Services overview', 'Quote request flow', 'Local SEO'],
  },
  {
    id: 'tools',
    industry: 'Distribution',
    title: 'Operations Console',
    kind: 'Internal web application',
    category: 'Apps',
    year: '2025',
    platform: 'Web',
    tint: '#10b981',
    services: ['Workflow design', 'Web app', 'Automation'],
    summary:
      'Internal dashboards that replace scattered spreadsheets with one reliable view of orders, stock and tasks.',
    challenge:
      'Daily operations ran on shared spreadsheets that were constantly out of date, with no clear owner for each task.',
    solution:
      'We mapped the workflow with the team, then built a focused internal tool with live status, assignments and automated daily summaries.',
    features: ['Live order & stock status', 'Task assignment', 'Automated daily summaries', 'Role-based access'],
  },
]

/* ---------------------------------------------------------------------- */

export const stats = [
  { value: 50, suffix: '+', label: 'Projects delivered' },
  { value: 30, suffix: '+', label: 'Happy clients' },
  { value: 3, suffix: '×', label: 'Average growth' },
  { value: 100, suffix: '%', label: 'Client satisfaction' },
]

export const testimonial = {
  quote:
    'PinakXAI delivered our website and marketing setup faster than we expected. The design, performance and support have been amazing.',
  name: 'Business Owner',
  role: 'HelpGlow.in',
  initials: 'HG',
}

export const homeFaqs = [
  {
    q: 'How long does a typical project take?',
    a: 'A business website usually takes 2–4 weeks and a mobile app 6–12 weeks. You get a detailed timeline with your proposal, before any work begins.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Website packages start at ₹19,999. Every project is quoted at a fixed price after a free discovery call, so the number you approve is the number you pay.',
  },
  {
    q: 'Will I own the website and the code?',
    a: 'Yes. Once the project is paid for, the code, designs and content are yours. We hand over all source files and account access.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Every plan includes post-launch support. We also offer monthly maintenance plans covering updates, backups, security and ongoing improvements.',
  },
  {
    q: 'Can you improve my existing website or app?',
    a: 'Absolutely. We regularly redesign, speed up and extend existing products. We start with a short audit so we know exactly what we are working with.',
  },
]

/* ---------------------------------------------------------------------- */

export const pricing = [
  {
    name: 'Starter',
    blurb: 'For small businesses and startups getting online properly.',
    price: '₹19,999',
    note: 'One-time project fee',
    features: [
      'Website up to 5 pages',
      'Basic design & branding',
      'Mobile responsive',
      'Domain & hosting setup',
      '1 month marketing support',
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    blurb: 'For businesses ready to scale with web, mobile and marketing.',
    price: '₹49,999',
    note: 'One-time project fee',
    popular: true,
    features: [
      'Advanced website up to 10 pages',
      'Custom design & UI/UX',
      'Mobile app (basic)',
      '3 months marketing support',
      'SEO & performance optimisation',
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Enterprise',
    blurb: 'For larger projects with custom requirements.',
    price: 'Custom',
    note: 'Scoped to your requirements',
    features: [
      'Custom website or web app',
      'Mobile app (Android + iOS)',
      'Advanced marketing support',
      'Dedicated project manager',
      'Ongoing maintenance',
    ],
    cta: 'Talk to us',
  },
]

export const addons = [
  { icon: 'FilePlus', name: 'Additional pages', price: '₹1,999 / page' },
  { icon: 'Smartphone', name: 'Mobile app (basic)', price: '₹29,999' },
  { icon: 'Search', name: 'SEO optimisation', price: '₹9,999 / month' },
  { icon: 'PenLine', name: 'Content creation', price: '₹4,999 / month' },
  { icon: 'Gem', name: 'Logo & branding', price: '₹9,999' },
  { icon: 'Wrench', name: 'Maintenance & support', price: '₹4,999 / month' },
]

export const included = [
  { icon: 'FileText', title: 'Written proposal', text: 'Scope, timeline and price agreed before work starts.' },
  { icon: 'Presentation', title: 'Weekly demos', text: 'See real progress every week and give feedback early.' },
  { icon: 'KeyRound', title: 'Full ownership', text: 'Source code, designs and accounts handed over to you.' },
  { icon: 'LifeBuoy', title: 'Launch support', text: 'Post-launch fixes and training for your team.' },
]

export const pricingFaqs = [
  {
    q: 'Are these one-time or recurring prices?',
    a: 'Plan prices are one-time project fees. Hosting, domains and optional monthly services such as SEO or maintenance are listed separately in your proposal, so there are no surprises.',
  },
  {
    q: 'What if my project does not fit a plan?',
    a: 'Most projects are tailored. The plans are a starting point — after a short call we send a fixed quote for exactly what you need.',
  },
  {
    q: 'Do prices include GST?',
    a: 'Prices are shown before GST, which is added at the applicable rate on the invoice.',
  },
  {
    q: 'Can I upgrade later?',
    a: 'Yes. You can start with Starter and add pages, an app or marketing support whenever you are ready.',
  },
]

/* ---------------------------------------------------------------------- */

export const principles = [
  {
    title: 'Clarity over jargon',
    text: 'We explain options in plain language, put scope and price in writing, and never hide costs.',
  },
  {
    title: 'Craft in the details',
    text: 'Fast load times, accessible design and clean, documented code are not extras — they are how we work.',
  },
  {
    title: 'Measured by outcomes',
    text: 'We care about enquiries, sales and hours saved, not just whether something looks good in a screenshot.',
  },
  {
    title: 'Partners after launch',
    text: 'Most clients keep working with us after go-live, so we plan for the long term from the first call.',
  },
]

export const commitments = [
  'Scope and price agreed in writing',
  'A working demo every week',
  'You own everything we build',
  'Support that continues after launch',
]

/* ---------------------------------------------------------------------- */

export const blogFilters = ['All', 'Web Development', 'Mobile Apps', 'AI & Automation', 'Digital Marketing', 'Branding']

export const posts = [
  {
    slug: 'website-that-grows-your-business',
    title: 'What a modern website should do for your business in 2026',
    excerpt:
      'A website is no longer a digital brochure. Here is what separates sites that bring in customers from sites that just exist.',
    category: 'Web Development',
    date: '6 Oct 2026',
    read: 5,
    art: 'web',
    body: [
      {
        t: 'lede',
        v: 'For most small and growing businesses, the website is the first conversation a customer has with them. Yet many sites are still built like brochures: nice to look at, but with no clear job to do.',
      },
      { t: 'h2', v: 'Start with one job' },
      {
        t: 'p',
        v: 'Before choosing colours or templates, decide what the site must achieve. For a clinic it may be booked appointments; for a manufacturer, qualified enquiries; for a café, table reservations. Every page should move a visitor closer to that action.',
      },
      { t: 'h2', v: 'Speed is a feature' },
      {
        t: 'p',
        v: 'Most visitors arrive on a phone, often on a patchy connection. Pages that take more than a few seconds to load lose a large share of visitors before they see anything. Optimised images, lean code and good hosting matter more than another animation.',
      },
      { t: 'h2', v: 'Make it easy to act' },
      {
        t: 'ul',
        v: [
          'Put the primary call to action in the header and at the end of every page',
          'Offer more than one way to reach you — form, phone and WhatsApp',
          'Keep forms short; ask only for what you need to reply',
        ],
      },
      { t: 'h2', v: 'Measure, then improve' },
      {
        t: 'p',
        v: 'Set up analytics and conversion tracking on day one. After a month you will know which pages bring enquiries and which ones lose people — and that is where the next round of improvements should go.',
      },
    ],
  },
  {
    slug: 'features-modern-mobile-app',
    title: 'The features that make people keep a mobile app',
    excerpt:
      'Most apps are deleted within days of being installed. The ones that stay share a few habits worth copying.',
    category: 'Mobile Apps',
    date: '22 Sep 2026',
    read: 6,
    art: 'mobile',
    body: [
      {
        t: 'lede',
        v: 'Getting someone to install your app is the easy part. Keeping it on their home screen is where most apps fail.',
      },
      { t: 'h2', v: 'A first minute that delivers value' },
      {
        t: 'p',
        v: 'Long sign-up flows and permission prompts on launch are the fastest route to an uninstall. Let people see what the app does before asking for anything, and request permissions only when they are needed.',
      },
      { t: 'h2', v: 'Notifications that respect attention' },
      {
        t: 'p',
        v: 'Push notifications are powerful when they are timely and personal — an order update, an approved leave request — and harmful when they are marketing noise. Give users control over what they receive.',
      },
      { t: 'h2', v: 'Works when the network does not' },
      {
        t: 'p',
        v: 'Caching key data and queuing actions offline makes an app feel reliable on trains, in basements and in smaller towns. It is one of the most underrated quality signals.',
      },
      {
        t: 'ul',
        v: [
          'Fast start-up and smooth scrolling',
          'Clear empty states and helpful error messages',
          'Crash reporting so issues are fixed before reviews mention them',
        ],
      },
    ],
  },
  {
    slug: 'ai-business-automation',
    title: 'How AI is quietly changing everyday business operations',
    excerpt:
      'The most valuable AI projects are rarely flashy. They remove the repetitive work your team does every single day.',
    category: 'AI & Automation',
    date: '9 Sep 2026',
    read: 7,
    art: 'ai',
    body: [
      {
        t: 'lede',
        v: 'Ask a team where their time goes and the answer is often the same: copying data from one place to another. That is exactly where AI is most useful today.',
      },
      { t: 'h2', v: 'Start with documents' },
      {
        t: 'p',
        v: 'Invoices, purchase orders, forms and receipts arrive in endless formats. Modern OCR combined with AI extraction can read them, pull out the fields you need and send them straight into your spreadsheets or accounting software.',
      },
      { t: 'h2', v: 'Keep a human in the loop' },
      {
        t: 'p',
        v: 'The best systems do not pretend to be perfect. They show a confidence score for each field and ask a person to review only the uncertain ones. You get most of the time savings with none of the risk.',
      },
      { t: 'h2', v: 'Good first projects' },
      {
        t: 'ul',
        v: [
          'Invoice and receipt data entry',
          'Answering common customer questions from your own documents',
          'Weekly reports compiled automatically from several sources',
          'Sorting and routing incoming emails and enquiries',
        ],
      },
      {
        t: 'p',
        v: 'Pick one repetitive task, measure how long it takes today, automate it, and measure again. That number makes the case for the next project.',
      },
    ],
  },
  {
    slug: 'seo-for-small-businesses',
    title: 'A practical SEO checklist for small businesses',
    excerpt: 'You do not need a huge budget to be found on Google. You need the basics done properly and consistently.',
    category: 'Digital Marketing',
    date: '26 Aug 2026',
    read: 5,
    art: 'growth',
    body: [
      {
        t: 'lede',
        v: 'Search engine optimisation sounds technical, but for most local and small businesses it comes down to a handful of fundamentals.',
      },
      { t: 'h2', v: 'Get the foundations right' },
      {
        t: 'ul',
        v: [
          'A fast, mobile-friendly website',
          'One clear page for each service you offer',
          'Unique page titles and descriptions',
          'Your site connected to Google Search Console',
        ],
      },
      { t: 'h2', v: 'Own your local presence' },
      {
        t: 'p',
        v: 'A complete, verified Google Business Profile with accurate hours, photos and categories is often the single biggest win for local businesses. Ask happy customers for reviews and reply to every one.',
      },
      { t: 'h2', v: 'Write for real questions' },
      {
        t: 'p',
        v: 'Think about what customers ask you on the phone, and answer those questions on your site. Useful, specific pages earn rankings far more reliably than generic blog posts.',
      },
      {
        t: 'p',
        v: 'SEO compounds over time. Small, consistent improvements each month beat a one-off burst of activity.',
      },
    ],
  },
  {
    slug: 'choosing-the-right-tech-stack',
    title: 'Choosing the right tech stack without the jargon',
    excerpt:
      'React or WordPress? Native or cross-platform? A plain-language guide to the decisions that actually matter.',
    category: 'Web Development',
    date: '12 Aug 2026',
    read: 6,
    art: 'stack',
    body: [
      {
        t: 'lede',
        v: 'Technology choices are business decisions. The right stack is the one that fits your budget, your team and how your product will grow.',
      },
      { t: 'h2', v: 'Who will update it?' },
      {
        t: 'p',
        v: 'If your team will edit content every week, a good content management system matters more than any framework. If content rarely changes, a lightweight custom build can be faster and cheaper to run.',
      },
      { t: 'h2', v: 'Web, app or both?' },
      {
        t: 'p',
        v: 'Many products can start as a fast, mobile-friendly web app and add native apps once usage proves the need. Cross-platform frameworks now make it practical to ship Android and iOS from a single codebase.',
      },
      { t: 'h2', v: 'Avoid lock-in' },
      {
        t: 'ul',
        v: [
          'Make sure you own the code and hosting accounts',
          'Prefer widely used, well-documented technologies',
          'Ask how easy it will be to hire for the stack later',
        ],
      },
    ],
  },
  {
    slug: 'importance-of-branding',
    title: 'Why consistent branding builds trust faster',
    excerpt:
      'Customers decide whether to trust a business in seconds. A consistent brand quietly does a lot of that work for you.',
    category: 'Branding',
    date: '29 Jul 2026',
    read: 4,
    art: 'brand',
    body: [
      {
        t: 'lede',
        v: 'A brand is not just a logo. It is the sum of every impression — your website, your invoices, your social posts and how you answer the phone.',
      },
      { t: 'h2', v: 'Consistency signals reliability' },
      {
        t: 'p',
        v: 'When colours, typography and tone stay the same across every touchpoint, customers subconsciously read it as a sign that the business is organised and dependable.',
      },
      { t: 'h2', v: 'What a simple brand system includes' },
      {
        t: 'ul',
        v: [
          'A logo with versions for light and dark backgrounds',
          'A small, defined colour palette',
          'Two typefaces at most',
          'A few rules for photography and tone of voice',
        ],
      },
      {
        t: 'p',
        v: 'Write it down in a short guidelines document and share it with everyone who creates anything for the business. It pays for itself the first time someone designs a banner without asking.',
      },
    ],
  },
]

export const projectTypes = ['Website', 'Mobile app', 'AI solution', 'Digital marketing', 'Branding', 'Something else']
export const budgets = ['Under ₹25,000', '₹25,000 – ₹75,000', '₹75,000 – ₹2,00,000', 'Above ₹2,00,000', 'Not sure yet']

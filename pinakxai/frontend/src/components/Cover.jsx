/** Editorial line-art covers for articles. One consistent visual language, no stock photos. */
const G = 'var(--cv-gold)'
const L = 'var(--cv-line)'

const art = {
  web: (
    <>
      <rect x="250" y="70" width="300" height="200" rx="10" stroke={L} />
      <line x1="250" y1="94" x2="550" y2="94" stroke={L} />
      <circle cx="266" cy="82" r="3.5" fill={L} />
      <circle cx="279" cy="82" r="3.5" fill={L} />
      <rect x="276" y="118" width="140" height="12" rx="3" fill={G} opacity=".9" />
      <rect x="276" y="140" width="200" height="7" rx="3" fill={L} />
      <rect x="276" y="154" width="170" height="7" rx="3" fill={L} />
      <rect x="276" y="178" width="70" height="22" rx="11" stroke={G} />
      <rect x="440" y="118" width="86" height="126" rx="6" stroke={G} strokeDasharray="4 4" />
      <path d="M455 220 480 190 500 208 512 196" stroke={G} />
    </>
  ),
  mobile: (
    <>
      <rect x="330" y="50" width="140" height="240" rx="22" stroke={L} />
      <rect x="380" y="62" width="40" height="6" rx="3" fill={L} />
      <rect x="348" y="92" width="104" height="58" rx="10" fill={G} opacity=".85" />
      <rect x="348" y="162" width="104" height="10" rx="4" fill={L} />
      <rect x="348" y="180" width="70" height="10" rx="4" fill={L} />
      <rect x="348" y="208" width="48" height="48" rx="10" stroke={G} />
      <rect x="404" y="208" width="48" height="48" rx="10" stroke={L} />
      <rect x="500" y="88" width="120" height="44" rx="12" stroke={G} />
      <circle cx="522" cy="110" r="8" fill={G} />
      <rect x="538" y="103" width="66" height="6" rx="3" fill={L} />
      <rect x="538" y="114" width="44" height="6" rx="3" fill={L} />
    </>
  ),
  ai: (
    <>
      {[
        [300, 110],
        [300, 170],
        [300, 230],
        [400, 80],
        [400, 140],
        [400, 200],
        [400, 260],
        [500, 140],
        [500, 200],
      ].map(([x, y], i, a) => (
        <g key={i}>
          {a
            .filter(([bx]) => bx === x + 100)
            .map(([bx, by], j) => (
              <line key={j} x1={x} y1={y} x2={bx} y2={by} stroke={L} />
            ))}
        </g>
      ))}
      {[
        [300, 110],
        [300, 170],
        [300, 230],
        [400, 80],
        [400, 140],
        [400, 200],
        [400, 260],
        [500, 140],
        [500, 200],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 4 || i === 7 ? 9 : 6}
          fill={i === 4 || i === 7 ? G : 'var(--surface)'}
          stroke={i === 4 || i === 7 ? G : 'rgb(var(--fg-rgb) / 0.4)'}
        />
      ))}
      <line x1="400" y1="140" x2="500" y2="140" stroke={G} strokeWidth="1.6" />
      <line x1="300" y1="170" x2="400" y2="140" stroke={G} strokeWidth="1.6" />
    </>
  ),
  growth: (
    <>
      <line x1="240" y1="280" x2="560" y2="280" stroke={L} />
      {[60, 90, 80, 120, 150, 190].map((h, i) => (
        <rect
          key={i}
          x={262 + i * 50}
          y={280 - h}
          width="28"
          height={h}
          rx="3"
          fill={i === 5 ? G : 'none'}
          stroke={i === 5 ? 'none' : L}
        />
      ))}
      <path d="M276 210 326 186 376 196 426 150 476 124 526 80" stroke={G} strokeWidth="2" fill="none" />
      <circle cx="526" cy="80" r="6" fill={G} />
    </>
  ),
  stack: (
    <>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M400 ${90 + i * 52} 520 ${140 + i * 52} 400 ${190 + i * 52} 280 ${140 + i * 52}Z`}
          stroke={i === 0 ? G : L}
          fill={i === 0 ? 'rgb(var(--gold-rgb) / 0.12)' : 'none'}
        />
      ))}
    </>
  ),
  brand: (
    <>
      <text x="290" y="230" fontFamily="'Instrument Serif', Georgia, serif" fontSize="150" fill="none" stroke={G}>
        Aa
      </text>
      <circle cx="510" cy="120" r="26" fill={G} />
      <circle cx="510" cy="190" r="26" stroke={L} />
      <circle cx="510" cy="260" r="26" fill="rgb(var(--fg-rgb) / 0.14)" />
    </>
  ),
}

export default function Cover({ kind = 'web', label }) {
  return (
    <div className="cover" role="img" aria-label={label || 'Article illustration'}>
      <svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <radialGradient id={`cg-${kind}`} cx="50%" cy="10%" r="80%">
            <stop offset="0" stopColor="var(--gold)" stopOpacity=".16" />
            <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
          <pattern id={`cp-${kind}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" stroke="rgb(var(--fg-rgb) / 0.04)" />
          </pattern>
        </defs>
        <rect width="800" height="340" fill="var(--surface)" />
        <rect width="800" height="340" fill={`url(#cp-${kind})`} />
        <rect width="800" height="340" fill={`url(#cg-${kind})`} />
        {art[kind] || art.web}
      </svg>
    </div>
  )
}

const SKILLS = [
  { name: 'Figma', pct: 95 },
  { name: 'SAP BTP', pct: 90 },
  { name: 'SAP UI5', pct: 90 },
  { name: 'UX Research', pct: 85 },
  { name: 'Design Systems', pct: 90 },
  { name: 'Prototipos interactivos', pct: 88 },
  { name: 'HTML / CSS', pct: 70 },
]

const LINKS = [
  { name: 'LinkedIn ↗', url: 'https://www.linkedin.com/in/qnz/' },
  { name: 'Behance ↗', url: 'https://www.behance.net/qnz' }
]

export default function About() {
  return (
    <section id="about" className="bg-[#f8f8fc] px-12 py-24">
      <div className="flex items-end justify-between mb-14 pb-6 border-b border-[#e2e2ee]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#5563c8] mb-2">Sobre mí</p>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-[clamp(2rem,3.5vw,3rem)] text-[#121a52] tracking-tight leading-none"
          >
            Diseño con propósito
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20 items-start">

        {/* Text */}
        <div>
          <h3
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-[1.875rem] text-[#121a52] leading-snug tracking-tight mb-6"
          >
            Hola, soy Camila. Diseño experiencias digitales desde hace +4 años.
          </h3>
          <p className="text-[#5a5a7a] text-[15px] leading-[1.8] mb-5">
            Me especializo en diseño de interfaces para productos SaaS y en la comunicación visual.
            Mi trabajo combina investigación del negocio, diseños iterativos y estrecha
            colaboración con equipos de desarrollo y equipos funcionales.
          </p>
          <p className="text-[#5a5a7a] text-[15px] leading-[1.8] mb-5">
            Creo que el buen diseño es invisible: simplemente funciona.
          </p>
          <p className="text-[#5a5a7a] text-[15px] leading-[1.8] mb-8">
            Actualmente estoy en Buenos Aires, disponible para proyectos remotos.
          </p>
          <div className="flex gap-6 flex-wrap">
            {SKILLS.map(({ name, url }, i) => (
              <a
                key={name}
                href={url}
                className="text-[13px] text-[#3e4faa] no-underline border-b border-[#b0b8ee] pb-0.5 hover:text-[#1e2a6e] hover:border-[#3e4faa] transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Skills panel */}
        <div className="bg-white border border-[#e2e2ee] rounded-2xl overflow-hidden">
          <div className="px-8 py-5 border-b border-[#e2e2ee] text-[11px] font-medium uppercase tracking-[0.08em] text-[#9898bb]">
            Herramientas &amp; habilidades
          </div>
          {SKILLS.map(({ name, pct }, i) => (
            <div
              key={name}
              className={`px-8 py-4 flex justify-between items-center ${i < SKILLS.length - 1 ? 'border-b border-[#f0f0f8]' : ''}`}
            >
              <span className="text-[15px] text-[#1e1e30]">{name}</span>
              <div className="w-28 h-1 bg-[#f0f0f8] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#7680d8]"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

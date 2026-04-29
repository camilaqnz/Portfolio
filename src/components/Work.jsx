import { useRef } from 'react'

const PROJECTS = [
  {
    num: '01',
    title: 'Dashboard App',
    tags: 'Product Design · Design System',
    year: '2025',
    bg: 'bg-[#eef0fb]',
    border: 'border-[#b0b8ee]',
  },
  {
    num: '02',
    title: 'Mobile App',
    tags: 'UX Research · Prototipado',
    year: '2025',
    bg: 'bg-[#f0eef8]',
    border: 'border-[#dddaee]',
  },
  {
    num: '03',
    title: 'Brand Identity',
    tags: 'Branding · Web Design',
    year: '2024',
    bg: 'bg-[#eef4f8]',
    border: 'border-[#d0e4f0]',
  },
  {
    num: '04',
    title: 'E-commerce Platform',
    tags: 'UI Design · Usability',
    year: '2024',
    bg: 'bg-[#f5f0f8]',
    border: 'border-[#e0d0ee]',
  },
]

function ProjectCard({ num, title, tags, year, bg, border }) {
  return (
    <a
      href="#"
      className="group relative bg-white flex flex-col gap-4 p-10 no-underline hover:bg-[#f8f8fc] transition-colors"
      style={{ color: 'inherit' }}
    >
      <span className="text-[11px] font-medium uppercase tracking-widest text-[#9898bb]">{num}</span>

      <div className={`w-full h-48 rounded-xl ${bg} border ${border} flex items-center justify-center`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 opacity-30">
          <rect x="4" y="8" width="40" height="28" rx="3" stroke="#7680d8" strokeWidth="2" />
          <line x1="4" y1="16" x2="44" y2="16" stroke="#7680d8" strokeWidth="2" />
          <rect x="8" y="20" width="12" height="12" rx="2" fill="#b0b8ee" />
          <line x1="24" y1="22" x2="40" y2="22" stroke="#b0b8ee" strokeWidth="2" />
          <line x1="24" y1="27" x2="36" y2="27" stroke="#b0b8ee" strokeWidth="2" />
        </svg>
      </div>

      <div className="flex justify-between items-end mt-auto">
        <div>
          <p
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-[1.375rem] text-[#121a52] leading-tight tracking-tight"
          >
            {title}
          </p>
          <p className="text-sm text-[#9898bb] mt-1">{tags}</p>
        </div>
        <span className="text-sm text-[#9898bb]">{year}</span>
      </div>

      {/* Arrow badge */}
      <div className="absolute top-7 right-7 w-8 h-8 rounded-full bg-[#2c3a8a] text-white flex items-center justify-center text-sm opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all">
        ↗
      </div>
    </a>
  )
}

export default function Work() {
  return (
    <section id="work" className="bg-white px-12 py-24">
      <div className="flex-col mb-14 pb-6 border-b border-[#e2e2ee]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#5563c8] mb-2">Trabajo</p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[clamp(2rem,3.5vw,3rem)] text-[#121a52] tracking-tight leading-none"
          >
            Proyectos seleccionados
          </h2>
        </div>
        <p className="text-[15px] text-[#5a5a7a] max-xs leading-relaxed text-left mt-6">
          Trabajo en productos digitales con foco en la experiencia del usuario y el crecimiento del negocio.
        </p>
      </div>

      <div
        className="grid grid-cols-2 gap-px bg-[#e2e2ee] border border-[#e2e2ee] overflow-hidden"
        style={{ borderRadius: '16px' }}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.num} {...p} />
        ))}
      </div>
    </section>
  )
}

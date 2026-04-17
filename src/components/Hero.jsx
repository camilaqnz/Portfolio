export default function Hero() {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-2 pt-20">

      {/* Left */}
      <div className="flex flex-col justify-center px-12 py-20">
        <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-[#3e4faa] bg-[#eef0fb] border border-[#b0b8ee] px-4 py-1.5 rounded-full w-fit mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5563c8] shrink-0" />
          Disponible para proyectos
        </span>

        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-[clamp(3rem,5.5vw,5rem)] leading-[1.05] text-[#121a52] tracking-tight mb-7"
        >
          UX/UI Designer<br />
          <em className="text-[#5563c8]">&amp; Product</em><br />
          Thinker.
        </h1>

        <p className="text-[#5a5a7a] text-base leading-[1.8] max-w-[440px] mb-10">
          Diseño interfaces digitales que combinan estética y funcionalidad.
          Me enfoco en la experiencia del usuario, los sistemas de diseño
          y en resolver problemas reales con soluciones claras.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#work"
            className="bg-[#2c3a8a] text-white text-sm font-medium px-8 py-3 rounded-full no-underline hover:bg-[#1e2a6e] hover:-translate-y-px transition-all"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="text-[#2c3a8a] text-sm px-6 py-3 rounded-full no-underline border border-[#b0b8ee] hover:border-[#7680d8] hover:bg-[#eef0fb] transition-all"
          >
            Hablemos →
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#d5d9f5] to-[#b0b8ee]">
        <div className="absolute w-96 h-96 rounded-full bg-white/25 -top-24 -right-24" />
        <div className="absolute w-60 h-60 rounded-full bg-white/15 -bottom-14 -left-10" />

        <div
          className="relative z-10 w-[340px] h-[420px] bg-white flex flex-col items-center justify-center gap-4 overflow-hidden"
          style={{
            borderRadius: '200px 200px 160px 160px',
            boxShadow: '0 40px 80px rgba(30,42,110,0.2)',
          }}
        >
          <div className="w-20 h-20 rounded-full bg-[#b0b8ee] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="#3e4faa" className="w-10 h-10">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <p className="text-[11px] tracking-wider text-[#9898bb]">Tu foto aquí</p>
        </div>
      </div>

    </section>
  )
}

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-[#121a52] text-white text-center px-12 py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#7680d8] mb-5">
          Contacto
        </p>
        <h2
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-5"
        >
          ¿Trabajamos{' '}
          <em className="text-[#7680d8]">juntos?</em>
        </h2>
        <p className="text-white/55 text-base max-w-sm mx-auto leading-relaxed mb-12">
          Estoy abierto a nuevos proyectos, colaboraciones y oportunidades freelance.
          Escribime y hablemos.
        </p>
        <a
          href="mailto:qnzdiseno@gmail.com"
          style={{ fontFamily: 'var(--font-display)' }}
          className="inline-block text-2xl text-white no-underline border-b border-white/30 pb-1 mb-12 hover:border-[#7680d8] transition-colors"
        >
          qnzdiseno@gmail.com
        </a>
        <div className="flex gap-4 justify-center flex-wrap">
          {['LinkedIn', 'Behance', 'Dribbble', 'Instagram'].map((s) => (
            <a
              key={s}
              href="#"
              className="text-[13px] text-white/45 no-underline border border-white/15 px-5 py-2 rounded-full hover:text-white hover:border-white/35 transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-[#121a52] border-t border-white/8 px-12 py-6 flex justify-between items-center text-[13px] text-white/30">
        <span>© 2026 Camila Quiñonez. Todos los derechos reservados.</span>
        <a href="#hero" className="text-white/40 no-underline hover:text-white/70 transition-colors">
          Volver arriba ↑
        </a>
      </footer>
    </>
  )
}

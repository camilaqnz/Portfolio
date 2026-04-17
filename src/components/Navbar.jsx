export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-[#f8f8fc]/85 backdrop-blur-md border-b border-[#e2e2ee]">
      <a
        href="#hero"
        style={{ fontFamily: 'var(--font-display)' }}
        className="text-xl text-[#1e2a6e] tracking-tight no-underline"
      >
        Camila Quiñonez ®
      </a>
      <ul className="flex items-center gap-10 list-none">
        <li>
          <a href="#work" className="text-sm text-[#5a5a7a] no-underline hover:text-[#3e4faa] transition-colors">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#about" className="text-sm text-[#5a5a7a] no-underline hover:text-[#3e4faa] transition-colors">
            Sobre mí
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-[13px] font-medium text-white bg-[#2c3a8a] px-5 py-2 rounded-full no-underline hover:bg-[#1e2a6e] transition-colors"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}

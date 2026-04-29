export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-3 bg-[#000]/85 backdrop-blur-md p-4">
      <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      <ul className="flex items-center gap-10 list-none">
        <li>
          <a href="#work" className="text-sm text-[#fff] no-underline hover:text-[#3e4faa] transition-colors">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#about" className="text-sm text-[#fff] no-underline hover:text-[#3e4faa] transition-colors">
            Sobre mí
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-[13px] font-medium text-[#2c3a8a] bg-[#fff] px-5 py-2 rounded-full no-underline hover:bg-[#1e2a6e] hover:text-white transition-colors"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}

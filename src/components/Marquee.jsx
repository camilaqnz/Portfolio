const CLIENTS = [
  'Empresa A',
  'Empresa B',
  'Empresa C',
  'Empresa D',
  'Empresa E',
  'Empresa F',
]

function ClientGroup({ hidden = false }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex items-center gap-12 pr-12 shrink-0"
      style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#9898bb' }}
    >
      {CLIENTS.map((name, i) => (
        <span key={i} className="flex items-center gap-12">
          <span className="whitespace-nowrap hover:text-[#5563c8] transition-colors cursor-default">
            {name}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e2e2ee] shrink-0" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="bg-white border-t border-b border-[#e2e2ee] py-7 overflow-hidden">
      <p className="text-center text-[11px] font-medium uppercase tracking-[0.1em] text-[#9898bb] mb-5">
        Clientes seleccionados
      </p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          <ClientGroup />
          <ClientGroup hidden />
        </div>
      </div>
    </div>
  )
}

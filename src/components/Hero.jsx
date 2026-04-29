const BLOBS = [
  { w: '65%', h: '65%', color: 'rgba(118,128,216,0.6)',  top: '-10%', left: '-15%',       anim: 'blob1', dur: '9s'  },
  { w: '60%', h: '60%', color: 'rgba(211, 215, 245, 0.65)',   top: '15%',  right: '-10%',      anim: 'blob2', dur: '11s' },
  { w: '55%', h: '55%', color: 'rgba(150,100,230,0.5)',  bottom: '-5%', left: '15%',      anim: 'blob3', dur: '13s' },
  { w: '50%', h: '50%', color: 'rgba(80,130,220,0.45)',  top: '-5%',  right: '0%',        anim: 'blob4', dur: '10s' },
  { w: '45%', h: '45%', color: 'rgba(170,80,220,0.35)',  top: '35%',  left: '30%',        anim: 'blob5', dur: '14s' },
]

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#121a52' }}>
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          25%      { transform: translate(8%,12%) scale(1.1); }
          50%      { transform: translate(-5%,6%) scale(0.92); }
          75%      { transform: translate(10%,-8%) scale(1.05); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          20%      { transform: translate(-10%,5%) scale(1.08); }
          55%      { transform: translate(6%,-10%) scale(0.95); }
          80%      { transform: translate(-4%,8%) scale(1.12); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          30%      { transform: translate(7%,-6%) scale(0.9); }
          60%      { transform: translate(-8%,10%) scale(1.1); }
          85%      { transform: translate(4%,4%) scale(1.03); }
        }
        @keyframes blob4 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-6%,9%) scale(1.15); }
          70%      { transform: translate(9%,-4%) scale(0.88); }
        }
        @keyframes blob5 {
          0%,100% { transform: translate(0,0) scale(1); }
          35%      { transform: translate(5%,7%) scale(1.07); }
          65%      { transform: translate(-9%,-5%) scale(0.94); }
          90%      { transform: translate(3%,10%) scale(1.09); }
        }
      `}</style>

      {BLOBS.map(({ w, h, color, anim, dur, ...pos }) => (
        <div
          key={anim}
          style={{
            position: 'absolute',
            width: w, height: h,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animation: `${anim} ${dur} ease-in-out infinite`,
            ...pos,
          }}
        />
      ))}

      {/* brillo central sutil */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(255,255,255,0.05) 0%, transparent 70%)',
      }} />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen grid grid-cols-2 pt-20">

      <AuroraBackground />

      {/* Left */}
      <div className="relative z-10 flex flex-col justify-center px-16 py-8">
        <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-[#b0b8ee] bg-white/10 border border-white/20 px-4 py-1.5 rounded-full w-fit mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7680d8] shrink-0" />
          Disponible para proyectos
        </span>

        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-[clamp(3rem,5.5vw,5rem)] leading-[1.05] text-white tracking-tight mb-10"
        >
          UX/UI Designer<br />
          <em className="text-[#7680d8]" style={{ fontFamily: "'Playfair Display', serif" }}>&amp; Product</em><br />
          Thinker
        </h1>

        <p className="text-white/60 text-sm leading-[1.85] max-w-[420px] mb-8">
         Diseño interfaces digitales que combinan estética y funcionalidad.
          Me enfoco en la experiencia del usuario, el sistema de diseño
          y en resolver problemas reales del negocio con soluciones claras.
        </p>

        <div className="flex gap-4 flex-wrap mb-8">
          <a href="#work" className="bg-white text-[#1e2a6e] text-sm font-medium px-8 py-3.5 rounded-full no-underline hover:bg-[#eef0fb] hover:-translate-y-px transition-all">
            Ver proyectos
          </a>
          <a href="#contact" className="text-white text-sm px-6 py-3.5 rounded-full no-underline border border-white/25 hover:border-white/50 hover:bg-white/10 transition-all">
            Hablemos →
          </a>
        </div>
      </div>
    </section>
  )
}

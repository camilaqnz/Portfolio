function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#1e2a6e' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, #2c3a8a 0%, #121a52 100%)',
      }} />
      <div style={{
        position: 'absolute', width: '70%', height: '70%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(118,128,216,0.55) 0%, transparent 70%)',
        top: '-10%', left: '-15%',
        animation: 'blob1 9s ease-in-out infinite', filter: 'blur(32px)',
      }} />
      <div style={{
        position: 'absolute', width: '65%', height: '65%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(85,99,200,0.6) 0%, transparent 70%)',
        top: '20%', right: '-10%',
        animation: 'blob2 11s ease-in-out infinite', filter: 'blur(28px)',
      }} />
      <div style={{
        position: 'absolute', width: '60%', height: '60%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(150,120,220,0.45) 0%, transparent 70%)',
        bottom: '-5%', left: '20%',
        animation: 'blob3 13s ease-in-out infinite', filter: 'blur(36px)',
      }} />
      <div style={{
        position: 'absolute', width: '50%', height: '50%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,140,210,0.4) 0%, transparent 70%)',
        top: '-5%', right: '5%',
        animation: 'blob4 10s ease-in-out infinite', filter: 'blur(30px)',
      }} />
      <div style={{
        position: 'absolute', width: '55%', height: '55%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(62,79,170,0.5) 0%, transparent 70%)',
        top: '30%', left: '25%',
        animation: 'blob5 14s ease-in-out infinite', filter: 'blur(24px)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(255,255,255,0.06) 0%, transparent 70%)',
      }} />
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(6%,8%) scale(1.08); }
          66%      { transform: translate(-5%,4%) scale(0.95); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-8%,5%) scale(1.05); }
          66%      { transform: translate(4%,-6%) scale(1.1); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(5%,-7%) scale(0.95); }
          66%      { transform: translate(-4%,6%) scale(1.07); }
        }
        @keyframes blob4 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(-6%,8%) scale(1.1); }
        }
        @keyframes blob5 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(7%,-5%) scale(1.06); }
          66%      { transform: translate(-3%,7%) scale(0.94); }
        }
      `}</style>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen grid grid-cols-2 pt-20">

      <AuroraBackground />

      {/* Left */}
      <div className="relative z-10 flex flex-col justify-center px-16 py-36">
        <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-[#b0b8ee] bg-white/10 border border-white/20 px-4 py-1.5 rounded-full w-fit mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7680d8] shrink-0" />
          Disponible para proyectos
        </span>

        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-[clamp(3rem,5.5vw,5rem)] leading-[1.05] text-white tracking-tight mb-10"
        >
          UX/UI Designer<br />
          <em className="text-[#7680d8]">&amp; Product</em><br />
          Thinker.
        </h1>

        <p className="text-white/60 text-base leading-[1.85] max-w-[420px] mb-14">
          Diseño interfaces digitales que combinan estética y funcionalidad.
          Me enfoco en la experiencia del usuario, el sistema de diseño
          y en resolver problemas reales del negocio con soluciones claras.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="#work" className="bg-white text-[#1e2a6e] text-sm font-medium px-8 py-3.5 rounded-full no-underline hover:bg-[#eef0fb] hover:-translate-y-px transition-all">
            Ver proyectos
          </a>
          <a href="#contact" className="text-white text-sm px-6 py-3.5 rounded-full no-underline border border-white/25 hover:border-white/50 hover:bg-white/10 transition-all">
            Hablemos →
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="relative z-10 flex items-center justify-center py-36">
        <div
          className="flex flex-col items-center justify-center gap-4 bg-white/10 border border-white/20 backdrop-blur-sm"
          style={{
            width: '340px', height: '420px',
            borderRadius: '200px 200px 160px 160px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.25)',
          }}
        >
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" className="w-10 h-10">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <p className="text-[11px] tracking-wider text-white/40">Tu foto aquí</p>
        </div>
      </div>

    </section>
  )
}

import { useEffect } from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Marquee  from './components/Marquee'
import Work     from './components/Work'
import About    from './components/About'
import Contact  from './components/Contact'

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const style = document.createElement('style')
    style.textContent = `
      [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
      [data-reveal].visible { opacity: 1; transform: translateY(0); }
    `
    document.head.appendChild(style)

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80)
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <div data-reveal><Work /></div>
      <div data-reveal><About /></div>
      <Contact />
    </>
  )
}

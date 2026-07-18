import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    // Default to light mode — only honor 'light' preference from storage
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') return 'dark'
    return 'light'
  })

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  // Cursor glow
  useEffect(() => {
    if(window.innerWidth < 768) return
    const el = document.getElementById('cursor-glow')
    let mx=0, my=0, gx=0, gy=0
    const onMove = e => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)
    let raf
    const animate = () => {
      gx += (mx - gx) * 0.08
      gy += (my - gy) * 0.08
      if(el){ el.style.left = gx+'px'; el.style.top = gy+'px' }
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="cursor-glow" id="cursor-glow"/>
      <Navbar theme={theme} toggleTheme={() => setTheme(t => t==='dark'?'light':'dark')}/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

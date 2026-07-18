import { useEffect, useRef, useState } from 'react'

const ROLES = ['Web Developer','Sistem Informasi Student','Full-Stack Developer','UI/UX Enthusiast','Problem Solver']

const MARQUEE_ITEMS = [
  { icon:'fab fa-html5', label:'HTML5' },
  { icon:'fab fa-css3-alt', label:'CSS3' },
  { icon:'fab fa-php', label:'PHP' },
  { icon:'fas fa-fire', label:'CodeIgniter 3' },
  { icon:'fas fa-database', label:'MySQL' },
  { icon:'fab fa-js', label:'JavaScript' },
  { icon:'fab fa-figma', label:'UI/UX Design' },
  { icon:'fas fa-code', label:'Full-Stack Web' },
  { icon:'fab fa-bootstrap', label:'Bootstrap' },
  { icon:'fas fa-mobile-alt', label:'Responsive Design' },
  { icon:'fas fa-project-diagram', label:'REST APIs' },
]

function useTyping(roles) {
  const [text, setText] = useState('')
  const roleIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timeout
    function tick() {
      const current = roles[roleIdx.current]
      if(!deleting.current){
        setText(current.substring(0, charIdx.current + 1))
        charIdx.current++
        if(charIdx.current === current.length){
          deleting.current = true
          timeout = setTimeout(tick, 2000)
          return
        }
      } else {
        setText(current.substring(0, charIdx.current - 1))
        charIdx.current--
        if(charIdx.current === 0){
          deleting.current = false
          roleIdx.current = (roleIdx.current + 1) % roles.length
          timeout = setTimeout(tick, 400)
          return
        }
      }
      timeout = setTimeout(tick, deleting.current ? 40 : 80 + Math.random()*40)
    }
    timeout = setTimeout(tick, 800)
    return () => clearTimeout(timeout)
  }, [roles])

  return text
}

export default function Hero() {
  const typed = useTyping(ROLES)
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  const scrollTo = id => {
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({ behavior:'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-content reveal">
        {/* Badge */}
        <div className="hero-badge">
          <span className="dot"/>
          Available for Projects
        </div>

        {/* Name */}
        <h1>
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-name">Salshadilla<br/>Auliyah</span>
        </h1>

        {/* Typing */}
        <div className="hero-role">
          <span>{typed}</span>
          <span className="typing-cursor">|</span>
        </div>

        {/* Description */}
        <p className="hero-desc">
          Mahasiswa Sistem Informasi di Universitas Amikom Yogyakarta yang passionate
          dalam membangun aplikasi web yang modern, responsif, dan memberikan pengalaman
          terbaik bagi pengguna.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            <i className="fas fa-rocket"/> Lihat Projects
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
            <i className="fas fa-paper-plane"/> Hubungi Saya
          </button>
          <a href="/cv-salshadilla.pdf" download className="btn btn-outline">
            <i className="fas fa-download"/> Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">7+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-div"/>
          <div className="stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-div"/>
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">Frameworks</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="marquee-item">
              <i className={item.icon}/>
              {item.label}
              {i < doubled.length - 1 && <span className="marquee-dot"/>}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse"><div className="scroll-wheel"/></div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

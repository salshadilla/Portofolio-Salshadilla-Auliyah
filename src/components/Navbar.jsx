import { useState, useEffect } from 'react'

const NAV_ITEMS = ['Home','About','Experience','Skills','Projects','Contact']

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      // Active link tracking
      const sections = ['hero','about','experience','skills','projects','contact']
      for(let i = sections.length-1; i >= 0; i--){
        const el = document.getElementById(sections[i])
        if(el && window.scrollY >= el.offsetTop - 100){
          setActive(sections[i] === 'hero' ? 'home' : sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive:true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id === 'Home' ? 'hero' : id.toLowerCase())
    if(el) el.scrollIntoView({ behavior:'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={e=>{e.preventDefault();scrollTo('Home')}}>
            <span className="bracket">&lt;</span>SA<span className="bracket">/&gt;</span>
          </a>

          <ul className="nav-links">
            {NAV_ITEMS.map(item => (
              <li key={item}>
                <button
                  className={`nav-link${active === (item==='Home'?'home':item.toLowerCase()) ? ' active' : ''}`}
                  onClick={() => scrollTo(item)}
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                <i className={`fas ${theme==='dark' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </li>
          </ul>

          <button
            className={`hamburger${menuOpen?' open':''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav${menuOpen?' open':''}`}>
        {NAV_ITEMS.map(item => (
          <button key={item} className="mobile-nav-link" onClick={() => scrollTo(item)}>
            {item}
          </button>
        ))}
        <button className="theme-btn" onClick={toggleTheme} style={{marginTop:16}}>
          <i className={`fas ${theme==='dark' ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
    </>
  )
}

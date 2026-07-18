export default function Footer() {
  const scrollTop = () => window.scrollTo({ top:0, behavior:'smooth' })
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <span style={{color:'var(--accent)'}}>{'<'}</span>SA
              <span style={{color:'var(--accent)'}}>{'/ >'}</span>
            </div>
            <div className="footer-text">Salshadilla Auliyah — Web Developer & UI/UX Enthusiast</div>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/salshadilla" target="_blank" rel="noreferrer" className="footer-soc">
              <i className="fab fa-github"/>
            </a>
            <a href="https://linkedin.com/in/salshadilla-auliyah-4b8022282" target="_blank" rel="noreferrer" className="footer-soc">
              <i className="fab fa-linkedin"/>
            </a>
            <a href="https://instagram.com/Salshaadlaw_" target="_blank" rel="noreferrer" className="footer-soc">
              <i className="fab fa-instagram"/>
            </a>
            <a href="mailto:salsadillahauliyah@gmail.com" className="footer-soc">
              <i className="fas fa-envelope"/>
            </a>
          </div>

          <div>
            <div className="footer-copy">
              © {new Date().getFullYear()} Salshadilla Auliyah. All rights reserved.
            </div>
            <button onClick={scrollTop} style={{marginTop:8, color:'var(--accent)', fontSize:13, cursor:'pointer', background:'none', border:'none', font:'inherit', display:'flex', alignItems:'center', gap:6}}>
              <i className="fas fa-arrow-up"/> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function About() {
  const stats = [
    { value: '7+', label: 'Projects Selesai', icon: 'fas fa-folder-open' },
    { value: '10+', label: 'Teknologi', icon: 'fas fa-code' },
    { value: '3+', label: 'Frameworks', icon: 'fas fa-layer-group' },
    { value: '2yr+', label: 'Pengalaman', icon: 'fas fa-clock' },
  ]

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag"><i className="fas fa-user"/> Get to Know Me</span>
          <h2 className="section-title">About <span className="g-text">Me</span></h2>
          <p className="section-sub">Kenali saya lebih dekat — dari latar belakang hingga passion dalam dunia teknologi</p>
        </div>

        <div className="about-grid">
          {/* ====== IMAGE COLUMN ====== */}
          <div className="about-img-wrap reveal from-left">
            <div className="about-img-card">
              <img src="/profile.jpg" alt="Salshadilla Auliyah"/>
              <div className="about-img-overlay"/>
            </div>
            <div className="about-decor"/>

            {/* Float Chips */}
            <div className="float-chip chip-1">
              <i className="fas fa-code"/><span>Full-Stack Dev</span>
            </div>
            <div className="float-chip chip-2">
              <i className="fab fa-figma"/><span>UI/UX Design</span>
            </div>
            <div className="float-chip chip-3">
              <i className="fas fa-database"/><span>MySQL & PHP</span>
            </div>
            <div className="float-chip chip-4">
              <i className="fas fa-star" style={{color:'#f59e0b'}}/><span>Open to Work</span>
            </div>
          </div>

          {/* ====== CONTENT COLUMN ====== */}
          <div className="about-content reveal from-right">

            {/* Intro badge */}
            <div className="about-role">
              <span className="about-status-dot"/>
              Sistem Informasi — Universitas Amikom Yogyakarta
            </div>
            <h3 className="about-subtitle">
              Salshadilla Auliyah
            </h3>

            {/* About text */}
            <p className="about-text">
              Hi, I'm Salsha, an Information Technology student with a strong passion for Web Development and UI/UX Design. 
              I enjoy creating digital products that are not only visually appealing but also functional, user-friendly, 
              and capable of solving real-world problems.
            </p>
            <p className="about-text">
              Throughout my learning journey, I've developed various web-based projects, ranging from portfolio websites 
              and educational platforms to e-commerce systems and collaborative workspace applications. I enjoy transforming 
              ideas into interactive and responsive web experiences while continuously improving my technical and design skills.
            </p>
            <p className="about-text" style={{marginBottom: 28}}>
              Terbuka untuk peluang kerja sama, freelance, maupun diskusi seputar teknologi.
              Let's build something amazing together! 🚀
            </p>

            {/* Mini stats */}
            <div className="about-stats">
              {stats.map((s, i) => (
                <div className="about-stat" key={i}>
                  <i className={s.icon}/>
                  <span className="about-stat-val">{s.value}</span>
                  <span className="about-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Info highlights */}
            <div className="highlights">
              <div className="highlight">
                <i className="fas fa-map-marker-alt"/>
                <div>
                  <div className="highlight-text">Lokasi</div>
                  <div className="highlight-sub">Yogyakarta, Indonesia</div>
                </div>
              </div>
              <div className="highlight">
                <i className="fas fa-university"/>
                <div>
                  <div className="highlight-text">Universitas</div>
                  <div className="highlight-sub">Amikom Yogyakarta — S1 Sistem Informasi</div>
                </div>
              </div>
              <div className="highlight">
                <i className="fas fa-laptop-code"/>
                <div>
                  <div className="highlight-text">Spesialisasi</div>
                  <div className="highlight-sub">Full-Stack Web Development &amp; UI/UX Design</div>
                </div>
              </div>
              <div className="highlight">
                <i className="fas fa-envelope"/>
                <div>
                  <div className="highlight-text">Email</div>
                  <div className="highlight-sub">salsadillahauliyah@gmail.com</div>
                </div>
              </div>
              <div className="highlight">
                <i className="fab fa-github"/>
                <div>
                  <div className="highlight-text">GitHub</div>
                  <div className="highlight-sub">github.com/salshadilla</div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="about-cta">
              <a
                href="https://github.com/salshadilla"
                target="_blank" rel="noreferrer"
                className="btn btn-primary"
              >
                <i className="fab fa-github"/> Lihat GitHub
              </a>
              <a href="mailto:salsadillahauliyah@gmail.com" className="btn btn-outline">
                <i className="fas fa-paper-plane"/> Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

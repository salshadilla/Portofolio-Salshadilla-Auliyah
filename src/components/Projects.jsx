const PROJECTS = [
  {
    icon: 'fas fa-tshirt',
    title: 'Laundify',
    sub: 'Sistem Manajemen Laundry',
    desc: 'Sistem manajemen laundry berbasis web dengan autentikasi multi-role, tracking status laundry real-time, dashboard monitoring transaksi, dan integrasi Midtrans Payment Gateway.',
    tags: ['PHP','CodeIgniter 3','MySQL','Bootstrap','Figma'],
    gh: 'https://github.com/salshadilla/Laundify-LaundryManagementSystem'
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'E-Commerce Marketplace',
    sub: 'Full-Featured Online Store',
    desc: 'Website marketplace dengan fitur manajemen produk, autentikasi multi-role (Admin/Penjual/Pembeli), keranjang belanja, dan manajemen transaksi lengkap.',
    tags: ['PHP','CodeIgniter 3','MySQL','Bootstrap','Figma'],
    gh: 'https://github.com/salshadilla/Marketplace-CI3'
  },
  {
    icon: 'fas fa-cat',
    title: 'Cat Adoption App',
    sub: 'Android-based Mobile Application',
    desc: 'Aplikasi mobile adopsi kucing online berbasis Android yang terintegrasi dengan backend API. Dikembangkan menggunakan Kotlin di Android Studio, PHP sebagai REST API backend, dan dirancang di Figma.',
    tags: ['Kotlin','Android Studio','PHP','Figma'],
    gh: 'https://github.com/salshadilla/Hello_Cats---Cat-Adoption-App-'
  },
  {
    icon: 'fas fa-user-graduate',
    title: 'Prediksi Status Mahasiswa',
    sub: 'Machine Learning & Web App',
    desc: 'Aplikasi berbasis web untuk menganalisis dan memprediksi status kelulusan mahasiswa menggunakan algoritma klasifikasi data mining guna membantu institusi mengidentifikasi mahasiswa berisiko.',
    tags: ['Python','Flask','Machine Learning','MySQL','Figma'],
    gh: 'https://github.com/salshadilla/Prediksi-Status-Mahasiswa'
  },
  {
    icon: 'fas fa-tasks',
    title: 'Teamo-site',
    sub: 'Web-based Collaborative Project Management Platform',
    desc: 'Platform manajemen proyek kolaboratif berbasis web dengan fitur manajemen tugas, visualisasi progress, kolaborasi tim, dan notifikasi deadline.',
    tags: ['PHP','MySQL','JavaScript','Figma'],
    gh: 'https://github.com/salshadilla/Teamo-site'
  }
]

export default function Projects() {
  return (
    <section className="section" id="projects" style={{background:'var(--bg2)'}}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag"><i className="fas fa-folder-open"/> My Work</span>
          <h2 className="section-title">Featured <span className="g-text">Projects</span></h2>
          <p className="section-sub">Beberapa proyek yang telah saya kerjakan dengan penuh dedikasi</p>
        </div>

        {/* Featured */}
        <div className="proj-featured reveal">
          <div>
            <div className="proj-badge"><i className="fas fa-briefcase"/> Freelance Project</div>
            <h3 className="proj-title">Sistem Presensi Karyawan</h3>
            <p className="proj-org">Universitas Muhammadiyah Palu</p>
            <div className="proj-desc-card">
              <p>Sistem presensi berbasis web menggunakan validasi GPS dan selfie. Mengimplementasikan autentikasi multi-role, Geolocation API, Haversine Formula, dashboard admin, serta database relasional untuk pengelolaan presensi karyawan secara real-time.</p>
            </div>
            <div className="tech-tags">
              {['PHP','CodeIgniter 3','MySQL','Bootstrap','JavaScript','Figma'].map(t => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="feat-list">
              <div className="feat-item"><i className="fas fa-check-circle"/> GPS Validation & Haversine Formula</div>
              <div className="feat-item"><i className="fas fa-check-circle"/> Selfie Attendance Capture</div>
              <div className="feat-item"><i className="fas fa-check-circle"/> Multi-Role Authentication</div>
              <div className="feat-item"><i className="fas fa-check-circle"/> Real-time Admin Dashboard</div>
            </div>
            <a
              href="https://github.com/salshadilla/PresensiKaryawanUnismuhPalu"
              target="_blank" rel="noreferrer"
              className="btn btn-primary"
            >
              <i className="fab fa-github"/> View on GitHub
            </a>
          </div>

          <div className="mockup-wrap">
            <div className="mockup-browser">
              <div className="mockup-bar">
                <div className="mockup-dots">
                  <span/><span/><span/>
                </div>
                <div className="mockup-url">presensi-unismuh.app</div>
              </div>
              <div className="mockup-screen">
                <img src="/presensi-unismu.png" alt="Dashboard Presensi Unismuh"/>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div className="proj-card reveal" key={i}>
              <div className="proj-card-top">
                <div className="proj-icon"><i className={p.icon}/></div>
                {p.gh && (
                  <a href={p.gh} target="_blank" rel="noreferrer" className="proj-gh">
                    <i className="fab fa-github"/>
                  </a>
                )}
              </div>
              <div className="proj-card-title">{p.title}</div>
              <div className="proj-card-sub">{p.sub}</div>
              <p className="proj-card-desc">{p.desc}</p>
              <div className="proj-card-tags">
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

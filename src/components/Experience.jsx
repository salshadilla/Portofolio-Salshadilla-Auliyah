const EXP_DATA = [
  {
    type: 'Pendidikan',
    badgeClass: 'badge-edu',
    icon: 'fas fa-graduation-cap',
    period: 'September 2023 — Sekarang',
    role: 'Universitas Amikom Yogyakarta',
    org: 'S1 Sistem Informasi',
    gpa: '3.91 / 4.00',
    desc: 'Mahasiswa aktif Program Studi Sistem Informasi dengan IPK berjalan 3.91.'
  },
  {
    type: 'Pendidikan',
    badgeClass: 'badge-edu',
    icon: 'fas fa-school',
    period: '2020 — 2023',
    role: 'SMA Labschool Untad PALU',
    org: 'Jurusan IPA',
    desc: 'Menyelesaikan pendidikan menengah atas dengan peminatan Ilmu Pengetahuan Alam (IPA).'
  },
  {
    type: 'Freelance',
    badgeClass: 'badge-freelance',
    icon: 'fas fa-laptop-code',
    period: 'Jan 2026 — Jun 2026',
    role: 'Full-Stack Web Developer',
    org: 'Universitas Muhammadiyah Palu',
    desc: 'Membangun Sistem Presensi Karyawan berbasis web dengan validasi GPS (Haversine Formula), selfie attendance, autentikasi multi-role, dan dashboard admin real-time menggunakan CodeIgniter 3 dan MySQL.'
  },
  {
    type: 'Proyek',
    badgeClass: 'badge-project',
    icon: 'fas fa-paint-brush',
    period: 'Sep 2025 — Des 2025',
    role: 'UI/UX Designer',
    org: 'Proyek Akademik — Amikom Yogyakarta',
    desc: 'Merancang antarmuka web cats adaptor app menggunakan Figma. Fokus pada pengalaman pengguna yang ramah, alur pencarian hewan, dan interaksi yang intuitif.'
  },
  {
    type: 'Proyek',
    badgeClass: 'badge-project',
    icon: 'fas fa-store',
    period: 'Mar 2025 — Agu 2025',
    role: 'Full-Stack Developer',
    org: 'E-Commerce Marketplace',
    desc: 'Mengembangkan platform marketplace dengan fitur manajemen produk lengkap, autentikasi multi-role (Admin, Penjual, Pembeli), keranjang belanja, serta manajemen transaksi menggunakan PHP CodeIgniter 3.'
  },
  {
    type: 'Proyek',
    badgeClass: 'badge-project',
    icon: 'fas fa-tshirt',
    period: 'Jan 2025 — Mar 2025',
    role: 'Full-Stack Developer',
    org: 'Laundify — Laundry Management',
    desc: 'Membangun sistem manajemen laundry berbasis web dengan tracking status real-time, dashboard monitoring transaksi harian, dan integrasi Midtrans Gateway.'
  },
  {
    type: 'Organisasi',
    badgeClass: 'badge-org',
    icon: 'fas fa-users',
    period: 'Januari 2023 — Januari 2024',
    role: 'Ketua Departemen Ristek',
    org: 'Himpunan Mahasiswa Sistem Informasi',
    list: [
      'Memimpin pengembangan platform web manajemen organisasi yang digunakan ±40 anggota untuk pengelolaan data dan komunikasi internal.',
      'Menginisiasi dan mengelola 3-5 kegiatan teknologi (seminar, workshop, hackathon) dengan partisipasi ±80-120 mahasiswa/kegiatan.'
    ]
  },
  {
    type: 'Organisasi',
    badgeClass: 'badge-org',
    icon: 'fas fa-wallet',
    period: 'Februari 2024 — Januari 2025',
    role: 'Bendahara II',
    org: 'Himpunan Mahasiswa Sistem Informasi',
    list: [
      'Mengelola pencatatan ±50-100 transaksi serta menyusun laporan keuangan kegiatan menggunakan Microsoft Excel.',
      'Berkoordinasi dalam pengelolaan anggaran Rp5-12 juta untuk pelaksanaan berbagai kegiatan organisasi.',
      'Melakukan monitoring penggunaan dana dan mendukung administrasi keuangan kegiatan mahasiswa.'
    ]
  },
  {
    type: 'Kepanitiaan',
    badgeClass: 'badge-committee',
    icon: 'fas fa-clipboard-list',
    period: '2024 — 2025',
    role: 'Pengalaman Kepanitiaan',
    org: 'Berbagai Acara & Seminar',
    list: [
      'Seminar UI UX HIMASI — Koor Divisi Acara (Mei 2024)',
      'Gemasi 2025 — Divisi TS Penjurian (Jan 2025)',
      'Dialog Lembaga Mahasiswa 2025 — Divisi Acara (Ags 2025)',
      'Short Bootcamp UI UX — TS Support (Jul 2025)'
    ]
  },
  {
    type: 'Sertifikasi',
    badgeClass: 'badge-cert',
    icon: 'fas fa-certificate',
    period: '2023 — 2025',
    role: 'Sertifikat & Penghargaan',
    org: 'Asisten Praktikum & Partisipasi Kegiatan',
    list: [
      'Asisten Praktikum: Pengantar Teknologi Informasi, Struktur Data, Pengenalan Perancangan Web, Pemrograman Web Lanjut',
      'Introduction to Computer (ITC) 2023 — Peserta Divisi Digital Marketing',
      'Seminar UI/UX 2024 — Peserta',
      'Upgrading HIMASI 2024 — Sie Keamanan',
      'Musyawarah Besar Lembaga Mahasiswa 2023 — Sie Konsumsi',
      'Dialog Program Studi 2024 — Sie Konsumsi'
    ]
  }
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag"><i className="fas fa-briefcase"/> My Journey</span>
          <h2 className="section-title">Education &amp; <span className="g-text">Experience</span></h2>
          <p className="section-sub">Perjalanan akademik, organisasi, kepanitiaan, dan pengalaman kerja saya</p>
        </div>
        <div className="exp-timeline">
          {EXP_DATA.map((e,i) => (
            <div className="exp-item reveal" key={i}>
              <div className="exp-dot"><i className={e.icon}/></div>
              <div className="exp-card">
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8, marginBottom:12}}>
                  <span className="exp-period">{e.period}</span>
                  <span className={`exp-badge ${e.badgeClass}`} style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}><i className={e.icon}/> {e.type}</span>
                </div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-org">{e.org}</div>
                {e.gpa && (
                  <div className="timeline-gpa" style={{
                    marginTop: 10,
                    marginBottom: 10,
                    padding: '8px 14px',
                    background: 'rgba(232,51,110,0.05)',
                    border: '1px solid rgba(232,51,110,0.12)',
                    borderRadius: '10px',
                    width: 'fit-content',
                    fontSize: '13px'
                  }}>
                    <span className="gpa-label" style={{color: 'var(--text3)', fontWeight: 600, marginRight: 6}}>IPK</span>
                    <span className="gpa-value" style={{fontWeight: 800, color: 'var(--accent)', fontSize: '15px'}}>{e.gpa.split(' ')[0]}</span>
                    <span className="gpa-max" style={{color: 'var(--text3)'}}> {e.gpa.split(' ').slice(1).join(' ')}</span>
                  </div>
                )}
                {e.desc && <p className="exp-desc" style={{marginTop: 6}}>{e.desc}</p>}
                {e.list && (
                  <div className="exp-desc" style={{marginTop: 8}}>
                    <ul style={{listStyleType:'disc', paddingLeft:16}}>
                      {e.list.map((item, j) => <li key={j} style={{marginBottom:5}}>{item}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

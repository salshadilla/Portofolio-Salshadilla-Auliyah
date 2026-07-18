import { useState } from 'react'

const CONTACTS = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'salsadillahauliyah@gmail.com',
    href: 'mailto:salsadillahauliyah@gmail.com'
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    value: 'Salshadilla Auliyah',
    href: 'https://www.linkedin.com/in/salshadilla-auliyah-4b8022282/'
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    value: 'github.com/salshadilla',
    href: 'https://github.com/salshadilla'
  },
  {
    icon: 'fab fa-instagram',
    label: 'Instagram',
    value: '@Salshaadlaw_',
    href: 'https://instagram.com/Salshaadlaw_'
  }
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    const { name, subject, message } = form
    if (!name || !subject || !message) return

    setSent(true)
    
    // Using formsubmit.co for direct email sending
    try {
      await fetch('https://formsubmit.co/ajax/salsadillahauliyah@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          subject,
          message,
          _subject: `New Portfolio Message: ${subject}`
        })
      })
      
      setTimeout(() => {
        setSent(false)
        setForm({ name: '', subject: '', message: '' })
      }, 4000)
    } catch (error) {
      console.error(error)
      setSent(false)
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag"><i className="fas fa-envelope"/> Reach Out</span>
          <h2 className="section-title">Let's <span className="g-text">Connect</span></h2>
          <p className="section-sub">Tertarik untuk berkolaborasi atau ingin berdiskusi? Jangan ragu untuk menghubungi saya!</p>
        </div>

        <div className="contact-layout">
          {/* ====== LEFT: Social Cards ====== */}
          <div className="contact-cards-col">
            <p className="contact-col-label">
              <i className="fas fa-satellite-dish"/> Temukan Saya Di
            </p>
            <div className="contact-cards">
              {CONTACTS.map((c, i) => (
                <a href={c.href} target="_blank" rel="noreferrer" className="contact-card-h reveal" key={i}>
                  <div className="contact-icon-sm">
                    <i className={c.icon}/>
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">{c.label}</div>
                    <div className="contact-value">{c.value}</div>
                  </div>
                  <i className="fas fa-arrow-up-right-from-square contact-ext"/>
                </a>
              ))}
            </div>
          </div>

          {/* ====== RIGHT: Email Form ====== */}
          <div className="contact-form-col reveal">
            <p className="contact-col-label">
              <i className="fas fa-paper-plane"/> Kirim Pesan Langsung
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    <i className="fas fa-user"/> Nama Kamu
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">
                    <i className="fas fa-tag"/> Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Kolaborasi / Freelance / ..."
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  <i className="fas fa-comment-dots"/> Pesan
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan kamu di sini..."
                  className="form-input form-textarea"
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className={`btn btn-primary form-submit${sent ? ' sent' : ''}`} style={{width:'100%', justifyContent:'center'}}>
                {sent
                  ? <><i className="fas fa-check-circle"/> Pesan Berhasil Terkirim!</>
                  : <><i className="fas fa-paper-plane"/> Kirim Pesan</>
                }
              </button>
              <p className="form-hint">
                <i className="fas fa-info-circle"/> {sent ? "Terima kasih sudah menghubungi saya!" : "Pesan akan langsung masuk ke email saya"}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

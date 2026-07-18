const SKILLS = [
  {
    icon: 'fas fa-code',
    title: 'Programming',
    color: '#e8336e',
    items: [
      { icon:'fab fa-php',       label:'PHP' },
      { icon:'fab fa-python',    label:'Python' },
      { icon:'fab fa-js',        label:'JavaScript' },
      { icon:'fab fa-html5',     label:'HTML' },
      { icon:'fab fa-css3-alt',  label:'CSS' },
      { icon:'fab fa-bootstrap', label:'Bootstrap' },
      { icon:'fas fa-fire',      label:'CodeIgniter' },
      { icon:'fas fa-leaf',      label:'Laravel' },
    ]
  },
  {
    icon: 'fas fa-tools',
    title: 'Tools & Software',
    color: '#6366f1',
    items: [
      { icon:'fab fa-git-alt',     label:'Git' },
      { icon:'fab fa-github',      label:'GitHub' },
      { icon:'fas fa-satellite',   label:'Postman' },
      { icon:'fas fa-terminal',    label:'VS Code' },
      { icon:'fab fa-figma',       label:'Figma' },
      { icon:'fas fa-server',      label:'XAMPP' },
      { icon:'fas fa-swatchbook',  label:'Canva' },
      { icon:'fas fa-robot',       label:'Antigravity' },
      { icon:'fas fa-brain',       label:'Claude Code' },
    ]
  },
  {
    icon: 'fas fa-heart',
    title: 'Soft Skills',
    color: '#f59e0b',
    items: [
      { icon:'fas fa-puzzle-piece',    label:'Problem Solving' },
      { icon:'fas fa-lightbulb',       label:'Critical Thinking' },
      { icon:'fas fa-rocket',          label:'Initiative' },
      { icon:'fas fa-sync-alt',        label:'Adaptability' },
      { icon:'fas fa-comments',        label:'Communication' },
      { icon:'fas fa-microphone',      label:'Public Speaking' },
    ]
  },
  {
    icon: 'fas fa-globe',
    title: 'Bahasa',
    color: '#22c55e',
    items: [
      { icon:'fas fa-flag',     label:'Indonesia', level: 'Proficient' },
      { icon:'fas fa-flag-usa', label:'English',   level: 'Intermediate' },
    ],
    isLanguage: true
  }
]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag"><i className="fas fa-layer-group"/> What I Know</span>
          <h2 className="section-title">Skills &amp; <span className="g-text">Expertise</span></h2>
          <p className="section-sub">Teknologi, tools, dan kemampuan yang saya kuasai dalam membangun solusi digital</p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((cat, i) => (
            <div className="skill-cat reveal" key={i} style={{'--cat-color': cat.color}}>
              <div className="skill-cat-title">
                <span className="skill-cat-icon" style={{background:`${cat.color}18`, color: cat.color}}>
                  <i className={cat.icon}/>
                </span>
                {cat.title}
              </div>

              {cat.isLanguage ? (
                /* Language cards */
                <div className="lang-cards">
                  {cat.items.map((item, j) => (
                    <div className="lang-card" key={j}>
                      <i className={item.icon} style={{color: cat.color}}/>
                      <div>
                        <div className="lang-name">{item.label}</div>
                        <div className="lang-level" style={{color: cat.color}}>{item.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Skill chips */
                <div className="skill-chips">
                  {cat.items.map((item, j) => (
                    <span className="skill-chip" key={j} style={{'--chip-color': cat.color}}>
                      <i className={item.icon}/>
                      {item.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

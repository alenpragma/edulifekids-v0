'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  GraduationCap,
  Laptop,
  MapPin,
  Menu,
  Phone,
  X,
  MessageCircle,
} from 'lucide-react'

const levels = ['Foundation', 'Building', 'Designing', 'Reasoning', 'Applying']
const programs = [
  {
    number: '01',
    slug: 'coding',
    icon: Code2,
    title: 'Coding',
    kicker: 'FROM A FIRST HEADING TO A WORKING BACKEND',
    description:
      'Children start by writing real HTML and CSS, then move into Python and finally into databases, APIs and backend architecture.',
    topics: ['HTML', 'CSS', 'Web application design', 'Python', 'Databases & APIs'],
    tint: 'blue',
  },
  {
    number: '02',
    slug: 'english',
    icon: BookOpen,
    title: 'English',
    kicker: 'PHONETICS FIRST. THEN THE CONFIDENCE TO SPEAK.',
    description:
      'Reading and pronunciation are taught through phonetics, not memorisation. Speaking, writing and debate follow once the sounds are secure.',
    topics: ['Phonetics & reading', 'Speaking', 'Public speaking', 'Writing', 'Debate & presentation'],
    tint: 'teal',
  },
  {
    number: '03',
    slug: 'computer-skills',
    icon: Laptop,
    title: 'Computer Skills',
    kicker: 'THE TOOLS SCHOOL AND WORK ACTUALLY EXPECT',
    description:
      'Typing and computer basics first, then Word, PowerPoint and Excel. Level 5 covers CV writing, the internet and AI.',
    topics: ['Computer basics', 'MS Word', 'PowerPoint', 'Excel & logic', 'Internet & AI'],
    tint: 'violet',
  },
]
const centers = [
  { area: 'KHAGRACHARI SADAR', name: 'Shantinagar Learning Center', address: 'Shantinagar, Khagrachari Sadar' },
  { area: 'MATIRANGA', name: 'Babupara Learning Center', address: 'Babupara, Matiranga Sadar' },
  { area: 'LUXMICHARI', name: 'Upozila Chattar Learning Center', address: 'Upozila Chattar, Luxmichari' },
  { area: 'GUIMARA', name: 'Ramsu Bazar Learning Center', address: 'Ramsu Bazar, Guimara Sadar' },
]
const initiatives = [
  { name: 'Edulife Kids', type: 'initiative', label: 'AFTER-SCHOOL PROGRAM', icon: '/family-icon-placeholder.png' },
  { name: 'Edulife IT School', type: 'school', label: 'FLAGSHIP SCHOOL', icon: '/family-icon-placeholder.png' },
  { name: 'Edulife IT', type: 'initiative', label: 'TECHNOLOGY TRAINING', icon: '/family-icon-placeholder.png' },
  { name: 'Edulife Agency', type: 'initiative', label: 'CREATIVE & DIGITAL', icon: '/family-icon-placeholder.png' },
  { name: 'Edulife Publications', type: 'initiative', label: 'BOOKS & LEARNING', icon: '/family-icon-placeholder.png' },
  { name: 'FoodLife', type: 'initiative', label: 'FOOD & NUTRITION', icon: '/family-icon-placeholder.png' },
  { name: 'Edulife Tech', type: 'initiative', label: 'PRODUCT & SOFTWARE', icon: '/family-icon-placeholder.png' },
  { name: 'Sindukchari Eco Resort', type: 'initiative', label: 'ECO RESORT', icon: '/family-icon-placeholder.png' },
]

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Edulife Kids home">
      <span className="brand-mark" aria-hidden="true"><span>e</span><span>k</span><span>+</span><span>✳</span></span>
      <span className="brand-copy"><strong>Edulife Kids</strong><small>AFTER SCHOOL PROGRAM</small></span>
    </a>
  )
}

export function EdulifeHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [curriculumOpen, setCurriculumOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement">
        <span className="announcement-tag"><span className="live-dot" /> ADMISSIONS</span>
        <span>Admissions for the January 2027 intake are open at all four learning centers.</span>
        <a href="/admissions">See how to apply <ArrowUpRight size={14} /></a>
      </div>
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a onClick={closeMenu} href="#home">Home</a>
            <div className="nav-submenu-wrapper">
              <button type="button" className="nav-submenu-trigger" onClick={() => setCurriculumOpen(!curriculumOpen)} aria-expanded={curriculumOpen} aria-controls="home-curriculum-menu">
                Curriculum <ChevronDown size={13} />
              </button>
              {curriculumOpen && (
                <div className="nav-submenu" id="home-curriculum-menu">
                  <a onClick={() => { closeMenu(); setCurriculumOpen(false) }} href="/curriculum/coding">Coding</a>
                  <a onClick={() => { closeMenu(); setCurriculumOpen(false) }} href="/curriculum/english">English</a>
                  <a onClick={() => { closeMenu(); setCurriculumOpen(false) }} href="/curriculum/computer-skills">Computer Skills</a>
                </div>
              )}
            </div>
            <a onClick={closeMenu} href="#programs">Programs <ChevronDown size={13} /></a>
            <a onClick={closeMenu} href="#centers">Learning centers</a>
            <a onClick={closeMenu} href="#about">Our approach</a>
            <a className="mobile-portal-link" onClick={closeMenu} href="/student-login"><GraduationCap size={16} /> Student login</a>
            <a className="mobile-portal-link" onClick={closeMenu} href="/admissions"><ArrowRight size={16} /> Apply for admission</a>
          </nav>
          <div className="nav-actions">
            <a className="login-link" href="/student-login"><GraduationCap size={17} /> Student login</a>
            <a className="button button-primary button-nav" href="/admissions">Apply for admission <ArrowRight size={16} /></a>
          </div>
        </div>
      </header>

      <main className="homepage-main">
        <section className="hero" id="home">
          <div className="hero-photo" />
          <div className="hero-scrim" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow"><MapPin size={14} /> KHAGRACHARI, CHITTAGONG HILL TRACTS <span /> SINCE 2022</div>
              <h1>Give your child <em>skills</em> that go beyond the classroom.</h1>
              <p className="hero-lede">Preparing children for the AI era, one skill at a time — coding, English and computer skills taught in five honest levels, after school, in Khagrachari.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="/admissions">Apply for admission <ArrowRight size={17} /></a>
                <a className="button button-ghost" href="/curriculum/coding">Explore subject pages <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-proof">
                <div><strong>200<span>+</span></strong><small>learners enrolled now</small></div>
                <div><strong>4</strong><small>learning centers</small></div>
                <div><strong>Jan. <span>2027</span></strong><small>next intake open</small></div>
              </div>
            </div>
            <aside className="progress-card" aria-label="How a child moves up through five levels">
              <div className="progress-head"><div className="progress-icon"><ArrowUpRight size={19} /></div><div><strong>How a child moves up</strong><p>One level per semester. The exam decides, not the calendar.</p></div><span className="level-count">5 LEVELS</span></div>
              <ol className="level-list">{levels.map((level, index) => <li key={level}><span className={`level-badge level-${index + 1}`}>L{index + 1}</span><strong>{level}</strong><span className="level-index">L{index + 1}/5</span><span className="level-track"><i style={{ width: `${50 + index * 10}%` }} /></span></li>)}</ol>
              <div className="progress-foot"><div className="pass-mark">80<span>%</span></div><p><strong>on the semester exam</strong> moves a child up.<br />Below that, the level is repeated and reassessed.</p></div>
              <div className="learn-pills"><span>TAUGHT IN</span><b>Coding</b><b>English</b><b>Computer</b></div>
            </aside>
          </div>
          <a className="scroll-cue" href="#overview"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
        </section>

        <section className="stats-band" id="overview" aria-label="Edulife Kids at a glance">
          <div className="stats-intro"><span className="eyebrow">AT A GLANCE</span><h2>Four centers.<br /><span>One district.</span></h2><p>Since 2022, in Khagrachari.</p></div>
          {[['04', 'LEARNING CENTERS', 'in Khagrachari District'], ['200+', 'CURRENT LEARNERS', 'enrolled this term'], ['600+', 'LEARNERS REACHED', 'since 2022'], ['10+', 'MENTORS', 'in a 20+ person team']].map(([value, label, detail]) => <div className="stat-cell" key={label}><strong>{value}</strong><span>{label}</span><small>{detail}</small></div>)}
        </section>

        <section className="section programs-section" id="programs">
          <div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" /> ONE PROGRAM, THREE STRANDS</span><h2>One enrolment.<br /><span>Three skills that build on each other.</span></h2></div><div className="heading-aside"><p>Every child learns all three. Each strand has its own five levels and a clear semester rhythm: focused work, assignments in the LMS, and a written exam.</p><a className="text-link" href="/curriculum/coding">Explore subject pages <ArrowRight size={16} /></a></div></div>
          <div className="program-grid">{programs.map(({ number, slug, icon: Icon, title, kicker, description, topics, tint }) => <article className={`program-card ${tint}`} key={title}><div className="program-top"><span className="program-icon"><Icon size={22} /></span><div className="program-meta"><span className="program-number">{number} / 03</span><span className="program-level-tag">5 LEVELS</span></div></div><h3>{title}</h3><span className="program-kicker">{kicker}</span><p>{description}</p><ul>{topics.map((topic, index) => <li key={topic}><span className="topic-level">L{index + 1}</span>{topic}</li>)}</ul><a className="program-link" href={`/curriculum/${slug}`}>Explore {title} <ArrowRight size={16} /></a></article>)}</div>
        </section>

        <section className="method-section" id="about"><div className="method-left"><span className="eyebrow"><span className="eyebrow-line" /> OUR METHOD</span><h2>Learn by doing.<br /><span>Progress by proving.</span></h2><p>Most after-school classes measure attendance. We measure what a child can produce, and we are willing to say when it is not yet enough.</p><a className="button button-light" href="#admissions">How admissions work <ArrowRight size={16} /></a></div><div className="method-steps">{[['01', 'LEARN BY DOING', 'Every level ends with something built', 'A page, a layout, a Python program, a spreadsheet model. Children finish with a deliverable they can show and explain.'], ['02', 'PROGRESS BY PROVING', 'The semester exam decides the level', 'Three months of work, then an exam. 80% moves a child up. The exam counts, not how long a child has attended.'], ['03', 'REPEAT, DON’T SKIP', 'Below 80% means the level is repeated', 'Children who fall short repeat the level and are reassessed. The next level assumes the skills they have learned.']].map(([n, tag, title, text]) => <article className="method-step" key={n}><span className="step-number">{n}</span><div><span className="step-tag">{tag}</span><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="step-arrow" size={19} /></article>)}</div></section>

        <section className="section curriculum-section" id="curriculum"><div className="section-heading curriculum-heading"><div><span className="eyebrow"><span className="eyebrow-line" /> THE CURRICULUM</span><h2>Five levels per program.<br /><span>Every one published.</span></h2></div><div className="heading-aside"><p>Nothing is taught behind a closed door. Each level has a named focus and a deliverable — all fifteen levels are here for you to read before you enrol.</p><a className="text-link" href="#programs">Explore the three strands <ArrowRight size={16} /></a></div></div>
          <div className="table-wrap"><table><caption className="sr-only">The five curriculum levels for coding, English and computer skills side by side.</caption><thead><tr><th scope="col">LEVEL</th><th scope="col"><span className="table-dot dot-blue" /> Coding</th><th scope="col"><span className="table-dot dot-teal" /> English</th><th scope="col"><span className="table-dot dot-violet" /> Computer Skills</th></tr></thead><tbody>{[['FOUNDATION', 'HTML', 'Phonetics & Reading', 'Basic Computer & Typing'], ['BUILDING', 'CSS', 'Phonetics, Reading & Speaking', 'Advanced MS Word'], ['DESIGNING', 'Advanced CSS & Web Application Design', 'Advanced Phonetics, Reading & Public Speaking', 'Creative Design with MS PowerPoint'], ['REASONING', 'Python', 'Advanced Phonetics, Writing & Public Speaking', 'Logic & Mathematics with MS Excel'], ['APPLYING', 'Database, API, Architecture & Backend', 'Language Club, Debate, Interview & Presentation', 'CV Writing, Internet & AI']].map((row, rowIndex) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}><span className="table-level">L{rowIndex + 1}</span>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
          <div className="exam-note"><span className="exam-number">80<small>%</small></span><div><strong>The pass mark is 80%, and it is not rounded up.</strong><p>A semester exam every three months decides whether a child moves up. Below 80%, the level is repeated and reassessed — not skipped.</p></div><a className="text-link" href="#about">How progression works <ArrowRight size={16} /></a></div>
        </section>

        <section className="centers-section" id="centers"><div className="centers-top"><div><span className="eyebrow"><span className="eyebrow-line" /> WHERE WE TEACH</span><h2>Four centers across<br /><span>four upazilas.</span></h2></div><div className="centers-intro"><p>Children attend the center nearest them. Every center runs the full program — Coding, English and Computer Skills together — across Levels 1–5.</p><ul><li><Check size={15} /> Full program at every center</li><li><Check size={15} /> After school, Saturday to Thursday</li><li><Check size={15} /> One exam, one standard</li></ul></div></div><div className="center-grid">{centers.map((center, index) => <article className="center-card" key={center.name}><div className="center-card-top"><span>0{index + 1} / LEARNING CENTER</span><MapPin size={17} /></div><span className="center-area">{center.area}</span><h3>{center.name}</h3><p>{center.address}, Khagrachari</p><div className="center-card-bottom"><a href="tel:+8801519575226"><Phone size={14} /> 01519-575226</a><a className="center-arrow" href="#admissions" aria-label={`Book a visit to ${center.name}`}><ArrowUpRight size={19} /></a></div></article>)}</div><p className="center-hours"><span className="live-dot" /> Saturday – Thursday <span>·</span> After school hours <span>·</span> Closed Friday</p></section>

        <section className="family-section" aria-labelledby="family-heading"><div className="family-copy"><span className="eyebrow"><span className="eyebrow-line" /> THE EDULIFE FAMILY</span><h2 id="family-heading">One institute.<br /><span>A growing family.</span></h2><p>Edulife Kids is part of a growing family built by Edulife IT Institute, teaching technology in Khagrachari since 2015. As new initiatives take shape, this directory grows with them.</p><a className="text-link" href="#contact">Discover our story <ArrowRight size={16} /></a></div><div className="family-directory"><div className="family-directory-head"><span>OUR WORK, IN MANY FORMS</span><span>{initiatives.filter((item) => item.type === 'initiative').length} initiatives <i /> {initiatives.filter((item) => item.type === 'school').length} school</span></div><div className="family-list">{initiatives.map((item) => <article className={`family-item${item.name === 'Edulife Kids' ? ' is-current' : ''}`} key={item.name}><img className="family-icon" src={item.icon} alt="" aria-hidden="true" /><strong>{item.name}</strong><span>{item.label}</span><ArrowUpRight size={16} /></article>)}</div><p className="family-footnote">Growing together in Khagrachari, Chittagong Hill Tracts.</p></div></section>

        <section className="admissions-section" id="admissions"><div className="admissions-decor" aria-hidden="true">EK</div><div className="admissions-content"><span className="eyebrow"><span className="eyebrow-line" /> EDULIFE KIDS · KHAGRACHARI</span><h2>Begin your child’s<br /><em>Edulife story.</em></h2><p>Admissions for the January 2027 intake are open. Come meet a mentor, see a learning center, and find out where your child’s journey can begin.</p><div className="admissions-actions"><a className="button button-primary" href="tel:+8801519575226">Apply for admission <ArrowRight size={17} /></a><a className="button button-outline" href="tel:+8801519575226">Book a campus visit <MapPin size={16} /></a></div><div className="admissions-foot"><span><Check size={14} /> No fee to submit an enquiry</span><span><Check size={14} /> We reply within two working days</span></div></div><div className="contact-stack"><div className="contact-card"><span>LET’S TALK</span><a href="tel:+8801816575225"><Phone size={17} /> 01816-575225</a><a href="tel:+8801519575225">01519-575225</a><a href="mailto:helloedulife@gmail.com">helloedulife@gmail.com</a><a href="mailto:info@edulifekids.com">info@edulifekids.com</a><small>Saturday – Thursday<br />9:00 AM – 6:00 PM</small></div><a className="contact-card contact-social" href="https://www.facebook.com/edulifekids" target="_blank" rel="noopener noreferrer"><span className="social-badge" aria-hidden="true">f</span><span><strong>Follow us on Facebook</strong><small>News, events and learner stories</small></span></a><a className="contact-card contact-social" href="https://chat.whatsapp.com/edulife-smart-parents" target="_blank" rel="noopener noreferrer"><span className="social-badge social-badge-whatsapp" aria-hidden="true"><MessageCircle size={16} /></span><span><strong>Join the Smart Parent Community</strong><small>Tips and updates on WhatsApp</small></span></a></div></section>
      </main>

      <footer className="site-footer" id="contact"><div className="footer-main"><div className="footer-brand"><Brand /><p>Skills for Life. Confidence for Tomorrow. An initiative of Edulife IT Institute, working in Khagrachari since 2015.</p><a className="footer-call" href="tel:+8801519575226"><Phone size={15} /> Talk to our team <ArrowUpRight size={14} /></a></div><div className="footer-links"><div><span>SUBJECTS</span><a href="/curriculum/coding">Coding</a><a href="/curriculum/english">English</a><a href="/curriculum/computer-skills">Computer Skills</a></div><div><span>FAMILIES</span><a href="#admissions">Admissions</a><a href="#centers">Learning centers</a><a href="#about">Our approach</a><a href="#contact">Contact</a></div><div><span>GET IN TOUCH</span><a href="tel:+8801519575226">01519-575226</a><a href="mailto:kids@edulife.example">kids@edulife.example</a><a href="#centers">Khagrachari, Bangladesh</a></div></div></div><div className="footer-bottom"><span>© 2026 Edulife Kids — After School Program</span><span>Made with care in Khagrachari <span className="footer-heart">✳</span></span><a href="#home">Back to top ↑</a></div></footer>
    </>
  )
}

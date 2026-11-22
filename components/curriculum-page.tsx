'use client'

import Link from 'next/link'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  ChevronDown,
  Code2,
  GraduationCap,
  Laptop,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react'
import { useState } from 'react'

const levels = ['Foundation', 'Building', 'Designing', 'Reasoning', 'Applying']

const strands = [
  {
    id: 'coding',
    number: '01',
    title: 'Coding',
    color: 'blue',
    icon: Code2,
    intro: 'From a first heading to a working backend.',
    description: 'Children build a working understanding of the web, then use programming and real technical foundations to bring their ideas to life.',
    topics: ['HTML', 'CSS', 'Advanced CSS & Web Application Design', 'Python', 'Database, API, Architecture & Backend'],
  },
  {
    id: 'english',
    number: '02',
    title: 'English',
    color: 'teal',
    icon: BookOpen,
    intro: 'Phonetics first. Then the confidence to speak.',
    description: 'Reading and pronunciation begin with phonetics, not memorisation. Speaking, writing and presentation skills grow with each level.',
    topics: ['Phonetics & Reading', 'Phonetics, Reading & Speaking', 'Advanced Phonetics, Reading & Public Speaking', 'Advanced Phonetics, Writing & Public Speaking', 'Language Club, Debate, Interview & Presentation'],
  },
  {
    id: 'computer-skills',
    number: '03',
    title: 'Computer Skills',
    color: 'violet',
    icon: Laptop,
    intro: 'The tools school and work actually expect.',
    description: 'Students build confidence with everyday computer use, then learn the productivity tools and digital skills they can put to work.',
    topics: ['Basic Computer & Typing', 'Advanced MS Word', 'Creative Design with MS PowerPoint', 'Logic & Mathematics with MS Excel', 'CV Writing, Internet & AI'],
  },
]

function CurriculumBrand() {
  return (
    <Link className="brand" href="/" aria-label="Edulife Kids home">
      <span className="brand-mark" aria-hidden="true"><span>e</span><span>k</span><span>+</span><span>✳</span></span>
      <span className="brand-copy"><strong>Edulife Kids</strong><small>AFTER SCHOOL PROGRAM</small></span>
    </Link>
  )
}

export function CurriculumHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [curriculumOpen, setCurriculumOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement">
        <span className="announcement-tag"><span className="live-dot" /> ADMISSIONS</span>
        <span>Admissions for the January 2027 intake are open at all four learning centers.</span>
        <Link href="/#admissions">See how to apply <ArrowUpRight size={14} /></Link>
      </div>
      <header className="site-header curriculum-site-header">
        <div className="nav-shell">
          <CurriculumBrand />
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <Link onClick={closeMenu} href="/">Home</Link>
            <Link onClick={closeMenu} href="/about">About us</Link>
            <div className="nav-submenu-wrapper">
              <Link className="nav-submenu-link" onClick={closeMenu} href="/#programs">Curriculum</Link>
              <button type="button" className="nav-submenu-trigger" onClick={() => setCurriculumOpen(!curriculumOpen)} aria-label={curriculumOpen ? 'Close Curriculum submenu' : 'Open Curriculum submenu'} aria-expanded={curriculumOpen} aria-controls="subject-curriculum-menu">
                <ChevronDown size={13} />
              </button>
              {curriculumOpen && <div className="nav-submenu" id="subject-curriculum-menu">
                <Link onClick={() => { closeMenu(); setCurriculumOpen(false) }} href="/curriculum/coding">Coding</Link>
                <Link onClick={() => { closeMenu(); setCurriculumOpen(false) }} href="/curriculum/english">English</Link>
                <Link onClick={() => { closeMenu(); setCurriculumOpen(false) }} href="/curriculum/computer-skills">Computer Skills</Link>
              </div>}
            </div>
            <Link onClick={closeMenu} href="/#centers">Learning centers</Link>
            <Link onClick={closeMenu} href="/#about">Our approach</Link>
          </nav>
          <div className="nav-actions">
            <Link className="login-link" href="/#contact"><GraduationCap size={17} /> Student login</Link>
            <Link className="button button-primary button-nav" href="/#admissions">Apply for admission <ArrowRight size={16} /></Link>
          </div>
        </div>
      </header>
    </>
  )
}

export function CurriculumFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <CurriculumBrand />
          <p>Skills for Life. Confidence for Tomorrow. An initiative of Edulife IT Institute, working in Khagrachari since 2015.</p>
          <a className="footer-call" href="tel:+8801519575226"><Phone size={15} /> Talk to our team <ArrowUpRight size={14} /></a>
        </div>
        <div className="footer-links">
          <div><span>PROGRAMS</span><Link href="/curriculum/coding">Coding</Link><Link href="/curriculum/english">English</Link><Link href="/curriculum/computer-skills">Computer Skills</Link><Link href="/curriculum/coding">Browse subject pages</Link></div>
          <div><span>FAMILIES</span><Link href="/#admissions">Admissions</Link><Link href="/#centers">Learning centers</Link><Link href="/about">About us</Link><Link href="/#about">Our approach</Link><Link href="/#contact">Contact</Link></div>
          <div><span>GET IN TOUCH</span><a href="tel:+8801519575226">01519-575226</a><Link href="/#centers">Khagrachari, Bangladesh</Link></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Edulife Kids — After School Program</span><span>Made with care in Khagrachari <span className="footer-heart">✳</span></span><Link href="/">Back to home ↑</Link></div>
    </footer>
  )
}

export function CurriculumPage() {
  return (
    <>
      <CurriculumHeader />
      <main>
        <section className="curriculum-hero">
          <div className="curriculum-hero-photo" aria-hidden="true" />
          <div className="curriculum-hero-content">
            <div className="curriculum-breadcrumb"><Link href="/">HOME</Link><ChevronRight size={12} /><span>CURRICULUM</span></div>
            <span className="eyebrow"><span className="eyebrow-line" /> THE EDULIFE KIDS CURRICULUM</span>
            <h1>Skills built<br />one level <em>at a time.</em></h1>
            <p>Three learning strands. Five clear levels each. A practical curriculum children can see, build and be proud of.</p>
            <div className="curriculum-hero-actions">
              <a className="button button-primary" href="#strands">Explore the curriculum <ArrowDownRight size={17} /></a>
              <a className="button button-ghost" href="/#admissions">Ask about admission <ArrowRight size={16} /></a>
            </div>
          </div>
          <aside className="curriculum-hero-card" aria-label="Curriculum structure">
            <div className="curriculum-card-top"><span className="progress-icon"><BookOpen size={17} /></span><div><strong>A clear path forward</strong><p>One level per semester</p></div><span className="level-count">3 × 5</span></div>
            <div className="curriculum-card-stats"><div><strong>03</strong><span>LEARNING STRANDS</span></div><div><strong>15</strong><span>PUBLISHED LEVELS</span></div></div>
            <ol className="curriculum-mini-levels">{levels.map((level, index) => <li key={level}><span className={`level-badge level-${index + 1}`}>L{index + 1}</span><strong>{level}</strong><span className="curriculum-mini-rule" /></li>)}</ol>
            <p className="curriculum-card-foot"><Check size={14} /> The semester exam decides when a child moves up.</p>
          </aside>
          <a className="curriculum-scroll" href="#strands">EXPLORE THE LEARNING PATH <ArrowDownRight size={15} /></a>
        </section>

        <section className="curriculum-intro" id="strands">
          <div><span className="eyebrow"><span className="eyebrow-line" /> ONE ENROLMENT · THREE STRANDS</span><h2>Learn more than one skill.<br /><span>Build a foundation for life.</span></h2></div>
          <p>Every child learns all three strands. Each has its own five levels, focused assignments through the LMS and a written semester exam.</p>
        </section>

        <nav className="strand-nav" aria-label="Jump to a curriculum strand">
          {strands.map(({ id, number, title, icon: Icon, color }) => <a className={`strand-nav-card ${color}`} key={id} href={`#${id}`}><span className="strand-nav-icon"><Icon size={19} /></span><span><small>STRAND {number}</small><strong>{title}</strong></span><ArrowDownRight size={16} /></a>)}
        </nav>

        <section className="strand-list" aria-label="Curriculum levels by strand">
          {strands.map(({ id, number, title, color, icon: Icon, intro, description, topics }) => (
            <article className={`strand-section ${color}`} id={id} key={id}>
              <div className="strand-heading">
                <div className="strand-heading-main"><span className="strand-icon"><Icon size={22} /></span><div><span className="eyebrow">STRAND {number} · FIVE LEVELS</span><h2>{title}</h2></div></div>
                <div className="strand-heading-copy"><strong>{intro}</strong><p>{description}</p></div>
              </div>
              <ol className="level-cards">
                {topics.map((topic, index) => (
                  <li className="level-card" key={`${title}-${topic}`}>
                    <div className="level-card-top"><span className={`level-badge level-${index + 1}`}>L{index + 1}</span><span>0{index + 1} / 05</span></div>
                    <span className="level-card-name">{levels[index]}</span>
                    <h3>{topic}</h3>
                    <div className="level-card-bottom"><span>LEVEL {index + 1}</span><ArrowUpRight size={15} /></div>
                  </li>
                ))}
              </ol>
              <Link className="strand-detail-link" href={`/curriculum/${id}`}>Explore the {title} strand <ArrowRight size={15} /></Link>
            </article>
          ))}
        </section>

        <section className="assessment-section" id="assessment">
          <div className="assessment-mark">80<small>%</small></div>
          <div className="assessment-copy"><span className="eyebrow">PROGRESSION, MADE CLEAR</span><h2>The exam decides.<br /><em>Not the calendar.</em></h2><p>Every three months, a semester exam shows what a child can do. A score of 80% or above moves them to the next level. Below 80%, they repeat the level and are reassessed — no level is skipped.</p></div>
          <div className="assessment-checks"><span><Check size={15} /> One level per semester</span><span><Check size={15} /> Written assessment</span><span><Check size={15} /> Progress you can explain</span></div>
        </section>

        <section className="curriculum-cta">
          <div><span className="eyebrow"><span className="eyebrow-line" /> READY TO BEGIN?</span><h2>See where your child<br /><em>can go from here.</em></h2><p>Meet a mentor, visit a learning center and talk through the five levels with our team.</p></div>
          <div className="curriculum-cta-actions"><a className="button button-primary" href="tel:+8801519575226">Talk to our team <Phone size={16} /></a><a className="button button-outline" href="/#centers">Find a learning center <MapPin size={16} /></a><Link className="text-link" href="/">Back to Edulife Kids home <ArrowRight size={15} /></Link></div>
        </section>
      </main>
      <CurriculumFooter />
    </>
  )
}

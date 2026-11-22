import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  MapPin,
  MessageCircle,
  Monitor,
  Target,
  Users,
} from 'lucide-react'
import { Brand } from '@/components/site-brand'

const milestones = [
  {
    year: '2015',
    title: 'A local beginning',
    description: 'Edulife IT Institute begins sharing practical technology skills in Khagrachari.',
  },
  {
    year: '2022',
    title: 'Edulife Kids takes shape',
    description: 'An after-school program brings coding, English and computer skills to children.',
  },
  {
    year: 'Today',
    title: 'Learning, closer to home',
    description: 'Four learning centers serve families across Khagrachari, with more than 10 mentors supporting learners.',
  },
]

const teamAreas = [
  {
    icon: Code2,
    title: 'Coding mentors',
    description: 'Turn curiosity into projects, from a child’s first webpage to the foundations of Python.',
  },
  {
    icon: MessageCircle,
    title: 'English mentors',
    description: 'Help learners build strong reading, writing and speaking skills with confidence.',
  },
  {
    icon: Monitor,
    title: 'Computer skills mentors',
    description: 'Teach practical digital skills children can use at school and in everyday life.',
  },
  {
    icon: MapPin,
    title: 'Local center teams',
    description: 'Welcome families and keep the learning experience connected to each community.',
  },
]

const nextSteps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Reach more communities',
    description: 'Grow thoughtfully so more children can find a welcoming learning center near home.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Support great mentors',
    description: 'Keep investing in the people who make patient, hands-on learning possible.',
  },
  {
    number: '03',
    icon: Target,
    title: 'Keep learning practical',
    description: 'Give every learner more chances to practise, create and show what they can do.',
  },
]

export function AboutPage() {
  return (
    <div className="about-page contact-page">
      <div className="announcement">
        <span className="announcement-tag"><span className="live-dot" /> ADMISSIONS</span>
        <span>January 2027 intake is open at all four learning centers.</span>
        <a href="/admissions">See how to apply <ArrowUpRight size={14} /></a>
      </div>

      <header className="site-header contact-page-header about-page-header">
        <div className="nav-shell">
          <Brand />
          <nav className="contact-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/#programs">Curriculum</a>
            <a href="/#centers">Learning centers</a>
            <a href="/about" aria-current="page">About us</a>
            <a href="/contact">Contact</a>
          </nav>
          <a className="button button-primary button-nav contact-header-cta" href="/admissions">Apply now <ArrowRight size={15} /></a>
        </div>
      </header>

      <main className="about-page-main">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <a className="about-breadcrumb" href="/">EDULIFE KIDS <span>/</span> OUR STORY</a>
              <h1 id="about-title">A brighter future,<br />built <em>together.</em></h1>
              <p>We bring practical, future-ready learning closer to children in Khagrachari — and grow alongside the communities that make it possible.</p>
              <a className="button button-primary" href="#our-journey">Discover our journey <ArrowRight size={16} /></a>
              <div className="about-hero-proof"><span><strong>2015</strong> Edulife begins locally</span><span><strong>2022</strong> Edulife Kids launches</span></div>
            </div>
            <figure className="about-hero-photo">
              <Image src="/edulife-classroom.png" alt="A mentor guides children as they learn computer skills together." fill priority sizes="(max-width: 760px) 100vw, 52vw" />
              <figcaption><span className="about-photo-mark"><BookOpen size={17} /></span><span><strong>Learning by doing</strong><small>Rooted in Khagrachari</small></span></figcaption>
            </figure>
          </div>
        </section>

        <section className="about-journey" id="our-journey" aria-labelledby="journey-title">
          <div className="about-section-shell">
            <div className="about-section-heading">
              <span className="about-eyebrow"><span /> OUR JOURNEY</span>
              <h2 id="journey-title">One local idea.<br /><em>A growing community.</em></h2>
              <p>Our story is shaped by a simple idea: children should be able to build real skills without having to leave their community to find them.</p>
            </div>
            <ol className="about-timeline">
              {milestones.map((milestone, index) => (
                <li className="about-timeline-item" key={milestone.year}>
                  <span className="about-timeline-index">0{index + 1}</span>
                  <div><span className="about-timeline-year">{milestone.year}</span><h3>{milestone.title}</h3><p>{milestone.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about-founders" aria-labelledby="founders-title">
          <div className="about-founders-inner">
            <div className="about-founders-label"><span className="about-eyebrow"><span /> A NOTE FROM OUR FOUNDERS</span><span className="about-founders-mark" aria-hidden="true">“</span></div>
            <div className="about-founders-copy">
              <h2 id="founders-title">Every child deserves the chance to see what they can become.</h2>
              <p>We started Edulife Kids with a belief that a child’s opportunities should not be limited by where they grow up. Our work is to bring useful skills, caring mentors and high expectations closer to families — and to keep learning from the community we serve.</p>
              <span className="about-founders-signature">The Edulife Kids founding team</span>
            </div>
          </div>
        </section>

        <section className="about-team" aria-labelledby="team-title">
          <div className="about-section-shell">
            <div className="about-team-heading">
              <div><span className="about-eyebrow"><span /> THE PEOPLE BEHIND THE PROGRAM</span><h2 id="team-title">A team that makes<br /><em>learning feel possible.</em></h2></div>
              <p>More than 10 mentors bring the program to life across four learning centers. Different strengths, one shared commitment to every learner.</p>
            </div>
            <div className="about-team-layout">
              <aside className="about-team-aside" aria-label="Edulife Kids team at a glance"><span className="about-team-aside-icon"><Users size={20} /></span><strong>10<span>+</span></strong><h3>mentors, one shared purpose.</h3><p>Our educators bring three learning strands to children across four local centers.</p><div className="about-team-aside-stats"><span><b>04</b> centers</span><span><b>03</b> learning strands</span></div></aside>
              <div className="about-team-grid">
                {teamAreas.map(({ icon: Icon, title, description }, index) => (
                  <article className="about-team-card" key={title}>
                    <div className="about-team-card-top"><span className="about-team-icon"><Icon size={18} /></span><span>0{index + 1}</span></div>
                    <h3>{title}</h3><p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
            <p className="about-team-note">Across every center, our mentors share one purpose: helping each child make steady progress.</p>
          </div>
        </section>

        <section className="about-future" aria-labelledby="future-title">
          <div className="about-section-shell">
            <div className="about-future-heading">
              <div><span className="about-eyebrow"><span /> LOOKING AHEAD</span><h2 id="future-title">The next chapter<br /><em>is still being written.</em></h2></div>
              <p>We want to grow with care: keeping the learning personal, the standards clear and the doors open to more children.</p>
            </div>
            <div className="about-future-grid">
              {nextSteps.map(({ number, icon: Icon, title, description }) => (
                <article className="about-future-card" key={number}>
                  <div className="about-future-card-top"><span>{number}</span><Icon size={19} /></div>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta" aria-labelledby="about-cta-title">
          <div><span className="about-eyebrow"><span /> GROW WITH US</span><h2 id="about-cta-title">Every good journey starts with a conversation.</h2><p>Ask about our program, meet a mentor or tell us what your community needs.</p></div>
          <div className="about-cta-actions"><a className="button button-primary" href="/contact">Talk with our team <ArrowRight size={16} /></a><a className="about-cta-secondary" href="/admissions">Explore admissions <ArrowUpRight size={15} /></a></div>
        </section>
      </main>

      <footer className="site-footer contact-page-footer about-page-footer">
        <div className="footer-main">
          <div className="footer-brand"><Brand /><p>Skills for Life. Confidence for Tomorrow. An initiative of Edulife IT Institute, working in Khagrachari since 2015.</p><a className="footer-call" href="tel:+8801816575225">Talk to our team <ArrowUpRight size={14} /></a></div>
          <div className="footer-links"><div><span>EXPLORE</span><a href="/">Home</a><a href="/about">About us</a><a href="/#programs">Programs</a><a href="/#centers">Learning centers</a><a href="/admissions">Admissions</a></div><div><span>GET IN TOUCH</span><a href="tel:+8801816575225">01816-575225</a><a href="mailto:helloedulife@gmail.com">helloedulife@gmail.com</a><a href="https://www.facebook.com/edulifekids" target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={12} /></a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Edulife Kids — After School Program</span><span>Made with care in Khagrachari</span><a href="#about-title">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

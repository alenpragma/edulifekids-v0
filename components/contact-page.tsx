import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Brand } from '@/components/site-brand'

const contactMethods = [
  {
    label: 'CALL OUR TEAM',
    value: '01816-575225',
    href: 'tel:+8801816575225',
    icon: Phone,
  },
  {
    label: 'ALSO REACH US AT',
    value: '01519-575225',
    href: 'tel:+8801519575225',
    icon: Phone,
  },
  {
    label: 'EMAIL US',
    value: 'helloedulife@gmail.com',
    href: 'mailto:helloedulife@gmail.com',
    icon: Mail,
  },
  {
    label: 'PROGRAM ENQUIRIES',
    value: 'info@edulifekids.com',
    href: 'mailto:info@edulifekids.com',
    icon: Mail,
  },
]

const learningCenters = [
  { name: 'Shantinagar Learning Center', area: 'KHAGRACHARI SADAR', address: 'Shantinagar, Khagrachari Sadar' },
  { name: 'Babupara Learning Center', area: 'MATIRANGA', address: 'Babupara, Matiranga Sadar' },
  { name: 'Upozila Chattar Learning Center', area: 'LUXMICHARI', address: 'Upozila Chattar, Luxmichari' },
  { name: 'Ramsu Bazar Learning Center', area: 'GUIMARA', address: 'Ramsu Bazar, Guimara Sadar' },
]

export function ContactPage() {
  return (
    <div className="contact-page">
      <div className="announcement">
        <span className="announcement-tag"><span className="live-dot" /> ADMISSIONS</span>
        <span>January 2027 intake is open at all four learning centers.</span>
        <a href="/admissions">See how to apply <ArrowUpRight size={14} /></a>
      </div>

      <header className="site-header contact-page-header">
        <div className="nav-shell">
          <Brand />
          <nav className="contact-nav" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/#programs">Curriculum</a>
            <a href="/#centers">Learning centers</a>
            <a href="/about">About us</a>
            <a href="/contact" aria-current="page">Contact</a>
          </nav>
          <a className="button button-primary button-nav contact-header-cta" href="/admissions">Apply now <ArrowRight size={15} /></a>
        </div>
      </header>

      <main>
        <section className="contact-hero" aria-labelledby="contact-title">
          <div className="contact-hero-inner">
            <div className="contact-hero-copy">
              <span className="contact-eyebrow"><span className="eyebrow-line" /> EDULIFE KIDS · KHAGRACHARI</span>
              <h1 id="contact-title">Let&apos;s talk about your child&apos;s <em>next step.</em></h1>
              <p>Have a question about classes, admissions, or finding the right center? Our local team is here to help your family get started.</p>
              <div className="contact-hero-actions">
                <a className="button button-primary" href="tel:+8801816575225"><Phone size={16} /> Call our team</a>
                <a className="contact-hero-link" href="#learning-centers">Find a learning center <ArrowRight size={16} /></a>
              </div>
              <div className="contact-response-note"><span className="live-dot" /> Admissions are open for January 2027</div>
            </div>

            <aside className="contact-details-card" aria-labelledby="contact-details-title">
              <div className="contact-card-heading">
                <span>HERE WHEN YOU NEED US</span>
                <h2 id="contact-details-title">Talk with our team</h2>
              </div>
              <div className="contact-method-list">
                {contactMethods.map(({ label, value, href, icon: Icon }) => (
                  <a className="contact-method" href={href} key={value}>
                    <span className="contact-method-icon"><Icon size={17} /></span>
                    <span className="contact-method-copy"><small>{label}</small><strong>{value}</strong></span>
                    <ArrowUpRight className="contact-method-arrow" size={15} />
                  </a>
                ))}
              </div>
              <div className="contact-hours"><Clock3 size={17} /><span><strong>Saturday – Thursday</strong><small>9:00 AM – 6:00 PM</small></span></div>
            </aside>
          </div>
        </section>

        <section className="contact-centers" id="learning-centers" aria-labelledby="centers-title">
          <div className="contact-section-heading">
            <div>
              <span className="eyebrow"><span className="eyebrow-line" /> COME SAY HELLO</span>
              <h2 id="centers-title">Four local centers.<br /><span>One full program.</span></h2>
            </div>
            <p>Every center offers the complete Edulife Kids program: Coding, English, and Computer Skills, taught together across five levels.</p>
          </div>

          <div className="contact-center-grid">
            {learningCenters.map(({ name, area, address }, index) => (
              <article className="contact-center-card" key={name}>
                <div className="contact-center-top"><span>{area}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
                <span className="contact-center-icon"><MapPin size={18} /></span>
                <h3>{name}</h3>
                <p>{address}</p>
                <a href="/admissions">Ask us about this center <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-next-step" aria-labelledby="contact-next-title">
          <div>
            <span className="contact-next-label">A GOOD PLACE TO START</span>
            <h2 id="contact-next-title">Not sure which center is right?</h2>
            <p>Tell us a little about your child and where you live. We&apos;ll help you find the nearest center and explain what happens next.</p>
          </div>
          <a className="button button-primary" href="/admissions">Explore admissions <ArrowRight size={16} /></a>
        </section>
      </main>

      <footer className="site-footer contact-page-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
            <p>Skills for Life. Confidence for Tomorrow. An initiative of Edulife IT Institute, working in Khagrachari since 2015.</p>
            <a className="footer-call" href="tel:+8801816575225"><Phone size={15} /> Talk to our team <ArrowUpRight size={14} /></a>
          </div>
          <div className="footer-links">
            <div><span>EXPLORE</span><a href="/">Home</a><a href="/about">About us</a><a href="/#programs">Programs</a><a href="/#centers">Learning centers</a><a href="/admissions">Admissions</a></div>
            <div><span>GET IN TOUCH</span><a href="tel:+8801816575225">01816-575225</a><a href="mailto:helloedulife@gmail.com">helloedulife@gmail.com</a><a href="https://www.facebook.com/edulifekids" target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={12} /></a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Edulife Kids — After School Program</span><span>Made with care in Khagrachari</span><a href="#contact-title">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

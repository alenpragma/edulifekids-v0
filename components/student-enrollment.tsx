'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, LockKeyhole, ShieldAlert } from 'lucide-react'

function PortalHeader({ current }: { current: 'admissions' | 'login' }) {
  return (
    <header className="portal-header">
      <Link className="portal-brand" href="/" aria-label="Edulife Kids home">
        <span className="portal-brand-mark" aria-hidden="true"><BookOpen size={19} /></span>
        <span><strong>Edulife Kids</strong><small>AFTER SCHOOL PROGRAM</small></span>
      </Link>
      <nav className="portal-nav" aria-label="Student services">
        {current === 'admissions' ? (
          <Link href="/student-login">Student login <ArrowRight size={15} /></Link>
        ) : (
          <Link href="/admissions">Apply for admission <ArrowRight size={15} /></Link>
        )}
      </nav>
    </header>
  )
}

export function AdmissionApplication() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('Preview only: your details were not sent or saved. Connect an application backend before collecting real student information.')
  }

  return (
    <div className="portal-page">
      <PortalHeader current="admissions" />
      <main className="portal-main portal-admissions">
        <section className="portal-intro" aria-labelledby="admission-title">
          <Link className="portal-back" href="/"><ArrowLeft size={15} /> Back to Edulife Kids</Link>
          <span className="portal-eyebrow"><span /> JANUARY 2027 INTAKE</span>
          <h1 id="admission-title">A great next step starts <em>here.</em></h1>
          <p>Tell us a little about your child. Our Khagrachari team will follow up to talk through the program and next steps.</p>
          <div className="portal-note">
            <GraduationCap size={19} />
            <span><strong>What happens next?</strong><small>Our team reviews each enquiry and contacts a parent or guardian directly.</small></span>
          </div>
          <div className="portal-preview-warning"><ShieldAlert size={17} /><span>Preview only — details are not sent or saved. Don’t enter real student information yet.</span></div>
        </section>

        <section className="portal-card" aria-labelledby="application-form-title">
          <div className="portal-card-heading">
            <span className="portal-step">STUDENT ENQUIRY <span>·</span> 01</span>
            <h2 id="application-form-title">Student information</h2>
            <p>Fields marked with <b aria-hidden="true">*</b> are required.</p>
          </div>
          <form className="portal-form" onSubmit={handleSubmit} aria-describedby="application-preview-notice">
            <div className="portal-fields">
              <label className="portal-field"><span>Student name <b aria-hidden="true">*</b></span><input name="studentName" autoComplete="name" placeholder="Student’s full name" required /></label>
              <label className="portal-field"><span>Parent or guardian name <b aria-hidden="true">*</b></span><input name="parentName" autoComplete="off" placeholder="Parent or guardian’s full name" required /></label>
              <label className="portal-field"><span>School name <b aria-hidden="true">*</b></span><input name="schoolName" autoComplete="organization" placeholder="Current school" required /></label>
              <label className="portal-field"><span>Class <b aria-hidden="true">*</b></span><input name="className" placeholder="e.g. Class 5" required /></label>
              <label className="portal-field"><span>Student age <b aria-hidden="true">*</b></span><input name="age" type="number" inputMode="numeric" min="4" max="20" placeholder="Age in years" required /></label>
              <label className="portal-field"><span>District <b aria-hidden="true">*</b></span><input name="district" autoComplete="address-level2" placeholder="District name" required /></label>
              <label className="portal-field portal-field-wide"><span>Preferred learning center <b aria-hidden="true">*</b></span><select name="learningCenter" defaultValue="" required><option value="" disabled>Select a learning center</option><option value="shantinagar">Shantinagar Learning Center — Khagrachari Sadar</option><option value="babupara">Babupara Learning Center — Matiranga Sadar</option><option value="luxmichari">Upozila Chattar Learning Center — Luxmichari</option><option value="guimara">Ramsu Bazar Learning Center — Guimara Sadar</option><option value="no-center-near-me">No center near me</option></select></label>
              <label className="portal-field portal-field-wide"><span>Home address <b aria-hidden="true">*</b></span><textarea name="address" autoComplete="street-address" rows={3} placeholder="Village, area, or full address" required /></label>
              <label className="portal-field portal-field-wide"><span>Parent or guardian WhatsApp number <b aria-hidden="true">*</b></span><input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 01812 345678" required /></label>
            </div>
            <label className="portal-consent"><input type="checkbox" required /><span>I am the student’s parent or guardian and agree that Edulife Kids may contact me about this enquiry.</span></label>
            <button className="portal-submit" type="submit">Submit application <ArrowRight size={17} /></button>
            <p className="portal-form-notice" id="application-preview-notice">Preview only — submitting will not transmit or retain this information.</p>
            <p className="portal-status" role="status" aria-live="polite">{status}</p>
          </form>
        </section>
      </main>
    </div>
  )
}

export function StudentLogin() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('Student sign-in is not connected in this preview. Your password was not checked.')
  }

  return (
    <div className="portal-page">
      <PortalHeader current="login" />
      <main className="portal-main portal-login-main">
        <section className="login-story" aria-labelledby="login-title">
          <Link className="portal-back" href="/"><ArrowLeft size={15} /> Back to Edulife Kids</Link>
          <span className="portal-eyebrow"><span /> YOUR LEARNING JOURNEY</span>
          <h1 id="login-title">Welcome back to <em>Edulife.</em></h1>
          <p>Once you’ve joined the program, sign in with the student ID or WhatsApp number shared by our team.</p>
          <div className="login-story-mark" aria-hidden="true"><BookOpen size={29} /><span>Learn something.<br />Build something.</span></div>
        </section>
        <section className="portal-card login-card" aria-labelledby="login-form-title">
          <div className="portal-card-heading">
            <span className="portal-step">STUDENT PORTAL</span>
            <h2 id="login-form-title">Student sign in</h2>
            <p>Use your student ID or registered WhatsApp number.</p>
          </div>
          <form className="portal-form" onSubmit={handleSubmit}>
            <div className="portal-fields portal-fields-single">
              <label className="portal-field"><span>Student ID or WhatsApp number</span><input name="identifier" autoComplete="username" placeholder="Enter your ID or phone number" required /></label>
              <label className="portal-field"><span>Password</span><input name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required /></label>
            </div>
            <button className="portal-submit" type="submit"><LockKeyhole size={16} /> Sign in</button>
            <p className="portal-form-notice">Your team will share login details after your child joins the program.</p>
            <p className="portal-status" role="status" aria-live="polite">{status}</p>
          </form>
          <div className="login-help"><span>Not enrolled yet?</span><Link href="/admissions">Start an admission enquiry <ArrowRight size={14} /></Link></div>
        </section>
      </main>
    </div>
  )
}

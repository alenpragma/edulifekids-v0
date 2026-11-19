'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BookOpen, Check, Code2, Laptop, Lightbulb, Phone } from 'lucide-react'
import { CurriculumFooter, CurriculumHeader } from '@/components/curriculum-page'
import { SubjectBanner } from '@/components/subject-banner'

const subjects = {
  coding: {
    title: 'Coding',
    number: '01',
    color: 'blue',
    icon: Code2,
    kicker: 'FROM A FIRST HEADING TO A WORKING BACKEND',
    headline: 'Make an idea\nwork on screen.',
    intro: 'A practical coding journey that starts with the building blocks of the web and grows into real applications, Python and backend foundations.',
    topics: ['HTML', 'CSS', 'Advanced CSS & Web Application Design', 'Python', 'Database, API, Architecture & Backend'],
    outcomes: ['Build a first web page with structure and meaning.', 'Style a page and understand how the web is put together.', 'Design responsive interfaces and combine pages into an application.', 'Use Python to solve problems and automate simple tasks.', 'Connect data, APIs and backend concepts into a working project.'],
    project: 'A personal portfolio website',
    levelDetails: [
      {
        level: 1,
        title: 'Foundation',
        focus: 'HTML',
        description: 'Introduction to web basics and semantic markup',
        topics: ['What is HTML?', 'Tags and elements', 'Document structure (DOCTYPE, html, head, body)', 'Common tags (p, div, span, heading tags)', 'Links and navigation', 'Lists and tables basics', 'Forms and input fields'],
        skills: ['Write semantic HTML', 'Create linked web pages', 'Use proper heading hierarchy', 'Build a simple multi-page site'],
        project: 'Create a personal information page with links to multiple sections',
      },
      {
        level: 2,
        title: 'Building',
        focus: 'CSS & Styling',
        description: 'Master styling and layout fundamentals',
        topics: ['CSS selectors and specificity', 'Box model (margin, padding, border)', 'Flexbox layout basics', 'Colors, fonts and typography', 'Positioning (static, relative, absolute)', 'Responsive design basics', 'CSS media queries'],
        skills: ['Create layouts with Flexbox', 'Style multiple pages consistently', 'Build responsive designs', 'Use CSS variables for theming'],
        project: 'Build a responsive portfolio site with styled pages for projects and about',
      },
      {
        level: 3,
        title: 'Designing',
        focus: 'Advanced CSS & Web Applications',
        description: 'Build interactive web applications with modern CSS',
        topics: ['CSS Grid for complex layouts', 'Animations and transitions', 'CSS transforms', 'Mobile-first design', 'Component-based styling', 'CSS frameworks introduction (Tailwind basics)', 'Web accessibility (WCAG basics)'],
        skills: ['Design complex grid layouts', 'Create animated user experiences', 'Build accessible components', 'Use design systems and frameworks'],
        project: 'Design a complete web application UI with multiple interactive components and animations',
      },
      {
        level: 4,
        title: 'Reasoning',
        focus: 'Python Programming',
        description: 'Learn programming logic and problem-solving',
        topics: ['Variables and data types', 'Conditionals (if, else, elif)', 'Loops (for, while)', 'Functions and parameters', 'Lists, dictionaries, sets', 'String manipulation', 'File handling', 'Debugging and error handling'],
        skills: ['Write logical Python programs', 'Debug code systematically', 'Work with data structures', 'Solve algorithmic problems'],
        project: 'Build a Python application that processes and analyzes data',
      },
      {
        level: 5,
        title: 'Applying',
        focus: 'Backend & Full Stack',
        description: 'Connect frontend and backend into complete systems',
        topics: ['Introduction to APIs', 'REST API concepts', 'Working with databases (SQL basics)', 'Backend frameworks introduction', 'Authentication and security basics', 'Deployment and hosting', 'Version control with Git'],
        skills: ['Consume and build APIs', 'Work with databases', 'Deploy web applications', 'Understand full-stack development'],
        project: 'Build a complete full-stack application with frontend, API, and database',
      },
    ],
  },
  english: {
    title: 'English',
    number: '02',
    color: 'teal',
    icon: BookOpen,
    kicker: 'PHONETICS FIRST. THEN THE CONFIDENCE TO SPEAK.',
    headline: 'Find your voice.\nShare your ideas.',
    intro: 'A confidence-building language path rooted in phonetics. Learners move from accurate sounds and reading to writing, debate and clear presentations.',
    topics: ['Phonetics & Reading', 'Phonetics, Reading & Speaking', 'Advanced Phonetics, Reading & Public Speaking', 'Advanced Phonetics, Writing & Public Speaking', 'Language Club, Debate, Interview & Presentation'],
    outcomes: ['Recognize letter sounds and read simple words with confidence.', 'Grow reading fluency and use spoken English in everyday situations.', 'Read aloud clearly and speak to a group with growing confidence.', 'Organize ideas in writing and deliver structured presentations.', 'Practice debate, interviews and persuasive communication.'],
    project: 'A short speech on a topic they care about',
    levelDetails: [
      {
        level: 1,
        title: 'Foundation',
        focus: 'Phonetics & Reading',
        description: 'Build strong foundations with letter sounds and word recognition',
        topics: ['Phonetic alphabet (single sounds)', 'Consonant and vowel sounds', 'Blending sounds into words', 'High-frequency words', 'Simple sight words', 'Short vowel patterns', 'Beginning reading comprehension'],
        skills: ['Recognize and produce letter sounds accurately', 'Read simple three-letter words', 'Understand basic story concepts', 'Develop phonemic awareness'],
        project: 'Read aloud a simple story and answer comprehension questions',
      },
      {
        level: 2,
        title: 'Building',
        focus: 'Phonetics, Reading & Speaking',
        description: 'Expand reading skills and begin confident speaking',
        topics: ['Long vowel sounds', 'Common word families', 'Digraphs (ch, sh, th, wh)', 'Longer words and syllables', 'Reading fluency practice', 'Spoken vocabulary building', 'Basic conversation patterns'],
        skills: ['Read longer sentences fluently', 'Engage in simple conversations', 'Understand story sequence', 'Speak clearly and confidently in class'],
        project: 'Prepare and deliver a show-and-tell presentation about a favorite object',
      },
      {
        level: 3,
        title: 'Designing',
        focus: 'Advanced Phonetics, Reading & Public Speaking',
        description: 'Master pronunciation and present ideas to groups',
        topics: ['Complex phonetic patterns', 'Silent letters and irregular patterns', 'Reading comprehension strategies', 'Inference and prediction', 'Public speaking basics', 'Presentation structure', 'Audience awareness'],
        skills: ['Read complex texts with understanding', 'Speak to a group confidently', 'Use tone and pacing effectively', 'Understand author purpose and tone'],
        project: 'Deliver a 2-3 minute presentation on a topic of interest to a live audience',
      },
      {
        level: 4,
        title: 'Reasoning',
        focus: 'Advanced Phonetics, Writing & Public Speaking',
        description: 'Develop writing skills and persuasive speaking',
        topics: ['Advanced pronunciation patterns', 'Written composition basics', 'Sentence structure and grammar', 'Paragraph organization', 'Note-taking and summarizing', 'Persuasive speaking techniques', 'Formal and informal register'],
        skills: ['Write organized multi-paragraph pieces', 'Deliver persuasive speeches', 'Support ideas with evidence', 'Adjust language for different audiences'],
        project: 'Write and present a persuasive essay on a topic important to them',
      },
      {
        level: 5,
        title: 'Applying',
        focus: 'Language Club, Debate & Presentation',
        description: 'Master advanced communication in real-world contexts',
        topics: ['Debate structure and argumentation', 'Interview skills and techniques', 'Advanced presentation design', 'Professional communication', 'Oral storytelling', 'Panel discussions', 'Crisis communication basics'],
        skills: ['Construct logical arguments', 'Handle interviews professionally', 'Engage in debate confidently', 'Master cross-cultural communication'],
        project: 'Participate in a formal debate on a contemporary issue',
      },
    ],
  },
  'computer-skills': {
    title: 'Computer Skills',
    number: '03',
    color: 'violet',
    icon: Laptop,
    kicker: 'THE TOOLS SCHOOL AND WORK ACTUALLY EXPECT',
    headline: 'Use technology\nwith confidence.',
    intro: 'Students gain the everyday digital confidence to learn and create, then put productivity tools, design, spreadsheets and responsible AI to practical use.',
    topics: ['Basic Computer & Typing', 'Advanced MS Word', 'Creative Design with MS PowerPoint', 'Logic & Mathematics with MS Excel', 'CV Writing, Internet & AI'],
    outcomes: ['Use a computer safely and build accurate typing habits.', 'Format clear, professional documents in Word.', 'Plan and present a visual story with PowerPoint.', 'Use formulas, tables and logic to work with information in Excel.', 'Create a CV and explore useful, responsible internet and AI tools.'],
    project: 'A polished presentation or digital portfolio',
    levelDetails: [
      {
        level: 1,
        title: 'Foundation',
        focus: 'Computer Basics & Typing',
        description: 'Develop safe computer habits and typing fundamentals',
        topics: ['Computer hardware components', 'Operating system basics (Windows/Mac)', 'File and folder management', 'Mouse and keyboard skills', 'Touch typing technique', 'Typing speed and accuracy drills', 'Internet safety basics'],
        skills: ['Navigate desktop and applications', 'Type with proper finger placement', 'Create and organize folders', 'Understand basic internet safety rules'],
        project: 'Practice typing lessons and create an organized folder structure',
      },
      {
        level: 2,
        title: 'Building',
        focus: 'Advanced MS Word',
        description: 'Create professional documents with formatting and style',
        topics: ['Document formatting (fonts, sizes, colors)', 'Paragraph styles and alignment', 'Headers and footers', 'Lists and numbering', 'Tables and borders', 'Graphics and image insertion', 'Mail merge basics'],
        skills: ['Format documents professionally', 'Create styled text documents', 'Insert and position graphics', 'Work with tables and columns'],
        project: 'Create a formatted multi-page document (school project, essay, or report)',
      },
      {
        level: 3,
        title: 'Designing',
        focus: 'Creative Design with MS PowerPoint',
        description: 'Build engaging visual presentations',
        topics: ['Slide design principles', 'Master slides and layouts', 'Adding text, images and multimedia', 'Transitions and animations', 'Themes and color schemes', 'Presenter notes and speaker view', 'Presentation delivery techniques'],
        skills: ['Design visually appealing slides', 'Use multimedia effectively', 'Create consistent branded presentations', 'Present with confidence'],
        project: 'Create and deliver a 10-15 slide presentation on a topic with animations and multimedia',
      },
      {
        level: 4,
        title: 'Reasoning',
        focus: 'Logic & Mathematics with MS Excel',
        description: 'Master data analysis and spreadsheet functions',
        topics: ['Spreadsheet structure and navigation', 'Data entry and validation', 'Formulas and functions (SUM, AVERAGE, IF, VLOOKUP)', 'Absolute and relative references', 'Charts and data visualization', 'Sorting and filtering', 'Conditional formatting'],
        skills: ['Create complex formulas', 'Analyze data with charts', 'Use logical functions', 'Build data dashboards'],
        project: 'Build a spreadsheet that tracks and analyzes data with charts and formulas',
      },
      {
        level: 5,
        title: 'Applying',
        focus: 'CV Writing, Internet & AI',
        description: 'Master professional digital skills and responsible technology use',
        topics: ['CV and resume writing', 'LinkedIn profile creation', 'Email etiquette and professional communication', 'Online research and evaluation', 'Introduction to AI tools and ethics', 'Cybersecurity and privacy', 'Digital citizenship and responsibility'],
        skills: ['Create a professional CV', 'Build online presence', 'Evaluate online information critically', 'Understand AI capabilities and limitations', 'Protect personal data online'],
        project: 'Create a professional CV, LinkedIn profile, and research essay on AI ethics',
      },
    ],
  },
}

type SubjectSlug = keyof typeof subjects

export function SubjectDetailPage({ slug }: { slug: SubjectSlug }) {
  const subject = subjects[slug]
  const otherSubjects = Object.entries(subjects).filter(([key]) => key !== slug)

  return (
    <>
      <CurriculumHeader />
      <main className={`subject-page ${subject.color}`}>
        <SubjectBanner slug={slug} subject={subject} />

        <section className="subject-intro section">
          <div><span className="eyebrow"><span className="eyebrow-line" /> A PRACTICAL PATH FORWARD</span><h2>Five levels.<br /><span>Progress you can see.</span></h2></div>
          <div className="subject-intro-copy"><p>{subject.intro} Each level is taught over a semester, supported with focused LMS assignments, and assessed before a learner moves forward.</p><div className="subject-outcome"><Lightbulb size={19} /><span><small>THE BIG PICTURE</small><strong>{subject.project}</strong></span></div></div>
        </section>

        <section className="subject-levels" aria-label={`${subject.title} level details`}>
          <div className="subject-levels-heading"><span className="eyebrow">THE LEARNING PATH</span><h2>From first steps<br />to <em>real-world skill.</em></h2></div>
          <ol className="subject-level-list">{subject.levelDetails.map((detail) => <li key={detail.level} className="subject-level-card"><div className="subject-level-card-top"><span className={`level-badge level-${detail.level}`}>L{detail.level}</span><span>LEVEL {detail.level} / 05</span></div><h3>{detail.title}</h3><h4>{detail.focus}</h4><p className="level-description">{detail.description}</p><div className="level-topics"><span className="topics-label">Key Topics</span><ul className="topics-list">{detail.topics.map((t) => <li key={t}>{t}</li>)}</ul></div><div className="level-skills"><span className="skills-label">Students Will</span><ul className="skills-list">{detail.skills.map((s) => <li key={s}><Check size={14} /> {s}</li>)}</ul></div><div className="level-project"><strong>Capstone Project</strong> {detail.project}</div><div className="subject-level-bottom"><span><Check size={14} /> PRACTICE-LED LEARNING</span><span>0{detail.level}</span></div></li>)}</ol>
        </section>

        <section className="subject-assessment">
          <div className="subject-assessment-score">80<small>%</small></div><div><span className="eyebrow">PROGRESSION, MADE CLEAR</span><h2>The exam decides.<br /><em>Not the calendar.</em></h2><p>Every semester, learners show what they can do in a written assessment. Scoring 80% or above moves them to the next level. Below 80%, they repeat and are reassessed, so no one is rushed ahead.</p></div><div className="subject-assessment-points"><span><Check size={15} /> One level per semester</span><span><Check size={15} /> Clear learning goals</span><span><Check size={15} /> Progress you can explain</span></div>
        </section>

        <section className="subject-next section" id="subject-list"><div><span className="eyebrow"><span className="eyebrow-line" /> MORE TO EXPLORE</span><h2>Every child learns<br /><span>all three strands.</span></h2></div><div className="subject-next-cards">{otherSubjects.map(([key, other]) => { const OtherIcon = other.icon; return <Link className={`subject-next-card ${other.color}`} href={`/curriculum/${key}`} key={key}><span><OtherIcon size={18} /></span><small>STRAND {other.number}</small><strong>{other.title}</strong><ArrowUpRight size={16} /></Link> })}</div></section>

        <section className="subject-cta"><span className="eyebrow">READY TO BEGIN?</span><h2>Give your child room<br /><em>to grow.</em></h2><p>Talk to our team, visit a learning center and find the right starting point.</p><div><a className="button button-primary" href="tel:+8801519575226">Talk to our team <Phone size={16} /></a><Link className="button subject-ghost" href="#subject-list">Explore the other subjects <ArrowRight size={16} /></Link></div></section>
      </main>
      <CurriculumFooter />
    </>
  )
}

export const subjectSlugs = Object.keys(subjects) as SubjectSlug[]

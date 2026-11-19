import Link from 'next/link'
import { ArrowLeft, ArrowRight, type LucideIcon } from 'lucide-react'

export type SubjectBannerContent = {
  title: string
  number: string
  icon: LucideIcon
  kicker: string
  headline: string
  intro: string
}

type SubjectBannerProps = {
  slug: string
  subject: SubjectBannerContent
}

const codeLines = [
  '<section class="portfolio">',
  '  <h1>Hello, world</h1>',
  '  <p>My first web page.</p>',
  '</section>',
]

const soundChips = [
  { sound: '/æ/', word: 'cat' },
  { sound: '/sh/', word: 'ship' },
  { sound: '/th/', word: 'thin' },
  { sound: '/ɒ/', word: 'hot' },
  { sound: '/eɪ/', word: 'cake' },
  { sound: '/ŋ/', word: 'sing' },
]

const toolTiles = [
  { label: 'Typing & internet safety', level: 'LEVEL 1' },
  { label: 'MS Word', level: 'LEVEL 2' },
  { label: 'MS PowerPoint', level: 'LEVEL 3' },
  { label: 'MS Excel', level: 'LEVEL 4' },
  { label: 'CV, internet & AI', level: 'LEVEL 5' },
]

function BannerVisual({ slug }: { slug: string }) {
  if (slug === 'coding') {
    return (
      <div className="code-window">
        <div className="code-window-bar">
          <span className="code-dot code-dot-red" />
          <span className="code-dot code-dot-amber" />
          <span className="code-dot code-dot-green" />
          <span className="code-window-file">index.html</span>
        </div>
        <pre>
          <code>
            {codeLines.map((line) => (
              <span className="code-line" key={line}>{line}</span>
            ))}
          </code>
        </pre>
        <p className="code-window-footer">Your first page, built in Level 1 of 5.</p>
      </div>
    )
  }

  if (slug === 'english') {
    return (
      <ul className="sound-grid" aria-label="Sounds practised in phonetics lessons">
        {soundChips.map((chip) => (
          <li className="sound-chip" key={chip.sound}>
            <strong>{chip.sound}</strong>
            <span>{chip.word}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="tool-tiles" aria-label="Tools taught in each level">
      {toolTiles.map((tile) => (
        <li className="tool-tile" key={tile.label}>
          <small>{tile.level}</small>
          <strong>{tile.label}</strong>
        </li>
      ))}
    </ul>
  )
}

export function SubjectBanner({ slug, subject }: SubjectBannerProps) {
  const Icon = subject.icon

  return (
    <section className={`subject-banner banner-${slug}`}>
      <div className="subject-banner-copy">
        <div className="curriculum-breadcrumb">
          <Link href="/">HOME</Link>
          <ArrowRight size={12} />
          <Link href="/#programs">SUBJECTS</Link>
          <ArrowRight size={12} />
          <span>{subject.title.toUpperCase()}</span>
        </div>
        <span className="eyebrow">
          <span className="eyebrow-line" /> STRAND {subject.number} · FIVE LEVELS
        </span>
        <h1>
          {subject.headline.split('\n').map((line, index) => (
            <span key={line}>
              {index === 1 ? <em>{line}</em> : line}
              <br />
            </span>
          ))}
        </h1>
        <p>{subject.intro}</p>
        <div className="subject-hero-actions">
          <a className="button button-primary" href="/#admissions">
            Ask about enrollment <ArrowRight size={16} />
          </a>
          <Link className="button subject-ghost" href="/#programs">
            <ArrowLeft size={15} /> Back to subjects
          </Link>
        </div>
        <div className="subject-kicker">
          <Icon size={18} />
          <span>{subject.kicker}</span>
        </div>
      </div>
      <BannerVisual slug={slug} />
    </section>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SubjectDetailPage } from '@/components/subject-detail-page'

const subjectSlugs = ['coding', 'english', 'computer-skills'] as const

export const dynamicParams = false

export function generateStaticParams() {
  return subjectSlugs.map((subject) => ({ subject }))
}

const pageMetadata: Record<string, Metadata> = {
  coding: { title: 'Coding Curriculum | Edulife Kids', description: 'Explore five practical coding levels, from HTML and CSS to Python, APIs and backend foundations.' },
  english: { title: 'English Curriculum | Edulife Kids', description: 'Explore five English levels built around phonetics, reading, speaking, writing, debate and presentation.' },
  'computer-skills': { title: 'Computer Skills Curriculum | Edulife Kids', description: 'Explore five computer skills levels, from typing and Word to Excel, CV writing, internet and AI.' },
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject } = await params
  return pageMetadata[subject] ?? { title: 'Curriculum | Edulife Kids' }
}

export default async function Page({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params
  if (!subjectSlugs.includes(subject as (typeof subjectSlugs)[number])) notFound()
  return <SubjectDetailPage slug={subject as (typeof subjectSlugs)[number]} />
}

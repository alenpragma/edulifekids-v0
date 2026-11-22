import type { Metadata } from 'next'
import { AboutPage } from '@/components/about-page'

export const metadata: Metadata = {
  title: 'About Edulife Kids | Our Story, Team & Vision',
  description: 'Discover the Edulife Kids journey in Khagrachari, the people behind the program and our hopes for the future of learning.',
}

export default function Page() {
  return <AboutPage />
}

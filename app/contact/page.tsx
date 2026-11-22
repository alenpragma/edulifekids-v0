import type { Metadata } from 'next'
import { ContactPage } from '@/components/contact-page'

export const metadata: Metadata = {
  title: 'Contact Edulife Kids | Khagrachari',
  description: 'Contact the Edulife Kids team in Khagrachari, find your nearest learning center, and ask about admissions for the January 2027 intake.',
}

export default function Page() {
  return <ContactPage />
}

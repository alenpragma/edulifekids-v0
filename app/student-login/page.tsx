import type { Metadata } from 'next'
import { StudentLogin } from '@/components/student-enrollment'

export const metadata: Metadata = {
  title: 'Student Sign In | Edulife Kids',
  description: 'Sign in to the Edulife Kids student portal with your student ID or registered WhatsApp number.',
}

export default function StudentLoginPage() {
  return <StudentLogin />
}

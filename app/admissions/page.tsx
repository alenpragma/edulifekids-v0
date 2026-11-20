import type { Metadata } from 'next'
import { AdmissionApplication } from '@/components/student-enrollment'

export const metadata: Metadata = {
  title: 'Admission Enquiry | Edulife Kids',
  description: 'Share your child’s details with Edulife Kids in Khagrachari and our team will follow up with your family.',
}

export default function AdmissionsPage() {
  return <AdmissionApplication />
}

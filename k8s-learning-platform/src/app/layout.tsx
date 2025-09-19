import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Sidebar } from '@/components/sidebar'
import MobileLayout from '@/components/mobile-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kubernetes Learning Platform - Master CKA, Helm, Operators & Prometheus',
  description: 'Comprehensive Kubernetes learning platform covering CKA certification, Helm package management, Kubernetes Operators, and Prometheus monitoring with hands-on examples and tutorials.',
  keywords: ['Kubernetes', 'CKA', 'Helm', 'Operators', 'Prometheus', 'DevOps', 'Container Orchestration', 'Learning'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileLayout>
          {children}
        </MobileLayout>
      </body>
    </html>
  )
}

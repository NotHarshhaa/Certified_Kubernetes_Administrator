'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { Navigation } from '@/components/navigation'

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const handleMobileSidebarClose = () => {
    setIsMobileSidebarOpen(false)
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar 
        isMobileOpen={isMobileSidebarOpen} 
        onMobileClose={handleMobileSidebarClose} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navigation 
          onMobileMenuToggle={handleMobileMenuToggle} 
          isMobileMenuOpen={isMobileSidebarOpen}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-3 md:px-6 py-4 md:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

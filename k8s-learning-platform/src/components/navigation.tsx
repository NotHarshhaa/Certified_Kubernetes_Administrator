'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Menu, Github, ExternalLink, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Navigation({ onMobileMenuToggle }: { onMobileMenuToggle?: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    onMobileMenuToggle?.()
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-3 md:px-6 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden h-8 w-8"
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
            <Link href="/" className="flex items-center space-x-1 md:space-x-2">
              <div className="h-6 w-6 md:h-8 md:w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm">K8s</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-900">Kubernetes Learning</h1>
                <p className="text-sm text-gray-500">Master K8s from Zero to Hero</p>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Badge variant="secondary">CKA</Badge>
              <Badge variant="secondary">Helm</Badge>
              <Badge variant="secondary">Operators</Badge>
              <Badge variant="secondary">Prometheus</Badge>
            </div>
            
            <div className="flex items-center space-x-1 md:space-x-2">
              <Button variant="outline" size="sm" className="hidden md:flex text-xs">
                <Search className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm" asChild className="text-xs px-2 md:px-3">
                <Link href="https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator" target="_blank">
                  <Github className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">GitHub</span>
                </Link>
              </Button>
              <Button size="sm" asChild className="text-xs px-2 md:px-3">
                <Link href="/get-started">
                  Get Started
                  <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

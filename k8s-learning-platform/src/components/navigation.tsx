'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, Github, ExternalLink, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'
import { SearchModal } from '@/components/search-modal'

export function Navigation({ onMobileMenuToggle, isMobileMenuOpen }: { onMobileMenuToggle?: () => void; isMobileMenuOpen?: boolean }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    onMobileMenuToggle?.()
  }

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      // Open search with /
      if (e.key === '/' && !isSearchOpen) {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isSearchOpen])

  return (
    <nav className="bg-background shadow-sm border-b border-border">
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
              <div className="h-6 w-6 md:h-8 md:w-8 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Kubernetes Learning Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-foreground">Kubernetes Learning Platform</h1>
                <p className="text-sm text-muted-foreground">Master K8s from Zero to Hero</p>
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
              <ThemeToggle />
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleSearchToggle}
                className="text-xs"
              >
                <Search className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                <span className="hidden md:inline">Search</span>
                <kbd className="hidden md:inline ml-2 px-1.5 py-0.5 text-xs bg-muted rounded border">⌘K</kbd>
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
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </nav>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, Github, ExternalLink, X, Sparkles, Layers, Zap, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'
import { SearchModal } from '@/components/search-modal'
import { cn } from '@/lib/utils'

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
    <nav className="relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      <div className="relative px-3 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Left section - Logo and Branding */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden h-9 w-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
            
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative">
                <div className="h-8 w-8 md:h-10 md:w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Layers className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                </div>
              </div>
              
              <div className="hidden md:block">
                <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Kubernetes Learning Platform
                </h1>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Master K8s from Zero to Hero</p>
              </div>
            </Link>
          </div>
          
          {/* Center section - Navigation badges */}
          <div className="hidden lg:flex items-center space-x-2">
            <Badge 
              variant="outline" 
              className="bg-gradient-to-r from-emerald-500/10 to-teal-600/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:shadow-md transition-all duration-300"
            >
              <Zap className="w-3 h-3 mr-1" />
              CKA
            </Badge>
            <Badge 
              variant="outline" 
              className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border-orange-500/20 text-orange-700 dark:text-orange-300 hover:shadow-md transition-all duration-300"
            >
              <Layers className="w-3 h-3 mr-1" />
              Helm
            </Badge>
            <Badge 
              variant="outline" 
              className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border-purple-500/20 text-purple-700 dark:text-purple-300 hover:shadow-md transition-all duration-300"
            >
              <Zap className="w-3 h-3 mr-1" />
              Operators
            </Badge>
            <Badge 
              variant="outline" 
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-cyan-500/20 text-cyan-700 dark:text-cyan-300 hover:shadow-md transition-all duration-300"
            >
              <Star className="w-3 h-3 mr-1" />
              Prometheus
            </Badge>
          </div>
          
          {/* Right section - Actions */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <ThemeToggle />
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleSearchToggle}
              className="text-xs px-3 md:px-4 py-2 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <Search className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden lg:inline ml-2 px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">⌘K</kbd>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              asChild 
              className="text-xs px-3 md:px-4 py-2 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <Link href="https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator" target="_blank">
                <Github className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </Button>
            
            <Button 
              size="sm" 
              asChild 
              className="text-xs px-3 md:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/get-started">
                Get Started
                <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" />
              </Link>
            </Button>
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

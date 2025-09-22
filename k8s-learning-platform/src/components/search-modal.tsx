'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, ArrowRight, Tag, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { searchContent, type SearchItem } from '@/lib/search-data'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Search functionality
  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchContent(query)
      setResults(searchResults)
      setSelectedIndex(0)
    } else {
      setResults([])
    }
  }, [query])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        )
        break
      case 'Enter':
        e.preventDefault()
        if (results[selectedIndex]) {
          handleResultClick(results[selectedIndex])
        }
        break
    }
  }

  const handleResultClick = (result: SearchItem) => {
    router.push(result.href)
    onClose()
    setQuery('')
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
      onClick={handleOverlayClick}
    >
      <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center border-b border-border p-4">
          <Search className="h-5 w-5 text-muted-foreground mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search topics, concepts, or keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <div className="p-6 text-center text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try different keywords or check spelling</p>
            </div>
          )}

          {query.trim() && results.length > 0 && (
            <div className="p-2">
              <div className="text-xs text-muted-foreground mb-2 px-2">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </div>
              {results.map((result, index) => (
                <div
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className={cn(
                    "flex items-start p-3 rounded-md cursor-pointer transition-colors",
                    index === selectedIndex
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm truncate">
                        {result.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {result.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {result.description}
                    </p>
                    <div className="flex items-center gap-1 flex-wrap">
                      {result.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                      {result.tags.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{result.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-2 flex-shrink-0" />
                </div>
              ))}
            </div>
          )}

          {!query.trim() && (
            <div className="p-6">
              <div className="text-center mb-6">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Search Learning Content</h3>
                <p className="text-sm text-muted-foreground">
                  Find topics across CKA, Helm, Operators, and Prometheus
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Popular Topics</h4>
                  <div className="space-y-1">
                    <button
                      onClick={() => setQuery('pods')}
                      className="block text-xs text-muted-foreground hover:text-foreground"
                    >
                      Pods & Deployments
                    </button>
                    <button
                      onClick={() => setQuery('services')}
                      className="block text-xs text-muted-foreground hover:text-foreground"
                    >
                      Services & Networking
                    </button>
                    <button
                      onClick={() => setQuery('helm')}
                      className="block text-xs text-muted-foreground hover:text-foreground"
                    >
                      Helm Charts
                    </button>
                  </div>
                </div>
                
                <div className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Quick Access</h4>
                  <div className="space-y-1">
                    <button
                      onClick={() => setQuery('troubleshooting')}
                      className="block text-xs text-muted-foreground hover:text-foreground"
                    >
                      Troubleshooting
                    </button>
                    <button
                      onClick={() => setQuery('monitoring')}
                      className="block text-xs text-muted-foreground hover:text-foreground"
                    >
                      Monitoring
                    </button>
                    <button
                      onClick={() => setQuery('security')}
                      className="block text-xs text-muted-foreground hover:text-foreground"
                    >
                      Security & RBAC
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border p-3 bg-muted/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>Esc Close</span>
            </div>
            <span>Press / to search</span>
          </div>
        </div>
      </div>
    </div>
  )
}

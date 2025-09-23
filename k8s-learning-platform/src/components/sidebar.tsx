'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { 
  Home, 
  BookOpen, 
  Settings, 
  Monitor, 
  Package, 
  Zap,
  ChevronRight,
  PlayCircle,
  Code,
  FileText,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Search,
  Star,
  Clock,
  Sparkles,
  Layers,
  Activity
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    name: 'CKA Certification',
    href: '/cka',
    icon: BookOpen,
    description: 'Kubernetes Administration',
    badge: 'Core',
    gradient: 'from-emerald-500 to-teal-600',
    children: [
      { name: 'Getting Started', href: '/cka/getting-started', icon: PlayCircle, duration: '15 min' },
      { name: 'Pods & Deployments', href: '/cka/pods-deployments', icon: Code, duration: '25 min' },
      { name: 'Services & Networking', href: '/cka/services-networking', icon: Settings, duration: '20 min' },
      { name: 'Storage & Volumes', href: '/cka/storage-volumes', icon: Settings, duration: '18 min' },
      { name: 'Security & RBAC', href: '/cka/security-rbac', icon: Settings, duration: '22 min' },
      { name: 'Troubleshooting', href: '/cka/troubleshooting', icon: Settings, duration: '30 min' },
    ]
  },
  {
    name: 'Helm',
    href: '/helm',
    icon: Package,
    description: 'Package Manager',
    badge: 'Essential',
    gradient: 'from-orange-500 to-red-600',
    children: [
      { name: 'Introduction', href: '/helm/introduction', icon: FileText, duration: '12 min' },
      { name: 'Creating Charts', href: '/helm/creating-charts', icon: Code, duration: '35 min' },
      { name: 'Templating', href: '/helm/templating', icon: Settings, duration: '28 min' },
      { name: 'Online Boutique Demo', href: '/helm/online-boutique-demo', icon: PlayCircle, duration: '45 min' },
      { name: 'Helmfile', href: '/helm/helmfile', icon: Settings, duration: '20 min' },
    ]
  },
  {
    name: 'Operators',
    href: '/operators',
    icon: Zap,
    description: 'Extend K8s API',
    badge: 'Advanced',
    gradient: 'from-purple-500 to-pink-600',
    children: [
      { name: 'CRDs & Custom Resources', href: '/operators/crds', icon: FileText, duration: '25 min' },
      { name: 'Operator Concepts', href: '/operators/concepts', icon: BookOpen, duration: '30 min' },
      { name: 'Prometheus Operator', href: '/operators/prometheus-operator', icon: PlayCircle, duration: '40 min' },
      { name: 'Splunk Operator', href: '/operators/splunk-operator', icon: PlayCircle, duration: '35 min' },
    ]
  },
  {
    name: 'Prometheus',
    href: '/prometheus',
    icon: Monitor,
    description: 'Monitoring & Alerting',
    badge: 'Monitoring',
    gradient: 'from-cyan-500 to-blue-600',
    children: [
      { name: 'Introduction', href: '/prometheus/introduction', icon: FileText, duration: '15 min' },
      { name: 'Installation', href: '/prometheus/installation', icon: Settings, duration: '20 min' },
      { name: 'Grafana Dashboards', href: '/prometheus/grafana', icon: Monitor, duration: '25 min' },
      { name: 'Alert Rules', href: '/prometheus/alert-rules', icon: Settings, duration: '30 min' },
      { name: 'Alertmanager', href: '/prometheus/alertmanager', icon: Settings, duration: '22 min' },
      { name: 'Third-party Apps', href: '/prometheus/third-party-apps', icon: PlayCircle, duration: '18 min' },
      { name: 'Custom Apps', href: '/prometheus/custom-apps', icon: Code, duration: '35 min' },
    ]
  },
]

export function Sidebar({ isMobileOpen, onMobileClose }: { isMobileOpen?: boolean; onMobileClose?: () => void }) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Helper function to determine if a navigation item should be highlighted
  const isActive = (item: any) => {
    // Exact match for the main item
    if (pathname === item.href) {
      return true
    }
    
    // Check if current path starts with the item's href (for parent sections)
    if (item.href !== '/' && pathname.startsWith(item.href + '/')) {
      return true
    }
    
    // Check if any child matches the current path
    if (item.children) {
      return item.children.some((child: any) => pathname === child.href)
    }
    
    return false
  }

  // Filter navigation based on search query
  const filteredNavigation = navigation.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.children?.some((child: any) => child.name.toLowerCase().includes(searchQuery.toLowerCase()))
  )


  return (
    <div>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={onMobileClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "flex flex-col transition-all duration-500 ease-in-out z-50 flex-shrink-0 h-screen",
        isMobileOpen ? "fixed inset-y-0 left-0 w-80 md:relative md:inset-auto" : "hidden md:flex",
        isCollapsed && !isMobileOpen ? "w-20" : "w-80 md:w-96"
      )}>
        {/* Glass morphism background */}
        <div className="flex-1 flex flex-col min-h-0 bg-white/90 dark:bg-gray-950/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-800/50 h-full shadow-2xl">
          {/* Header with gradient background */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative p-3 md:p-4 border-b border-gray-200/30 dark:border-gray-800/40">
              <div className={cn(
                "flex items-center justify-between",
                (isCollapsed && !isMobileOpen) ? "justify-center" : ""
              )}>
                {!(isCollapsed && !isMobileOpen) && (
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="relative">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Layers className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-base md:text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        Learning Path
                      </h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Kubernetes Mastery</p>
                    </div>
                  </div>
                )}
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    if (isMobileOpen) {
                      onMobileClose?.()
                    } else {
                      setIsCollapsed(!isCollapsed)
                    }
                  }}
                  className="h-8 w-8 md:h-10 md:w-10 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {(isCollapsed && !isMobileOpen) ? (
                    <ChevronRightIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-600 dark:text-gray-300" />
                  ) : (
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600 dark:text-gray-300" />
                  )}
                </Button>
              </div>
              
            </div>
          </div>

          {/* Search Bar */}
          {!(isCollapsed && !isMobileOpen) && (
            <div className="p-3 md:p-4 border-b border-gray-200/30 dark:border-gray-800/40">
              <div className="relative">
                <Search className="absolute left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search modules..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-xs md:text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto sidebar-scroll">
            <nav className="p-3 md:p-4 space-y-1.5 md:space-y-2">
              {filteredNavigation.map((item, index) => (
                <div key={item.name} className="group">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      'relative flex items-center rounded-xl transition-all duration-300 overflow-hidden',
                      (isCollapsed && !isMobileOpen) ? 'justify-center p-2 md:p-3' : 'p-3 md:p-4',
                      isActive(item)
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 shadow-lg border border-blue-500/30'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:shadow-md border border-transparent hover:border-gray-200 dark:hover:border-gray-700'
                    )}
                    title={(isCollapsed && !isMobileOpen) ? item.name : undefined}
                  >
                    {/* Gradient background effect */}
                    <div className={cn(
                      'absolute inset-0 opacity-0 transition-opacity duration-300',
                      hoveredItem === item.name && 'opacity-100',
                      `bg-gradient-to-r ${item.gradient}`
                    )} />
                    
                    {/* Icon with gradient */}
                    <div className={cn(
                      'relative flex-shrink-0 rounded-lg p-1.5 md:p-2 transition-all duration-300',
                      isActive(item) 
                        ? `bg-gradient-to-br ${item.gradient} shadow-lg` 
                        : 'bg-gray-100 dark:bg-gray-800 group-hover:shadow-md',
                      (isCollapsed && !isMobileOpen) ? 'p-1.5 md:p-2' : 'mr-2 md:mr-3'
                    )}>
                      <item.icon className={cn(
                        'w-4 h-4 md:w-5 md:h-5 transition-colors duration-300',
                        isActive(item) ? 'text-white' : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                      )} />
                      
                    </div>

                    {!(isCollapsed && !isMobileOpen) && (
                      <div className="relative flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5 md:mb-1">
                          <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white truncate">
                            {item.name}
                          </span>
                          {item.badge && (
                            <Badge 
                              variant="outline" 
                              className={cn(
                                'text-xs px-1.5 md:px-2 py-0.5 border-0',
                                item.badge === 'Core' && 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                                item.badge === 'Essential' && 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
                                item.badge === 'Advanced' && 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
                                item.badge === 'Monitoring' && 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                              )}
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        
                        {item.description && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.description}
                          </p>
                        )}
                      </div>
                    )}
                  </Link>
                  
                  {/* Children with staggered animation */}
                  {item.children && !(isCollapsed && !isMobileOpen) && (
                    <div className="ml-4 md:ml-6 mt-1.5 md:mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-3 md:pl-4">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            'flex items-center p-2 md:p-3 rounded-lg transition-all duration-300 group/child',
                            pathname === child.href
                              ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 shadow-sm'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:shadow-sm border border-transparent'
                          )}
                          style={{ 
                            animationDelay: `${childIndex * 50}ms`,
                            animation: hoveredItem === item.name ? 'fadeInUp 0.3s ease-out forwards' : 'none'
                          }}
                        >
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover/child:bg-blue-100 dark:group-hover/child:bg-blue-900/50">
                            <child.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          </div>
                          
                          <div className="ml-2.5 md:ml-3 flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className={cn(
                                'text-xs md:text-sm font-medium truncate transition-colors duration-300',
                                pathname === child.href 
                                  ? 'text-blue-700 dark:text-blue-300' 
                                  : 'text-gray-700 dark:text-gray-300 group-hover/child:text-gray-900 dark:group-hover/child:text-white'
                              )}>
                                {child.name}
                              </span>
                              {child.duration && (
                                <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center">
                                  <Clock className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" />
                                  {child.duration}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          
          {/* Footer */}
          {!isCollapsed && (
            <div className="flex-shrink-0 p-3 md:p-4 border-t border-gray-200/30 dark:border-gray-800/40">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl p-3 md:p-4 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-900 dark:text-white">Made with ❤️</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">for the K8s community</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

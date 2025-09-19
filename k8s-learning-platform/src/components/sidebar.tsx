'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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
  ChevronRight as ChevronRightIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
  },
  {
    name: 'CKA Certification',
    href: '/cka',
    icon: BookOpen,
    description: 'Kubernetes Administration',
    badge: 'Core',
    children: [
      { name: 'Getting Started', href: '/cka/getting-started', icon: PlayCircle },
      { name: 'Pods & Deployments', href: '/cka/pods-deployments', icon: Code },
      { name: 'Services & Networking', href: '/cka/services-networking', icon: Settings },
      { name: 'Storage & Volumes', href: '/cka/storage-volumes', icon: Settings },
      { name: 'Security & RBAC', href: '/cka/security-rbac', icon: Settings },
      { name: 'Troubleshooting', href: '/cka/troubleshooting', icon: Settings },
    ]
  },
  {
    name: 'Helm',
    href: '/helm',
    icon: Package,
    description: 'Package Manager',
    badge: 'Essential',
    children: [
      { name: 'Introduction', href: '/helm/introduction', icon: FileText },
      { name: 'Creating Charts', href: '/helm/creating-charts', icon: Code },
      { name: 'Templating', href: '/helm/templating', icon: Settings },
      { name: 'Online Boutique Demo', href: '/helm/online-boutique-demo', icon: PlayCircle },
      { name: 'Helmfile', href: '/helm/helmfile', icon: Settings },
    ]
  },
  {
    name: 'Operators',
    href: '/operators',
    icon: Zap,
    description: 'Extend K8s API',
    badge: 'Advanced',
    children: [
      { name: 'CRDs & Custom Resources', href: '/operators/crds', icon: FileText },
      { name: 'Operator Concepts', href: '/operators/concepts', icon: BookOpen },
      { name: 'Prometheus Operator', href: '/operators/prometheus-operator', icon: PlayCircle },
      { name: 'Splunk Operator', href: '/operators/splunk-operator', icon: PlayCircle },
    ]
  },
  {
    name: 'Prometheus',
    href: '/prometheus',
    icon: Monitor,
    description: 'Monitoring & Alerting',
    badge: 'Monitoring',
    children: [
      { name: 'Introduction', href: '/prometheus/introduction', icon: FileText },
      { name: 'Installation', href: '/prometheus/installation', icon: Settings },
      { name: 'Grafana Dashboards', href: '/prometheus/grafana', icon: Monitor },
      { name: 'Alert Rules', href: '/prometheus/alert-rules', icon: Settings },
      { name: 'Alertmanager', href: '/prometheus/alertmanager', icon: Settings },
      { name: 'Third-party Apps', href: '/prometheus/third-party-apps', icon: PlayCircle },
      { name: 'Custom Apps', href: '/prometheus/custom-apps', icon: Code },
    ]
  },
]

export function Sidebar({ isMobileOpen, onMobileClose }: { isMobileOpen?: boolean; onMobileClose?: () => void }) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onMobileClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "flex flex-col transition-all duration-300 z-50 flex-shrink-0 h-screen",
        "hidden md:flex",
        isMobileOpen ? "fixed inset-y-0 left-0 w-80" : "",
        isCollapsed ? "w-16" : "w-80"
      )}>
      <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200 h-full">
        <div className="flex-1 flex flex-col pt-3 md:pt-5 pb-2 md:pb-4 overflow-y-auto sidebar-scroll max-h-full">
          <div className={cn(
            "flex items-center flex-shrink-0 mb-2 md:mb-4",
            isCollapsed ? "justify-center px-2" : "justify-between px-3 md:px-4"
          )}>
            {!isCollapsed && (
              <h2 className="text-sm md:text-lg font-semibold text-gray-900">Learning Path</h2>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="h-8 w-8 hover:bg-gray-100 flex-shrink-0"
            >
              {isCollapsed ? (
                <ChevronRightIcon className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
          <nav className={cn(
            "mt-3 md:mt-5 flex-1 space-y-0.5 md:space-y-1",
            isCollapsed ? "px-2" : "px-1 md:px-2"
          )}>
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'group flex items-center py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-md transition-colors',
                    pathname === item.href
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    isCollapsed ? 'justify-center px-2' : 'px-1 md:px-2'
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon
                    className={cn(
                      'flex-shrink-0 h-4 w-4 md:h-5 md:w-5',
                      pathname === item.href ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500',
                      isCollapsed ? '' : 'mr-2 md:mr-3'
                    )}
                  />
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="truncate text-xs md:text-sm">{item.name}</span>
                        <Badge variant="outline" className="text-xs hidden md:inline-flex">
                          {item.badge}
                        </Badge>
                      </div>
                      {item.description && (
                        <p className="text-xs text-gray-500 mt-0.5 hidden md:block">{item.description}</p>
                      )}
                    </div>
                  )}
                </Link>
                
                {item.children && !isCollapsed && (
                  <div className="ml-4 md:ml-8 mt-0.5 md:mt-1 space-y-0.5 md:space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          'group flex items-center px-1 md:px-2 py-1 md:py-2 text-xs md:text-sm rounded-md transition-colors',
                          pathname === child.href
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                        )}
                      >
                        <child.icon className="mr-2 md:mr-3 h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                        <span className="truncate">{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        {!isCollapsed && (
          <div className="flex-shrink-0 flex border-t border-gray-200 p-2 md:p-4">
            <div className="flex items-center">
              <div className="ml-2 md:ml-3">
                <p className="text-xs md:text-sm font-medium text-gray-700">Made with ❤️</p>
                <p className="text-xs text-gray-500 hidden md:block">for the K8s community</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

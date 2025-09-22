// Search data structure for the Kubernetes Learning Platform
export interface SearchItem {
  id: string
  title: string
  description: string
  href: string
  category: string
  tags: string[]
  content?: string
}

export const searchData: SearchItem[] = [
  // CKA Section
  {
    id: 'cka-getting-started',
    title: 'Getting Started with CKA',
    description: 'Introduction to Certified Kubernetes Administrator certification',
    href: '/cka/getting-started',
    category: 'CKA Certification',
    tags: ['cka', 'certification', 'kubernetes', 'getting-started', 'basics'],
    content: 'Learn the fundamentals of Kubernetes administration and prepare for the CKA certification exam.'
  },
  {
    id: 'cka-pods-deployments',
    title: 'Pods & Deployments',
    description: 'Understanding Kubernetes pods and deployment strategies',
    href: '/cka/pods-deployments',
    category: 'CKA Certification',
    tags: ['pods', 'deployments', 'kubernetes', 'containers', 'replicas', 'scaling'],
    content: 'Master the core concepts of pods and deployments in Kubernetes. Learn about pod lifecycle, deployment strategies, and scaling applications.'
  },
  {
    id: 'cka-services-networking',
    title: 'Services & Networking',
    description: 'Kubernetes networking and service discovery',
    href: '/cka/services-networking',
    category: 'CKA Certification',
    tags: ['services', 'networking', 'kube-proxy', 'dns', 'load-balancing', 'ingress'],
    content: 'Understand Kubernetes networking, service types, and how to expose applications to the network.'
  },
  {
    id: 'cka-storage-volumes',
    title: 'Storage & Volumes',
    description: 'Persistent storage in Kubernetes',
    href: '/cka/storage-volumes',
    category: 'CKA Certification',
    tags: ['storage', 'volumes', 'persistent', 'pv', 'pvc', 'storage-class'],
    content: 'Learn about persistent volumes, volume claims, and storage classes in Kubernetes.'
  },
  {
    id: 'cka-security-rbac',
    title: 'Security & RBAC',
    description: 'Kubernetes security and role-based access control',
    href: '/cka/security-rbac',
    category: 'CKA Certification',
    tags: ['security', 'rbac', 'authentication', 'authorization', 'roles', 'permissions'],
    content: 'Implement security best practices and configure RBAC in Kubernetes clusters.'
  },
  {
    id: 'cka-troubleshooting',
    title: 'Troubleshooting',
    description: 'Debugging and troubleshooting Kubernetes issues',
    href: '/cka/troubleshooting',
    category: 'CKA Certification',
    tags: ['troubleshooting', 'debugging', 'logs', 'events', 'diagnostics', 'monitoring'],
    content: 'Learn how to troubleshoot common Kubernetes issues and debug cluster problems.'
  },

  // Helm Section
  {
    id: 'helm-introduction',
    title: 'Helm Introduction',
    description: 'Package manager for Kubernetes applications',
    href: '/helm/introduction',
    category: 'Helm',
    tags: ['helm', 'package-manager', 'charts', 'templates', 'kubernetes'],
    content: 'Introduction to Helm, the package manager for Kubernetes. Learn about charts, repositories, and basic Helm commands.'
  },
  {
    id: 'helm-creating-charts',
    title: 'Creating Charts',
    description: 'Building custom Helm charts',
    href: '/helm/creating-charts',
    category: 'Helm',
    tags: ['helm', 'charts', 'templates', 'values', 'custom', 'development'],
    content: 'Learn how to create custom Helm charts for your applications with templates and values.'
  },
  {
    id: 'helm-templating',
    title: 'Helm Templating',
    description: 'Advanced templating techniques in Helm',
    href: '/helm/templating',
    category: 'Helm',
    tags: ['helm', 'templates', 'gotpl', 'functions', 'pipeline', 'advanced'],
    content: 'Master Helm templating with Go templates, functions, and advanced techniques.'
  },
  {
    id: 'helm-online-boutique',
    title: 'Online Boutique Demo',
    description: 'Real-world Helm deployment example',
    href: '/helm/online-boutique-demo',
    category: 'Helm',
    tags: ['helm', 'demo', 'microservices', 'example', 'deployment', 'production'],
    content: 'Deploy a complete microservices application using Helm charts.'
  },
  {
    id: 'helm-helmfile',
    title: 'Helmfile',
    description: 'Managing multiple Helm releases',
    href: '/helm/helmfile',
    category: 'Helm',
    tags: ['helmfile', 'helm', 'releases', 'environments', 'gitops'],
    content: 'Use Helmfile to manage multiple Helm releases and environments with GitOps workflows.'
  },

  // Operators Section
  {
    id: 'operators-crds',
    title: 'CRDs & Custom Resources',
    description: 'Custom Resource Definitions in Kubernetes',
    href: '/operators/crds',
    category: 'Operators',
    tags: ['crds', 'custom-resources', 'api', 'extensions', 'kubernetes'],
    content: 'Learn about Custom Resource Definitions and how to extend the Kubernetes API.'
  },
  {
    id: 'operators-concepts',
    title: 'Operator Concepts',
    description: 'Understanding Kubernetes Operators',
    href: '/operators/concepts',
    category: 'Operators',
    tags: ['operators', 'controller', 'reconciliation', 'automation', 'kubernetes'],
    content: 'Understand the concept of Kubernetes Operators and how they automate application management.'
  },
  {
    id: 'operators-prometheus',
    title: 'Prometheus Operator',
    description: 'Monitoring with Prometheus Operator',
    href: '/operators/prometheus-operator',
    category: 'Operators',
    tags: ['prometheus', 'operator', 'monitoring', 'metrics', 'observability'],
    content: 'Deploy and manage Prometheus monitoring stack using the Prometheus Operator.'
  },
  {
    id: 'operators-splunk',
    title: 'Splunk Operator',
    description: 'Log management with Splunk Operator',
    href: '/operators/splunk-operator',
    category: 'Operators',
    tags: ['splunk', 'operator', 'logging', 'logs', 'observability'],
    content: 'Implement centralized logging with Splunk using the Splunk Operator.'
  },

  // Prometheus Section
  {
    id: 'prometheus-introduction',
    title: 'Prometheus Introduction',
    description: 'Introduction to Prometheus monitoring',
    href: '/prometheus/introduction',
    category: 'Prometheus',
    tags: ['prometheus', 'monitoring', 'metrics', 'time-series', 'observability'],
    content: 'Learn the fundamentals of Prometheus monitoring and time-series databases.'
  },
  {
    id: 'prometheus-installation',
    title: 'Prometheus Installation',
    description: 'Installing and configuring Prometheus',
    href: '/prometheus/installation',
    category: 'Prometheus',
    tags: ['prometheus', 'installation', 'configuration', 'setup', 'deployment'],
    content: 'Step-by-step guide to install and configure Prometheus in Kubernetes.'
  },
  {
    id: 'prometheus-grafana',
    title: 'Grafana Dashboards',
    description: 'Creating and managing Grafana dashboards',
    href: '/prometheus/grafana',
    category: 'Prometheus',
    tags: ['grafana', 'dashboards', 'visualization', 'monitoring', 'ui'],
    content: 'Build comprehensive monitoring dashboards with Grafana and Prometheus data.'
  },
  {
    id: 'prometheus-alert-rules',
    title: 'Alert Rules',
    description: 'Configuring Prometheus alerting rules',
    href: '/prometheus/alert-rules',
    category: 'Prometheus',
    tags: ['alerts', 'rules', 'notifications', 'monitoring', 'thresholds'],
    content: 'Create and manage alerting rules to get notified about critical issues.'
  },
  {
    id: 'prometheus-alertmanager',
    title: 'Alertmanager',
    description: 'Managing alerts with Alertmanager',
    href: '/prometheus/alertmanager',
    category: 'Prometheus',
    tags: ['alertmanager', 'alerts', 'notifications', 'routing', 'silencing'],
    content: 'Configure Alertmanager for alert routing, grouping, and notification management.'
  },
  {
    id: 'prometheus-third-party',
    title: 'Third-party Apps',
    description: 'Monitoring third-party applications',
    href: '/prometheus/third-party-apps',
    category: 'Prometheus',
    tags: ['third-party', 'applications', 'exporters', 'monitoring', 'integration'],
    content: 'Monitor external applications and services using Prometheus exporters.'
  },
  {
    id: 'prometheus-custom-apps',
    title: 'Custom Apps',
    description: 'Monitoring custom applications',
    href: '/prometheus/custom-apps',
    category: 'Prometheus',
    tags: ['custom', 'applications', 'metrics', 'instrumentation', 'development'],
    content: 'Instrument your custom applications to expose metrics for Prometheus monitoring.'
  },

  // General Topics
  {
    id: 'get-started',
    title: 'Get Started',
    description: 'Begin your Kubernetes learning journey',
    href: '/get-started',
    category: 'Getting Started',
    tags: ['getting-started', 'beginner', 'tutorial', 'learning', 'kubernetes'],
    content: 'Start your Kubernetes learning journey with our comprehensive guide.'
  }
]

// Search function
export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return []

  const searchTerm = query.toLowerCase()
  
  return searchData.filter(item => {
    const searchableText = [
      item.title,
      item.description,
      item.category,
      ...item.tags,
      item.content || ''
    ].join(' ').toLowerCase()

    return searchableText.includes(searchTerm)
  }).sort((a, b) => {
    // Prioritize exact title matches
    const aTitleMatch = a.title.toLowerCase().includes(searchTerm)
    const bTitleMatch = b.title.toLowerCase().includes(searchTerm)
    
    if (aTitleMatch && !bTitleMatch) return -1
    if (!aTitleMatch && bTitleMatch) return 1
    
    // Then prioritize category matches
    const aCategoryMatch = a.category.toLowerCase().includes(searchTerm)
    const bCategoryMatch = b.category.toLowerCase().includes(searchTerm)
    
    if (aCategoryMatch && !bCategoryMatch) return -1
    if (!aCategoryMatch && bCategoryMatch) return 1
    
    return 0
  })
}

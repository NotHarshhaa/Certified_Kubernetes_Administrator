import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Pods & Deployments',
    description: 'Master the fundamental building blocks of Kubernetes applications',
    icon: PlayCircle,
    duration: '3-4 hours',
    topics: ['Pod Lifecycle', 'Deployment Strategies', 'StatefulSets', 'DaemonSets', 'Scaling'],
    href: '/cka/pods-deployments'
  },
  {
    title: 'Services & Networking',
    description: 'Learn how to connect and secure your applications in Kubernetes',
    icon: Code,
    duration: '3-4 hours',
    topics: ['Service Types', 'Ingress Controllers', 'Network Policies', 'DNS Resolution'],
    href: '/cka/services-networking'
  },
  {
    title: 'Storage & Volumes',
    description: 'Master persistent storage and data management in Kubernetes',
    icon: Settings,
    duration: '2-3 hours',
    topics: ['Persistent Volumes', 'Storage Classes', 'Volume Snapshots', 'Data Persistence'],
    href: '/cka/storage-volumes'
  },
  {
    title: 'Security & RBAC',
    description: 'Secure your cluster with authentication, authorization, and access controls',
    icon: BookOpen,
    duration: '3-4 hours',
    topics: ['Authentication', 'RBAC', 'Pod Security', 'Network Policies'],
    href: '/cka/security-rbac'
  },
  {
    title: 'Troubleshooting',
    description: 'Master systematic approaches to diagnosing and fixing Kubernetes issues',
    icon: Settings,
    duration: '3-4 hours',
    topics: ['Pod Diagnostics', 'Network Issues', 'Storage Problems', 'Cluster Health'],
    href: '/cka/troubleshooting'
  }
]

const prerequisites = [
  'Basic understanding of containers and Docker',
  'Familiarity with YAML syntax',
  'Command line experience',
  'Basic networking knowledge'
]

export default function CKAGettingStartedPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🎯 CKA Certification Path
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Getting Started with CKA
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Begin your journey to becoming a Certified Kubernetes Administrator. 
            This comprehensive path covers all the essential topics you need to master.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Basic knowledge required for the CKA certification path</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-center text-base">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  {prereq}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Learning Topics */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Learning Topics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500">
                    <topic.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        {topic.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {topic.topics.map((subtopic, topicIndex) => (
                        <li key={topicIndex} className="text-sm text-muted-foreground">
                          • {subtopic}
                        </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link href={topic.href}>
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Begin with Pods & Deployments and work your way through each topic systematically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/cka/pods-deployments">
              <PlayCircle className="mr-2 h-5 w-5" />
              Start with Pods & Deployments
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/cka">
              <ArrowRight className="mr-2 h-5 w-5" />
              Back to CKA Overview
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

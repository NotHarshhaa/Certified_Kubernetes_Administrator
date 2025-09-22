import Link from 'next/link'
import { ArrowRight, BookOpen, Package, Zap, Monitor, Clock, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const learningPaths = [
  {
    title: 'CKA Certification Path',
    description: 'Master Kubernetes administration from basics to advanced concepts',
    icon: BookOpen,
    href: '/cka',
    color: 'bg-muted/500',
    duration: '8-12 weeks',
    difficulty: 'Intermediate',
    topics: ['Pods & Deployments', 'Services & Networking', 'Storage & Volumes', 'Security & RBAC', 'Troubleshooting']
  },
  {
    title: 'Helm Package Manager',
    description: 'Learn to package, deploy, and manage Kubernetes applications',
    icon: Package,
    href: '/helm',
    color: 'bg-green-500',
    duration: '2-3 weeks',
    difficulty: 'Beginner',
    topics: ['Helm Charts', 'Templating', 'Values', 'Repositories', 'Helmfile']
  },
  {
    title: 'Kubernetes Operators',
    description: 'Extend Kubernetes API with custom resources and operators',
    icon: Zap,
    href: '/operators',
    color: 'bg-yellow-500',
    duration: '3-4 weeks',
    difficulty: 'Advanced',
    topics: ['CRDs', 'Operators', 'Controller Logic', 'API Extensions']
  },
  {
    title: 'Prometheus Monitoring',
    description: 'Set up comprehensive monitoring and alerting',
    icon: Monitor,
    href: '/prometheus',
    color: 'bg-purple-500',
    duration: '3-4 weeks',
    difficulty: 'Intermediate',
    topics: ['Prometheus', 'Grafana', 'Alerting', 'Metrics', 'Alertmanager']
  }
]

const prerequisites = [
  'Basic understanding of containers and Docker',
  'Familiarity with command line interface',
  'Basic knowledge of Linux/Unix systems',
  'Understanding of networking concepts'
]

const benefits = [
  'Master Kubernetes administration',
  'Prepare for CKA certification',
  'Learn industry best practices',
  'Hands-on experience with real projects',
  'Career advancement opportunities'
]

export default function GetStartedPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🚀 Start Your Kubernetes Journey
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get Started with Kubernetes Learning
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Choose your learning path and master Kubernetes from beginner to expert level. 
            Our comprehensive curriculum covers everything you need to become a Kubernetes administrator.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Prerequisites</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What You Should Know</CardTitle>
              <CardDescription>Basic knowledge required before starting</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {prereq}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What You'll Gain</CardTitle>
              <CardDescription>Benefits of completing this learning path</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Learning Paths */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Choose Your Learning Path</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {learningPaths.map((path, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${path.color}`}>
                    <path.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        {path.duration}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {path.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {path.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {path.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={path.href}>
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Begin?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Start with the CKA certification path for a comprehensive learning experience, 
          or choose any path that matches your current skill level.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/cka">
              <BookOpen className="mr-2 h-5 w-5" />
              Start with CKA
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <ArrowRight className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
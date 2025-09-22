import Link from 'next/link'
import { ArrowRight, BookOpen, Code, PlayCircle, CheckCircle, Clock, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ckaTopics = [
  {
    title: 'Getting Started with Kubernetes',
    description: 'Learn the fundamentals of Kubernetes, cluster architecture, and core concepts.',
    icon: BookOpen,
    href: '/cka/getting-started',
    duration: '2-3 hours',
    difficulty: 'Beginner',
    topics: ['Cluster Architecture', 'kubectl Basics', 'API Resources', 'YAML Fundamentals'],
  },
  {
    title: 'Pods & Deployments',
    description: 'Master pod lifecycle, deployment strategies, and container orchestration.',
    icon: Code,
    href: '/cka/pods-deployments',
    duration: '3-4 hours',
    difficulty: 'Intermediate',
    topics: ['Pod Spec', 'Deployment Strategies', 'Rolling Updates', 'Health Checks'],
  },
  {
    title: 'Services & Networking',
    description: 'Understand service discovery, networking models, and load balancing.',
    icon: PlayCircle,
    href: '/cka/services-networking',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    topics: ['Service Types', 'Ingress', 'Network Policies', 'DNS'],
  },
  {
    title: 'Storage & Volumes',
    description: 'Learn about persistent storage, volume types, and data management.',
    icon: BookOpen,
    href: '/cka/storage-volumes',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    topics: ['Volume Types', 'Persistent Volumes', 'Storage Classes', 'StatefulSets'],
  },
  {
    title: 'Security & RBAC',
    description: 'Implement security best practices, authentication, and authorization.',
    icon: Award,
    href: '/cka/security-rbac',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    topics: ['RBAC', 'Security Contexts', 'Network Policies', 'Pod Security Standards'],
  },
  {
    title: 'Troubleshooting',
    description: 'Master debugging techniques and common Kubernetes issues.',
    icon: CheckCircle,
    href: '/cka/troubleshooting',
    duration: '3-4 hours',
    difficulty: 'Advanced',
    topics: ['Log Analysis', 'Resource Debugging', 'Network Issues', 'Performance Tuning'],
  },
]

const examInfo = [
  {
    title: 'Exam Duration',
    value: '2 hours',
    icon: Clock,
  },
  {
    title: 'Question Format',
    value: 'Performance-based',
    icon: Code,
  },
  {
    title: 'Passing Score',
    value: '66%',
    icon: Award,
  },
  {
    title: 'Valid For',
    value: '3 years',
    icon: Users,
  },
]

const prerequisites = [
  'Basic understanding of Linux/Unix systems',
  'Familiarity with command-line interfaces',
  'Knowledge of containerization concepts',
  'Basic networking understanding',
  'Experience with YAML configuration files',
]

export default function CKAPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm">
            🎯 Certified Kubernetes Administrator
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Master Kubernetes Administration
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-2">
            Comprehensive guide to becoming a Certified Kubernetes Administrator (CKA). 
            Learn from basics to advanced concepts with hands-on labs and real-world scenarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
            <Button size="lg" asChild className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              <Link href="/cka/getting-started">
                Start Learning
                <ArrowRight className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              <PlayCircle className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
              Watch Introduction
            </Button>
          </div>
        </div>
      </div>

      {/* Exam Information */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">CKA Exam Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {examInfo.map((info, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-4 md:pt-6">
                <info.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-lg md:text-2xl font-bold text-foreground">{info.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{info.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Learning Path</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {ckaTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <topic.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        {topic.duration}
                      </Badge>
                      <Badge 
                        variant={topic.difficulty === 'Beginner' ? 'default' : 
                                topic.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}
                        className="text-xs"
                      >
                        {topic.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {topic.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {topic.topics.map((subtopic, subtopicIndex) => (
                    <Badge key={subtopicIndex} variant="secondary" className="text-xs">
                      {subtopic}
                    </Badge>
                  ))}
                </div>
                <Button asChild>
                  <Link href={topic.href}>
                    Start Topic
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Prerequisites</h2>
        <Card>
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>
              These foundational concepts will help you get the most out of the CKA learning path.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{prereq}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Become CKA Certified?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join thousands of professionals who have successfully passed the CKA exam with our comprehensive learning materials.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/cka/getting-started">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning Now
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Award className="mr-2 h-5 w-5" />
            Schedule Exam
          </Button>
        </div>
      </div>
    </div>
  )
}

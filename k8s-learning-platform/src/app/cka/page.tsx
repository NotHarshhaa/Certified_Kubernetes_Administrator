import Link from 'next/link'
import { ArrowRight, BookOpen, Code, PlayCircle, CheckCircle, Clock, Users, Award, Sparkles, Layers, Activity, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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
    <div className="space-y-8 md:space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background with glass morphism */}
        <div className="absolute inset-0 from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 rounded-2xl mx-4 md:mx-8 shadow-lg dark:shadow-xl border border-blue-200/50 dark:border-blue-800/20">
          <div className="text-center py-6 md:py-8 px-6">
            {/* Logo Section */}
            <div className="flex justify-center mb-6 md:mb-6">
              <div className="relative group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                  <Layers className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                {/* Animated decorative elements */}
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <Activity className="w-2 h-2 text-white" />
                </div>
                <div className="absolute top-1/2 -right-4 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-ping" />
                <div className="absolute top-1/2 -left-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            <Badge variant="outline" className="mb-3 md:mb-4 text-xs md:text-sm bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/20 text-blue-700 dark:text-blue-300 hover:shadow-md transition-all duration-300">
              <span className="inline-flex items-center gap-1">
                <Rocket className="w-4 h-4 mr-1 text-blue-500" />
                Certified Kubernetes Administrator
              </span>
            </Badge>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Master Kubernetes
              </span>
              <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Administration
              </span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-7 leading-relaxed max-w-3xl mx-auto">
              Comprehensive guide to becoming a Certified Kubernetes Administrator (CKA). 
              Learn from basics to advanced concepts with hands-on labs and real-world scenarios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/cka/getting-started">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Link href="/get-started">
                  <PlayCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Watch Introduction
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Information */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            CKA Exam Overview
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Everything you need to know about the CKA exam</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {examInfo.map((info, index) => (
            <Card key={index} className="text-center bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-3 md:pt-6 pb-3 md:pb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <info.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-1 md:mb-2">{info.value}</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">{info.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Learning Path
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Structured path from beginner to CKA certified</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {ckaTopics.map((topic, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="relative p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                    <topic.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">{topic.title}</CardTitle>
                    <div className="flex items-center space-x-2">
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
              <CardContent className="relative p-4 md:p-6 pt-0">
                <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {topic.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                  {topic.topics.map((subtopic, subtopicIndex) => (
                    <Badge key={subtopicIndex} variant="secondary" className="text-xs">
                      {subtopic}
                    </Badge>
                  ))}
                </div>
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
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
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Prerequisites
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">What you should know before starting</p>
        </div>
        <Card className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 shadow-lg">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">What You Should Know Before Starting</CardTitle>
            <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              These foundational concepts will help you get the most out of the CKA learning path.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <ul className="space-y-3">
              {prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{prereq}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 text-center border border-gray-200/60 dark:border-gray-800/20 shadow-lg dark:shadow-2xl">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-4">
            Ready to Become CKA Certified?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have successfully passed the CKA exam with our comprehensive learning materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/cka/getting-started">
                <BookOpen className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Start Learning Now
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Award className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Schedule Exam
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

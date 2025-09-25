import Link from 'next/link'
import { ArrowRight, BookOpen, Package, Zap, Monitor, Clock, CheckCircle, Star, Sparkles, Layers, Activity, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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
                Start Your Kubernetes Journey
              </span>
            </Badge>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Get Started with
              </span>
              <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Kubernetes Learning
              </span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-7 leading-relaxed max-w-3xl mx-auto">
              Choose your learning path and master Kubernetes from beginner to expert level. 
              Our comprehensive curriculum covers everything you need to become a Kubernetes administrator.
            </p>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Prerequisites & Benefits
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">What you need to know and what you'll gain</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          <Card className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">What You Should Know</CardTitle>
              <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">Basic knowledge required before starting</CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <ul className="space-y-3">
                {prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-center text-sm md:text-base">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{prereq}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">What You'll Gain</CardTitle>
              <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">Benefits of completing this learning path</CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm md:text-base">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Learning Paths */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Choose Your Learning Path
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Select the path that matches your goals and skill level</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {learningPaths.map((path, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="relative p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                    <path.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">{path.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        {path.duration}
                      </Badge>
                      <Badge 
                        variant={path.difficulty === 'Beginner' ? 'default' : 
                                path.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}
                        className="text-xs"
                      >
                        {path.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {path.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative p-4 md:p-6 pt-0">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {path.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 text-center border border-gray-200/60 dark:border-gray-800/20 shadow-lg dark:shadow-2xl">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-4">
            Ready to Begin?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Start with the CKA certification path for a comprehensive learning experience, 
            or choose any path that matches your current skill level.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/cka">
                <BookOpen className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Start with CKA
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/">
                <ArrowRight className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
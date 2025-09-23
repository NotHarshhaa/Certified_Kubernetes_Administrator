import Link from 'next/link'
import { ArrowRight, BookOpen, Package, Zap, Monitor, PlayCircle, Code, Star, Clock, Github, Sparkles, Layers, Activity, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'CKA Certification',
    description: 'Master Kubernetes administration from basics to advanced concepts. Get ready for the Certified Kubernetes Administrator exam.',
    icon: BookOpen,
    href: '/cka',
    badge: 'Core',
    gradient: 'from-emerald-500 to-teal-600',
    stats: '50+ Topics',
    duration: '4-6 weeks',
  },
  {
    title: 'Helm Package Manager',
    description: 'Learn to package, deploy, and manage Kubernetes applications with Helm charts and templating.',
    icon: Package,
    href: '/helm',
    badge: 'Essential',
    gradient: 'from-orange-500 to-red-600',
    stats: '3 Hands-on Demos',
    duration: '2-3 weeks',
  },
  {
    title: 'Kubernetes Operators',
    description: 'Extend Kubernetes API with custom resources and operators for complex application management.',
    icon: Zap,
    href: '/operators',
    badge: 'Advanced',
    gradient: 'from-purple-500 to-pink-600',
    stats: '2 Real-world Examples',
    duration: '3-4 weeks',
  },
  {
    title: 'Prometheus Monitoring',
    description: 'Set up comprehensive monitoring and alerting with Prometheus, Grafana, and Alertmanager.',
    icon: Monitor,
    href: '/prometheus',
    badge: 'Monitoring',
    gradient: 'from-cyan-500 to-blue-600',
    stats: 'Complete Stack',
    duration: '2-3 weeks',
  },
]

const stats = [
  { label: 'Learning Topics', value: '100+' },
  { label: 'Hands-on Labs', value: '15+' },
  { label: 'Code Examples', value: '50+' },
  { label: 'Real Projects', value: '5+' },
]

const learningPath = [
  {
    step: 1,
    title: 'Kubernetes Fundamentals',
    description: 'Start with core K8s concepts, pods, deployments, and services',
    duration: '2-3 weeks',
    topics: ['Pods & Containers', 'Deployments', 'Services', 'Networking'],
  },
  {
    step: 2,
    title: 'Package Management',
    description: 'Learn Helm for application packaging and deployment automation',
    duration: '1-2 weeks',
    topics: ['Helm Charts', 'Templating', 'Values', 'Repositories'],
  },
  {
    step: 3,
    title: 'Advanced Concepts',
    description: 'Master operators and custom resource definitions',
    duration: '2-3 weeks',
    topics: ['CRDs', 'Operators', 'Controller Logic', 'API Extensions'],
  },
  {
    step: 4,
    title: 'Monitoring & Observability',
    description: 'Implement comprehensive monitoring with Prometheus stack',
    duration: '2-3 weeks',
    topics: ['Prometheus', 'Grafana', 'Alerting', 'Metrics'],
  },
]

export default function HomePage() {
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
                Master Kubernetes from Zero to Hero
              </span>
            </Badge>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Learn Certified Kubernetes
              </span>
              <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Administrator
              </span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-7 leading-relaxed max-w-3xl mx-auto">
              A comprehensive learning platform covering Kubernetes administration, Helm package management, 
              operators, and monitoring. Master K8s with hands-on examples, real-world projects, and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/get-started">
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
                <Link href="/cka">
                  <PlayCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  View CKA Path
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="pt-3 md:pt-6 pb-3 md:pb-6">
              <div className="text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-base text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div>
        <div className="text-center mb-4 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-4">
            What You'll Learn
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">Comprehensive coverage of Kubernetes ecosystem</p>
        </div>
        <div className="grid md:grid-cols-2 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              {/* Gradient background overlay */}
              <div className={cn(
                'absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500',
                `bg-gradient-to-br ${feature.gradient}`
              )} />
              
              <CardHeader className="relative p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-6">
                  <div className={cn(
                    'p-2 md:p-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110',
                    `bg-gradient-to-br ${feature.gradient}`
                  )}>
                    <feature.icon className="h-5 w-5 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 md:space-x-3 mb-1 md:mb-2">
                      <CardTitle className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                        {feature.title}
                      </CardTitle>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          'text-xs px-3 py-1 border-0',
                          feature.badge === 'Core' && 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                          feature.badge === 'Essential' && 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
                          feature.badge === 'Advanced' && 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
                          feature.badge === 'Monitoring' && 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                        )}
                      >
                        {feature.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className="text-xs bg-gray-100 dark:bg-gray-800">
                        {feature.stats}
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-gray-100 dark:bg-gray-800">
                        <Clock className="w-3 h-3 mr-1" />
                        {feature.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative p-4 md:p-6 pt-0">
                <CardDescription className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-6 leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button 
                  asChild 
                  className={cn(
                    'text-sm md:text-base px-6 py-3 transition-all duration-300 hover:scale-105',
                    `bg-gradient-to-r ${feature.gradient} hover:shadow-lg text-white`
                  )}
                >
                  <Link href={feature.href}>
                    Explore Content
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <div className="text-center mb-4 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-4">
            Your Learning Journey
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">Structured path from beginner to Kubernetes expert</p>
        </div>
        <div className="space-y-3 md:space-y-6">
          {learningPath.map((step, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-4 md:space-x-8">
                  <div className="flex-shrink-0 relative">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-white font-bold text-sm md:text-xl">{step.step}</span>
                    </div>
                    {/* Connection line */}
                    {index < learningPath.length - 1 && (
                      <div className="absolute top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 md:h-12 bg-gradient-to-b from-blue-500 to-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      <Badge 
                        variant="outline" 
                        className="flex items-center text-sm bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/20 text-blue-700 dark:text-blue-300"
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-6 leading-relaxed">{step.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-3">
                      {step.topics.map((topic, topicIndex) => (
                        <Badge 
                          key={topicIndex} 
                          variant="secondary" 
                          className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 text-center border border-gray-200/60 dark:border-gray-800/20">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-4">
            Ready to Start Your Kubernetes Journey?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers and DevOps engineers who have mastered Kubernetes with our comprehensive guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/cka/getting-started">
                <BookOpen className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                Start with CKA
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator" target="_blank">
                <Code className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                View Source Code
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* About Author */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 border border-gray-200/60 dark:border-gray-800/20 shadow-lg dark:shadow-2xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4 md:mb-8 text-center">
              About the Author
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 relative group">
                <div className="relative">
                  <img
                    src="https://github.com/NotHarshhaa.png"
                    alt="Author Profile"
                    className="w-24 h-24 md:w-40 md:h-40 rounded-2xl border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                  Harshhaa
                </h3>
                <p className="text-base md:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4 md:mb-6">
                  DevOps Engineer & Kubernetes Enthusiast
                </p>
                <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
                  Passionate about cloud-native technologies, container orchestration, and helping developers 
                  master Kubernetes. With hands-on experience in DevOps practices, I've created this comprehensive 
                  learning platform to share knowledge and make Kubernetes accessible to everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild 
                    className="text-sm md:text-base px-6 py-3 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Link href="https://github.com/NotHarshhaa" target="_blank">
                      <Github className="mr-2 h-5 w-5" />
                      Follow on GitHub
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild 
                    className="text-sm md:text-base px-6 py-3 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Link href="https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator" target="_blank">
                      <Code className="mr-2 h-5 w-5" />
                      View Repository
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

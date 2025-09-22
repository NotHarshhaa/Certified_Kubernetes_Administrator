import Link from 'next/link'
import { ArrowRight, BookOpen, Package, Zap, Monitor, PlayCircle, Code, Users, Star, Clock, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const features = [
  {
    title: 'CKA Certification',
    description: 'Master Kubernetes administration from basics to advanced concepts. Get ready for the Certified Kubernetes Administrator exam.',
    icon: BookOpen,
    href: '/cka',
    badge: 'Core',
    color: 'bg-blue-500',
    stats: '50+ Topics',
  },
  {
    title: 'Helm Package Manager',
    description: 'Learn to package, deploy, and manage Kubernetes applications with Helm charts and templating.',
    icon: Package,
    href: '/helm',
    badge: 'Essential',
    color: 'bg-green-500',
    stats: '3 Hands-on Demos',
  },
  {
    title: 'Kubernetes Operators',
    description: 'Extend Kubernetes API with custom resources and operators for complex application management.',
    icon: Zap,
    href: '/operators',
    badge: 'Advanced',
    color: 'bg-yellow-500',
    stats: '2 Real-world Examples',
  },
  {
    title: 'Prometheus Monitoring',
    description: 'Set up comprehensive monitoring and alerting with Prometheus, Grafana, and Alertmanager.',
    icon: Monitor,
    href: '/prometheus',
    badge: 'Monitoring',
    color: 'bg-purple-500',
    stats: 'Complete Stack',
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
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl mx-4 md:mx-8">
        <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
          {/* Logo Section */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/10 md:backdrop-blur-md rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 border border-white/20">
                <img 
                  src="/logo.png" 
                  alt="Kubernetes Learning Platform Logo" 
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-bounce shadow-lg"></div>
            </div>
          </div>
          
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm bg-white/10 border-white/20 text-white hover:bg-white/20">
            🚀 Master Kubernetes from Zero to Hero
          </Badge>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Learn Certified Kubernetes Administrator
            <span className="block text-blue-300">From Scratch</span>
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed px-2">
            A comprehensive learning platform covering Kubernetes administration, Helm package management, 
            operators, and monitoring. Master K8s with hands-on examples, real-world projects, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
            <Button size="lg" asChild className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              <Link href="/get-started">
                Start Learning
                <ArrowRight className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              <Link href="/cka">
                <PlayCircle className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                View CKA Path
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-4 md:pt-6">
              <div className="text-xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div>
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">What You'll Learn</h2>
          <p className="text-sm md:text-lg text-muted-foreground">Comprehensive coverage of Kubernetes ecosystem</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className={`p-2 md:p-3 rounded-lg ${feature.color}`}>
                    <feature.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">{feature.badge}</Badge>
                    </div>
                    <Badge variant="outline" className="mt-1 md:mt-2 w-fit text-xs">{feature.stats}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <CardDescription className="text-sm md:text-base mb-3 md:mb-4">
                  {feature.description}
                </CardDescription>
                <Button asChild className="text-xs md:text-sm">
                  <Link href={feature.href}>
                    Explore Content
                    <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">Your Learning Journey</h2>
          <p className="text-sm md:text-lg text-muted-foreground">Structured path from beginner to Kubernetes expert</p>
        </div>
        <div className="space-y-4 md:space-y-8">
          {learningPath.map((step, index) => (
            <Card key={index}>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm md:text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">{step.title}</h3>
                      <Badge variant="outline" className="flex items-center text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {step.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
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
      <div className="bg-muted/50 rounded-2xl p-4 md:p-8 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">Ready to Start Your Kubernetes Journey?</h2>
        <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6">
          Join thousands of developers and DevOps engineers who have mastered Kubernetes with our comprehensive guide.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
          <Button size="lg" asChild className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
            <Link href="/cka/getting-started">
              <BookOpen className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
              Start with CKA
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
            <Link href="https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator" target="_blank">
              <Code className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
              View Source Code
            </Link>
          </Button>
        </div>
      </div>

      {/* About Author */}
      <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">About the Author</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <img
                src="https://github.com/NotHarshhaa.png"
                alt="Author Profile"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Harshhaa</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                DevOps Engineer & Kubernetes Enthusiast
              </p>
              <p className="text-sm md:text-base text-foreground mb-6 leading-relaxed">
                Passionate about cloud-native technologies, container orchestration, and helping developers 
                master Kubernetes. With hands-on experience in DevOps practices, I've created this comprehensive 
                learning platform to share knowledge and make Kubernetes accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button variant="outline" size="sm" asChild className="text-xs md:text-sm">
                  <Link href="https://github.com/NotHarshhaa" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Follow on GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="text-xs md:text-sm">
                  <Link href="https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator" target="_blank">
                    <Code className="mr-2 h-4 w-4" />
                    View Repository
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

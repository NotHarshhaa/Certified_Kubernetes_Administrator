import Link from 'next/link'
import { ArrowRight, Package, Code, PlayCircle, FileText, Settings, Clock, Zap, Database, Globe, Sparkles, Layers, Activity, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const helmTopics = [
  {
    title: 'Introduction to Helm',
    description: 'Learn what Helm is, why it\'s important, and how it simplifies Kubernetes application management.',
    icon: Package,
    href: '/helm/introduction',
    duration: '1-2 hours',
    difficulty: 'Beginner',
    topics: ['What is Helm?', 'Charts & Releases', 'Templating Engine', 'Repositories'],
  },
  {
    title: 'Creating Helm Charts',
    description: 'Master the art of creating your own Helm charts from scratch with best practices.',
    icon: Code,
    href: '/helm/creating-charts',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    topics: ['Chart Structure', 'Templates', 'Values', 'Dependencies'],
  },
  {
    title: 'Advanced Templating',
    description: 'Learn advanced Helm templating techniques, functions, and control structures.',
    icon: Settings,
    href: '/helm/templating',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    topics: ['Template Functions', 'Control Structures', 'Pipeline', 'Named Templates'],
  },
  {
    title: 'Online Boutique Demo',
    description: 'Build a complete microservices application using Helm charts with Google\'s Online Boutique.',
    icon: PlayCircle,
    href: '/helm/online-boutique-demo',
    duration: '3-4 hours',
    difficulty: 'Advanced',
    topics: ['Microservices', 'Multi-chart Deployment', 'Environment Management', 'CI/CD Integration'],
  },
  {
    title: 'Helmfile for GitOps',
    description: 'Learn to manage multiple Helm releases declaratively with Helmfile.',
    icon: FileText,
    href: '/helm/helmfile',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    topics: ['Helmfile Syntax', 'Environment Management', 'GitOps Workflow', 'Release Management'],
  },
]

const helmFeatures = [
  {
    title: 'Package Management',
    description: 'Bundle Kubernetes applications into reusable packages called charts.',
    icon: Package,
    color: 'bg-muted/500',
  },
  {
    title: 'Templating Engine',
    description: 'Use Go templating to create dynamic Kubernetes manifests.',
    icon: Code,
    color: 'bg-muted/500',
  },
  {
    title: 'Release Management',
    description: 'Track and manage application deployments across environments.',
    icon: Zap,
    color: 'bg-yellow-500',
  },
  {
    title: 'Repository Support',
    description: 'Share and discover charts through public and private repositories.',
    icon: Database,
    color: 'bg-purple-500',
  },
]

const demos = [
  {
    title: 'MongoDB Stateful Application',
    description: 'Deploy MongoDB with MongoExpress using Helm charts and configure ingress.',
    duration: '30 minutes',
    complexity: 'Intermediate',
    topics: ['StatefulSets', 'Persistent Volumes', 'Ingress', 'Secrets Management'],
  },
  {
    title: 'Online Boutique Microservices',
    description: 'Deploy Google\'s Online Boutique with 10 microservices using custom Helm charts.',
    duration: '1 hour',
    complexity: 'Advanced',
    topics: ['Microservices Architecture', 'Service Mesh', 'Load Balancing', 'Monitoring'],
  },
]

export default function HelmPage() {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background with glass morphism */}
        <div className="absolute inset-0 from-orange-500/10 via-red-500/10 to-pink-500/10" />
        <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/50 dark:via-red-950/50 dark:to-pink-950/50 rounded-2xl mx-4 md:mx-8 shadow-lg dark:shadow-xl border border-orange-200/50 dark:border-orange-800/20">
          <div className="text-center py-6 md:py-8 px-6">
            {/* Logo Section */}
            <div className="flex justify-center mb-6 md:mb-6">
              <div className="relative group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                  <Package className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
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
            
            <Badge variant="outline" className="mb-3 md:mb-4 text-xs md:text-sm bg-gradient-to-r from-orange-500/10 to-red-600/10 border-orange-500/20 text-orange-700 dark:text-orange-300 hover:shadow-md transition-all duration-300">
              <span className="inline-flex items-center gap-1">
                <Rocket className="w-4 h-4 mr-1 text-orange-500" />
                The Kubernetes Package Manager
              </span>
            </Badge>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Master Helm
              </span>
              <span className="block bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Package Management
              </span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-7 leading-relaxed max-w-3xl mx-auto">
              Learn to package, deploy, and manage Kubernetes applications with Helm. 
              From basic charts to advanced templating and GitOps workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/helm/introduction">
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
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Helm Features */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Why Use Helm?
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Key features that make Helm essential for Kubernetes</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {helmFeatures.map((feature, index) => (
            <Card key={index} className="text-center bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
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
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Master Helm from basics to advanced concepts</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {helmTopics.map((topic, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="relative p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
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
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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

      {/* Hands-on Demos */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Hands-on Demos
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Practical examples to reinforce your learning</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {demos.map((demo, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="relative p-4 md:p-6">
                <CardTitle className="flex items-center space-x-2 text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <PlayCircle className="h-4 w-4 text-white" />
                  </div>
                  <span>{demo.title}</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="mr-1 h-3 w-3" />
                    {demo.duration}
                  </Badge>
                  <Badge 
                    variant={demo.complexity === 'Intermediate' ? 'secondary' : 'destructive'}
                    className="text-xs"
                  >
                    {demo.complexity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="relative p-4 md:p-6 pt-0">
                <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {demo.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                  {demo.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Run Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 border border-gray-200/60 dark:border-gray-800/20 shadow-lg dark:shadow-2xl">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4 md:mb-6 text-center">
            Key Benefits of Helm
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Simplified Deployment</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Deploy complex applications with a single command</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Globe className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Environment Management</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Manage different environments with ease</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Package className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Reusable Packages</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Create and share application packages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 text-center border border-gray-200/60 dark:border-gray-800/20 shadow-lg dark:shadow-2xl">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-4">
            Ready to Master Helm?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Start your journey to becoming a Helm expert with our comprehensive tutorials and hands-on demos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/helm/introduction">
                <Package className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Start Learning
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Code className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              View Examples
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

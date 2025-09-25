import Link from 'next/link'
import { ArrowRight, Zap, Code, PlayCircle, FileText, Settings, Clock, Database, Monitor, AlertTriangle, Sparkles, Layers, Activity, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const operatorTopics = [
  {
    title: 'CRDs & Custom Resources',
    description: 'Learn to extend Kubernetes API with Custom Resource Definitions and custom resources.',
    icon: Code,
    href: '/operators/crds',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    topics: ['CRD Schema Definition', 'API Versioning', 'Validation Rules', 'Resource Lifecycle'],
  },
  {
    title: 'Operator Concepts',
    description: 'Understand what operators are, how they work, and when to use them.',
    icon: FileText,
    href: '/operators/concepts',
    duration: '3-4 hours',
    difficulty: 'Beginner',
    topics: ['Operator Pattern', 'Controller Development', 'Operator SDK', 'Lifecycle Management'],
  },
  {
    title: 'Prometheus Operator',
    description: 'Deploy and configure Prometheus monitoring stack using the Prometheus Operator.',
    icon: PlayCircle,
    href: '/operators/prometheus-operator',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    topics: ['Prometheus Stack', 'Grafana', 'Alertmanager', 'ServiceMonitor'],
  },
  {
    title: 'Splunk Operator',
    description: 'Deploy Splunk Enterprise using the Splunk Operator for Kubernetes.',
    icon: Database,
    href: '/operators/splunk-operator',
    duration: '3-4 hours',
    difficulty: 'Advanced',
    topics: ['Splunk Enterprise Deployment', 'Universal Forwarder', 'Production Operations', 'Log Management'],
  },
]

const operatorFeatures = [
  {
    title: 'API Extension',
    description: 'Extend Kubernetes API with custom resources and controllers.',
    icon: Zap,
    color: 'bg-muted/500',
  },
  {
    title: 'State Management',
    description: 'Manage complex application state and lifecycle automatically.',
    icon: Settings,
    color: 'bg-green-500',
  },
  {
    title: 'Automation',
    description: 'Automate operational tasks and application management.',
    icon: PlayCircle,
    color: 'bg-yellow-500',
  },
  {
    title: 'Domain Expertise',
    description: 'Encode domain-specific knowledge into software.',
    icon: Code,
    color: 'bg-purple-500',
  },
]

const useCases = [
  {
    title: 'Database Management',
    description: 'Automate database deployment, scaling, and backup operations.',
    examples: ['MySQL Operator', 'PostgreSQL Operator', 'MongoDB Operator'],
  },
  {
    title: 'Monitoring & Observability',
    description: 'Deploy and manage monitoring stacks with ease.',
    examples: ['Prometheus Operator', 'Grafana Operator', 'Jaeger Operator'],
  },
  {
    title: 'Message Queues',
    description: 'Manage message brokers and queue systems.',
    examples: ['Kafka Operator', 'RabbitMQ Operator', 'NATS Operator'],
  },
  {
    title: 'CI/CD Tools',
    description: 'Deploy and manage CI/CD pipelines and tools.',
    examples: ['Jenkins Operator', 'GitLab Operator', 'ArgoCD Operator'],
  },
]

const operatorTypes = [
  {
    type: 'Stateless Applications',
    description: 'Simple applications that don\'t require complex state management.',
    complexity: 'Low',
    example: 'Web Applications, APIs',
    operatorNeeded: 'Usually not needed',
  },
  {
    type: 'Stateful Applications (without Operator)',
    description: 'Complex applications managed manually or with basic K8s resources.',
    complexity: 'Medium',
    example: 'Databases, Message Queues',
    operatorNeeded: 'Manual intervention required',
  },
  {
    type: 'Stateful Applications (with Operator)',
    description: 'Complex applications managed automatically by operators.',
    complexity: 'High',
    example: 'Clustered Databases, Distributed Systems',
    operatorNeeded: 'Fully automated',
  },
]

export default function OperatorsPage() {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background with glass morphism */}
        <div className="absolute inset-0 from-purple-500/10 via-pink-500/10 to-rose-500/10" />
        <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/50 dark:via-pink-950/50 dark:to-rose-950/50 rounded-2xl mx-4 md:mx-8 shadow-lg dark:shadow-xl border border-purple-200/50 dark:border-purple-800/20">
          <div className="text-center py-6 md:py-8 px-6">
            {/* Logo Section */}
            <div className="flex justify-center mb-6 md:mb-6">
              <div className="relative group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                  <Zap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
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
            
            <Badge variant="outline" className="mb-3 md:mb-4 text-xs md:text-sm bg-gradient-to-r from-purple-500/10 to-pink-600/10 border-purple-500/20 text-purple-700 dark:text-purple-300 hover:shadow-md transition-all duration-300">
              <span className="inline-flex items-center gap-1">
                <Rocket className="w-4 h-4 mr-1 text-purple-500" />
                Extend Kubernetes API
              </span>
            </Badge>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Master Kubernetes
              </span>
              <span className="block bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Operators
              </span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-7 leading-relaxed max-w-3xl mx-auto">
              Learn to extend Kubernetes functionality with operators, custom resources, and controllers. 
              Automate complex application lifecycle management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/operators/concepts">
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

      {/* Operator Features */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            What are Operators?
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Key concepts that make operators powerful</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {operatorFeatures.map((feature, index) => (
            <Card key={index} className="text-center bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Types */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Application Types & Operator Usage
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">When to use operators vs standard Kubernetes resources</p>
        </div>
        <div className="space-y-3 md:space-y-4">
          {operatorTypes.map((type, index) => (
            <Card key={index} className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">{type.type}</h3>
                      <Badge 
                        variant={type.complexity === 'Low' ? 'default' : 
                                type.complexity === 'Medium' ? 'secondary' : 'destructive'}
                        className="text-xs"
                      >
                        {type.complexity}
                      </Badge>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2">{type.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">Examples: {type.example}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{type.operatorNeeded}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Common Operator Use Cases
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Real-world applications where operators shine</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="relative p-4 md:p-6">
                <CardTitle className="flex items-center space-x-2 text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Database className="h-4 w-4 text-white" />
                  </div>
                  <span>{useCase.title}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative p-4 md:p-6 pt-0">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm md:text-base">Popular Operators:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <Badge key={exampleIndex} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
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
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Master operators from concepts to implementation</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {operatorTopics.map((topic, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="relative p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
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
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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

      {/* Key Benefits */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-rose-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 border border-gray-200/60 dark:border-gray-800/20 shadow-lg dark:shadow-2xl">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4 md:mb-6 text-center">
            Why Use Operators?
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Automation</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Automate complex operational tasks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Settings className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Domain Knowledge</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Encode expert knowledge into software</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Monitor className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Self-Healing</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Automatically recover from failures</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-rose-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 text-center border border-gray-200/60 dark:border-gray-800/20 shadow-lg dark:shadow-2xl">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-4">
            Ready to Build Operators?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn to extend Kubernetes with custom resources and operators for complex application management.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/operators/concepts">
                <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
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

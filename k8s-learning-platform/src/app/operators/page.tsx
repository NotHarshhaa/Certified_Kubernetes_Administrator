import Link from 'next/link'
import { ArrowRight, Zap, Code, PlayCircle, FileText, Settings, Clock, Database, Monitor, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            ⚙️ Extend Kubernetes API
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Master Kubernetes Operators
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Learn to extend Kubernetes functionality with operators, custom resources, and controllers. 
            Automate complex application lifecycle management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/operators/concepts">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Operator Features */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What are Operators?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operatorFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`p-3 rounded-lg ${feature.color} mx-auto mb-4 w-fit`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Types */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Application Types & Operator Usage</h2>
        <div className="space-y-4">
          {operatorTypes.map((type, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{type.type}</h3>
                      <Badge 
                        variant={type.complexity === 'Low' ? 'default' : 
                                type.complexity === 'Medium' ? 'secondary' : 'destructive'}
                      >
                        {type.complexity}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{type.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">Examples: {type.example}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-muted-foreground">{type.operatorNeeded}</span>
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
        <h2 className="text-2xl font-bold text-foreground mb-6">Common Operator Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-blue-600" />
                  <span>{useCase.title}</span>
                </CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Popular Operators:</h4>
                  <div className="flex flex-wrap gap-2">
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
        <h2 className="text-2xl font-bold text-foreground mb-6">Learning Path</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {operatorTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <topic.icon className="h-6 w-6 text-yellow-600" />
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

      {/* Key Benefits */}
      <div className="bg-yellow-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Why Use Operators?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Automation</h3>
            <p className="text-sm text-muted-foreground">Automate complex operational tasks</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Domain Knowledge</h3>
            <p className="text-sm text-muted-foreground">Encode expert knowledge into software</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Monitor className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Self-Healing</h3>
            <p className="text-sm text-muted-foreground">Automatically recover from failures</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Build Operators?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Learn to extend Kubernetes with custom resources and operators for complex application management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/operators/concepts">
              <Zap className="mr-2 h-5 w-5" />
              Start Learning
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Code className="mr-2 h-5 w-5" />
            View Examples
          </Button>
        </div>
      </div>
    </div>
  )
}

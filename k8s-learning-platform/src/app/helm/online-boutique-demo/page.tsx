import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, ShoppingCart, Layers, Zap, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Microservices Architecture',
    description: 'Understanding the Online Boutique microservices structure',
    icon: Layers,
    duration: '2-3 hours',
    topics: ['Service Dependencies', 'Database Connections', 'API Communication', 'Service Discovery', 'Load Balancing']
  },
  {
    title: 'Helm Chart Structure',
    description: 'Analyzing the Online Boutique Helm chart organization',
    icon: Code,
    duration: '2-3 hours',
    topics: ['Chart Dependencies', 'Subcharts', 'Global Values', 'Template Organization', 'Value Inheritance']
  },
  {
    title: 'Deployment Strategies',
    description: 'Deploying and managing the Online Boutique application',
    icon: Settings,
    duration: '3-4 hours',
    topics: ['Environment Configuration', 'Resource Management', 'Scaling Strategies', 'Rolling Updates', 'Health Checks']
  },
  {
    title: 'Production Considerations',
    description: 'Production-ready deployment patterns and best practices',
    icon: Database,
    duration: '2-3 hours',
    topics: ['Security Configuration', 'Monitoring Setup', 'Logging Configuration', 'Backup Strategies', 'Disaster Recovery']
  }
]

const prerequisites = [
  'Understanding of Helm chart structure',
  'Basic knowledge of microservices architecture',
  'Experience with Kubernetes deployments',
  'Familiarity with container orchestration'
]

export default function HelmOnlineBoutiqueDemoPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🛒 Helm Demo Application
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Online Boutique Demo
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Learn Helm through a real-world microservices application. Deploy and manage 
            the Google Online Boutique using Helm charts and advanced templating techniques.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for the Online Boutique demo</CardDescription>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Learning Topics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500">
                    {(() => {
                      const IconComponent = topic.icon;
                      return <IconComponent className="h-6 w-6 text-white" />;
                    })()}
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
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Learning Objectives:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {topic.topics.map((subtopic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {subtopic}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Architecture */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Application Architecture</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2 text-blue-500" />
                Frontend Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                User-facing services that handle web traffic and user interactions.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Frontend - React web application</li>
                <li>• Load Generator - Traffic simulation</li>
                <li>• Payment Service - Payment processing</li>
                <li>• Shipping Service - Order fulfillment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-green-500" />
                Backend Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Core business logic and data management services.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Product Catalog Service</li>
                <li>• Cart Service - Shopping cart management</li>
                <li>• Recommendation Service</li>
                <li>• Currency Service</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="h-5 w-5 mr-2 text-purple-500" />
                Data Layer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Database and storage services for persistent data.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Redis - Caching and session storage</li>
                <li>• MongoDB - Product catalog data</li>
                <li>• MySQL - User and order data</li>
                <li>• Elasticsearch - Search functionality</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-orange-500" />
                Observability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Monitoring, logging, and tracing services.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Jaeger - Distributed tracing</li>
                <li>• Prometheus - Metrics collection</li>
                <li>• Grafana - Visualization</li>
                <li>• Fluentd - Log aggregation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Deployment Scenarios */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Deployment Scenarios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Development</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Local development with minimal resources and simplified configuration.
              </p>
              <Badge variant="outline">Minimal Resources</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Staging</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Pre-production environment with production-like configuration.
              </p>
              <Badge variant="outline">Production-like</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Production</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                High-availability production deployment with monitoring and security.
              </p>
              <Badge variant="outline">High Availability</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Continue?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Master the Online Boutique demo, then learn about Helmfile for advanced chart management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/helm/helmfile">
              <Settings className="mr-2 h-5 w-5" />
              Next: Helmfile
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/helm">
              <ArrowRight className="mr-2 h-5 w-5" />
              Back to Helm Overview
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

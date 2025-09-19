import Link from 'next/link'
import { ArrowRight, Monitor, Code, PlayCircle, FileText, Settings, Clock, AlertTriangle, BarChart3, Bell, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const prometheusTopics = [
  {
    title: 'Introduction to Prometheus',
    description: 'Learn the fundamentals of Prometheus monitoring, metrics, and architecture.',
    icon: Monitor,
    href: '/prometheus/introduction',
    duration: '2-3 hours',
    difficulty: 'Beginner',
    topics: ['Prometheus Architecture', 'Metrics Types', 'PromQL', 'Pull Model'],
  },
  {
    title: 'Installation & Setup',
    description: 'Deploy Prometheus monitoring stack in Kubernetes using operators.',
    icon: Settings,
    href: '/prometheus/installation',
    duration: '1-2 hours',
    difficulty: 'Intermediate',
    topics: ['Prometheus Operator', 'Helm Charts', 'ServiceMonitor', 'Namespace Setup'],
  },
  {
    title: 'Grafana Dashboards',
    description: 'Create and customize Grafana dashboards for Kubernetes monitoring.',
    icon: BarChart3,
    href: '/prometheus/grafana',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    topics: ['Dashboard Creation', 'Panel Configuration', 'Data Sources', 'Alerting'],
  },
  {
    title: 'Alert Rules',
    description: 'Configure Prometheus alert rules and understand the alerting lifecycle.',
    icon: AlertTriangle,
    href: '/prometheus/alert-rules',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    topics: ['Alert Rule Syntax', 'PromQL for Alerts', 'Rule Testing', 'Best Practices'],
  },
  {
    title: 'Alertmanager',
    description: 'Configure Alertmanager for alert routing, grouping, and notifications.',
    icon: Bell,
    href: '/prometheus/alertmanager',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    topics: ['Alert Routing', 'Notification Channels', 'Grouping', 'Inhibition Rules'],
  },
  {
    title: 'Third-party Applications',
    description: 'Monitor external applications using exporters and custom metrics.',
    icon: PlayCircle,
    href: '/prometheus/third-party-apps',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    topics: ['Exporters', 'Redis Monitoring', 'Custom Metrics', 'ServiceMonitor'],
  },
  {
    title: 'Custom Applications',
    description: 'Instrument your own applications to expose custom metrics.',
    icon: Code,
    href: '/prometheus/custom-apps',
    duration: '3-4 hours',
    difficulty: 'Advanced',
    topics: ['Client Libraries', 'Custom Metrics', 'Node.js Example', 'Dashboard Creation'],
  },
]

const monitoringFeatures = [
  {
    title: 'Metrics Collection',
    description: 'Collect metrics from applications, services, and infrastructure.',
    icon: Database,
    color: 'bg-blue-500',
  },
  {
    title: 'PromQL Querying',
    description: 'Powerful query language for analyzing time-series data.',
    icon: Code,
    color: 'bg-green-500',
  },
  {
    title: 'Alerting',
    description: 'Configure alerts based on metric thresholds and conditions.',
    icon: Bell,
    color: 'bg-yellow-500',
  },
  {
    title: 'Visualization',
    description: 'Create rich dashboards and visualizations with Grafana.',
    icon: BarChart3,
    color: 'bg-purple-500',
  },
]

const monitoringStack = [
  {
    component: 'Prometheus Server',
    description: 'Time-series database and metrics collection engine.',
    role: 'Data Collection & Storage',
    features: ['Metrics Scraping', 'PromQL Engine', 'Time-series DB', 'Web UI'],
  },
  {
    component: 'Grafana',
    description: 'Visualization and dashboard platform for metrics.',
    role: 'Visualization & Dashboards',
    features: ['Dashboard Creation', 'Panel Types', 'Data Sources', 'User Management'],
  },
  {
    component: 'Alertmanager',
    description: 'Alert routing and notification management system.',
    role: 'Alert Management',
    features: ['Alert Routing', 'Grouping', 'Notifications', 'Silencing'],
  },
  {
    component: 'Exporters',
    description: 'Bridge between applications and Prometheus metrics.',
    role: 'Metrics Exposure',
    features: ['Node Exporter', 'App Exporters', 'Custom Metrics', 'Service Discovery'],
  },
]

const metricsTypes = [
  {
    type: 'Counter',
    description: 'A cumulative metric that represents a single monotonically increasing counter.',
    example: 'http_requests_total',
    useCase: 'Request counts, error counts',
  },
  {
    type: 'Gauge',
    description: 'A metric that represents a single numerical value that can arbitrarily go up and down.',
    example: 'memory_usage_bytes',
    useCase: 'Current memory usage, active connections',
  },
  {
    type: 'Histogram',
    description: 'A metric that represents a distribution of values in buckets.',
    example: 'http_request_duration_seconds',
    useCase: 'Request latency, response sizes',
  },
  {
    type: 'Summary',
    description: 'Similar to histogram but with configurable quantiles.',
    example: 'http_request_duration_seconds_summary',
    useCase: 'Latency percentiles, quantiles',
  },
]

export default function PrometheusPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            📊 Monitoring & Alerting Platform
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Master Prometheus Monitoring
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Learn to monitor Kubernetes clusters and applications with Prometheus, Grafana, and Alertmanager. 
            Set up comprehensive observability and alerting systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/prometheus/introduction">
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

      {/* Monitoring Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Prometheus Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {monitoringFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`p-3 rounded-lg ${feature.color} mx-auto mb-4 w-fit`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Monitoring Stack */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Monitoring Stack Components</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {monitoringStack.map((component, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Monitor className="h-5 w-5 text-blue-600" />
                  <span>{component.component}</span>
                </CardTitle>
                <CardDescription>{component.description}</CardDescription>
                <Badge variant="outline">{component.role}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {component.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Metrics Types */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Prometheus Metrics Types</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {metricsTypes.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <span>{metric.type}</span>
                </CardTitle>
                <CardDescription>{metric.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Example:</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">{metric.example}</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Use Cases:</h4>
                    <p className="text-sm text-gray-600">{metric.useCase}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Path</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {prometheusTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <topic.icon className="h-6 w-6 text-purple-600" />
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
      <div className="bg-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Use Prometheus?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Time-Series Database</h3>
            <p className="text-sm text-gray-600">Efficient storage and querying of time-series data</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Powerful Querying</h3>
            <p className="text-sm text-gray-600">PromQL for complex metric analysis</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Advanced Alerting</h3>
            <p className="text-sm text-gray-600">Sophisticated alerting and notification system</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Monitor with Prometheus?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Build comprehensive monitoring and alerting systems for your Kubernetes clusters and applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/prometheus/introduction">
              <Monitor className="mr-2 h-5 w-5" />
              Start Learning
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <BarChart3 className="mr-2 h-5 w-5" />
            View Dashboards
          </Button>
        </div>
      </div>
    </div>
  )
}

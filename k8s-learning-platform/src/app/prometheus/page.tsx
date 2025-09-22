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
    color: 'bg-muted/500',
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
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm">
            📊 Monitoring & Alerting Platform
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Get Started with Prometheus
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-2">
            Learn to monitor Kubernetes clusters and applications with Prometheus, Grafana, and Alertmanager. 
            Set up comprehensive observability and alerting systems from scratch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" asChild className="text-sm md:text-base">
              <Link href="/prometheus/introduction">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-sm md:text-base">
              <PlayCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Start Guide */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">Quick Start Guide</h2>
        <div className="grid md:grid-cols-4 gap-3 md:gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-4 md:pt-6">
              <div className="w-12 h-12 bg-muted/500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Install Prometheus</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Deploy Prometheus Operator using Helm</p>
              <Button size="sm" asChild className="mt-3 text-xs">
                <Link href="/prometheus/installation">Start Installation</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-4 md:pt-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Setup Dashboards</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Configure Grafana with pre-built dashboards</p>
              <Button size="sm" asChild className="mt-3 text-xs">
                <Link href="/prometheus/grafana">Setup Grafana</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-4 md:pt-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Configure Alerts</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Set up alert rules and notifications</p>
              <Button size="sm" asChild className="mt-3 text-xs">
                <Link href="/prometheus/alert-rules">Setup Alerts</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-4 md:pt-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Monitor Apps</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Add custom metrics to your applications</p>
              <Button size="sm" asChild className="mt-3 text-xs">
                <Link href="/prometheus/custom-apps">Monitor Apps</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Monitoring Features */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">Prometheus Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {monitoringFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className={`p-3 rounded-lg ${feature.color} mx-auto mb-4 w-fit`}>
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Monitoring Stack */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Monitoring Stack Components</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {monitoringStack.map((component, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <Monitor className="h-5 w-5 text-blue-600" />
                  <span>{component.component}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">{component.description}</CardDescription>
                <Badge variant="outline" className="w-fit">{component.role}</Badge>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm md:text-base">Key Features:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
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
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Prometheus Metrics Types</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {metricsTypes.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <span>{metric.type}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">{metric.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm md:text-base">Example:</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-xs md:text-sm">{metric.example}</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-sm md:text-base">Use Cases:</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{metric.useCase}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Learning Path</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {prometheusTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <topic.icon className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg">{topic.title}</CardTitle>
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
              <CardContent className="p-4 md:p-6 pt-0">
                <CardDescription className="mb-4 text-sm md:text-base">
                  {topic.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                  {topic.topics.map((subtopic, subtopicIndex) => (
                    <Badge key={subtopicIndex} variant="secondary" className="text-xs">
                      {subtopic}
                    </Badge>
                  ))}
                </div>
                <Button asChild size="sm" className="text-xs md:text-sm">
                  <Link href={topic.href}>
                    Start Topic
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-muted/50 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">Why Use Prometheus?</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Database className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Time-Series Database</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Efficient storage and querying of time-series data</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Code className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Powerful Querying</h3>
            <p className="text-xs md:text-sm text-muted-foreground">PromQL for complex metric analysis</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Bell className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Advanced Alerting</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Sophisticated alerting and notification system</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted/50 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Monitor with Prometheus?</h2>
        <p className="text-sm md:text-lg text-muted-foreground mb-6">
          Build comprehensive monitoring and alerting systems for your Kubernetes clusters and applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/introduction">
              <Monitor className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Start Learning
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-sm md:text-base">
            <BarChart3 className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            View Dashboards
          </Button>
        </div>
      </div>
    </div>
  )
}

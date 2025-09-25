import Link from 'next/link'
import { ArrowRight, Monitor, Code, PlayCircle, FileText, Settings, Clock, AlertTriangle, BarChart3, Bell, Database, Sparkles, Layers, Activity, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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
    <div className="space-y-8 md:space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background with glass morphism */}
        <div className="absolute inset-0 from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-cyan-950/50 dark:via-blue-950/50 dark:to-purple-950/50 rounded-2xl mx-4 md:mx-8 shadow-lg dark:shadow-xl border border-cyan-200/50 dark:border-cyan-800/20">
          <div className="text-center py-6 md:py-8 px-6">
            {/* Logo Section */}
            <div className="flex justify-center mb-6 md:mb-6">
              <div className="relative group">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                  <Monitor className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
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
            
            <Badge variant="outline" className="mb-3 md:mb-4 text-xs md:text-sm bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-cyan-500/20 text-cyan-700 dark:text-cyan-300 hover:shadow-md transition-all duration-300">
              <span className="inline-flex items-center gap-1">
                <Rocket className="w-4 h-4 mr-1 text-cyan-500" />
                Monitoring & Alerting Platform
              </span>
            </Badge>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Get Started with
              </span>
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Prometheus
              </span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-7 leading-relaxed max-w-3xl mx-auto">
              Learn to monitor Kubernetes clusters and applications with Prometheus, Grafana, and Alertmanager. 
              Set up comprehensive observability and alerting systems from scratch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/prometheus/introduction">
                  Get Started
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

      {/* Quick Start Guide */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Quick Start Guide
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Get up and running with Prometheus in 4 simple steps</p>
        </div>
        <div className="grid md:grid-cols-4 gap-3 md:gap-6">
          <Card className="text-center bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="pt-3 md:pt-6 pb-3 md:pb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <span className="text-white font-bold text-lg md:text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Install Prometheus</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3">Deploy Prometheus Operator using Helm</p>
              <Button 
                size="sm" 
                asChild 
                className="text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/prometheus/installation">Start Installation</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="pt-3 md:pt-6 pb-3 md:pb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <span className="text-white font-bold text-lg md:text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Setup Dashboards</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3">Configure Grafana with pre-built dashboards</p>
              <Button 
                size="sm" 
                asChild 
                className="text-xs bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/prometheus/grafana">Setup Grafana</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="pt-3 md:pt-6 pb-3 md:pb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <span className="text-white font-bold text-lg md:text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Configure Alerts</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3">Set up alert rules and notifications</p>
              <Button 
                size="sm" 
                asChild 
                className="text-xs bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/prometheus/alert-rules">Setup Alerts</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="pt-3 md:pt-6 pb-3 md:pb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <span className="text-white font-bold text-lg md:text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Monitor Apps</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3">Add custom metrics to your applications</p>
              <Button 
                size="sm" 
                asChild 
                className="text-xs bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/prometheus/custom-apps">Monitor Apps</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Monitoring Features */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Prometheus Features
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Core capabilities that make Prometheus powerful</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {monitoringFeatures.map((feature, index) => (
            <Card key={index} className="text-center bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Monitoring Stack */}
      <div>
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Monitoring Stack Components
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Essential components of a complete monitoring solution</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {monitoringStack.map((component, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="relative p-4 md:p-6">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg font-bold text-gray-900 dark:text-white">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Monitor className="h-4 w-4 text-white" />
                  </div>
                  <span>{component.component}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">{component.description}</CardDescription>
                <Badge variant="outline" className="w-fit text-xs">{component.role}</Badge>
              </CardHeader>
              <CardContent className="relative p-4 md:p-6 pt-0">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm md:text-base">Key Features:</h4>
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
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-3">
            Prometheus Metrics Types
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Understanding different types of metrics in Prometheus</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {metricsTypes.map((metric, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="relative p-4 md:p-6">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg font-bold text-gray-900 dark:text-white">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <span>{metric.type}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400">{metric.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative p-4 md:p-6 pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1 text-sm md:text-base">Example:</h4>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs md:text-sm text-gray-800 dark:text-gray-200">{metric.example}</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1 text-sm md:text-base">Use Cases:</h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{metric.useCase}</p>
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
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Master Prometheus from basics to advanced monitoring</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {prometheusTopics.map((topic, index) => (
            <Card key={index} className="group bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardHeader className="relative p-4 md:p-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                    <topic.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2">{topic.title}</CardTitle>
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
                <CardDescription className="mb-4 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
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
                  size="sm" 
                  className="text-xs md:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 border border-gray-200/60 dark:border-gray-800/20 shadow-lg dark:shadow-2xl">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4 md:mb-6 text-center">
            Why Use Prometheus?
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Database className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Time-Series Database</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Efficient storage and querying of time-series data</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Code className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Powerful Querying</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">PromQL for complex metric analysis</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                <Bell className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm md:text-base">Advanced Alerting</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Sophisticated alerting and notification system</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
        <div className="relative bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-lg p-4 md:p-8 text-center border border-gray-200/60 dark:border-gray-800/20 shadow-lg dark:shadow-2xl">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 md:mb-4">
            Ready to Monitor with Prometheus?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Build comprehensive monitoring and alerting systems for your Kubernetes clusters and applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/prometheus/introduction">
                <Monitor className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Start Learning
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-sm md:text-lg px-6 md:px-10 py-3 md:py-5 bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <BarChart3 className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              View Dashboards
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

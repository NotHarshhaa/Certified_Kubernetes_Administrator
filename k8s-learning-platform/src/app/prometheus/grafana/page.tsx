import Link from 'next/link'
import { ArrowRight, BarChart3, Monitor, Settings, Code, CheckCircle, Clock, Eye, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const dashboardTopics = [
  {
    title: 'Kubernetes Cluster Overview',
    description: 'Monitor cluster health, resource usage, and pod status',
    icon: Monitor,
    content: 'Get a comprehensive view of your Kubernetes cluster with pre-built dashboards showing CPU, memory, and network metrics.',
    features: ['Cluster resource utilization', 'Pod status overview', 'Node health monitoring', 'Namespace resource usage'],
    dashboardId: '7249'
  },
  {
    title: 'Node Exporter Metrics',
    description: 'Hardware and OS-level metrics for all nodes',
    icon: BarChart3,
    content: 'Monitor individual node performance with detailed metrics from node-exporter including CPU, memory, disk, and network statistics.',
    features: ['CPU usage by core', 'Memory utilization', 'Disk I/O metrics', 'Network interface statistics'],
    dashboardId: '11074'
  },
  {
    title: 'Prometheus Stats',
    description: 'Monitor Prometheus server performance and metrics',
    icon: Settings,
    content: 'Track Prometheus server health, scrape performance, and query statistics to ensure optimal monitoring setup.',
    features: ['Scrape duration metrics', 'Target health status', 'Query performance', 'Storage utilization'],
    dashboardId: '2'
  },
  {
    title: 'Custom Application Metrics',
    description: 'Create dashboards for your custom applications',
    icon: Code,
    content: 'Build custom dashboards to monitor your applications with business-specific metrics and KPIs.',
    features: ['Custom metric visualization', 'Business KPI tracking', 'Application performance', 'User behavior metrics'],
    dashboardId: 'custom'
  }
]

const panelTypes = [
  {
    type: 'Time Series',
    description: 'Display metrics over time with various visualization options',
    useCase: 'CPU usage, memory consumption, request rates',
    icon: BarChart3
  },
  {
    type: 'Stat Panel',
    description: 'Show single values or simple statistics',
    useCase: 'Current values, totals, averages',
    icon: Monitor
  },
  {
    type: 'Table Panel',
    description: 'Display data in tabular format',
    useCase: 'Top queries, error logs, resource lists',
    icon: Settings
  },
  {
    type: 'Gauge Panel',
    description: 'Circular gauge for percentage-based metrics',
    useCase: 'CPU utilization, memory usage, disk space',
    icon: Eye
  }
]

const dataSources = [
  {
    name: 'Prometheus',
    type: 'Time Series Database',
    description: 'Primary data source for metrics collection',
    configuration: {
      url: 'http://prometheus:9090',
      access: 'Server (default)',
      authentication: 'None'
    }
  },
  {
    name: 'Loki',
    type: 'Log Aggregation',
    description: 'Centralized logging for log-based dashboards',
    configuration: {
      url: 'http://loki:3100',
      access: 'Server (default)',
      authentication: 'None'
    }
  }
]

const bestPractices = [
  'Use consistent color schemes across panels',
  'Set appropriate refresh intervals (30s for real-time, 5m for historical)',
  'Organize panels logically with clear titles',
  'Use variables for dynamic filtering',
  'Implement proper alerting thresholds',
  'Regular dashboard maintenance and optimization'
]

export default function GrafanaPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm">
            📊 Dashboard & Visualization
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Grafana Dashboards
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-2">
            Create comprehensive monitoring dashboards with Grafana. Learn to visualize metrics, 
            set up alerts, and build custom dashboards for your applications.
          </p>
        </div>
      </div>

      {/* Dashboard Topics */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">Dashboard Types</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {dashboardTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-muted/500 rounded-lg">
                    <topic.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg">{topic.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {topic.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-foreground mb-4 text-sm md:text-base">
                  {topic.content}
                </p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-foreground text-sm md:text-base">Key Features:</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {topic.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs md:text-sm">
                    <Download className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                    Import Dashboard
                  </Button>
                  <Button size="sm" className="text-xs md:text-sm">
                    <Eye className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                    View Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Panel Types */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Panel Types</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {panelTypes.map((panel, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="p-3 bg-purple-500 rounded-lg mx-auto mb-4 w-fit">
                  <panel.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{panel.type}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">{panel.description}</p>
                <p className="text-xs text-muted-foreground">Use case: {panel.useCase}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Data Sources */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Data Sources Configuration</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {dataSources.map((source, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <span>{source.name}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  {source.description}
                </CardDescription>
                <Badge variant="outline" className="w-fit">{source.type}</Badge>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">URL:</span> 
                    <code className="bg-gray-100 px-2 py-1 rounded ml-2 text-xs">{source.configuration.url}</code>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Access:</span> 
                    <span className="ml-2 text-muted-foreground">{source.configuration.access}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Authentication:</span> 
                    <span className="ml-2 text-muted-foreground">{source.configuration.authentication}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Dashboard Best Practices</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Design Guidelines</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Follow these best practices to create effective and maintainable dashboards.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 md:space-y-3">
              {bestPractices.map((practice, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{practice}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Setup Guide */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Quick Setup Guide</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Access Grafana</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Get started with Grafana dashboards in minutes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">1. Port Forward to Grafana</h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm">
                    <span className="text-blue-400">$</span> kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">2. Access Grafana UI</h4>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm md:text-base text-foreground">
                    Open your browser and navigate to <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:3000</code>
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">3. Login Credentials</h4>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm md:text-base text-foreground">
                    Username: <code className="bg-gray-200 px-2 py-1 rounded">admin</code><br/>
                    Password: <code className="bg-gray-200 px-2 py-1 rounded">prom-operator</code>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Ready to Create Alerts?</h2>
        <p className="text-sm md:text-lg text-muted-foreground mb-6">
          Now that you have dashboards set up, learn how to configure alerting rules for proactive monitoring.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/alert-rules">
              <Settings className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Configure Alert Rules
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/alertmanager">
              <Monitor className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Setup Alertmanager
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

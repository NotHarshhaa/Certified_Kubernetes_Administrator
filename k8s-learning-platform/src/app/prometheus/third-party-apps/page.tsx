import Link from 'next/link'
import { ArrowRight, PlayCircle, Database, Monitor, Code, CheckCircle, Settings, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const exporters = [
  {
    title: 'Redis Exporter',
    description: 'Monitor Redis database performance and metrics',
    icon: Database,
    content: 'Track Redis memory usage, connection counts, hit ratios, and command statistics.',
    metrics: ['redis_memory_used_bytes', 'redis_connected_clients', 'redis_keyspace_hits', 'redis_commands_processed_total'],
    deployment: 'redis-exporter',
    port: 9121
  },
  {
    title: 'MySQL Exporter',
    description: 'Monitor MySQL database health and performance',
    icon: Database,
    content: 'Collect MySQL server metrics including query performance, connection status, and replication lag.',
    metrics: ['mysql_up', 'mysql_global_status_queries', 'mysql_global_status_threads_connected', 'mysql_slave_lag_seconds'],
    deployment: 'mysql-exporter',
    port: 9104
  },
  {
    title: 'Nginx Exporter',
    description: 'Monitor Nginx web server metrics',
    icon: Monitor,
    content: 'Track HTTP request rates, response times, error rates, and upstream server health.',
    metrics: ['nginx_http_requests_total', 'nginx_http_request_duration_seconds', 'nginx_upstream_requests_total', 'nginx_upstream_response_time'],
    deployment: 'nginx-exporter',
    port: 9113
  },
  {
    title: 'Elasticsearch Exporter',
    description: 'Monitor Elasticsearch cluster and indices',
    icon: Settings,
    content: 'Monitor cluster health, index statistics, shard status, and search performance.',
    metrics: ['elasticsearch_cluster_health_status', 'elasticsearch_indices_docs', 'elasticsearch_jvm_memory_used_bytes', 'elasticsearch_nodes_count'],
    deployment: 'elasticsearch-exporter',
    port: 9114
  }
]

const monitoringSetup = [
  {
    step: '1',
    title: 'Deploy Exporter',
    description: 'Install the appropriate exporter for your application',
    content: 'Use Helm charts or Kubernetes manifests to deploy exporters alongside your applications.',
    commands: [
      'helm install redis-exporter prometheus-community/prometheus-redis-exporter',
      'kubectl apply -f redis-exporter-deployment.yaml'
    ]
  },
  {
    step: '2',
    title: 'Create ServiceMonitor',
    description: 'Configure Prometheus to scrape exporter metrics',
    content: 'Define ServiceMonitor resources to tell Prometheus how to discover and scrape your exporters.',
    commands: [
      'apiVersion: monitoring.coreos.com/v1',
      'kind: ServiceMonitor',
      'metadata:',
      '  name: redis-exporter-monitor'
    ]
  },
  {
    step: '3',
    title: 'Configure Dashboards',
    description: 'Import Grafana dashboards for visualization',
    content: 'Use pre-built dashboards or create custom ones to visualize your application metrics.',
    commands: [
      'Dashboard ID: 763',
      'Import dashboard in Grafana',
      'Configure data source as Prometheus'
    ]
  },
  {
    step: '4',
    title: 'Set Up Alerts',
    description: 'Create alert rules for critical metrics',
    content: 'Define PrometheusRule resources to alert on important application metrics.',
    commands: [
      'apiVersion: monitoring.coreos.com/v1',
      'kind: PrometheusRule',
      'metadata:',
      '  name: redis-alerts'
    ]
  }
]

const sampleApplications = [
  {
    name: 'Redis Monitoring',
    description: 'Complete Redis monitoring setup with exporter and dashboards',
    components: ['Redis Exporter', 'ServiceMonitor', 'Grafana Dashboard', 'Alert Rules'],
    dashboardId: '763',
    alerts: ['High Memory Usage', 'Connection Limit', 'Slow Commands']
  },
  {
    name: 'MySQL Monitoring',
    description: 'Comprehensive MySQL database monitoring solution',
    components: ['MySQL Exporter', 'ServiceMonitor', 'Grafana Dashboard', 'Alert Rules'],
    dashboardId: '7362',
    alerts: ['Connection Limit', 'Slow Queries', 'Replication Lag']
  },
  {
    name: 'Nginx Monitoring',
    description: 'Web server monitoring with performance metrics',
    components: ['Nginx Exporter', 'ServiceMonitor', 'Grafana Dashboard', 'Alert Rules'],
    dashboardId: '12559',
    alerts: ['High Error Rate', 'Slow Response Time', 'Upstream Failures']
  }
]

const bestPractices = [
  'Use official exporters when available for better compatibility',
  'Configure appropriate scrape intervals based on application criticality',
  'Set up proper labels for service discovery and routing',
  'Use consistent naming conventions for ServiceMonitors',
  'Monitor exporter health and restart failed exporters',
  'Regularly update exporters to latest versions',
  'Test alert rules in staging environments before production'
]

export default function ThirdPartyAppsPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm">
            🔗 Third-party Application Monitoring
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Monitor External Applications
          </h1>
          <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-2">
            Learn to monitor third-party applications like Redis, MySQL, Nginx, and more using 
            Prometheus exporters. Set up comprehensive monitoring for your entire application stack.
          </p>
        </div>
      </div>

      {/* Popular Exporters */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Popular Exporters</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {exporters.map((exporter, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <exporter.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg">{exporter.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {exporter.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {exporter.content}
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {exporter.metrics.map((metric, metricIndex) => (
                        <Badge key={metricIndex} variant="secondary" className="text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Deployment:</span>
                      <code className="ml-1 bg-gray-100 px-1 rounded text-xs">{exporter.deployment}</code>
                    </div>
                    <div>
                      <span className="font-medium">Port:</span>
                      <span className="ml-1 text-gray-600">{exporter.port}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Setup Process */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Monitoring Setup Process</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {monitoringSetup.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg">{step.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {step.content}
                </p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm overflow-x-auto">
                    {step.commands.map((cmd, cmdIndex) => (
                      <div key={cmdIndex} className="mb-1">
                        {cmd.startsWith('apiVersion') || cmd.startsWith('kind') || cmd.startsWith('metadata') || cmd.startsWith('  name') ? 
                          <span className="text-blue-400">{cmd}</span> :
                          <span><span className="text-blue-400">$</span> {cmd}</span>
                        }
                      </div>
                    ))}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sample Applications */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Sample Monitoring Setups</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {sampleApplications.map((app, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-base md:text-lg">{app.name}</CardTitle>
                <CardDescription className="text-sm">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Components:</h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {app.components.map((component, compIndex) => (
                        <Badge key={compIndex} variant="secondary" className="text-xs">
                          {component}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Dashboard ID:</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-xs">{app.dashboardId}</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Alert Types:</h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {app.alerts.map((alert, alertIndex) => (
                        <Badge key={alertIndex} variant="outline" className="text-xs">
                          {alert}
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

      {/* Best Practices */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Best Practices</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Monitoring Guidelines</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Follow these best practices for effective third-party application monitoring.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 md:space-y-3">
              {bestPractices.map((practice, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{practice}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start Commands */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Quick Start Commands</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Common Exporter Deployments</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Quick deployment commands for popular exporters using Helm.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Redis Exporter</h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm">
                    <span className="text-blue-400">$</span> helm install redis-exporter prometheus-community/prometheus-redis-exporter \
                    <br/>  --set redisAddress=redis://redis-service:6379
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">MySQL Exporter</h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm">
                    <span className="text-blue-400">$</span> helm install mysql-exporter prometheus-community/prometheus-mysql-exporter \
                    <br/>  --set mysql.host=mysql-service --set mysql.user=exporter
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Nginx Exporter</h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm">
                    <span className="text-blue-400">$</span> helm install nginx-exporter prometheus-community/prometheus-nginx-exporter \
                    <br/>  --set nginx.scrapeUri=http://nginx-service/nginx_status
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <div className="bg-green-50 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ready to Monitor Your Own Apps?</h2>
        <p className="text-sm md:text-lg text-gray-600 mb-6">
          Now that you can monitor third-party applications, learn how to instrument your own applications with custom metrics.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/custom-apps">
              <Code className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Custom Applications
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus">
              <ArrowRight className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Back to Overview
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight, AlertTriangle, Code, Clock, CheckCircle, Settings, Zap, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const alertRuleTypes = [
  {
    title: 'High CPU Usage',
    description: 'Alert when CPU usage exceeds threshold',
    icon: AlertTriangle,
    content: 'Monitor CPU utilization across nodes and pods to prevent performance degradation.',
    severity: 'warning',
    promql: '100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80',
    for: '5m',
    labels: {
      severity: 'warning',
      service: 'cpu'
    }
  },
  {
    title: 'Memory Usage Alert',
    description: 'Alert when memory usage is critically high',
    icon: Zap,
    content: 'Track memory consumption to prevent out-of-memory errors and system instability.',
    severity: 'critical',
    promql: '(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100 > 90',
    for: '2m',
    labels: {
      severity: 'critical',
      service: 'memory'
    }
  },
  {
    title: 'Pod CrashLoopBackOff',
    description: 'Detect pods in crash loop state',
    icon: Bell,
    content: 'Identify pods that are repeatedly failing and restarting, indicating application issues.',
    severity: 'critical',
    promql: 'kube_pod_status_phase{phase="Running"} == 0 and kube_pod_status_phase{phase="Pending"} == 0',
    for: '1m',
    labels: {
      severity: 'critical',
      service: 'pods'
    }
  },
  {
    title: 'Disk Space Warning',
    description: 'Monitor available disk space',
    icon: Settings,
    content: 'Prevent disk space issues that could cause service failures or data loss.',
    severity: 'warning',
    promql: '(1 - (node_filesystem_avail_bytes / node_filesystem_size_bytes)) * 100 > 85',
    for: '10m',
    labels: {
      severity: 'warning',
      service: 'disk'
    }
  }
]

const alertRuleStructure = [
  {
    component: 'Alert Name',
    description: 'Unique identifier for the alert',
    example: 'HighCPUUsage',
    required: true
  },
  {
    component: 'PromQL Expression',
    description: 'Query that defines the alert condition',
    example: 'cpu_usage_percent > 80',
    required: true
  },
  {
    component: 'For Duration',
    description: 'How long the condition must persist before firing',
    example: '5m',
    required: false
  },
  {
    component: 'Labels',
    description: 'Key-value pairs attached to the alert',
    example: 'severity: warning',
    required: false
  },
  {
    component: 'Annotations',
    description: 'Additional metadata for notifications',
    example: 'description: "CPU usage is high"',
    required: false
  }
]

const promqlExamples = [
  {
    name: 'CPU Usage Percentage',
    query: '100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)',
    description: 'Calculate CPU usage percentage for each instance'
  },
  {
    name: 'Memory Usage Percentage',
    query: '(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100',
    description: 'Calculate available memory percentage'
  },
  {
    name: 'Pod Restart Count',
    query: 'rate(kube_pod_container_status_restarts_total[15m])',
    description: 'Calculate restart rate for pods'
  },
  {
    name: 'HTTP Request Rate',
    query: 'rate(http_requests_total[5m])',
    description: 'Calculate HTTP request rate over 5 minutes'
  }
]

const bestPractices = [
  'Use meaningful alert names that clearly describe the issue',
  'Set appropriate severity levels (info, warning, critical)',
  'Include helpful descriptions and runbook links in annotations',
  'Test alert rules in staging environments first',
  'Use proper "for" durations to avoid false positives',
  'Group related alerts using consistent label naming',
  'Regular review and cleanup of unused alert rules'
]

export default function AlertRulesPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm">
            🚨 Alert Rules Configuration
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Prometheus Alert Rules
          </h1>
          <p className="text-sm md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-2">
            Learn to create effective alert rules using PromQL. Configure proactive monitoring 
            to catch issues before they impact your applications and infrastructure.
          </p>
        </div>
      </div>

      {/* Alert Rule Examples */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">Common Alert Rules</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {alertRuleTypes.map((rule, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-red-500 rounded-lg">
                    <rule.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg">{rule.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {rule.description}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={rule.severity === 'critical' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {rule.severity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-foreground mb-4 text-sm md:text-base">
                  {rule.content}
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">PromQL Query:</h4>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <pre className="text-green-400 text-xs md:text-sm overflow-x-auto">
                        {rule.promql}
                      </pre>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-sm">For:</span>
                      <span className="ml-2 text-sm text-muted-foreground">{rule.for}</span>
                    </div>
                    <div>
                      <span className="font-medium text-sm">Severity:</span>
                      <span className="ml-2 text-sm text-muted-foreground">{rule.severity}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Alert Rule Structure */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Alert Rule Structure</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">PrometheusRule Components</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Understanding the structure of PrometheusRule resources for effective alert configuration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertRuleStructure.map((component, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground text-sm md:text-base">{component.component}</h4>
                    <Badge variant={component.required ? 'default' : 'outline'} className="text-xs">
                      {component.required ? 'Required' : 'Optional'}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base mb-2">{component.description}</p>
                  <div className="bg-gray-100 rounded p-2">
                    <code className="text-xs md:text-sm text-foreground">{component.example}</code>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* PromQL Examples */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">PromQL Examples</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {promqlExamples.map((example, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-base md:text-lg">{example.name}</CardTitle>
                <CardDescription className="text-sm">
                  {example.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm overflow-x-auto">
                    {example.query}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Best Practices</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Alert Rule Guidelines</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Follow these best practices to create effective and maintainable alert rules.
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

      {/* Sample PrometheusRule */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Sample PrometheusRule</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Complete Example</CardTitle>
            <CardDescription className="text-sm md:text-base">
              A complete PrometheusRule resource with multiple alert definitions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-xs md:text-sm">
{`apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: kubernetes-alerts
  namespace: monitoring
spec:
  groups:
  - name: kubernetes.rules
    rules:
    - alert: HighCPUUsage
      expr: 100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
      for: 5m
      labels:
        severity: warning
        service: cpu
      annotations:
        summary: "High CPU usage detected"
        description: "CPU usage is above 80% for more than 5 minutes"
        
    - alert: HighMemoryUsage
      expr: (1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100 > 90
      for: 2m
      labels:
        severity: critical
        service: memory
      annotations:
        summary: "High memory usage detected"
        description: "Memory usage is above 90% for more than 2 minutes"`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <div className="bg-red-50 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Ready to Configure Notifications?</h2>
        <p className="text-sm md:text-lg text-muted-foreground mb-6">
          Now that you have alert rules configured, learn how to set up Alertmanager for routing and notifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/alertmanager">
              <Bell className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Configure Alertmanager
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/grafana">
              <Settings className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Back to Dashboards
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

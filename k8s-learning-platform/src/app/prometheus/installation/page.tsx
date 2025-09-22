import Link from 'next/link'
import { ArrowRight, Settings, Monitor, Code, CheckCircle, Clock, AlertTriangle, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const installationSteps = [
  {
    title: 'Prometheus Operator Setup',
    description: 'Deploy Prometheus Operator using Helm or kubectl',
    icon: Settings,
    content: 'The Prometheus Operator provides Kubernetes native deployment and management of Prometheus and related monitoring components.',
    commands: [
      'helm repo add prometheus-community https://prometheus-community.github.io/helm-charts',
      'helm repo update',
      'helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace'
    ]
  },
  {
    title: 'ServiceMonitor Configuration',
    description: 'Configure ServiceMonitor to scrape metrics from your applications',
    icon: Monitor,
    content: 'ServiceMonitor resources define how Prometheus should discover and scrape metrics from your services.',
    commands: [
      'apiVersion: monitoring.coreos.com/v1',
      'kind: ServiceMonitor',
      'metadata:',
      '  name: my-app-monitor',
      '  namespace: monitoring'
    ]
  },
  {
    title: 'Grafana Dashboard Setup',
    description: 'Configure Grafana with pre-built Kubernetes dashboards',
    icon: Database,
    content: 'Grafana provides rich visualization capabilities with pre-configured dashboards for Kubernetes monitoring.',
    commands: [
      'kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring',
      '# Access Grafana at http://localhost:3000',
      '# Default credentials: admin/prom-operator'
    ]
  },
  {
    title: 'Alert Rules Configuration',
    description: 'Set up PrometheusRule resources for alerting',
    icon: AlertTriangle,
    content: 'Define alerting rules using PrometheusRule custom resources for comprehensive monitoring.',
    commands: [
      'apiVersion: monitoring.coreos.com/v1',
      'kind: PrometheusRule',
      'metadata:',
      '  name: kubernetes-alerts'
    ]
  }
]

const components = [
  {
    name: 'Prometheus Server',
    description: 'Core metrics collection and storage engine',
    features: ['Time-series database', 'PromQL query engine', 'Web UI', 'Alert rule evaluation'],
    image: '/images/prometheus-server.png'
  },
  {
    name: 'Grafana',
    description: 'Visualization and dashboard platform',
    features: ['Dashboard creation', 'Panel types', 'Data source management', 'User authentication'],
    image: '/images/grafana-ui.png'
  },
  {
    name: 'Alertmanager',
    description: 'Alert routing and notification management',
    features: ['Alert routing', 'Grouping and inhibition', 'Notification channels', 'Silencing'],
    image: '/images/alertmanager-ui.png'
  },
  {
    name: 'Node Exporter',
    description: 'Hardware and OS metrics exporter',
    features: ['CPU metrics', 'Memory usage', 'Disk I/O', 'Network statistics'],
    image: '/images/node-exporter.png'
  }
]

const verificationSteps = [
  'Check all pods are running in monitoring namespace',
  'Verify ServiceMonitor resources are created',
  'Access Prometheus UI to see targets',
  'Confirm Grafana dashboards are loading',
  'Test alert rule evaluation'
]

export default function InstallationPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm">
            🚀 Installation & Setup
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Prometheus Installation Guide
          </h1>
          <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-2">
            Deploy a complete Prometheus monitoring stack in Kubernetes using the Prometheus Operator. 
            Learn best practices for production-ready monitoring setup.
          </p>
        </div>
      </div>

      {/* Installation Steps */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Installation Steps</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {installationSteps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-purple-500 rounded-lg">
                    <step.icon className="h-5 w-5 text-white" />
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
                <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                  <pre className="text-green-400 text-xs md:text-sm">
                    {step.commands.map((cmd, cmdIndex) => (
                      <div key={cmdIndex} className="mb-1">
                        <span className="text-blue-400">$</span> {cmd}
                      </div>
                    ))}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Monitoring Components */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Monitoring Stack Components</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {components.map((component, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <Monitor className="h-5 w-5 text-blue-600" />
                  <span>{component.name}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  {component.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm md:text-base">Key Features:</h4>
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

      {/* Verification Steps */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Verification Steps</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Post-Installation Verification</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Ensure your Prometheus monitoring stack is properly configured and running.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 md:space-y-3">
              {verificationSteps.map((step, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Commands */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Quick Commands</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Essential kubectl Commands</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Common commands for managing your Prometheus monitoring stack.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Check Pod Status</h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm">
                    <span className="text-blue-400">$</span> kubectl get pods -n monitoring
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Access Prometheus UI</h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm">
                    <span className="text-blue-400">$</span> kubectl port-forward svc/prometheus-kube-prometheus-prometheus 9090:9090 -n monitoring
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Access Grafana UI</h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm">
                    <span className="text-blue-400">$</span> kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <div className="bg-purple-50 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ready for Next Steps?</h2>
        <p className="text-sm md:text-lg text-gray-600 mb-6">
          Now that Prometheus is installed, learn how to create comprehensive dashboards and configure alerting.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/grafana">
              <Database className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Setup Grafana Dashboards
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/alert-rules">
              <AlertTriangle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Configure Alert Rules
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

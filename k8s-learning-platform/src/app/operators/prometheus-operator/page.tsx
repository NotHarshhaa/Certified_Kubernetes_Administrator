import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, Monitor, Activity, Database, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Prometheus Operator Overview',
    description: 'Understanding the Prometheus Operator and its capabilities',
    icon: Monitor,
    duration: '2-3 hours',
    topics: ['Operator Architecture', 'CRD Definitions', 'Service Discovery', 'Configuration Management', 'Monitoring Stack']
  },
  {
    title: 'ServiceMonitor & PodMonitor',
    description: 'Configuring service and pod monitoring with custom resources',
    icon: Activity,
    duration: '3-4 hours',
    topics: ['ServiceMonitor CRD', 'PodMonitor CRD', 'Target Discovery', 'Scrape Configuration', 'Label Management']
  },
  {
    title: 'Alerting Rules',
    description: 'Creating and managing Prometheus alerting rules',
    icon: Database,
    duration: '2-3 hours',
    topics: ['PrometheusRule CRD', 'Alert Definitions', 'Rule Groups', 'Alert Labels', 'Expression Evaluation']
  },
  {
    title: 'Production Deployment',
    description: 'Deploying and managing Prometheus in production environments',
    icon: Settings,
    duration: '3-4 hours',
    topics: ['High Availability', 'Storage Configuration', 'Security Setup', 'Backup Strategies', 'Performance Tuning']
  }
]

const prerequisites = [
  'Understanding of Prometheus monitoring concepts',
  'Basic knowledge of Kubernetes operators',
  'Experience with YAML configuration',
  'Familiarity with monitoring and alerting'
]

export default function OperatorsPrometheusOperatorPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            📊 Monitoring Operator
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Prometheus Operator
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Learn how to deploy and manage Prometheus monitoring using the Prometheus Operator. 
            Master advanced monitoring patterns and production-ready configurations.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for working with Prometheus Operator</CardDescription>
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

      {/* Key Concepts */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Key Concepts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-blue-500" />
                Prometheus Operator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Kubernetes operator for managing Prometheus monitoring stack.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Automated Prometheus deployment</li>
                <li>• Service discovery integration</li>
                <li>• Configuration management</li>
                <li>• High availability support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-green-500" />
                Service Discovery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Automatic discovery of monitoring targets in Kubernetes.
              </p>
              <ul className="text-sm space-y-1">
                <li>• ServiceMonitor resources</li>
                <li>• PodMonitor resources</li>
                <li>• Target configuration</li>
                <li>• Label-based selection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-purple-500" />
                Alerting Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Declarative alerting rule management with PrometheusRule CRD.
              </p>
              <ul className="text-sm space-y-1">
                <li>• PrometheusRule resources</li>
                <li>• Alert expression definitions</li>
                <li>• Rule group management</li>
                <li>• Alert label configuration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-orange-500" />
                Production Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Production-ready Prometheus deployment and management.
              </p>
              <ul className="text-sm space-y-1">
                <li>• High availability configuration</li>
                <li>• Storage and retention policies</li>
                <li>• Security and RBAC setup</li>
                <li>• Performance optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Monitoring Stack Components */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Monitoring Stack Components</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Prometheus Server</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Time-series database and monitoring server for metrics collection.
              </p>
              <Badge variant="outline">Metrics Collection</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Alertmanager</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Alert routing and notification management system.
              </p>
              <Badge variant="outline">Alert Management</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Grafana</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Visualization and dashboard platform for monitoring data.
              </p>
              <Badge variant="outline">Data Visualization</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Continue?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Master Prometheus Operator, then explore other operators like Splunk Operator.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/operators/splunk-operator">
              <PlayCircle className="mr-2 h-5 w-5" />
              Next: Splunk Operator
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/operators">
              <ArrowRight className="mr-2 h-5 w-5" />
              Back to Operators Overview
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

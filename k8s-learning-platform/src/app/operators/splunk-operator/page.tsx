import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, Search, Database, Activity, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Splunk Operator Overview',
    description: 'Understanding the Splunk Operator and its capabilities',
    icon: Search,
    duration: '2-3 hours',
    topics: ['Operator Architecture', 'Splunk Components', 'CRD Definitions', 'Configuration Management', 'Log Processing']
  },
  {
    title: 'Splunk Enterprise Deployment',
    description: 'Deploying Splunk Enterprise using the operator',
    icon: Database,
    duration: '3-4 hours',
    topics: ['Splunk Enterprise CRD', 'Indexer Clusters', 'Search Heads', 'Deployment Strategies', 'Scaling Configuration']
  },
  {
    title: 'Universal Forwarder',
    description: 'Configuring and managing Splunk Universal Forwarders',
    icon: Activity,
    duration: '2-3 hours',
    topics: ['Forwarder Configuration', 'Input Management', 'Output Configuration', 'Load Balancing', 'Security Setup']
  },
  {
    title: 'Production Operations',
    description: 'Managing Splunk in production environments',
    icon: Settings,
    duration: '3-4 hours',
    topics: ['High Availability', 'Backup and Recovery', 'Performance Tuning', 'Security Hardening', 'Monitoring']
  }
]

const prerequisites = [
  'Understanding of Splunk platform concepts',
  'Basic knowledge of Kubernetes operators',
  'Experience with log management systems',
  'Familiarity with data processing pipelines'
]

export default function OperatorsSplunkOperatorPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🔍 Log Management Operator
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Splunk Operator
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Learn how to deploy and manage Splunk Enterprise using the Splunk Operator. 
            Master enterprise log management and analytics in Kubernetes environments.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for working with Splunk Operator</CardDescription>
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
                <Search className="h-5 w-5 mr-2 text-blue-500" />
                Splunk Operator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Kubernetes operator for managing Splunk Enterprise deployments.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Automated Splunk deployment</li>
                <li>• Configuration management</li>
                <li>• Scaling and updates</li>
                <li>• Health monitoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-green-500" />
                Splunk Enterprise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Core Splunk platform for log processing and analytics.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Indexer clusters</li>
                <li>• Search head clusters</li>
                <li>• Data ingestion</li>
                <li>• Search and analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-purple-500" />
                Universal Forwarder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Lightweight agent for collecting and forwarding data.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Data collection agents</li>
                <li>• Input configuration</li>
                <li>• Load balancing</li>
                <li>• Security and encryption</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-orange-500" />
                Production Operations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Production-ready Splunk deployment and management.
              </p>
              <ul className="text-sm space-y-1">
                <li>• High availability setup</li>
                <li>• Backup and recovery</li>
                <li>• Performance optimization</li>
                <li>• Security hardening</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Splunk Architecture Components */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Splunk Architecture Components</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Indexers</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Process and store incoming data for search and analysis.
              </p>
              <Badge variant="outline">Data Processing</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Search Heads</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Provide search interface and coordinate distributed searches.
              </p>
              <Badge variant="outline">Search Interface</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Universal Forwarders</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Lightweight agents that collect and forward data to indexers.
              </p>
              <Badge variant="outline">Data Collection</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Operators Journey Complete!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Congratulations! You've mastered Kubernetes Operators from basics to advanced implementations. 
          You're now ready to build and deploy operators in production environments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/operators">
              <BookOpen className="mr-2 h-5 w-5" />
              Review Operators Overview
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <ArrowRight className="mr-2 h-5 w-5" />
              Explore Other Paths
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

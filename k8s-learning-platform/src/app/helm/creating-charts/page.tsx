import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, Package, FileText, Layers, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Chart Structure',
    description: 'Understanding the anatomy of a Helm chart',
    icon: Package,
    duration: '2-3 hours',
    topics: ['Chart.yaml', 'values.yaml', 'templates/', 'charts/', 'Chart Dependencies', 'Chart Metadata']
  },
  {
    title: 'Template Development',
    description: 'Creating and managing Kubernetes templates',
    icon: FileText,
    duration: '3-4 hours',
    topics: ['Template Syntax', 'Go Templates', 'Built-in Objects', 'Template Functions', 'Control Structures']
  },
  {
    title: 'Values Management',
    description: 'Managing configuration with values files',
    icon: Settings,
    duration: '2-3 hours',
    topics: ['Default Values', 'Custom Values', 'Value Overrides', 'Environment-specific Values', 'Value Validation']
  },
  {
    title: 'Chart Testing',
    description: 'Testing and validating your Helm charts',
    icon: Zap,
    duration: '1-2 hours',
    topics: ['helm test', 'Chart Testing', 'Template Testing', 'Dry Run', 'Linting']
  }
]

const prerequisites = [
  'Understanding of Kubernetes resources',
  'Basic knowledge of YAML syntax',
  'Experience with command line tools',
  'Familiarity with package management concepts'
]

export default function HelmCreatingChartsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            📦 Helm Chart Development
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Creating Charts
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Learn how to create, structure, and manage Helm charts effectively. 
            Master the art of packaging Kubernetes applications for distribution.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for creating Helm charts</CardDescription>
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
                <Package className="h-5 w-5 mr-2 text-blue-500" />
                Chart Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                The standard directory structure and files that make up a Helm chart.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Chart.yaml - Chart metadata</li>
                <li>• values.yaml - Default configuration</li>
                <li>• templates/ - Kubernetes manifests</li>
                <li>• charts/ - Chart dependencies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-500" />
                Template Engine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Using Go templates to create dynamic Kubernetes manifests.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Template syntax and functions</li>
                <li>• Built-in objects and variables</li>
                <li>• Control structures and loops</li>
                <li>• Template inheritance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-purple-500" />
                Values Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Managing configuration through values files and overrides.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Default and custom values</li>
                <li>• Value precedence and merging</li>
                <li>• Environment-specific configurations</li>
                <li>• Value validation and schemas</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-orange-500" />
                Chart Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Testing and validating charts before distribution.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Template rendering tests</li>
                <li>• Chart linting and validation</li>
                <li>• Dry-run installations</li>
                <li>• Integration testing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chart Development Workflow */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Chart Development Workflow</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">1. Initialize</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Create a new chart with the standard structure.
              </p>
              <Badge variant="outline">helm create</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">2. Develop</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Write templates and define values for your application.
              </p>
              <Badge variant="outline">Templates & Values</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">3. Test</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Validate and test your chart before packaging.
              </p>
              <Badge variant="outline">helm test</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">4. Package</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Package and distribute your chart to repositories.
              </p>
              <Badge variant="outline">helm package</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Continue?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Master chart creation, then learn about advanced templating techniques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/helm/templating">
              <Settings className="mr-2 h-5 w-5" />
              Next: Templating
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

import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, FileText, Layers, Zap, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Helmfile Basics',
    description: 'Understanding Helmfile configuration and structure',
    icon: FileText,
    duration: '2-3 hours',
    topics: ['Helmfile Syntax', 'Release Definitions', 'Repository Management', 'Environment Configuration', 'Dependency Management']
  },
  {
    title: 'Multi-Environment Management',
    description: 'Managing deployments across different environments',
    icon: Layers,
    duration: '2-3 hours',
    topics: ['Environment-specific Values', 'Conditional Releases', 'Environment Isolation', 'Configuration Overrides', 'Secrets Management']
  },
  {
    title: 'Advanced Helmfile Features',
    description: 'Advanced patterns and features for complex deployments',
    icon: Code,
    duration: '3-4 hours',
    topics: ['Template Functions', 'Hooks and Lifecycle', 'Parallel Deployments', 'Rollback Strategies', 'State Management']
  },
  {
    title: 'CI/CD Integration',
    description: 'Integrating Helmfile with continuous deployment pipelines',
    icon: Zap,
    duration: '2-3 hours',
    topics: ['GitOps Workflows', 'Automated Deployments', 'Environment Promotion', 'Rollback Automation', 'Monitoring Integration']
  }
]

const prerequisites = [
  'Understanding of Helm charts and releases',
  'Experience with YAML configuration',
  'Basic knowledge of CI/CD concepts',
  'Familiarity with Git workflows'
]

export default function HelmHelmfilePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            📋 Helmfile Management
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Helmfile
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Master Helmfile for declarative Helm deployments. Learn to manage multiple 
            releases, environments, and complex deployment scenarios with ease.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for Helmfile management</CardDescription>
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
                <FileText className="h-5 w-5 mr-2 text-blue-500" />
                Release Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Declarative management of multiple Helm releases in a single file.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Release definitions and metadata</li>
                <li>• Chart and repository references</li>
                <li>• Value file management</li>
                <li>• Release dependencies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="h-5 w-5 mr-2 text-green-500" />
                Environment Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Managing different environments with environment-specific configurations.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Environment-specific values</li>
                <li>• Conditional releases</li>
                <li>• Environment isolation</li>
                <li>• Configuration inheritance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-500" />
                Advanced Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Advanced Helmfile features for complex deployment scenarios.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Template functions and helpers</li>
                <li>• Hooks and lifecycle management</li>
                <li>• Parallel deployment strategies</li>
                <li>• State management and tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-orange-500" />
                CI/CD Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Integrating Helmfile with continuous deployment workflows.
              </p>
              <ul className="text-sm space-y-1">
                <li>• GitOps deployment patterns</li>
                <li>• Automated release management</li>
                <li>• Environment promotion</li>
                <li>• Rollback automation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Helmfile Workflow */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Helmfile Workflow</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">1. Define</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Define releases and their configurations in Helmfile.
              </p>
              <Badge variant="outline">helmfile.yaml</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">2. Sync</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Synchronize releases to match the desired state.
              </p>
              <Badge variant="outline">helmfile sync</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">3. Diff</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Compare current state with desired state.
              </p>
              <Badge variant="outline">helmfile diff</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">4. Apply</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Apply changes and manage release lifecycle.
              </p>
              <Badge variant="outline">helmfile apply</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Helm Journey Complete!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Congratulations! You've mastered Helm from basics to advanced deployment management. 
          You're now ready to use Helm effectively in production environments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/helm">
              <BookOpen className="mr-2 h-5 w-5" />
              Review Helm Overview
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

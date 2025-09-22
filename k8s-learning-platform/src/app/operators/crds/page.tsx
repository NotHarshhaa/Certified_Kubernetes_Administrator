import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, FileText, Layers, Zap, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'CRD Fundamentals',
    description: 'Understanding Custom Resource Definitions and their structure',
    icon: FileText,
    duration: '2-3 hours',
    topics: ['CRD Schema Definition', 'API Versioning', 'Validation Rules', 'Default Values', 'Status Subresources']
  },
  {
    title: 'Custom Resources',
    description: 'Creating and managing custom resources in Kubernetes',
    icon: Database,
    duration: '2-3 hours',
    topics: ['Resource Lifecycle', 'CRUD Operations', 'Resource Validation', 'Status Management', 'Finalizers']
  },
  {
    title: 'API Extensions',
    description: 'Extending the Kubernetes API with custom resources',
    icon: Code,
    duration: '3-4 hours',
    topics: ['API Server Integration', 'Aggregated APIs', 'API Discovery', 'OpenAPI Schema', 'Client Libraries']
  },
  {
    title: 'Advanced CRD Patterns',
    description: 'Advanced patterns and best practices for CRDs',
    icon: Zap,
    duration: '2-3 hours',
    topics: ['Conversion Webhooks', 'Admission Controllers', 'Schema Evolution', 'Migration Strategies', 'Performance Optimization']
  }
]

const prerequisites = [
  'Understanding of Kubernetes API concepts',
  'Basic knowledge of YAML and JSON',
  'Experience with kubectl commands',
  'Familiarity with Kubernetes resources'
]

export default function OperatorsCRDsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🔧 Kubernetes Extensions
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            CRDs & Custom Resources
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Learn how to extend the Kubernetes API with Custom Resource Definitions. 
            Master the art of creating domain-specific resources for your applications.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for working with CRDs and Custom Resources</CardDescription>
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
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Learning Topics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-muted/500">
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
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Learning Objectives:</h4>
                  <ul className="space-y-1 text-sm text-foreground">
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
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Key Concepts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-500" />
                CRD Schema
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Defining the structure and validation rules for custom resources.
              </p>
              <ul className="text-sm space-y-1">
                <li>• OpenAPI schema definition</li>
                <li>• Field validation rules</li>
                <li>• Required and optional fields</li>
                <li>• Default value specifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-green-500" />
                Custom Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Instances of custom resources that follow the CRD schema.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Resource lifecycle management</li>
                <li>• CRUD operations</li>
                <li>• Status and spec sections</li>
                <li>• Finalizers and cleanup</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-500" />
                API Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Integrating custom resources with the Kubernetes API.
              </p>
              <ul className="text-sm space-y-1">
                <li>• API server registration</li>
                <li>• Discovery and versioning</li>
                <li>• Client library generation</li>
                <li>• RBAC and permissions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-orange-500" />
                Advanced Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced CRD features for complex use cases.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Conversion webhooks</li>
                <li>• Admission controllers</li>
                <li>• Schema evolution</li>
                <li>• Performance optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CRD Development Workflow */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">CRD Development Workflow</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">1. Design</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Design the schema and API structure for your custom resource.
              </p>
              <Badge variant="outline">Schema Design</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">2. Define</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Create the CRD YAML definition with validation rules.
              </p>
              <Badge variant="outline">CRD YAML</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">3. Deploy</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Deploy the CRD to your Kubernetes cluster.
              </p>
              <Badge variant="outline">kubectl apply</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">4. Use</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Create and manage custom resource instances.
              </p>
              <Badge variant="outline">Custom Resources</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Continue?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Master CRDs and Custom Resources, then learn about Operator concepts and patterns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/operators/concepts">
              <BookOpen className="mr-2 h-5 w-5" />
              Next: Operator Concepts
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

import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, FileText, Layers, Zap, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Template Syntax',
    description: 'Master Go template syntax for Helm charts',
    icon: FileText,
    duration: '3-4 hours',
    topics: ['Template Delimiters', 'Variables and Functions', 'Pipelines', 'Conditionals', 'Loops and Ranges']
  },
  {
    title: 'Built-in Objects',
    description: 'Understanding Helm template objects and context',
    icon: Database,
    duration: '2-3 hours',
    topics: ['Release Object', 'Values Object', 'Chart Object', 'Template Object', 'Capabilities Object']
  },
  {
    title: 'Template Functions',
    description: 'Using Helm template functions for dynamic content',
    icon: Code,
    duration: '2-3 hours',
    topics: ['String Functions', 'Math Functions', 'Date Functions', 'List Functions', 'Crypto Functions']
  },
  {
    title: 'Advanced Templating',
    description: 'Complex templating patterns and best practices',
    icon: Zap,
    duration: '3-4 hours',
    topics: ['Template Inheritance', 'Named Templates', 'Partial Templates', 'Template Debugging', 'Performance Optimization']
  }
]

const prerequisites = [
  'Understanding of Helm chart structure',
  'Basic knowledge of Go template syntax',
  'Experience with Kubernetes manifests',
  'Familiarity with YAML and JSON'
]

export default function HelmTemplatingPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🎨 Helm Templating
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Templating
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Master the art of Helm templating with Go templates. Learn to create dynamic, 
            reusable Kubernetes manifests with powerful templating techniques.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for Helm templating</CardDescription>
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
                Template Syntax
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Go template syntax for creating dynamic Kubernetes manifests.
              </p>
              <ul className="text-sm space-y-1">
                <li>• &#123;&#123; &#125;&#125; for template expressions</li>
                <li>• Variables and function calls</li>
                <li>• Pipeline operations (|)</li>
                <li>• Control structures (if, range)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-green-500" />
                Built-in Objects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Pre-defined objects available in Helm templates.
              </p>
              <ul className="text-sm space-y-1">
                <li>• .Release - Release information</li>
                <li>• .Values - User-provided values</li>
                <li>• .Chart - Chart metadata</li>
                <li>• .Template - Template context</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-500" />
                Template Functions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Built-in functions for manipulating data in templates.
              </p>
              <ul className="text-sm space-y-1">
                <li>• String manipulation functions</li>
                <li>• Mathematical operations</li>
                <li>• Date and time functions</li>
                <li>• List and array functions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-orange-500" />
                Advanced Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Complex templating patterns for advanced use cases.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Template inheritance</li>
                <li>• Named templates and partials</li>
                <li>• Conditional rendering</li>
                <li>• Template debugging techniques</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Template Examples */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Common Template Patterns</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Variable Substitution</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Using values to customize resource names and configurations.
              </p>
              <Badge variant="outline">.Values.name</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Conditional Logic</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Creating conditional resources based on values or capabilities.
              </p>
              <Badge variant="outline">if/else</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Loops and Iteration</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Iterating over lists to create multiple resources dynamically.
              </p>
              <Badge variant="outline">range</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Continue?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Master templating techniques, then see them in action with the Online Boutique demo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/helm/online-boutique-demo">
              <PlayCircle className="mr-2 h-5 w-5" />
              Next: Online Boutique Demo
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

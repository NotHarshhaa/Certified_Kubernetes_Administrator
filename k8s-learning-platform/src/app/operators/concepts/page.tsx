import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, Zap, Layers, Database, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Operator Pattern',
    description: 'Understanding the Kubernetes Operator pattern and its benefits',
    icon: Zap,
    duration: '3-4 hours',
    topics: ['Operator Architecture', 'Controller Pattern', 'Reconciliation Loop', 'Event-driven Design', 'State Management']
  },
  {
    title: 'Controller Development',
    description: 'Building controllers to manage custom resources',
    icon: Code,
    duration: '4-5 hours',
    topics: ['Controller Framework', 'Event Handling', 'Reconciliation Logic', 'Error Handling', 'Testing Strategies']
  },
  {
    title: 'Operator SDK',
    description: 'Using the Operator SDK for rapid operator development',
    icon: Settings,
    duration: '3-4 hours',
    topics: ['SDK Installation', 'Project Scaffolding', 'Code Generation', 'Testing Tools', 'Deployment']
  },
  {
    title: 'Operator Lifecycle',
    description: 'Managing operator deployment, updates, and maintenance',
    icon: Activity,
    duration: '2-3 hours',
    topics: ['Deployment Strategies', 'Version Management', 'Rolling Updates', 'Monitoring', 'Troubleshooting']
  }
]

const prerequisites = [
  'Understanding of CRDs and Custom Resources',
  'Basic knowledge of Go programming',
  'Experience with Kubernetes controllers',
  'Familiarity with event-driven programming'
]

export default function OperatorsConceptsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            ⚡ Operator Fundamentals
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Operator Concepts
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Master the Kubernetes Operator pattern and learn how to build intelligent 
            controllers that manage complex applications automatically.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for understanding Operator concepts</CardDescription>
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
                <Zap className="h-5 w-5 mr-2 text-blue-500" />
                Operator Pattern
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                A method of packaging, deploying, and managing Kubernetes applications.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Application-specific controllers</li>
                <li>• Domain knowledge encoding</li>
                <li>• Automated operations</li>
                <li>• Self-healing capabilities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-green-500" />
                Controller Logic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The core logic that watches and reconciles desired state.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Event-driven architecture</li>
                <li>• Reconciliation loops</li>
                <li>• State management</li>
                <li>• Error handling</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-purple-500" />
                Operator SDK
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Framework for building operators with best practices.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Code generation tools</li>
                <li>• Testing frameworks</li>
                <li>• Deployment automation</li>
                <li>• Best practice templates</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-orange-500" />
                Lifecycle Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Managing operator deployment and maintenance.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Deployment strategies</li>
                <li>• Version management</li>
                <li>• Monitoring and alerting</li>
                <li>• Troubleshooting techniques</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Operator Development Process */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Operator Development Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">1. Design</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Design the operator architecture and resource model.
              </p>
              <Badge variant="outline">Architecture</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">2. Develop</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Implement the controller logic and reconciliation.
              </p>
              <Badge variant="outline">Controller Code</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">3. Test</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Test the operator with various scenarios and edge cases.
              </p>
              <Badge variant="outline">Testing</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">4. Deploy</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Deploy and monitor the operator in production.
              </p>
              <Badge variant="outline">Production</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Continue?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Master Operator concepts, then explore real-world operators like Prometheus Operator.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/operators/prometheus-operator">
              <PlayCircle className="mr-2 h-5 w-5" />
              Next: Prometheus Operator
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
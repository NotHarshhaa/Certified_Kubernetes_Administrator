import Link from 'next/link'
import { ArrowRight, Zap, BookOpen, Code, Settings, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'What are Operators?',
    description: 'Understanding the concept of Kubernetes operators',
    icon: Zap,
    content: 'Operators are software extensions to Kubernetes that use custom resources to manage applications and their components.'
  },
  {
    title: 'Custom Resource Definitions',
    description: 'Learn about CRDs and how to create them',
    icon: BookOpen,
    content: 'CRDs allow you to define custom resources that extend the Kubernetes API with domain-specific objects.'
  },
  {
    title: 'Controller Pattern',
    description: 'Understanding the controller pattern in operators',
    icon: Code,
    content: 'Controllers watch for changes to resources and take action to move the current state closer to the desired state.'
  },
  {
    title: 'Operator Lifecycle',
    description: 'Managing operator installation and updates',
    icon: Settings,
    content: 'Learn how to package, distribute, and manage operators using the Operator Lifecycle Manager (OLM).'
  }
]

export default function OperatorsConceptsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            ⚡ Kubernetes Operators
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Operator Concepts
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Learn how to extend Kubernetes with custom resources and operators for complex application management.
          </p>
        </div>
      </div>

      {/* Topics */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Core Concepts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-yellow-500">
                    <topic.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <CardDescription className="text-base">
                      {topic.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-700 mb-4">
                  {topic.content}
                </p>
                <Button asChild className="w-full">
                  <Link href={`/operators/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-yellow-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Build Operators?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Start with the fundamentals and work your way up to building your own operators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/operators/prometheus-operator">
              <Zap className="mr-2 h-5 w-5" />
              See Prometheus Operator
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

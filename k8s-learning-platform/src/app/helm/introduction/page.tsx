import Link from 'next/link'
import { ArrowRight, Package, BookOpen, Code, Settings, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'What is Helm?',
    description: 'Understanding the Kubernetes package manager',
    icon: Package,
    content: 'Helm is the package manager for Kubernetes. It helps you manage Kubernetes applications through Charts, which are packages of pre-configured Kubernetes resources.'
  },
  {
    title: 'Helm Charts',
    description: 'Learn about Helm charts and their structure',
    icon: BookOpen,
    content: 'Charts are packages of pre-configured Kubernetes resources. They contain templates, default values, and metadata that describe the application.'
  },
  {
    title: 'Helm Commands',
    description: 'Essential Helm commands for package management',
    icon: Code,
    content: 'Learn the fundamental Helm commands like install, upgrade, uninstall, and list to manage your Kubernetes applications effectively.'
  },
  {
    title: 'Chart Templates',
    description: 'Understanding Helm templating system',
    icon: Settings,
    content: 'Helm uses Go templates to generate Kubernetes manifests. Learn how to create dynamic and reusable templates for your applications.'
  }
]

export default function HelmIntroductionPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            📦 Helm Package Manager
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Introduction to Helm
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Learn how to use Helm, the package manager for Kubernetes, to simplify application deployment and management.
          </p>
        </div>
      </div>

      {/* Topics */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-green-500">
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
                  <Link href={`/helm/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}>
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
      <div className="bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Learn Helm?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Start with the basics and work your way up to advanced Helm concepts and practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/helm/creating-charts">
              <Package className="mr-2 h-5 w-5" />
              Start Creating Charts
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

import Link from 'next/link'
import { ArrowRight, Package, BookOpen, Code, Settings, Clock, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Creating Charts',
    description: 'Learn how to create, structure, and manage Helm charts effectively',
    icon: Package,
    duration: '3-4 hours',
    topics: ['Chart Structure', 'Template Development', 'Values Management', 'Chart Testing'],
    href: '/helm/creating-charts'
  },
  {
    title: 'Templating',
    description: 'Master the art of Helm templating with Go templates',
    icon: Code,
    duration: '3-4 hours',
    topics: ['Template Syntax', 'Built-in Objects', 'Template Functions', 'Advanced Templating'],
    href: '/helm/templating'
  },
  {
    title: 'Online Boutique Demo',
    description: 'Learn Helm through a real-world microservices application',
    icon: PlayCircle,
    duration: '3-4 hours',
    topics: ['Microservices Architecture', 'Helm Chart Structure', 'Deployment Strategies', 'Production Considerations'],
    href: '/helm/online-boutique-demo'
  },
  {
    title: 'Helmfile',
    description: 'Master Helmfile for declarative Helm deployments',
    icon: Settings,
    duration: '3-4 hours',
    topics: ['Helmfile Basics', 'Multi-Environment Management', 'Advanced Features', 'CI/CD Integration'],
    href: '/helm/helmfile'
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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Introduction to Helm
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Learn how to use Helm, the package manager for Kubernetes, to simplify application deployment and management.
          </p>
        </div>
      </div>

      {/* Topics */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">What You'll Learn</h2>
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
                    <CardDescription className="text-base">
                      {topic.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="mr-1 h-3 w-3" />
                    {topic.duration}
                  </Badge>
                </div>
                <div className="bg-muted rounded-lg p-4 mb-4">
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
                <Button asChild className="w-full">
                  <Link href={topic.href}>
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Learn Helm?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Start with the basics and work your way up to advanced Helm concepts and practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/helm/creating-charts">
              <Package className="mr-2 h-5 w-5" />
              Start with Creating Charts
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

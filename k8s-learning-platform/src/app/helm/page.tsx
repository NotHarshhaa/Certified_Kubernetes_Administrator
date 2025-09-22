import Link from 'next/link'
import { ArrowRight, Package, Code, PlayCircle, FileText, Settings, Clock, Zap, Database, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const helmTopics = [
  {
    title: 'Introduction to Helm',
    description: 'Learn what Helm is, why it\'s important, and how it simplifies Kubernetes application management.',
    icon: Package,
    href: '/helm/introduction',
    duration: '1-2 hours',
    difficulty: 'Beginner',
    topics: ['What is Helm?', 'Charts & Releases', 'Templating Engine', 'Repositories'],
  },
  {
    title: 'Creating Helm Charts',
    description: 'Master the art of creating your own Helm charts from scratch with best practices.',
    icon: Code,
    href: '/helm/creating-charts',
    duration: '2-3 hours',
    difficulty: 'Intermediate',
    topics: ['Chart Structure', 'Templates', 'Values', 'Dependencies'],
  },
  {
    title: 'Advanced Templating',
    description: 'Learn advanced Helm templating techniques, functions, and control structures.',
    icon: Settings,
    href: '/helm/templating',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    topics: ['Template Functions', 'Control Structures', 'Pipeline', 'Named Templates'],
  },
  {
    title: 'Online Boutique Demo',
    description: 'Build a complete microservices application using Helm charts with Google\'s Online Boutique.',
    icon: PlayCircle,
    href: '/helm/online-boutique-demo',
    duration: '3-4 hours',
    difficulty: 'Advanced',
    topics: ['Microservices', 'Multi-chart Deployment', 'Environment Management', 'CI/CD Integration'],
  },
  {
    title: 'Helmfile for GitOps',
    description: 'Learn to manage multiple Helm releases declaratively with Helmfile.',
    icon: FileText,
    href: '/helm/helmfile',
    duration: '2-3 hours',
    difficulty: 'Advanced',
    topics: ['Helmfile Syntax', 'Environment Management', 'GitOps Workflow', 'Release Management'],
  },
]

const helmFeatures = [
  {
    title: 'Package Management',
    description: 'Bundle Kubernetes applications into reusable packages called charts.',
    icon: Package,
    color: 'bg-muted/500',
  },
  {
    title: 'Templating Engine',
    description: 'Use Go templating to create dynamic Kubernetes manifests.',
    icon: Code,
    color: 'bg-muted/500',
  },
  {
    title: 'Release Management',
    description: 'Track and manage application deployments across environments.',
    icon: Zap,
    color: 'bg-yellow-500',
  },
  {
    title: 'Repository Support',
    description: 'Share and discover charts through public and private repositories.',
    icon: Database,
    color: 'bg-purple-500',
  },
]

const demos = [
  {
    title: 'MongoDB Stateful Application',
    description: 'Deploy MongoDB with MongoExpress using Helm charts and configure ingress.',
    duration: '30 minutes',
    complexity: 'Intermediate',
    topics: ['StatefulSets', 'Persistent Volumes', 'Ingress', 'Secrets Management'],
  },
  {
    title: 'Online Boutique Microservices',
    description: 'Deploy Google\'s Online Boutique with 10 microservices using custom Helm charts.',
    duration: '1 hour',
    complexity: 'Advanced',
    topics: ['Microservices Architecture', 'Service Mesh', 'Load Balancing', 'Monitoring'],
  },
]

export default function HelmPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            📦 The Kubernetes Package Manager
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Master Helm Package Management
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Learn to package, deploy, and manage Kubernetes applications with Helm. 
            From basic charts to advanced templating and GitOps workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/helm/introduction">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Helm Features */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Why Use Helm?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helmFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`p-3 rounded-lg ${feature.color} mx-auto mb-4 w-fit`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Learning Path</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {helmTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <topic.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        {topic.duration}
                      </Badge>
                      <Badge 
                        variant={topic.difficulty === 'Beginner' ? 'default' : 
                                topic.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}
                        className="text-xs"
                      >
                        {topic.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {topic.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {topic.topics.map((subtopic, subtopicIndex) => (
                    <Badge key={subtopicIndex} variant="secondary" className="text-xs">
                      {subtopic}
                    </Badge>
                  ))}
                </div>
                <Button asChild>
                  <Link href={topic.href}>
                    Start Topic
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Hands-on Demos */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Hands-on Demos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {demos.map((demo, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PlayCircle className="h-5 w-5 text-blue-600" />
                  <span>{demo.title}</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="mr-1 h-3 w-3" />
                    {demo.duration}
                  </Badge>
                  <Badge 
                    variant={demo.complexity === 'Intermediate' ? 'secondary' : 'destructive'}
                    className="text-xs"
                  >
                    {demo.complexity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {demo.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {demo.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Run Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-muted/50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Key Benefits of Helm</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-muted/500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Simplified Deployment</h3>
            <p className="text-sm text-muted-foreground">Deploy complex applications with a single command</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-muted/500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Environment Management</h3>
            <p className="text-sm text-muted-foreground">Manage different environments with ease</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-muted/500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Reusable Packages</h3>
            <p className="text-sm text-muted-foreground">Create and share application packages</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Master Helm?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Start your journey to becoming a Helm expert with our comprehensive tutorials and hands-on demos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/helm/introduction">
              <Package className="mr-2 h-5 w-5" />
              Start Learning
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Code className="mr-2 h-5 w-5" />
            View Examples
          </Button>
        </div>
      </div>
    </div>
  )
}

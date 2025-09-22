import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, Container, Layers, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Pod Fundamentals',
    description: 'Understanding the smallest deployable units in Kubernetes',
    icon: Container,
    duration: '2-3 hours',
    topics: ['Pod Lifecycle', 'Container Specs', 'Resource Limits', 'Health Checks', 'Init Containers']
  },
  {
    title: 'Deployments',
    description: 'Managing application deployments and updates',
    icon: Layers,
    duration: '3-4 hours',
    topics: ['Deployment Strategies', 'Rolling Updates', 'Rollbacks', 'Scaling', 'ReplicaSets']
  },
  {
    title: 'StatefulSets',
    description: 'Managing stateful applications with persistent storage',
    icon: Activity,
    duration: '2-3 hours',
    topics: ['StatefulSet Concepts', 'Persistent Volumes', 'Ordered Deployment', 'Network Identity']
  },
  {
    title: 'DaemonSets',
    description: 'Running system-level services on every node',
    icon: Settings,
    duration: '1-2 hours',
    topics: ['DaemonSet Use Cases', 'Node Selection', 'Updates', 'Taints and Tolerations']
  }
]

const prerequisites = [
  'Understanding of containers and Docker',
  'Basic Kubernetes cluster concepts',
  'YAML syntax knowledge',
  'Command line experience with kubectl'
]

export default function CKAPodsDeploymentsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🚀 CKA Core Concepts
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pods & Deployments
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Master the fundamental building blocks of Kubernetes applications. 
            Learn how to deploy, manage, and scale your applications effectively.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for working with Pods and Deployments</CardDescription>
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
                  <div className="p-3 rounded-lg bg-blue-500">
                    <topic.icon className="h-6 w-6 text-white" />
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
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Container className="h-5 w-5 mr-2 text-blue-500" />
                Pods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The smallest deployable unit in Kubernetes. Learn about pod lifecycle, 
                container specs, and resource management.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Pod lifecycle and states</li>
                <li>• Container specifications</li>
                <li>• Resource requests and limits</li>
                <li>• Health checks and probes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="h-5 w-5 mr-2 text-green-500" />
                Deployments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Manage application deployments with rolling updates, rollbacks, 
                and automatic scaling.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Deployment strategies</li>
                <li>• Rolling updates and rollbacks</li>
                <li>• Horizontal pod autoscaling</li>
                <li>• ReplicaSet management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-purple-500" />
                StatefulSets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Deploy stateful applications with persistent storage and 
                ordered deployment patterns.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Stateful application patterns</li>
                <li>• Persistent volume claims</li>
                <li>• Ordered deployment and scaling</li>
                <li>• Network identity and discovery</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Continue?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Master Pods and Deployments, then move on to Services and Networking concepts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/cka/services-networking">
              <Settings className="mr-2 h-5 w-5" />
              Next: Services & Networking
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/cka">
              <ArrowRight className="mr-2 h-5 w-5" />
              Back to CKA Overview
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

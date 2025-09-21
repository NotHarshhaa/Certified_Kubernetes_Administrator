import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, Network, Globe, Shield, Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Services',
    description: 'Connecting applications and managing network traffic',
    icon: Network,
    duration: '3-4 hours',
    topics: ['Service Types', 'ClusterIP Services', 'NodePort Services', 'LoadBalancer Services', 'Service Discovery']
  },
  {
    title: 'Ingress',
    description: 'HTTP and HTTPS routing to services',
    icon: Globe,
    duration: '2-3 hours',
    topics: ['Ingress Controllers', 'TLS Termination', 'Path-based Routing', 'Host-based Routing', 'Annotations']
  },
  {
    title: 'Network Policies',
    description: 'Securing network traffic between pods',
    icon: Shield,
    duration: '2-3 hours',
    topics: ['Network Policy Rules', 'Ingress Rules', 'Egress Rules', 'Pod Selectors', 'Namespace Isolation']
  },
  {
    title: 'DNS and Service Discovery',
    description: 'How services are discovered and resolved',
    icon: Loader,
    duration: '1-2 hours',
    topics: ['CoreDNS Configuration', 'Service DNS Records', 'Pod DNS Records', 'External Name Services']
  }
]

const prerequisites = [
  'Understanding of Pods and Deployments',
  'Basic networking concepts (IP, DNS, ports)',
  'HTTP/HTTPS protocol knowledge',
  'Experience with kubectl commands'
]

export default function CKAServicesNetworkingPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🌐 CKA Networking
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Services & Networking
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Learn how to connect and secure your applications in Kubernetes. 
            Master service discovery, load balancing, and network policies.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for working with Services and Networking</CardDescription>
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
                <Network className="h-5 w-5 mr-2 text-blue-500" />
                Service Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Different ways to expose your applications within and outside the cluster.
              </p>
              <ul className="text-sm space-y-1">
                <li>• ClusterIP - Internal cluster access</li>
                <li>• NodePort - External access via node ports</li>
                <li>• LoadBalancer - Cloud load balancer integration</li>
                <li>• ExternalName - External service mapping</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-green-500" />
                Ingress Controllers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                HTTP/HTTPS routing and load balancing for your applications.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Path-based routing</li>
                <li>• Host-based routing</li>
                <li>• TLS termination</li>
                <li>• SSL certificate management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-red-500" />
                Network Policies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Secure network traffic between pods and namespaces.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Ingress and egress rules</li>
                <li>• Pod and namespace selectors</li>
                <li>• Port and protocol restrictions</li>
                <li>• Default deny policies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Loader className="h-5 w-5 mr-2 text-purple-500" />
                DNS Resolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                How services are discovered and resolved within the cluster.
              </p>
              <ul className="text-sm space-y-1">
                <li>• CoreDNS configuration</li>
                <li>• Service DNS records</li>
                <li>• Pod DNS records</li>
                <li>• Custom DNS policies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Continue?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Master Services and Networking, then learn about Storage and Volumes for persistent data.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/cka/storage-volumes">
              <Settings className="mr-2 h-5 w-5" />
              Next: Storage & Volumes
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

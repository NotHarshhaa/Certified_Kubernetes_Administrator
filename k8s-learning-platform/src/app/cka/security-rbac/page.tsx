import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, Shield, Users, Key, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Authentication',
    description: 'User and service account authentication mechanisms',
    icon: Users,
    duration: '2-3 hours',
    topics: ['Service Accounts', 'User Authentication', 'Token Management', 'Authentication Webhooks', 'OIDC Integration']
  },
  {
    title: 'Authorization & RBAC',
    description: 'Role-based access control and permission management',
    icon: Shield,
    duration: '3-4 hours',
    topics: ['Roles and RoleBindings', 'ClusterRoles and ClusterRoleBindings', 'Resource Permissions', 'API Groups', 'Verbs and Resources']
  },
  {
    title: 'Pod Security',
    description: 'Securing pods and containers at runtime',
    icon: Lock,
    duration: '2-3 hours',
    topics: ['Security Contexts', 'Pod Security Standards', 'Seccomp Profiles', 'AppArmor', 'SELinux']
  },
  {
    title: 'Network Policies',
    description: 'Controlling network traffic between pods',
    icon: Key,
    duration: '2-3 hours',
    topics: ['Network Policy Rules', 'Ingress and Egress', 'Pod Selectors', 'Namespace Isolation', 'Default Deny']
  }
]

const prerequisites = [
  'Understanding of Kubernetes resources',
  'Basic knowledge of authentication concepts',
  'Experience with kubectl commands',
  'Understanding of network security'
]

export default function CKASecurityRBACPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🔒 CKA Security
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Security & RBAC
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Secure your Kubernetes cluster with proper authentication, authorization, 
            and access controls. Master RBAC and pod security best practices.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for working with Security and RBAC</CardDescription>
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
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-500" />
                Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Verifying the identity of users and service accounts accessing the cluster.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Service account tokens</li>
                <li>• User authentication methods</li>
                <li>• Authentication webhooks</li>
                <li>• OIDC and OAuth integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-500" />
                RBAC
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Role-based access control for managing permissions and access to resources.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Roles and RoleBindings</li>
                <li>• ClusterRoles and ClusterRoleBindings</li>
                <li>• Resource and verb permissions</li>
                <li>• API group access control</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-red-500" />
                Pod Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Securing pods and containers with security contexts and policies.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Security contexts</li>
                <li>• Pod security standards</li>
                <li>• Seccomp and AppArmor profiles</li>
                <li>• SELinux policies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2 text-purple-500" />
                Network Policies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Controlling network traffic between pods and namespaces.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Ingress and egress rules</li>
                <li>• Pod and namespace selectors</li>
                <li>• Port and protocol restrictions</li>
                <li>• Default deny policies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Security Best Practices */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Security Best Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Principle of Least Privilege</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Grant only the minimum permissions required for users and service accounts.
              </p>
              <Badge variant="outline">Minimal Access</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Network Segmentation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Use network policies to isolate traffic between different application tiers.
              </p>
              <Badge variant="outline">Traffic Control</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Regular Auditing</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Monitor and audit access patterns and security events in your cluster.
              </p>
              <Badge variant="outline">Continuous Monitoring</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Continue?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Master Security and RBAC, then learn about Troubleshooting to complete your CKA journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/cka/troubleshooting">
              <Settings className="mr-2 h-5 w-5" />
              Next: Troubleshooting
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

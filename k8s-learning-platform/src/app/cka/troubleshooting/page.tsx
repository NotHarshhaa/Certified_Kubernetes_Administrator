import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, Search, AlertTriangle, Activity, Bug } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Pod Troubleshooting',
    description: 'Diagnosing and fixing pod-related issues',
    icon: Search,
    duration: '3-4 hours',
    topics: ['Pod Status Analysis', 'Container Logs', 'Resource Constraints', 'Image Pull Issues', 'Startup Probes']
  },
  {
    title: 'Network Troubleshooting',
    description: 'Resolving connectivity and networking problems',
    icon: Activity,
    duration: '2-3 hours',
    topics: ['Service Connectivity', 'DNS Resolution', 'Network Policies', 'Ingress Issues', 'Load Balancer Problems']
  },
  {
    title: 'Storage Troubleshooting',
    description: 'Fixing persistent volume and storage issues',
    icon: Settings,
    duration: '2-3 hours',
    topics: ['Volume Mount Issues', 'Storage Class Problems', 'PVC Binding', 'Snapshot Failures', 'Capacity Issues']
  },
  {
    title: 'Cluster Diagnostics',
    description: 'Systematic cluster health and performance analysis',
    icon: Bug,
    duration: '3-4 hours',
    topics: ['Node Status', 'API Server Issues', 'etcd Problems', 'Controller Failures', 'Scheduler Issues']
  }
]

const prerequisites = [
  'Understanding of all CKA core concepts',
  'Experience with kubectl commands',
  'Basic knowledge of Linux troubleshooting',
  'Understanding of container runtime concepts'
]

const troubleshootingSteps = [
  'Check pod status and events',
  'Examine container logs',
  'Verify resource constraints',
  'Test network connectivity',
  'Validate configuration files',
  'Check cluster component health'
]

export default function CKATroubleshootingPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            🔧 CKA Troubleshooting
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Troubleshooting
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Master the art of diagnosing and fixing Kubernetes issues. 
            Learn systematic troubleshooting approaches and common problem patterns.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for effective troubleshooting</CardDescription>
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

      {/* Troubleshooting Methodology */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Troubleshooting Methodology</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Systematic Approach to Problem Solving</CardTitle>
            <CardDescription>Follow these steps to efficiently diagnose and resolve issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Step-by-Step Process:</h4>
                <ol className="space-y-3">
                  {troubleshootingSteps.map((step, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Common Tools:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Code className="h-4 w-4 mr-2 text-blue-500" />
                    kubectl commands
                  </li>
                  <li className="flex items-center">
                    <Search className="h-4 w-4 mr-2 text-green-500" />
                    Log analysis
                  </li>
                  <li className="flex items-center">
                    <Activity className="h-4 w-4 mr-2 text-purple-500" />
                    Event monitoring
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                    Health checks
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Concepts */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Key Concepts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2 text-blue-500" />
                Diagnostic Commands
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Essential kubectl commands for gathering information and diagnosing issues.
              </p>
              <ul className="text-sm space-y-1">
                <li>• kubectl get, describe, logs</li>
                <li>• kubectl top, events</li>
                <li>• kubectl debug, exec</li>
                <li>• kubectl auth can-i</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-green-500" />
                Log Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Understanding and analyzing logs from various Kubernetes components.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Container application logs</li>
                <li>• Kubernetes system logs</li>
                <li>• Audit logs and events</li>
                <li>• Log aggregation tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                Common Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Frequently encountered problems and their typical solutions.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Image pull failures</li>
                <li>• Resource constraints</li>
                <li>• Network connectivity issues</li>
                <li>• Storage mount problems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bug className="h-5 w-5 mr-2 text-purple-500" />
                Cluster Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Monitoring and maintaining overall cluster health and performance.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Node status monitoring</li>
                <li>• API server health</li>
                <li>• etcd cluster status</li>
                <li>• Controller health checks</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Practice Scenarios */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Practice Scenarios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Pod Won't Start</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Diagnose why a pod is stuck in Pending or CrashLoopBackOff state.
              </p>
              <Badge variant="outline">Beginner</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Service Not Accessible</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Troubleshoot why a service is not reachable from outside the cluster.
              </p>
              <Badge variant="outline">Intermediate</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Cluster Component Failure</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Investigate and resolve issues with core cluster components.
              </p>
              <Badge variant="outline">Advanced</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">CKA Journey Complete!</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Congratulations! You've covered all the essential topics for the CKA certification. 
          You're now ready to take the exam and become a Certified Kubernetes Administrator.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/cka">
              <BookOpen className="mr-2 h-5 w-5" />
              Review CKA Overview
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <ArrowRight className="mr-2 h-5 w-5" />
              Explore Other Paths
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

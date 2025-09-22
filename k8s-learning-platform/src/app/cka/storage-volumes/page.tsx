import Link from 'next/link'
import { ArrowRight, BookOpen, PlayCircle, Code, Settings, Clock, CheckCircle, Database, HardDrive, Lock, Archive } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'Persistent Volumes',
    description: 'Managing persistent storage in Kubernetes clusters',
    icon: Database,
    duration: '3-4 hours',
    topics: ['PV Lifecycle', 'Storage Classes', 'Access Modes', 'Reclaim Policies', 'Volume Binding']
  },
  {
    title: 'Persistent Volume Claims',
    description: 'Requesting and using persistent storage',
    icon: HardDrive,
    duration: '2-3 hours',
    topics: ['PVC Creation', 'Storage Requests', 'Access Modes', 'Binding Process', 'Status Monitoring']
  },
  {
    title: 'Storage Classes',
    description: 'Dynamic provisioning of persistent volumes',
    icon: Settings,
    duration: '2-3 hours',
    topics: ['Dynamic Provisioning', 'Provisioner Configuration', 'Parameters', 'Default Classes', 'Binding Modes']
  },
  {
    title: 'Volume Snapshots',
    description: 'Creating and managing volume snapshots',
    icon: Archive,
    duration: '1-2 hours',
    topics: ['Snapshot Classes', 'Volume Snapshots', 'Snapshot Contents', 'Restore Operations', 'Backup Strategies']
  }
]

const prerequisites = [
  'Understanding of Pods and Deployments',
  'Basic knowledge of storage concepts',
  'Experience with kubectl commands',
  'Understanding of Kubernetes resources'
]

export default function CKAStorageVolumesPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            💾 CKA Storage
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Storage & Volumes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Learn how to manage persistent storage in Kubernetes. 
            Master volume provisioning, snapshots, and data persistence strategies.
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Prerequisites</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>What You Should Know Before Starting</CardTitle>
            <CardDescription>Essential knowledge for working with Storage and Volumes</CardDescription>
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
                <Database className="h-5 w-5 mr-2 text-blue-500" />
                Persistent Volumes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Cluster-level storage resources that can be provisioned and managed.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Volume lifecycle management</li>
                <li>• Access modes (RWO, ROX, RWX)</li>
                <li>• Reclaim policies (Retain, Delete, Recycle)</li>
                <li>• Storage capacity and limits</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HardDrive className="h-5 w-5 mr-2 text-green-500" />
                Volume Claims
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                User requests for persistent storage with specific requirements.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Storage size requests</li>
                <li>• Access mode requirements</li>
                <li>• Storage class selection</li>
                <li>• Binding and mounting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-purple-500" />
                Storage Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Dynamic provisioning of persistent volumes with different characteristics.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Dynamic volume provisioning</li>
                <li>• Provisioner configuration</li>
                <li>• Storage parameters</li>
                <li>• Default storage classes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Archive className="h-5 w-5 mr-2 text-orange-500" />
                Volume Snapshots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Point-in-time copies of persistent volumes for backup and restore.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Snapshot creation and management</li>
                <li>• Snapshot classes and policies</li>
                <li>• Restore from snapshots</li>
                <li>• Backup strategies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Storage Types */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Storage Types</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Local Storage</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Direct access to node storage for high-performance applications.
              </p>
              <Badge variant="outline">High Performance</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Network Storage</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Shared storage accessible from multiple nodes in the cluster.
              </p>
              <Badge variant="outline">Shared Access</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Cloud Storage</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Cloud provider storage services integrated with Kubernetes.
              </p>
              <Badge variant="outline">Cloud Native</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Continue?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Master Storage and Volumes, then learn about Security and RBAC for cluster security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/cka/security-rbac">
              <Lock className="mr-2 h-5 w-5" />
              Next: Security & RBAC
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

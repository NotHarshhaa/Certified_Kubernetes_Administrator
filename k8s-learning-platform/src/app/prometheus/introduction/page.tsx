import Link from 'next/link'
import { ArrowRight, Monitor, BookOpen, Code, Settings, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const topics = [
  {
    title: 'What is Prometheus?',
    description: 'Understanding the monitoring and alerting toolkit',
    icon: Monitor,
    content: 'Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud.'
  },
  {
    title: 'Metrics and Time Series',
    description: 'Learn about Prometheus metrics and time series data',
    icon: BookOpen,
    content: 'Prometheus collects metrics from configured targets at given intervals, evaluates rule expressions, and displays the results.'
  },
  {
    title: 'PromQL Queries',
    description: 'Mastering Prometheus Query Language',
    icon: Code,
    content: 'PromQL is a functional query language that lets you select and aggregate time series data in real time.'
  },
  {
    title: 'Alerting Rules',
    description: 'Setting up alerts and notifications',
    icon: Settings,
    content: 'Learn how to define alerting rules that trigger notifications when certain conditions are met.'
  }
]

export default function PrometheusIntroductionPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-sm">
            📊 Prometheus Monitoring
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Introduction to Prometheus
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Learn how to set up comprehensive monitoring and alerting with Prometheus, Grafana, and Alertmanager.
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
                  <div className="p-3 rounded-lg bg-purple-500">
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
                  <Link href={`/prometheus/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}>
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
      <div className="bg-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Monitor?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Start with the basics and build a comprehensive monitoring solution for your Kubernetes cluster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/prometheus/installation">
              <Monitor className="mr-2 h-5 w-5" />
              Start Installation
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/prometheus">
              <ArrowRight className="mr-2 h-5 w-5" />
              Back to Prometheus Overview
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Users, BookOpen, Code, PlayCircle, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const learningPaths = [
  {
    title: 'CKA Certification Path',
    description: 'Start here if you want to become a Certified Kubernetes Administrator',
    icon: BookOpen,
    href: '/cka',
    duration: '6-8 weeks',
    difficulty: 'Intermediate',
    color: 'bg-blue-500',
    recommended: true,
    topics: ['Kubernetes Fundamentals', 'Pod Management', 'Networking', 'Security', 'Troubleshooting'],
  },
  {
    title: 'Helm Package Manager',
    description: 'Learn to package and deploy applications with Helm',
    icon: Code,
    href: '/helm',
    duration: '2-3 weeks',
    difficulty: 'Beginner',
    color: 'bg-green-500',
    recommended: false,
    topics: ['Helm Charts', 'Templating', 'Repositories', 'Deployment Automation'],
  },
  {
    title: 'Kubernetes Operators',
    description: 'Extend Kubernetes with custom resources and operators',
    icon: PlayCircle,
    href: '/operators',
    duration: '3-4 weeks',
    difficulty: 'Advanced',
    color: 'bg-yellow-500',
    recommended: false,
    topics: ['CRDs', 'Controllers', 'Operator Pattern', 'State Management'],
  },
  {
    title: 'Prometheus Monitoring',
    description: 'Set up comprehensive monitoring and alerting',
    icon: Monitor,
    href: '/prometheus',
    duration: '3-4 weeks',
    difficulty: 'Intermediate',
    color: 'bg-purple-500',
    recommended: false,
    topics: ['Metrics Collection', 'PromQL', 'Grafana', 'Alerting'],
  },
]

const prerequisites = [
  {
    title: 'Basic Linux Knowledge',
    description: 'Command line usage, file system navigation, process management',
    essential: true,
  },
  {
    title: 'Container Concepts',
    description: 'Understanding of Docker containers and containerization',
    essential: true,
  },
  {
    title: 'YAML Configuration',
    description: 'Basic knowledge of YAML syntax and structure',
    essential: true,
  },
  {
    title: 'Networking Basics',
    description: 'Understanding of TCP/IP, DNS, and basic networking concepts',
    essential: false,
  },
  {
    title: 'Cloud Platforms',
    description: 'Experience with AWS, GCP, or Azure is helpful but not required',
    essential: false,
  },
]

const timeCommitment = [
  { level: 'Beginner', hours: '5-10 hours/week', duration: '2-3 months' },
  { level: 'Intermediate', hours: '10-15 hours/week', duration: '1-2 months' },
  { level: 'Advanced', hours: '15-20 hours/week', duration: '3-4 weeks' },
]

export default function GetStartedPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm">
            🚀 Ready to Start Your Kubernetes Journey?
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Get Started with Kubernetes Learning
          </h1>
          <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-2">
            Choose your learning path and begin mastering Kubernetes. Whether you're a beginner 
            or looking to advance your skills, we have the right path for you.
          </p>
        </div>
      </div>

      {/* Learning Paths */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Choose Your Learning Path</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {learningPaths.map((path, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${path.recommended ? 'ring-2 ring-blue-500' : ''}`}>
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className={`p-2 md:p-3 rounded-lg ${path.color}`}>
                      <path.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-base md:text-lg">{path.title}</CardTitle>
                        {path.recommended && (
                          <Badge variant="default" className="text-xs">Recommended</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          <Clock className="mr-1 h-3 w-3" />
                          {path.duration}
                        </Badge>
                        <Badge 
                          variant={path.difficulty === 'Beginner' ? 'default' : 
                                  path.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}
                          className="text-xs"
                        >
                          {path.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <CardDescription className="mb-3 md:mb-4 text-sm md:text-base">
                  {path.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {path.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full text-xs md:text-sm">
                  <Link href={path.href}>
                    Start This Path
                    <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Prerequisites</h2>
        <Card>
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl">What You Should Know Before Starting</CardTitle>
            <CardDescription className="text-sm md:text-base">
              These foundational concepts will help you get the most out of your Kubernetes learning journey.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {prerequisites.map((prereq, index) => (
                <div key={index} className="flex items-start space-x-2 md:space-x-3">
                  <CheckCircle className={`h-4 w-4 md:h-5 md:w-5 flex-shrink-0 mt-0.5 ${prereq.essential ? 'text-green-500' : 'text-blue-500'}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">{prereq.title}</h4>
                      {prereq.essential ? (
                        <Badge variant="default" className="text-xs">Essential</Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">Helpful</Badge>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">{prereq.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time Commitment */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Time Commitment</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {timeCommitment.map((commitment, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center justify-center space-x-2 text-sm md:text-base">
                  <Users className="h-4 w-4 md:h-5 md:w-5" />
                  <span>{commitment.level}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-2">
                  <div>
                    <div className="text-lg md:text-2xl font-bold text-blue-600">{commitment.hours}</div>
                    <div className="text-xs md:text-sm text-gray-600">per week</div>
                  </div>
                  <div>
                    <div className="text-base md:text-lg font-semibold text-gray-900">{commitment.duration}</div>
                    <div className="text-xs md:text-sm text-gray-600">total duration</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Start Guide */}
      <div className="bg-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Start Guide</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Choose Your Path</h3>
            <p className="text-sm text-gray-600">Select the learning path that matches your goals and experience level</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Set Up Environment</h3>
            <p className="text-sm text-gray-600">Prepare your local development environment and Kubernetes cluster</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Start Learning</h3>
            <p className="text-sm text-gray-600">Follow the tutorials, complete hands-on labs, and build projects</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Start your Kubernetes learning journey today with our comprehensive, hands-on approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/cka">
              <BookOpen className="mr-2 h-5 w-5" />
              Start with CKA
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/helm">
              <Code className="mr-2 h-5 w-5" />
              Try Helm First
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

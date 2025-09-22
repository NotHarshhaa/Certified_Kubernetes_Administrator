import Link from 'next/link'
import { ArrowRight, Bell, Mail, MessageSquare, Phone, Users, Settings, Clock, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const notificationChannels = [
  {
    title: 'Email Notifications',
    description: 'Send alerts via email to team members',
    icon: Mail,
    content: 'Configure SMTP settings to send detailed alert notifications to email addresses.',
    configuration: {
      smtpHost: 'smtp.gmail.com:587',
      smtpAuth: 'true',
      smtpUser: 'alerts@company.com',
      templates: 'HTML and text templates'
    }
  },
  {
    title: 'Slack Integration',
    description: 'Send alerts to Slack channels',
    icon: MessageSquare,
    content: 'Integrate with Slack for real-time team notifications and collaboration.',
    configuration: {
      webhookUrl: 'https://hooks.slack.com/services/...',
      channel: '#alerts',
      username: 'Alertmanager',
      templates: 'Slack-specific formatting'
    }
  },
  {
    title: 'PagerDuty Integration',
    description: 'Escalate critical alerts to on-call engineers',
    icon: Phone,
    content: 'Route critical alerts to PagerDuty for immediate incident response.',
    configuration: {
      integrationKey: 'pagerduty-integration-key',
      severity: 'critical, warning',
      autoResolve: 'true',
      escalation: 'On-call rotation'
    }
  },
  {
    title: 'Webhook Endpoints',
    description: 'Send alerts to custom webhook endpoints',
    icon: Settings,
    content: 'Configure custom webhooks to integrate with internal systems and APIs.',
    configuration: {
      url: 'https://api.company.com/alerts',
      method: 'POST',
      headers: 'Authorization, Content-Type',
      payload: 'JSON formatted alerts'
    }
  }
]

const alertRouting = [
  {
    name: 'Critical Alerts',
    matchers: ['severity=critical'],
    receiver: 'critical-team',
    groupBy: ['alertname', 'cluster'],
    groupWait: '10s',
    groupInterval: '5m',
    repeatInterval: '1h'
  },
  {
    name: 'Warning Alerts',
    matchers: ['severity=warning'],
    receiver: 'warning-team',
    groupBy: ['alertname'],
    groupWait: '30s',
    groupInterval: '10m',
    repeatInterval: '4h'
  },
  {
    name: 'Info Alerts',
    matchers: ['severity=info'],
    receiver: 'info-team',
    groupBy: ['alertname'],
    groupWait: '1m',
    groupInterval: '30m',
    repeatInterval: '12h'
  }
]

const features = [
  {
    title: 'Alert Grouping',
    description: 'Group related alerts to reduce notification noise',
    icon: Users,
    details: 'Combine multiple alerts into single notifications based on labels and time windows.'
  },
  {
    title: 'Inhibition Rules',
    description: 'Suppress lower-priority alerts when higher-priority ones are firing',
    icon: AlertTriangle,
    details: 'Prevent alert spam by automatically suppressing related alerts.'
  },
  {
    title: 'Silencing',
    description: 'Temporarily silence specific alerts or alert patterns',
    icon: Clock,
    details: 'Manually or automatically silence alerts during maintenance windows.'
  },
  {
    title: 'Rich Templates',
    description: 'Customize notification content with templates',
    icon: Settings,
    details: 'Create custom notification templates for different channels and teams.'
  }
]

const sampleConfig = {
  global: {
    smtp_smarthost: 'smtp.gmail.com:587',
    smtp_from: 'alerts@company.com'
  },
  route: {
    group_by: ['alertname'],
    group_wait: '10s',
    group_interval: '10s',
    repeat_interval: '1h',
    receiver: 'web.hook'
  },
  receivers: [
    {
      name: 'web.hook',
      webhook_configs: [
        {
          url: 'http://127.0.0.1:5001/'
        }
      ]
    }
  ]
}

export default function AlertmanagerPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm">
            🔔 Alert Management
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Alertmanager Configuration
          </h1>
          <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-2">
            Configure Alertmanager for intelligent alert routing, grouping, and notifications. 
            Learn to set up multiple notification channels and manage alert lifecycle effectively.
          </p>
        </div>
      </div>

      {/* Notification Channels */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Notification Channels</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {notificationChannels.map((channel, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <channel.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg">{channel.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {channel.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {channel.content}
                </p>
                <div className="space-y-2">
                  {Object.entries(channel.configuration).map(([key, value]) => (
                    <div key={key} className="flex text-sm">
                      <span className="font-medium text-gray-900 w-24 md:w-32">{key}:</span>
                      <span className="text-gray-600 flex-1">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Alert Routing */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Alert Routing Configuration</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Routing Rules</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Configure how alerts are routed to different teams and notification channels based on severity and labels.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertRouting.map((route, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900 text-sm md:text-base">{route.name}</h4>
                    <Badge variant="outline" className="text-xs">{route.receiver}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Matchers:</span>
                      <code className="ml-1 bg-gray-100 px-1 rounded text-xs">{route.matchers[0]}</code>
                    </div>
                    <div>
                      <span className="font-medium">Group By:</span>
                      <span className="ml-1 text-gray-600">{route.groupBy.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-medium">Group Wait:</span>
                      <span className="ml-1 text-gray-600">{route.groupWait}</span>
                    </div>
                    <div>
                      <span className="font-medium">Group Interval:</span>
                      <span className="ml-1 text-gray-600">{route.groupInterval}</span>
                    </div>
                    <div>
                      <span className="font-medium">Repeat Interval:</span>
                      <span className="ml-1 text-gray-600">{route.repeatInterval}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="p-3 bg-purple-500 rounded-lg mx-auto mb-4 w-fit">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2">{feature.description}</p>
                <p className="text-xs text-gray-500">{feature.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sample Configuration */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Sample Configuration</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Alertmanager Configuration File</CardTitle>
            <CardDescription className="text-sm md:text-base">
              A complete Alertmanager configuration example with routing and notification setup.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-xs md:text-sm">
{`global:
  smtp_smarthost: 'smtp.gmail.com:587'
  smtp_from: 'alerts@company.com'

route:
  group_by: ['alertname']
  group_wait: '10s'
  group_interval: '10s'
  repeat_interval: '1h'
  receiver: 'web.hook'
  routes:
  - match:
      severity: critical
    receiver: 'critical-team'
    group_wait: '5s'
    repeat_interval: '30m'
  - match:
      severity: warning
    receiver: 'warning-team'
    group_wait: '30s'
    repeat_interval: '2h'

receivers:
- name: 'web.hook'
  webhook_configs:
  - url: 'http://127.0.0.1:5001/'
    
- name: 'critical-team'
  email_configs:
  - to: 'critical@company.com'
    subject: 'CRITICAL: {{ .GroupLabels.alertname }}'
    body: |
      {{ range .Alerts }}
      Alert: {{ .Annotations.summary }}
      Description: {{ .Annotations.description }}
      {{ end }}
      
- name: 'warning-team'
  slack_configs:
  - api_url: 'https://hooks.slack.com/services/...'
    channel: '#alerts'
    title: 'Warning Alert'
    text: '{{ range .Alerts }}{{ .Annotations.summary }}{{ end }}'`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Access Alertmanager */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Access Alertmanager</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Quick Setup Guide</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Access the Alertmanager UI to view and manage alerts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">1. Port Forward to Alertmanager</h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm">
                    <span className="text-blue-400">$</span> kubectl port-forward svc/prometheus-kube-prometheus-alertmanager 9093:9093 -n monitoring
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">2. Access Alertmanager UI</h4>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm md:text-base text-gray-700">
                    Open your browser and navigate to <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:9093</code>
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">3. Key Features Available</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Bell className="h-4 w-4 text-blue-500" />
                    <span>View Active Alerts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4 text-blue-500" />
                    <span>Configure Silences</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>Manage Groups</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ready to Monitor External Apps?</h2>
        <p className="text-sm md:text-lg text-gray-600 mb-6">
          Now that you have a complete alerting system, learn how to monitor third-party applications and services.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/third-party-apps">
              <Bell className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Monitor Third-party Apps
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/custom-apps">
              <Settings className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Custom Applications
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

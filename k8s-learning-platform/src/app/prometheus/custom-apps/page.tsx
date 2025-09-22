import Link from 'next/link'
import { ArrowRight, Code, Monitor, Settings, CheckCircle, Clock, Database, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const clientLibraries = [
  {
    title: 'Node.js (prom-client)',
    description: 'Official Prometheus client for Node.js applications',
    icon: Code,
    content: 'Add custom metrics to your Node.js applications using the prom-client library.',
    features: ['Counter metrics', 'Gauge metrics', 'Histogram metrics', 'Summary metrics'],
    example: 'const client = require(\'prom-client\');\nconst counter = new client.Counter({\n  name: \'http_requests_total\',\n  help: \'Total number of HTTP requests\'\n});'
  },
  {
    title: 'Python (prometheus_client)',
    description: 'Official Prometheus client for Python applications',
    icon: Code,
    content: 'Instrument Python applications with custom metrics using the prometheus_client library.',
    features: ['Counter metrics', 'Gauge metrics', 'Histogram metrics', 'Summary metrics'],
    example: 'from prometheus_client import Counter, Gauge\n\nREQUEST_COUNT = Counter(\'http_requests_total\', \'Total HTTP requests\')\nREQUEST_DURATION = Histogram(\'http_request_duration_seconds\', \'HTTP request duration\')'
  },
  {
    title: 'Go (prometheus/client_golang)',
    description: 'Official Prometheus client for Go applications',
    icon: Code,
    content: 'Add Prometheus metrics to Go applications using the official client library.',
    features: ['Counter metrics', 'Gauge metrics', 'Histogram metrics', 'Summary metrics'],
    example: 'import "github.com/prometheus/client_golang/prometheus"\n\nvar (\n    httpRequestsTotal = prometheus.NewCounterVec(\n        prometheus.CounterOpts{\n            Name: "http_requests_total",\n            Help: "Total number of HTTP requests",\n        },\n        []string{"method", "endpoint"},\n    )\n)'
  },
  {
    title: 'Java (micrometer)',
    description: 'Popular metrics library for Java applications',
    icon: Code,
    content: 'Use Micrometer to expose metrics from Java applications in Prometheus format.',
    features: ['Counter metrics', 'Gauge metrics', 'Timer metrics', 'Custom metrics'],
    example: 'import io.micrometer.prometheus.PrometheusMeterRegistry;\n\n@RestController\npublic class MetricsController {\n    private final Counter requestCounter;\n    \n    public MetricsController(PrometheusMeterRegistry registry) {\n        this.requestCounter = Counter.builder("http_requests_total")\n            .description("Total HTTP requests")\n            .register(registry);\n    }\n}'
  }
]

const metricTypes = [
  {
    type: 'Counter',
    description: 'Monotonically increasing counter',
    useCase: 'Request counts, errors, events',
    example: 'http_requests_total{method="GET", status="200"} 1234',
    characteristics: ['Only increases', 'Reset on restart', 'Use for rates']
  },
  {
    type: 'Gauge',
    description: 'Single numerical value that can go up and down',
    useCase: 'Current values, temperatures, queue sizes',
    example: 'memory_usage_bytes 1073741824',
    characteristics: ['Can increase or decrease', 'Current snapshot', 'Use for current state']
  },
  {
    type: 'Histogram',
    description: 'Distribution of values in buckets',
    useCase: 'Request duration, response sizes',
    example: 'http_request_duration_seconds_bucket{le="0.1"} 95',
    characteristics: ['Multiple buckets', 'Percentiles', 'Use for distributions']
  },
  {
    type: 'Summary',
    description: 'Similar to histogram with configurable quantiles',
    useCase: 'Latency percentiles, quantiles',
    example: 'http_request_duration_seconds_summary{quantile="0.5"} 0.1',
    characteristics: ['Configurable quantiles', 'Client-side calculation', 'Use for percentiles']
  }
]

const instrumentationSteps = [
  {
    step: '1',
    title: 'Add Client Library',
    description: 'Install the appropriate Prometheus client library for your language',
    content: 'Choose the official Prometheus client library for your programming language and add it to your project.',
    commands: ['npm install prom-client', 'pip install prometheus_client', 'go get github.com/prometheus/client_golang']
  },
  {
    step: '2',
    title: 'Define Metrics',
    description: 'Create metrics that represent your application\'s behavior',
    content: 'Define counters, gauges, histograms, and summaries that capture important application metrics.',
    commands: ['const counter = new Counter({name: \'requests_total\'});', 'const gauge = new Gauge({name: \'queue_size\'});']
  },
  {
    step: '3',
    title: 'Expose Metrics Endpoint',
    description: 'Create an HTTP endpoint that serves metrics in Prometheus format',
    content: 'Set up an endpoint (typically /metrics) that returns metrics in the Prometheus exposition format.',
    commands: ['app.get(\'/metrics\', (req, res) => {', '  res.set(\'Content-Type\', register.contentType);', '  res.end(register.metrics());', '});']
  },
  {
    step: '4',
    title: 'Configure Scraping',
    description: 'Configure Prometheus to scrape your application metrics',
    content: 'Add your application to Prometheus configuration or create a ServiceMonitor resource.',
    commands: ['apiVersion: monitoring.coreos.com/v1', 'kind: ServiceMonitor', 'metadata:', '  name: my-app-monitor']
  }
]

const sampleApplications = [
  {
    name: 'Node.js Express API',
    description: 'Complete Node.js application with Prometheus instrumentation',
    metrics: ['HTTP request count', 'Request duration', 'Error rate', 'Active connections'],
    dashboard: 'Custom API Dashboard',
    alerts: ['High error rate', 'Slow response time', 'High memory usage']
  },
  {
    name: 'Python Flask Web App',
    description: 'Python Flask application with comprehensive metrics',
    metrics: ['Request count by endpoint', 'Database query duration', 'Cache hit ratio', 'User sessions'],
    dashboard: 'Flask App Dashboard',
    alerts: ['Database connection errors', 'Cache miss rate', 'High CPU usage']
  },
  {
    name: 'Go Microservice',
    description: 'Go microservice with business metrics',
    metrics: ['Message processing rate', 'Queue depth', 'Processing latency', 'Failed operations'],
    dashboard: 'Microservice Dashboard',
    alerts: ['Queue backlog', 'High latency', 'Processing failures']
  }
]

const bestPractices = [
  'Use meaningful metric names that clearly describe what they measure',
  'Include relevant labels but avoid high cardinality',
  'Choose appropriate metric types for your use case',
  'Document your metrics with help text',
  'Use consistent naming conventions across your applications',
  'Monitor your metrics endpoint health',
  'Test your metrics in staging before production deployment'
]

export default function CustomAppsPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-2 md:mb-4 text-xs md:text-sm">
            💻 Custom Application Instrumentation
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Instrument Your Applications
          </h1>
          <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-2">
            Learn to add custom metrics to your applications using Prometheus client libraries. 
            Monitor business logic, performance, and user behavior with comprehensive instrumentation.
          </p>
        </div>
      </div>

      {/* Client Libraries */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Prometheus Client Libraries</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {clientLibraries.map((library, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <library.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg">{library.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {library.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {library.content}
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Features:</h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {library.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Example:</h4>
                    <div className="bg-gray-900 rounded-lg p-3">
                      <pre className="text-green-400 text-xs md:text-sm overflow-x-auto">
                        {library.example}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Metric Types */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Prometheus Metric Types</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {metricTypes.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                  <Database className="h-5 w-5 text-green-600" />
                  <span>{metric.type}</span>
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  {metric.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Use Cases:</h4>
                    <p className="text-gray-600 text-sm md:text-base">{metric.useCase}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Example:</h4>
                    <div className="bg-gray-100 rounded p-2">
                      <code className="text-xs md:text-sm text-gray-800">{metric.example}</code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Characteristics:</h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {metric.characteristics.map((char, charIndex) => (
                        <Badge key={charIndex} variant="outline" className="text-xs">
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Instrumentation Steps */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Instrumentation Process</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {instrumentationSteps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg">{step.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {step.content}
                </p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-xs md:text-sm overflow-x-auto">
                    {step.commands.map((cmd, cmdIndex) => (
                      <div key={cmdIndex} className="mb-1">
                        {cmd.startsWith('apiVersion') || cmd.startsWith('kind') || cmd.startsWith('metadata') || cmd.startsWith('  name') ? 
                          <span className="text-blue-400">{cmd}</span> :
                          cmd.startsWith('const ') || cmd.startsWith('app.get') || cmd.startsWith('  res.') || cmd.startsWith('});') ?
                          <span className="text-yellow-400">{cmd}</span> :
                          <span><span className="text-blue-400">$</span> {cmd}</span>
                        }
                      </div>
                    ))}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sample Applications */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Sample Instrumented Applications</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {sampleApplications.map((app, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-base md:text-lg">{app.name}</CardTitle>
                <CardDescription className="text-sm">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Metrics:</h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {app.metrics.map((metric, metricIndex) => (
                        <Badge key={metricIndex} variant="secondary" className="text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Dashboard:</h4>
                    <p className="text-gray-600 text-sm">{app.dashboard}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Alerts:</h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {app.alerts.map((alert, alertIndex) => (
                        <Badge key={alertIndex} variant="outline" className="text-xs">
                          {alert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Best Practices</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Instrumentation Guidelines</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Follow these best practices for effective application instrumentation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 md:space-y-3">
              {bestPractices.map((practice, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{practice}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start Guide */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Quick Start Example</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Node.js Express App</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Complete example of instrumenting a Node.js Express application with Prometheus metrics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-xs md:text-sm">
{`const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

// Add default metrics
client.collectDefaultMetrics({ register });

// Create custom metrics
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register]
});

const httpRequestTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register]
});

// Middleware to collect metrics
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const route = req.route ? req.route.path : req.path;
    
    httpRequestDuration
      .labels(req.method, route, res.statusCode)
      .observe(duration);
      
    httpRequestTotal
      .labels(req.method, route, res.statusCode)
      .inc();
  });
  
  next();
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Your application routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <div className="bg-purple-50 rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Congratulations!</h2>
        <p className="text-sm md:text-lg text-gray-600 mb-6">
          You've learned how to instrument applications with Prometheus. You now have a complete monitoring stack 
          from installation to custom application metrics.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus">
              <Monitor className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Back to Prometheus Overview
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="text-sm md:text-base">
            <Link href="/prometheus/introduction">
              <ArrowRight className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Start Over
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

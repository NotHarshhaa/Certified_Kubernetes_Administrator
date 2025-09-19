# Kubernetes Learning Platform

A comprehensive Next.js-based learning platform for mastering Kubernetes, covering CKA certification, Helm package management, Kubernetes Operators, and Prometheus monitoring.

## 🚀 Features

- **Modern UI/UX**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Component Library**: Uses shadcn/ui for beautiful, accessible components
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Learning**: Hands-on tutorials with code examples
- **Comprehensive Coverage**: 
  - CKA Certification preparation
  - Helm package management
  - Kubernetes Operators
  - Prometheus monitoring stack

## 📚 Learning Paths

### 1. CKA Certification
- Kubernetes fundamentals
- Pods and Deployments
- Services and Networking
- Storage and Volumes
- Security and RBAC
- Troubleshooting

### 2. Helm Package Manager
- Introduction to Helm
- Creating Helm Charts
- Advanced Templating
- Online Boutique Demo
- Helmfile for GitOps

### 3. Kubernetes Operators
- CRDs and Custom Resources
- Operator Concepts
- Prometheus Operator Demo
- Splunk Operator Demo

### 4. Prometheus Monitoring
- Introduction to Prometheus
- Installation and Setup
- Grafana Dashboards
- Alert Rules
- Alertmanager Configuration
- Third-party Application Monitoring
- Custom Application Instrumentation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd k8s-learning-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
k8s-learning-platform/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── cka/               # CKA certification content
│   │   ├── helm/              # Helm package manager content
│   │   ├── operators/         # Kubernetes operators content
│   │   ├── prometheus/        # Prometheus monitoring content
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── navigation.tsx    # Top navigation
│   │   └── sidebar.tsx       # Sidebar navigation
│   ├── lib/                  # Utility functions
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Adding New Content

1. Create a new page in the appropriate directory under `src/app/`
2. Update the sidebar navigation in `src/components/sidebar.tsx`
3. Add any new components to `src/components/`

### Styling

- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom CSS variables for theming are defined in the globals.css

### Components

The project uses shadcn/ui components which can be customized by modifying the component files in `src/components/ui/`.

## 📖 Content Sources

This learning platform is based on the comprehensive Kubernetes learning materials from the [Certified_Kubernetes_Administrator](https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator) repository, transformed into an interactive web experience.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original content by [Harshhaa](https://github.com/NotHarshhaa)
- Kubernetes community for excellent documentation
- shadcn/ui for beautiful component library
- Next.js team for the amazing framework

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Happy Learning! 🎉**

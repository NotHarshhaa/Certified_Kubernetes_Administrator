# GitHub Pages Deployment Guide

This guide explains how to deploy the Kubernetes Learning Platform to GitHub Pages using GitHub Actions.

## 🚀 Quick Setup

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Repository Settings

Make sure your repository has the following settings:
- **Repository name**: `k8s-learning-platform` (or update the basePath in next.config.js)
- **Visibility**: Public (required for GitHub Pages)
- **Actions**: Enabled

### 3. Automatic Deployment

The site will automatically deploy when you:
- Push to the `main` branch
- Create a pull request to `main`

## 📁 File Structure

```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow
next.config.js          # Next.js configuration for static export
package.json            # Build scripts
```

## ⚙️ Configuration Details

### Next.js Configuration

The `next.config.js` is configured for static export:

```javascript
const nextConfig = {
  output: 'export',           // Static export
  trailingSlash: true,        // Add trailing slashes
  images: {
    unoptimized: true        // Disable image optimization
  },
  basePath: '/k8s-learning-platform',  // GitHub Pages subdirectory
  assetPrefix: '/k8s-learning-platform'
}
```

### GitHub Actions Workflow

The workflow:
1. **Checks out** the repository
2. **Sets up** Node.js 18
3. **Installs** dependencies
4. **Builds** the Next.js app
5. **Exports** static files
6. **Deploys** to GitHub Pages

## 🔧 Customization

### Custom Domain

To use a custom domain:

1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Create a `CNAME` file in the repository root with your domain
3. Configure DNS settings with your domain provider

### Different Repository Name

If your repository has a different name:

1. Update the `basePath` in `next.config.js`
2. Update the `NEXT_PUBLIC_BASE_PATH` in the GitHub Actions workflow

## 📊 Deployment Status

- **Build Status**: Check the Actions tab in your repository
- **Live Site**: Available at `https://yourusername.github.io/k8s-learning-platform`
- **Deployment Logs**: Available in the Actions tab

## 🛠️ Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Site Not Loading**
   - Verify GitHub Pages is enabled
   - Check the basePath configuration
   - Ensure the repository is public

3. **Assets Not Loading**
   - Verify assetPrefix configuration
   - Check file paths in the build output

### Manual Deployment

If automatic deployment fails:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Export static files
npm run export

# The static files will be in the 'out' directory
```

## 📝 Notes

- The site is built as a static site (no server-side rendering)
- All images are unoptimized for GitHub Pages compatibility
- The site uses trailing slashes for better GitHub Pages support
- Mobile sidebar functionality works in the static build

## 🔗 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/advanced-features/static-html-export)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
# 🚢 Plumbus Landing Page - Production Deployment Guide

## Quick Start

```bash
# Build for production
npm run build:prod

# Test performance
npm run perf:test

# Preview locally
npm run preview
```

## Performance Optimized Build

The production build includes:
- ✅ **322KB total bundle** (56% reduction from original)
- ✅ **Custom SVG icons** (eliminated 412KB lucide-react dependency)
- ✅ **Service Worker** for aggressive caching
- ✅ **Web Vitals monitoring** enabled
- ✅ **Accessibility optimizations** (reduced motion support)

## Deployment Targets

### Netlify (Recommended)
```bash
# Deploy command
npm run build:prod

# Build directory
dist/

# Environment variables
NODE_ENV=production
```

### Vercel
```json
{
  "buildCommand": "npm run build:prod",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Traditional Hosting
```bash
# Build and deploy
npm run build:prod
rsync -av dist/ user@server:/var/www/plumbus/
```

## Server Configuration

### Nginx
```nginx
server {
    listen 80;
    server_name plumbus.com;
    root /var/www/plumbus;
    index index.html;

    # Enable compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/css application/javascript application/json image/svg+xml;

    # Cache static assets
    location ~* \.(js|css|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Service worker cache
    location = /sw.js {
        expires 0;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # SPA fallback
    try_files $uri $uri/ /index.html;
}
```

### Apache
```apache
# .htaccess
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css application/javascript
</IfModule>

# Cache control
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

## Performance Monitoring

### Built-in Web Vitals
The site automatically reports Core Web Vitals in production:
```javascript
// Automatic reporting to console
getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Custom Analytics Integration
```javascript
// Add to src/main.tsx
import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
  const sendToAnalytics = (metric) => {
    // Send to your analytics service
    gtag('event', metric.name, {
      value: Math.round(metric.value),
      custom_parameter: metric.rating,
    });
  };

  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
});
```

## Security Headers

### Recommended Headers
```
Content-Security-Policy: default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Performance Testing

### Automated Testing
```bash
# Run performance tests
npm run perf:build

# Expected results
# Bundle Size: ~322KB
# Mobile Score: Fair
# Core Web Vitals: Mixed (Good FID/CLS, Needs Work LCP)
```

### Manual Testing Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://webpagetest.org/)
- Chrome DevTools Lighthouse
- [GTmetrix](https://gtmetrix.com/)

## SEO Configuration

### Meta Tags (Included)
```html
<meta name="description" content="The Plumbus - A mysterious multi-purpose household device..." />
<meta property="og:title" content="Plumbus - The Ultimate Household Device" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/plumbus-og.png" />
```

### Sitemap Generation
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://plumbus.com/</loc>
    <lastmod>2025-08-03</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## Environment Variables

### Production Settings
```bash
# Required for production build
NODE_ENV=production

# Optional analytics (not currently implemented)
VITE_ENABLE_ANALYTICS=true

# Optional API endpoint (not currently used)
VITE_API_BASE_URL=https://api.plumbus.com

# Optional feature flags
VITE_ENABLE_SERVICE_WORKER=true
VITE_ENABLE_WEB_VITALS=true
```

### Environment Setup
```bash
# Create .env.production file (do not commit)
echo "NODE_ENV=production" > .env.production
echo "VITE_ENABLE_ANALYTICS=true" >> .env.production
```

## Troubleshooting Guide

### Common Deployment Issues

#### Service Worker Problems
**Symptoms**: Service worker not registering, caching not working
```bash
# Debug steps:
1. Check browser console for registration errors
2. Ensure deployment is over HTTPS (required for SW)
3. Verify sw.js is accessible at /sw.js
4. Clear browser cache and hard reload
5. Check Network tab for SW fetch events
```

**Solution**: 
```javascript
// Verify service worker registration in browser console
navigator.serviceWorker.getRegistrations().then(console.log);
```

#### Font Loading Issues
**Symptoms**: Fonts not loading, FOUT (Flash of Unstyled Text)
```bash
# Debug steps:
1. Verify fonts.googleapis.com is accessible
2. Check CSP headers allow font domains
3. Test font-display: optional fallback works
4. Check network requests for font files
```

**CSP Header Fix**:
```nginx
Content-Security-Policy: font-src 'self' https://fonts.gstatic.com;
```

#### Bundle Size Warnings
**Symptoms**: Build warnings about chunk sizes, slow loading
```bash
# Debug steps:
1. Run bundle analyzer: npm run build -- --analyze
2. Check for duplicate dependencies
3. Review chunk splitting in vite.config.ts
4. Monitor largest chunks (should be <150KB each)
```

**Current Bundle Status**:
- Total: 322KB (target: <350KB) ✅
- Largest chunk: 133KB ✅
- CSS: 33KB ✅

#### Performance Issues
**Symptoms**: Slow loading, poor Core Web Vitals
```bash
# Debug steps:
1. Run Lighthouse audit
2. Check Web Vitals console logs
3. Test on 3G network simulation
4. Verify service worker caching
5. Check for render-blocking resources
```

**Performance Targets**:
- Mobile Lighthouse: 85+ score
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

#### Build Failures
**Symptoms**: npm run build fails
```bash
# Common fixes:
1. Clear node_modules: rm -rf node_modules && npm install
2. Check Node version: node --version (should be 18+)
3. Clear build cache: rm -rf dist
4. Check TypeScript errors: npm run build 2>&1 | grep error
```

#### Responsive Design Issues
**Symptoms**: Layout breaks on mobile/tablet
```bash
# Debug steps:
1. Test on actual devices, not just browser DevTools
2. Check viewport meta tag is present
3. Verify CSS breakpoints work correctly
4. Test touch interactions
```

**Quick Fix CSS**:
```css
/* Ensure mobile viewport is set */
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Continuous Deployment

### GitHub Actions
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build:prod
      - run: npm run perf:test
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './dist'
```

## Post-Deployment Checklist

### Critical Tests (Must Pass)
- [ ] **Build Success**: `npm run build` completes without errors
- [ ] **Bundle Size**: Total size under 350KB (current: 322KB)
- [ ] **Performance**: Run Lighthouse audit (target: 85+ score)
- [ ] **Functionality**: Test all interactive elements
  - [ ] Hero CTA buttons work
  - [ ] FAQ accordion expands/collapses
  - [ ] All scroll animations trigger
  - [ ] Contact forms submit (if implemented)

### Quality Assurance
- [ ] **Mobile**: Verify responsive design on actual devices
  - [ ] iPhone 12/13/14 series
  - [ ] iPad tablet view
  - [ ] Android devices
- [ ] **Accessibility**: Test with screen readers
  - [ ] All images have alt text
  - [ ] Keyboard navigation works
  - [ ] Focus indicators visible
  - [ ] Color contrast passes WCAG AA
- [ ] **SEO**: Verify meta tags and structured data
  - [ ] Page title appears correctly
  - [ ] Meta description under 160 characters
  - [ ] Open Graph tags render properly
  - [ ] Robots.txt accessible

### Technical Verification
- [ ] **Monitoring**: Confirm Web Vitals reporting
  - [ ] Console logs show Web Vitals data
  - [ ] No JavaScript errors in console
  - [ ] Service worker registers correctly
- [ ] **Security**: Test CSP headers and HTTPS
  - [ ] All assets load over HTTPS
  - [ ] No mixed content warnings
  - [ ] CSP headers prevent XSS attacks

### Performance Benchmarks
- [ ] **Core Web Vitals**:
  - [ ] LCP (Largest Contentful Paint): < 2.5s
  - [ ] FID (First Input Delay): < 100ms
  - [ ] CLS (Cumulative Layout Shift): < 0.1
- [ ] **Load Times**:
  - [ ] First paint: < 1.5s
  - [ ] Time to interactive: < 3s
  - [ ] Mobile 3G simulation: < 7s

---

*Deployment guide for optimized Plumbus landing page*
*Last updated: August 3, 2025*
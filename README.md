# 🌸 Plumbus Marketing Website

A whimsical, fully-featured marketing website for the mysterious multi-purpose household device from Rick and Morty. Built with React, TypeScript, Vite, and Framer Motion.

## ✨ Features

- **Interactive Plumbus Visualization**: Clickable hotspots with detailed component information
- **Smooth Animations**: Framer Motion-powered animations with reduced motion support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels, keyboard navigation, and focus management
- **Performance Optimized**: Code splitting, lazy loading, and build optimization
- **Type Safe**: Full TypeScript implementation with strict type checking

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (custom implementation)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify-ready configuration

## 📱 Sections

1. **Hero**: Interactive Plumbus with breathing animation and hotspots
2. **Features**: Grid of animated feature cards with hover effects
3. **Manufacturing**: Step-by-step process with technical details
4. **Social Proof**: Customer testimonials carousel
5. **Pricing**: Three pricing tiers with feature comparison
6. **FAQ**: Expandable accordion with search functionality
7. **Footer**: Navigation, contact info, and newsletter signup

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd plumbus

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ScrollAnimation.tsx
│   ├── sections/           # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Manufacturing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── plumbus/           # Plumbus-specific components
│       └── InteractivePlumbus.tsx
├── hooks/                  # Custom React hooks
│   ├── useIntersectionObserver.ts
│   ├── useScrollSpy.ts
│   └── useReducedMotion.ts
├── types/                  # TypeScript type definitions
│   └── plumbus.ts
├── utils/                  # Utility functions and data
│   ├── animations.ts
│   └── data.ts
├── styles/                 # Global styles
│   └── globals.css
└── App.tsx                # Main application component
```

## 🎯 Key Features

### Interactive Plumbus
- SVG-based illustration with clickable hotspots
- Breathing animation with quantum-field effects
- Dynamic tooltip system with component details
- Accessible keyboard navigation

### Advanced Animations
- Scroll-triggered animations with Intersection Observer
- Reduced motion support for accessibility
- Staggered container animations
- Hover and focus states with micro-interactions

### Responsive Design
- Mobile-first CSS Grid and Flexbox layouts
- Breakpoint-based component adaptations
- Touch-friendly interaction areas
- Progressive enhancement approach

### Performance Optimization
- Code splitting by feature and vendor libraries
- Lazy loading for non-critical components
- Optimized bundle sizes with manual chunking
- Efficient re-renders with React optimization patterns

## 🚀 Deployment

### Netlify (Recommended)

The project includes Netlify configuration files:

- `netlify.toml` - Build settings and redirects
- `public/_redirects` - SPA routing support

Simply connect your repository to Netlify for automatic deployments.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🎨 Customization

### Colors
The pink-themed color palette is defined in `src/styles/globals.css` using CSS custom properties:

```css
:root {
  --pink-50: #fdf2f8;
  --pink-500: #ec4899;
  --pink-900: #831843;
  /* ... */
}
```

### Content
All content is centralized in `src/utils/data.ts`:

- Product features and benefits
- Manufacturing steps and processes
- Customer testimonials
- Pricing tiers and features
- FAQ questions and answers

### Animations
Animation variants are defined in `src/utils/animations.ts` and can be easily customized or extended.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the Rick and Morty universe
- Built with modern web technologies
- Designed for optimal user experience across all dimensions

---

*"Everyone has a Plumbus in their home. They're very useful and I'm not quite sure why we haven't done an episode about them yet."* - Rick Sanchez
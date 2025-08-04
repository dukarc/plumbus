# Plumbus Design System - Quick Reference

## Essential CSS Classes

### Layout Containers
```css
.container          /* Max-width 1200px, centered */
.container-sm       /* Max-width 800px, centered */

.section-beige      /* Beige background with padding */
.section-white      /* White background with padding */
```

### Grid System
```css
.plumbus-grid           /* Basic responsive grid */
.plumbus-grid.cols-2    /* 2-column responsive grid */
.plumbus-grid.cols-3    /* 3-column responsive grid */
.plumbus-grid.cols-4    /* 4-column responsive grid */
```

### Cards
```css
.plumbus-card           /* Basic white card */
.plumbus-card.step-1    /* Blue step card */
.plumbus-card.step-2    /* Yellow step card */
.plumbus-card.step-3    /* Green step card */
.plumbus-card.step-4    /* Coral step card */

.plumbus-testimonial    /* Speech bubble testimonial */
```

### Buttons
```css
.button-primary         /* Pink primary button */
.button-secondary       /* Brown outlined button */
.button-outline         /* Pink outlined button */
```

### Typography
```css
.hero-title            /* Large brown hero title */
.section-title         /* Pink section title */
.card-title            /* Brown card title */

.rick-quote            /* Italic with pink border */
.morty-quote           /* Italic with yellow border */
```

### Form Elements
```css
.plumbus-input         /* Standard input field */
.plumbus-textarea      /* Standard textarea */
```

## Color Variables

### Primary Colors
```css
var(--plumbus-pink)        /* #ED829E - Primary CTAs */
var(--gromflomite-beige)   /* #F6E8CB - Backgrounds */
var(--blamf-brown)         /* #A36E4F - Text */
var(--white)               /* #FFFFFF - Cards */
```

### Step Colors
```css
var(--step-blue)           /* #A8D8EA - Step 1 */
var(--step-yellow)         /* #F4E19C - Step 2 */
var(--step-green)          /* #C8E6C9 - Step 3 */
var(--step-coral)          /* #FFAB91 - Step 4 */
```

## Spacing Scale
```css
var(--space-1)    /* 8px */
var(--space-2)    /* 16px */
var(--space-3)    /* 24px - Minimum card spacing */
var(--space-4)    /* 32px */
var(--space-6)    /* 48px */
var(--space-8)    /* 64px */
```

## Border Radius
```css
var(--border-radius-sm)    /* 8px - Inputs */
var(--border-radius-md)    /* 16px - Buttons */
var(--border-radius-lg)    /* 24px - Cards */
var(--border-radius-xl)    /* 32px - Hero elements */
```

## Typography Scale
```css
var(--text-xs)     /* 12px */
var(--text-sm)     /* 14px */
var(--text-base)   /* 16px */
var(--text-lg)     /* 18px */
var(--text-xl)     /* 20px */
var(--text-2xl)    /* 24px */
var(--text-3xl)    /* 30px */
var(--text-4xl)    /* 36px */
var(--text-5xl)    /* 48px */
```

## Common Patterns

### Hero Section
```html
<section class="plumbus-hero">
  <div class="plumbus-hero-content">
    <h1 class="hero-title">Your Hero Title</h1>
    <p>Hero description text</p>
    <button class="button-primary">Primary CTA</button>
  </div>
</section>
```

### Process Steps
```html
<div class="process-container">
  <div class="plumbus-card step-1">
    <div class="process-step-number">1</div>
    <h3>Step Title</h3>
    <p>Step description</p>
  </div>
  <!-- Repeat for steps 2-4 -->
</div>
```

### Testimonial
```html
<div class="plumbus-testimonial">
  <div class="testimonial-content">
    <p>"This is the testimonial text..."</p>
  </div>
  <div class="testimonial-author">
    <img src="avatar.jpg" alt="Customer" class="testimonial-avatar">
    <div class="testimonial-author-info">
      <h4>Customer Name</h4>
      <p>Customer Title</p>
    </div>
  </div>
</div>
```

### Section Layout
```html
<section class="section-beige">
  <div class="container">
    <h2 class="section-title">Section Title</h2>
    <div class="plumbus-grid cols-3">
      <div class="plumbus-card">Card content</div>
      <div class="plumbus-card">Card content</div>
      <div class="plumbus-card">Card content</div>
    </div>
  </div>
</section>
```

## Utility Classes

### Text Alignment
```css
.text-center
.text-left
.text-right
```

### Margins
```css
.mb-0, .mb-1, .mb-2, .mb-3, .mb-4, .mb-6, .mb-8
```

### Padding
```css
.p-0, .p-1, .p-2, .p-3, .p-4
```

### Flexbox
```css
.flex, .flex-col, .flex-wrap
.items-center, .justify-center, .justify-between
.gap-2, .gap-3, .gap-4
```

## Implementation Rules

1. **Always use design tokens** - Never hardcode colors or spacing
2. **Mobile-first** - Start with mobile styles, enhance for desktop
3. **Semantic HTML** - Use proper heading hierarchy and landmarks
4. **Accessibility** - Include alt text, focus states, and ARIA labels
5. **Performance** - Optimize images and minimize CSS

## File Imports

Add to your main CSS file:
```css
@import './styles/plumbus-design-system.css';
```

Or in your HTML head:
```html
<link rel="stylesheet" href="./styles/plumbus-design-system.css">
```

## Common Mistakes to Avoid

❌ **Don't do this:**
- Using gradients or complex shadows
- Hardcoding colors: `color: #ED829E`
- Inconsistent border radius values
- Skipping responsive design
- Using Comic Sans or other inappropriate fonts

✅ **Do this instead:**
- Use flat colors and minimal shadows
- Use design tokens: `color: var(--plumbus-pink)`
- Use consistent border radius tokens
- Test on all screen sizes
- Stick to Baloo 2 and Montserrat fonts

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

CSS Custom Properties are required for this design system.
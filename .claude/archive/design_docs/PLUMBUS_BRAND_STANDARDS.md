# Plumbus Brand Standards v2.0
## Simplified Flat Illustration Style

This document defines the official brand standards for the Plumbus product line, transitioning from complex gradients to a clean, flat illustration style inspired by organic shapes and warm color palettes.

## Brand Foundation

### Purpose
The Plumbus exists to solve household problems with interdimensional efficiency and Rick Sanchez-approved engineering.

### Vision
Every home in every dimension should have a Plumbus for optimal daily function and dimensional stability.

### Mission
Deliver the most reliable, versatile household tool through advanced interdimensional manufacturing processes.

### Brand Personality
- **Scientific**: Backed by Rick's genius-level intellect
- **Approachable**: Simple enough for Jerry to use
- **Reliable**: Works consistently across dimensions
- **Quirky**: Embraces the absurd with confidence
- **Trustworthy**: Essential household tool for millions

## Visual Identity System

### Color Palette

#### Primary Brand Colors
```css
--plumbus-pink: #ED829E      /* Primary CTAs, logo, important headers */
--gromflomite-beige: #F6E8CB /* Primary background - warm, inviting */
--blamf-brown: #A36E4F       /* Primary text color, borders */
--white: #FFFFFF             /* Card backgrounds, clean surfaces */
```

#### Pastel Step Colors
```css
--step-blue: #A8D8EA         /* Step 1 - soft, approachable */
--step-yellow: #F4E19C       /* Step 2 - warm, optimistic */
--step-green: #C8E6C9        /* Step 3 - fresh, success */
--step-coral: #FFAB91        /* Step 4 - energetic, completion */
```

#### Supporting Colors (Minimal Usage)
```css
--fleeb-blue: #7BA4D1        /* Hover states, links */
--success-green: #8BC34A     /* Success states only */
--warning-orange: #FF9800    /* Warnings only */
--error-red: #F44336         /* Errors only */
```

### Typography System

#### Font Stack
- **Headers**: 'Baloo 2', cursive (playful, Rick & Morty universe)
- **Body**: 'Montserrat', sans-serif (clean, readable)

#### Type Scale (8px base)
```
Display: 48px (3rem)    - Hero titles only
H1: 36px (2.25rem)     - Page titles
H2: 30px (1.875rem)    - Section titles
H3: 24px (1.5rem)      - Subsection titles
H4: 20px (1.25rem)     - Card titles
Body: 16px (1rem)      - Default text
Small: 14px (0.875rem) - Captions, meta
```

#### Typography Rules
1. **Headers**: Always use Baloo 2, brown color (#A36E4F) for readability
2. **Section Titles**: Use Plumbus Pink (#ED829E) for visual hierarchy
3. **Body Text**: Montserrat, brown color, 1.6 line height
4. **Special Quotes**: Italic style with colored left border

### Design Tokens

#### Border Radius
```css
--border-radius-sm: 8px      /* Inputs, small elements */
--border-radius-md: 16px     /* Buttons, cards */
--border-radius-lg: 24px     /* Large cards */
--border-radius-xl: 32px     /* Hero elements */
```

#### Organic Blob Shapes
```css
--blob-1: 60% 40% 30% 70% / 60% 30% 70% 40%
--blob-2: 50% 60% 40% 30% / 40% 50% 60% 30%
--blob-3: 70% 30% 60% 40% / 30% 70% 40% 60%
--blob-4: 40% 60% 70% 30% / 50% 40% 30% 60%
```

#### Spacing System (8px Grid)
```
8px, 16px, 24px, 32px, 48px, 64px
Minimum card spacing: 24px
```

#### Animation Timing
```css
--transition-fast: 100ms ease     /* Micro-interactions */
--transition-normal: 200ms ease   /* Standard hover states */
--transition-slow: 300ms ease     /* Page transitions */
```

## Component Standards

### Hero Section
```css
.plumbus-hero {
  background: var(--gromflomite-beige);
  /* Organic blob decorations in corners */
  /* Large flat Plumbus illustration */
  /* Brown header text for readability */
}
```

### Card System
```css
.plumbus-card {
  background: white;
  border-radius: 24px; /* Consistent rounded corners */
  border: 2px solid #EEEEEE; /* Subtle border instead of shadow */
  /* Minimal hover animation */
}
```

### Step Cards (Process Flow)
- **Step 1**: Soft blue background (#A8D8EA)
- **Step 2**: Warm yellow background (#F4E19C)
- **Step 3**: Fresh green background (#C8E6C9)
- **Step 4**: Energetic coral background (#FFAB91)

### Testimonial Cards
```css
.plumbus-testimonial {
  /* Speech bubble style with tail */
  /* White background */
  /* Centered, max-width 500px */
  /* Author info with avatar */
}
```

### Button System
```css
.button-primary {
  background: var(--plumbus-pink);
  border-radius: 16px; /* Less rounded than v1.0 */
  /* No scale transform - simple color change on hover */
}
```

## Layout Principles

### Section Backgrounds
- **Alternating Pattern**: Beige (#F6E8CB) and White (#FFFFFF)
- **Container**: Max-width 1200px, centered
- **Padding**: 64px vertical, 32px horizontal

### Grid System
```css
.plumbus-grid.cols-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.plumbus-grid.cols-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
.plumbus-grid.cols-4 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
```

### Responsive Breakpoints
- **Mobile**: < 640px (single column, simplified)
- **Tablet**: 641px - 1024px (2 columns)
- **Desktop**: > 1025px (3-4 columns)

## Brand Voice & Tone

### Writing Style
- **Confident**: "The Plumbus handles this effortlessly"
- **Scientific**: Reference interdimensional processes
- **Accessible**: Avoid overly technical jargon
- **Playful**: Embrace Rick & Morty universe references

### Do's and Don'ts

#### Do's
- Use active voice: "Your Plumbus transforms daily tasks"
- Be inclusive: "Everyone benefits from Plumbus efficiency"
- Stay positive: Focus on solutions and benefits
- Reference the show: Use universe-appropriate terminology

#### Don'ts
- Don't patronize: Avoid talking down to users
- Skip clichés: No generic marketing speak
- Avoid negativity: Don't dwell on problems without solutions
- Don't break character: Stay within Rick & Morty universe

### Example Phrases
- **Welcome**: "Welcome to the official Plumbus experience"
- **CTAs**: "Get Your Plumbus Today", "Discover Plumbus Power"
- **Errors**: "Oops! Even interdimensional tech has hiccups"
- **Success**: "Your Plumbus order is processing across dimensions"

## Implementation Guidelines

### CSS Architecture
1. **Use CSS Custom Properties**: All values must use design tokens
2. **Mobile-First**: Start with mobile styles, enhance for larger screens
3. **Flat Design**: No gradients, minimal shadows, clean edges
4. **Organic Accents**: Use blob shapes sparingly for visual interest

### Accessibility Standards
- **Color Contrast**: WCAG AA compliance (4.5:1 minimum)
- **Focus Indicators**: 3px pink outline with 2px offset
- **Reduced Motion**: Respect user preferences
- **High Contrast**: Enhanced borders and outlines

### Asset Requirements
- **Logo**: SVG format, brown and pink variants
- **Plumbus Illustration**: Flat style, no gradients
- **Icons**: Consistent stroke width, rounded corners
- **Photography**: Clean, bright, minimal backgrounds

## Quality Checklist

Before deploying any component:
- [ ] Uses correct color tokens from design system
- [ ] Follows 8px spacing grid
- [ ] Applies proper typography hierarchy
- [ ] Includes appropriate border radius
- [ ] Maintains accessibility standards
- [ ] Works across all breakpoints
- [ ] Respects reduced motion preferences
- [ ] Stays true to brand personality

## File Structure
```
/src/styles/
  plumbus-design-system.css    /* Main design system */
  
/brand-assets/ (future)
  /logos/
    plumbus-logo.svg
    plumbus-icon.svg
  /illustrations/
    plumbus-flat.svg
    process-steps.svg
  /patterns/
    organic-blobs.svg
```

## Evolution Notes

### v2.0 Changes (Current)
- Simplified from complex gradients to flat design
- Reduced animation complexity
- Emphasized organic blob shapes
- Strengthened typography hierarchy
- Enhanced accessibility features
- Added pastel step colors for process flows
- Introduced speech bubble testimonials

### Future Considerations
- Develop icon system
- Create illustration library
- Build component documentation
- Add dark mode support (if requested)
- Expand animation system (if needed)

---

**Remember**: This brand system prioritizes clarity, accessibility, and rapid development while maintaining the playful Rick & Morty universe personality. Every design decision should serve both user experience and brand recognition.
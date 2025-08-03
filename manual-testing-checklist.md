# Plumbus Marketing Site - Manual Testing Checklist

## Pre-Testing Setup
- [ ] Site is running on development server (`npm run dev`)
- [ ] Browser dev tools are open
- [ ] Multiple browser tabs ready (Chrome, Firefox, Safari if available)
- [ ] Device simulation tools available
- [ ] Network throttling set to test performance

## 1. Interactive Elements Testing

### FAQ Section
- [ ] Click on each FAQ question to expand
- [ ] Verify only one FAQ is open at a time
- [ ] Check that chevron icons change from down to up
- [ ] Verify easter egg text appears in expanded items
- [ ] Test "Contact Support" button click (should log to console)
- [ ] Test keyboard navigation (Tab to focus, Enter/Space to activate)

### Hero Section Buttons
- [ ] "Get Your Plumbus Today" button click (should log messages and scroll)
- [ ] "Watch How It's Made" button click (should show alert)
- [ ] Verify hover effects on both buttons (scale, color changes)
- [ ] Test button focus states with keyboard navigation

### Feature Cards (if present)
- [ ] Hover over feature cards to see effects
- [ ] Check tooltip text on hover
- [ ] Verify all icons load correctly

### Navigation Elements
- [ ] Test smooth scrolling to sections
- [ ] Check mobile menu toggle (if present)
- [ ] Verify all navigation links work

## 2. Responsive Design Testing

### Mobile (375px width)
- [ ] Hero text is readable and properly sized
- [ ] Buttons stack vertically
- [ ] FAQ questions fit properly
- [ ] No horizontal scrolling
- [ ] Touch targets are at least 44px
- [ ] Plumbus elements scale appropriately

### Tablet (768px width)
- [ ] Layout transitions smoothly from mobile
- [ ] Grid layouts adjust properly
- [ ] Text remains readable
- [ ] Interactive elements maintain proper spacing
- [ ] Images and SVGs scale correctly

### Desktop (1200px+ width)
- [ ] Full layout is visible and balanced
- [ ] Hero section fills viewport appropriately
- [ ] Multi-column layouts work correctly
- [ ] Hover effects are smooth
- [ ] Large screen optimizations are active

### Responsive Testing Commands
```javascript
// Test mobile view
window.resizeTo(375, 667);

// Test tablet view  
window.resizeTo(768, 1024);

// Test desktop view
window.resizeTo(1200, 800);
```

## 3. Browser Compatibility Testing

### Chrome/Chromium
- [ ] All animations work smoothly
- [ ] CSS Grid and Flexbox layouts render correctly
- [ ] Interactive elements respond properly
- [ ] Console shows no errors

### Firefox
- [ ] Layout matches Chrome version
- [ ] Gradient text effects work
- [ ] Animation performance is acceptable
- [ ] All interactive features function

### Safari (if available)
- [ ] WebKit-specific features work
- [ ] Animations are smooth
- [ ] Text rendering is clean
- [ ] Interactive elements respond correctly

## 4. Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Skip links work (if present)
- [ ] Focus indicators are visible
- [ ] Enter/Space activate buttons
- [ ] Escape closes modals/dropdowns

### Screen Reader Testing
- [ ] Headings create logical structure (H1 → H2 → H3)
- [ ] Images have alt text (if any)
- [ ] Buttons have descriptive text
- [ ] Form elements have labels (if any)
- [ ] Link text is descriptive

### Color and Contrast
- [ ] Text meets WCAG contrast requirements
- [ ] Color is not the only way information is conveyed
- [ ] Focus indicators are visible against backgrounds
- [ ] Error states are clearly visible

## 5. Flat Design Requirements

### Visual Design Check
- [ ] No sparkle cursors anywhere on the site
- [ ] Consistent 24px minimum spacing between elements
- [ ] Clean, simple color palette
- [ ] No complex shadows or gradients (except for hero)
- [ ] Simple, readable typography
- [ ] Clean borders and outlines

### Spacing Verification
```javascript
// Check element spacing in console
document.querySelectorAll('[class*="p-"], [class*="m-"], [class*="gap-"]').forEach(el => {
  console.log(el.className, window.getComputedStyle(el).padding, window.getComputedStyle(el).margin);
});
```

## 6. Content and Branding

### Rick and Morty References
- [ ] Plumbus terminology is consistent
- [ ] Character references are appropriate
- [ ] Easter eggs are discoverable but not overwhelming
- [ ] Technical jargon (dinglebop, schleem) is used correctly

### Plumbus Anatomical Elements
- [ ] SVG elements load and scale properly
- [ ] Interactive parts respond to hover/click
- [ ] Assembly process is clear and logical
- [ ] Mobile version maintains clarity

## 7. Performance Testing

### Load Performance
- [ ] Initial page load under 3 seconds
- [ ] Images load progressively
- [ ] No render-blocking resources
- [ ] Smooth animations (60fps)

### JavaScript Performance
- [ ] No console errors
- [ ] Interactive elements respond immediately
- [ ] Animations don't cause layout thrashing
- [ ] Memory usage remains stable

### Network Performance
```javascript
// Test with Network tab open
// Check for:
// - Optimized image sizes
// - Compressed assets
// - Minimal render-blocking resources
```

## 8. Cross-Device Testing

### Mobile Devices
- [ ] iPhone (various sizes)
- [ ] Android phones
- [ ] Touch interactions work properly
- [ ] No zoom issues
- [ ] Orientation changes handled gracefully

### Tablets
- [ ] iPad (various sizes)
- [ ] Android tablets
- [ ] Proper touch target sizes
- [ ] Good use of screen real estate

## 9. Error Handling

### Network Issues
- [ ] Graceful degradation with slow connections
- [ ] Proper loading states
- [ ] Error messages are helpful
- [ ] Site remains functional offline (basic content)

### JavaScript Errors
- [ ] Site works with JavaScript disabled (basic functionality)
- [ ] No uncaught exceptions
- [ ] Fallbacks for unsupported features

## 10. Final QA Checklist

### Content Review
- [ ] All text is spelled correctly
- [ ] Links work and go to correct destinations
- [ ] Images have proper alt text
- [ ] Contact information is accurate

### Technical Review
- [ ] Site validates (HTML, CSS)
- [ ] No broken links
- [ ] Proper meta tags for SEO
- [ ] Security headers implemented

### User Experience
- [ ] Site loads quickly
- [ ] Navigation is intuitive
- [ ] Call-to-actions are clear
- [ ] Overall experience is engaging

## Browser Testing Commands

Run this in browser console for automated testing:
```javascript
// Load and run the test suite
const script = document.createElement('script');
script.src = '/src/test/browser-testing-suite.js';
document.head.appendChild(script);
script.onload = () => {
  new PlumbusTester().runAllTests();
};
```

## Testing Environment Setup

### Development Server
```bash
npm run dev
```

### Build and Preview
```bash
npm run build
npm run preview
```

### Run Unit Tests
```bash
npm run test
```

## Notes
- Test on actual devices when possible, not just browser dev tools
- Pay attention to edge cases and unusual user interactions
- Document any issues found with screenshots and reproduction steps
- Verify fixes don't break other functionality

## Sign-off
- [ ] All critical issues resolved
- [ ] Performance meets requirements
- [ ] Accessibility standards met
- [ ] Cross-browser compatibility confirmed
- [ ] Flat design requirements satisfied
- [ ] Ready for deployment

**Tester:** ________________  
**Date:** ________________  
**Environment:** ________________  
**Browser Versions Tested:** ________________
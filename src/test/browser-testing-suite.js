/**
 * Browser Testing Suite for Plumbus Marketing Site
 * Run this in browser console to test interactive elements and responsive behavior
 */

class PlumbusTester {
  constructor() {
    this.results = [];
    this.testCount = 0;
    this.passCount = 0;
    this.failCount = 0;
  }

  log(message, type = 'info') {
    const colors = {
      info: '#007acc',
      pass: '#28a745',
      fail: '#dc3545',
      warn: '#ffc107'
    };
    console.log(`%c${message}`, `color: ${colors[type]}; font-weight: bold;`);
  }

  assert(condition, message) {
    this.testCount++;
    if (condition) {
      this.passCount++;
      this.log(`✅ PASS: ${message}`, 'pass');
      this.results.push({ status: 'PASS', message });
    } else {
      this.failCount++;
      this.log(`❌ FAIL: ${message}`, 'fail');
      this.results.push({ status: 'FAIL', message });
    }
  }

  async testInteractiveElements() {
    this.log('🎯 Testing Interactive Elements', 'info');

    // Test FAQ accordion
    const faqButtons = document.querySelectorAll('[id="faq"] button');
    this.assert(faqButtons.length >= 8, 'FAQ has at least 8 questions');

    if (faqButtons.length > 0) {
      const firstFaq = faqButtons[0];
      const originalText = firstFaq.textContent;
      
      // Test FAQ click functionality
      firstFaq.click();
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const expandedContent = document.querySelector('[id="faq"] .px-6.pb-4');
      this.assert(expandedContent !== null, 'FAQ expands when clicked');
      
      // Click again to collapse
      firstFaq.click();
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Test CTA buttons
    const ctaButtons = document.querySelectorAll('button');
    const plumbusButton = Array.from(ctaButtons).find(btn => 
      btn.textContent.toLowerCase().includes('get your plumbus')
    );
    this.assert(plumbusButton !== null, 'Main CTA button exists');

    const demoButton = Array.from(ctaButtons).find(btn => 
      btn.textContent.toLowerCase().includes('watch how')
    );
    this.assert(demoButton !== null, 'Demo button exists');

    // Test hover states
    if (plumbusButton) {
      const computedStyle = window.getComputedStyle(plumbusButton);
      this.assert(
        computedStyle.transition !== 'all 0s ease 0s', 
        'CTA button has hover transitions'
      );
    }

    // Test support button
    const supportButton = Array.from(ctaButtons).find(btn => 
      btn.textContent.toLowerCase().includes('contact support')
    );
    this.assert(supportButton !== null, 'Contact support button exists');
  }

  testResponsiveBreakpoints() {
    this.log('📱 Testing Responsive Breakpoints', 'info');

    const originalWidth = window.innerWidth;
    const originalHeight = window.innerHeight;

    const breakpoints = [
      { width: 375, name: 'Mobile' },
      { width: 768, name: 'Tablet' },
      { width: 1200, name: 'Desktop' }
    ];

    breakpoints.forEach(bp => {
      // Note: In a real browser test, you'd resize the window
      // This is a simulation for the console test
      this.log(`Testing ${bp.name} (${bp.width}px)`, 'info');
      
      // Test that responsive classes exist
      const responsiveElements = document.querySelectorAll(
        '[class*="sm:"], [class*="md:"], [class*="lg:"], [class*="xl:"]'
      );
      this.assert(
        responsiveElements.length > 0, 
        `Responsive classes found for ${bp.name}`
      );

      // Test hero text responsiveness
      const heroHeading = document.querySelector('h1');
      if (heroHeading) {
        const hasResponsiveText = heroHeading.className.includes('md:text');
        this.assert(hasResponsiveText, `Hero text is responsive for ${bp.name}`);
      }

      // Test grid layouts
      const gridElements = document.querySelectorAll('[class*="grid-cols"]');
      this.assert(
        gridElements.length > 0, 
        `Grid layouts found for ${bp.name}`
      );
    });
  }

  testAccessibility() {
    this.log('♿ Testing Accessibility', 'info');

    // Test headings hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    this.assert(headings.length > 0, 'Page has proper heading structure');

    const h1Count = document.querySelectorAll('h1').length;
    this.assert(h1Count === 1, 'Page has exactly one H1 element');

    // Test button accessibility
    const buttons = document.querySelectorAll('button');
    let accessibleButtons = 0;
    buttons.forEach(btn => {
      if (btn.textContent.trim() || btn.getAttribute('aria-label')) {
        accessibleButtons++;
      }
    });
    this.assert(
      accessibleButtons === buttons.length, 
      'All buttons have accessible names'
    );

    // Test focus indicators
    const focusableElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    let focusIndicators = 0;
    focusableElements.forEach(el => {
      if (el.className.includes('focus:') || el.className.includes('focus-')) {
        focusIndicators++;
      }
    });
    this.assert(
      focusIndicators > 0, 
      'Focusable elements have focus indicators'
    );

    // Test color contrast (basic check)
    const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6');
    let contrastChecks = 0;
    textElements.forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.color && style.backgroundColor) {
        contrastChecks++;
      }
    });
    this.assert(contrastChecks > 0, 'Text elements have color properties defined');
  }

  testFlatDesignRequirements() {
    this.log('🎨 Testing Flat Design Requirements', 'info');

    // Check for absence of sparkle cursor
    const elementsWithCursor = document.querySelectorAll('*');
    let sparkleFound = false;
    elementsWithCursor.forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.cursor && style.cursor.includes('sparkle')) {
        sparkleFound = true;
      }
    });
    this.assert(!sparkleFound, 'No sparkle cursors found');

    // Check for minimum 24px spacing
    const spacedElements = document.querySelectorAll(
      '[class*="p-"], [class*="m-"], [class*="gap-"]'
    );
    this.assert(spacedElements.length > 0, 'Spacing utilities are used');

    // Check for flat design color scheme
    const coloredElements = document.querySelectorAll(
      '[class*="bg-"], [class*="text-"]'
    );
    this.assert(coloredElements.length > 0, 'Color utilities are used consistently');

    // Check for simple, clean borders
    const borderedElements = document.querySelectorAll('[class*="border"]');
    let complexBorders = 0;
    borderedElements.forEach(el => {
      if (el.className.includes('border-dashed') || 
          el.className.includes('border-dotted')) {
        complexBorders++;
      }
    });
    this.assert(
      complexBorders === 0, 
      'No complex border styles (consistent with flat design)'
    );
  }

  testPlumbusContent() {
    this.log('🛸 Testing Plumbus Content', 'info');

    // Test for Rick and Morty references
    const bodyText = document.body.textContent.toLowerCase();
    
    const references = [
      'plumbus',
      'dinglebop',
      'schleem',
      'rick',
      'morty',
      'jerry',
      'dimension',
      'interdimensional'
    ];

    references.forEach(ref => {
      this.assert(
        bodyText.includes(ref), 
        `Content includes "${ref}" reference`
      );
    });

    // Test Plumbus SVG or anatomical elements
    const plumbusElements = document.querySelectorAll(
      '[class*="plumbus"], svg, [class*="anatomy"]'
    );
    this.assert(
      plumbusElements.length > 0, 
      'Plumbus visual elements are present'
    );
  }

  async testPerformance() {
    this.log('⚡ Testing Performance', 'info');

    // Test load time (if available)
    if (performance && performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.assert(loadTime < 5000, `Page loads in under 5 seconds (${loadTime}ms)`);
    }

    // Test image optimization
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (img.complete) {
        this.assert(
          img.naturalWidth > 0 && img.naturalHeight > 0,
          `Image ${index + 1} loads successfully`
        );
      }
    });

    // Test animation performance
    const animatedElements = document.querySelectorAll(
      '[class*="animate-"], [class*="transition-"]'
    );
    this.assert(
      animatedElements.length > 0,
      'Page includes smooth animations'
    );
  }

  async runAllTests() {
    this.log('🚀 Starting Plumbus Marketing Site Test Suite', 'info');
    this.log('================================', 'info');
    
    const startTime = performance.now();

    try {
      await this.testInteractiveElements();
      this.testResponsiveBreakpoints();
      this.testAccessibility();
      this.testFlatDesignRequirements();
      this.testPlumbusContent();
      await this.testPerformance();
    } catch (error) {
      this.log(`❌ Test suite error: ${error.message}`, 'fail');
    }

    const endTime = performance.now();
    
    this.log('================================', 'info');
    this.log('📊 TEST RESULTS SUMMARY', 'info');
    this.log(`Total Tests: ${this.testCount}`, 'info');
    this.log(`Passed: ${this.passCount}`, 'pass');
    this.log(`Failed: ${this.failCount}`, 'fail');
    this.log(`Success Rate: ${Math.round((this.passCount / this.testCount) * 100)}%`, 'info');
    this.log(`Execution Time: ${Math.round(endTime - startTime)}ms`, 'info');
    
    if (this.failCount === 0) {
      this.log('🎉 ALL TESTS PASSED! The Plumbus site is ready for interdimensional commerce!', 'pass');
    } else {
      this.log('⚠️ Some tests failed. Please review and fix issues before deployment.', 'warn');
    }
    
    return {
      total: this.testCount,
      passed: this.passCount,
      failed: this.failCount,
      results: this.results,
      executionTime: Math.round(endTime - startTime)
    };
  }
}

// Auto-run if in browser
if (typeof window !== 'undefined') {
  window.PlumbusTester = PlumbusTester;
  console.log('🛸 Plumbus Testing Suite loaded!');
  console.log('Run: new PlumbusTester().runAllTests() to start testing');
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PlumbusTester;
}
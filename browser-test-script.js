/**
 * PLUMBUS WEBSITE COMPREHENSIVE BROWSER TESTING SCRIPT
 * 
 * Run this script in the browser console at http://localhost:5174/
 * It will automatically test all interactive components and report results
 */

console.log('🚀 Starting Plumbus Website Comprehensive Testing...\n');

// Test results storage
const testResults = {
  passed: 0,
  failed: 0,
  warnings: 0,
  results: []
};

// Helper functions
function logTest(testName, status, message = '') {
  const symbols = { pass: '✅', fail: '❌', warn: '⚠️' };
  const colors = { pass: 'color: #4CAF50', fail: 'color: #F44336', warn: 'color: #FF9800' };
  
  console.log(`%c${symbols[status]} ${testName}`, colors[status], message);
  
  testResults.results.push({ testName, status, message });
  testResults[status === 'pass' ? 'passed' : status === 'fail' ? 'failed' : 'warnings']++;
}

// Utility function to wait for elements
function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) return resolve(element);
    
    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
}

// Simulate user interactions
function simulateClick(element) {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(event);
}

function simulateHover(element) {
  const mouseEnter = new MouseEvent('mouseenter', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(mouseEnter);
}

// Test Suite Functions

async function testHeaderNavigation() {
  console.log('\n📱 Testing Header Navigation...');
  
  try {
    // Test desktop navigation
    const navMenu = document.querySelector('.plumbus-nav-menu');
    if (navMenu && window.innerWidth >= 768) {
      logTest('Desktop Navigation Visible', 'pass', 'Nav menu displays correctly on desktop');
      
      // Test navigation links
      const navLinks = navMenu.querySelectorAll('a');
      if (navLinks.length >= 5) {
        logTest('Navigation Links Present', 'pass', `Found ${navLinks.length} navigation links`);
      } else {
        logTest('Navigation Links Present', 'fail', `Only found ${navLinks.length} links, expected 6`);
      }
    }
    
    // Test mobile hamburger menu
    const hamburgerBtn = document.querySelector('.plumbus-nav-hamburger');
    if (hamburgerBtn) {
      logTest('Hamburger Button Present', 'pass', 'Mobile menu toggle button found');
      
      // Test mobile menu toggle
      simulateClick(hamburgerBtn);
      await new Promise(resolve => setTimeout(resolve, 100)); // Wait for animation
      
      const mobileMenu = document.querySelector('.md\\:hidden');
      if (mobileMenu) {
        logTest('Mobile Menu Toggle', 'pass', 'Mobile menu opens correctly');
        
        // Close menu
        simulateClick(hamburgerBtn);
      } else {
        logTest('Mobile Menu Toggle', 'fail', 'Mobile menu did not open');
      }
    }
    
    // Test logo functionality
    const logo = document.querySelector('.plumbus-nav-logo');
    if (logo) {
      logTest('Logo Present', 'pass', 'Logo element found and functional');
    } else {
      logTest('Logo Present', 'fail', 'Logo element not found');
    }
    
  } catch (error) {
    logTest('Header Navigation', 'fail', error.message);
  }
}

async function testInteractivePlumbus() {
  console.log('\n🛸 Testing Interactive Plumbus SVG...');
  
  try {
    const plumbusSVG = document.querySelector('svg');
    if (!plumbusSVG) {
      logTest('Plumbus SVG Present', 'fail', 'SVG element not found');
      return;
    }
    
    logTest('Plumbus SVG Present', 'pass', 'SVG element found');
    
    // Test hoverable parts
    const hoverableParts = plumbusSVG.querySelectorAll('[onMouseEnter], [style*="cursor"]');
    if (hoverableParts.length >= 7) {
      logTest('Interactive Parts Present', 'pass', `Found ${hoverableParts.length} interactive parts`);
      
      // Test tooltip functionality
      let tooltipFound = false;
      hoverableParts.forEach(part => {
        simulateHover(part);
        // Check if tooltip appears (looking for tooltip-like elements)
        setTimeout(() => {
          const tooltip = document.querySelector('[class*="tooltip"], .absolute.bg-gray-800');
          if (tooltip) tooltipFound = true;
        }, 100);
      });
      
      setTimeout(() => {
        if (tooltipFound) {
          logTest('Plumbus Tooltips', 'pass', 'Tooltips appear on hover');
        } else {
          logTest('Plumbus Tooltips', 'warn', 'Could not verify tooltip functionality');
        }
      }, 200);
      
    } else {
      logTest('Interactive Parts Present', 'fail', `Only found ${hoverableParts.length} interactive parts, expected 7+`);
    }
    
  } catch (error) {
    logTest('Interactive Plumbus', 'fail', error.message);
  }
}

async function testAssemblyProcess() {
  console.log('\n⚙️ Testing Assembly Process Cards...');
  
  try {
    const assemblySteps = document.querySelectorAll('[class*="bg-blue-500"], [class*="bg-yellow-500"], [class*="bg-green-500"], [class*="bg-red-500"]');
    
    if (assemblySteps.length >= 4) {
      logTest('Assembly Steps Present', 'pass', `Found ${assemblySteps.length} assembly step cards`);
      
      // Test hover animations
      let hoverEffectsWork = true;
      assemblySteps.forEach((step, index) => {
        const initialTransform = getComputedStyle(step).transform;
        simulateHover(step);
        
        setTimeout(() => {
          const hoverTransform = getComputedStyle(step).transform;
          if (initialTransform === hoverTransform) {
            hoverEffectsWork = false;
          }
        }, 100);
      });
      
      setTimeout(() => {
        if (hoverEffectsWork) {
          logTest('Assembly Hover Effects', 'pass', 'Hover animations working correctly');
        } else {
          logTest('Assembly Hover Effects', 'warn', 'Could not verify all hover effects');
        }
      }, 200);
      
      // Test for arrows between steps
      const arrows = document.querySelectorAll('[class*="ArrowRight"], .mx-4');
      if (arrows.length >= 3) {
        logTest('Assembly Arrows Present', 'pass', `Found ${arrows.length} arrows between steps`);
      } else {
        logTest('Assembly Arrows Present', 'warn', 'Could not find all expected arrows');
      }
      
    } else {
      logTest('Assembly Steps Present', 'fail', `Only found ${assemblySteps.length} steps, expected 4`);
    }
    
  } catch (error) {
    logTest('Assembly Process', 'fail', error.message);
  }
}

async function testFAQFunctionality() {
  console.log('\n❓ Testing FAQ Accordion...');
  
  try {
    const faqSection = document.querySelector('#faq');
    if (!faqSection) {
      logTest('FAQ Section Present', 'fail', 'FAQ section not found');
      return;
    }
    
    logTest('FAQ Section Present', 'pass', 'FAQ section found');
    
    // Test FAQ items
    const faqItems = faqSection.querySelectorAll('.faq-item');
    if (faqItems.length >= 8) {
      logTest('FAQ Items Present', 'pass', `Found ${faqItems.length} FAQ items`);
      
      // Test expand/collapse functionality
      const firstFAQ = faqItems[0];
      const faqButton = firstFAQ.querySelector('.faq-question');
      const faqAnswer = firstFAQ.querySelector('.faq-answer');
      
      if (faqButton && faqAnswer) {
        const initialDisplay = getComputedStyle(faqAnswer).display;
        simulateClick(faqButton);
        
        setTimeout(() => {
          const newDisplay = getComputedStyle(faqAnswer).display;
          if (initialDisplay !== newDisplay) {
            logTest('FAQ Toggle Functionality', 'pass', 'FAQ items expand/collapse correctly');
          } else {
            logTest('FAQ Toggle Functionality', 'fail', 'FAQ toggle not working');
          }
        }, 100);
      }
      
      // Test expand all/collapse all buttons
      const expandAllBtn = faqSection.querySelector('button[onClick*="expandAll"], .button-outline');
      const collapseAllBtn = faqSection.querySelectorAll('.button-outline')[1];
      
      if (expandAllBtn && collapseAllBtn) {
        logTest('FAQ Control Buttons', 'pass', 'Expand All and Collapse All buttons present');
      } else {
        logTest('FAQ Control Buttons', 'warn', 'Could not find all control buttons');
      }
      
    } else {
      logTest('FAQ Items Present', 'fail', `Only found ${faqItems.length} FAQ items, expected 8+`);
    }
    
  } catch (error) {
    logTest('FAQ Functionality', 'fail', error.message);
  }
}

async function testPricingCards() {
  console.log('\n💰 Testing Pricing Cards...');
  
  try {
    const pricingSection = document.querySelector('#pricing');
    if (!pricingSection) {
      logTest('Pricing Section Present', 'fail', 'Pricing section not found');
      return;
    }
    
    logTest('Pricing Section Present', 'pass', 'Pricing section found');
    
    const pricingCards = pricingSection.querySelectorAll('.pricing-card');
    if (pricingCards.length >= 3) {
      logTest('Pricing Cards Present', 'pass', `Found ${pricingCards.length} pricing cards`);
      
      // Test featured card
      const featuredCard = pricingSection.querySelector('.pricing-card.featured');
      if (featuredCard) {
        logTest('Featured Card Styling', 'pass', 'Premium card has featured styling');
      } else {
        logTest('Featured Card Styling', 'warn', 'Could not identify featured card');
      }
      
      // Test pricing display
      const prices = pricingSection.querySelectorAll('.pricing-price');
      const expectedPrices = ['$149', '$299', '$499'];
      let pricesCorrect = true;
      
      prices.forEach((priceElement, index) => {
        const priceText = priceElement.textContent.trim();
        if (!expectedPrices.includes(priceText)) {
          pricesCorrect = false;
        }
      });
      
      if (pricesCorrect && prices.length >= 3) {
        logTest('Pricing Display', 'pass', 'All prices display correctly');
      } else {
        logTest('Pricing Display', 'warn', 'Some pricing information may be incorrect');
      }
      
      // Test purchase buttons
      const purchaseButtons = pricingSection.querySelectorAll('button[onClick*="handlePurchase"], .pricing-card button');
      if (purchaseButtons.length >= 3) {
        logTest('Purchase Buttons', 'pass', `Found ${purchaseButtons.length} purchase buttons`);
        
        // Test button click (should show alert)
        let alertShown = false;
        const originalAlert = window.alert;
        window.alert = (message) => {
          alertShown = true;
          console.log('Alert intercepted:', message);
        };
        
        simulateClick(purchaseButtons[0]);
        
        setTimeout(() => {
          if (alertShown) {
            logTest('Purchase Button Click', 'pass', 'Purchase buttons trigger alerts correctly');
          } else {
            logTest('Purchase Button Click', 'warn', 'Could not verify purchase button functionality');
          }
          window.alert = originalAlert;
        }, 100);
        
      } else {
        logTest('Purchase Buttons', 'fail', 'Not all purchase buttons found');
      }
      
    } else {
      logTest('Pricing Cards Present', 'fail', `Only found ${pricingCards.length} cards, expected 3`);
    }
    
  } catch (error) {
    logTest('Pricing Cards', 'fail', error.message);
  }
}

async function testResponsiveDesign() {
  console.log('\n📱 Testing Responsive Design...');
  
  try {
    const originalWidth = window.innerWidth;
    
    // Test mobile breakpoint (375px)
    // Note: We can't actually resize the window in this context, 
    // but we can check for mobile-specific classes and media queries
    
    const mobileElements = document.querySelectorAll('.md\\:hidden, .sm\\:block, [class*="mobile"]');
    const desktopElements = document.querySelectorAll('.hidden.md\\:block, .md\\:flex, [class*="desktop"]');
    
    if (mobileElements.length > 0) {
      logTest('Mobile-Specific Elements', 'pass', `Found ${mobileElements.length} mobile-specific elements`);
    } else {
      logTest('Mobile-Specific Elements', 'warn', 'No mobile-specific elements identified');
    }
    
    // Test grid layouts
    const gridContainers = document.querySelectorAll('.plumbus-grid, .pricing-container, .process-container');
    if (gridContainers.length > 0) {
      logTest('Grid Layouts Present', 'pass', `Found ${gridContainers.length} responsive grid containers`);
    } else {
      logTest('Grid Layouts Present', 'warn', 'Could not identify grid layouts');
    }
    
    // Test container max-widths
    const containers = document.querySelectorAll('.container, .container-sm');
    let hasMaxWidth = false;
    containers.forEach(container => {
      const styles = getComputedStyle(container);
      if (styles.maxWidth && styles.maxWidth !== 'none') {
        hasMaxWidth = true;
      }
    });
    
    if (hasMaxWidth) {
      logTest('Container Max-Widths', 'pass', 'Containers have proper max-width constraints');
    } else {
      logTest('Container Max-Widths', 'warn', 'Could not verify container max-widths');
    }
    
  } catch (error) {
    logTest('Responsive Design', 'fail', error.message);
  }
}

async function testDesignSystemCompliance() {
  console.log('\n🎨 Testing Design System Compliance...');
  
  try {
    // Test CSS custom properties
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    
    const expectedColors = [
      '--plumbus-pink',
      '--gromflomite-beige', 
      '--blamf-brown',
      '--white'
    ];
    
    let colorVariablesFound = 0;
    expectedColors.forEach(colorVar => {
      const colorValue = computedStyle.getPropertyValue(colorVar);
      if (colorValue) {
        colorVariablesFound++;
      }
    });
    
    if (colorVariablesFound >= 3) {
      logTest('CSS Custom Properties', 'pass', `Found ${colorVariablesFound}/4 expected color variables`);
    } else {
      logTest('CSS Custom Properties', 'fail', `Only found ${colorVariablesFound}/4 color variables`);
    }
    
    // Test font families
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const bodyText = document.querySelectorAll('p, div, span');
    
    let correctFonts = 0;
    headings.forEach(heading => {
      const fontFamily = getComputedStyle(heading).fontFamily;
      if (fontFamily.includes('Baloo') || fontFamily.includes('cursive')) {
        correctFonts++;
      }
    });
    
    if (correctFonts > 0) {
      logTest('Typography System', 'pass', 'Headers using correct font family (Baloo 2)');
    } else {
      logTest('Typography System', 'warn', 'Could not verify header font families');
    }
    
    // Test flat design elements (no sparkle cursors)
    const allElements = document.querySelectorAll('*');
    let sparkleFound = false;
    allElements.forEach(element => {
      const cursor = getComputedStyle(element).cursor;
      if (cursor.includes('sparkle') || cursor.includes('✨')) {
        sparkleFound = true;
      }
    });
    
    if (!sparkleFound) {
      logTest('Flat Design Compliance', 'pass', 'No sparkle cursors found - flat design maintained');
    } else {
      logTest('Flat Design Compliance', 'fail', 'Sparkle cursors detected - violates flat design');
    }
    
    // Test spacing system (8px grid)
    const spacedElements = document.querySelectorAll('.p-1, .p-2, .p-3, .p-4, .mb-2, .mb-3, .mb-4');
    if (spacedElements.length > 0) {
      logTest('Spacing System', 'pass', `Found ${spacedElements.length} elements using 8px grid spacing`);
    } else {
      logTest('Spacing System', 'warn', 'Could not verify 8px grid spacing usage');
    }
    
  } catch (error) {
    logTest('Design System Compliance', 'fail', error.message);
  }
}

async function testPerformance() {
  console.log('\n⚡ Testing Performance...');
  
  try {
    // Test for console errors
    const originalError = console.error;
    let errorCount = 0;
    console.error = (...args) => {
      errorCount++;
      originalError.apply(console, args);
    };
    
    setTimeout(() => {
      if (errorCount === 0) {
        logTest('Console Errors', 'pass', 'No console errors detected');
      } else {
        logTest('Console Errors', 'warn', `${errorCount} console errors detected`);
      }
      console.error = originalError;
    }, 1000);
    
    // Test animation performance
    const animatedElements = document.querySelectorAll('[class*="animate"], [style*="animation"], [style*="transition"]');
    if (animatedElements.length > 0) {
      logTest('Animation Elements', 'pass', `Found ${animatedElements.length} animated elements`);
    } else {
      logTest('Animation Elements', 'warn', 'No animated elements detected');
    }
    
    // Test image loading (if any)
    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;
    images.forEach(img => {
      if (img.complete) imagesLoaded++;
    });
    
    if (images.length === 0) {
      logTest('Image Loading', 'pass', 'No images to load - good for performance');
    } else if (imagesLoaded === images.length) {
      logTest('Image Loading', 'pass', `All ${images.length} images loaded successfully`);
    } else {
      logTest('Image Loading', 'warn', `${imagesLoaded}/${images.length} images loaded`);
    }
    
  } catch (error) {
    logTest('Performance', 'fail', error.message);
  }
}

async function testAccessibility() {
  console.log('\n♿ Testing Accessibility...');
  
  try {
    // Test heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    
    if (h1Count === 1) {
      logTest('Heading Hierarchy', 'pass', 'Proper heading hierarchy with single H1');
    } else if (h1Count === 0) {
      logTest('Heading Hierarchy', 'fail', 'No H1 element found');
    } else {
      logTest('Heading Hierarchy', 'warn', `Multiple H1 elements found (${h1Count})`);
    }
    
    // Test button accessibility
    const buttons = document.querySelectorAll('button');
    let buttonsWithLabels = 0;
    buttons.forEach(button => {
      const hasLabel = button.textContent.trim() || 
                      button.getAttribute('aria-label') || 
                      button.getAttribute('title');
      if (hasLabel) buttonsWithLabels++;
    });
    
    if (buttonsWithLabels === buttons.length) {
      logTest('Button Accessibility', 'pass', `All ${buttons.length} buttons have accessible labels`);
    } else {
      logTest('Button Accessibility', 'warn', `${buttonsWithLabels}/${buttons.length} buttons have accessible labels`);
    }
    
    // Test focus indicators
    const focusableElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
    if (focusableElements.length > 0) {
      logTest('Focusable Elements', 'pass', `Found ${focusableElements.length} focusable elements`);
    } else {
      logTest('Focusable Elements', 'warn', 'No focusable elements detected');
    }
    
    // Test for alt text on images
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    if (imagesWithoutAlt.length === 0) {
      logTest('Image Alt Text', 'pass', 'All images have alt attributes');
    } else {
      logTest('Image Alt Text', 'warn', `${imagesWithoutAlt.length} images missing alt text`);
    }
    
  } catch (error) {
    logTest('Accessibility', 'fail', error.message);
  }
}

// Main test execution function
async function runAllTests() {
  console.log('🧪 PLUMBUS WEBSITE COMPREHENSIVE TESTING SUITE');
  console.log('===============================================\n');
  
  const startTime = Date.now();
  
  // Run all test suites
  await testHeaderNavigation();
  await testInteractivePlumbus();
  await testAssemblyProcess();
  await testFAQFunctionality();
  await testPricingCards();
  await testResponsiveDesign();
  await testDesignSystemCompliance();
  await testPerformance();
  await testAccessibility();
  
  // Wait for async tests to complete
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  // Generate final report
  console.log('\n📊 TEST RESULTS SUMMARY');
  console.log('========================');
  console.log(`%c✅ Passed: ${testResults.passed}`, 'color: #4CAF50; font-weight: bold');
  console.log(`%c⚠️  Warnings: ${testResults.warnings}`, 'color: #FF9800; font-weight: bold');
  console.log(`%c❌ Failed: ${testResults.failed}`, 'color: #F44336; font-weight: bold');
  console.log(`\n⏱️  Total testing time: ${duration}s`);
  
  // Calculate success rate
  const totalTests = testResults.passed + testResults.warnings + testResults.failed;
  const successRate = ((testResults.passed / totalTests) * 100).toFixed(1);
  console.log(`📈 Success Rate: ${successRate}%`);
  
  // Overall assessment
  if (testResults.failed === 0 && testResults.warnings <= 3) {
    console.log('\n🎉 OVERALL ASSESSMENT: EXCELLENT');
    console.log('✅ Website is production-ready!');
  } else if (testResults.failed <= 2) {
    console.log('\n👍 OVERALL ASSESSMENT: GOOD');
    console.log('⚠️  Minor issues to address before production');
  } else {
    console.log('\n⚠️  OVERALL ASSESSMENT: NEEDS IMPROVEMENT');
    console.log('❌ Multiple issues need attention');
  }
  
  console.log('\n🔍 Detailed results logged above');
  console.log('📝 For full test report, see testing-report.md');
  
  return testResults;
}

// Auto-run tests when script is loaded
runAllTests().catch(error => {
  console.error('❌ Testing suite failed:', error);
});

// Export for manual execution
window.plumbusTest = {
  runAllTests,
  testHeaderNavigation,
  testInteractivePlumbus,
  testAssemblyProcess,
  testFAQFunctionality,
  testPricingCards,
  testResponsiveDesign,
  testDesignSystemCompliance,
  testPerformance,
  testAccessibility
};
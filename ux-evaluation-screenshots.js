const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function takeUXEvaluationScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport for desktop evaluation
    await page.setViewport({ width: 1440, height: 900 });
    
    // Navigate to the site
    await page.goto('http://localhost:5173', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Wait for animations to complete
    await page.waitForTimeout(3000);

    // Take full page screenshot
    await page.screenshot({
      path: 'ux-evaluation-full-page.png',
      fullPage: true,
      type: 'png'
    });

    // Take hero section screenshot
    const heroSection = await page.$('#hero');
    if (heroSection) {
      await heroSection.screenshot({
        path: 'ux-evaluation-hero.png',
        type: 'png'
      });
    }

    // Take features section screenshot (has stats)
    const featuresSection = await page.$('#features');
    if (featuresSection) {
      await featuresSection.screenshot({
        path: 'ux-evaluation-features-stats.png',
        type: 'png'
      });
    }

    // Take pricing section screenshot
    const pricingSection = await page.$('#pricing');
    if (pricingSection) {
      await pricingSection.screenshot({
        path: 'ux-evaluation-pricing.png',
        type: 'png'
      });
    }

    // Test mobile responsiveness
    await page.setViewport({ width: 375, height: 667 });
    await page.waitForTimeout(1000);

    // Mobile hero screenshot
    const heroSectionMobile = await page.$('#hero');
    if (heroSectionMobile) {
      await heroSectionMobile.screenshot({
        path: 'ux-evaluation-hero-mobile.png',
        type: 'png'
      });
    }

    // Mobile pricing screenshot
    const pricingSectionMobile = await page.$('#pricing');
    if (pricingSectionMobile) {
      await pricingSectionMobile.screenshot({
        path: 'ux-evaluation-pricing-mobile.png',
        type: 'png'
      });
    }

    console.log('✅ UX evaluation screenshots captured successfully');
    console.log('📸 Screenshots saved:');
    console.log('   - ux-evaluation-full-page.png (Full page desktop)');
    console.log('   - ux-evaluation-hero.png (Hero section desktop)');
    console.log('   - ux-evaluation-features-stats.png (Features/Stats section)');
    console.log('   - ux-evaluation-pricing.png (Pricing section desktop)');
    console.log('   - ux-evaluation-hero-mobile.png (Hero section mobile)');
    console.log('   - ux-evaluation-pricing-mobile.png (Pricing section mobile)');

  } catch (error) {
    console.error('❌ Error capturing screenshots:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the screenshot capture
takeUXEvaluationScreenshots().catch(console.error);
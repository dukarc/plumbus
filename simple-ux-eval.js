const puppeteer = require('puppeteer');

async function takeUXEvaluationScreenshots() {
  console.log('📸 Starting UX evaluation screenshot capture...');
  console.log('⚠️  Please make sure the dev server is running on http://localhost:5173');
  console.log('   Run: npm run dev (in another terminal)');
  console.log('   Then run this script again');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport for desktop evaluation
    await page.setViewport({ width: 1440, height: 900 });
    
    console.log('🌐 Navigating to the site...');
    
    try {
      await page.goto('http://localhost:5173', { 
        waitUntil: 'networkidle2',
        timeout: 10000 
      });
    } catch (error) {
      console.error('❌ Could not connect to localhost:5173');
      console.error('   Please start the dev server with: npm run dev');
      return;
    }

    // Wait for animations to complete
    await page.waitForTimeout(3000);
    console.log('📸 Taking desktop screenshots...');

    // Take full page screenshot
    await page.screenshot({
      path: 'ux-evaluation-full-page.png',
      fullPage: true,
      type: 'png'
    });

    // Take hero section screenshot
    try {
      const heroSection = await page.$('#hero');
      if (heroSection) {
        await heroSection.screenshot({
          path: 'ux-evaluation-hero.png',
          type: 'png'
        });
      }
    } catch (error) {
      console.log('⚠️  Could not capture hero section');
    }

    // Take features section screenshot (has stats)
    try {
      const featuresSection = await page.$('#features');
      if (featuresSection) {
        await featuresSection.screenshot({
          path: 'ux-evaluation-features-stats.png',
          type: 'png'
        });
      }
    } catch (error) {
      console.log('⚠️  Could not capture features section');
    }

    // Take pricing section screenshot
    try {
      const pricingSection = await page.$('#pricing');
      if (pricingSection) {
        await pricingSection.screenshot({
          path: 'ux-evaluation-pricing.png',
          type: 'png'
        });
      }
    } catch (error) {
      console.log('⚠️  Could not capture pricing section');
    }

    // Test mobile responsiveness
    console.log('📱 Testing mobile responsiveness...');
    await page.setViewport({ width: 375, height: 667 });
    await page.waitForTimeout(2000);

    // Mobile full page
    await page.screenshot({
      path: 'ux-evaluation-full-page-mobile.png',
      fullPage: true,
      type: 'png'
    });

    // Mobile hero screenshot
    try {
      const heroSectionMobile = await page.$('#hero');
      if (heroSectionMobile) {
        await heroSectionMobile.screenshot({
          path: 'ux-evaluation-hero-mobile.png',
          type: 'png'
        });
      }
    } catch (error) {
      console.log('⚠️  Could not capture mobile hero section');
    }

    // Mobile pricing screenshot
    try {
      const pricingSectionMobile = await page.$('#pricing');
      if (pricingSectionMobile) {
        await pricingSectionMobile.screenshot({
          path: 'ux-evaluation-pricing-mobile.png',
          type: 'png'
        });
      }
    } catch (error) {
      console.log('⚠️  Could not capture mobile pricing section');
    }

    console.log('✅ UX evaluation screenshots completed!');
    console.log('📸 Screenshots saved:');
    console.log('   - ux-evaluation-full-page.png (Full page desktop)');
    console.log('   - ux-evaluation-hero.png (Hero section desktop)');
    console.log('   - ux-evaluation-features-stats.png (Features/Stats section)');
    console.log('   - ux-evaluation-pricing.png (Pricing section desktop)');
    console.log('   - ux-evaluation-full-page-mobile.png (Full page mobile)');
    console.log('   - ux-evaluation-hero-mobile.png (Hero section mobile)');
    console.log('   - ux-evaluation-pricing-mobile.png (Pricing section mobile)');

  } catch (error) {
    console.error('❌ Error capturing screenshots:', error);
  } finally {
    await browser.close();
  }
}

// Run the screenshot capture
takeUXEvaluationScreenshots().catch(console.error);
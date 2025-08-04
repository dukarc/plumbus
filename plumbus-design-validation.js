import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log('🔬 Starting Plumbus Design Validation...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: {
      width: 1440,
      height: 900
    }
  });

  const page = await browser.newPage();
  
  try {
    // Navigate to the development server
    await page.goto('http://localhost:5174', {
      waitUntil: 'networkidle0',
      timeout: 10000
    });

    // Wait for animations to complete
    await page.waitForTimeout(3000);

    // Scroll to hero section where plumbus is located
    await page.evaluate(() => {
      const heroSection = document.querySelector('.hero-section') || 
                         document.querySelector('[class*="hero"]') ||
                         document.querySelector('main > div:first-child');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    await page.waitForTimeout(1000);

    // Capture the new plumbus design
    await page.screenshot({
      path: path.join(__dirname, 'screenshots', 'plumbus-new-design.png'),
      clip: {
        x: 200,
        y: 150,
        width: 1040,
        height: 700
      }
    });

    // Focus specifically on the plumbus SVG
    const plumbusElement = await page.$('svg[role="img"][aria-label*="Plumbus"]');
    if (plumbusElement) {
      await plumbusElement.screenshot({
        path: path.join(__dirname, 'screenshots', 'plumbus-svg-isolated.png'),
        omitBackground: true
      });
    }

    // Test interactivity - click each hotspot
    const hotspots = await page.$$('svg circle[role="button"]');
    console.log(`📍 Found ${hotspots.length} interactive hotspots`);
    
    for (let i = 0; i < hotspots.length; i++) {
      await hotspots[i].click();
      await page.waitForTimeout(500);
      
      // Capture each hotspot interaction
      await page.screenshot({
        path: path.join(__dirname, 'screenshots', `plumbus-hotspot-${i + 1}.png`),
        clip: {
          x: 200,
          y: 150,
          width: 1040,
          height: 700
        }
      });
      
      // Click again to deselect
      await hotspots[i].click();
      await page.waitForTimeout(300);
    }

    // Test mobile responsiveness
    await page.setViewport({
      width: 375,
      height: 812
    });
    
    await page.goto('http://localhost:5174', {
      waitUntil: 'networkidle0'
    });
    
    await page.waitForTimeout(1000);
    
    // Scroll to plumbus on mobile
    await page.evaluate(() => {
      const heroSection = document.querySelector('.hero-section') || 
                         document.querySelector('[class*="hero"]') ||
                         document.querySelector('main > div:first-child');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    await page.waitForTimeout(1000);
    
    await page.screenshot({
      path: path.join(__dirname, 'screenshots', 'plumbus-mobile-responsive.png'),
      clip: {
        x: 0,
        y: 100,
        width: 375,
        height: 500
      }
    });

    // Analyze colors used in the SVG
    const colorAnalysis = await page.evaluate(() => {
      const svg = document.querySelector('svg[role="img"][aria-label*="Plumbus"]');
      if (!svg) return null;
      
      const colors = new Set();
      const elements = svg.querySelectorAll('*[fill], *[stroke]');
      
      elements.forEach(el => {
        const fill = el.getAttribute('fill');
        const stroke = el.getAttribute('stroke');
        if (fill && fill !== 'none' && !fill.startsWith('url(')) colors.add(fill);
        if (stroke && stroke !== 'none') colors.add(stroke);
      });
      
      return Array.from(colors);
    });

    console.log('🎨 Colors detected in Plumbus SVG:', colorAnalysis);

    // Validate anatomy presence
    const anatomyCheck = await page.evaluate(() => {
      const svg = document.querySelector('svg[role="img"][aria-label*="Plumbus"]');
      if (!svg) return { found: false, components: [] };
      
      const components = [];
      const paths = svg.querySelectorAll('path');
      const ellipses = svg.querySelectorAll('ellipse');
      const circles = svg.querySelectorAll('circle');
      const rects = svg.querySelectorAll('rect');
      
      return {
        found: true,
        totalElements: paths.length + ellipses.length + circles.length + rects.length,
        paths: paths.length,
        ellipses: ellipses.length,
        circles: circles.length,
        rects: rects.length,
        hasGradients: svg.querySelectorAll('defs radialGradient, defs linearGradient').length > 0,
        hasTextures: svg.querySelectorAll('defs pattern').length > 0
      };
    });

    console.log('🔍 Anatomy Analysis:', anatomyCheck);

    await browser.close();
    
    console.log('✅ Plumbus Design Validation Complete!');
    console.log('📸 Screenshots saved:');
    console.log('   - plumbus-new-design.png (Full context)');
    console.log('   - plumbus-svg-isolated.png (SVG only)');
    console.log(`   - plumbus-hotspot-1 through ${hotspots.length}.png (Interactions)`);
    console.log('   - plumbus-mobile-responsive.png (Mobile view)');
    
    // Validation summary
    console.log('\n🎯 Design Validation Summary:');
    console.log(`   • Interactive hotspots: ${hotspots.length}`);
    console.log(`   • Color palette: ${colorAnalysis ? colorAnalysis.length : 0} unique colors`);
    console.log(`   • SVG complexity: ${anatomyCheck.totalElements} total elements`);
    console.log(`   • Gradients: ${anatomyCheck.hasGradients ? '✅' : '❌'}`);
    console.log(`   • Textures: ${anatomyCheck.hasTextures ? '✅' : '❌'}`);
    
    if (colorAnalysis) {
      const hasFleshTones = colorAnalysis.some(color => 
        color.includes('#E8B5A8') || 
        color.includes('#D49C8F') || 
        color.includes('#C08876') ||
        color.includes('#A67360')
      );
      console.log(`   • Flesh-tone colors: ${hasFleshTones ? '✅' : '❌'}`);
    }
    
  } catch (error) {
    console.error('❌ Validation failed:', error.message);
    await browser.close();
    process.exit(1);
  }
})();
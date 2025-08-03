import puppeteer from 'puppeteer';

(async () => {
  console.log('Capturing the PERFECT Plumbus...');
  
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:5174', {
    waitUntil: 'networkidle0',
    timeout: 15000
  });
  
  // Wait for all animations to load
  await new Promise(resolve => setTimeout(resolve, 4000));
  
  // Take full page screenshot
  await page.screenshot({
    path: 'perfect-plumbus-full-page.png',
    fullPage: true
  });
  
  // Scroll to hero and focus on Plumbus
  await page.evaluate(() => {
    const hero = document.querySelector('.hero-section');
    if (hero) hero.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Take hero section screenshot
  await page.screenshot({
    path: 'perfect-plumbus-hero.png',
    clip: {
      x: 0,
      y: 0,
      width: 1440,
      height: 800
    }
  });
  
  // Take close-up of just the Plumbus
  await page.screenshot({
    path: 'perfect-plumbus-closeup.png',
    clip: {
      x: 420,
      y: 250,
      width: 600,
      height: 500
    }
  });
  
  // Hover over Plumbus to show tooltip
  await page.hover('svg.w-full');
  await new Promise(resolve => setTimeout(resolve, 500));
  
  await page.screenshot({
    path: 'perfect-plumbus-with-tooltip.png',
    clip: {
      x: 420,
      y: 250,
      width: 600,
      height: 500
    }
  });
  
  console.log('✅ Perfect Plumbus captured!');
  console.log('📸 Screenshots saved:');
  console.log('   - perfect-plumbus-full-page.png');
  console.log('   - perfect-plumbus-hero.png');
  console.log('   - perfect-plumbus-closeup.png');
  console.log('   - perfect-plumbus-with-tooltip.png');
  
  await browser.close();
})();
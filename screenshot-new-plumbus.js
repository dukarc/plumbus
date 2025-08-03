import puppeteer from 'puppeteer';

(async () => {
  console.log('Capturing new Plumbus design...');
  
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:5174', {
    waitUntil: 'domcontentloaded',
    timeout: 10000
  });
  
  // Wait for animations
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Scroll to hero section to ensure Plumbus is visible
  await page.evaluate(() => {
    document.querySelector('.hero-section')?.scrollIntoView({ behavior: 'instant' });
  });
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Take focused screenshot of just the Plumbus area
  await page.screenshot({
    path: 'new-authentic-plumbus.png',
    clip: {
      x: 400,
      y: 200,
      width: 640,
      height: 600
    }
  });
  
  // Also take full hero section
  await page.screenshot({
    path: 'hero-with-new-plumbus.png',
    clip: {
      x: 0,
      y: 80,
      width: 1440,
      height: 700
    }
  });
  
  console.log('✅ Screenshots saved:');
  console.log('   - new-authentic-plumbus.png (focused on Plumbus)');
  console.log('   - hero-with-new-plumbus.png (full hero section)');
  
  await browser.close();
})();
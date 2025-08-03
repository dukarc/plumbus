import puppeteer from 'puppeteer';

(async () => {
  console.log('Starting Puppeteer...');
  
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  console.log('Navigating to localhost:5174...');
  
  try {
    await page.goto('http://localhost:5174', {
      waitUntil: 'domcontentloaded',
      timeout: 10000
    });
    
    console.log('Page loaded, waiting for content...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('Taking screenshot...');
    // Take full page screenshot
    await page.screenshot({
      path: 'perfect-plumbus-site.png',
      fullPage: true
    });
    
    // Also take hero section close-up
    await page.screenshot({
      path: 'perfect-plumbus-hero.png',
      clip: {
        x: 0,
        y: 100,
        width: 1440,
        height: 700
      }
    });
    
    console.log('✅ Screenshots saved:');
    console.log('   - perfect-plumbus-site.png (full page)');
    console.log('   - perfect-plumbus-hero.png (hero section)');
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  await browser.close();
})();
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
    await page.screenshot({
      path: 'plumbus-site-97-percent.png',
      fullPage: true
    });
    
    console.log('✅ Screenshot saved as plumbus-site-97-percent.png');
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  await browser.close();
})();
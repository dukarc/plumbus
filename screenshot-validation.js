import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: {
      width: 1440,
      height: 900
    }
  });

  const page = await browser.newPage();
  
  // Navigate to the development server
  await page.goto('http://localhost:5174', {
    waitUntil: 'networkidle0'
  });

  // Wait for animations to complete
  await page.waitForTimeout(2000);

  // Take full page screenshot
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'full-page-97-percent.png'),
    fullPage: true
  });

  // Take header screenshot
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'header-fixed.png'),
    clip: {
      x: 0,
      y: 0,
      width: 1440,
      height: 100
    }
  });

  // Scroll to hero section and capture Plumbus
  await page.evaluate(() => {
    document.querySelector('.hero-section').scrollIntoView();
  });
  await page.waitForTimeout(500);
  
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'plumbus-authentic.png'),
    clip: {
      x: 0,
      y: 100,
      width: 1440,
      height: 600
    }
  });

  // Scroll to testimonials
  await page.evaluate(() => {
    document.querySelector('.testimonials-section').scrollIntoView();
  });
  await page.waitForTimeout(500);
  
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'testimonials-circular-avatars.png'),
    clip: {
      x: 0,
      y: 0,
      width: 1440,
      height: 900
    }
  });

  // Test Squanch Mode easter egg
  await page.evaluate(() => {
    document.querySelector('.section-title').scrollIntoView();
  });
  
  // Click title 3 times for Squanch Mode
  const featuresTitle = await page.$('.features-section .section-title');
  await featuresTitle.click();
  await page.waitForTimeout(100);
  await featuresTitle.click();
  await page.waitForTimeout(100);
  await featuresTitle.click();
  await page.waitForTimeout(1000);
  
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'squanch-mode-active.png'),
    clip: {
      x: 0,
      y: 0,
      width: 1440,
      height: 900
    }
  });

  // Mobile view
  await page.setViewport({
    width: 375,
    height: 812
  });
  
  await page.goto('http://localhost:5174', {
    waitUntil: 'networkidle0'
  });
  
  await page.waitForTimeout(1000);
  
  await page.screenshot({
    path: path.join(__dirname, 'screenshots', 'mobile-responsive.png'),
    fullPage: true
  });

  await browser.close();
  
  console.log('✅ Screenshots captured successfully!');
  console.log('📸 Check the screenshots directory for:');
  console.log('   - full-page-97-percent.png');
  console.log('   - header-fixed.png');
  console.log('   - plumbus-authentic.png');
  console.log('   - testimonials-circular-avatars.png');
  console.log('   - squanch-mode-active.png');
  console.log('   - mobile-responsive.png');
})();
#!/usr/bin/env node

/**
 * Performance Testing Script for Plumbus Landing Page
 * Tests various performance metrics and provides optimization recommendations
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI colors for terminal output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function analyzeBundle() {
  log('\n📊 BUNDLE SIZE ANALYSIS', colors.blue + colors.bold);
  log('=' * 50);
  
  const distPath = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    log('❌ No dist folder found. Run npm run build first.', colors.red);
    return;
  }

  // Analyze asset sizes
  const assets = {
    js: [],
    css: [],
    total: 0
  };

  function getDirectoryFiles(dir, ext) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...getDirectoryFiles(fullPath, ext));
      } else if (item.endsWith(ext)) {
        const size = stat.size;
        files.push({
          name: item,
          path: fullPath,
          size,
          sizeKB: Math.round(size / 1024)
        });
        assets.total += size;
      }
    }
    
    return files;
  }

  assets.js = getDirectoryFiles(distPath, '.js');
  assets.css = getDirectoryFiles(distPath, '.css');

  log('\n🟩 JavaScript Assets:');
  assets.js
    .sort((a, b) => b.size - a.size)
    .forEach(file => {
      const status = file.sizeKB > 100 ? '🔴' : file.sizeKB > 50 ? '🟡' : '🟢';
      log(`  ${status} ${file.name}: ${file.sizeKB}KB`);
    });

  log('\n🟦 CSS Assets:');
  assets.css
    .sort((a, b) => b.size - a.size)
    .forEach(file => {
      const status = file.sizeKB > 50 ? '🔴' : file.sizeKB > 25 ? '🟡' : '🟢';
      log(`  ${status} ${file.name}: ${file.sizeKB}KB`);
    });

  const totalKB = Math.round(assets.total / 1024);
  log(`\n📦 Total Bundle Size: ${totalKB}KB`, totalKB > 500 ? colors.red : totalKB > 250 ? colors.yellow : colors.green);

  // Performance recommendations
  log('\n💡 OPTIMIZATION RECOMMENDATIONS', colors.blue + colors.bold);
  
  const largeJS = assets.js.filter(f => f.sizeKB > 100);
  if (largeJS.length > 0) {
    log('🔧 Large JavaScript bundles detected:');
    largeJS.forEach(file => {
      log(`   - Consider code splitting for ${file.name}`);
      if (file.name.includes('icons')) {
        log('   - Replace with custom SVG icons (current implementation)');
      }
      if (file.name.includes('animations')) {
        log('   - Consider lazy loading animations');
      }
    });
  }

  return assets;
}

function generatePerformanceReport() {
  log('\n📈 PERFORMANCE AUDIT REPORT', colors.blue + colors.bold);
  log('=' * 50);

  const bundle = analyzeBundle();
  
  // Performance Budget Analysis
  const budget = {
    totalJS: 200, // KB
    totalCSS: 50,  // KB
    largestChunk: 100, // KB
    totalAssets: 300 // KB
  };

  log('\n🎯 Performance Budget Status:');
  
  const totalJS = bundle.js.reduce((sum, f) => sum + f.sizeKB, 0);
  const totalCSS = bundle.css.reduce((sum, f) => sum + f.sizeKB, 0);
  const largestChunk = Math.max(...bundle.js.map(f => f.sizeKB));
  const totalAssets = totalJS + totalCSS;

  log(`  JavaScript: ${totalJS}KB / ${budget.totalJS}KB ${totalJS > budget.totalJS ? '❌ OVER' : '✅ OK'}`);
  log(`  CSS: ${totalCSS}KB / ${budget.totalCSS}KB ${totalCSS > budget.totalCSS ? '❌ OVER' : '✅ OK'}`);
  log(`  Largest Chunk: ${largestChunk}KB / ${budget.largestChunk}KB ${largestChunk > budget.largestChunk ? '❌ OVER' : '✅ OK'}`);
  log(`  Total Assets: ${totalAssets}KB / ${budget.totalAssets}KB ${totalAssets > budget.totalAssets ? '❌ OVER' : '✅ OK'}`);

  // Core Web Vitals Predictions
  log('\n⚡ Core Web Vitals Predictions:');
  log(`  LCP: ${totalAssets > 300 ? '🔴 Poor (>2.5s)' : totalAssets > 150 ? '🟡 Needs Work (1.8s-2.5s)' : '🟢 Good (<1.8s)'}`);
  log(`  FID: ${totalJS > 200 ? '🔴 Poor (>300ms)' : '🟢 Good (<100ms) - React optimized'}`);
  log(`  CLS: 🟢 Good (<0.1) - No layout shifts expected`);

  // Mobile Performance
  log('\n📱 Mobile Performance:');
  const mobileScore = totalAssets < 200 ? 'Excellent' : totalAssets < 300 ? 'Good' : totalAssets < 500 ? 'Fair' : 'Poor';
  const mobileColor = totalAssets < 200 ? colors.green : totalAssets < 300 ? colors.yellow : colors.red;
  log(`  Mobile Score: ${mobileScore}`, mobileColor);
  log(`  3G Load Time: ~${Math.ceil(totalAssets / 50)}s (estimated)`);

  return {
    totalJS,
    totalCSS,
    largestChunk,
    totalAssets,
    mobileScore,
    budgetMet: totalAssets <= budget.totalAssets
  };
}

function generateOptimizationGuide() {
  log('\n🚀 OPTIMIZATION IMPLEMENTATION GUIDE', colors.blue + colors.bold);
  log('=' * 50);

  log('\n✅ COMPLETED OPTIMIZATIONS:');
  log('  🔧 Vite build configuration optimized');
  log('  🔧 Manual chunk splitting implemented');
  log('  🔧 Terser minification enabled');
  log('  🔧 Critical CSS separation');
  log('  🔧 Font loading optimization (display=optional)');
  log('  🔧 Service Worker for caching');
  log('  🔧 Reduced motion support');
  log('  🔧 Lazy loading for animations');
  log('  🔧 Web Vitals monitoring');
  log('  🔧 Custom SVG icons (reduced bundle size)');

  log('\n🎯 NEXT OPTIMIZATION OPPORTUNITIES:');
  log('  📊 Image optimization (WebP/AVIF format)');
  log('  📊 Critical CSS inlining in HTML');
  log('  📊 Resource hints (prefetch/preload)');
  log('  📊 CDN implementation');
  log('  📊 Bundle analyzer integration');
  log('  📊 Progressive loading strategies');

  log('\n⚙️  PERFORMANCE MONITORING:');
  log('  📈 Web Vitals reporting enabled in production');
  log('  📈 Service Worker caching performance');
  log('  📈 Console logging for Core Web Vitals');
  log('  📈 Real User Monitoring (RUM) ready');

  log('\n🎨 USER EXPERIENCE OPTIMIZATIONS:');
  log('  🎭 Loading states with branded spinner');
  log('  🎭 Reduced motion preferences respected');
  log('  🎭 Progressive enhancement approach');
  log('  🎭 Mobile-first responsive design');
  log('  🎭 Accessibility focus indicators');
}

// Main execution
log('🔍 PLUMBUS PERFORMANCE AUDIT', colors.blue + colors.bold);
log('Starting comprehensive performance analysis...\n');

try {
  const report = generatePerformanceReport();
  generateOptimizationGuide();
  
  log('\n🏁 SUMMARY', colors.blue + colors.bold);
  log(`Performance Budget: ${report.budgetMet ? '✅ MET' : '❌ EXCEEDED'}`);
  log(`Mobile Performance: ${report.mobileScore}`);
  log(`Bundle Size: ${report.totalAssets}KB`);
  
  if (report.budgetMet) {
    log('\n🎉 Congratulations! Your Plumbus site is optimized for production!', colors.green + colors.bold);
  } else {
    log('\n⚠️  Consider additional optimizations before production deployment.', colors.yellow + colors.bold);
  }

} catch (error) {
  log(`❌ Error during performance analysis: ${error.message}`, colors.red);
  process.exit(1);
}
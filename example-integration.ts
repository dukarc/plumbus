/**
 * Example Integration & Testing Script
 * Demonstrates how to integrate the Plumbus Image Generation service
 * into the existing Rick & Morty plumbus landing page
 */

import { createPlumbusImageGenerator, PLUMBUS_PRESETS } from './src/services/plumbus-image-generator';

// Example environment configuration
const config = {
  // Get these from your environment variables
  HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY || 'hf_your_key_here',
  TOGETHER_API_KEY: process.env.TOGETHER_API_KEY || 'your_together_key_here', // Optional backup
  
  // Testing configuration
  ENABLE_CACHING: true,
  MAX_RETRIES: 3,
  GENERATION_TIMEOUT: 30000 // 30 seconds
};

/**
 * Example 1: Basic Integration
 * Replace the current SVG with a single generated plumbus
 */
async function basicPlumbusGeneration() {
  console.log('🧪 Testing basic plumbus generation...');
  
  const generator = createPlumbusImageGenerator(
    config.HUGGING_FACE_API_KEY,
    config.TOGETHER_API_KEY
  );

  try {
    // Generate using hero section preset
    const result = await generator.generatePlumbus(PLUMBUS_PRESETS.heroSection);
    
    console.log('✅ Generation successful!');
    console.log('📸 Image URL:', result.imageUrl);
    console.log('🎯 Service used:', result.service);
    console.log('⚡ Cached:', result.cached);
    console.log('📝 Prompt:', result.prompt);
    
    return result;
  } catch (error) {
    console.error('❌ Generation failed:', error);
    throw error;
  }
}

/**
 * Example 2: Multi-Variant Generation
 * Generate multiple plumbus variations for A/B testing
 */
async function generatePlumbusVariants() {
  console.log('🎨 Generating multiple plumbus variants...');
  
  const generator = createPlumbusImageGenerator(config.HUGGING_FACE_API_KEY);
  
  try {
    const variants = await generator.generateVariants({
      style: 'organic',
      components: ['grumbo', 'dinglebop', 'chumbles'],
      size: { width: 300, height: 300 }
    });
    
    console.log(`✅ Generated ${variants.length} variants:`);
    variants.forEach((variant, index) => {
      console.log(`  ${index + 1}. ${variant.service} - ${variant.prompt.substring(0, 50)}...`);
    });
    
    return variants;
  } catch (error) {
    console.error('❌ Variant generation failed:', error);
    throw error;
  }
}

/**
 * Example 3: React Component Integration
 * Show how to use the EnhancedPlumbusImage component
 */
const ExampleReactIntegration = `
import React from 'react';
import EnhancedPlumbusImage from './components/EnhancedPlumbusImage';

// Replace the hero section plumbus
function HeroSection() {
  return (
    <section className="plumbus-hero">
      <div className="plumbus-hero-content">
        <h1 className="hero-title">The Amazing Plumbus!</h1>
        
        {/* Replace static SVG with AI-generated image */}
        <EnhancedPlumbusImage
          preset="heroSection"
          alt="Organic plumbus with fleshy texture"
          onGenerationSuccess={(result) => {
            console.log('Hero plumbus generated successfully!', result);
            // Track analytics event
            analytics.track('plumbus_generated', {
              service: result.service,
              cached: result.cached
            });
          }}
          onGenerationError={(error) => {
            console.error('Failed to generate hero plumbus:', error);
            // Fallback gracefully to SVG
          }}
        />
        
        <p>Now with genuine organic fleshy texture!</p>
        <button className="button-primary">Buy Your Plumbus Today!</button>
      </div>
    </section>
  );
}

// Use in interactive diagram
function InteractivePlumbusSection() {
  return (
    <section className="section-beige">
      <div className="container">
        <h2 className="section-title">Interactive Plumbus Components</h2>
        
        <EnhancedPlumbusImage
          preset="scientificDiagram"
          alt="Scientific plumbus diagram with labeled components"
          className="interactive-plumbus"
          onGenerationSuccess={(result) => {
            // Enable hotspot interactions once image loads
            enablePlumbusHotspots();
          }}
        />
        
        <div className="component-descriptions">
          <div className="component-card">
            <h3>Grumbo Body</h3>
            <p>The main organic structure of the plumbus</p>
          </div>
          <div className="component-card">
            <h3>Dinglebop</h3>
            <p>Essential protrusion for proper schleem distribution</p>
          </div>
          <div className="component-card">
            <h3>Chumbles</h3>
            <p>Flexible appendages for multi-dimensional functionality</p>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

/**
 * Example 4: Performance Testing
 * Test generation speed and success rates
 */
async function performanceTest() {
  console.log('⚡ Running performance tests...');
  
  const generator = createPlumbusImageGenerator(config.HUGGING_FACE_API_KEY);
  const testCases = [
    PLUMBUS_PRESETS.heroSection,
    PLUMBUS_PRESETS.iconSize,
    PLUMBUS_PRESETS.scientificDiagram
  ];
  
  const results = {
    totalTests: testCases.length,
    successful: 0,
    failed: 0,
    totalTime: 0,
    averageTime: 0,
    cacheHits: 0
  };
  
  console.time('Total Generation Time');
  
  for (const [index, testCase] of testCases.entries()) {
    console.log(`  Testing case ${index + 1}/${testCases.length}...`);
    
    try {
      const startTime = Date.now();
      const result = await generator.generatePlumbus(testCase);
      const endTime = Date.now();
      
      const duration = endTime - startTime;
      results.totalTime += duration;
      results.successful++;
      
      if (result.cached) {
        results.cacheHits++;
      }
      
      console.log(`    ✅ Success in ${duration}ms (${result.service}${result.cached ? ', cached' : ''})`);
    } catch (error) {
      results.failed++;
      console.log(`    ❌ Failed: ${error.message}`);
    }
  }
  
  console.timeEnd('Total Generation Time');
  
  results.averageTime = results.totalTime / results.successful;
  
  console.log('\n📊 Performance Results:');
  console.log(`  Success Rate: ${(results.successful / results.totalTests * 100).toFixed(1)}%`);
  console.log(`  Average Generation Time: ${results.averageTime.toFixed(0)}ms`);
  console.log(`  Cache Hit Rate: ${(results.cacheHits / results.successful * 100).toFixed(1)}%`);
  console.log(`  Total Time: ${results.totalTime}ms`);
  
  return results;
}

/**
 * Example 5: Usage Monitoring
 * Track API usage and quota management
 */
async function usageMonitoring() {
  console.log('📈 Checking usage statistics...');
  
  const generator = createPlumbusImageGenerator(config.HUGGING_FACE_API_KEY);
  
  // Generate a few images to create usage data
  await generator.generatePlumbus(PLUMBUS_PRESETS.iconSize);
  await generator.generatePlumbus(PLUMBUS_PRESETS.heroSection);
  
  const stats = generator.getUsageStats();
  
  console.log('📊 Current Usage Stats:');
  console.log(`  Total Requests: ${stats.totalRequests}`);
  console.log(`  Successful Generations: ${stats.successfulGenerations}`);
  console.log(`  Cache Hits: ${stats.cacheHits}`);
  console.log(`  Monthly Usage: ${stats.currentMonthUsage} characters`);
  console.log(`  Remaining Quota: ${stats.remainingQuota} characters`);
  console.log(`  Success Rate: ${(stats.successfulGenerations / stats.totalRequests * 100).toFixed(1)}%`);
  console.log(`  Cache Hit Rate: ${(stats.cacheHits / stats.totalRequests * 100).toFixed(1)}%`);
  
  // Warn if approaching quota limits
  if (stats.remainingQuota < 5000) {
    console.warn('⚠️  Warning: Approaching monthly quota limit!');
  }
  
  return stats;
}

/**
 * Example 6: Error Handling & Fallback
 * Demonstrate robust error handling
 */
async function errorHandlingDemo() {
  console.log('🛡️  Testing error handling and fallbacks...');
  
  // Test with invalid API key
  const invalidGenerator = createPlumbusImageGenerator('invalid_key');
  
  try {
    await invalidGenerator.generatePlumbus(PLUMBUS_PRESETS.iconSize);
    console.log('❌ Should have failed with invalid key');
  } catch (error) {
    console.log('✅ Correctly handled invalid API key:', error.message);
  }
  
  // Test fallback SVG generation
  const fallbackSvg = invalidGenerator.getFallbackSVG();
  console.log('✅ Fallback SVG generated:', fallbackSvg.substring(0, 50) + '...');
}

/**
 * Integration Test Suite
 * Run all tests to validate the implementation
 */
async function runIntegrationTests() {
  console.log('🚀 Starting Plumbus Image Generation Integration Tests');
  console.log('=' .repeat(60));
  
  try {
    // Test 1: Basic generation
    await basicPlumbusGeneration();
    console.log('');
    
    // Test 2: Variant generation
    await generatePlumbusVariants();
    console.log('');
    
    // Test 3: Performance testing
    await performanceTest();
    console.log('');
    
    // Test 4: Usage monitoring
    await usageMonitoring();
    console.log('');
    
    // Test 5: Error handling
    await errorHandlingDemo();
    console.log('');
    
    console.log('🎉 All integration tests completed successfully!');
    console.log('\n📋 Next Steps:');
    console.log('1. Set up your Hugging Face API key in environment variables');
    console.log('2. Replace SVG usage in React components with EnhancedPlumbusImage');
    console.log('3. Deploy with feature flags for gradual rollout');
    console.log('4. Monitor usage and performance metrics');
    console.log('5. A/B test generated images vs current SVG');
    
  } catch (error) {
    console.error('💥 Integration test failed:', error);
    console.log('\n🔧 Troubleshooting:');
    console.log('- Check API key configuration');
    console.log('- Verify network connectivity');
    console.log('- Check rate limits and quotas');
    console.log('- Review error logs for specific issues');
  }
}

/**
 * Production Deployment Checklist
 */
const productionChecklist = `
🚀 PRODUCTION DEPLOYMENT CHECKLIST

Environment Setup:
□ HUGGING_FACE_API_KEY configured in production environment
□ TOGETHER_API_KEY configured as backup (optional)
□ Error tracking/monitoring set up (Sentry, LogRocket, etc.)
□ Usage analytics configured

Performance:
□ Caching strategy implemented
□ Rate limiting in place
□ Fallback SVG ready
□ Progressive enhancement working

Quality Assurance:
□ Generated images match brand colors (#ED829E, #F6E8CB, #A36E4F)
□ Flat design (no gradients) verified
□ All plumbus components (grumbo, dinglebop, chumbles) present
□ Accessibility alt text configured
□ Mobile responsiveness tested

Monitoring:
□ Generation success rate tracking
□ API usage monitoring
□ Error rate alerts
□ Performance metrics dashboard

Rollout Strategy:
□ Feature flag implementation
□ A/B testing framework ready
□ Gradual rollout plan (10% → 50% → 100%)
□ Rollback procedure documented

Risk Mitigation:
□ Fallback to SVG on API failures
□ Rate limit handling
□ Usage quota monitoring
□ Error boundary components
`;

// Export for use in actual implementation
export {
  basicPlumbusGeneration,
  generatePlumbusVariants,
  performanceTest,
  usageMonitoring,
  errorHandlingDemo,
  runIntegrationTests,
  ExampleReactIntegration,
  productionChecklist
};

// CLI runner if called directly
if (require.main === module) {
  runIntegrationTests().catch(console.error);
}
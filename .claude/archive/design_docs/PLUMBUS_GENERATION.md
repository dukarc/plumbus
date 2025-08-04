# Plumbus Image Generation System
*Replacing the terrible geometric SVG with organic masterpieces*

## Overview

This system generates high-quality, organic plumbus images using AI to replace the current geometric SVG. The goal is to create illustrations that match the fleshy, organic aesthetic of Rick & Morty while maintaining our brand colors and flat design requirements.

## Quick Start

### 1. Set up API keys
```bash
# Option 1: Hugging Face (Primary, Free)
export HUGGING_FACE_API_KEY="hf_your_key_here"

# Option 2: Together.ai (Backup, Free credits)
export TOGETHER_API_KEY="your_together_key_here"
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run quick test (3 samples)
```bash
npm run generate:plumbus:quick
```

### 4. Run full pipeline (18+ variants)
```bash
npm run generate:plumbus
```

## Brand Requirements

### Visual Style
- **Organic & Fleshy**: Not geometric, should look biological
- **Flat Illustration**: No gradients or shadows
- **Rick & Morty Aesthetic**: Cartoon style that fits the universe

### Brand Colors
- **Plumbus Pink**: `#ED829E` - Primary body color
- **Gromflomite Beige**: `#F6E8CB` - Secondary/highlight color  
- **Blamf Brown**: `#A36E4F` - Accent/outline color

### Required Components
- **Grumbo**: Main body section
- **Dingle-bop**: Brown attachment protruding from body
- **Floob**: Connection point (optional for simple variants)
- **Chumbles**: Tentacle appendages flowing from bottom

## Generation Strategy

### Round 1: Exploration (10 variants)
Tests different combinations of:
- Organic vs cartoon vs scientific styles
- Component combinations (2-4 parts)
- Detail levels (simple, default, detailed)

### Round 2: Refinement (5 variants) 
Focuses on the most promising approaches:
- Flat design compliance
- Brand color accuracy
- Implementation readiness

### Round 3: Finals (3 variants)
Production candidates with:
- Perfect brand alignment
- All required components
- Social media optimization

## Usage Examples

### Basic Component Usage
```tsx
import EnhancedPlumbusImage from './components/EnhancedPlumbusImage';

// Use preset configuration
<EnhancedPlumbusImage 
  preset="heroSection"
  alt="Organic plumbus for hero section"
  className="hero-plumbus"
/>

// Custom configuration
<EnhancedPlumbusImage 
  customOptions={{
    style: 'organic',
    components: ['grumbo', 'dinglebop', 'chumbles'],
    size: { width: 400, height: 400 },
    variant: 'detailed'
  }}
  onGenerationSuccess={(result) => {
    console.log('Generated with prompt:', result.prompt);
  }}
/>
```

### Manual Generation
```typescript
import { createPlumbusImageGenerator, PLUMBUS_PRESETS } from './services/plumbus-image-generator';

const generator = createPlumbusImageGenerator(
  process.env.HUGGING_FACE_API_KEY!,
  process.env.TOGETHER_API_KEY
);

// Generate single image
const result = await generator.generatePlumbus(PLUMBUS_PRESETS.heroSection);

// Generate multiple variants for A/B testing
const variants = await generator.generateVariants({
  style: 'organic',
  components: ['grumbo', 'dinglebop', 'chumbles'],
  size: { width: 300, height: 300 }
});
```

## File Structure

```
src/
├── services/
│   └── plumbus-image-generator.ts    # Core generation service
├── components/
│   └── EnhancedPlumbusImage.tsx      # React component with fallbacks
├── scripts/
│   ├── generate-plumbus-variants.ts   # Full pipeline script
│   └── quick-plumbus-test.ts         # Quick testing script
└── generated-plumbus/                # Output directory
    └── [session-id]/
        ├── round1_*.png              # Generated images
        ├── round1_*.json             # Metadata
        ├── round*_summary.json       # Round summaries
        └── FINAL_REPORT.md           # Complete analysis
```

## Configuration Options

### Styles
- `organic`: Fleshy, biological appearance
- `fleshy`: Detailed organic textures  
- `cartoon`: Rick & Morty animation style
- `scientific`: Clean diagram style

### Components
- `grumbo`: Main body (always recommended)
- `dinglebop`: Brown protrusion (always recommended)
- `floob`: Connection point (optional)
- `chumbles`: Bottom tentacles (recommended for authenticity)

### Variants
- `simple`: Minimal details, faster generation
- `default`: Balanced detail level
- `detailed`: Highly detailed, best quality

### Presets
```typescript
// Pre-configured for common use cases
PLUMBUS_PRESETS.heroSection     // 300x300, organic, detailed
PLUMBUS_PRESETS.iconSize        // 64x64, simple, minimal components
PLUMBUS_PRESETS.scientificDiagram // 400x400, all components, detailed
```

## Production Integration

### Environment Variables
```bash
# Production
HUGGING_FACE_API_KEY=hf_your_production_key
TOGETHER_API_KEY=your_backup_key

# Development  
REACT_APP_HUGGING_FACE_API_KEY=hf_your_dev_key
REACT_APP_TOGETHER_API_KEY=your_dev_backup_key
```

### Error Handling
The system includes automatic:
- Service fallback (Hugging Face → Together.ai)
- Retry logic with exponential backoff
- SVG fallback when all generation fails
- Caching to reduce API calls

### Performance Features
- **Caching**: Identical requests return cached results
- **Deduplication**: Prevents duplicate generations
- **Quota Management**: Tracks API usage limits
- **Graceful Degradation**: Falls back to SVG on failure

## Monitoring & Analytics

### Usage Statistics
```typescript
const stats = generator.getUsageStats();
console.log({
  totalRequests: stats.totalRequests,
  successfulGenerations: stats.successfulGenerations,
  cacheHits: stats.cacheHits,
  currentMonthUsage: stats.currentMonthUsage,
  remainingQuota: stats.remainingQuota
});
```

### Development Debugging
- Set `NODE_ENV=development` for detailed logs
- Generated images show service and cache status
- Metadata files include full prompt details
- Round summaries track success rates

## Troubleshooting

### Common Issues

**"No API keys found"**
- Set `HUGGING_FACE_API_KEY` or `TOGETHER_API_KEY`
- Check environment variable spelling
- Restart development server after setting

**"Monthly quota exceeded"**
- Switch to Together.ai backup service
- Wait for quota reset (monthly)
- Consider upgrading API plan

**"Generation failed repeatedly"**
- Check network connection
- Verify API key validity
- Try with simpler generation options

**"Images not displaying"**
- Blob URLs may not work in all contexts
- Check browser console for CORS errors
- Ensure proper error handling is implemented

### API Limits

**Hugging Face (Free)**
- 30,000 characters per month
- ~150-300 requests depending on prompt length
- Automatic rate limiting

**Together.ai (Free Credits)**
- $5 free credits on signup
- ~500-1000 generations typically
- Pay-per-use after credits

## Next Steps

1. **Run quick test** to verify setup
2. **Generate full pipeline** for variant selection
3. **Review generated images** for quality
4. **Select final candidate** for production
5. **Update component** with chosen configuration
6. **Deploy and monitor** success rates

## Contributing

When adding new generation options:
1. Test with quick script first
2. Document new parameters
3. Update presets if universally useful
4. Add error handling for edge cases
5. Update this README

---

**Mission**: Transform the geometric SVG monstrosity into organic plumbus perfection that Rick Sanchez himself would approve of. 

*The multiverse demands better plumbus representations.*
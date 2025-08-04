/**
 * Plumbus Image Generation Service
 * Replaces geometric SVG with high-quality organic illustrations
 * Primary: Hugging Face Inference API (Free)
 * Backup: Together.ai (Free credits)
 */

export interface PlumbusGenerationOptions {
  style: 'organic' | 'fleshy' | 'scientific' | 'cartoon' | 'simple';
  components: ('grumbo' | 'dinglebop' | 'floob' | 'chumbles')[];
  size: { width: number; height: number };
  variant?: 'default' | 'detailed' | 'simple';
}

export interface GenerationResult {
  imageUrl: string;
  prompt: string;
  service: string;
  generatedAt: Date;
  cached: boolean;
}

export interface UsageStats {
  totalRequests: number;
  successfulGenerations: number;
  cacheHits: number;
  currentMonthUsage: number;
  remainingQuota: number;
}

class PlumbusImageGenerator {
  private cache = new Map<string, GenerationResult>();
  private stats: UsageStats = {
    totalRequests: 0,
    successfulGenerations: 0,
    cacheHits: 0,
    currentMonthUsage: 0,
    remainingQuota: 30000 // Hugging Face monthly character limit
  };

  // Brand colors from design system
  private readonly BRAND_COLORS = {
    plumbusPink: '#ED829E',
    gromflomiteBeige: '#F6E8CB',
    blamfBrown: '#A36E4F'
  };

  constructor(
    private huggingFaceApiKey: string,
    private togetherApiKey?: string
  ) {}

  /**
   * Generate a plumbus image with fallback strategy
   */
  async generatePlumbus(options: PlumbusGenerationOptions): Promise<GenerationResult> {
    this.stats.totalRequests++;
    
    // Check cache first
    const cacheKey = this.generateCacheKey(options);
    const cached = this.cache.get(cacheKey);
    if (cached) {
      this.stats.cacheHits++;
      return { ...cached, cached: true };
    }

    // Try primary service (Hugging Face)
    try {
      const result = await this.generateWithHuggingFace(options);
      this.cache.set(cacheKey, result);
      this.stats.successfulGenerations++;
      return result;
    } catch (error) {
      console.warn('Hugging Face generation failed:', error);
    }

    // Try backup service (Together.ai)
    if (this.togetherApiKey) {
      try {
        const result = await this.generateWithTogether(options);
        this.cache.set(cacheKey, result);
        this.stats.successfulGenerations++;
        return result;
      } catch (error) {
        console.warn('Together.ai generation failed:', error);
      }
    }

    throw new Error('All image generation services failed');
  }

  /**
   * Generate using Hugging Face FLUX.1 model with enhanced flat design parameters
   */
  private async generateWithHuggingFace(options: PlumbusGenerationOptions): Promise<GenerationResult> {
    const API_URL = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";
    const prompt = this.buildPlumbusPrompt(options);

    // Check if we have enough quota
    if (this.stats.currentMonthUsage + prompt.length > this.stats.remainingQuota) {
      throw new Error('Monthly quota exceeded for Hugging Face API');
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.huggingFaceApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          width: options.size.width,
          height: options.size.height,
          guidance_scale: 8.0, // Increased for better prompt adherence
          num_inference_steps: 25, // Increased for better quality
          scheduler: "DPMSolverMultistepScheduler",
          // Additional parameters for flat design emphasis
          negative_prompt: "gradients, shadows, 3D effects, depth, shading, highlights, reflections, volumetric lighting, glossy surfaces, metallic finish, realistic lighting"
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Hugging Face API error: ${response.status} - ${errorText}`);
    }

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    // Update usage stats
    this.stats.currentMonthUsage += prompt.length;
    this.stats.remainingQuota -= prompt.length;

    return {
      imageUrl,
      prompt,
      service: 'huggingface',
      generatedAt: new Date(),
      cached: false
    };
  }

  /**
   * Generate using Together.ai as backup
   */
  private async generateWithTogether(options: PlumbusGenerationOptions): Promise<GenerationResult> {
    if (!this.togetherApiKey) {
      throw new Error('Together.ai API key not provided');
    }

    const API_URL = "https://api.together.xyz/v1/images/generations";
    const prompt = this.buildPlumbusPrompt(options);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.togetherApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "black-forest-labs/FLUX.1-schnell-Free",
        prompt,
        negative_prompt: "gradients, shadows, 3D effects, depth, shading, highlights, reflections, volumetric lighting, glossy surfaces, metallic finish, realistic lighting",
        width: options.size.width,
        height: options.size.height,
        steps: 6, // Increased for better quality
        n: 1
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Together.ai API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const imageUrl = data.data[0].url;

    return {
      imageUrl,
      prompt,
      service: 'together',
      generatedAt: new Date(),
      cached: false
    };
  }

  /**
   * Build optimized prompt for plumbus generation
   * Enhanced with stronger flat design enforcement and negative prompts
   */
  private buildPlumbusPrompt(options: PlumbusGenerationOptions): string {
    const basePrompt = "organic plumbus from Rick and Morty";
    
    // Style variations with enhanced descriptions
    const stylePrompts = {
      organic: "fleshy pink blob creature with smooth organic curves and biological texture",
      fleshy: "detailed organic fleshy texture with realistic biological surface appearance",
      scientific: "clean scientific diagram style illustration with precise anatomical details",
      cartoon: "Rick and Morty animation style cartoon illustration with bold clean lines",
      simple: "simple clean design with minimal details and bold shapes"
    };

    // Enhanced component descriptions with anatomical specificity
    const componentDescriptions = {
      grumbo: "large rounded grumbo main body section with smooth pink surface",
      dinglebop: "elongated brown dinglebop handle attachment protruding upward from main body",
      floob: "small circular floob connection point where components join",
      chumbles: "flowing organic chumbles tentacle appendages extending downward from bottom"
    };

    const stylePrompt = stylePrompts[options.style] || stylePrompts.organic;
    const componentsPrompt = options.components
      .map(comp => componentDescriptions[comp])
      .join(", ");

    // Variant-specific adjustments
    const variantPrompts = {
      detailed: "highly detailed with intricate organic textures and precise anatomical features",
      simple: "clean and simple design with minimal details and bold shapes",
      default: "balanced detail level with clear component definition"
    };
    const variantPrompt = variantPrompts[options.variant || 'default'];

    // Enhanced brand color specification
    const colorPrompt = `using exact brand colors ${this.BRAND_COLORS.plumbusPink} pink for main body, ${this.BRAND_COLORS.gromflomiteBeige} beige for chumbles, ${this.BRAND_COLORS.blamfBrown} brown for dinglebop`;

    // CRITICAL: Enhanced flat design constraints
    const flatDesignPrompt = "FLAT ILLUSTRATION STYLE ONLY, absolutely no gradients, no shadows, no 3D effects, no depth, no shading, solid flat colors only, vector art style";
    
    // Negative constraints to prevent unwanted effects
    const negativePrompt = "NOT: gradients, shadows, 3D rendering, depth effects, shading, highlights, reflections, volumetric lighting, metallic surfaces, glossy finish";
    
    const backgroundPrompt = "clean pure white background with no texture or pattern";
    const qualityPrompt = "high quality flat digital illustration, professional vector artwork, cartoon style";

    // Build final prompt with enhanced structure
    const positivePrompt = [
      basePrompt,
      stylePrompt,
      `featuring ${componentsPrompt}`,
      variantPrompt,
      colorPrompt,
      flatDesignPrompt,
      backgroundPrompt,
      qualityPrompt
    ].join(", ");

    // Combine positive and negative prompts
    return `${positivePrompt}. ${negativePrompt}`;
  }

  /**
   * Generate cache key for request deduplication
   */
  private generateCacheKey(options: PlumbusGenerationOptions): string {
    return JSON.stringify({
      style: options.style,
      components: options.components.sort(),
      size: options.size,
      variant: options.variant || 'default'
    });
  }

  /**
   * Get current usage statistics
   */
  getUsageStats(): UsageStats {
    return { ...this.stats };
  }

  /**
   * Clear cache (useful for development/testing)
   */
  clearCache(): void {
    this.cache.clear();
    console.log('Plumbus image cache cleared');
  }

  /**
   * Generate multiple variants for A/B testing
   */
  async generateVariants(baseOptions: PlumbusGenerationOptions): Promise<GenerationResult[]> {
    const variants: PlumbusGenerationOptions[] = [
      { ...baseOptions, variant: 'default' },
      { ...baseOptions, variant: 'detailed' },
      { ...baseOptions, variant: 'simple' },
      { ...baseOptions, style: 'cartoon' },
      { ...baseOptions, style: 'scientific' }
    ];

    const results = await Promise.allSettled(
      variants.map(variant => this.generatePlumbus(variant))
    );

    return results
      .filter((result): result is PromiseFulfilledResult<GenerationResult> => 
        result.status === 'fulfilled'
      )
      .map(result => result.value);
  }

  /**
   * Generate fallback SVG data URL if all services fail
   */
  getFallbackSVG(): string {
    // This would return the current SVG as a data URL
    // Implementation would read the existing SVG file
    return "data:image/svg+xml;base64," + btoa(`
      <svg width="300" height="300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Fallback: current geometric SVG content -->
        <path d="M16 8C13 8 11 10 10 12C9 14 9.5 16 10 18C10.5 20 11 22 13 23C15 24 17 24 19 23C21 22 21.5 20 22 18C22.5 16 23 14 22 12C21 10 19 8 16 8Z" fill="${this.BRAND_COLORS.plumbusPink}"/>
      </svg>
    `);
  }
}

// Factory function for easy instantiation
export function createPlumbusImageGenerator(
  huggingFaceApiKey: string,
  togetherApiKey?: string
): PlumbusImageGenerator {
  return new PlumbusImageGenerator(huggingFaceApiKey, togetherApiKey);
}

// Predefined configurations for common use cases
export const PLUMBUS_PRESETS = {
  heroSection: {
    style: 'organic' as const,
    components: ['grumbo', 'dinglebop', 'chumbles'] as ('grumbo' | 'dinglebop' | 'floob' | 'chumbles')[],
    size: { width: 300, height: 300 },
    variant: 'detailed' as const
  },
  
  iconSize: {
    style: 'simple' as const,
    components: ['grumbo', 'dinglebop'] as ('grumbo' | 'dinglebop' | 'floob' | 'chumbles')[],
    size: { width: 64, height: 64 },
    variant: 'simple' as const
  },
  
  scientificDiagram: {
    style: 'scientific' as const,
    components: ['grumbo', 'dinglebop', 'floob', 'chumbles'] as ('grumbo' | 'dinglebop' | 'floob' | 'chumbles')[],
    size: { width: 400, height: 400 },
    variant: 'detailed' as const
  }
} as const;

export default PlumbusImageGenerator;
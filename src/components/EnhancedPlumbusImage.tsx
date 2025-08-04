/**
 * Enhanced Plumbus Image Component
 * Replaces static SVG with AI-generated organic plumbus illustrations
 * Includes fallback and error handling for production reliability
 */

import React, { useState, useEffect, useCallback } from 'react';
import { createPlumbusImageGenerator, PlumbusGenerationOptions, GenerationResult, PLUMBUS_PRESETS } from '../services/plumbus-image-generator';

interface EnhancedPlumbusImageProps {
  /** Preset configuration or custom options */
  preset?: keyof typeof PLUMBUS_PRESETS;
  customOptions?: PlumbusGenerationOptions;
  
  /** Fallback behavior */
  showFallbackOnError?: boolean;
  maxRetries?: number;
  
  /** Loading and error states */
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
  
  /** Callbacks */
  onGenerationSuccess?: (result: GenerationResult) => void;
  onGenerationError?: (error: Error) => void;
  
  /** Standard img props */
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface GenerationState {
  status: 'idle' | 'loading' | 'success' | 'error' | 'fallback';
  result?: GenerationResult;
  error?: Error;
  retryCount: number;
}

const EnhancedPlumbusImage: React.FC<EnhancedPlumbusImageProps> = ({
  preset = 'heroSection',
  customOptions,
  showFallbackOnError = true,
  maxRetries = 2,
  loadingComponent,
  errorComponent,
  onGenerationSuccess,
  onGenerationError,
  alt = "Organic plumbus illustration",
  className = "",
  style = {}
}) => {
  const [state, setState] = useState<GenerationState>({
    status: 'idle',
    retryCount: 0
  });

  // Initialize the image generator (in production, these would come from environment variables)
  const imageGenerator = React.useMemo(() => {
    const huggingFaceKey = process.env.REACT_APP_HUGGING_FACE_API_KEY || process.env.HUGGING_FACE_API_KEY;
    const togetherKey = process.env.REACT_APP_TOGETHER_API_KEY || process.env.TOGETHER_API_KEY;
    
    if (!huggingFaceKey) {
      console.warn('Hugging Face API key not found, using fallback mode');
      return null;
    }
    
    return createPlumbusImageGenerator(huggingFaceKey, togetherKey);
  }, []);

  // Get generation options from preset or custom
  const generationOptions = React.useMemo(() => {
    return customOptions || PLUMBUS_PRESETS[preset];
  }, [preset, customOptions]);

  // Generate plumbus image with retry logic
  const generateImage = useCallback(async (retryCount = 0) => {
    if (!imageGenerator) {
      setState(prev => ({ ...prev, status: showFallbackOnError ? 'fallback' : 'error' }));
      return;
    }

    setState(prev => ({ ...prev, status: 'loading', retryCount }));

    try {
      const result = await imageGenerator.generatePlumbus(generationOptions);
      
      setState(prev => ({ 
        ...prev, 
        status: 'success', 
        result,
        error: undefined 
      }));

      onGenerationSuccess?.(result);
    } catch (error) {
      console.error('Plumbus generation failed:', error);
      
      const generationError = error instanceof Error ? error : new Error(String(error));
      
      if (retryCount < maxRetries) {
        // Retry with exponential backoff
        const retryDelay = Math.pow(2, retryCount) * 1000; // 1s, 2s, 4s...
        setTimeout(() => generateImage(retryCount + 1), retryDelay);
        return;
      }

      setState(prev => ({ 
        ...prev, 
        status: showFallbackOnError ? 'fallback' : 'error',
        error: generationError
      }));

      onGenerationError?.(generationError);
    }
  }, [imageGenerator, generationOptions, maxRetries, showFallbackOnError, onGenerationSuccess, onGenerationError]);

  // Trigger generation on mount or when options change
  useEffect(() => {
    generateImage();
  }, [generateImage]);

  // Manual retry function
  const retry = useCallback(() => {
    generateImage(0);
  }, [generateImage]);

  // Render loading state
  if (state.status === 'loading') {
    if (loadingComponent) {
      return <>{loadingComponent}</>;
    }

    return (
      <div 
        className={`plumbus-loading ${className}`}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: generationOptions.size.height,
          minWidth: generationOptions.size.width,
          backgroundColor: 'var(--gromflomite-beige)',
          borderRadius: 'var(--border-radius-lg)',
          ...style 
        }}
      >
        <div className="loading-spinner">
          <div className="plumbus-spinner"></div>
          <p style={{ marginTop: '16px', color: 'var(--blamf-brown)' }}>
            Generating organic plumbus...
            {state.retryCount > 0 && ` (Attempt ${state.retryCount + 1})`}
          </p>
        </div>
      </div>
    );
  }

  // Render error state
  if (state.status === 'error') {
    if (errorComponent) {
      return <>{errorComponent}</>;
    }

    return (
      <div 
        className={`plumbus-error ${className}`}
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: generationOptions.size.height,
          minWidth: generationOptions.size.width,
          backgroundColor: '#ffebee',
          borderRadius: 'var(--border-radius-lg)',
          padding: '16px',
          border: '2px solid #ef5350',
          ...style 
        }}
      >
        <p style={{ color: '#c62828', marginBottom: '8px' }}>
          Failed to generate plumbus image
        </p>
        <button 
          onClick={retry}
          className="button-secondary"
          style={{ fontSize: '14px', padding: '8px 16px' }}
        >
          Retry Generation
        </button>
      </div>
    );
  }

  // Render fallback SVG
  if (state.status === 'fallback') {
    const fallbackSvg = imageGenerator?.getFallbackSVG() || getFallbackPlumbusSVG();
    
    return (
      <div className={`plumbus-fallback ${className}`} style={style}>
        <img
          src={fallbackSvg}
          alt={alt}
          width={generationOptions.size.width}
          height={generationOptions.size.height}
          style={{ display: 'block' }}
        />
        <div style={{ fontSize: '12px', color: 'var(--blamf-brown)', marginTop: '4px', textAlign: 'center' }}>
          Using fallback illustration
        </div>
      </div>
    );
  }

  // Render successful generation
  if (state.status === 'success' && state.result) {
    return (
      <div className={`plumbus-generated ${className}`} style={style}>
        <img
          src={state.result.imageUrl}
          alt={alt}
          width={generationOptions.size.width}
          height={generationOptions.size.height}
          style={{ display: 'block', borderRadius: 'var(--border-radius-lg)' }}
          onError={() => {
            console.error('Generated image failed to load');
            setState(prev => ({ ...prev, status: 'fallback' }));
          }}
        />
        
        {/* Debug info in development */}
        {process.env.NODE_ENV === 'development' && (
          <div style={{ fontSize: '10px', color: '#666', marginTop: '4px' }}>
            Generated via {state.result.service} • {state.result.cached ? 'Cached' : 'Fresh'}
          </div>
        )}
      </div>
    );
  }

  // Default fallback (should not reach here)
  return (
    <div className={className} style={style}>
      <img
        src={getFallbackPlumbusSVG()}
        alt={alt}
        width={generationOptions.size.width}
        height={generationOptions.size.height}
      />
    </div>
  );
};

// Enhanced fallback SVG - much better than the previous awful geometric version
function getFallbackPlumbusSVG(): string {
  const svg = `
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Enhanced organic plumbus fallback -->
      <!-- Main grumbo body with organic curves -->
      <path d="M150 80C120 80 100 100 85 130C70 160 75 190 85 220C95 250 120 270 150 270C180 270 205 250 215 220C225 190 230 160 215 130C200 100 180 80 150 80Z" 
            fill="#ED829E" stroke="none"/>
      
      <!-- Dinglebop handle with organic taper -->
      <path d="M150 80C150 80 145 60 145 40C145 30 150 25 150 25C150 25 155 30 155 40C155 60 150 80 150 80Z" 
            fill="#A36E4F" stroke="none"/>
      
      <!-- Dinglebop tip (floob connection) -->
      <ellipse cx="150" cy="32" rx="8" ry="6" fill="#F6E8CB"/>
      
      <!-- Left chumbles tentacle -->
      <path d="M85 220C85 220 70 240 60 260C50 280 45 295 40 305" 
            stroke="#F6E8CB" stroke-width="12" fill="none" stroke-linecap="round"/>
      
      <!-- Right chumbles tentacle -->
      <path d="M215 220C215 220 230 240 240 260C250 280 255 295 260 305" 
            stroke="#F6E8CB" stroke-width="12" fill="none" stroke-linecap="round"/>
      
      <!-- Center chumbles tentacle -->
      <path d="M150 270C150 270 150 285 150 300" 
            stroke="#F6E8CB" stroke-width="10" fill="none" stroke-linecap="round"/>
      
      <!-- Subtle organic texture details (flat style) -->
      <ellipse cx="135" cy="140" rx="6" ry="4" fill="#ED829E" opacity="0.8"/>
      <ellipse cx="165" cy="160" rx="4" ry="6" fill="#ED829E" opacity="0.8"/>
      <ellipse cx="150" cy="200" rx="8" ry="3" fill="#ED829E" opacity="0.7"/>
    </svg>
  `;
  
  return "data:image/svg+xml;base64," + btoa(svg);
}

// CSS for loading spinner is now in plumbus-design-system.css

// Hook for usage statistics (useful for monitoring)
export function usePlumbusGenerationStats() {
  const [stats, setStats] = useState<{
    totalRequests: number;
    successfulGenerations: number;
    cacheHits: number;
    currentMonthUsage: number;
    remainingQuota: number;
  } | null>(null);
  
  useEffect(() => {
    // In a real implementation, you'd get this from your image generator instance
    // This is just a placeholder for the hook structure
    setStats({
      totalRequests: 0,
      successfulGenerations: 0,
      cacheHits: 0,
      currentMonthUsage: 0,
      remainingQuota: 30000
    });
  }, []);
  
  return stats;
}

export default EnhancedPlumbusImage;
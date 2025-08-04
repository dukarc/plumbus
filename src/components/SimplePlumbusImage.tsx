import React from 'react';

// Fallback SVG function
function getFallbackPlumbusSVG(): string {
  return "data:image/svg+xml;base64," + btoa(`
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- More organic main body -->
      <path d="M150 120C120 120 100 140 90 170C85 185 90 200 100 215C110 230 130 240 150 245C170 240 190 230 200 215C210 200 215 185 210 170C200 140 180 120 150 120Z" fill="#ED829E"/>
      
      <!-- Organic dinglebop -->
      <rect x="145" y="80" width="10" height="50" rx="5" fill="#A36E4F"/>
      <ellipse cx="150" cy="75" rx="8" ry="6" fill="#F6E8CB"/>
      
      <!-- Chumbles as organic curves -->
      <path d="M110 240Q100 260, 95 280" stroke="#A36E4F" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M130 245Q125 265, 120 285" stroke="#A36E4F" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M170 245Q175 265, 180 285" stroke="#A36E4F" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M190 240Q200 260, 205 280" stroke="#A36E4F" stroke-width="6" stroke-linecap="round" fill="none"/>
      
      <!-- Organic details -->
      <ellipse cx="140" cy="160" rx="12" ry="8" fill="#F6E8CB" opacity="0.4"/>
      <ellipse cx="165" cy="175" rx="10" ry="6" fill="#F6E8CB" opacity="0.3"/>
      
      <!-- Title for accessibility -->
      <title>Plumbus - Rick & Morty All-Purpose Home Device</title>
    </svg>
  `);
}

interface SimplePlumbusImageProps {
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SimplePlumbusImage: React.FC<SimplePlumbusImageProps> = ({
  alt = "Plumbus - Rick & Morty All-Purpose Home Device",
  className = "",
  style = {}
}) => {
  return (
    <div className={`plumbus-fallback w-full ${className}`} style={style}>
      <img 
        src={getFallbackPlumbusSVG()}
        alt={alt}
        width={300}
        height={300}
        className="w-full h-auto"
        style={{ maxWidth: '300px', margin: '0 auto', display: 'block' }}
      />
    </div>
  );
};

export default SimplePlumbusImage;
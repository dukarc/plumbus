import React, { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
// ArrowRightIcon removed - arrows now handled by CSS in design system

// Lazy load complex components
const AnimatedBlobs = lazy(() => import('../ui/AnimatedBlobs').then(module => ({ default: module.AnimatedBlobs })));

// PERFECT Plumbus SVG - Anatomically Correct & Organically Disturbing
const PlumbusSVG: React.FC = () => {
  const [hoveredPart, setHoveredPart] = React.useState<string | null>(null);
  const [clickCount, setClickCount] = React.useState(0);
  const [showJerryWarning, setShowJerryWarning] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const partTooltips = {
    grumbo: "Grumbo - Main fleshy processing unit (*wet squelching sounds* disturbingly organic)",
    dingleBop: "Dingle-Bop - Primary manipulation interface (*crunchy cartilage noises*)",
    floob: "Floob - Sensory bubble cluster (*soft popping sounds* organically grown in C-137)",
    fleeb: "Fleeb - Contains vital plumbus juice (*gurgling fluid sounds* Rick-certified organic)",
    chumble1: "Chumble - Adaptive appendage (*moist wiggling sounds* uncomfortably alive)",
    chumble2: "Chumble - Organic extension (*sticky drooping sounds* naturally oozing)",
    chumble3: "Chumble - Fleshy protrusion (*wet throbbing sounds* dimensionally sensitive)",
    chumble4: "Chumble - Biological tentacle (*slimy writhing sounds* Jerry-proof design)",
    grodus: "Grodus - Interdimensional interface (*pulsating membrane sounds* suggestively functional)",
    bristles: "Organic bristles (*soft scraping sounds* inspired by The Fly and Rick's hair)"
  };

  const handlePlumbusClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 6) {
      setShowJerryWarning(true);
      setTimeout(() => setShowJerryWarning(false), 4000);
      setClickCount(0);
      console.log('🙄 Jerry Warning: Please don\'t let Jerry near the plumbus!');
    }
  };

  // Random twitching animation effect
  const [twitchTrigger, setTwitchTrigger] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!shouldReduceMotion && Math.random() < 0.15) { // 15% chance every 3 seconds
        setTwitchTrigger(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="relative">
      <motion.svg 
        width="400" 
        height="400" 
        viewBox="0 0 400 400" 
        className="w-full max-w-md mx-auto cursor-pointer"
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 20 }}
        onClick={handlePlumbusClick}
      >
        <title>Authentic Plumbus - Rick & Morty All-Purpose Home Device</title>
        <desc>
          Interactive anatomical diagram of a Plumbus showing the main Grumbo body,
          Dingle-Bop handle, Floob sensory cluster, four Chumble appendages, 
          Grodus protrusion, and organic bristle details. Each component can be 
          hovered for detailed information.
        </desc>
        
        {/* Advanced Gradient System for Organic Flesh */}
        <defs>
          {/* Primary flesh gradient - complex radial for 3D depth */}
          <radialGradient id="fleshGradient" cx="0.35" cy="0.25" r="1.1">
            <stop offset="0%" stopColor="#E8B5A8" />
            <stop offset="20%" stopColor="#D49C8F" />
            <stop offset="45%" stopColor="#C38978" />
            <stop offset="70%" stopColor="#C08876" />
            <stop offset="85%" stopColor="#A67360" />
            <stop offset="100%" stopColor="#8C5E4A" />
          </radialGradient>
          
          {/* Deep shadow gradient for recesses */}
          <radialGradient id="fleshShadow" cx="0.6" cy="0.4" r="0.9">
            <stop offset="0%" stopColor="#C08876" />
            <stop offset="30%" stopColor="#A67360" />
            <stop offset="60%" stopColor="#8C5E4A" />
            <stop offset="100%" stopColor="#6B4A37" />
          </radialGradient>
          
          {/* Highlight gradient for raised areas */}
          <radialGradient id="fleshHighlight" cx="0.3" cy="0.2" r="0.8">
            <stop offset="0%" stopColor="#F2C2B8" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#E8B5A8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D49C8F" stopOpacity="0.2" />
          </radialGradient>
          
          {/* Floob pink gradient */}
          <radialGradient id="floobGradient" cx="0.3" cy="0.25" r="0.9">
            <stop offset="0%" stopColor="#F2C2B8" />
            <stop offset="30%" stopColor="#E8B5A8" />
            <stop offset="70%" stopColor="#D49C8F" />
            <stop offset="100%" stopColor="#C08876" />
          </radialGradient>
          
          {/* Fleeb juice - organic blue fluid */}
          <radialGradient id="fleebJuice" cx="0.2" cy="0.3" r="1.2">
            <stop offset="0%" stopColor="#B8D4E3" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#94BAD1" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#7BABC8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6FA0BF" stopOpacity="0.6" />
          </radialGradient>
          
          {/* Grodus reddish tint */}
          <radialGradient id="grodusGradient" cx="0.3" cy="0.2" r="0.9">
            <stop offset="0%" stopColor="#E8A5A8" />
            <stop offset="30%" stopColor="#D47B7B" />
            <stop offset="70%" stopColor="#C06866" />
            <stop offset="100%" stopColor="#A65555" />
          </radialGradient>
          
          {/* Advanced flesh texture pattern */}
          <pattern id="fleshTexture" patternUnits="userSpaceOnUse" width="15" height="15">
            <circle cx="4" cy="3" r="1.8" fill="#A67360" opacity="0.12" />
            <circle cx="11" cy="7" r="1.2" fill="#8C5E4A" opacity="0.08" />
            <circle cx="7" cy="11" r="1" fill="#C08876" opacity="0.06" />
            <ellipse cx="9" cy="2" rx="1.5" ry="0.8" fill="#A67360" opacity="0.08" />
            <ellipse cx="2" cy="9" rx="0.8" ry="1.2" fill="#8C5E4A" opacity="0.1" />
            <circle cx="13" cy="12" r="0.6" fill="#6B4A37" opacity="0.15" />
          </pattern>
          
          {/* Bristle pattern for organic hair */}
          <pattern id="bristlePattern" patternUnits="userSpaceOnUse" width="10" height="10">
            <line x1="2" y1="0" x2="2.5" y2="10" stroke="#6B4A37" strokeWidth="0.6" opacity="0.4" />
            <line x1="5" y1="0" x2="4.5" y2="10" stroke="#8C5E4A" strokeWidth="0.4" opacity="0.5" />
            <line x1="8" y1="0" x2="8.2" y2="10" stroke="#A67360" strokeWidth="0.5" opacity="0.3" />
            <line x1="6.5" y1="0" x2="6" y2="10" stroke="#6B4A37" strokeWidth="0.3" opacity="0.6" />
          </pattern>
          
          {/* Drop shadow filter for 3D depth */}
          <filter id="organicShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#6B4A37" floodOpacity="0.4"/>
          </filter>
          
          {/* Subtle glow filter for highlights */}
          <filter id="organicGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
          
          {/* Subtle ooze filter for seams */}
          <filter id="oozeEffect" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
            <feOffset dx="0.5" dy="1" result="offsetBlur"/>
            <feMerge>
              <feMergeNode in="offsetBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* GRUMBO - Main fleshy body with complex organic shape */}
        <motion.path 
          d="M 85 220 C 80 195 85 175 95 158 C 105 145 120 138 140 135 C 165 130 185 128 200 132 C 215 128 235 130 260 135 C 280 138 295 145 305 158 C 315 175 320 195 325 220 C 330 240 328 255 322 268 C 315 285 305 295 290 302 C 270 308 245 310 220 307 C 200 310 180 308 160 302 C 145 295 135 285 128 268 C 122 255 120 240 125 220 C 130 200 135 185 145 175 C 155 160 170 152 185 150 C 200 148 215 150 230 152 C 245 155 260 160 270 170 C 275 180 278 190 280 200 C 282 215 280 230 275 245 C 270 260 260 270 245 275 C 225 280 205 278 185 275 C 165 278 145 280 130 275 C 115 270 105 260 100 245 C 95 230 93 215 95 200 C 97 190 100 180 105 170 C 110 160 120 152 130 148 C 140 145 155 145 170 148 C 180 150 190 155 195 162 C 200 170 202 180 200 190 C 198 200 195 208 190 215 C 185 220 178 222 170 220 C 162 218 155 212 152 205 C 150 195 152 185 158 178 C 165 172 175 170 185 172 C 195 175 203 182 208 190 C 212 200 213 210 210 220 C 207 230 200 238 190 242 C 180 245 168 244 158 240 C 148 235 140 228 135 218 C 130 208 128 195 132 185 C 136 175 145 168 155 165 C 165 162 178 162 190 165 C 200 168 208 175 213 185 C 218 195 220 208 215 218 C 210 228 202 235 192 240 C 182 244 170 245 160 242 C 150 238 142 230 138 220 C 135 210 135 198 140 188 C 145 178 155 172 165 170 C 175 168 188 170 198 175 C 205 180 210 188 212 198 C 214 208 212 218 207 225 C 202 232 195 236 187 237 C 179 238 170 236 163 232 C 156 228 151 221 149 213 C 147 205 149 196 154 189 C 159 182 167 178 176 177 C 185 176 194 178 201 183 C 208 188 212 196 213 205 C 214 214 212 223 207 230 C 202 237 195 241 187 242 C 179 243 170 241 164 236 C 158 231 154 224 153 216 C 152 208 154 199 159 192 C 164 185 172 181 181 180 C 190 179 199 181 206 186 C 213 191 217 199 218 208 Z"
          fill="url(#fleshGradient)"
          filter="url(#organicShadow)"
          onMouseEnter={() => setHoveredPart('grumbo')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={shouldReduceMotion ? {} : { 
            scale: 1.03,
            rotate: [0, 0.5, -0.3, 0],
            transition: { duration: 0.4, ease: "easeInOut" }
          }}
          animate={shouldReduceMotion ? {} : {
            scale: twitchTrigger > 0 ? [1, 1.015, 1] : 1,
            rotate: twitchTrigger > 0 ? [0, 0.8, -0.5, 0] : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Grumbo organic lumps and bulges - multiple asymmetric protrusions */}
        <ellipse cx="140" cy="185" rx="22" ry="15" fill="url(#fleshShadow)" opacity="0.6" transform="rotate(-15 140 185)" />
        <ellipse cx="265" cy="205" rx="18" ry="25" fill="url(#fleshShadow)" opacity="0.5" transform="rotate(10 265 205)" />
        <ellipse cx="200" cy="245" rx="15" ry="10" fill="url(#fleshShadow)" opacity="0.4" />
        <ellipse cx="175" cy="200" rx="12" ry="18" fill="url(#fleshShadow)" opacity="0.45" transform="rotate(25 175 200)" />
        <ellipse cx="225" cy="230" rx="10" ry="14" fill="url(#fleshShadow)" opacity="0.35" transform="rotate(-8 225 230)" />
        
        {/* Grumbo highlights for 3D effect */}
        <ellipse cx="160" cy="170" rx="15" ry="8" fill="url(#fleshHighlight)" opacity="0.6" />
        <ellipse cx="240" cy="185" rx="12" ry="10" fill="url(#fleshHighlight)" opacity="0.5" />
        <ellipse cx="200" cy="195" rx="8" ry="6" fill="url(#fleshHighlight)" opacity="0.7" />
        
        {/* Grumbo flesh texture overlay */}
        <motion.path 
          d="M 85 220 C 80 195 85 175 95 158 C 105 145 120 138 140 135 C 165 130 185 128 200 132 C 215 128 235 130 260 135 C 280 138 295 145 305 158 C 315 175 320 195 325 220 C 330 240 328 255 322 268 C 315 285 305 295 290 302 C 270 308 245 310 220 307 C 200 310 180 308 160 302 C 145 295 135 285 128 268 C 122 255 120 240 125 220 Z"
          fill="url(#fleshTexture)"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* CHUMBLES - Four organic tentacle appendages with gross jiggly motion */}
        <motion.path 
          d="M 128 275 C 120 285 115 300 110 320 C 105 340 108 355 115 368 C 118 375 122 378 126 375 C 130 372 132 365 134 355 C 136 345 135 330 138 315 C 140 300 142 285 145 275 C 143 270 135 268 128 275 Z"
          fill="url(#fleshGradient)"
          filter="url(#organicShadow)"
          onMouseEnter={() => setHoveredPart('chumble1')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={shouldReduceMotion ? {} : { 
            scale: [1, 1.08, 1.05, 1.06],
            rotate: [0, 4, -2, 3],
            x: [0, -1, 1, 0],
            transition: {
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              times: [0, 0.3, 0.7, 1]
            }
          }}
          animate={shouldReduceMotion ? {} : {
            rotate: twitchTrigger > 0 ? [0, 2, -1, 0] : 0,
            x: twitchTrigger > 0 ? [0, -0.5, 0.5, 0] : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        <motion.path 
          d="M 169 278 C 162 290 158 308 156 328 C 154 348 157 365 164 375 C 167 380 171 382 175 378 C 179 374 180 368 181 358 C 182 348 180 335 183 320 C 185 305 188 290 190 278 C 188 273 178 271 169 278 Z"
          fill="url(#fleshGradient)"
          filter="url(#organicShadow)"
          onMouseEnter={() => setHoveredPart('chumble2')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={shouldReduceMotion ? {} : { 
            scale: [1, 1.07, 1.04, 1.06],
            rotate: [-2, -4, 1, -2],
            y: [0, 1, -0.5, 0],
            transition: {
              duration: 0.7,
              ease: [0.34, 1.56, 0.64, 1],
              times: [0, 0.4, 0.7, 1]
            }
          }}
          animate={shouldReduceMotion ? {} : {
            rotate: twitchTrigger > 0 ? [0, -1.5, 1, 0] : 0,
            y: twitchTrigger > 0 ? [0, 0.8, -0.3, 0] : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        <motion.path 
          d="M 231 278 C 238 290 242 308 244 328 C 246 348 243 365 236 375 C 233 380 229 382 225 378 C 221 374 220 368 219 358 C 218 348 220 335 217 320 C 215 305 212 290 210 278 C 212 273 222 271 231 278 Z"
          fill="url(#fleshGradient)"
          filter="url(#organicShadow)"
          onMouseEnter={() => setHoveredPart('chumble3')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={shouldReduceMotion ? {} : { 
            scale: [1, 1.06, 1.08, 1.05],
            rotate: [2.5, 5, -1, 2.5],
            x: [0, 0.5, -1, 0],
            transition: {
              duration: 0.65,
              ease: [0.68, -0.55, 0.265, 1.55],
              times: [0, 0.35, 0.65, 1]
            }
          }}
          animate={shouldReduceMotion ? {} : {
            rotate: twitchTrigger > 0 ? [0, 1.8, -0.8, 0] : 0,
            x: twitchTrigger > 0 ? [0, 0.3, -0.5, 0] : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        <motion.path 
          d="M 272 275 C 280 285 285 300 290 320 C 295 340 292 355 285 368 C 282 375 278 378 274 375 C 270 372 268 365 266 355 C 264 345 265 330 262 315 C 260 300 258 285 255 275 C 257 270 265 268 272 275 Z"
          fill="url(#fleshGradient)"
          filter="url(#organicShadow)"
          onMouseEnter={() => setHoveredPart('chumble4')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={shouldReduceMotion ? {} : { 
            scale: [1, 1.07, 1.04, 1.08],
            rotate: [-3, -6, 2, -3],
            x: [0, -0.8, 1.2, 0],
            transition: {
              duration: 0.8,
              ease: [0.175, 0.885, 0.32, 1.275],
              times: [0, 0.3, 0.6, 1]
            }
          }}
          animate={shouldReduceMotion ? {} : {
            rotate: twitchTrigger > 0 ? [0, -2, 1.2, 0] : 0,
            x: twitchTrigger > 0 ? [0, -0.4, 0.6, 0] : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Chumble shadow and texture details */}
        <ellipse cx="125" cy="325" rx="4" ry="12" fill="url(#fleshShadow)" opacity="0.5" />
        <ellipse cx="172" cy="330" rx="4" ry="10" fill="url(#fleshShadow)" opacity="0.45" />
        <ellipse cx="228" cy="330" rx="4" ry="10" fill="url(#fleshShadow)" opacity="0.45" />
        <ellipse cx="275" cy="325" rx="4" ry="12" fill="url(#fleshShadow)" opacity="0.5" />
        
        {/* DINGLE-BOP - Vertical shaft with organic ridges */}
        <motion.path 
          d="M 188 80 C 180 82 175 90 178 105 C 176 125 180 145 183 165 C 185 185 188 200 192 210 C 196 218 200 220 204 218 C 208 216 212 210 216 200 C 220 185 222 165 225 145 C 228 125 224 105 222 90 C 220 82 215 80 208 82 C 204 85 200 88 196 85 C 192 82 188 80 188 80 Z"
          fill="url(#fleshGradient)"
          filter="url(#organicShadow)"
          onMouseEnter={() => setHoveredPart('dingleBop')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Dingle-Bop organic ridges */}
        <ellipse cx="192" cy="110" rx="10" ry="4" fill="url(#fleshShadow)" opacity="0.6" />
        <ellipse cx="208" cy="135" rx="9" ry="3.5" fill="url(#fleshShadow)" opacity="0.55" />
        <ellipse cx="198" cy="160" rx="8" ry="3" fill="url(#fleshShadow)" opacity="0.5" />
        <ellipse cx="206" cy="185" rx="7" ry="4" fill="url(#fleshShadow)" opacity="0.65" />
        
        {/* Dingle-Bop highlights */}
        <ellipse cx="195" cy="95" rx="6" ry="2" fill="url(#fleshHighlight)" opacity="0.8" />
        <ellipse cx="205" cy="120" rx="5" ry="1.5" fill="url(#fleshHighlight)" opacity="0.7" />
        
        {/* FLOOB - Complex bubble cluster at top */}
        <motion.g
          onMouseEnter={() => setHoveredPart('floob')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        >
          {/* Main floob bulb */}
          <path 
            d="M 200 75 C 185 68 178 50 188 38 C 198 25 212 25 222 38 C 232 50 225 68 210 75 C 216 88 210 102 200 102 C 190 102 184 88 190 75 C 195 70 200 75 200 75 Z"
            fill="url(#floobGradient)"
            filter="url(#organicShadow)"
          />
          
          {/* Secondary floob bubbles */}
          <circle cx="185" cy="60" r="8" fill="url(#floobGradient)" opacity="0.9" filter="url(#organicShadow)" />
          <circle cx="215" cy="65" r="6" fill="url(#floobGradient)" opacity="0.85" filter="url(#organicShadow)" />
          <circle cx="200" cy="45" r="5" fill="url(#floobGradient)" opacity="0.8" filter="url(#organicShadow)" />
          <ellipse cx="192" cy="52" rx="4" ry="6" fill="url(#floobGradient)" opacity="0.75" />
          
          {/* Floob connection tissues */}
          <path d="M 188 60 C 195 58 200 52 200 45" stroke="#D49C8F" strokeWidth="2" opacity="0.6" fill="none" />
          <path d="M 215 65 C 210 68 205 70 200 68" stroke="#D49C8F" strokeWidth="1.5" opacity="0.5" fill="none" />
        </motion.g>
        
        {/* FLEEB - Organic fluid-filled sac with breathing animation */}
        <motion.g
          onMouseEnter={() => setHoveredPart('fleeb')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={shouldReduceMotion ? {} : { 
            scale: [1.08, 1.12, 1.10],
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.02, 1],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          <path 
            d="M 150 200 C 145 188 152 180 168 183 C 184 180 198 188 202 200 C 200 212 188 220 175 217 C 162 220 152 212 150 200 Z"
            fill="url(#fleebJuice)"
            filter="url(#organicGlow)"
          />
          
          {/* Fleeb juice bubbles */}
          <circle cx="165" cy="195" r="3" fill="#94BAD1" opacity="0.8" />
          <circle cx="180" cy="203" r="2.2" fill="#6FA0BF" opacity="0.7" />
          <circle cx="172" cy="198" r="1.5" fill="#B8D4E3" opacity="0.9" />
          <ellipse cx="175" cy="200" rx="4" ry="2" fill="#6FA0BF" opacity="0.5" />
          <circle cx="185" cy="195" r="1.8" fill="#7BABC8" opacity="0.6" />
          
          {/* Fleeb membrane details */}
          <path d="M 155 195 C 170 190 185 195 195 205" stroke="#94BAD1" strokeWidth="1" opacity="0.4" fill="none" />
        </motion.g>
        
        {/* GRODUS - Side protrusion with reddish tint */}
        <motion.path 
          d="M 320 180 C 332 175 345 178 352 188 C 358 200 356 212 348 222 C 340 232 328 228 320 218 C 312 208 315 195 318 185 C 320 180 320 180 320 180 Z"
          fill="url(#grodusGradient)"
          filter="url(#organicShadow)"
          onMouseEnter={() => setHoveredPart('grodus')}
          onMouseLeave={() => setHoveredPart(null)}
          whileHover={shouldReduceMotion ? {} : { scale: 1.06, rotate: 2 }}
          transition={{ duration: 0.3 }}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Grodus detail ridges */}
        <ellipse cx="340" cy="198" rx="5" ry="8" fill="url(#fleshShadow)" opacity="0.6" />
        <ellipse cx="335" cy="210" rx="3" ry="5" fill="url(#fleshShadow)" opacity="0.5" />
        
        {/* ORGANIC BRISTLES - Hair-like details throughout */}
        <g onMouseEnter={() => setHoveredPart('bristles')} onMouseLeave={() => setHoveredPart(null)} style={{ cursor: 'pointer' }}>
          {/* Bristles on main grumbo body */}
          <line x1="160" y1="170" x2="152" y2="185" stroke="#6B4A37" strokeWidth="1.2" opacity="0.7" />
          <line x1="165" y1="165" x2="158" y2="178" stroke="#8C5E4A" strokeWidth="0.9" opacity="0.6" />
          <line x1="170" y1="175" x2="162" y2="190" stroke="#6B4A37" strokeWidth="0.8" opacity="0.8" />
          <line x1="155" y1="180" x2="148" y2="195" stroke="#A67360" strokeWidth="0.6" opacity="0.5" />
          
          <line x1="240" y1="175" x2="248" y2="190" stroke="#6B4A37" strokeWidth="1.2" opacity="0.7" />
          <line x1="235" y1="170" x2="242" y2="183" stroke="#8C5E4A" strokeWidth="0.9" opacity="0.6" />
          <line x1="230" y1="180" x2="238" y2="195" stroke="#6B4A37" strokeWidth="0.8" opacity="0.8" />
          <line x1="245" y1="185" x2="252" y2="200" stroke="#A67360" strokeWidth="0.6" opacity="0.5" />
          
          {/* Bristles on floob */}
          <line x1="190" y1="50" x2="182" y2="42" stroke="#6B4A37" strokeWidth="1" opacity="0.6" />
          <line x1="210" y1="55" x2="218" y2="47" stroke="#8C5E4A" strokeWidth="0.8" opacity="0.7" />
          <line x1="200" y1="45" x2="200" y2="35" stroke="#6B4A37" strokeWidth="1.2" opacity="0.8" />
          <line x1="185" y1="58" x2="178" y2="50" stroke="#A67360" strokeWidth="0.7" opacity="0.5" />
          <line x1="215" y1="63" x2="222" y2="55" stroke="#6B4A37" strokeWidth="0.9" opacity="0.6" />
          
          {/* Bristles on grodus */}
          <line x1="340" y1="190" x2="348" y2="182" stroke="#8C5E4A" strokeWidth="1" opacity="0.6" />
          <line x1="338" y1="205" x2="346" y2="213" stroke="#6B4A37" strokeWidth="0.8" opacity="0.7" />
          <line x1="345" y1="198" x2="352" y2="190" stroke="#A67360" strokeWidth="0.6" opacity="0.5" />
          
          {/* Additional scattered bristles */}
          <line x1="180" y1="205" x2="175" y2="215" stroke="#6B4A37" strokeWidth="0.7" opacity="0.4" />
          <line x1="220" y1="195" x2="225" y2="205" stroke="#8C5E4A" strokeWidth="0.6" opacity="0.5" />
          <line x1="195" y1="180" x2="190" y2="190" stroke="#A67360" strokeWidth="0.5" opacity="0.6" />
        </g>
        
        {/* Organic surface imperfections and blemishes */}
        <ellipse cx="180" cy="190" rx="4" ry="2.5" fill="#8C5E4A" opacity="0.5" transform="rotate(15 180 190)" />
        <ellipse cx="220" cy="210" rx="3" ry="5" fill="#A67360" opacity="0.4" transform="rotate(-10 220 210)" />
        <ellipse cx="250" cy="185" rx="2.5" ry="4" fill="#8C5E4A" opacity="0.45" transform="rotate(25 250 185)" />
        <circle cx="200" cy="175" r="2" fill="#6B4A37" opacity="0.6" />
        <ellipse cx="165" cy="215" rx="2" ry="3" fill="#A67360" opacity="0.35" />
        <circle cx="235" cy="225" r="1.5" fill="#8C5E4A" opacity="0.5" />
        
        {/* Organic seams and connection lines with subtle oozing effect */}
        <path d="M 185 155 C 200 148 215 150 230 158 C 245 165 260 175 270 185" stroke="#8C5E4A" strokeWidth="1.8" opacity="0.4" fill="none" filter="url(#oozeEffect)" />
        <path d="M 320 190 C 310 195 300 200 290 205 C 280 210 270 215 260 220" stroke="#A67360" strokeWidth="1.5" opacity="0.5" fill="none" filter="url(#oozeEffect)" />
        <path d="M 200 210 C 185 215 170 220 155 225 C 140 230 125 235 115 240" stroke="#8C5E4A" strokeWidth="1.2" opacity="0.4" fill="none" filter="url(#oozeEffect)" />
        <path d="M 150 200 C 165 195 180 192 195 195" stroke="#94BAD1" strokeWidth="1" opacity="0.3" fill="none" />
        
        {/* Additional subtle ooze drips */}
        <motion.path 
          d="M 210 275 C 210 280 208 285 206 288 C 205 290 204 290 204 288 C 204 285 206 280 210 275" 
          fill="#8C5E4A" 
          opacity="0.6" 
          filter="url(#oozeEffect)"
          animate={shouldReduceMotion ? {} : {
            d: [
              "M 210 275 C 210 280 208 285 206 288 C 205 290 204 290 204 288 C 204 285 206 280 210 275",
              "M 210 275 C 210 282 208 287 206 291 C 205 293 204 293 204 291 C 204 287 206 282 210 275",
              "M 210 275 C 210 280 208 285 206 288 C 205 290 204 290 204 288 C 204 285 206 280 210 275"
            ],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.path 
          d="M 190 278 C 190 283 188 288 186 291 C 185 293 184 293 184 291 C 184 288 186 283 190 278" 
          fill="#A67360" 
          opacity="0.4" 
          filter="url(#oozeEffect)"
          animate={shouldReduceMotion ? {} : {
            d: [
              "M 190 278 C 190 283 188 288 186 291 C 185 293 184 293 184 291 C 184 288 186 283 190 278",
              "M 190 278 C 190 285 188 290 186 294 C 185 296 184 296 184 294 C 184 290 186 285 190 278",
              "M 190 278 C 190 283 188 288 186 291 C 185 293 184 293 184 291 C 184 288 186 283 190 278"
            ],
            transition: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }
          }}
        />
        
        {/* Additional organic connection tissues */}
        <path d="M 188 80 C 195 75 205 75 212 80" stroke="#D49C8F" strokeWidth="2" opacity="0.5" fill="none" />
        <path d="M 200 102 C 200 110 200 118 200 125" stroke="#D49C8F" strokeWidth="1.5" opacity="0.4" fill="none" />
      </motion.svg>
      
      {/* Floating tooltip */}
      {hoveredPart && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10 shadow-lg"
        >
          {partTooltips[hoveredPart as keyof typeof partTooltips]}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
        </motion.div>
      )}
      
      {/* Jerry Warning Easter Egg */}
      {showJerryWarning && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 jerry-incompetent px-4 py-3 rounded-lg text-sm text-center z-20 max-w-xs"
          style={{ 
            backgroundColor: 'var(--warning-orange)',
            color: 'white',
            border: '2px solid var(--error-red)'
          }}
        >
          🙄 <strong>Jerry Warning:</strong> Please keep Jerry away from the plumbus. We are not responsible for Jerry-related incidents.
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45" style={{ backgroundColor: 'var(--warning-orange)' }} />
        </motion.div>
      )}
      
      {/* Click counter hint */}
      {clickCount > 3 && !showJerryWarning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-center"
          style={{ color: 'var(--fleeb-blue)' }}
        >
          👂 Keep clicking... {7 - clickCount} more to go!
        </motion.div>
      )}
    </div>
  );
};

// Assembly steps now use design system classes directly in JSX

// Testimonials now use design system classes directly in JSX

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* Main Hero Section */}
      <section id="hero" className="plumbus-hero">
        {/* Enhanced floating organic blob decorations - Only render if motion is not reduced */}
        {!shouldReduceMotion && (
          <Suspense fallback={null}>
            <AnimatedBlobs />
          </Suspense>
        )}

        {/* Main Content */}
        <div className="plumbus-hero-content">
          {/* Header */}
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PLUMBUS
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            className="text-2xl mb-6"
            style={{ color: 'var(--blamf-brown)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everyone needs a plumbus *burp*
          </motion.p>
          
          {/* Sub-copy */}
          <motion.p 
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: 'var(--blamf-brown)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A plumbus is an all-purpose home device. Get your first plumbus today! Even Jerry can use it.
          </motion.p>
          
          {/* Large Plumbus Illustration */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <PlumbusSVG />
          </motion.div>
          
          {/* Enhanced CTA Button with personality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0],
              }}
              whileTap={{ 
                scale: 0.98,
                rotate: -2
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17,
                rotate: { duration: 0.3 }
              }}
            >
              <button 
                className="button-primary whimsy-button px-8 py-4 text-lg font-semibold portal-gun-effect science-approved"
                onClick={() => {
                  console.log('Wubba lubba dub dub! *burp* Initiating plumbus acquisition protocol...');
                  // Trigger global easter egg
                  if ((window as any).triggerEasterEgg) {
                    (window as any).triggerEasterEgg('*burp* Excellent choice, Morty! Plumbus acquisition in progress!', 'rick');
                  }
                }}
              >
                <span className="inline-flex items-center gap-2">
                  Get Your Plumbus
                  <motion.span
                    animate={{ 
                      x: [0, 3, 0],
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      rotate: { duration: 2, repeat: Infinity },
                      scale: { duration: 1, repeat: Infinity }
                    }}
                  >
                    🛸
                  </motion.span>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Assembly Process Section */}
      <section className="section-white">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How a Plumbus is Made
          </motion.h2>
          
          <div className="process-container">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0]
              }}
            >
              <div className="plumbus-card step-1 process-step assembly-step-wobble">
                <motion.div 
                  className="process-step-number"
                  whileHover={{ scale: 1.2, color: 'var(--white)' }}
                >1</motion.div>
                <h3 className="card-title text-center mb-3">Fleeb Preparation</h3>
                <p className="text-sm text-center leading-relaxed">First, they take the dingle-bop (Rick-approved process)</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0]
              }}
            >
              <div className="plumbus-card step-2 process-step assembly-step-wobble">
                <motion.div 
                  className="process-step-number"
                  whileHover={{ scale: 1.2, color: 'var(--white)' }}
                >2</motion.div>
                <h3 className="card-title text-center mb-3">Grumbo Assembly</h3>
                <p className="text-sm text-center leading-relaxed">Then smooth it out with schleem (*burp* quality schleem)</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0]
              }}
            >
              <div className="plumbus-card step-3 process-step assembly-step-wobble">
                <motion.div 
                  className="process-step-number"
                  whileHover={{ scale: 1.2, color: 'var(--white)' }}
                >3</motion.div>
                <h3 className="card-title text-center mb-3">Schlami Processing</h3>
                <p className="text-sm text-center leading-relaxed">The schlami shows up and rubs it (not like Jerry would)</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, -1, 0]
              }}
            >
              <div className="plumbus-card step-4 process-step assembly-step-wobble">
                <motion.div 
                  className="process-step-number"
                  whileHover={{ scale: 1.2, color: 'var(--white)' }}
                >4</motion.div>
                <h3 className="card-title text-center mb-3">Final Touches</h3>
                <p className="text-sm text-center leading-relaxed">Cut the fleeb and you have a plumbus (Science!)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-beige">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-start mb-8"
            >
              <div className="max-w-sm">
                <div className="plumbus-testimonial floating-gentle">
                  <div className="testimonial-content">
                    "I don't know how I ever lived without a plumbus"
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--step-blue)' }}>
                        R
                      </div>
                    </div>
                    <div className="testimonial-author-info">
                      <h4>Rulenein</h4>
                      <p>Plumbus Expert (Dimension C-137)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-end mb-8"
            >
              <div className="max-w-sm">
                <div className="plumbus-testimonial floating-gentle">
                  <div className="testimonial-content">
                    "The plumbus changed my life. It's wonderful!"
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--step-green)' }}>
                        G
                      </div>
                    </div>
                    <div className="testimonial-author-info">
                      <h4>Gumde</h4>
                      <p>Satisfied Customer (Not Jerry)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>
    </div>
  );
};
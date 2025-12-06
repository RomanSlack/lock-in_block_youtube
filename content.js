// Block YouTube immediately
document.documentElement.innerHTML = '';

// Create the blocked page
document.addEventListener('DOMContentLoaded', createBlockedPage);

// Also run immediately in case DOM is already ready
if (document.readyState !== 'loading') {
  createBlockedPage();
} else {
  // Fallback: create immediately anyway to ensure blocking
  createBlockedPage();
}

function createBlockedPage() {
  document.documentElement.innerHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Lock In</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          overflow: hidden;
          position: relative;
        }

        .viking-scene {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0.85;
        }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 40px;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 20px;
          border: 3px solid #c9a227;
          box-shadow: 0 0 60px rgba(201, 162, 39, 0.4);
        }

        h1 {
          font-size: 5rem;
          color: #c9a227;
          text-transform: uppercase;
          letter-spacing: 15px;
          text-shadow:
            0 0 10px #c9a227,
            0 0 20px #c9a227,
            0 0 40px #c9a227,
            0 0 80px #ff6b35;
          margin-bottom: 20px;
          animation: pulse 2s ease-in-out infinite;
        }

        .subtitle {
          color: #e8e8e8;
          font-size: 1.2rem;
          letter-spacing: 3px;
          opacity: 0.8;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        /* Animated waves at bottom */
        .waves {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          z-index: 5;
        }
      </style>
    </head>
    <body>
      <svg class="viking-scene" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <!-- Sky gradient -->
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#1a1a2e"/>
            <stop offset="40%" style="stop-color:#16213e"/>
            <stop offset="100%" style="stop-color:#0f3460"/>
          </linearGradient>
          <linearGradient id="sunsetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:0.8"/>
            <stop offset="100%" style="stop-color:#ff6b35;stop-opacity:0"/>
          </linearGradient>
          <linearGradient id="seaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#1e3a5f"/>
            <stop offset="100%" style="stop-color:#0a1628"/>
          </linearGradient>
          <linearGradient id="shipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#8b4513"/>
            <stop offset="100%" style="stop-color:#5c2e0a"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <!-- Sky background -->
        <rect width="1200" height="800" fill="url(#skyGrad)"/>

        <!-- Sunset glow -->
        <ellipse cx="600" cy="350" rx="400" ry="200" fill="url(#sunsetGrad)"/>

        <!-- Sun/Moon -->
        <circle cx="600" cy="280" r="60" fill="#ff9500" filter="url(#glow)" opacity="0.9"/>

        <!-- Stars -->
        <g fill="#fff" opacity="0.6">
          <circle cx="100" cy="80" r="1.5"/>
          <circle cx="200" cy="120" r="1"/>
          <circle cx="350" cy="60" r="1.5"/>
          <circle cx="500" cy="100" r="1"/>
          <circle cx="750" cy="70" r="2"/>
          <circle cx="900" cy="90" r="1"/>
          <circle cx="1050" cy="50" r="1.5"/>
          <circle cx="1100" cy="130" r="1"/>
          <circle cx="150" cy="180" r="1"/>
          <circle cx="1000" cy="160" r="1.5"/>
        </g>

        <!-- Sea -->
        <path d="M0 400 Q300 380 600 400 T1200 400 L1200 800 L0 800 Z" fill="url(#seaGrad)"/>

        <!-- Wave details -->
        <g stroke="#3a6ea5" stroke-width="1" fill="none" opacity="0.4">
          <path d="M0 420 Q150 410 300 420 T600 420 T900 420 T1200 420"/>
          <path d="M0 460 Q150 450 300 460 T600 460 T900 460 T1200 460"/>
          <path d="M0 500 Q150 490 300 500 T600 500 T900 500 T1200 500"/>
          <path d="M0 550 Q150 540 300 550 T600 550 T900 550 T1200 550"/>
        </g>

        <!-- Viking Ship 1 (Main - Center) -->
        <g transform="translate(500, 380)">
          <!-- Hull -->
          <path d="M0 80 Q50 100 150 100 Q250 100 300 80 L280 40 Q150 50 20 40 Z" fill="url(#shipGrad)" stroke="#3d1f0a" stroke-width="2"/>
          <!-- Hull details -->
          <path d="M30 50 L270 50" stroke="#c9a227" stroke-width="2"/>
          <g fill="#c9a227">
            <circle cx="50" cy="65" r="8"/>
            <circle cx="90" cy="65" r="8"/>
            <circle cx="130" cy="65" r="8"/>
            <circle cx="170" cy="65" r="8"/>
            <circle cx="210" cy="65" r="8"/>
            <circle cx="250" cy="65" r="8"/>
          </g>
          <!-- Dragon head -->
          <path d="M280 40 Q320 20 340 -20 Q330 -10 320 0 Q340 -30 350 -50 Q335 -25 320 -10 L300 30 Z" fill="#5c2e0a" stroke="#3d1f0a" stroke-width="1"/>
          <circle cx="335" cy="-35" r="3" fill="#ff6b35"/>
          <!-- Dragon tail -->
          <path d="M20 40 Q-10 20 -20 -10 Q0 10 10 30 Z" fill="#5c2e0a"/>
          <!-- Mast -->
          <rect x="145" y="-100" width="10" height="150" fill="#5c2e0a"/>
          <!-- Sail -->
          <path d="M155 -90 Q250 -60 250 20 L155 20 Z" fill="#8b0000" stroke="#5c0000" stroke-width="2"/>
          <!-- Sail stripes -->
          <path d="M155 -50 L230 -30" stroke="#c9a227" stroke-width="3"/>
          <path d="M155 -10 L245 5" stroke="#c9a227" stroke-width="3"/>
          <!-- Vikings silhouettes -->
          <g fill="#1a1a2e">
            <ellipse cx="60" cy="35" rx="10" ry="15"/>
            <ellipse cx="100" cy="35" rx="10" ry="15"/>
            <ellipse cx="140" cy="35" rx="10" ry="15"/>
            <ellipse cx="180" cy="35" rx="10" ry="15"/>
            <ellipse cx="220" cy="35" rx="10" ry="15"/>
          </g>
          <!-- Oars -->
          <g stroke="#5c2e0a" stroke-width="3">
            <line x1="50" y1="75" x2="30" y2="120" transform="rotate(-20, 50, 75)"/>
            <line x1="90" y1="75" x2="70" y2="120" transform="rotate(-15, 90, 75)"/>
            <line x1="130" y1="75" x2="110" y2="120" transform="rotate(-10, 130, 75)"/>
            <line x1="170" y1="75" x2="150" y2="120" transform="rotate(10, 170, 75)"/>
            <line x1="210" y1="75" x2="190" y2="120" transform="rotate(15, 210, 75)"/>
            <line x1="250" y1="75" x2="230" y2="120" transform="rotate(20, 250, 75)"/>
          </g>
        </g>

        <!-- Viking Ship 2 (Left - smaller/distant) -->
        <g transform="translate(100, 450) scale(0.6)">
          <path d="M0 80 Q50 100 150 100 Q250 100 300 80 L280 40 Q150 50 20 40 Z" fill="#4a3728" stroke="#2d1f14" stroke-width="2"/>
          <path d="M280 40 Q320 20 340 -20 Q335 -25 320 -10 L300 30 Z" fill="#3d2817"/>
          <rect x="145" y="-80" width="8" height="120" fill="#3d2817"/>
          <path d="M153 -70 Q230 -45 230 15 L153 15 Z" fill="#6b0000"/>
          <g fill="#0a0a15" opacity="0.7">
            <ellipse cx="80" cy="35" rx="8" ry="12"/>
            <ellipse cx="130" cy="35" rx="8" ry="12"/>
            <ellipse cx="180" cy="35" rx="8" ry="12"/>
          </g>
        </g>

        <!-- Viking Ship 3 (Right - smaller/distant) -->
        <g transform="translate(950, 420) scale(0.5)">
          <path d="M0 80 Q50 100 150 100 Q250 100 300 80 L280 40 Q150 50 20 40 Z" fill="#4a3728" stroke="#2d1f14" stroke-width="2"/>
          <path d="M280 40 Q320 20 340 -20 Q335 -25 320 -10 L300 30 Z" fill="#3d2817"/>
          <rect x="145" y="-80" width="8" height="120" fill="#3d2817"/>
          <path d="M153 -70 Q230 -45 230 15 L153 15 Z" fill="#6b0000"/>
        </g>

        <!-- Flying birds -->
        <g fill="none" stroke="#1a1a2e" stroke-width="2" opacity="0.6">
          <path d="M400 200 Q410 190 420 200 Q430 190 440 200"/>
          <path d="M450 180 Q460 170 470 180 Q480 170 490 180"/>
          <path d="M700 220 Q710 210 720 220 Q730 210 740 220"/>
          <path d="M750 190 Q758 182 766 190 Q774 182 782 190"/>
        </g>

        <!-- Battle effects - arrows in the air -->
        <g stroke="#3d2817" stroke-width="2">
          <line x1="300" y1="350" x2="320" y2="340"/>
          <line x1="850" y1="380" x2="830" y2="370"/>
          <line x1="650" y1="320" x2="670" y2="310"/>
        </g>

        <!-- Fire/torch glow on ships -->
        <g filter="url(#glow)">
          <circle cx="550" cy="350" r="5" fill="#ff6b35" opacity="0.8"/>
          <circle cx="750" cy="360" r="4" fill="#ff6b35" opacity="0.6"/>
          <circle cx="170" cy="460" r="3" fill="#ff6b35" opacity="0.5"/>
        </g>

        <!-- Fog/mist at water level -->
        <g opacity="0.3">
          <ellipse cx="300" cy="600" rx="200" ry="50" fill="#3a6ea5"/>
          <ellipse cx="800" cy="650" rx="250" ry="60" fill="#3a6ea5"/>
          <ellipse cx="1100" cy="580" rx="150" ry="40" fill="#3a6ea5"/>
        </g>
      </svg>

      <div class="content">
        <h1>Lock In</h1>
        <p class="subtitle">The battle awaits. Focus on your conquest.</p>
      </div>
    </body>
    </html>
  `;
}

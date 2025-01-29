import React from 'react';

interface VikingShipProps {
  className?: string;
}

export const VikingShip: React.FC<VikingShipProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 800 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sky Gradient */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a1f2c', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2d3748', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#234e70', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#162a3a', stopOpacity: 0.9 }} />
        </linearGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#ffd700', stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: '#ffd700', stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="400" fill="url(#skyGradient)" />

      {/* Stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 800}
          cy={Math.random() * 200}
          r={Math.random() * 1.5}
          fill="#fff"
          opacity={Math.random() * 0.8 + 0.2}
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur={`${Math.random() * 3 + 2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Moon and Glow */}
      <circle cx="650" cy="80" r="40" fill="#ffd700" opacity="0.9" />
      <circle cx="650" cy="80" r="60" fill="url(#moonGlow)" />

      {/* Water */}
      <path
        d="M0 250 Q400 220 800 250 L800 400 L0 400 Z"
        fill="url(#waterGradient)"
      >
        <animate
          attributeName="d"
          values="M0 250 Q400 220 800 250 L800 400 L0 400 Z;
                  M0 250 Q400 280 800 250 L800 400 L0 400 Z;
                  M0 250 Q400 220 800 250 L800 400 L0 400 Z"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Ship Hull */}
      <path
        d="M200 260 C300 260 500 260 600 260 C620 260 640 280 600 300 L200 300 C160 280 180 260 200 260 Z"
        fill="#8B4513"
        stroke="#654321"
        strokeWidth="2"
      >
        <animate
          attributeName="d"
          values="M200 260 C300 260 500 260 600 260 C620 260 640 280 600 300 L200 300 C160 280 180 260 200 260 Z;
                  M200 265 C300 265 500 265 600 265 C620 265 640 285 600 305 L200 305 C160 285 180 265 200 265 Z;
                  M200 260 C300 260 500 260 600 260 C620 260 640 280 600 300 L200 300 C160 280 180 260 200 260 Z"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Dragon Head */}
      <path
        d="M600 250 C620 250 640 260 650 270 C660 280 670 260 680 250 C690 240 670 230 660 240 C650 250 640 240 630 230 Z"
        fill="#8B4513"
        stroke="#654321"
        strokeWidth="2"
      >
        <animate
          attributeName="d"
          values="M600 250 C620 250 640 260 650 270 C660 280 670 260 680 250 C690 240 670 230 660 240 C650 250 640 240 630 230 Z;
                  M600 255 C620 255 640 265 650 275 C660 285 670 265 680 255 C690 245 670 235 660 245 C650 255 640 245 630 235 Z;
                  M600 250 C620 250 640 260 650 270 C660 280 670 260 680 250 C690 240 670 230 660 240 C650 250 640 240 630 230 Z"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Shield Row */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`translate(${250 + i * 50}, 245)`}>
          <circle
            cx="0"
            cy="0"
            r="15"
            fill="#cd7f32"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <path
            d="M-8 0 L8 0 M0 -8 L0 8"
            stroke="#8B4513"
            strokeWidth="2"
          />
        </g>
      ))}

      {/* Sail */}
      <path
        d="M350 100 L450 100 L450 250 L350 250 Z"
        fill="#edf2f7"
        opacity="0.9"
      >
        <animate
          attributeName="d"
          values="M350 100 L450 100 L450 250 L350 250 Z;
                  M360 100 L460 100 L450 250 L350 250 Z;
                  M350 100 L450 100 L450 250 L350 250 Z"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Sail Designs */}
      <path
        d="M370 130 L430 130 M370 170 L430 170 M370 210 L430 210"
        stroke="#4a5568"
        strokeWidth="2"
      />

      {/* Mast */}
      <rect x="395" y="100" width="10" height="160" fill="#8B4513" />

      {/* Waves */}
      {Array.from({ length: 5 }).map((_, i) => (
        <path
          key={i}
          d={`M${i * 200} ${280 + i * 20} Q${100 + i * 200} ${270 + i * 20} ${200 + i * 200} ${280 + i * 20}`}
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
        >
          <animate
            attributeName="d"
            values={`M${i * 200} ${280 + i * 20} Q${100 + i * 200} ${270 + i * 20} ${200 + i * 200} ${280 + i * 20};
                    M${i * 200} ${280 + i * 20} Q${100 + i * 200} ${290 + i * 20} ${200 + i * 200} ${280 + i * 20};
                    M${i * 200} ${280 + i * 20} Q${100 + i * 200} ${270 + i * 20} ${200 + i * 200} ${280 + i * 20}`}
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
      ))}
    </svg>
  );
};
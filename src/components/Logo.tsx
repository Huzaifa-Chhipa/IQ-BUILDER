import React from 'react';

interface LogoProps {
  className?: string; // Additional classes for custom sizing/margins
  height?: number | string; // Height of the SVG
  variant?: 'horizontal' | 'vertical' | 'icon'; // Style variants
  textColor?: string; // Text color modification if needed
}

export default function Logo({
  className = '',
  height = 48,
  variant = 'horizontal',
  textColor = 'text-white'
}: LogoProps) {
  // We'll define distinct gradients to create the metallic, gold-plated, reflective finish seen in the uploaded image.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={variant === 'icon' ? '0 0 115 115' : variant === 'vertical' ? '0 0 160 200' : '0 0 540 135'}
      height={height}
      className={`inline-block select-none ${className}`}
      aria-label="IQ Builders & Developers Logo"
    >
      <defs>
        {/* Rich metallic reflective gold gradient for the standard elements */}
        <linearGradient id="gold-metallic" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9a7a35" />
          <stop offset="20%" stopColor="#caa75b" />
          <stop offset="40%" stopColor="#fdf0cd" />
          <stop offset="60%" stopColor="#caa75b" />
          <stop offset="80%" stopColor="#9a7a35" />
          <stop offset="100%" stopColor="#caa75b" />
        </linearGradient>

        {/* Brighter gradient for highlights on building facets */}
        <linearGradient id="gold-bright" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff3d1" />
          <stop offset="50%" stopColor="#e3c27a" />
          <stop offset="100%" stopColor="#b48f43" />
        </linearGradient>

        {/* Deeper gradient for shading/3D bevel effects */}
        <linearGradient id="gold-deep" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#efdfad" />
          <stop offset="45%" stopColor="#bfa35b" />
          <stop offset="90%" stopColor="#7a5d1f" />
          <stop offset="100%" stopColor="#4e3b12" />
        </linearGradient>

        {/* Text metallic gradient */}
        <linearGradient id="gold-text" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b8974a" />
          <stop offset="30%" stopColor="#caa75b" />
          <stop offset="50%" stopColor="#fff1cc" />
          <stop offset="70%" stopColor="#caa75b" />
          <stop offset="100%" stopColor="#a3823c" />
        </linearGradient>

        {/* Drop shadow for 3D depth */}
        <filter id="logo-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* RENDER VARIANT: ICON ONLY (The Circular Seals + Building + IQ letters) */}
      {(variant === 'icon' || variant === 'horizontal' || variant === 'vertical') && (
        <g 
          id="emblem-group" 
          filter="url(#logo-shadow)" 
          transform={variant === 'vertical' ? 'translate(22, 10)' : undefined}
        >
          {/* Outer circle double gold ring */}
          <circle 
            cx="57" 
            cy="57" 
            r="50" 
            fill="none" 
            stroke="url(#gold-metallic)" 
            strokeWidth="2" 
          />
          <circle 
            cx="57" 
            cy="57" 
            r="46" 
            fill="none" 
            stroke="url(#gold-metallic)" 
            strokeWidth="1" 
          />

          {/* BACKGROUND BUILDINGS (Modern architectural towers inside circular frame) */}
          {/* Tower 1 (Left background building) */}
          <path 
            d="M 38 78 L 38 52 L 44 45 L 44 78 Z" 
            fill="url(#gold-deep)" 
          />
          {/* Tower 2 (Middle left - secondary tall) */}
          <path 
            d="M 46 78 L 46 36 L 53 28 L 53 78 Z" 
            fill="url(#gold-bright)" 
          />
          {/* Tower 3 (Center tall skyscraper - pointing sloped roof with 3D bevels) */}
          <path 
            d="M 55 78 L 55 23 L 64 33 L 64 78 Z" 
            fill="url(#gold-deep)" 
          />
          <path 
            d="M 55 23 L 55 13 L 64 23 L 64 33 Z" /* Sloped pitched crown highlight */
            fill="url(#gold-bright)" 
          />
          {/* Tower 4 (Right side building) */}
          <path 
            d="M 66 78 L 66 43 L 73 35 L 73 78 Z" 
            fill="url(#gold-deep)" 
          />

          {/* OVERLAPPING "I" AND "Q" GRAPHICS (Embedded beautifully into the seal as seen in the uploaded file) */}
          {/* Letter "I" graphic on Left side */}
          <g transform="translate(14, 45)">
            {/* Top serif */}
            <path d="M 12 7 L 24 7 L 24 12 L 21 12 L 21 34 L 24 34 L 24 39 L 12 39 L 12 34 L 15 34 L 15 12 L 12 12 Z" fill="url(#gold-metallic)" />
            {/* Center core highlight */}
            <path d="M 16 12 L 18 12 L 18 34 L 16 34 Z" fill="#fff9e6" opacity="0.3" />
          </g>

          {/* Letter "Q" graphic on Right side */}
          <g transform="translate(48, 48)">
            {/* Main O-Ring body of Q */}
            <path 
              d="M 24 24 C 24 14, 33 11, 40 11 C 47 11, 56 15, 56 24 C 56 33, 47 37, 40 37 C 33 37, 24 33, 24 24 Z" 
              fill="none" 
              stroke="url(#gold-metallic)" 
              strokeWidth="7" 
            />
            {/* Outer tail of Q */}
            <path 
              d="M 45 30 L 58 43 L 52 48 L 39 34 Z" 
              fill="url(#gold-metallic)" 
            />
            {/* Inner shading for the curve */}
            <path 
              d="M 27 24 C 27 17, 34 14, 40 14 C 46 14, 53 17, 53 24 Z" 
              fill="none" 
              stroke="#fff9e6" 
              strokeWidth="1.5" 
              opacity="0.2" 
            />
          </g>
        </g>
      )}

      {/* RENDER VARIANT: HORIZONTAL TEXT (Perfect for Navbars and Footers where space is landscape) */}
      {variant === 'horizontal' && (
        <g transform="translate(130, 0)">
          {/* I.Q Main Heading */}
          <text
            x="0"
            y="62"
            fontFamily="'Cinzel', 'Playfair Display', 'Didot', 'Georgia', serif"
            fontSize="68"
            fontWeight="bold"
            fill="url(#gold-text)"
            letterSpacing="8"
            filter="url(#logo-shadow)"
          >
            I.Q
          </text>

          {/* BUILDERS Text */}
          <text
            x="4"
            y="94"
            fontFamily="'Montserrat', 'Inter', 'Space Grotesk', sans-serif"
            fontSize="24"
            fontWeight="700"
            letterSpacing="19"
            fill="url(#gold-text)"
          >
            BUILDERS
          </text>

          {/* & DEVELOPERS Sub-text with flanking lines */}
          <g transform="translate(0, 115)">
            {/* Left line */}
            <line x1="4" y1="-7" x2="105" y2="-7" stroke="url(#gold-metallic)" strokeWidth="1.5" />
            
            {/* Center Label */}
            <text
              x="115"
              y="0"
              fontFamily="'Montserrat', 'Inter', 'Space Grotesk', sans-serif"
              fontSize="12.5"
              fontWeight="700"
              letterSpacing="3.5"
              fill="url(#gold-text)"
            >
              & DEVELOPERS
            </text>
            
            {/* Right line */}
            <line x1="262" y1="-7" x2="363" y2="-7" stroke="url(#gold-metallic)" strokeWidth="1.5" />
          </g>
        </g>
      )}

      {/* RENDER VARIANT: VERTICAL TEXT (Ideal for centered splash screens or card states) */}
      {variant === 'vertical' && (
        <g transform="translate(0, 125)">
          {/* I.Q Heading */}
          <text
            x="80"
            y="15"
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', 'Georgia', serif"
            fontSize="38"
            fontWeight="bold"
            fill="url(#gold-text)"
            letterSpacing="4"
          >
            I.Q
          </text>

          {/* BUILDERS */}
          <text
            x="80"
            y="38"
            textAnchor="middle"
            fontFamily="'Montserrat', 'Inter', sans-serif"
            fontSize="14"
            fontWeight="700"
            letterSpacing="9"
            fill="url(#gold-text)"
          >
            BUILDERS
          </text>

          {/* & DEVELOPERS */}
          <text
            x="80.5"
            y="52"
            textAnchor="middle"
            fontFamily="'Montserrat', 'Inter', sans-serif"
            fontSize="8"
            fontWeight="700"
            letterSpacing="2"
            fill="url(#gold-text)"
          >
            & DEVELOPERS
          </text>
        </g>
      )}
    </svg>
  );
}

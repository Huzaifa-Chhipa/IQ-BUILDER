import React from 'react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string; // Additional classes for custom sizing/margins
  height?: number | string; // Height of the image
  variant?: 'horizontal' | 'vertical' | 'icon'; // Style variants (kept for compatibility)
}

export default function Logo({
  className = '',
  height = 48,
  variant = 'horizontal'
}: LogoProps) {
  return (
    <img 
      src={logoImg} 
      alt="IQ Builders & Developers Logo" 
      height={height} 
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
      className={`inline-block select-none object-contain ${className}`}
    />
  );
}

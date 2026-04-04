"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ShapeGridProps {
  speed?: number;
  squareSize?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  borderColor?: string;
  hoverFillColor?: string;
  shape?: 'square' | 'hexagon' | 'circle' | 'triangle';
  hoverTrailAmount?: number;
  className?: string;
  size?: number;
  hoverColor?: string;
}

export default function ShapeGrid({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor = '#fff',
  hoverFillColor = '#222',
  shape = 'square',
  hoverTrailAmount = 0,
  className,
  size,
  hoverColor
}: ShapeGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState<{ rows: number; cols: number }>({ rows: 0, cols: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const finalSize = size || squareSize;
  const finalHoverColor = hoverColor || hoverFillColor;

  useEffect(() => {
    const updateGrid = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const cols = Math.ceil(width / finalSize);
        const rows = Math.ceil(height / finalSize);
        setGrid({ rows, cols });
      }
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, [finalSize]);

  const renderShape = (index: number) => {
    const isHovered = hoveredIndex === index;
    
    const baseStyle = {
      width: finalSize,
      height: finalSize,
      border: `1px solid ${borderColor}`,
      transition: 'background-color 0.3s ease',
      backgroundColor: isHovered ? finalHoverColor : 'transparent',
    };

    if (shape === 'circle') {
      return <div key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} style={{ ...baseStyle, borderRadius: '50%' }} />;
    }

    if (shape === 'triangle') {
      return (
        <div 
          key={index} 
          onMouseEnter={() => setHoveredIndex(index)} 
          onMouseLeave={() => setHoveredIndex(null)} 
          style={{ 
            ...baseStyle, 
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            border: 'none',
            backgroundColor: isHovered ? finalHoverColor : `${borderColor}20`
          }} 
        />
      );
    }

    return (
      <div 
        key={index} 
        onMouseEnter={() => setHoveredIndex(index)} 
        onMouseLeave={() => setHoveredIndex(null)} 
        style={baseStyle} 
      />
    );
  };

  return (
    <div 
      ref={containerRef} 
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      style={{ zIndex: 0 }}
    >
      <div 
        className="grid pointer-events-auto"
        style={{ 
          gridTemplateColumns: `repeat(${grid.cols}, ${finalSize}px)`,
          gridTemplateRows: `repeat(${grid.rows}, ${finalSize}px)`,
          opacity: 0.1
        }}
      >
        {Array.from({ length: grid.rows * grid.cols }).map((_, i) => renderShape(i))}
      </div>
      
      {/* Animation Overlay */}
      <motion.div
        animate={{
          x: direction === 'left' ? [-finalSize, 0] : direction === 'right' ? [0, -finalSize] : 0,
          y: direction === 'up' ? [-finalSize, 0] : direction === 'down' ? [0, -finalSize] : 0,
          rotate: direction === 'diagonal' ? [0, 1] : 0
        }}
        transition={{
          duration: 10 / speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(${borderColor} 1px, transparent 1px), linear-gradient(90deg, ${borderColor} 1px, transparent 1px)`,
          backgroundSize: `${finalSize}px ${finalSize}px`,
          transform: direction === 'diagonal' ? 'rotate(45deg) scale(2)' : 'none'
        }}
      />
    </div>
  );
}

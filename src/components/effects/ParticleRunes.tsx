import React, { useEffect, useRef } from 'react';

interface Rune {
  x: number;
  y: number;
  char: string;
  opacity: number;
  speed: number;
}

const runeChars = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ'];

export const ParticleRunes: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runes = useRef<Rune[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createRune = () => {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        char: runeChars[Math.floor(Math.random() * runeChars.length)],
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 2 + 1
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (runes.current.length < 50 && Math.random() < 0.1) {
        runes.current.push(createRune());
      }

      ctx.font = '20px Arial';
      runes.current = runes.current.filter(rune => {
        rune.y += rune.speed;
        ctx.fillStyle = `rgba(202, 138, 4, ${rune.opacity})`;
        ctx.fillText(rune.char, rune.x, rune.y);
        return rune.y < canvas.height;
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
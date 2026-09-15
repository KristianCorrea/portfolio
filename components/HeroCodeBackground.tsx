'use client';

import { useEffect, useRef } from 'react';

const CODE_TERMS = [
  'const',
  'let',
  'async',
  'await',
  'function',
  '=>',
  'return',
  'import',
  'export',
  'class',
  'Promise',
  'fetch',
  'React',
  'TypeScript',
  'useState',
  'useEffect',
  'npm',
  'git',
  'JSON',
  'DOM',
  'map()',
  'filter()',
  '===',
  '{}',
  '[]',
  'null',
  'true',
  'false',
  'console.log()',
  '() => {}',
  'try/catch',
  'interface',
  'typeof',
  'undefined',
  'API',
  'Next.js',
];

interface Particle {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  fontSize: number;
  opacity: number;
  width: number;
  height: number;
  bounceFactor: number;
}

const FRICTION = 0.994;
const MAX_SPEED = 12;

function createParticles(width: number, height: number): Particle[] {
  return CODE_TERMS.map((text) => {
    const fontSize = 12 + Math.random() * 11;
    const widthEstimate = text.length * (fontSize * 0.58);
    const particleHeight = fontSize * 1.4;

    return {
      text,
      x: Math.random() * Math.max(1, width - widthEstimate),
      y: Math.random() * Math.max(1, height - particleHeight),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      fontSize,
      opacity: 0.22 + Math.random() * 0.2,
      width: widthEstimate,
      height: particleHeight,
      bounceFactor: 0.55 + Math.random() * 0.55,
    };
  });
}

function clampSpeed(vx: number, vy: number) {
  const speed = Math.hypot(vx, vy);
  if (speed <= MAX_SPEED) return { vx, vy };
  const scale = MAX_SPEED / speed;
  return { vx: vx * scale, vy: vy * scale };
}

function applyRandomBounce(
  particle: Particle,
  axis: 'x' | 'y',
  direction: 1 | -1
) {
  const restitution =
    particle.bounceFactor * (0.75 + Math.random() * 0.45);
  const kick = 0.8 + Math.random() * 3.5;

  if (axis === 'x') {
    particle.vx =
      direction * Math.max(Math.abs(particle.vx), kick * 0.4) * restitution;
    particle.vy += (Math.random() - 0.5) * kick;
  } else {
    particle.vy =
      direction * Math.max(Math.abs(particle.vy), kick * 0.4) * restitution;
    particle.vx += (Math.random() - 0.5) * kick;

    // Bottom wall: extra upward scatter so words don't pile up
    if (direction === -1) {
      particle.vy -= kick + Math.random() * 4;
    }
  }
}

const HeroCodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>();
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const { width, height } = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particlesRef.current.length === 0) {
        particlesRef.current = createParticles(width, height);
      } else {
        particlesRef.current.forEach((p) => {
          p.x = Math.min(p.x, Math.max(0, width - p.width));
          p.y = Math.min(p.y, Math.max(0, height - p.height));
        });
      }

      if (reducedMotion) {
        ctx.clearRect(0, 0, width, height);
        ctx.font =
          '500 13px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
        particlesRef.current.forEach((p) => {
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = '#64748b';
          ctx.fillText(p.text, p.x, p.y + p.fontSize);
        });
        ctx.globalAlpha = 1;
      }
    };

    const onScroll = () => {
      if (reducedMotion) return;

      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollRef.current;
      lastScrollRef.current = scrollY;

      if (Math.abs(delta) < 1.5) return;

      const cappedDelta = Math.sign(delta) * Math.min(Math.abs(delta), 6);
      const impulse = cappedDelta * 0.045;

      particlesRef.current.forEach((p) => {
        p.vy += impulse;
        p.vx += (Math.random() - 0.5) * Math.abs(impulse) * 0.35;
      });
    };

    const tick = () => {
      const parent = canvas.parentElement;
      if (!parent || reducedMotion) return;

      const { width, height } = parent.getBoundingClientRect();
      const particles = particlesRef.current;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= FRICTION;
        p.vy *= FRICTION;

        if (p.x <= 0) {
          p.x = 0;
          applyRandomBounce(p, 'x', 1);
        } else if (p.x + p.width >= width) {
          p.x = width - p.width;
          applyRandomBounce(p, 'x', -1);
        }

        if (p.y <= p.fontSize) {
          p.y = p.fontSize;
          applyRandomBounce(p, 'y', 1);
        } else if (p.y + p.height * 0.5 >= height) {
          p.y = height - p.height * 0.5;
          applyRandomBounce(p, 'y', -1);
        }

        const clamped = clampSpeed(p.vx, p.vy);
        p.vx = clamped.vx;
        p.vy = clamped.vy;

        ctx.globalAlpha = p.opacity;
        ctx.font = `500 ${p.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        ctx.fillStyle = '#64748b';
        ctx.fillText(p.text, p.x, p.y + p.fontSize);
      });

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    lastScrollRef.current = window.scrollY;

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement!);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);

    if (!reducedMotion) {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
};

export default HeroCodeBackground;

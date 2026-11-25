import { useEffect, useRef } from 'react';

const STAR_COUNT = 160;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function StarCanvas() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Seed stars
    starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: randomBetween(0.3, 1.8),
      alpha: randomBetween(0.2, 1),
      speed: randomBetween(0.3, 1.2),
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.6
        ? `rgba(123,208,255,`    // cyan
        : Math.random() > 0.5
          ? `rgba(192,193,255,`  // primary periwinkle
          : `rgba(221,183,255,`, // tertiary violet
    }));

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const stars = starsRef.current;
      for (const s of stars) {
        const alpha = s.alpha * (0.4 + 0.6 * Math.abs(Math.sin(t * s.speed + s.phase)));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${alpha.toFixed(2)})`;
        ctx.fill();
        // 4-point sparkle for larger stars
        if (s.r > 1.3) {
          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.globalAlpha = alpha * 0.5;
          ctx.strokeStyle = `${s.color}${(alpha * 0.5).toFixed(2)})`;
          ctx.lineWidth = 0.5;
          const len = s.r * 3;
          ctx.beginPath(); ctx.moveTo(0, -len); ctx.lineTo(0, len); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(-len, 0); ctx.lineTo(len, 0); ctx.stroke();
          ctx.restore();
        }
      }
      t += 0.012;
      animRef.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas id="star-canvas" ref={canvasRef} />;
}

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export const HeroParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Molecular nodes
    const nodeCount = 38;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
      alpha: number;
      pulse: number;
    }> = [];

    const colors = [
      'rgba(201, 155, 90, ', // honey
      'rgba(134, 169, 155, ', // eucalyptus
      'rgba(183, 169, 188, ', // lavender
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (shouldReduceMotion ? 0 : 0.35),
        vy: (Math.random() - 0.5) * (shouldReduceMotion ? 0 : 0.35),
        radius: Math.random() * 3.5 + 1.5,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.25,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting filaments
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.22;
            ctx.strokeStyle = `rgba(201, 155, 90, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!shouldReduceMotion) {
          node.x += node.vx;
          node.y += node.vy;
          node.pulse += 0.02;

          // Gentle mouse attraction/repulsion
          if (mouseActive) {
            const mdx = mouseX - node.x;
            const mdy = mouseY - node.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 140 && mdist > 5) {
              node.x += (mdx / mdist) * 0.25;
              node.y += (mdy / mdist) * 0.25;
            }
          }

          // Wall bounce with dampening
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        const dynamicAlpha = shouldReduceMotion
          ? node.alpha
          : node.alpha + Math.sin(node.pulse) * 0.12;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${node.baseColor}${Math.max(0.1, dynamicAlpha)})`;
        ctx.shadowColor = '#C99B5A';
        ctx.shadowBlur = node.radius * 2.5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 pointer-events-auto opacity-70 sm:opacity-85 mix-blend-screen overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

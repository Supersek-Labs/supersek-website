import React, { useRef, useEffect, useCallback } from 'react';

const ParticleWave = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null });
    const animationRef = useRef(null);
    const particlesRef = useRef([]);
    const dimensionsRef = useRef({ width: 0, height: 0 });

    const initParticles = useCallback((width, height) => {
        const particles = [];
        // Tighter grid spacing for a denser wave field
        const spacingX = 22;
        const spacingY = 22;
        const cols = Math.ceil(width / spacingX) + 4;
        const rows = Math.ceil(height / spacingY) + 4;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                particles.push({
                    originX: col * spacingX,
                    originY: row * spacingY,
                    x: col * spacingX,
                    y: row * spacingY,
                    // Give each particle a phase offset based on its X position to create a traveling wave
                    phase: (col * 0.1) + (row * 0.05),
                    // Slightly vary speed per particle
                    speed: 0.4 + Math.random() * 0.2,
                    // Vertical amplitude for the wave
                    amplitude: 15 + Math.random() * 5,
                    // Base size
                    size: 1.0 + Math.random() * 0.8,
                });
            }
        }
        return particles;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const handleResize = () => {
            const parent = canvas.parentElement;
            const width = parent.offsetWidth;
            const height = parent.offsetHeight;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.scale(dpr, dpr);
            dimensionsRef.current = { width, height };
            particlesRef.current = initParticles(width, height);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: null, y: null };
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        let time = 0;

        const animate = () => {
            const { width, height } = dimensionsRef.current;
            ctx.clearRect(0, 0, width, height);

            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            time += 0.008;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Wave displacement - create a traveling wave moving horizontally
                // Use global time + particle's unique phase based on position
                const globalWavePhase = time * 2.5 + p.phase;

                // Horizontal drift
                const waveX = Math.sin(globalWavePhase * 0.5) * (p.amplitude * 0.3);

                // Vertical wavering (the main wave effect)
                const waveY = Math.sin(globalWavePhase) * p.amplitude;

                p.x = p.originX + waveX;
                p.y = p.originY + waveY;

                // Mouse interaction — push particles away
                let mouseInfluence = 0;
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 350; // Vastly increased interaction radius
                    if (dist < maxDist) {
                        const force = (1 - dist / maxDist) * 35; // Increased push force
                        p.x += (dx / dist) * force;
                        p.y += (dy / dist) * force;
                        mouseInfluence = 1 - dist / maxDist;
                    }
                }

                // Opacity based on position — fade edges for a natural look
                const edgeFadeX = Math.min(p.x / 80, (width - p.x) / 80, 1);
                const edgeFadeY = Math.min(p.y / 80, (height - p.y) / 80, 1);
                const edgeFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));

                // Base opacity with subtle wave-based variation
                const baseOpacity = 0.15 + Math.sin(time + p.phase) * 0.08;
                const opacity = Math.max(0, (baseOpacity + mouseInfluence * 0.4) * edgeFade);

                // Size grows slightly near mouse
                const size = p.size + mouseInfluence * 1.5;

                // Draw dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [initParticles]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
                zIndex: 0,
            }}
        />
    );
};

export default ParticleWave;

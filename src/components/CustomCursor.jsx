import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Use motion values for better performance (no re-renders on mouse move)
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smooth spring for the outer ring
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const ringX = useSpring(cursorX, springConfig);
    const ringY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check for touch device
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        setIsTouchDevice(isTouch);
        if (isTouch) return;

        const handleMouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    if (isTouchDevice) return null;

    // Outer ring styles
    const outerSize = isHovering ? 56 : 32;
    const outerOffset = outerSize / 2;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: outerSize,
                    height: outerSize,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255, 255, 255, 0.6)',
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    x: ringX,
                    y: ringY,
                    translateX: -outerOffset,
                    translateY: -outerOffset,
                    opacity: isVisible ? 1 : 0,
                    scale: isHovering ? 1 : 1,
                }}
                animate={{
                    width: outerSize,
                    height: outerSize,
                    borderColor: isHovering ? 'rgba(99, 102, 241, 0.8)' : 'rgba(255, 255, 255, 0.6)',
                }}
                transition={{
                    width: { type: 'spring', stiffness: 300, damping: 20 },
                    height: { type: 'spring', stiffness: 300, damping: 20 },
                    borderColor: { duration: 0.2 },
                }}
            />

            {/* Inner dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    pointerEvents: 'none',
                    zIndex: 100000,
                    x: cursorX,
                    y: cursorY,
                    translateX: -4,
                    translateY: -4,
                    opacity: isVisible ? 1 : 0,
                }}
            />
        </>
    );
};

export default CustomCursor;

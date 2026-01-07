import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { to: '/philosophy', label: 'Philosophy' },
        { to: '/capabilities', label: 'Capabilities' },
        { to: '/training', label: 'Training' },
        { to: '/research', label: 'Research' },
        { to: '/contact', label: 'Contact' }
    ];

    return (
        <>
            <nav className="glass" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                height: '80px'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 clamp(1.5rem, 5vw, 3rem)',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <motion.a
                        href="/"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{
                            fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 800,
                            letterSpacing: '-0.01em',
                            textDecoration: 'none',
                            color: '#ffffff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'baseline',
                            position: 'relative',
                            zIndex: 1001
                        }}
                    >
                        <span style={{
                            background: 'linear-gradient(to right, #231ddb 0%, #231ddb 50%, #ffffff 50%)',
                            backgroundSize: '200% 100%',
                            backgroundPosition: '100% 0',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            transition: 'background-position 0.6s ease'
                        }}
                            onMouseEnter={(e) => e.target.style.backgroundPosition = '0% 0'}
                            onMouseLeave={(e) => e.target.style.backgroundPosition = '100% 0'}
                        >
                            SUPERSEK
                        </span>
                        <span style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#231ddb',
                            border: '1px solid #231ddb',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginLeft: '3px'
                        }} />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(1rem, 2vw, 2rem)'
                    }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#8A8A8A',
                                    cursor: 'pointer',
                                    fontSize: '0.8rem',
                                    fontWeight: 500,
                                    transition: 'color 0.3s',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                                onMouseLeave={(e) => e.target.style.color = '#8A8A8A'}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="mobile-menu-button"
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            zIndex: 1001,
                            position: 'relative'
                        }}
                        aria-label="Toggle menu"
                    >
                        <div style={{
                            width: '24px',
                            height: '20px',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <span style={{
                                width: '100%',
                                height: '2px',
                                backgroundColor: '#ffffff',
                                transition: 'all 0.3s ease',
                                transform: mobileMenuOpen ? 'rotate(45deg) translateY(9px)' : 'none'
                            }} />
                            <span style={{
                                width: '100%',
                                height: '2px',
                                backgroundColor: '#ffffff',
                                transition: 'all 0.3s ease',
                                opacity: mobileMenuOpen ? 0 : 1
                            }} />
                            <span style={{
                                width: '100%',
                                height: '2px',
                                backgroundColor: '#ffffff',
                                transition: 'all 0.3s ease',
                                transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-9px)' : 'none'
                            }} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'rgba(10, 10, 10, 0.98)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem',
                            padding: '2rem'
                        }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.to}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={link.to}
                                    onClick={closeMobileMenu}
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 500,
                                        color: '#8A8A8A',
                                        textDecoration: 'none',
                                        transition: 'color 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                                    onMouseLeave={(e) => e.target.style.color = '#8A8A8A'}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CSS for responsive behavior */}
            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-menu-button {
                        display: block !important;
                    }
                }
                @media (min-width: 769px) {
                    .mobile-menu {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;

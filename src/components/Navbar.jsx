import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
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
                padding: '0 3rem',
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
                        fontSize: '1.35rem',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 800,
                        letterSpacing: '-0.01em',
                        textDecoration: 'none',
                        color: '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'baseline',
                        position: 'relative'
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

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    <Link
                        to="/philosophy"
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#8A8A8A',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            transition: 'color 0.3s',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.target.style.color = '#8A8A8A'}
                    >
                        Philosophy
                    </Link>
                    <Link
                        to="/capabilities"
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#8A8A8A',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            transition: 'color 0.3s',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.target.style.color = '#8A8A8A'}
                    >
                        Capabilities
                    </Link>
                    <Link
                        to="/training"
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#8A8A8A',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            transition: 'color 0.3s',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.target.style.color = '#8A8A8A'}
                    >
                        Training
                    </Link>
                    <Link
                        to="/research"
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#8A8A8A',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            transition: 'color 0.3s',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.target.style.color = '#8A8A8A'}
                    >
                        Research
                    </Link>
                    <Link
                        to="/contact"
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#8A8A8A',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            transition: 'color 0.3s',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.target.style.color = '#8A8A8A'}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

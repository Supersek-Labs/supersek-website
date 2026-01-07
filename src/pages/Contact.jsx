import React from 'react';
import { motion } from 'framer-motion';
import founderImage from '../assets/founder.jpg';

const Contact = () => {
    return (
        <main style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <section id="hero" style={{
                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 2rem',
                position: 'relative'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1.75rem, 5.5vw, 4rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.2,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700
                    }}
                >
                    ENGAGE SUPERSEK
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        color: '#B3B3B3',
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
                        maxWidth: '800px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500
                    }}
                >
                    Security engagements built around real attack paths and production risk—applied where it matters, not where it's convenient.
                </motion.p>
            </section>

            {/* Founder Section */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '1400px',
                    width: '100%'
                }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(2.25rem, 7vw, 6rem)',
                            marginBottom: '4rem',
                            textAlign: 'center'
                        }}
                    >
                        INDEPENDENT.<br />FOUNDER-LED.
                    </motion.h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        {/* Founder Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <img
                                src={founderImage}
                                alt="Pushpak Vuppalapati"
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)'
                                }}
                            />
                        </motion.div>

                        {/* Founder Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 style={{
                                fontSize: 'clamp(1.35rem, 2.75vw, 2.25rem)',
                                marginBottom: '0.5rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 700,
                                textTransform: 'none',
                                letterSpacing: 'normal'
                            }}>
                                Pushpak Vuppalapati
                            </h3>
                            <p style={{
                                color: '#B3B3B3',
                                fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                                marginBottom: '0.5rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400
                            }}>
                                Independent Offensive Security Practitioner
                            </p>
                            <p style={{
                                color: '#8A8A8A',
                                fontSize: 'clamp(0.8rem, 1.35vw, 0.9rem)',
                                marginBottom: '2rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontStyle: 'italic'
                            }}>
                                (Known online as Superseker-One)
                            </p>

                            <p style={{
                                color: '#B3B3B3',
                                fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                                lineHeight: 1.6,
                                marginBottom: '1.5rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400
                            }}>
                                Supersek is a founder-led practice delivering hands-on security engagements across application and cloud environments.
                            </p>

                            <p style={{
                                color: '#B3B3B3',
                                fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                                lineHeight: 1.6,
                                marginBottom: '1.5rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400
                            }}>
                                The work is grounded in core security fundamentals and adversarial analysis, with an emphasis on how systems behave under real operational conditions.
                            </p>

                            <p style={{
                                color: '#B3B3B3',
                                fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                                lineHeight: 1.6,
                                marginBottom: '2.5rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400
                            }}>
                                Independent research informs each engagement, helping refine assumptions, improve analysis, and support well-reasoned security decisions.
                            </p>

                            <p style={{
                                color: '#B3B3B3',
                                fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                marginBottom: '0.5rem'
                            }}>
                                Get in touch:
                            </p>

                            <a
                                href="mailto:pushpak@supersek.com"
                                style={{
                                    color: '#B3B3B3',
                                    fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                                onMouseLeave={(e) => e.target.style.color = '#B3B3B3'}
                            >
                                pushpak@supersek.com
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;

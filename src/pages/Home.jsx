import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleWave from '../components/ParticleWave';

const Home = () => {
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
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Particle Wave Background */}
                <ParticleWave />

                {/* Hero Content - above the canvas */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-gradient-shine"
                    style={{
                        fontSize: 'clamp(1.75rem, 5.5vw, 4rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.2,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    DEEP-DIVE SECURITY CONSULTING FOR<br />THE MODERN STACK
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
                        fontWeight: 500,
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    Fundamentals-first offensive assessments across applications and cloud.
                </motion.p>
            </section>

            {/* Philosophy Section */}
            <section id="philosophy" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 2rem'
            }}>
                <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        className="text-gradient-shine"
                        style={{
                            fontSize: 'clamp(2.25rem, 7vw, 6rem)',
                            marginBottom: '2rem'
                        }}
                    >
                        BEYOND THE SURFACE
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1.125rem, 2.75vw, 2.5rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        We don't just scan. We understand.
                    </motion.p>
                </div>
            </section>

            {/* Capabilities Section */}
            <section id="capabilities" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        className="text-gradient-shine"
                        style={{
                            fontSize: 'clamp(2.25rem, 7vw, 6rem)',
                            marginBottom: '2rem'
                        }}
                    >
                        FOR SECURITY BEYOND CHECKLISTS
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1.125rem, 2.75vw, 2.5rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Supersek works with product and platform teams operating complex application and cloud environments—where security failures are architectural, not superficial.
                    </motion.p>
                </div>
            </section>

            {/* Product Section */}
            <section id="product" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 2rem'
            }}>
                <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        className="text-gradient-shine"
                        style={{
                            fontSize: 'clamp(2.25rem, 7vw, 6rem)',
                            marginBottom: '2rem'
                        }}
                    >
                        OUR WORK
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1.125rem, 2.75vw, 2.5rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Application and cloud security assessments, adversarial testing, and threat modeling—focused on real attack paths and production risk.
                    </motion.p>
                </div>
            </section>

            {/* Research Section */}
            <section id="training" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 2rem'
            }}>
                <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        className="text-gradient-shine"
                        style={{
                            fontSize: 'clamp(2.25rem, 7vw, 6rem)',
                            marginBottom: '2rem'
                        }}
                    >
                        RESEARCH-DRIVEN BY DESIGN
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1.125rem, 2.75vw, 2.5rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Research that feeds real security work.
                    </motion.p>
                </div>
            </section>

            {/* Clarity Section */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 2rem'
            }}>
                <div style={{ maxWidth: '1000px', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        className="text-gradient-shine"
                        style={{
                            fontSize: 'clamp(2.25rem, 7vw, 6rem)',
                            marginBottom: '2rem'
                        }}
                    >
                        CLARITY, DELIVERED
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1.125rem, 2.75vw, 2.5rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Actionable security insight, not raw data.
                    </motion.p>
                </div>
            </section>

            {/* Footer / Contact Section */}
            <section id="contact" style={{
                minHeight: '50vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gradient-shine"
                    style={{
                        fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                        marginBottom: '3rem',
                        maxWidth: '1000px'
                    }}
                >
                    OUR PHILOSOPHY
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        color: '#B3B3B3',
                        fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                        marginBottom: '3rem',
                        maxWidth: '900px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400
                    }}
                >
                    Security degrades when it becomes procedural. We focus on fundamentals, attacker perspective, and understanding systems as they actually exist in production.
                </motion.p>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1rem 3rem',
                            background: '#231ddb',
                            color: '#ffffff',
                            borderRadius: '9999px',
                            border: 'none',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#2f25e8';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = '#231ddb';
                        }}
                    >
                        START AN ENGAGEMENT
                    </motion.button>
                </Link>
                <footer style={{
                    marginTop: '5rem',
                    color: '#B3B3B3',
                    fontSize: '0.875rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} SUPERSEK. ALL RIGHTS RESERVED.</p>
                </footer>
            </section>
        </main>
    );
};

export default Home;

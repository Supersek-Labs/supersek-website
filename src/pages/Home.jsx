import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
                    DEEP-DIVE SECURITY CONSULTING FOR THE MODERN STACK
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
                <div style={{
                    maxWidth: '1400px',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                                marginBottom: '1.5rem'
                            }}
                        >
                            FOR SECURITY BEYOND CHECKLISTS
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                color: '#B3B3B3',
                                fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400
                            }}
                        >
                            Supersek works with product and platform teams operating complex application and cloud environments—where security failures are architectural, not superficial.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{
                            aspectRatio: '1',
                            borderRadius: '1.5rem',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '1rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} style={{
                                height: '4px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '9999px',
                                width: '100%',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 2, delay: i * 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: '#231ddb'
                                    }}
                                />
                            </div>
                        ))}
                        <div style={{
                            marginTop: '2rem',
                            fontFamily: 'monospace',
                            fontSize: '0.75rem',
                            color: '#8A8A8A',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '0.5rem'
                        }}>
                            <div style={{ background: '#0A0A0A', padding: '0.5rem', borderRadius: '4px' }}>STACK_INIT()</div>
                            <div style={{ background: '#0A0A0A', padding: '0.5rem', borderRadius: '4px' }}>OVR_RIDE_SYS</div>
                            <div style={{ background: '#0A0A0A', padding: '0.5rem', borderRadius: '4px' }}>PTR_VULN_SCAN</div>
                            <div style={{ background: '#0A0A0A', padding: '0.5rem', borderRadius: '4px' }}>CRIT_PATH_EXPL</div>
                        </div>
                    </motion.div>
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

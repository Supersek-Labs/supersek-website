import React from 'react';
import { motion } from 'framer-motion';

const Labs = () => {
    const reports = [
        { title: "Z-Buffer Overflow in Core Alpha", date: "Dec 2025", category: "Research" },
        { title: "Quantum-Resist Toolkit v1.0", date: "Oct 2025", category: "Tool" },
        { title: "Entropy Analysis on Cloud Scale", date: "Aug 2025", category: "Article" },
        { title: "The Shellcode Handshake", date: "Jun 2025", category: "Framework" }
    ];

    return (
        <main style={{ paddingTop: '80px' }}>
            <section style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 2rem'
            }}>
                {/* Hero Section - Full Viewport */}
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(3.5rem, 11vw, 8rem)',
                            marginBottom: '1.5rem'
                        }}
                    >
                        SUPERSEK-LABS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
                            maxWidth: '900px',
                            margin: '0 auto'
                        }}
                    >
                        Open-source security research, tools, and frameworks by SUPERSEK.
                    </motion.p>
                    <motion.a
                        href="https://github.com/Supersek-Labs"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            marginTop: '2.5rem',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            textDecoration: 'none'
                        }}
                    >
                        <span style={{
                            background: 'linear-gradient(to right, #231ddb 0%, #231ddb 50%, #ffffff 50%)',
                            backgroundSize: '200% 100%',
                            backgroundPosition: '100% 0',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            transition: 'background-position 0.6s ease',
                            marginRight: '0.5rem'
                        }}
                            onMouseEnter={(e) => e.target.style.backgroundPosition = '0% 0'}
                            onMouseLeave={(e) => e.target.style.backgroundPosition = '100% 0'}
                        >
                            Explore the research repository
                        </span>
                        <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </div>

                {/* Projects Grid - Appears when scrolling */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    paddingTop: '5rem',
                    paddingBottom: '5rem'
                }}>
                    {reports.map((report, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            whileHover={{ borderColor: "rgba(35, 29, 219, 0.3)" }}
                            style={{
                                padding: '2rem',
                                border: '1px solid rgba(154, 154, 162, 0.1)',
                                background: '#0A0A0A',
                                borderRadius: '1rem',
                                cursor: 'pointer',
                                transition: 'border-color 0.3s'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '3rem'
                            }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontFamily: 'monospace',
                                    color: '#231ddb',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em'
                                }}>
                                    {report.category}
                                </span>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontFamily: 'monospace',
                                    color: '#8A8A8A',
                                    textTransform: 'uppercase'
                                }}>
                                    {report.date}
                                </span>
                            </div>
                            <h3 style={{
                                fontSize: 'clamp(1.35rem, 2.75vw, 2.75rem)',
                                marginBottom: '2rem',
                                transition: 'color 0.3s'
                            }}>
                                {report.title}
                            </h3>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '0.8rem',
                                fontWeight: 500
                            }}>
                                <span style={{ marginRight: '0.5rem' }}>View Project</span>
                                <motion.span
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                >
                                    →
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Labs;

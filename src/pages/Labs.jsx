import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleWave from '../components/ParticleWave';

const Labs = () => {
    const reports = [
        {
            title: "Supersek Netrx — Agentic Penetration Testing Engineered as Infrastructure",
            subtitle: "Inside the architecture, AI design, and reliability model powering Supersek Netrx",
            date: "Mar 2026",
            category: "Research , Product",
            slug: "/research/supersek-netrx-agentic-penetration-testing"
        }
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
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <ParticleWave />
                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.h1 className="text-gradient-shine"
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
                </div>

                {/* Projects Grid - Appears when scrolling */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: reports.length === 1 ? 'minmax(300px, 600px)' : 'repeat(auto-fill, minmax(350px, 1fr))',
                    justifyContent: 'center',
                    gap: '2rem',
                    paddingTop: '5rem',
                    paddingBottom: '5rem'
                }}>
                    {reports.map((report, index) => {
                        const CardWrapper = report.slug ? Link : motion.div;
                        const wrapperProps = report.slug
                            ? {
                                to: report.slug,
                                style: { textDecoration: 'none', color: 'inherit', display: 'block' }
                            }
                            : {};

                        return (
                            <CardWrapper key={index} {...wrapperProps}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    whileHover={{
                                        borderColor: "rgba(35, 29, 219, 0.4)",
                                        boxShadow: "0 0 50px rgba(35, 29, 219, 0.25)"
                                    }}
                                    style={{
                                        padding: '2.5rem',
                                        border: '1px solid rgba(154, 154, 162, 0.1)',
                                        background: '#0A0A0A',
                                        borderRadius: '1rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 0 30px rgba(35, 29, 219, 0.12)', /* Backlit lighting */
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
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
                                        fontSize: 'clamp(1.5rem, 2vw, 2.25rem)',
                                        marginBottom: report.subtitle ? '1rem' : '2rem',
                                        transition: 'color 0.3s',
                                        lineHeight: 1.3
                                    }}>
                                        {report.title}
                                    </h3>
                                    {report.subtitle && (
                                        <p style={{
                                            color: '#B3B3B3',
                                            fontSize: '1rem',
                                            lineHeight: 1.6,
                                            marginBottom: '2rem',
                                            flexGrow: 1
                                        }}>
                                            {report.subtitle}
                                        </p>
                                    )}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '0.8rem',
                                        fontWeight: 500,
                                        marginTop: report.subtitle ? '0' : 'auto'
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
                            </CardWrapper>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Labs;

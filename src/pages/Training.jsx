import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Training = () => {
    return (
        <main style={{ paddingTop: '80px' }}>
            {/* Entry / Orientation */}
            <section style={{
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
                    FROM FOUNDATION TO MASTERY
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        color: '#B3B3B3',
                        fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                        maxWidth: '900px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.6,
                        marginBottom: '2rem'
                    }}
                >
                    Comprehensive security training that bridges the gap between core fundamentals and advanced exploitation. Whether you are entering the field or deepening existing expertise, the focus is on building skills that hold up in real systems and real assessments.
                </motion.p>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
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
                        START YOUR JOURNEY
                    </motion.button>
                </Link>
            </section>

            {/* Philosophy */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1000px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '3rem'
                        }}
                    >
                        PHILOSOPHY
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '4rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}
                    >
                        You cannot exploit what you do not understand. Effective offensive capability depends on a precise understanding of how systems are designed, implemented, and operated. The curriculum progresses deliberately from fundamentals to advanced techniques, without shortcuts or tool dependence.
                    </motion.p>

                    {/* Three Principle Blocks */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '3rem'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <h3 style={{
                                fontSize: 'clamp(1.125rem, 1.75vw, 1.35rem)',
                                marginBottom: '1rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 700
                            }}>
                                BUILD THE BASE
                            </h3>
                            <p style={{
                                color: '#B3B3B3',
                                fontSize: 'clamp(0.9rem, 1.35vw, 1rem)',
                                lineHeight: 1.6,
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400
                            }}>
                                Training begins with networking, protocols, execution flow, and code logic, using direct system and protocol interaction to make behavior explicit.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <h3 style={{
                                fontSize: 'clamp(1.125rem, 1.75vw, 1.35rem)',
                                marginBottom: '1rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 700
                            }}>
                                DEVELOP ANALYTICAL FLUENCY
                            </h3>
                            <p style={{
                                color: '#B3B3B3',
                                fontSize: 'clamp(0.9rem, 1.35vw, 1rem)',
                                lineHeight: 1.6,
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400
                            }}>
                                Analysis is supported by interception, inspection, and debugging capabilities that reveal how applications and services process state and input.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <h3 style={{
                                fontSize: 'clamp(1.125rem, 1.75vw, 1.35rem)',
                                marginBottom: '1rem',
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 700
                            }}>
                                CHALLENGE THE ASSUMPTIONS
                            </h3>
                            <p style={{
                                color: '#B3B3B3',
                                fontSize: 'clamp(0.9rem, 1.35vw, 1rem)',
                                lineHeight: 1.6,
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400
                            }}>
                                Advanced techniques focus on manual analysis, controlled experimentation, and purpose-built capabilities that test real design and implementation assumptions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum Tracks */}
            <section style={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1000px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1.5rem'
                        }}
                    >
                        CURRICULUM TRACKS
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}
                    >
                        Organized by proficiency level, with a clear progression path.
                    </motion.p>
                </div>
            </section>

            {/* Level 01 - Core Fundamentals */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1000px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem'
                        }}
                    >
                        LEVEL 01 — CORE FUNDAMENTALS
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            color: '#8A8A8A',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            marginBottom: '3rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        For beginners and engineers transitioning into security roles.
                    </motion.p>

                    {/* The Architecture of the Web */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{ marginBottom: '3rem' }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                            marginBottom: '1rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700
                        }}>
                            The Architecture of the Web
                        </h3>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Direct interaction with HTTP, DNS, TLS, and session management. Understanding how browsers, servers, and intermediaries exchange state and enforce trust. Manual protocol construction and inspection replace reliance on abstraction layers.
                        </p>
                    </motion.div>

                    {/* Introduction to Offensive Thinking */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{ marginBottom: '3rem' }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                            marginBottom: '1rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700
                        }}>
                            Introduction to Offensive Thinking
                        </h3>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Enumeration, reconnaissance, and structured exploration of attack surface. Learning to identify trust boundaries, privilege transitions, and input handling patterns through manual observation and controlled testing.
                        </p>
                    </motion.div>

                    {/* Coding for Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                            marginBottom: '1rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700
                        }}>
                            Coding for Security
                        </h3>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Writing small utilities to automate repetitive analysis tasks, parse protocol responses, and manipulate data structures. Building comfort with scripting languages and understanding how code translates to runtime behavior.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Level 02 - Professional Penetration Testing */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1000px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem'
                        }}
                    >
                        LEVEL 02 — PROFESSIONAL PENETRATION TESTING
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            color: '#8A8A8A',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            marginBottom: '3rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        Practical skills aligned with real assessment work.
                    </motion.p>

                    {/* Web Application Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{ marginBottom: '3rem' }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                            marginBottom: '1rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700
                        }}>
                            Web Application Security
                        </h3>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Manual validation of authentication and authorization logic, session handling, and state management. Moving beyond automated scanning to understand how applications enforce security decisions at runtime.
                        </p>
                    </motion.div>

                    {/* Cloud Security Essentials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{ marginBottom: '3rem' }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                            marginBottom: '1rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700
                        }}>
                            Cloud Security Essentials
                        </h3>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Identity and access management, role assumptions, service-to-service authentication, and metadata exposure. Understanding how cloud platforms enforce privilege and where trust boundaries exist.
                        </p>
                    </motion.div>

                    {/* Mobile Assessment Basics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                            marginBottom: '1rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700
                        }}>
                            Mobile Assessment Basics
                        </h3>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Static inspection of application binaries, local storage analysis, and controlled runtime evaluation. Understanding how mobile applications handle sensitive data and communicate with backend services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Level 03 - Advanced Research & Exploitation */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1000px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem'
                        }}
                    >
                        LEVEL 03 — ADVANCED RESEARCH & EXPLOITATION
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            color: '#8A8A8A',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            marginBottom: '3rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500
                        }}
                    >
                        For experienced practitioners and architects.
                    </motion.p>

                    {/* Complex Exploitation Chains */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{ marginBottom: '3rem' }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                            marginBottom: '1rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700
                        }}>
                            Complex Exploitation Chains
                        </h3>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Chaining low-severity findings into high-impact scenarios. Understanding how partial failures combine across authentication, authorization, and data flow boundaries to produce real compromise.
                        </p>
                    </motion.div>

                    {/* Cloud Adversary Techniques */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{ marginBottom: '3rem' }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                            marginBottom: '1rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700
                        }}>
                            Cloud Adversary Techniques
                        </h3>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Identity abuse, privilege escalation paths, lateral movement within cloud environments, and supply-chain exposure through build and deployment pipelines. Techniques grounded in real attacker behavior.
                        </p>
                    </motion.div>

                    {/* Custom Capability Development */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                            marginBottom: '1rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700
                        }}>
                            Custom Capability Development
                        </h3>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Building bespoke utilities when generic tooling is insufficient. Writing custom exploits, protocol implementations, and analysis frameworks that address specific assessment requirements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* For Teams */}
            <section style={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '2rem'
                        }}
                    >
                        FOR TEAMS
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(0.9rem, 1.75vw, 1.125rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}
                    >
                        Training engagements are designed to scale across teams. Early-career engineers build confidence in secure design and implementation, while experienced practitioners are challenged with realistic, high-complexity scenarios.
                    </motion.p>
                </div>
            </section>

            {/* Closing Line */}
            <section style={{
                minHeight: '30vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    style={{
                        color: '#8A8A8A',
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        textAlign: 'center',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400
                    }}
                >
                    Training built on fundamentals, validated through real-world security work.
                </motion.p>
            </section>
        </main>
    );
};

export default Training;

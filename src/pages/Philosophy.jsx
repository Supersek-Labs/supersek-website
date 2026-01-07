import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <main style={{ paddingTop: '80px' }}>
            {/* Section 1: Security begins with understanding */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem',
                            maxWidth: '1200px'
                        }}
                    >
                        SECURITY BEGINS WITH UNDERSTANDING
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Security failures rarely stem from missing controls.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            They arise when systems are misunderstood—when assumptions remain unexamined and complexity is mistaken for abstraction.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Supersek exists to reduce that gap by focusing on how systems behave under real conditions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Systems are adversarial by nature */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1200px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem',
                            maxWidth: '1200px'
                        }}
                    >
                        SYSTEMS ARE ADVERSARIAL BY NATURE
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Modern systems operate under continuous pressure: integration, automation, scale, and intent interact in ways that resist static modeling.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            We treat applications and cloud environments as adversarial contexts. Risk concentrates at boundaries—between identities and permissions, services and data, design intent and operational reality.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Understanding these boundaries requires reasoning, not enumeration.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Tools change, fundamentals are enduring */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1200px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem',
                            maxWidth: '1200px'
                        }}
                    >
                        TOOLS CHANGE, FUNDAMENTALS ARE ENDURING
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Security fundamentals are often dismissed as basic. They are not.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Protocol behavior, trust relationships, execution flow, and identity mechanics persist even as platforms and tooling evolve.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Tools change.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Fundamentals determine whether analysis is sound.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 4: Research informs practice */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1200px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem',
                            maxWidth: '1200px'
                        }}
                    >
                        RESEARCH INFORMS PRACTICE
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Research is not conducted in isolation. It functions as a feedback loop.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Independent investigation sharpens assumptions, exposes blind spots, and improves how attack paths are reasoned about and validated across engagements.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            The aim is not novelty, but conclusions that hold under operational scrutiny.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 5: Training transfers judgment */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1200px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem',
                            maxWidth: '1200px'
                        }}
                    >
                        TRAINING TRANSFERS JUDGMENT
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Effective security training does not optimize for recall.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            It develops the ability to reason under uncertainty—approaching unfamiliar systems, evaluating risk without complete information, and making defensible decisions when patterns are unclear.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Training is treated as the transfer of judgment, grounded in the same principles used in practice.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 6: Responsibility is not abstracted */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1200px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem',
                            maxWidth: '1200px'
                        }}
                    >
                        RESPONSIBILITY IS NOT ABSTRACTED
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Analysis and accountability are inseparable.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            The reasoning used to examine a system is the same reasoning that supports the conclusions delivered—without reinterpretation or handoff.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 7: A discipline, not a product (Closing) */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                paddingBottom: '5rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{ maxWidth: '1200px', width: '100%' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
                            marginBottom: '1rem',
                            maxWidth: '1200px'
                        }}
                    >
                        A DISCIPLINE, NOT A PRODUCT
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Clarity through first-principles security thinking.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer Reinforcement */}
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
                    Security is not what you deploy. It is how you think.
                </motion.p>
            </section>
        </main>
    );
};

export default Philosophy;

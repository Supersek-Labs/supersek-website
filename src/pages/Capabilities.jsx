import React from 'react';
import { motion } from 'framer-motion';

const Capabilities = () => {
    const capabilities = [
        { id: 'application-security', name: 'Application Security' },
        { id: 'source-assisted', name: 'Source-Assisted Offensive Analysis' },
        { id: 'mobile-embedded', name: 'Mobile & Embedded Resilience' },
        { id: 'ai-llm', name: 'AI & LLM Assurance' },
        { id: 'cloud-platform', name: 'Cloud Platform Security' },
        { id: 'kubernetes', name: 'Kubernetes & Containerization' },
        { id: 'infrastructure', name: 'Infrastructure & Network Resilience' },
        { id: 'supply-chain', name: 'Supply Chain & CI/CD Security' },
        { id: 'threat-architecture', name: 'Threat Architecture & Modeling' },
        { id: 'workshops', name: 'Offensive Engineering Workshops' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main style={{ paddingTop: '80px' }}>
            {/* Page Header */}
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
                    CAPABILITIES
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
                        fontWeight: 400
                    }}
                >
                    Offensive security across modern systems—focused on how real designs fail under adversarial conditions.
                </motion.p>
            </section>

            {/* Capabilities Index */}
            <section style={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(154, 154, 162, 0.1)'
            }}>
                <div style={{
                    maxWidth: '1000px',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {capabilities.map((capability, index) => (
                        <motion.button
                            key={capability.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            onClick={() => scrollToSection(capability.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#8A8A8A',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                transition: 'color 0.3s',
                                textAlign: 'left',
                                padding: '0.5rem 0',
                                fontFamily: "'Inter', sans-serif"
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                            onMouseLeave={(e) => e.target.style.color = '#8A8A8A'}
                        >
                            {capability.name}
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* Application Security */}
            <section id="application-security" style={{
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
                        APPLICATION SECURITY
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
                        Logic, State, & Runtime
                    </motion.p>
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
                            Application security assessments focus on runtime behavior—where logic enforcement, state management, and trust decisions converge.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Analysis covers authentication and authorization flows, privilege transitions, session and token lifecycles, object ownership enforcement, and API authorization models. Multi-step workflows, state desynchronization, race conditions, and implicit trust between internal components are examined in depth.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            The engagement builds a clear picture of how application behavior evolves when execution paths are influenced and controls are stressed.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Source-Assisted Offensive Analysis */}
            <section id="source-assisted" style={{
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
                        SOURCE-ASSISTED OFFENSIVE ANALYSIS
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
                        Code, Variants, & Root Causes
                    </motion.p>
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
                            Source-assisted analysis is applied when access to code enables deeper adversarial insight.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Static analysis techniques are used to surface security-sensitive logic and complex data flows. Manual review concentrates on authorization decisions, input handling, cryptographic usage, deserialization boundaries, and cross-module trust assumptions.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            When a vulnerability pattern is identified, variant analysis is performed by authoring custom queries—such as CodeQL or Semgrep rules—to identify all related instances across the codebase. Runtime testing and white-box tracing are combined to validate execution paths and impact.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Findings are documented with precise root cause analysis, enabling engineering teams to address underlying design and implementation decisions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mobile & Embedded Resilience */}
            <section id="mobile-embedded" style={{
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
                        MOBILE & EMBEDDED RESILIENCE
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
                        Hostile Environment Analysis
                    </motion.p>
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
                            Mobile and embedded systems are assessed with the assumption that the execution environment may be fully controlled by an adversary.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Analysis includes application binaries, local storage, inter-process communication, hardware-backed security mechanisms, certificate handling, update workflows, and backend reliance on client-provided signals. Reverse engineering, protocol inspection, and runtime instrumentation are used to examine behavior under tampering and manipulation.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            This capability provides clarity on how systems maintain trust when client-side integrity cannot be relied upon.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AI & LLM Assurance */}
            <section id="ai-llm" style={{
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
                        AI & LLM ASSURANCE
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
                        Stochastic Security
                    </motion.p>
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
                            AI-enabled systems introduce probabilistic behavior into security-relevant workflows.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Assessments examine prompt construction, context handling, tool invocation boundaries, data exposure paths, and trust delegation between models and surrounding systems. Common analysis areas include prompt injection, indirect input influence, retrieval manipulation, and privilege amplification through model-driven actions.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            The engagement focuses on how stochastic components shape system reliability, safety, and security outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cloud Platform Security */}
            <section id="cloud-platform" style={{
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
                        CLOUD PLATFORM SECURITY
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
                        Identity Is the Control Plane
                    </motion.p>
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
                            Cloud platform assessments treat identity as the primary control surface.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Analysis includes IAM role design, trust relationships, privilege inheritance, cross-service authentication paths, and workload identity propagation. Control plane APIs, metadata services, and service principals are examined to understand escalation paths and long-term access patterns.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Logging, auditability, and visibility mechanisms are reviewed to assess how activity is observed and interpreted during and after compromise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Kubernetes & Containerization */}
            <section id="kubernetes" style={{
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
                        KUBERNETES & CONTAINERIZATION
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
                        Orchestration & Isolation
                    </motion.p>
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
                            Containerized environments are assessed as orchestrated systems with layered trust and control mechanisms.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Analysis covers container image provenance, build workflows, runtime isolation assumptions, and workload identity usage. Kubernetes-specific components—including RBAC models, service accounts, controllers and operators, admission controls, API server exposure, kubelet interactions, and etcd access patterns—are examined in detail.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            The assessment maps how access propagates within clusters and how orchestration logic shapes privilege and isolation boundaries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Infrastructure & Network Resilience */}
            <section id="infrastructure" style={{
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
                        INFRASTRUCTURE & NETWORK RESILIENCE
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
                        Lateral Movement & Segmentation
                    </motion.p>
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
                            Infrastructure assessments examine how access and trust propagate across environments.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Analysis includes network segmentation design, identity-to-network coupling, east-west traffic controls, credential usage patterns, and host-level trust relationships. Lateral movement paths and persistence mechanisms are evaluated across heterogeneous systems.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            The engagement provides a grounded understanding of how segmentation strategies perform during sustained attacker activity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Supply Chain & CI/CD Security */}
            <section id="supply-chain" style={{
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
                        SUPPLY CHAIN & CI/CD SECURITY
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
                        Pipeline Integrity
                    </motion.p>
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
                            Supply chain and CI/CD assessments focus on the systems responsible for producing and delivering software.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Analysis covers source control trust models, branch protection, build agents, CI/CD runners, artifact repositories, dependency resolution, signing mechanisms, and secrets handling. Attention is given to how trust is enforced across stages and how compromise propagates through the delivery lifecycle.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            This capability provides visibility into integrity from source to runtime.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Threat Architecture & Modeling */}
            <section id="threat-architecture" style={{
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
                        THREAT ARCHITECTURE & MODELING
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
                        Hypothesis Generation
                    </motion.p>
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
                            Threat architecture establishes a structured adversarial view of the system.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Trust boundaries, privilege transitions, and data flows are analyzed to develop system-specific threat hypotheses aligned with realistic attacker objectives. These hypotheses evolve throughout the engagement as assumptions are tested across code, runtime, and platform layers.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Threat modeling provides a consistent analytical framework connecting system design to observed failure behavior.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Offensive Engineering Workshops */}
            <section id="workshops" style={{
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
                        OFFENSIVE ENGINEERING WORKSHOPS
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
                        Capability Transfer
                    </motion.p>
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
                            Workshops are designed to develop offensive reasoning within engineering and security teams.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            Sessions focus on attack path analysis, system failure reasoning, threat hypothesis development, and exploitation patterns relevant to the organization's architecture. Content is tailored to experienced practitioners and emphasizes analytical judgment and trade-off awareness.
                        </p>
                        <p style={{
                            color: '#B3B3B3',
                            fontSize: 'clamp(1rem, 1.75vw, 1.35rem)',
                            lineHeight: 1.6,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400
                        }}>
                            The outcome is stronger internal security decision-making capability.
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
                    Founder-led. Research-informed. Hands-on.
                </motion.p>
            </section>
        </main>
    );
};

export default Capabilities;

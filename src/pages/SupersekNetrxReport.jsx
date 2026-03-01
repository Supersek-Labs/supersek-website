import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleWave from '../components/ParticleWave';

const chapters = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'real-challenge', title: 'The Real Challenge: Signal at Scale' },
    { id: 'architecture-by-design', title: 'Architecture by Design' },
    { id: 'reconnaissance-at-scale', title: 'Reconnaissance at Scale' },
    { id: 'structured-normalization', title: 'Structured Normalization' },
    { id: 'hunter', title: 'Hunter — Precision Technical Validation' },
    { id: 'diplomat', title: 'Diplomat — Executive Risk Translation' },
    { id: 'intelligence-engine', title: 'Intelligence Engine (AI Architecture)' },
    { id: 'hybrid-model', title: 'Hybrid Model Hosting & Routing' },
    { id: 'reliability-engineering', title: 'Reliability Engineering' },
    { id: 'real-time-delivery', title: 'Real-Time Delivery & Telemetry' },
    { id: 'structured-intelligence', title: 'Structured Intelligence Output' },
    { id: 'architectural-significance', title: 'Architectural Significance' },
    { id: 'roadmap', title: 'Roadmap' },
    { id: 'why-this-matters', title: 'Why This Matters' },
    { id: 'closing', title: 'Closing' }
];

const SupersekNetrxReport = () => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        // Set document title
        document.title = "Supersek Netrx — Agentic Penetration Testing | Supersek Labs";

        // Scroll spy logic
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -80% 0px' }
        );

        chapters.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            chapters.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
            document.title = "Supersek"; // Reset on unmount
        };
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Account for fixed header if any
                behavior: 'smooth'
            });
        }
    };

    return (
        <main style={{ paddingTop: '100px', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>

            {/* Article Header */}
            <header style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '6rem 2rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden'
            }}>
                <ParticleWave />
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <span style={{
                            fontSize: '0.875rem',
                            fontFamily: 'monospace',
                            color: '#231ddb',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            background: 'rgba(35, 29, 219, 0.1)',
                            padding: '0.5rem 1rem',
                            borderRadius: '2rem'
                        }}>
                            Research / Product
                        </span>
                        <span style={{ marginLeft: '1rem', color: '#8A8A8A', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                            Mar 2026
                        </span>
                    </div>

                    <h1 className="text-gradient-shine" style={{
                        fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                        lineHeight: 1.1,
                        fontWeight: 600,
                        margin: '0 0 1.5rem 0',
                        letterSpacing: '-0.02em',
                        maxWidth: '20ch'
                    }}>
                        SUPERSEK NETRX
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
                        color: '#B3B3B3',
                        lineHeight: 1.4,
                        margin: 0,
                        maxWidth: '800px'
                    }}>
                        Agentic Penetration Testing, Engineered as Infrastructure.
                    </p>
                </div>
            </header>

            {/* Two-Column Layout */}
            <div className="blog-layout" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '4rem 2rem'
            }}>

                {/* Sidebar Navigation */}
                <aside className="blog-sidebar">
                    <div style={{ position: 'sticky', top: '120px', maxHeight: 'calc(100vh - 140px)', overflowY: 'auto', paddingRight: '1rem' }}>
                        <h4 style={{
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: '#8A8A8A',
                            marginBottom: '1.5rem',
                            fontWeight: 600
                        }}>
                            Contents
                        </h4>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {chapters.map((chapter) => (
                                <a
                                    key={chapter.id}
                                    href={`#${chapter.id}`}
                                    onClick={(e) => scrollToSection(e, chapter.id)}
                                    style={{
                                        fontSize: '0.875rem',
                                        color: activeId === chapter.id ? '#fff' : '#8A8A8A',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s',
                                        paddingLeft: activeId === chapter.id ? '0.5rem' : '0',
                                        borderLeft: activeId === chapter.id ? '2px solid #231ddb' : '2px solid transparent',
                                        lineHeight: 1.4
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeId !== chapter.id) e.target.style.color = '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeId !== chapter.id) e.target.style.color = '#8A8A8A';
                                    }}
                                >
                                    {chapter.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Article Content */}
                <article className="blog-main-content" style={{
                    maxWidth: '75ch',
                    fontSize: '1.125rem',
                    lineHeight: 1.7,
                    color: '#D4D4D4'
                }}>
                    <style dangerouslySetInnerHTML={{
                        __html: `
            .blog-layout { display: flex; flex-direction: column; gap: 2rem; }
            .blog-sidebar { display: none; flex-shrink: 0; }
            .blog-main-content { flex-grow: 1; min-width: 0; }
            
            @media (min-width: 1024px) {
                .blog-layout { flex-direction: row; gap: 4rem; }
                .blog-sidebar { display: block; width: 280px; }
            }

            .blog-content h2 { font-size: 2rem; color: #fff; margin: 3rem 0 1.5rem 0; font-weight: 500; letter-spacing: -0.01em; }
            .blog-content h3 { font-size: 1.5rem; color: #E5E5E5; margin: 2rem 0 1rem 0; font-weight: 500; }
            .blog-content p { margin-bottom: 1.5rem; }
            .blog-content ul { margin-bottom: 2rem; padding-left: 1.5rem; list-style-type: disc; }
            .blog-content li { margin-bottom: 0.5rem; }
            .blog-content strong { color: #fff; font-weight: 500; }
            .blog-content code { background: rgba(255,255,255,0.1); padding: 0.2rem 0.4rem; border-radius: 4px; font-family: monospace; font-size: 0.9em; color: #A5A5A5;}
            .blog-content hr { border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 3rem 0; }
            
            /* Add custom scrollbar for the sidebar */
            .blog-sidebar div::-webkit-scrollbar { width: 4px; }
            .blog-sidebar div::-webkit-scrollbar-track { background: transparent; }
            .blog-sidebar div::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
            .blog-sidebar div::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
          `}} />

                    <div className="blog-content">
                        <section id="introduction">
                            <p>Security incidents create two parallel realities inside modern organizations.</p>
                            <p>Engineers see raw scan output, service fingerprints, misconfigurations, exploit chains, and ambiguous attack paths.</p>
                            <p>Leadership sees fragmented updates, inconsistent severity language, and unclear prioritization.</p>
                            <p>Supersek Netrx was built to unify those realities.</p>
                            <p>What began as reconnaissance automation has evolved into a full-stack, agentic penetration testing platform — designed to collect comprehensively, validate intelligently, and communicate risk with precision across both technical and executive domains.</p>
                        </section>

                        <section id="real-challenge">
                            <h2>The Real Challenge: Signal at Scale</h2>
                            <p>Security tooling is not scarce.</p>
                            <p>Teams already use powerful ecosystems:</p>
                            <ul>
                                <li><code>nmap</code>, <code>masscan</code>, <code>naabu</code></li>
                                <li><code>httpx</code>, <code>whatweb</code>, <code>nikto</code></li>
                                <li><code>ffuf</code>, <code>dirsearch</code></li>
                                <li><code>subfinder</code>, <code>amass</code></li>
                                <li><code>gau</code>, <code>waybackurls</code></li>
                                <li><code>nuclei</code></li>
                                <li>certificate transparency APIs</li>
                                <li>DNS intelligence tools</li>
                                <li>passive OSINT feeds</li>
                            </ul>
                            <p>The bottleneck is not discovery.</p>
                            <p>It is clarity.</p>
                            <p>Traditional security pipelines tend to break in one of two ways:</p>
                            <ul>
                                <li>Deep technical output with low strategic usability</li>
                                <li>Polished dashboards with weak evidence traceability</li>
                            </ul>
                            <p>Supersek Netrx is designed to operate at both depths simultaneously — without compromising either.</p>
                        </section>

                        <section id="architecture-by-design">
                            <h2>Architecture by Design</h2>
                            <p>Supersek Netrx follows a deliberate separation of responsibilities:</p>
                            <ul>
                                <li><strong>Collection</strong> — multi-tool reconnaissance orchestration</li>
                                <li><strong>Normalization</strong> — structured transformation of raw outputs</li>
                                <li><strong>Validation & Triage</strong> — schema-bound AI reasoning</li>
                                <li><strong>Translation</strong> — executive contextualization</li>
                                <li><strong>Delivery</strong> — live telemetry and decision-grade dashboards</li>
                            </ul>
                            <p>Each layer performs a single, well-defined function. Together, they form a cohesive intelligence pipeline.</p>
                        </section>

                        <section id="reconnaissance-at-scale">
                            <h2>Layer 1 — Reconnaissance at Scale</h2>
                            <p>Netrx orchestrates the broader penetration testing ecosystem rather than relying on a narrow toolset.</p>

                            <h3>Network & Service Discovery</h3>
                            <ul>
                                <li><code>nmap</code></li>
                                <li><code>masscan</code></li>
                                <li><code>naabu</code></li>
                            </ul>

                            <h3>Web Surface Enumeration</h3>
                            <ul>
                                <li><code>httpx</code></li>
                                <li><code>whatweb</code></li>
                                <li><code>nikto</code></li>
                                <li><code>ffuf</code></li>
                                <li><code>dirsearch</code></li>
                            </ul>

                            <h3>Subdomain & Asset Discovery</h3>
                            <ul>
                                <li><code>subfinder</code></li>
                                <li><code>amass</code></li>
                                <li>certificate transparency integrations</li>
                                <li>DNS resolution validation</li>
                            </ul>

                            <h3>Historical & Passive Discovery</h3>
                            <ul>
                                <li><code>gau</code></li>
                                <li><code>waybackurls</code></li>
                                <li>archive mining</li>
                            </ul>

                            <h3>Template-Based Detection</h3>
                            <ul>
                                <li><code>nuclei</code></li>
                            </ul>

                            <p>Execution is controlled and resilient:</p>
                            <ul>
                                <li>Managed timeouts</li>
                                <li>Partial output handling</li>
                                <li>Controlled concurrency</li>
                                <li>Missing-binary tolerance</li>
                                <li>Stable subprocess isolation</li>
                            </ul>
                            <p>Long-running scans remain predictable and production-safe.</p>
                        </section>

                        <section id="structured-normalization">
                            <h2>Layer 2 — Structured Normalization</h2>
                            <p>Raw CLI output is not intelligence.</p>
                            <p>Netrx parses scanner output into strict, deterministic JSON schemas that:</p>
                            <ul>
                                <li>Standardize vulnerability evidence</li>
                                <li>Normalize CVE mappings</li>
                                <li>Tag services and ports</li>
                                <li>Extract HTTP metadata</li>
                                <li>Preserve proof-of-concept artifacts</li>
                                <li>Produce structured vulnerability bundles</li>
                            </ul>
                            <p>This structured foundation enables reliable downstream reasoning and automation. Data becomes consistent before intelligence is applied.</p>
                        </section>

                        <section id="hunter">
                            <h2>Layer 3 — Hunter<br /><span style={{ fontSize: '1.25rem', color: '#B3B3B3', fontWeight: 'normal' }}>Precision Technical Validation</span></h2>
                            <p>Hunter is the technical reasoning engine inside Netrx.</p>
                            <p>It consumes structured recon bundles and produces validated vulnerability objects through:</p>
                            <ul>
                                <li>Exploitability analysis</li>
                                <li>Severity calibration</li>
                                <li>False-positive filtering</li>
                                <li>Structured vulnerability generation</li>
                            </ul>
                            <p>Hunter operates within enforced Pydantic schemas, ensuring every output is structurally sound and machine-consumable.</p>
                            <p>Technical validation becomes consistent, repeatable, and scalable.</p>
                        </section>

                        <section id="diplomat">
                            <h2>Layer 4 — Diplomat<br /><span style={{ fontSize: '1.25rem', color: '#B3B3B3', fontWeight: 'normal' }}>Executive-Grade Risk Translation</span></h2>
                            <p>Diplomat transforms validated findings into strategic narratives.</p>
                            <p>It reframes:</p>
                            <ul>
                                <li>Exploit paths into business risk</li>
                                <li>Technical exposure into operational impact</li>
                                <li>CVEs into prioritization signals</li>
                                <li>Vulnerability clusters into decision context</li>
                            </ul>
                            <p>Outputs include:</p>
                            <ul>
                                <li>CISO brief summaries</li>
                                <li>Risk prioritization guidance</li>
                                <li>Executive-ready communication artifacts</li>
                            </ul>
                            <p>Both Hunter and Diplomat derive from the same validated dataset — ensuring alignment between engineering truth and executive clarity.</p>
                        </section>

                        <section id="intelligence-engine">
                            <h2>Intelligence Engine<br /><span style={{ fontSize: '1.25rem', color: '#B3B3B3', fontWeight: 'normal' }}>How AI Powers Supersek Netrx</span></h2>
                            <p>Supersek Netrx uses a hybrid AI architecture designed for performance, adaptability, and operational reliability.</p>
                            <p>Two specialized agents operate in distinct environments:</p>
                            <ul>
                                <li><strong>Hunter</strong> — Local technical inference</li>
                                <li><strong>Diplomat</strong> — Cloud-based narrative refinement</li>
                            </ul>
                            <p>Each environment is chosen intentionally.</p>

                            <h3>Tier 1: Local Inference via Ollama (Hunter)</h3>
                            <p>Hunter runs through locally hosted inference configured via:</p>
                            <ul>
                                <li><code>OLLAMA_BASE_URL</code></li>
                                <li><code>OLLAMA_MODEL</code></li>
                                <li><code>OLLAMA_NUM_CTX</code></li>
                            </ul>
                            <p>Typically deployed inside the Docker stack, this provides:</p>
                            <ul>
                                <li>Data locality for raw scan payloads</li>
                                <li>Tunable context sizing based on hardware capacity</li>
                                <li>High-throughput structured reasoning</li>
                                <li>Flexible deployment across environments</li>
                            </ul>
                            <p>Hunter focuses on structured precision — not prose. Its outputs feed directly into the intelligence graph.</p>
                        </section>

                        <section id="hybrid-model">
                            <h2>Tier 2: Cloud Provider Routing (Diplomat)</h2>
                            <p>Diplomat is provider-switchable via:</p>
                            <ul>
                                <li><code>CLOUD_LLM_PROVIDER</code></li>
                            </ul>
                            <p>Supported providers include:</p>
                            <ul>
                                <li>OpenAI</li>
                                <li>Anthropic</li>
                                <li>Gemini</li>
                            </ul>
                            <p>This abstraction enables teams to align with:</p>
                            <ul>
                                <li>Policy requirements</li>
                                <li>Performance expectations</li>
                                <li>Cost strategies</li>
                                <li>Regional compliance constraints</li>
                            </ul>
                            <p>Executive narrative quality is optimized without changing pipeline logic.</p>

                            <h3>Model Routing by Design</h3>
                            <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '1rem' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                                            <th style={{ padding: '1rem', color: '#fff' }}>Function</th>
                                            <th style={{ padding: '1rem', color: '#fff' }}>Environment</th>
                                            <th style={{ padding: '1rem', color: '#fff' }}>Optimization</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                            <td style={{ padding: '1rem' }}>Technical triage</td>
                                            <td style={{ padding: '1rem' }}>Local inference</td>
                                            <td style={{ padding: '1rem' }}>Structured precision and performance</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '1rem' }}>Executive translation</td>
                                            <td style={{ padding: '1rem' }}>Cloud models</td>
                                            <td style={{ padding: '1rem' }}>Narrative clarity and strategic framing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>AI inside Netrx is coordinated, modular, and environment-aware.</p>
                        </section>

                        <section id="reliability-engineering">
                            <h2>Reliability Built Into the Intelligence Layer</h2>
                            <p>Supersek Netrx integrates AI with production-grade safeguards:</p>
                            <ul>
                                <li>Automatic retry handling</li>
                                <li>Strict JSON extraction</li>
                                <li>Schema validation via Pydantic</li>
                                <li>Deterministic fallback vulnerability generation</li>
                                <li>Deterministic executive summary synthesis</li>
                                <li>Provider abstraction for resilience</li>
                            </ul>
                            <p>Every scan concludes with a complete intelligence package.</p>
                            <p>The platform remains dependable across variable runtime conditions.</p>
                        </section>

                        <section id="real-time-delivery">
                            <h2>Real-Time Delivery & Telemetry</h2>
                            <p>Netrx is built as a fully asynchronous system:</p>
                            <ul>
                                <li><strong>FastAPI</strong> — orchestration</li>
                                <li><strong>Celery</strong> — distributed task execution</li>
                                <li><strong>Redis</strong> — broker, Pub/Sub transport, event history, result cache</li>
                            </ul>
                            <p>The frontend (Next.js App Router) delivers three core experiences:</p>
                            <ul>
                                <li><strong>Launchpad</strong>: Initiate and manage reconnaissance workflows.</li>
                                <li><strong>Live Telemetry</strong>: WebSocket-based real-time logs with Redis-backed replay.</li>
                                <li><strong>Executive Dashboard</strong>: A decision-grade interface including:
                                    <ul>
                                        <li>Global Risk Score Ring</li>
                                        <li>CISO Summary Brief</li>
                                        <li>Threat Radar Distribution</li>
                                        <li>Attack Surface Topology Graph</li>
                                        <li>Structured Vulnerability Feed</li>
                                        <li>Evidence + Remediation Guidance</li>
                                        <li>Scan Metadata & Timing Analytics</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>The interface encodes a security workflow — not just a visual layer.</p>
                        </section>

                        <section id="structured-intelligence">
                            <h2>Structured Intelligence Output</h2>
                            <p>Each scan produces a comprehensive intelligence package:</p>
                            <ul>
                                <li><code>global_risk_score</code></li>
                                <li><code>ciso_summary</code></li>
                                <li><code>threat_radar</code></li>
                                <li><code>attack_surface</code> (nodes + relationships)</li>
                                <li><code>vulnerabilities</code> (prioritized and validated)</li>
                                <li><code>scan_metadata</code></li>
                                <li>Evidence trace artifacts</li>
                            </ul>
                            <p>These outputs support:</p>
                            <ul>
                                <li>Historical comparisons</li>
                                <li>Trend analytics</li>
                                <li>Compliance mapping</li>
                                <li>SLA tracking</li>
                                <li>Automation integrations</li>
                            </ul>
                            <p>The system is built for longitudinal insight, not one-time reports.</p>
                        </section>

                        <section id="architectural-significance">
                            <h2>Architectural Significance</h2>
                            <h3>Dual-Audience Alignment</h3>
                            <p>Engineers receive structured, evidence-backed detail. Executives receive contextualized, prioritized risk.</p>
                            <p>Both views originate from a single validated intelligence layer.</p>

                            <h3>Reliability as a Core Principle</h3>
                            <p>AI retries, schema enforcement, deterministic fallbacks, provider abstraction, and log replay are first-class architectural components.</p>

                            <h3>Composable Intelligence Strategy</h3>
                            <p>Local reasoning for scale and control. Cloud refinement for clarity and communication quality.</p>

                            <h3>Separation of Compute and Experience</h3>
                            <p>FastAPI + Celery + Redis power orchestration. Next.js delivers a refined, stateful experience.</p>
                            <p>Compute remains modular. UX remains intentional.</p>
                        </section>

                        <section id="roadmap">
                            <h2>Roadmap</h2>
                            <p>Supersek Netrx is architected for expansion:</p>

                            <h3>Security Controls</h3>
                            <ul>
                                <li>Multi-tenant boundaries</li>
                                <li>Role-based access control</li>
                                <li>Target authorization workflows</li>
                            </ul>

                            <h3>Durable Persistence</h3>
                            <ul>
                                <li>PostgreSQL historical storage</li>
                                <li>Object storage for evidence</li>
                                <li>Longitudinal risk analytics</li>
                            </ul>

                            <h3>Governance & Compliance</h3>
                            <ul>
                                <li>Audit trails</li>
                                <li>Tamper-evident reports</li>
                                <li>Retention policy controls</li>
                                <li>Provenance tracking</li>
                            </ul>

                            <h3>Workflow Depth</h3>
                            <ul>
                                <li>Analyst review states</li>
                                <li>Jira / ServiceNow integrations</li>
                                <li>SLA tracking</li>
                                <li>Automated remediation playbooks</li>
                            </ul>
                        </section>

                        <section id="why-this-matters">
                            <h2>Why This Matters</h2>
                            <p>Modern security requires more than detection.</p>
                            <p>It requires:</p>
                            <ul>
                                <li>Evidence integrity</li>
                                <li>Intelligent prioritization</li>
                                <li>Operational consistency</li>
                                <li>Executive trust</li>
                            </ul>
                            <p>Supersek Netrx transforms reconnaissance into structured intelligence and intelligence into strategic clarity.</p>
                        </section>

                        <section id="closing">
                            <hr />
                            <p style={{ fontSize: '1.25rem', fontWeight: 500, color: '#fff' }}>Supersek Netrx represents a new class of penetration testing platform — systems that:</p>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '2rem' }}>
                                <li style={{ marginBottom: '1rem', borderLeft: '2px solid #231ddb', paddingLeft: '1rem' }}>Collect comprehensively.</li>
                                <li style={{ marginBottom: '1rem', borderLeft: '2px solid #231ddb', paddingLeft: '1rem' }}>Reason precisely.</li>
                                <li style={{ marginBottom: '1rem', borderLeft: '2px solid #231ddb', paddingLeft: '1rem' }}>Translate clearly.</li>
                                <li style={{ marginBottom: '1rem', borderLeft: '2px solid #231ddb', paddingLeft: '1rem' }}>Operate reliably.</li>
                            </ul>
                            <p style={{ marginTop: '2rem', fontSize: '1.125rem', fontStyle: 'italic', color: '#A5A5A5' }}>
                                Reconnaissance becomes intelligence.<br />
                                Intelligence becomes action.<br />
                                And security becomes aligned across every level of the organization.
                            </p>
                            <hr />
                        </section>
                    </div>
                </article>
            </div>

        </main>
    );
};

export default SupersekNetrxReport;

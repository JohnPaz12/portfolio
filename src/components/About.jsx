import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { personal, experience, education } from '../data/portfolioData';
import { FiMapPin, FiMail, FiDownload } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

// ── Tab: Experience ──────────────────────────────────────────
function ExperienceTab() {
  return (
    <div style={{ marginTop: '2rem' }}>
      {experience.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-card"
          style={{ padding: '1.75rem', marginBottom: '1.25rem', position: 'relative', overflow: 'hidden' }}
        >
          {/* Left accent bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: 3,
            background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-violet))',
          }} />
          <div style={{ paddingLeft: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {item.role}
              </h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', background: 'var(--accent-cyan-dim)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                {item.period}
              </span>
            </div>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              {item.company}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1rem' }}>
              {item.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {item.tags.map((tag) => (
                <span key={tag} className="tag" style={{ fontSize: '0.7rem' }}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Tab: Education ───────────────────────────────────────────
function EducationTab() {
  return (
    <div style={{ marginTop: '2rem' }}>
      {education.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-card"
          style={{ padding: '1.75rem', marginBottom: '1.25rem', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: 3,
            background: 'linear-gradient(180deg, var(--accent-violet), var(--accent-pink))',
          }} />
          <div style={{ paddingLeft: '1rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div style={{
              width: 48, height: 48, flexShrink: 0,
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(124,58,237,0.12)',
              border: '1px solid rgba(124,58,237,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem',
            }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {item.degree}
                </h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#a78bfa', background: 'rgba(124,58,237,0.12)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                  {item.period}
                </span>
              </div>
              <p style={{ color: '#a78bfa', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem' }}>
                {item.institution}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Main About Component ─────────────────────────────────────
export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education',  label: 'Education'  },
  ];

  return (
    <section id="about" ref={ref}>
      <div className="gradient-blob" style={{ width: 400, height: 400, background: 'var(--accent-cyan)', top: '20%', right: '-10%' }} />

      <div className="container">
        {/* ── Section Header ── */}
        <div className="section-header">
          <motion.span className="accent-text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            // about.me
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}>
            Who I Am
          </motion.h2>
        </div>

        {/* ── Top: Photo + Bio ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'center', marginBottom: '5rem' }}>
          {/* Photo */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 300, height: 360,
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(0,245,212,0.1) 0%, rgba(124,58,237,0.15) 100%)',
                border: '1px solid var(--border-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '0.5rem',
                overflow: 'hidden', position: 'relative',
              }}>
                <img
                  src="/assets/photo.jpg"
                  alt="Yohannes Gizachew"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(105deg, transparent 40%, rgba(0,245,212,0.04) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s linear infinite',
                }} />
              </div>

              {/* Availability badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                style={{
                  position: 'absolute', bottom: -20, right: -20,
                  background: 'var(--glass)', border: '1px solid var(--border-accent)',
                  backdropFilter: 'blur(12px)', borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1.25rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  boxShadow: 'var(--shadow-glow)',
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'block', boxShadow: '0 0 8px #22c55e' }} />
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>Available for hire</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio + info + stats */}
          <div>
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
              style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '2rem' }}
            >
              {personal.bio}
            </motion.p>

            {/* Info rows */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={4}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}
            >
              {[
                { icon: FiMapPin, label: 'Location', value: personal.location },
                { icon: FiMail,   label: 'Email',    value: personal.email },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <Icon style={{ color: 'var(--accent-cyan)', fontSize: '1rem', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', minWidth: 60 }}>{label}:</span>
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{value}</span>
                </div>
              ))}
            </motion.div>

            {/* Download CV */}
            <motion.a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={5}
              style={{ display: 'inline-flex', textDecoration: 'none', marginBottom: '3rem' }}
            >
              <FiDownload /> Download CV
            </motion.a>

            {/* Stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={6}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}
            >
              {personal.stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="glass-card"
                  style={{ padding: '1.25rem 1rem', textAlign: 'center', borderRadius: 'var(--radius-md)' }}
                >
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--accent-cyan)', lineHeight: 1 }}>
                    {value}+
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.35rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: 1 }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Bottom: Experience & Education Tabs aligned to right column ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={7}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem' }}
        >
          {/* Empty placeholder matching photo column */}
          <div />

          {/* Tabs — same width as the bio column above */}
          <div>
            {/* Tab header */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: '0', width: 'fit-content' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.75rem 2rem',
                    background: 'none',
                    border: 'none',
                    borderBottom: activeTab === tab.id ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                    color: activeTab === tab.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    bottom: '-1px',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'experience' ? <ExperienceTab /> : <EducationTab />}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #about .container > div:nth-child(2) > div:first-child { display: none !important; }
          #about .container > div:nth-child(2) > div:last-child > div:nth-child(5) > div { grid-template-columns: repeat(2, 1fr) !important; }
          #about .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
          #about .container > div:nth-child(3) > div:first-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}


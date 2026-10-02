import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '../data/portfolioData';
import { FiCheck } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.03) 50%, transparent 100%)',
      }}
    >
      {/* Blobs */}
      <div
        className="gradient-blob"
        style={{ width: 380, height: 380, background: 'var(--accent-cyan)', top: '10%', right: '-8%' }}
      />
      <div
        className="gradient-blob"
        style={{ width: 300, height: 300, background: 'var(--accent-violet)', bottom: '10%', left: '-6%' }}
      />

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.span
            className="accent-text"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >
            // what.i.do
          </motion.span>
          <motion.h2
            className="section-title"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
          >
            Services
          </motion.h2>
          <motion.p
            className="section-subtitle"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
          >
            End-to-end solutions — from design to deployment
          </motion.p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 3}
              style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${svc.accent}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 56, height: 56,
                  borderRadius: 'var(--radius-md)',
                  background: `${svc.accent}18`,
                  border: `1px solid ${svc.accent}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem',
                  marginBottom: '1.25rem',
                  boxShadow: `0 0 20px ${svc.accent}20`,
                }}
              >
                {svc.emoji}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {svc.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: 1.75,
                  marginBottom: '1.5rem',
                }}
              >
                {svc.description}
              </p>

              {/* Feature list */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {svc.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <FiCheck
                      style={{ color: svc.accent, flexShrink: 0, fontSize: '0.85rem' }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services .container > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #services .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

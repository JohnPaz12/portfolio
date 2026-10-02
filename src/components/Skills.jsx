import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills, professionalSkills } from '../data/portfolioData';
import * as Si from 'react-icons/si';

const categories = [
  { key: 'frontend', label: 'Frontend',      icon: '⚡', accent: 'var(--accent-cyan)'   },
  { key: 'backend',  label: 'Backend',        icon: '🔧', accent: 'var(--accent-violet)' },
  { key: 'design',   label: 'Tools & Design', icon: '🎨', accent: 'var(--accent-pink)'   },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

// ── Vertical skill row: [icon]  Name ────────────────────────
function SkillRow({ skill }) {
  const IconComponent = Si[skill.icon];
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.9rem',
        padding: '0.65rem 0.9rem',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid transparent',
        transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background    = `${skill.color}12`;
        e.currentTarget.style.borderColor   = `${skill.color}40`;
        e.currentTarget.style.boxShadow     = `0 0 16px ${skill.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background    = 'transparent';
        e.currentTarget.style.borderColor   = 'transparent';
        e.currentTarget.style.boxShadow     = 'none';
      }}
    >
      {IconComponent ? (
        <IconComponent style={{ fontSize: '1.6rem', color: skill.color, flexShrink: 0 }} />
      ) : (
        <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>📦</span>
      )}
      <span style={{
        fontSize: '0.9rem',
        fontWeight: 500,
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-main)',
      }}>
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(0,245,212,0.02) 50%, transparent 100%)',
      }}
    >
      <div className="gradient-blob" style={{ width: 350, height: 350, background: 'var(--accent-violet)', bottom: '10%', left: '-8%' }} />

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.span className="accent-text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            // my.skills
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}>
            Tech Stack
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}>
            Tools and technologies I use to bring ideas to life
          </motion.p>
        </div>

        {/* ── 3-column tech icon grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem', marginBottom: '3rem' }}>
          {categories.map(({ key, label, icon, accent }, ci) => (
            <motion.div
              key={key}
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={ci + 3}
              style={{ padding: '1.75rem' }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 'var(--radius-sm)',
                  background: `${accent}18`,
                  border: `1px solid ${accent}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem',
                }}>
                  {icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                    {label}
                  </h3>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {skills[key].length} skills
                  </span>
                </div>
              </div>

              {/* Vertical skill list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                {skills[key].map((skill) => (
                  <SkillRow key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Professional Skills ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={7}
          className="glass-card"
          style={{ padding: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: 40, height: 40, borderRadius: 'var(--radius-sm)',
              background: 'rgba(0,245,212,0.1)', border: '1px solid rgba(0,245,212,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
            }}>
              💼
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Professional Skills
              </h3>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Soft skills & work style
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {professionalSkills.map(({ label, icon }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(0,245,212,0.06)',
                  border: '1px solid rgba(0,245,212,0.18)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  cursor: 'default',
                  transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,245,212,0.12)'; e.currentTarget.style.boxShadow = '0 0 14px rgba(0,245,212,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,245,212,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          #skills .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

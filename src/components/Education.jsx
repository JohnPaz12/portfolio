import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
};

export default function Education() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} style={{ background:'linear-gradient(180deg, transparent 0%, var(--accent-cyan-dim) 50%, transparent 100%)' }}>
      <div className="container">
        <div className="section-header">
          <motion.span className="accent-text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            // my.education
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}>
            Education
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}>
            Academic and professional learning milestones
          </motion.p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'2rem', maxWidth:1000, margin:'0 auto' }}>
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 3}
              style={{ padding:'2rem', position:'relative', overflow:'hidden' }}
            >
              {/* Top accent bar */}
              <div style={{
                position:'absolute', top:0, left:0, right:0, height:3,
                background: i % 2 === 0
                  ? 'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))'
                  : 'linear-gradient(90deg, var(--accent-violet), var(--accent-pink))',
              }} />

              {/* Icon */}
              <div style={{
                width:60, height:60,
                borderRadius:'var(--radius-md)',
                background:'var(--accent-cyan-dim)',
                border:'1px solid var(--border-accent)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'2rem',
                marginBottom:'1.25rem',
              }}>
                {item.icon}
              </div>

              <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--accent-cyan)', display:'block', marginBottom:'0.5rem' }}>
                {item.period}
              </span>

              <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1rem', fontWeight:700, color:'var(--text-primary)', marginBottom:'0.5rem', lineHeight:1.4 }}>
                {item.degree}
              </h3>

              <p style={{ color:'var(--accent-cyan)', fontSize:'0.85rem', fontWeight:600, marginBottom:'0.75rem' }}>
                {item.institution}
              </p>

              <p style={{ color:'var(--text-secondary)', fontSize:'0.875rem', lineHeight:1.7 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #education .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1000px) {
          #education .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

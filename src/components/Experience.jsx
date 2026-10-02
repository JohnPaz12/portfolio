import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
};

export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref}>
      <div className="gradient-blob" style={{ width:350, height:350, background:'var(--accent-violet)', top:'10%', left:'-8%' }} />

      <div className="container">
        <div className="section-header">
          <motion.span className="accent-text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            // work.history
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}>
            Experience
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}>
            Where I&apos;m learning and growing
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position:'relative', maxWidth:800, margin:'0 auto' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{
              position:'absolute',
              left:'50%',
              top:0, bottom:0,
              width:2,
              background:'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-violet) 100%)',
              transformOrigin:'top',
              transform:'translateX(-50%)',
            }}
          />

          {experience.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i + 3}
                style={{
                  display:'grid',
                  gridTemplateColumns:'1fr 1fr',
                  gap:'3rem',
                  marginBottom:'3rem',
                  alignItems:'center',
                  position:'relative',
                }}
              >
                {/* Left side */}
                <div style={{ textAlign:'right', paddingRight:'1.5rem', ...(isLeft ? {} : { visibility:'hidden' }) }}>
                  {isLeft && (
                    <div className="glass-card" style={{ padding:'1.75rem', textAlign:'left' }}>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--accent-cyan)', display:'block', marginBottom:'0.4rem' }}>
                        {item.period}
                      </span>
                      <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.05rem', fontWeight:700, color:'var(--text-primary)', marginBottom:'0.25rem' }}>
                        {item.role}
                      </h3>
                      <p style={{ color:'var(--accent-cyan)', fontSize:'0.85rem', fontWeight:600, marginBottom:'0.75rem' }}>
                        {item.company}
                      </p>
                      <p style={{ color:'var(--text-secondary)', fontSize:'0.875rem', lineHeight:1.7, marginBottom:'1rem' }}>
                        {item.description}
                      </p>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag" style={{ fontSize:'0.7rem' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div style={{
                  position:'absolute',
                  left:'50%',
                  top:'50%',
                  transform:'translate(-50%, -50%)',
                  width:16, height:16,
                  borderRadius:'50%',
                  background: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-violet)',
                  border:'3px solid var(--bg-primary)',
                  boxShadow: i % 2 === 0 ? '0 0 20px var(--accent-cyan-glow)' : '0 0 20px var(--shadow-violet)',
                  zIndex:1,
                }} />

                {/* Right side */}
                <div style={{ paddingLeft:'1.5rem', ...(isLeft ? { visibility:'hidden' } : {}) }}>
                  {!isLeft && (
                    <div className="glass-card" style={{ padding:'1.75rem' }}>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--accent-violet)', display:'block', marginBottom:'0.4rem' }}>
                        {item.period}
                      </span>
                      <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.05rem', fontWeight:700, color:'var(--text-primary)', marginBottom:'0.25rem' }}>
                        {item.role}
                      </h3>
                      <p style={{ color:'var(--accent-violet)', fontSize:'0.85rem', fontWeight:600, marginBottom:'0.75rem' }}>
                        {item.company}
                      </p>
                      <p style={{ color:'var(--text-secondary)', fontSize:'0.875rem', lineHeight:1.7, marginBottom:'1rem' }}>
                        {item.description}
                      </p>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag tag-violet" style={{ fontSize:'0.7rem' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .container > div:nth-child(2) > div > div { grid-template-columns: 1fr !important; }
          #experience .container > div:nth-child(2) > div::before { left: 0 !important; }
          #experience .container > div:nth-child(2) > div > div:first-child { display: none !important; }
          #experience .container > div:nth-child(2) > div > div:nth-child(3) { padding-left: 1.5rem !important; visibility: visible !important; }
        }
      `}</style>
    </section>
  );
}

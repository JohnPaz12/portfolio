import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects, personal } from '../data/portfolioData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
};

function ProjectCard({ project, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top)  / rect.height - 0.5) * 12;
    const y = ((e.clientX - rect.left) / rect.width  - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.2s ease',
      }}
    >
      <div
        className="glass-card"
        style={{ padding:0, overflow:'hidden', height:'100%', display:'flex', flexDirection:'column' }}
      >
        {/* Project image / color band */}
        <div style={{
          height:200,
          background: index % 3 === 0
            ? 'linear-gradient(135deg, var(--accent-cyan-dim) 0%, var(--accent-violet-dim) 100%)'
            : index % 3 === 1
              ? 'linear-gradient(135deg, var(--accent-violet-dim) 0%, rgba(212,184,90,0.15) 100%)'
              : 'linear-gradient(135deg, rgba(212,184,90,0.15) 0%, var(--accent-cyan-dim) 100%)',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          fontSize:'4rem',
          position:'relative',
          overflow:'hidden',
        }}>
          {['🛒','✅','🎨'][index % 3]}
          {/* Shimmer */}
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)', backgroundSize:'200% 100%', animation:'shimmer 3s linear infinite' }} />

          {/* Featured badge */}
          {project.featured && (
            <div style={{ position:'absolute', top:16, right:16 }}>
              <span className="tag" style={{ fontSize:'0.7rem' }}>⭐ Featured</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding:'1.75rem', flex:1, display:'flex', flexDirection:'column' }}>
          <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.2rem', fontWeight:700, color:'var(--text-primary)', marginBottom:'0.75rem' }}>
            {project.title}
          </h3>
          <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.7, flex:1, marginBottom:'1.25rem' }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem', marginBottom:'1.5rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag" style={{ fontSize:'0.7rem' }}>{tag}</span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display:'flex', gap:'0.75rem' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ flex:1, justifyContent:'center', padding:'0.6rem 1rem', fontSize:'0.85rem', textDecoration:'none' }}
              >
                <FiGithub /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex:1, justifyContent:'center', padding:'0.6rem 1rem', fontSize:'0.85rem', textDecoration:'none' }}
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} style={{ background:'linear-gradient(180deg, transparent 0%, var(--accent-violet-dim) 50%, transparent 100%)' }}>
      <div className="gradient-blob" style={{ width:400, height:400, background:'var(--accent-cyan)', top:'30%', right:'-5%' }} />

      <div className="container">
        <div className="section-header">
          <motion.span className="accent-text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            // my.projects
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}>
            Featured Work
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}>
            Projects I&apos;m building as I learn and grow
          </motion.p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns: projects.length === 1 ? '1fr' : 'repeat(3, 1fr)', gap:'2rem', maxWidth: projects.length === 1 ? 420 : 'none', margin: projects.length === 1 ? '0 auto' : undefined }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={6}
          style={{ textAlign:'center', marginTop:'3rem' }}
        >
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ textDecoration:'none' }}
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          #projects .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}



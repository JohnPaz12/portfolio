import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi';
import { personal } from '../data/portfolioData';
import ParticleBackground from './ParticleBackground';

const TYPING_SPEED = 100;
const ERASE_SPEED  = 60;
const PAUSE        = 1800;

function useTypingEffect(words) {
  const [text,      setText]      = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping,  setIsTyping]  = useState(true);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (isTyping) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsTyping(false), PAUSE);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), ERASE_SPEED);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isTyping, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typedRole = useTypingEffect(personal.roles);
  const heroRef   = useRef(null);

  // Parallax on mouse move
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 20;
      const y = (e.clientY / h - 0.5) * 20;
      el.querySelectorAll('.parallax-shape').forEach((s, i) => {
        const depth = (i + 1) * 0.4;
        s.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      <ParticleBackground />

      {/* Parallax floating shapes */}
      <div className="parallax-shape" style={{ position:'absolute', top:'15%', right:'8%', width:280, height:280, borderRadius:'50%', background:'radial-gradient(circle, var(--accent-cyan-dim) 0%, transparent 70%)', transition:'transform 0.1s ease', pointerEvents:'none' }} />
      <div className="parallax-shape" style={{ position:'absolute', bottom:'20%', left:'5%', width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle, var(--accent-violet-dim) 0%, transparent 70%)', transition:'transform 0.15s ease', pointerEvents:'none' }} />
      <div className="parallax-shape" style={{ position:'absolute', top:'50%', left:'40%', width:120, height:120, borderRadius:'50%', background:'radial-gradient(circle, rgba(212,184,90,0.12) 0%, transparent 70%)', transition:'transform 0.2s ease', pointerEvents:'none' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
          {/* Left: Text */}
          <motion.div
            initial={{ opacity:0, x:-40 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, ease:'easeOut' }}
          >
            <motion.span
              className="accent-text"
              initial={{ opacity:0, y:-10 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.2 }}
            >
              👋 Hello, I&apos;m
            </motion.span>

            <motion.h1
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.3, duration:0.7 }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-cyan) 60%, var(--accent-violet) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {personal.name}
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.5 }}
              style={{ marginBottom:'1.5rem', height:'2.5rem', display:'flex', alignItems:'center' }}
            >
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'clamp(1rem, 2.5vw, 1.4rem)', color:'var(--accent-cyan)', fontWeight:700 }}>
                {typedRole}
                <span style={{ animation:'typing-cursor 1s step-end infinite', color:'var(--accent-cyan)', marginLeft:2 }}>|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.6, duration:0.7 }}
              style={{ color:'var(--text-secondary)', fontSize:'1.05rem', lineHeight:1.8, marginBottom:'2.5rem', maxWidth:480 }}
            >
              {personal.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.75 }}
              style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'3rem' }}
            >
              <Link to="projects" smooth duration={600}>
                <button className="btn btn-primary">
                  View Projects <FiArrowDown style={{ transform:'rotate(-90deg)' }} />
                </button>
              </Link>
              <Link to="contact" smooth duration={600}>
                <button className="btn btn-outline">
                  <FiMail /> Get In Touch
                </button>
              </Link>
              {personal.resumeUrl && (
                <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <FiDownload /> Download CV
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Right: Avatar orb */}
          <motion.div
            initial={{ opacity:0, scale:0.8 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ delay:0.4, duration:0.8, type:'spring' }}
            style={{ display:'flex', justifyContent:'center', alignItems:'center' }}
          >
            <div style={{ position:'relative', animation:'float 4s ease-in-out infinite' }}>
              {/* Outer glow ring */}
              <div className="glow-ring" style={{
                width:320, height:320,
                borderRadius:'50%',
                padding:3,
                background:'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet), var(--accent-pink))',
              }}>
                {/* Inner image area */}
                <div style={{
                  width:'100%', height:'100%',
                  borderRadius:'50%',
                  background:'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  overflow:'hidden',
                  border:'3px solid var(--bg-primary)',
                }}>
                  {/* Placeholder avatar — replace src with real photo path */}
                  <div style={{
                    width:'100%', height:'100%',
                    background:'linear-gradient(135deg, var(--accent-cyan-dim) 0%, var(--accent-violet-dim) 100%)',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:'0.5rem',
                  }}>
                    <span style={{ fontSize:'5rem' }}>👨‍💻</span>
                    <span style={{ fontSize:'0.7rem', color:'var(--text-muted)', fontFamily:'var(--font-mono)' }}>
                      // add your photo
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating skill badges */}
              {[
                { label:'MERN', x:-80, y:40, delay:1 },
                { label:'React', x:80, y:40, delay:1.2 },
                { label:'UI/UX', x:0, y:-90, delay:1.4 },
              ].map(({ label, x, y, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity:0, scale:0 }}
                  animate={{ opacity:1, scale:1 }}
                  transition={{ delay, type:'spring' }}
                  style={{
                    position:'absolute',
                    top:'50%', left:'50%',
                    transform:`translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    background:'var(--glass)',
                    border:'1px solid var(--border-accent)',
                    backdropFilter:'blur(12px)',
                    borderRadius:'var(--radius-full)',
                    padding:'0.35rem 0.9rem',
                    fontSize:'0.75rem',
                    fontFamily:'var(--font-mono)',
                    color:'var(--accent-cyan)',
                    whiteSpace:'nowrap',
                    boxShadow:'0 0 16px var(--accent-cyan-glow)',
                  }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.5 }}
        style={{
          position:'absolute', bottom:'2rem', left:'50%',
          transform:'translateX(-50%)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem',
          color:'var(--text-muted)', fontSize:'0.75rem', letterSpacing:2, textTransform:'uppercase',
        }}
      >
        <span>Scroll</span>
        <motion.div animate={{ y:[0,8,0] }} transition={{ repeat:Infinity, duration:1.5 }}>
          <FiArrowDown style={{ color:'var(--accent-cyan)' }} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #hero > .container > div { grid-template-columns: 1fr !important; }
          #hero > .container > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personal } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { label: 'about',    to: 'about'    },
  { label: 'services', to: 'services' },
  { label: 'skills',   to: 'skills'   },
  { label: 'projects', to: 'projects' },
  { label: 'contact',  to: 'contact'  },
];
const socials   = [
  { icon: FiGithub,    href: personal.social.github,    label: 'GitHub' },
  { icon: FiLinkedin,  href: personal.social.linkedin,  label: 'LinkedIn' },
  { icon: FiInstagram, href: personal.social.instagram, label: 'Instagram' },
  { icon: FaWhatsapp,  href: personal.whatsapp,         label: 'WhatsApp' },
  { icon: FiMail,      href: personal.social.email,     label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop:'1px solid var(--border)',
      paddingTop:'4rem',
      paddingBottom:'2.5rem',
      position:'relative',
      background:'linear-gradient(180deg, transparent 0%, var(--accent-cyan-dim) 100%)',
    }}>
      <div className="container">
        {/* Top row */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'3rem', marginBottom:'3rem', alignItems:'start' }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.5rem', color:'var(--text-primary)', marginBottom:'0.75rem' }}>
              Yohannes<span style={{ color:'var(--accent-cyan)' }}>.G</span>
            </div>
            <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.7, maxWidth:260 }}>
              Full-Stack Developer
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontSize:'0.75rem', color:'var(--accent-cyan)', fontFamily:'var(--font-mono)', letterSpacing:2, textTransform:'uppercase', marginBottom:'1rem' }}>
              Quick Links
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={600}
                  style={{
                    color:'var(--text-secondary)',
                    fontSize:'0.9rem',
                    cursor:'none',
                    textTransform:'capitalize',
                    transition:'color 0.2s, padding-left 0.2s',
                    display:'inline-block',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color='var(--accent-cyan)'; e.currentTarget.style.paddingLeft='6px'; }}
                  onMouseLeave={e => { e.currentTarget.style.color='var(--text-secondary)'; e.currentTarget.style.paddingLeft='0'; }}
                >
                  /{label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontSize:'0.75rem', color:'var(--accent-cyan)', fontFamily:'var(--font-mono)', letterSpacing:2, textTransform:'uppercase', marginBottom:'1rem' }}>
              Connect
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.6rem' }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:'0.5rem',
                    color:'var(--text-secondary)', fontSize:'0.9rem', textDecoration:'none',
                    transition:'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color='var(--accent-cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--text-secondary)'}
                >
                  <Icon size={14} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height:1, background:'var(--border)', marginBottom:'2rem' }} />

        {/* Bottom row — copyright centered, back-to-top right */}
        <div style={{ position:'relative', textAlign:'center', minHeight:'44px', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', fontFamily:'var(--font-mono)' }}>
            © Copyright 2026 Yohannes.G — All rights reserved.
          </p>

          {/* Back to top — absolutely positioned right */}
          <div style={{ position:'absolute', right:0, top:'50%', transform:'translateY(-50%)' }}>
            <Link to="hero" smooth duration={800}>
              <motion.button
                whileHover={{ scale:1.1, y:-3 }}
                whileTap={{ scale:0.95 }}
                style={{
                  width:44, height:44,
                  borderRadius:'50%',
                  background:'var(--accent-cyan-dim)',
                  border:'1px solid var(--border-accent)',
                  color:'var(--accent-cyan)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  cursor:'pointer',
                  fontSize:'1.1rem',
                }}
              >
                <FiArrowUp />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
          footer .container > div:last-child { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
}

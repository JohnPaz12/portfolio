// ① Add 'Home' link back  ② Remove 'Download CV' button from navbar
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { personal } from '../data/portfolioData';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home',     to: 'hero'     },
  { label: 'About',    to: 'about'    },
  { label: 'Services', to: 'services' },
  { label: 'Skills',   to: 'skills'   },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact',  to: 'contact'  },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('');
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '0.85rem 0' : '1.25rem 0',
        background: scrolled
          ? (theme === 'dark' ? 'rgba(5,10,19,0.88)' : 'rgba(240,244,248,0.92)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>

        {/* Logo */}
        <Link to="hero" smooth duration={600} style={{ cursor:'pointer' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.4rem', color:'var(--text-primary)', letterSpacing:'-0.5px' }}
          >
            <span style={{ color:'var(--accent-cyan)' }}>&lt;</span>
            {personal.name.split(' ')[0]}
            <span style={{ color:'var(--accent-cyan)' }}>/&gt;</span>
          </motion.div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display:'flex', gap:'2rem', listStyle:'none', alignItems:'center' }} className="nav-desktop">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                spy
                onSetActive={() => setActive(to)}
                style={{
                  color: active === to ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                  fontFamily: 'var(--font-main)',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
              >
                {label}
                {active === to && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position:'absolute', bottom:0, left:0, right:0,
                      height:'2px', background:'var(--accent-cyan)',
                      borderRadius:'9999px', boxShadow:'0 0 8px var(--accent-cyan)',
                    }}
                  />
                )}
              </Link>
            </li>
          ))}

          {/* Theme toggle */}
          <li>
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                width: 40, height: 40,
                borderRadius: '50%',
                background: 'var(--glass)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', fontSize: '1rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display:'none', background:'none', border:'none', color:'var(--text-primary)', fontSize:'1.5rem', cursor:'pointer' }}
          className="nav-hamburger"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, height:0 }}
            animate={{ opacity:1, height:'auto' }}
            exit={{ opacity:0, height:0 }}
            style={{
              background: theme === 'dark' ? 'rgba(5,10,19,0.97)' : 'rgba(240,244,248,0.98)',
              borderTop:'1px solid var(--border)',
              overflow:'hidden',
            }}
          >
            <div className="container" style={{ padding:'1.5rem', display:'flex', flexDirection:'column', gap:'1.25rem' }}>
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={600}
                  onClick={() => setOpen(false)}
                  style={{ color:'var(--text-secondary)', fontWeight:500, fontSize:'1rem', cursor:'pointer' }}
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                style={{
                  display:'inline-flex', alignItems:'center', gap:'0.5rem',
                  color:'var(--text-secondary)', fontWeight:500, fontSize:'1rem',
                  background:'none', border:'none', padding:0, cursor:'pointer',
                }}
              >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personal } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

const socialLinks = [
  { icon: FiGithub,    href: personal.social.github,    label: 'GitHub',    color: '#e2e8f0' },
  { icon: FiLinkedin,  href: personal.social.linkedin,  label: 'LinkedIn',  color: '#0077b5' },
  { icon: FiInstagram, href: personal.social.instagram, label: 'Instagram', color: '#e4405f' },
  { icon: FaWhatsapp,  href: personal.whatsapp,         label: 'WhatsApp',  color: '#25d366' },
  { icon: FiMail,      href: personal.social.email,     label: 'Email',     color: 'var(--accent-cyan)' },
];

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject || 'Portfolio Contact',
            message: form.message,
          },
          publicKey,
        );
      } else {
        // Dev fallback when EmailJS env vars are not configured
        await new Promise((res) => setTimeout(res, 1500));
      }
      setStatus('sent');
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputStyle = {
    width:'100%',
    background:'rgba(255,255,255,0.04)',
    border:'1px solid var(--border)',
    borderRadius:'var(--radius-sm)',
    color:'var(--text-primary)',
    fontFamily:'var(--font-main)',
    fontSize:'0.9rem',
    padding:'0.875rem 1rem',
    outline:'none',
    transition:'border-color 0.3s, box-shadow 0.3s',
    resize:'none',
  };

  const focusStyle = {
    borderColor: 'var(--accent-cyan)',
    boxShadow: '0 0 0 3px var(--accent-cyan-dim)',
  };

  return (
    <section id="contact" ref={ref} style={{ background:'linear-gradient(180deg, transparent 0%, var(--accent-violet-dim) 50%, transparent 100%)' }}>
      <div className="gradient-blob" style={{ width:400, height:400, background:'var(--accent-violet)', bottom:'0%', right:'-10%' }} />

      <div className="container">
        <div className="section-header">
          <motion.span className="accent-text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
            // let's.connect
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}>
            Get In Touch
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}>
            Have a project in mind? Let&apos;s build something amazing together.
          </motion.p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'4rem', alignItems:'start' }}>
          {/* Left: Info */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}>
            <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.4rem', fontWeight:700, color:'var(--text-primary)', marginBottom:'1rem' }}>
              Let&apos;s work together
            </h3>
            <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:'2.5rem' }}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
            </p>

            {/* Contact info */}
            {[
              { icon: FiMail,   label: personal.email,    href: personal.social.email },
              { icon: FiPhone,  label: personal.phone,    href: `tel:${personal.phone}` },
              { icon: FiMapPin, label: personal.location, href: '#' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.25rem', textDecoration:'none', transition:'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform='translateX(6px)'}
                onMouseLeave={e => e.currentTarget.style.transform='translateX(0)'}
              >
                <div style={{ width:44, height:44, borderRadius:12, background:'var(--accent-cyan-dim)', border:'1px solid var(--border-accent)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent-cyan)', fontSize:'1.1rem', flexShrink:0 }}>
                  <Icon />
                </div>
                <span style={{ color:'var(--text-secondary)', fontSize:'0.9rem' }}>{label}</span>
              </a>
            ))}

            {/* Social row */}
            <div style={{ marginTop:'2.5rem' }}>
              <p style={{ fontSize:'0.8rem', color:'var(--text-muted)', marginBottom:'1rem', fontFamily:'var(--font-mono)', letterSpacing:2, textTransform:'uppercase' }}>
                Follow me
              </p>
              <div style={{ display:'flex', gap:'0.75rem' }}>
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    whileHover={{ scale:1.15, y:-3 }}
                    style={{
                      width:44, height:44, borderRadius:'50%',
                      background:'var(--glass)',
                      border:'1px solid var(--border)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      color:'var(--text-secondary)',
                      fontSize:'1.1rem',
                      textDecoration:'none',
                      transition:'color 0.3s, border-color 0.3s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={4}>
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding:'2.5rem' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem' }}>
                <div>
                  <label style={{ display:'block', fontSize:'0.8rem', color:'var(--text-muted)', marginBottom:'0.4rem', fontFamily:'var(--font-mono)' }}>Name *</label>
                  <input
                    type="text" name="name" required
                    value={form.name} onChange={handleChange}
                    placeholder="Your Name"
                    style={inputStyle}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none'; }}
                  />
                </div>
                <div>
                  <label style={{ display:'block', fontSize:'0.8rem', color:'var(--text-muted)', marginBottom:'0.4rem', fontFamily:'var(--font-mono)' }}>Email *</label>
                  <input
                    type="email" name="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none'; }}
                  />
                </div>
              </div>

              <div style={{ marginBottom:'1rem' }}>
                <label style={{ display:'block', fontSize:'0.8rem', color:'var(--text-muted)', marginBottom:'0.4rem', fontFamily:'var(--font-mono)' }}>Subject</label>
                <input
                  type="text" name="subject"
                  value={form.subject} onChange={handleChange}
                  placeholder="Project Inquiry"
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none'; }}
                />
              </div>

              <div style={{ marginBottom:'1.75rem' }}>
                <label style={{ display:'block', fontSize:'0.8rem', color:'var(--text-muted)', marginBottom:'0.4rem', fontFamily:'var(--font-mono)' }}>Message *</label>
                <textarea
                  name="message" required rows={5}
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none'; }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
                style={{ width:'100%', justifyContent:'center', fontSize:'1rem', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? (
                  <>⏳ Sending...</>
                ) : status === 'sent' ? (
                  <>✅ Message Sent!</>
                ) : status === 'error' ? (
                  <>❌ Failed to send</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity:0, y:10 }}
                  animate={{ opacity:1, y:0 }}
                  style={{ textAlign:'center', color:'#22c55e', fontSize:'0.85rem', marginTop:'1rem' }}
                >
                  Thanks! I&apos;ll get back to you within 24 hours. 🚀
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity:0, y:10 }}
                  animate={{ opacity:1, y:0 }}
                  style={{ textAlign:'center', color:'#ef4444', fontSize:'0.85rem', marginTop:'1rem' }}
                >
                  Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #contact .container > div:nth-child(2) form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

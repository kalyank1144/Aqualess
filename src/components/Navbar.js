'use client';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Navbar() {
    return (
        <motion.nav
            className="glass-panel"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1200px',
                padding: '15px 30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ color: 'var(--primary)' }}>
                    <Sparkles size={24} />
                </div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
                    AQUA<span style={{ color: 'var(--primary)' }}>LESS</span>
                </h1>
            </div>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="nav-links">
                {['Services', 'Process', 'Pricing', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            transition: 'color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.color = 'var(--foreground)'}
                        onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                        {item}
                    </a>
                ))}
            </div>

            <button style={{
                background: 'var(--primary)',
                color: '#000',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '30px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 0 20px var(--primary-glow)',
                transition: 'transform 0.2s',
            }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
                Book Now
            </button>

            <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
        </motion.nav>
    );
}

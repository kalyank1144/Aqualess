'use client';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section id="contact" style={{ padding: '100px 5%', background: 'linear-gradient(180deg, var(--background) 0%, #020205 100%)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: '700' }}
                >
                    Bring <span className="text-gradient">AQUALESS</span> to Your Community
                </motion.h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '50px' }}>
                    We are currently onboarding exclusive gated communities in Hyderabad.
                    Register your interest and we'll reach out.
                </p>

                <form style={{ display: 'grid', gap: '20px', maxWidth: '500px', margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--glass-border)',
                            padding: '15px',
                            borderRadius: '10px',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Community Name / Location"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--glass-border)',
                            padding: '15px',
                            borderRadius: '10px',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--glass-border)',
                            padding: '15px',
                            borderRadius: '10px',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <button style={{
                        background: 'var(--primary)',
                        color: '#000',
                        padding: '15px',
                        borderRadius: '10px',
                        border: 'none',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}>
                        Get Started
                    </button>
                </form>
            </div>
        </section>
    );
}

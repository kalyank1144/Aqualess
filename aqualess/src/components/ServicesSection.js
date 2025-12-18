'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, MapPin, UserCheck, Sparkles, Clock } from 'lucide-react';

const services = [
    {
        icon: <Droplets size={32} />,
        title: "100% Waterless",
        desc: "Advanced polymer technology cleans and polishes without a single drop of water."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Scratch-Safe",
        desc: "Micro-emulsion formulas encapsulate dirt, lifting it safely away from the paint."
    },
    {
        icon: <Clock size={32} />,
        title: "Daily Care",
        desc: "Wake up to a sparkling car every morning with our daily exterior cleaning service."
    },
    {
        icon: <MapPin size={32} />,
        title: "At Your Spot",
        desc: "We come to your parking spot in your gated community. No movement required."
    },
    {
        icon: <UserCheck size={32} />,
        title: "Trained Pros",
        desc: "Background-verified, uniformed, and professionally trained cleaning experts."
    },
    {
        icon: <Sparkles size={32} />,
        title: "Premium Finish",
        desc: "Leaves a protective wax layer that repels dust and keeps your car shining longer."
    }
];

export default function ServicesSection() {
    return (
        <section id="services" style={{ padding: '100px 5%', position: 'relative' }}>
            <div style={{
                textAlign: 'center',
                marginBottom: '80px',
                maxWidth: '800px',
                margin: '0 auto 80px'
            }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: '700' }}
                >
                    Why Choose <span className="text-gradient">AQUALESS</span>?
                </motion.h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    We redefine car care with a process that is safer for your car and better for the planet.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 240, 255, 0.1)' }}
                        className="glass-panel"
                        style={{
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            cursor: 'default'
                        }}
                    >
                        <div style={{ color: 'var(--primary)', marginBottom: '10px' }}>
                            {service.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

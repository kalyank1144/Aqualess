'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Compact",
        price: "600",
        features: ["Daily Exterior Cleaning", "Weekly Interior Vacuum", "Tyre Dressing", "Monthly Waxing"]
    },
    {
        name: "Sedan",
        price: "800",
        popular: true,
        features: ["Daily Exterior Cleaning", "Weekly Interior Vacuum", "Tyre & Dashboard Polish", "Bi-Monthly Waxing", "Premium Glass Care"]
    },
    {
        name: "SUV / Luxury",
        price: "1000",
        features: ["Daily Exterior Cleaning", "Weekly Deep Interior", "Premium Detailer Polish", "Bi-Monthly Waxing", "Alloy Wheel Care", "Leather Conditioning"]
    }
];

export default function PricingSection() {
    return (
        <section id="pricing" style={{ padding: '100px 5%' }}>
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
                    Simple, Transparent <span className="text-gradient">Pricing</span>
                </motion.h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    Monthly subscriptions tailored to your vehicle type.
                </p>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                flexWrap: 'wrap',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel"
                        style={{
                            padding: '40px',
                            width: '350px',
                            position: 'relative',
                            border: plan.popular ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                            background: plan.popular ? 'linear-gradient(180deg, rgba(0, 240, 255, 0.05) 0%, rgba(10, 15, 30, 0.8) 100%)' : 'var(--glass-bg)'
                        }}
                    >
                        {plan.popular && (
                            <div style={{
                                position: 'absolute',
                                top: '-15px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'var(--primary)',
                                color: '#000',
                                padding: '5px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                fontWeight: '700'
                            }}>
                                MOST POPULAR
                            </div>
                        )}

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{plan.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '30px' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: '700' }}>₹{plan.price}</span>
                            <span style={{ color: 'var(--text-secondary)', marginLeft: '5px' }}>/ month</span>
                        </div>

                        <ul style={{ listStyle: 'none', marginBottom: '40px' }}>
                            {plan.features.map((feature, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                                    <Check size={18} color="var(--primary)" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '10px',
                            border: 'none',
                            background: plan.popular ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                            color: plan.popular ? '#000' : '#fff',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                            onMouseOver={(e) => {
                                if (!plan.popular) e.target.style.background = 'rgba(255,255,255,0.2)';
                            }}
                            onMouseOut={(e) => {
                                if (!plan.popular) e.target.style.background = 'rgba(255,255,255,0.1)';
                            }}
                        >
                            Choose Plan
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

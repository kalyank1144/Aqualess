'use client';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

function AnimatedSphere() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere visible args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#00f0ff"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.9}
                />
            </Sphere>
        </Float>
    );
}

export default function HeroSection() {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 5%',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                background: 'var(--primary)',
                filter: 'blur(200px)',
                opacity: 0.15,
                top: '20%',
                right: '10%',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                maxWidth: '1200px',
                width: '100%',
                zIndex: 1,
                alignItems: 'center'
            }} className="hero-grid">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            marginBottom: '20px',
                            color: 'var(--primary)',
                            fontWeight: '600',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem'
                        }}
                    >
                        Detailed. Waterless. Premium.
                    </motion.div>

                    <h1 style={{
                        fontSize: '4rem',
                        lineHeight: '1.1',
                        marginBottom: '24px',
                        fontWeight: '700'
                    }} className="hero-title">
                        The Future of <br />
                        <span className="text-gradient">Car Care</span> is Here.
                    </h1>

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '40px',
                        maxWidth: '500px'
                    }}>
                        AQUALESS brings showroom shine to your doorstep without using a single drop of water. Daily, scratch-safe exterior cleaning for gated communities.
                    </p>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <button style={{
                            background: 'var(--primary)',
                            color: '#000',
                            border: 'none',
                            padding: '16px 32px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            boxShadow: '0 0 25px var(--primary-glow)',
                        }}>
                            Start Subscription
                        </button>
                        <button style={{
                            background: 'transparent',
                            color: '#fff',
                            border: '1px solid var(--glass-border)',
                            padding: '16px 32px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '1rem',
                        }}>
                            Learn More
                        </button>
                    </div>
                </motion.div>

                {/* 3D Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ height: '600px', width: '100%', position: 'relative' }}
                    className="hero-3d"
                >
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[2, 5, 2]} intensity={1} />
                        <AnimatedSphere />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </motion.div>
            </div>

            <style jsx>{`
        @media (max-width: 968px) {
          .hero-grid {
            gridTemplateColumns: 1fr !important;
            text-align: center;
          }
          .hero-title {
             fontSize: 3rem !important;
          }
          .hero-3d {
            height: 400px !important;
            order: -1;
          }
        }
      `}</style>
        </section>
    );
}

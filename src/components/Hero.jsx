import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 6rem;
          padding-bottom: 6rem;
          position: relative;
          overflow: hidden;
          background: var(--bg-deeper);
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 100% 100% at 50% 50%, rgba(143, 185, 200, 0.08) 0%, rgba(143, 185, 200, 0.02) 50%, transparent 100%),
            var(--bg-deeper);
          z-index: 0;
        }
        .hero-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.15;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.8'/></svg>");
          z-index: 2;
        }
        .hero-waves {
          position: absolute;
          inset: auto -10vw -10vh -10vw;
          height: 100vh;
          z-index: 1;
          pointer-events: none;
          opacity: 0.3;
          mix-blend-mode: screen;
          mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 70%, transparent 100%);
        }
        .wave-line {
          position: absolute;
          width: 200vw;
          height: 100%;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><path d='M0,0 C300,100 900,-100 1200,0 L1200,120 L0,120 Z' fill='none' stroke='rgba(143,185,200,0.4)' stroke-width='2'/></svg>");
          background-size: 100vw 100%;
          background-repeat: repeat-x;
        }
        .wave-1 {
          bottom: 0;
          animation: waveMove 30s linear infinite;
        }
        .wave-2 {
          bottom: 20px;
          opacity: 1;
          animation: waveMove 40s linear infinite reverse;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><path d='M0,40 C400,-60 800,140 1200,40 L1200,120 L0,120 Z' fill='none' stroke='rgba(143,185,200,0.5)' stroke-width='1.5'/></svg>");
        }
        .wave-3 {
          bottom: 40px;
          opacity: 0.8;
          animation: waveMove 50s linear infinite;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><path d='M0,80 C500,180 700,-80 1200,80 L1200,120 L0,120 Z' fill='none' stroke='rgba(143,185,200,0.3)' stroke-width='3'/></svg>");
        }
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100vw); }
        }
      `}</style>
      
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-waves">
          <div className="wave-line wave-1"></div>
          <div className="wave-line wave-2"></div>
          <div className="wave-line wave-3"></div>
        </div>
        <div className="hero-grain"></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
          <img src="/Regencon.svg" alt="REGENCON Logo" className="hero-logo" style={{ height: '60px', margin: '0 auto 2rem', opacity: 0.9 }} />

          <h1 className="text-balance" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 400, lineHeight: 1.05 }}>
            Moldando o futuro da <span className="gradient-text">longevidade</span> e da medicina regenerativa
          </h1>

          <p className="hero-subtitle text-muted leading-relaxed text-balance" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Atualize-se em medicina regenerativa com segurança. Da ciência à prática clínica e de mercado, com autoridades de instituições globais.
          </p>

          <div className="hero-info-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#ffffff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} color="var(--color-primary)" />
              <span>São Paulo</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} color="var(--color-primary)" />
              <span>25 e 26 de <span className="desktop-text">setembro</span><span className="mobile-text">set.</span> de 2026</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <button className="btn-cta">
              GARANTIR A MINHA PARTICIPAÇÃO <ArrowRight size={18} />
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {["/Palestrantes/Kalil.png", "/Palestrantes/Juliano.png", "/Palestrantes/Claudia Medeiros.jpeg"].map((src, i) => (
                  <img key={i} src={src} alt="Idealizador" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid var(--bg-base)', objectFit: 'cover', zIndex: 3-i, position: 'relative', marginLeft: i > 0 ? '-12px' : '0' }} />
                ))}
              </div>
              <p className="hero-elite-text" style={{ fontSize: '1.1rem', color: '#A8AAA7', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Junte-se à elite da medicina
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

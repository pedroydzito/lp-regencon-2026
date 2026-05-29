import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section" style={{ position: 'relative', background: '#111312' }}>

      <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center' }}>
          <img src="/Regencon.svg" alt="REGENCON" style={{ height: '45px', margin: '0 auto 1.5rem', opacity: 0.8 }} />
          <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ciência, legitimidade e visão de mercado</p>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', fontWeight: 400 }}>
            Por que fazer parte da elite da medicina regenerativa no <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>REGENCON</span>?
          </h2>

          <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
            Porque a medicina mudou. E, <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>seja qual for a sua especialidade</strong>, o REGENCON oferece o que este novo momento exige para que o médico atue com segurança e para posicionar o Brasil como a referência em medicina regenerativa na América Latina:
          </p>

          <p style={{ fontSize: '1.05rem', fontWeight: 400, marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--text-main)' }}>
            Base científica séria, tradução clínica, regulação, direção de mercado e conexão com quem já ocupa a fronteira da medicina regenerativa.
          </p>

          <div className="glass card-hover final-cta-card" style={{ borderRadius: '2px', marginBottom: '2rem', border: '1px solid var(--border-medium)', background: 'rgb(13 20 35)' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '1rem', color: 'var(--text-main)' }}>
              A próxima grande distinção da prática médica já está em andamento.
            </p>
            <p className="text-muted" style={{ marginBottom: '3.5rem', fontSize: '1.05rem' }}>
              E ela reorganiza valor, demanda e autoridade. Garantir lugar no REGENCON é garantir lugar na elite da medicina regenerativa.
            </p>

            {/* Logos */}
            <div className="institutional-logos" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              {[
                { src: "/Instituições/LOGO_USP.png", alt: "USP", height: '28px' },
                { src: "/Instituições/LOGO_STANFORD.png", alt: "Stanford", height: '24px' },
                { src: "/Instituições/LOGO_DUKE.png", alt: "Duke", height: '28px' },
                { src: "/Instituições/LOGO_INCOR.png", alt: "InCor", height: '28px' },
                { src: "/Instituições/LOGO_ANVISA.png", alt: "ANVISA", height: '24px' },
                { src: "/Instituições/Associacao de Orgaos.png", alt: "Associação de Órgãos", height: '28px' }
              ].map((logo, i) => (
                <img 
                  key={i} 
                  src={logo.src} 
                  alt={logo.alt} 
                  style={{ 
                    height: logo.height, 
                    maxWidth: '100px', 
                    objectFit: 'contain', 
                    filter: 'brightness(0) invert(1)', 
                    opacity: 0.5,
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
                />
              ))}
            </div>

            <button className="btn-cta">
              Quero garantir meu lugar <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

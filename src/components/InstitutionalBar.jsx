import React from 'react';

export default function InstitutionalBar() {
  return (
    <section style={{ padding: '2.5rem 0', background: 'rgb(13 20 35)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <p style={{ textAlign: 'center', fontSize: '1.05rem', color: 'var(--text-muted)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '2rem' }}>
          Autoridades de instituições globais
        </p>
        <div className="institutional-logos" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2.5rem' }}>
          {[
            { src: "/Instituições/LOGO_USP.png", alt: "USP", height: '32px' },
            { src: "/Instituições/LOGO_STANFORD.png", alt: "Stanford", height: '28px' },
            { src: "/Instituições/LOGO_DUKE.png", alt: "Duke", height: '32px' },
            { src: "/Instituições/LOGO_INCOR.png", alt: "InCor", height: '32px' },
            { src: "/Instituições/LOGO_ANVISA.png", alt: "ANVISA", height: '28px' },
            { src: "/Instituições/Associacao de Orgaos.png", alt: "Associação de Órgãos", height: '32px' }
          ].map((logo, i) => (
            <img 
              key={i} 
              src={logo.src} 
              alt={logo.alt} 
              style={{ 
                height: logo.height, 
                maxWidth: '120px', 
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
      </div>
    </section>
  );
}

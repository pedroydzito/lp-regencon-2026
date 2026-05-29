import React from 'react';

export default function Editorial() {
  return (
    <>
      <style>{`
        .section-editorial {
          position: relative;
          background: var(--bg-deeper);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          overflow: hidden;
        }
        .editorial-frame {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .editorial-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('https://placehold.co/1920x1080/181B1B/6B7475?text=Medicina+Regenerativa');
          background-size: cover;
          background-position: center;
          filter: grayscale(0.6) brightness(0.5);
          z-index: 0;
        }
        .editorial-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(10, 11, 11, 0.4) 0%, rgba(10, 11, 11, 0.9) 70%, rgba(10, 11, 11, 0.98) 100%),
            linear-gradient(to bottom, rgba(10, 11, 11, 0.5) 0%, transparent 35%, rgba(10, 11, 11, 0.9) 100%);
          z-index: 1;
        }
        .editorial-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 6rem 2rem;
          display: flex;
          justify-content: center;
        }
        .editorial-text {
          max-width: 800px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        @media (max-width: 768px) {
          .editorial-content {
            padding: 4rem 1.25rem;
          }
        }
      `}</style>
      
      <section className="section-editorial">
        <div className="editorial-frame">
          <div className="editorial-content">
            <div className="editorial-text">
              {/* Dr. Jorge Kalil Circle Avatar */}
              <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  inset: '-6px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(133, 205, 234, 0.4) 0%, rgba(232, 197, 71, 0.2) 100%)',
                  filter: 'blur(8px)',
                  zIndex: 0,
                  opacity: 0.8
                }} />
                <img 
                  src="/Palestrantes/Kalil.png" 
                  alt="Prof. Dr. Jorge Kalil" 
                  style={{ 
                    width: '130px', 
                    height: '130px', 
                    borderRadius: '50%', 
                    border: '1.5px solid var(--color-primary)', 
                    objectFit: 'cover',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                  }} 
                />
              </div>

              {/* Title */}
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4.5vw, 2.75rem)', 
                marginBottom: '2rem', 
                fontWeight: 400, 
                lineHeight: 1.2, 
                color: 'var(--text-main)', 
                letterSpacing: '-0.02em',
                textWrap: 'balance'
              }}>
                Sob liderança acadêmica de <br />
                <span className="gradient-text" style={{ fontWeight: 400 }}>Prof. Dr. Jorge Kalil</span>
              </h2>

              {/* Description */}
              <p className="leading-relaxed" style={{ 
                color: 'var(--text-main)', 
                fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', 
                marginBottom: '1rem', 
                fontWeight: 400, 
                letterSpacing: '-0.01em' 
              }}>
                A medicina mudou.
              </p>
              <p className="text-muted leading-relaxed" style={{ 
                color: 'var(--text-secondary)', 
                fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
                maxWidth: '680px', 
                fontWeight: 300 
              }}>
                Seja qual for a sua especialidade, atualize-se com segurança e faça parte da elite da medicina regenerativa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

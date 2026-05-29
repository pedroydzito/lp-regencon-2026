import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Benefits() {
  const items = [
    {
      title: "Base Clínica Obrigatória",
      desc: "A base obrigatória da medicina regenerativa, independentemente da sua especialidade",
      category: "Ciência Base",
      number: "01"
    },
    {
      title: "Tradução Científica",
      desc: "Tradução da ciência para a prática clínica",
      category: "Prática Clínica",
      number: "02"
    },
    {
      title: "Regulação Responsável",
      desc: "Regulação, evidência e direcionamento responsável",
      category: "Ética e Legislação",
      number: "03"
    },
    {
      title: "Estratégia de Mercado",
      desc: "Leitura de mercado e posicionamento médico",
      category: "Negócios e Carreira",
      number: "04"
    },
    {
      title: "Acesso à Elite",
      desc: "Contato direto com quem conduz a fronteira científica",
      category: "Conexão e Networking",
      number: "05"
    }
  ];

  return (
    <>
      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 5rem;
        }
        .benefit-card {
          background: #090a0a;
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .benefit-card:hover {
          background: #111312;
        }
        .benefit-card:hover .benefit-number {
          color: var(--color-primary) !important;
        }

        @media (min-width: 768px) {
          .benefits-grid {
            grid-template-columns: repeat(6, 1fr);
          }
          .benefit-card-0 { grid-column: span 2; }
          .benefit-card-1 { grid-column: span 2; }
          .benefit-card-2 { grid-column: span 2; }
          .benefit-card-3 { grid-column: span 3; }
          .benefit-card-4 { grid-column: span 3; }
        }
      `}</style>

      <section className="section" style={{ position: 'relative', background: '#111312' }}>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '850px', margin: '0 auto 5rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Legitimidade</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2.5rem', fontWeight: 400 }}>
              No REGENCON, o médico ganha <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>legitimidade</span> para atuar
            </h2>
            
            {/* Logos positioned above the description */}
            <div className="benefits-logos" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
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

            <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem' }}>
              Base científica séria, tradução clínica, regulação e leitura de mercado em um dos campos mais promissores da medicina moderna. Não se trata de assistir a palestras. Trata-se de compreender o movimento que já está transformando a medicina e ocupar posição com segurança.
            </p>
          </div>

          <h3 style={{ fontSize: '1.25rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>No REGENCON, você terá acesso a:</h3>
          
          <div className="benefits-grid">
            {items.map((item, index) => (
              <div key={index} className={`benefit-card card-hover benefit-card-${index}`}>
                <div className="benefit-number" style={{ 
                  fontSize: '1.05rem', 
                  color: 'rgba(255, 255, 255, 0.3)', 
                  fontFamily: '"Archivo", sans-serif', 
                  letterSpacing: '0.05em', 
                  marginBottom: '1.5rem',
                  transition: 'color 0.3s ease'
                }}>
                  {item.number}
                </div>
                <div style={{ 
                  fontSize: '1.05rem', 
                  color: 'var(--text-muted)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.12em', 
                  fontFamily: '"Archivo", sans-serif', 
                  fontWeight: 500, 
                  marginBottom: '1rem' 
                }}>
                  {item.category}
                </div>
                <h4 style={{ 
                  fontSize: '2rem', 
                  fontFamily: '"Archivo", sans-serif', 
                  fontWeight: 400, 
                  color: 'var(--text-main)', 
                  marginBottom: '1.25rem', 
                  lineHeight: 1.2 
                }}>
                  {item.title}
                </h4>
                <p className="text-muted" style={{ 
                  fontSize: '1.15rem', 
                  lineHeight: 1.6, 
                  margin: 0 
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Block separated from the grid */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingTop: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
              Tudo isso sob liderança acadêmica do Prof. Dr. Jorge Kalil e com autoridades ligadas a Stanford, Duke, FMUSP, InCor e ANVISA.
            </h3>
            <p style={{ fontWeight: 400, fontSize: '1.05rem', marginBottom: '2.5rem', color: 'var(--text-main)' }}>
              Pela primeira vez no Brasil, você terá acesso direto aos protocolos, à visão clínica e ao direcionamento científico de centros de referência de nível internacional.
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '3rem' }}>
              O REGENCON é o lugar onde se forma a <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>elite da medicina regenerativa</span>.
            </p>
            <button className="btn-cta">
              Garantir a minha participação <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}



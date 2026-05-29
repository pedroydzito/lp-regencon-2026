import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Start",
      price: "3.997",
      desc: "A sua entrada no congresso que marca um novo momento da medicina regenerativa no Brasil. Para médicos que desejam atualização séria, contato com a fronteira científica e acesso ao ambiente que reúne a elite da medicina regenerativa.",
      features: ["Acesso completo a todas as palestras, em todos os dias do congresso", "Kit REGENCON", "Certificado", "Coffee break", "Almoço"],
      link: "https://pay.hub.la/I1yX44oW8fDStjJpZ1mX",
      highlight: false,
      soldOut: false
    },
    {
      name: "Expert",
      price: "4.997",
      desc: "A categoria ideal para quem deseja aprofundamento, repertório e acesso ampliado ao conteúdo. Pensada para médicos que querem sair do congresso com base mais sólida, visão estratégica e material de consulta posterior.",
      features: ["Acesso completo a todas as palestras, em todos os dias do congresso", "Gravação inteligente por 1 ano", "Concierge dedicada", "Kit REGENCON", "Certificado", "Coffee break", "Almoço"],
      link: "https://pay.hub.la/K12X44oW8fDStjJpZ9qV",
      highlight: true,
      soldOut: false
    },
    {
      name: "Prime VIP",
      price: "7.997",
      desc: "A experiência mais completa e estratégica do REGENCON. Para médicos que buscam legitimidade para atuar com segurança, proximidade com as principais lideranças do evento e networking de alto nível.",
      features: ["Acesso completo a todas as palestras, em todos os dias do congresso", "Acesso às áreas de networking", "Assento privilegiado e acesso prioritário", "Gravação inteligente por 1 ano", "Concierge dedicada", "Valet parking", "Coquetel REGENCON", "Kit premium", "Certificado", "Coffee break", "Almoço"],
      link: "#",
      highlight: false,
      soldOut: true
    }
  ];

  return (
    <section id="ingressos" className="section" style={{ position: 'relative', background: '#0a0b0b' }}>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Último Lote</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 400 }}>
            Faça parte da <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>elite</span> da medicina regenerativa
          </h2>
          <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem' }}>Ingressos por categoria</p>
        </div>

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {plans.map((plan, i) => (
            <div key={i} className="glass card-hover pricing-card" style={{
              padding: '3rem 2.5rem',
              borderRadius: '2px',
              position: 'relative',
              transform: plan.highlight ? 'translateY(-10px)' : 'translateY(0)',
              border: plan.highlight ? '1px solid var(--text-main)' : '1px solid var(--border-medium)',
              background: plan.highlight ? 'var(--bg-surface)' : '#0a0b0b',
              zIndex: plan.highlight ? 10 : 1,
              opacity: plan.soldOut ? 0.6 : 1,
            }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--bg-base)', padding: '0.2rem 1.2rem', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-main)', border: '1px solid var(--text-main)' }}>
                  RECOMENDADO
                </div>
              )}
              {plan.soldOut && (
                <div style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: '1px solid rgba(239,68,68,0.5)', color: '#f87171', padding: '0.2rem 0.6rem', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.05em', transform: 'rotate(2deg)' }}>
                  ESGOTADO
                </div>
              )}

              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 400, color: 'var(--text-main)' }}>{plan.name}</h3>

              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                <span style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 400 }}>R$</span>
                <span style={{ fontSize: '3rem', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--text-main)' }}>{plan.price}</span>
              </div>

              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-subtle)' }}>
                {plan.desc}
              </p>

              <p style={{ fontSize: '1.05rem', fontWeight: 400, marginBottom: '1.25rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inclui:</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {plan.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    <div style={{ padding: '2px', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={16} color="var(--text-main)" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {plan.soldOut ? (
                <button disabled style={{ width: '100%', padding: '1rem', borderRadius: '2px', border: '1px solid var(--border-medium)', background: 'transparent', color: 'var(--text-muted)', fontFamily: 'Archivo', fontWeight: 400, cursor: 'not-allowed', fontSize: '1.05rem' }}>
                  Esgotado
                </button>
              ) : (
                <button className="btn-cta" style={{ width: '100%', justifyContent: 'center' }}>
                  Garantir vaga <ArrowRight size={16} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4.5rem' }}>
          <button 
            style={{ 
              display: 'inline-block',
              fontSize: '1.05rem', 
              color: 'var(--text-muted)', 
              textDecoration: 'underline', 
              textUnderlineOffset: '5px',
              letterSpacing: '0.05em', 
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-main)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Fale com um gerente de relacionamento e verifique elegibilidade
          </button>
        </div>
      </div>
    </section>
  );
}

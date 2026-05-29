import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: "O evento é voltado apenas para médicos?", a: "Sim. A admissão ao congresso exige o registro profissional (CRM), garantindo o nível técnico, a curadoria do conteúdo e a altíssima qualidade do networking." },
    { q: "Haverá certificado de participação?", a: "Absolutamente. Todos os participantes receberão um certificado com chancela acadêmica e carga horária correspondente." },
    { q: "As palestras ficarão gravadas?", a: "O acesso às gravações é um benefício de longo prazo exclusivo dos ingressos Expert (disponível por 6 meses) e VIP (acesso vitalício)." },
    { q: "Como funciona a Sessão de Mentoria do VIP?", a: "O ingresso VIP dá direito a uma sessão fechada super exclusiva (Almoço/Jantar) na qual os participantes poderão interagir diretamente com as maiores autoridades do setor, debatendo casos e estratégias." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" style={{ position: 'relative', background: '#111312' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 400 }}>
            Perguntas <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Frequentes</span>
          </h2>
          <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem' }}>
            Tudo o que você precisa saber antes de confirmar a sua vaga na imersão médica mais aguardada de 2026.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="card-hover" style={{ borderBottom: '1px solid var(--border-medium)', overflow: 'hidden' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ 
                  width: '100%', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 400, cursor: 'pointer',
                  textAlign: 'left', fontFamily: 'Archivo'
                }}
              >
                {faq.q}
                <div style={{ 
                  color: openIndex === i ? 'var(--color-primary)' : 'var(--text-muted)'
                }}>
                  <ChevronDown size={20} style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                </div>
              </button>
              <div style={{ 
                maxHeight: openIndex === i ? '250px' : '0', 
                overflow: 'hidden', 
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <p style={{ padding: '0 0 1.5rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.05rem' }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

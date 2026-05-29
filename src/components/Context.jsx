import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

export default function Context() {
  return (
    <section className="section" style={{ position: 'relative', background: '#0a0b0b', overflow: 'hidden', padding: '8rem 0' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <Globe size={14} />
            Global Insights
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 400, maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)' }}>
            A medicina regenerativa <span className="gradient-text">redefiniu o mapa global</span> da prática médica
          </h2>
          <p className="text-muted leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '1.5rem auto 0' }}>
            E, na América Latina, os nossos países vizinhos já avançaram de forma expressiva e ocupam posição privilegiada nesse novo cenário.
          </p>
        </div>

        <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          
          {/* Left Column: Context Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Chile */}
            <div className="glass card-hover" style={{ padding: '2.5rem', borderRadius: '2px', background: 'rgba(15, 18, 18, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-medium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Globe size={18} color="var(--color-primary)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: 0, color: 'var(--text-main)' }}>Chile</h3>
              </div>
              <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem' }}>
                A <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>Cells for Cells</strong> consolidou um dos ecossistemas mais sofisticados da região em terapia celular, com mais de <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>120 publicações científicas</strong>, 17 famílias de patentes e integração concreta entre ciência, pesquisa translacional e mercado.
              </p>
            </div>

            {/* México */}
            <div className="glass card-hover" style={{ padding: '2.5rem', borderRadius: '2px', background: 'rgba(15, 18, 18, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-medium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Globe size={18} color="var(--color-primary)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: 0, color: 'var(--text-main)' }}>México</h3>
              </div>
              <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem' }}>
                A medicina regenerativa já opera em <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>escala internacional</strong>. A R3 Stem Cell atua fortemente na América Latina e possui mais de 80 clínicas, com mais de <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>28.000 procedimentos realizados</strong> em 8 países na última década, atraindo pacientes de diferentes partes do mundo para a <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>jornada internacional de tratamentos regenerativos</strong>. <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>Dr. Adeel Khan</strong>, um nome proeminente na área, recebe <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>celebridades internacionais</strong> para tratamento em uma de suas clínicas no <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>México</strong>, inclusive as <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>Kardashians</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="glass" style={{ borderRadius: '2px', overflow: 'hidden', height: '100%', position: 'relative', minHeight: '300px', border: '1px solid var(--border-medium)' }}>
            <img 
              src="/instagram_dr.akhan_DNGrgievSJ4_5.jpg" 
              alt="Dr. Adeel Khan com as Kardashians" 
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'center 60%',
                display: 'block', 
                filter: 'grayscale(0.6) contrast(1.1)' 
              }} 
            />
          </div>
          
        </div>

        {/* Brasil Card */}
        <div className="glass card-hover" style={{ 
          padding: '2.5rem', 
          borderRadius: '2px', 
          textAlign: 'center', 
          background: 'rgba(15, 18, 18, 0.85)', 
          backdropFilter: 'blur(10px)', 
          border: '1px solid var(--border-medium)' 
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Globe size={18} color="var(--color-primary)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: 0, color: 'var(--text-main)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Brasil</h3>
            </div>

            <h3 className="text-balance" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '1.5rem', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text-main)' }}>
              A medicina regenerativa <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>deixou de ser promessa</span>.
            </h3>
            
            <div className="text-muted leading-relaxed" style={{ fontSize: '1.05rem', margin: '0 auto 2.5rem', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                Ela já movimenta pacientes, capital, oferta clínica e reposicionamento médico na nossa região.
              </p>
              <p style={{ color: 'var(--text-main)', fontWeight: 400 }}>
                Você se sente preparado para que o Brasil seja o próximo polo da medicina regenerativa nas Américas?
              </p>
              <p>
                A medicina brasileira sempre foi referência internacional. Agora, chegou o momento de formar a elite da medicina regenerativa e fazer do Brasil um destino seguro para tratamentos regenerativos.
              </p>
              <p>
                No REGENCON, pela primeira vez no Brasil, você terá acesso direto a quem escreve protocolos, conduz pesquisa e traduz a fronteira científica em prática clínica e direção de mercado, com nomes ligados a Stanford, Duke, FMUSP, InCor e ANVISA.
              </p>
              <p>
                Um movimento necessário no momento mais oportuno da medicina moderna.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="btn-cta">
                GARANTIR A MINHA PARTICIPAÇÃO <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

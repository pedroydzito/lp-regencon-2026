import React from 'react';
import { TrendingUp, DollarSign, Zap } from 'lucide-react';

export default function Urgency() {
  return (
    <section className="section" style={{ position: 'relative', background: 'var(--bg-deeper)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '850px', margin: '0 auto 4rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>O Momento é Agora</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 400 }}>
            A medicina mudou. Em pouco tempo, a atualização em medicina regenerativa <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>deixará de ser opção</span>
          </h2>
          <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem' }}>
            A inteligência artificial está transformando a sociedade diante dos nossos olhos. A medicina regenerativa fará o mesmo com a prática médica.
          </p>
        </div>

        <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="glass card-hover" style={{ padding: '2.5rem', borderRadius: '2px', textAlign: 'center', borderTop: '2px solid var(--color-cta)' }}>
            <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={28} color="var(--color-cta)" />
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '0.5rem' }}>US$ 12–25 mil</h3>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>Faixa inicial de procedimentos com células-tronco na América Latina</p>
          </div>

          <div className="glass card-hover" style={{ padding: '2.5rem', borderRadius: '2px', textAlign: 'center', borderTop: '2px solid var(--color-cta)' }}>
            <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={28} color="var(--color-cta)" />
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Bilhões</h3>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>O mercado já movimenta bilhões e cresce dentro de uma economia na casa dos trilhões</p>
          </div>

          <div className="glass card-hover" style={{ padding: '2.5rem', borderRadius: '2px', textAlign: 'center', borderTop: '2px solid var(--color-cta)' }}>
            <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={28} color="var(--color-cta)" />
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Todas</h3>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>A atualização impactará todas as especialidades médicas</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.15rem', fontWeight: 400, color: 'var(--text-main)' }}>
            Atualizar-se em medicina regenerativa não será opção, mas <span style={{ color: 'var(--color-primary)' }}>condição</span> para o médico que deseja manter relevância.
          </p>
        </div>
      </div>
    </section>
  );
}

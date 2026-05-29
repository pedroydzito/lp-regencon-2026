import React from 'react';
import { TrendingUp, DollarSign, Zap } from 'lucide-react';

export default function Urgency() {
  return (
    <section className="section" style={{ position: 'relative', background: 'var(--bg-deeper)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '850px', margin: '0 auto 4rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>O Momento é Agora</div>
          <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 400, fontFamily: "'Archivo', sans-serif" }}>
            A medicina <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>mudou</span>.
          </h2>
          <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto' }}>
            Em pouco tempo, a atualização em medicina regenerativa deixará de ser opção e impactará todas as especialidades.
            <br />
            A inteligência artificial está transformando a sociedade diante dos nossos olhos.
            <br /><br />
            A medicina regenerativa fará o mesmo com a prática médica.
          </p>
        </div>

        <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="glass card-hover" style={{ padding: '2.5rem', borderRadius: '2px', textAlign: 'center', borderTop: '2px solid var(--color-cta)' }}>
            <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={28} color="var(--color-cta)" />
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '0.5rem' }}>US$ 12–25 mil</h3>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>Procedimentos com células-tronco na América Latina já atingem a faixa inicial de US$ 12 mil a US$ 25 mil.</p>
          </div>

          <div className="glass card-hover" style={{ padding: '2.5rem', borderRadius: '2px', textAlign: 'center', borderTop: '2px solid var(--color-cta)' }}>
            <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={28} color="var(--color-cta)" />
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Bilhões</h3>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>O mercado já movimenta bilhões. E cresce dentro de uma economia na casa dos trilhões.</p>
          </div>

          <div className="glass card-hover" style={{ padding: '2.5rem', borderRadius: '2px', textAlign: 'center', borderTop: '2px solid var(--color-cta)' }}>
            <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={28} color="var(--color-cta)" />
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '0.5rem' }}>Relevância</h3>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>Atualizar-se em medicina regenerativa não será opção, mas <span style={{ color: 'var(--color-primary)' }}>condição</span> para o médico que deseja manter relevância.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

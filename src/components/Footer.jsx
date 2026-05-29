import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-deeper)', padding: '5rem 0 3rem', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Main Grid */}
        <div className="responsive-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 0.9fr 0.9fr', 
          gap: '3rem 2rem', 
          marginBottom: '6rem'
        }}>
          {/* Col 1: Logo & Local */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <img src="/Regencon.svg" alt="REGENCON" style={{ height: '35px', opacity: 0.8 }} />
            <div style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              <div style={{ color: 'var(--text-main)' }}>25 e 26 de setembro de 2026</div>
              <strong style={{ display: 'block', color: 'var(--text-main)', fontWeight: 500, marginTop: '0.25rem' }}>Centro de Convenções Rebouças</strong>
              <div>Av. Rebouças, 600 | Pinheiros | São Paulo/SP</div>
            </div>
          </div>

          {/* Col 2: Organização */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <h4 style={{ 
              fontSize: '0.9rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'var(--text-main)', 
              fontWeight: 500 
            }}>
              Organização
            </h4>
            <div style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div>Instituto de Terapias Avançadas</div>
              <div>Instituto de Investigação em Imunologia</div>
            </div>
          </div>

          {/* Col 3: Produção */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <h4 style={{ 
              fontSize: '0.9rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'var(--text-main)', 
              fontWeight: 500 
            }}>
              Produção
            </h4>
            <div style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              <div>Zenbrace</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ 
          color: 'var(--text-muted)', 
          fontSize: '0.95rem', 
          borderTop: '1px solid var(--border-subtle)', 
          paddingTop: '2rem', 
          textAlign: 'center',
          letterSpacing: '0.05em' 
        }}>
          Copyright &copy; 2026 | Instituto de Terapias Avançadas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

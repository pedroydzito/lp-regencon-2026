import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-deeper)', padding: '4rem 0 2rem', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
          <img src="/Regencon.svg" alt="REGENCON" style={{ height: '40px', opacity: 0.6 }} />
          <p className="text-muted" style={{ maxWidth: '500px', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Centro de Convenções Rebouças | São Paulo<br/>
            25 e 26 de setembro de 2026
          </p>
          <p className="text-muted" style={{ fontSize: '1.05rem' }}>
            Uma realização do Instituto de Terapias Avançadas
          </p>
          <div style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', width: '100%', letterSpacing: '0.05em' }}>
            &copy; {new Date().getFullYear()} REGENCON. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

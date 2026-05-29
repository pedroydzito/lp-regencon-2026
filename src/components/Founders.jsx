import React from 'react';

export default function Founders() {
  const founders = [
    {
      name: "Prof. Dr. Jorge Kalil",
      creds: "MD, PhD, DrHC, FRCP (Lond.)",
      role: "Chief Academic Officer",
      socio: "Sócio-fundador",
      desc: (
        <>
          <p style={{ marginBottom: '1rem' }}>Referência internacional em imunologia, o Prof. Dr. Jorge Kalil construiu uma das trajetórias acadêmicas e científicas mais relevantes da medicina brasileira, marcada por contribuições decisivas à pesquisa aplicada, à inovação e ao desenvolvimento de terapias avançadas.</p>
          <p style={{ marginBottom: '1rem' }}>Professor Titular da Faculdade de Medicina da Universidade de São Paulo (FMUSP), mantém interlocução acadêmica com centros de excelência global, incluindo Stanford University e Harvard University.</p>
          <p>No Instituto de Terapias Avançadas, lidera a direção acadêmica e científica, assegurando rigor metodológico, consistência científica e alinhamento com os mais elevados padrões internacionais de formação médica.</p>
        </>
      ),
      img: "/Palestrantes/Kalil.png"
    },
    {
      name: "Juliano Leme",
      creds: "",
      role: "Co-CEO | Direção Geral e Estratégia de Expansão",
      socio: "Sócio-fundador",
      desc: (
        <>
          <p style={{ marginBottom: '1rem' }}>Executivo com mais de quinze anos de experiência em estratégia e desenvolvimento de negócios, com atuação em projetos de alta complexidade nos setores de saúde e marketing.</p>
          <p>À frente da direção geral e da estratégia de expansão, conduz a articulação entre ciência, inovação e crescimento institucional.</p>
        </>
      ),
      img: "/Palestrantes/Juliano.png"
    },
    {
      name: "Claudia Medeiros",
      creds: "",
      role: "Co-CEO | Direção Geral, Relações Comerciais e Institucionais",
      socio: "Sócia-fundadora",
      desc: (
        <>
          <p style={{ marginBottom: '1rem' }}>Executiva especializada na integração entre ciência, prática clínica e escala comercial no setor médico.</p>
          <p style={{ marginBottom: '1rem' }}>Com mais de doze anos de experiência em estratégia, sendo seis dedicados exclusivamente à saúde, esteve à frente de iniciativas que geraram milhões em receita.</p>
          <p>No Instituto de Terapias Avançadas, lidera a estratégia geral, desenvolvimento de produtos, performance comercial e as relações institucionais, contribuindo para a construção de uma plataforma de educação médica com visão de escala e foco em modelos de alto valor para a nova economia da medicina.</p>
        </>
      ),
      img: "/Palestrantes/Claudia Medeiros.jpeg"
    }
  ];

  return (
    <>
      <style>{`
        .founder-card {
          position: relative;
          padding: 0;
          background: #0a0b0b;
          border: 1px solid var(--border-medium);
          display: grid;
          grid-template-columns: 1fr 360px;
          align-items: stretch;
          border-radius: 0;
          margin-bottom: 2rem;
        }

        .founder-card:last-child {
          margin-bottom: 0;
        }

        .founder-card:hover {
          background: #0e1111;
        }

        .founder-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          padding: 4rem 3rem 4rem 4rem;
        }

        .founder-header {
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 1.25rem;
        }

        .founder-title-row {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .founder-name {
          font-size: clamp(1.4rem, 3vw, 1.75rem);
          font-weight: 400;
          color: var(--text-main);
          letter-spacing: var(--tracking-tight);
        }

        .founder-creds {
          font-size: 0.9rem;
          color: var(--color-primary);
          font-weight: 400;
          letter-spacing: 0.05em;
        }

        .founder-role {
          font-size: 1.05rem;
          color: var(--text-secondary);
          font-weight: 400;
          margin-top: 0.35rem;
        }

        .founder-socio {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: var(--tracking-widest);
          font-weight: 400;
          margin-top: 0.5rem;
        }

        .founder-desc {
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 1.05rem;
        }

        /* Figure */
        .founder-figure {
          position: relative;
          width: 100%;
          height: 100%;
          border-left: 1px solid var(--border-medium);
          overflow: hidden;
          background: #000;
          transition: border-color 0.4s var(--ease);
        }

        .founder-card:hover .founder-figure {
          border-color: var(--border-strong);
        }

        .founder-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: grayscale(0.2) brightness(0.9) contrast(1.05);
          transition: transform 0.8s var(--ease), filter 0.8s var(--ease);
        }

        .founder-card:hover .founder-img {
          transform: scale(1.03);
          filter: grayscale(0) brightness(1) contrast(1);
        }

        /* Corners */
        .founder-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          border: 1px solid var(--text-secondary);
          opacity: 0.4;
          transition: all 0.4s var(--ease);
        }

        .founder-card:hover .founder-corner {
          opacity: 1;
          width: 22px;
          height: 22px;
          border-color: var(--color-primary);
        }

        .founder-corner.tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
        .founder-corner.tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
        .founder-corner.bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
        .founder-corner.br { bottom: -1px; right: -1px; border-left: none; border-top: none; }

        @media (max-width: 880px) {
          .founder-card {
            grid-template-columns: 1fr;
            padding: 0;
          }

          .founder-figure {
            width: 100%;
            height: 350px;
            border-left: none;
            border-bottom: 1px solid var(--border-medium);
            order: -1;
          }
          
          .founder-info {
            padding: 2.5rem 2rem;
            order: 1;
          }
        }
      `}</style>

      <section className="section" style={{ position: 'relative', background: '#0a0b0b' }}>

        <div className="container" style={{ maxWidth: '1050px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Idealizadores</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', fontWeight: 400 }}>
              Conheça o <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Instituto de Terapias Avançadas</span>
            </h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem' }}>
              O Instituto de Terapias Avançadas nasceu com a missão de impulsionar o avanço e a aplicação das mais modernas abordagens em medicina regenerativa, terapias celulares e tecnologias emergentes em saúde, integrando ciência de fronteira, prática clínica e excelência educacional.
            </p>
            <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem', marginTop: '1rem' }}>
              Além do REGENCON, o Instituto desenvolve programs avançados em medicina regenerativa, como o <strong style={{ color: 'var(--text-main)', fontWeight: 400 }}>Fellowship</strong>, combinando experiência hands-on, mentoria de implementação e integração com inteligência artificial.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {founders.map((f, i) => (
              <div key={i} className="founder-card card-hover">
                {/* Corner indicators */}
                <div className="founder-corner tl" />
                <div className="founder-corner tr" />
                <div className="founder-corner bl" />
                <div className="founder-corner br" />

                {/* Left Column: Info */}
                <div className="founder-info">
                  <div className="founder-header">
                    <div className="founder-title-row">
                      <h3 className="founder-name">{f.name}</h3>
                      {f.creds && <span className="founder-creds">{f.creds}</span>}
                    </div>
                    <p className="founder-role">{f.role}</p>
                    <p className="founder-socio">{f.socio}</p>
                  </div>
                  <div className="founder-desc">
                    {f.desc}
                  </div>
                </div>

                {/* Right Column: Figure Portrait */}
                <div className="founder-figure">
                  <img src={f.img} alt={f.name} className="founder-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

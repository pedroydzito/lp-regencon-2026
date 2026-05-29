import React, { useRef, useState, useEffect } from 'react';

const speakers = [
  { name: "Prof. Dr. Jorge Kalil", creds: "MD, PhD, DrHC, FRCP (Lond.)", affil: "FMUSP e InCor", bio: "Professor Titular e Diretor do Serviço de Imunologia Clínica e Alergia do HC-FMUSP, Diretor do Laboratório de Imunologia do InCor e da Unidade de Terapia Celular do HC. +800 artigos publicados.", tema: "Perspectivas futuras em medicina regenerativa", img: "/Kalil.png" },
  { name: "Dra. Rosa Bacchetta", creds: "MD", affil: "Stanford University", bio: "Professora de Pediatria e Medicina Regenerativa na Stanford University, Califórnia, EUA, reconhecida na área de imunologia pediátrica e transplante de células-tronco.", tema: "Terapia gênica para IPEX Syndrome", img: "/Rosa Bacchetta.png" },
  { name: "Dra. Joanne Kurtzberg", creds: "MD", affil: "Duke University", bio: "Professora Titular da Cátedra Jerome Harris de Pediatria, Diretora do Marcus Center for Cellular Cures, Diretora do Carolinas Cord Blood Bank e Codiretora do Stem Cell Transplant Laboratory da Duke University.", tema: "Aplicações do sangue do cordão umbilical e dos tecidos do parto nos campos emergentes das terapias celulares e da medicina regenerativa", img: "/Joanne Kurtzberg.jpg" },
  { name: "Dr. João Batista da Silva Junior", creds: "MSc, PhD", affil: "ANVISA", bio: "Gestor na Gerência de Sangue, Tecidos, Células, Órgãos e Produtos de Terapia Avançada (GSTCO) da ANVISA.", tema: "Questões regulatórias de preparação e uso de novas terapias", img: "/Joao batista.jpg" },
  { name: "Dr. João Paulo Silva Nunes", creds: "PhD", affil: "InCor e FMUSP", bio: "Doutor em Genética e Pesquisador Sênior no InCor e na FMUSP. Atuou como Pesquisador Visitante no INSERM, França; Biocant Park, Universidade de Coimbra; e Universidade de Birmingham, Inglaterra. Foca no uso de células-tronco, edição gênica e metabolismo mitocondrial.", tema: "Células-tronco em medicina regenerativa", img: "/Joao Paulo Silva Nunes.jpeg" },
  { name: "Dra. Débora Levy", creds: "PhD", affil: "HC e FMUSP", bio: "Doutora em Ciências Médicas e pesquisadora científica do HC e da FMUSP. Atua no desenvolvimento de pesquisas voltadas à aplicação clínica com ênfase em regeneração tecidual, biologia celular e terapias com células-tronco.", tema: "Exossomos e terapias extracelulares em medicina regenerativa", img: "/Debora Levy.jpeg" },
  { name: "Dr. Samuel Couto", creds: "PhD", affil: "FMUSP e Fundação Pró-Sangue", bio: "Doutor em Biotecnologia. Coordenador do Laboratório de Terapia Celular da Fundação Pró-Sangue. Especialista em produção de terapia celular no NUTERA-SP, Instituto Butantan.", tema: "Produtos de terapia avançada", img: "/Samuel Couto.jpeg" },
  { name: "Dr. Ernesto Goulart", creds: "PhD, MSc, BPharm", affil: "USP", bio: "Professor Titular do Departamento de Genética e Biologia Evolutiva do Instituto de Biociências e Pesquisador do Centro de Estudos do Genoma Humano e Células-Tronco da USP. Membro premiado da ISSCR e da ISCT.", tema: "Engenharia de órgãos e tecidos e impressão 3D", img: "/Ernesto Goulart.JPG" },
  { name: "Dr. Claudio Costa Neto", creds: "PhD", affil: "FMUSP, InovaHC e Jeito Capital", bio: "Doutor em Biologia Molecular, Professor da FMUSP, Diretor Científico (CSO) e investidor operacional da Jeito Capital, Life Sciences, Paris, França. +100 artigos científicos publicados.", tema: "Investimento no desenvolvimento de novos produtos", img: "/Claudio Costa.jpeg" },
  { name: "Dr. Cadiele Oliana Reichert", creds: "PhD", affil: "FMUSP", bio: "Doutor em Ciências Médicas. Pesquisador do Grupo de Evidências do Mundo Real e Saúde Pública de Precisão, Laboratório de Investigação Médica em Patogênese e Terapia Direcionada em Oncoimuno-Hematologia da FMUSP.", tema: "Ensaios clínicos em terapias avançadas", img: "/Cadiele Oliana Reichert.jpeg" },
  { name: "Dra. Maria Goreti Freitas", creds: "PhD", affil: "DeScier Science LLC", bio: "Pesquisadora e co-líder da deScier. Embaixadora da Associação Brasileira de Startups de Saúde (ABSS).", tema: "Terapias de nova geração: estruturando o caminho da descoberta à clínica", img: "/Maria Goreti Freitas.jpeg" },
  { name: "Claudia Medeiros", creds: "Co-CEO", affil: "Instituto de Terapias Avançadas e REGENCON", bio: "Atua há mais de doze anos como executiva e esteve à frente de iniciativas que geraram milhões em revenue na área médica, traduzindo inovação em impacto e receita recorrente.", tema: "A nova economia da medicina: como a medicina regenerativa redefine valor e oportunidades para o médico", img: "/Claudia Medeiros.jpeg" },
  { name: "Dra. Carolina Muruci Cruz", creds: "MD", affil: "Pesquisadora", bio: "Pesquisadora na área de medicina regenerativa em ortopedia e traumatologia.", tema: "Lesão do manguito rotador", img: "/Carolina Muruci.png" },
  { name: "Dr. Vinícius Magno", creds: "PhD", affil: "UNIRIO e ICC", bio: "Professor Titular e Coordenador do Curso de Pós-Graduação em Cirurgia da Coluna Vertebral. Professor Adjunto do Departamento de Cirurgia Geral e Especializada da UNIRIO.", tema: "Abordagem regenerativa da doença degenerativa do disco intervertebral", img: "/Vinicius Magno.jpeg" },
  { name: "Dr. Pedro Nogueira Giglio", creds: "PhD", affil: "HC-FMUSP", bio: "Médico do Grupo de Joelho do HC-FMUSP. Membro da SBOT, da SBCJ e da ISCT.", tema: "Novas terapias em ortopedia: ligamentos e cartilagem", img: "/Pedro Nogueira.jpg" },
  { name: "Dr. Rodrigo Kuramoto", creds: "PhD", affil: "FMUSP", bio: "Neurocirurgião e cirurgião de coluna da FMUSP.", tema: "Terapias regenerativas: lesão medular", img: "/Rodrigo Kuramoto.jpg" },
  { name: "Dr. César Remuzgo", creds: "PhD, MSc, BSc", affil: "InCor", bio: "Doutor em Bioquímica, com atuação científica na interface estratégica entre Bioquímica e Química de Peptídeos e Proteínas. Pesquisador do InCor.", tema: "Peptídeos em medicina regenerativa", img: "/César Remuzgo.jpeg" },
  { name: "Dr. João Eduardo Nunes Salles", creds: "PhD", affil: "FCMSCSP, SBD e FLASO", bio: "Professor Adjunto da Faculdade de Ciências Médicas da Santa Casa de São Paulo. Presidente da Sociedade Brasileira de Diabetes (gestão 2026–2027). Secretário-Geral da FLASO.", tema: "Peptídeos no metabolismo e obesidade", img: "/João Eduardo Salles.jpg" },
  { name: "Dr. Frederico Mennucci de Haidar Jorge", creds: "PhD", affil: "HC-FMUSP e UNISA", bio: "Pesquisador especialista em Esclerose Múltipla e Esclerose Lateral Amiotrófica. Responsável pelo Ambulatório de Doença do Neurônio Motor do HC-FMUSP.", tema: "Medicina regenerativa em neurologia: utilização de células-tronco mesenquimais em ELA", img: "/Frederico Jorge.jpeg" },
  { name: "Dr. Leonardo Mendonça", creds: "MD, PhD", affil: "FMUSP e UNISA", bio: "Professor de Imunologia, Alergia e Reumatologia da UNISA. Pesquisador do Centro Nacional de Erros Inatos da Imunidade (CNE3i/FMUSP). Atuou no NIH, EUA e no IRCCS Gaslini, Itália.", tema: "Terapia gênica em erros inatos da imunidade", img: "/Leonardo Mendonça.jpeg" },
  { name: "Profa. Dra. Cristina Camargo", creds: "PhD", affil: "FMUSP-HC", bio: "Livre-docente em Cirurgia Plástica e Queimaduras do Departamento de Cirurgia da FMUSP. Coordenador do Laboratório de Investigação Médica de Microcirurgia e Cirurgia Plástica do HC.", tema: "Uso de derivados da gordura em cirurgia plástica: da bancada à prática clínica", img: "/Cristina Camargo.jpeg" },
  { name: "Dr. Jorge Hallak", creds: "PhD", affil: "FMUSP-HC e Androscience", bio: "Professor Livre-Docente em Medicina pela FMUSP. Chefe do Setor de Medicina Sexual e Andrologia. Fundador e Diretor Técnico-Científico do Centro Androscience.", tema: "Stem cells do testículo e como restaurar a função testicular", img: "/Jorge Hallak_01.jpeg" },
  { name: "Prof. Dr. Maurício Abrão", creds: "PhD", affil: "FMUSP-HC e BP", bio: "Professor Associado do Departamento de Obstetrícia e Ginecologia da FMUSP. Coordenador do Serviço de Ginecologia do Hospital BP.", tema: "Vesículas extracelulares e IA: o novo horizonte do diagnóstico da endometriose", img: "/Mauricio Simões Abrão.jpeg" },
  { name: "Prof. Dr. José Eduardo Krieger", creds: "PhD", affil: "FMUSP-HC e InCor", bio: "Professor Titular em Medicina Molecular junto ao Departamento de Cardiopneumologia da FMUSP. Diretor do Laboratório de Genética e Cardiologia Molecular do InCor-HC-FMUSP.", tema: "Medicina regenerativa em cardiologia", img: "/José Eduardo Krieger.jpg" },
];

export default function Speakers() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationId;
    let lastTime;
    const speed = 0.06; // pixels per ms
    const scrollContainer = scrollRef.current;
    
    const scroll = (time) => {
      if (scrollContainer && !isPaused) {
        if (lastTime != null) {
          const delta = time - lastTime;
          scrollContainer.scrollLeft += speed * delta;
          
          // Loop back to start seamlessly
          // The math works perfectly because of the 2rem padding-right on the track
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
          }
        }
        lastTime = time;
      } else {
        lastTime = null;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <>
      <style>{`
        .marquee-container {
          overflow-x: auto;
          width: 100%;
          position: relative;
          padding: 2rem 0;
          display: flex;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        .marquee-container::-webkit-scrollbar {
          display: none;
        }
        .marquee-track {
          display: flex;
          gap: 2rem;
          padding-right: 2rem; /* Ensures the gap is consistent for the math of scrollWidth/2 */
          width: max-content;
        }
        .speaker-card {
          width: 450px;
          flex-shrink: 0;
          padding: 2.5rem;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-medium);
          background: rgb(13 20 35);
          cursor: grab;
          transition: background 0.3s ease;
        }
        .speaker-card:active {
          cursor: grabbing;
        }
        .speaker-card:hover {
          background: rgb(20 30 45);
        }
        .full-width-breakout {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }
      `}</style>
      <section className="section" style={{ position: 'relative', background: '#0a0b0b', overflowX: 'hidden' }}>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Liderança Científica</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 400 }}>
              Autoridades nacionais e internacionais. <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Uma missão.</span>
            </h2>
            <p className="text-muted leading-relaxed" style={{ fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto 1.5rem' }}>
              Reunimos mais de 20 palestrantes que atuam na vanguarda da medicina regenerativa e da longevidade. Aprenda diretamente com pioneiros em protocolos de terapias regenerativas.
            </p>
            <p style={{ fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', fontWeight: 400, color: 'var(--text-main)' }}>
              Conecte-se com médicos, cientistas, fundadores e investidores que já estão moldando uma economia da longevidade na casa dos trilhões de dólares. <span style={{ color: 'var(--color-primary)' }}>Transforme a sua trajetória em dois dias no congresso que marca um novo momento para a prática médica no Brasil.</span>
            </p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <img src="/Regencon.svg" alt="REGENCON" style={{ height: '40px', margin: '0 auto', opacity: 0.8 }} />
            <p className="text-muted" style={{ fontSize: '1.05rem', marginTop: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Onde a ciência encontra a prática</p>
            <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginTop: '2rem', fontWeight: 400 }}>
              Nossos <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>palestrantes</span>
            </h3>
          </div>
        </div>

        <div className="full-width-breakout">
          <div 
            className="marquee-container"
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="marquee-track">
              {[...speakers, ...speakers].map((s, i) => (
                <div key={i} className="glass speaker-card card-hover">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                    <img src={s.img.startsWith('/Palestrantes/') ? s.img : `/Palestrantes${s.img}`} alt={s.name} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid var(--border-medium)', objectFit: 'cover', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.2, color: 'var(--text-main)', margin: 0 }}>{s.name}</h4>
                      {s.creds && <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.2, margin: 0 }}>{s.creds}</p>}
                      <p style={{ fontSize: '1.05rem', color: 'var(--color-primary)', lineHeight: 1.2, margin: 0 }}>{s.affil}</p>
                    </div>
                  </div>
                  <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>{s.bio}</p>
                  <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <p style={{ fontSize: '1.05rem', fontWeight: 400, color: 'var(--text-main)' }}>
                      <span className="text-muted" style={{ display: 'block', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Tema:</span>
                      {s.tema}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

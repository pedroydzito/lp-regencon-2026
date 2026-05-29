import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Coffee, Wine, Utensils } from 'lucide-react';

const day1 = [
  { time: '08:30', label: 'Credenciamento e Welcome Coffee', speaker: '', type: 'break', icon: 'coffee' },
  { time: '09:00', label: 'Células-tronco em medicina regenerativa', speaker: 'Dr. João Paulo Silva Nunes, PhD | InCor e FMUSP', type: 'lecture' },
  { time: '09:40', label: 'Exossomos e terapias extracelulares em medicina regenerativa', speaker: 'Dra. Débora Levy, PhD | HC-FMUSP', type: 'lecture' },
  { time: '10:20', label: 'Produtos de terapia avançada', speaker: 'Dr. Samuel Couto, PhD | FMUSP e Fundação Pró-Sangue', type: 'lecture' },
  { time: '11:00', label: 'Coffee Break', speaker: '', type: 'break', icon: 'coffee' },
  { time: '11:30', label: 'Engenharia de órgãos e tecidos e impressão 3D', speaker: 'Dr. Ernesto Goulart, PhD, MSc, BPharm | USP', type: 'lecture' },
  { time: '12:10', label: 'Investimento no desenvolvimento de novos produtos', speaker: 'Dr. Claudio Costa Neto, PhD | FMUSP e Jeito Capital', type: 'lecture' },
  { time: '12:50', label: 'Almoço e Networking', speaker: '', type: 'break', icon: 'lunch' },
  { time: '14:15', label: 'Ensaios clínicos em terapias avançadas', speaker: 'Dr. Cadiele Oliana Reichert, PhD | FMUSP', type: 'lecture' },
  { time: '14:55', label: 'Questões regulatórias de preparação e uso de novas terapias', speaker: 'Dr. João Batista da Silva Junior, PhD, MSc | ANVISA', type: 'lecture' },
  { time: '15:35', label: 'Terapias de nova geração: estruturando o caminho da descoberta à clínica', speaker: 'Dra. Maria Goreti Freitas, PhD | deScier Science LLC e ABSS', type: 'lecture' },
  { time: '16:15', label: 'Aplicações do sangue do cordão umbilical e dos tecidos do parto', speaker: 'Dra. Joanne Kurtzberg, MD | Duke University', type: 'lecture' },
  { time: '16:55', label: 'Coffee Break', speaker: '', type: 'break', icon: 'coffee' },
  { time: '17:25', label: 'A nova economia da medicina: como a medicina regenerativa redefine valor e oportunidades para o médico', speaker: 'Claudia Medeiros, Co-CEO | Instituto de Terapias Avançadas', type: 'lecture' },
  { time: '18:05', label: 'The Evolution of IPEX Syndrome: From Mechanism to Gene Therapy', speaker: 'Dra. Rosa Bacchetta, MD | Stanford University', type: 'lecture' },
  { time: '18:45', label: 'Perspectivas futuras em medicina regenerativa', speaker: 'Prof. Dr. Jorge Kalil, MD, PhD, DrHC, FRCP (Lond.) | FMUSP e InCor', type: 'lecture' },
  { time: '19:25', label: 'Coquetel com Dr. Jorge Kalil, fundadores, palestrantes e investidores', speaker: 'Networking e confraternização exclusiva (Ingresso VIP Premium)', type: 'special', icon: 'special' },
];

const day2 = [
  { time: '08:30', label: 'Welcome Coffee', speaker: '', type: 'break', icon: 'coffee' },
  { time: '09:00', label: 'Lesão do manguito rotador', speaker: 'Dra. Carolina Muruci Cruz, MD', type: 'lecture' },
  { time: '09:40', label: 'Abordagem regenerativa da doença degenerativa do disco intervertebral', speaker: 'Dr. Vinícius Magno, MD, PhD | UNIRIO e ICC', type: 'lecture' },
  { time: '10:20', label: 'Novas terapias em ortopedia: ligamentos e cartilagem', speaker: 'Dr. Pedro Nogueira Giglio, PhD | HC-FMUSP', type: 'lecture' },
  { time: '11:00', label: 'Terapias regenerativas: lesão medular', speaker: 'Dr. Rodrigo Kuramoto | FMUSP', type: 'lecture' },
  { time: '11:40', label: 'Coffee Break', speaker: '', type: 'break', icon: 'coffee' },
  { time: '12:10', label: 'Peptídeos em medicina regenerativa', speaker: 'Dr. César Remuzgo, PhD, MSc, BSc | InCor', type: 'lecture' },
  { time: '12:50', label: 'Uso de peptídeos no metabolismo e obesidade: canetas emagrecedoras', speaker: 'Dr. João Eduardo Nunes Salles, PhD | FCMSCSP, SBD e FLASO', type: 'lecture' },
  { time: '13:30', label: 'Medicina regenerativa em neurologia: utilização de células-tronco mesenquimais em ELA', speaker: 'Dr. Frederico Mennucci de Haidar, PhD | HC-FMUSP e UNISA', type: 'lecture' },
  { time: '14:10', label: 'Almoço e Networking', speaker: '', type: 'break', icon: 'lunch' },
  { time: '15:30', label: 'Estética regenerativa e metabolismo: a nova economia da longevidade e seus impactos no mercado médico', speaker: 'Claudia Medeiros, Co-CEO | Instituto de Terapias Avançadas', type: 'lecture' },
  { time: '16:10', label: 'Terapia gênica: erros inatos da imunidade', speaker: 'Dr. Leonardo Mendonça, MD, PhD | FMUSP e UNISA', type: 'lecture' },
  { time: '16:50', label: 'Uso de derivados da gordura em cirurgia plástica: da bancada à prática clínica', speaker: 'Profa. Dra. Cristina Camargo, MD, PhD | FMUSP-HC', type: 'lecture' },
  { time: '17:30', label: 'Stem cells do testículo e como restaurar a função testicular', speaker: 'Dr. Jorge Hallak, MD, PhD | FMUSP e Androscience', type: 'lecture' },
  { time: '18:10', label: 'Vesículas extracelulares e IA: o novo horizonte do diagnóstico da endometriose', speaker: 'Prof. Dr. Maurício Abrão, MD, PhD | FMUSP e Hospital BP', type: 'lecture' },
  { time: '18:50', label: 'Coffee Break', speaker: '', type: 'break', icon: 'coffee' },
  { time: '19:15', label: 'Endometriose como doença fibroinflamatória: a medicina regenerativa pode mudar o paradigma?', speaker: 'Prof. Dr. Maurício Abrão, MD, PhD | FMUSP e Hospital BP', type: 'lecture' },
  { time: '19:55', label: 'Medicina regenerativa em cardiologia', speaker: 'Prof. Dr. José Eduardo Krieger, MD, PhD | FMUSP e InCor', type: 'lecture' },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const days = [day1, day2];
  const dayLabels = ['Dia 1 — Sexta-feira, 25 de setembro', 'Dia 2 — Sábado, 26 de setembro'];

  const renderIcon = (type, iconName) => {
    if (iconName === 'coffee') return <Coffee size={16} className="text-muted" style={{ opacity: 0.7 }} />;
    if (iconName === 'lunch') return <Utensils size={16} className="text-muted" style={{ opacity: 0.7 }} />;
    if (iconName === 'special') return <Wine size={16} style={{ color: 'var(--color-primary)' }} />;
    return <Clock size={16} className="text-muted" style={{ opacity: 0.6 }} />;
  };

  return (
    <>
      <style>{`
        .timeline-container {
          position: relative;
          max-width: 850px;
          margin: 0 auto;
          padding-left: 3rem;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 9px;
          width: 1px;
          background: var(--border-subtle);
          z-index: 1;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.25rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -3rem;
          top: 0.4rem;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid var(--border-medium);
          background: #0a0b0b;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s var(--ease);
        }

        .timeline-item:hover .timeline-dot {
          border-color: var(--color-primary);
          box-shadow: 0 0 12px var(--color-primary);
          transform: scale(1.1);
        }

        /* Card styles */
        .timeline-card {
          position: relative;
          transition: all 0.4s var(--ease);
          border-radius: 0;
        }

        /* Break Type (Coffee break/Lunch) */
        .timeline-item.type-break {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .timeline-break-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1.5rem;
          background: rgba(255, 255, 255, 0.01);
          border: 1px dashed var(--border-subtle);
          color: var(--text-secondary);
        }

        .timeline-break-time {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .timeline-break-label {
          font-size: 1.05rem;
          font-weight: 400;
          color: var(--text-muted);
        }

        .timeline-lecture-card {
          position: relative;
          padding: 2rem 2rem 2.5rem 2rem;
          background: #111312;
          border: 1px solid var(--border-medium);
        }

        .timeline-item:hover .timeline-lecture-card {
          border-color: var(--border-strong);
          background: #151817;
        }

        .timeline-lecture-time {
          font-size: 0.9rem;
          color: var(--color-primary);
          font-weight: 500;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .timeline-lecture-badge {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.6rem;
        }

        .timeline-lecture-title {
          font-size: clamp(1.15rem, 2.5vw, 1.3rem);
          font-weight: 400;
          color: var(--text-main);
          line-height: 1.45;
          margin-bottom: 0.5rem;
          padding-right: 6rem;
        }

        .timeline-lecture-speaker {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 300;
          padding-right: 6rem;
        }

        /* Special Type */
        .timeline-item.type-special .timeline-lecture-card {
          background: linear-gradient(135deg, #111312 0%, #171d1c 100%);
          border-color: var(--color-primary);
        }

        .timeline-item.type-special:hover .timeline-lecture-card {
          background: linear-gradient(135deg, #151817 0%, #1c2423 100%);
          border-color: var(--color-primary);
          box-shadow: 0 0 15px rgba(143, 185, 200, 0.15);
        }

        /* Switcher slide styling */
        .switcher-btn {
          padding: 0.85rem 2.5rem;
          font-weight: 400;
          font-family: 'Archivo', sans-serif;
          font-size: 1.05rem;
          letter-spacing: var(--tracking-widest);
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s var(--ease);
          border-radius: 0;
          background: transparent;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .timeline-container {
            padding-left: 2rem;
          }
          .timeline-line {
            left: 9px;
          }
          .timeline-dot {
            left: -2rem;
          }
          .timeline-lecture-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <section id="agenda" className="section" style={{ position: 'relative', background: '#111312' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Programação</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 400 }}>
              Dias <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>25</span> e <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>26</span> de setembro de 2026
            </h2>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.05rem', color: '#ffffff' }}>
              <MapPin size={16} /> Centro de Convenções Rebouças | São Paulo
            </p>
            <div className="text-muted leading-relaxed" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem' }}>
              <p style={{ marginBottom: '1.25rem' }}>
                Dois dias imersivos para transformar a sua prática clínica.
                <br />
                O REGENCON reúne cerca de 1.000 médicos engajados com a medicina regenerativa, a longevidade e os novos vetores de valor da prática médica.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                As abordagens regenerativas já impulsionam movimentos decisivos: maior precisão, menor invasividade, novas perspectivas para doenças crônicas e degenerativas e novas possibilidades para a gestão do envelhecimento. A medicina está mudando de base. E este é o momento de posicionar o Brasil como o próximo polo da medicina regenerativa na América Latina. Prepare-se.
              </p>
              <p>
                Uma programação desenhada para o médico que atua ou deseja atuar, independentemente da especialidade
              </p>
            </div>
          </div>

          {/* Day switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '5rem' }}>
            <button 
              onClick={() => setActiveDay(0)} 
              className="switcher-btn"
              style={{ 
                border: activeDay === 0 ? '1px solid var(--text-main)' : '1px solid var(--border-medium)', 
                color: activeDay === 0 ? 'var(--bg-base)' : 'var(--text-muted)', 
                background: activeDay === 0 ? 'var(--text-main)' : 'transparent', 
              }}>
              Dia 1
            </button>
            <button 
              onClick={() => setActiveDay(1)} 
              className="switcher-btn"
              style={{ 
                border: activeDay === 1 ? '1px solid var(--text-main)' : '1px solid var(--border-medium)', 
                color: activeDay === 1 ? 'var(--bg-base)' : 'var(--text-muted)', 
                background: activeDay === 1 ? 'var(--text-main)' : 'transparent', 
              }}>
              Dia 2
            </button>
          </div>

          <div className="timeline-container">
            <div className="timeline-line" />
            
            {days[activeDay].map((item, i) => {
              const isBreak = item.type === 'break';
              const isSpecial = item.type === 'special';
              
              return (
                <div key={i} className={`timeline-item type-${item.type}`}>
                  <div className="timeline-dot">
                    {renderIcon(item.type, item.icon)}
                  </div>
                  
                  {isBreak ? (
                    <div className="timeline-card timeline-break-card">
                      <div className="timeline-break-label">{item.label}</div>
                    </div>
                  ) : (
                    <div className="timeline-card timeline-lecture-card card-hover">
                      <h3 className="timeline-lecture-title">{item.label}</h3>
                      {item.speaker && (
                        <p className="timeline-lecture-speaker">{item.speaker}</p>
                      )}
                      <div className="timeline-lecture-badge">
                        {isSpecial ? 'VIP Premium' : 'Palestra'}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

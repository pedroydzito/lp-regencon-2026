import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "01. Onde exatamente será realizado o REGENCON e como chego ao local?",
      a: [
        <>O <strong>REGENCON 2026</strong> será realizado no <strong>Centro de Convenções Rebouças</strong>, localizado na <strong>Av. Rebouças, 600</strong>, no bairro de <strong>Pinheiros, São Paulo/SP</strong>. O espaço faz parte do complexo do <strong>Hospital das Clínicas da Universidade de São Paulo</strong> e é uma das referências em eventos científicos e acadêmicos no Brasil.</>,
        <>A região é uma das mais privilegiadas de São Paulo, cercada por uma ampla rede de hotéis de diversas categorias, desde opções executivas até hospedagens mais acessíveis, além de restaurantes e serviços de apoio.</>,
        <>Para quem vem de fora de São Paulo, o <strong>Aeroporto de Congonhas</strong> fica a poucos quilômetros do local, com acesso rápido por aplicativo de transporte ou táxi. A região também é bem servida por transporte público, com a <strong>Estação Clínicas do metrô (Linha Verde)</strong> a poucos minutos de caminhada, além de fácil acesso pelas principais vias da cidade.</>
      ]
    },
    {
      q: "02. O Centro de Convenções Rebouças possui estacionamento?",
      a: [
        <>Sim. O <strong>Centro de Convenções Rebouças</strong> conta com estacionamento próprio no local, com capacidade para receber os participantes do evento com conforto e segurança.</>,
        <>Para os médicos que adquirirem o ingresso <strong>Prime VIP</strong>, o serviço de <strong>valet parking</strong> está incluso no pacote, o que significa que basta chegar ao local e entregar o veículo na recepção. Comodidade total para que o foco esteja inteiramente no conteúdo do congresso.</>
      ]
    },
    {
      q: "03. A alimentação está inclusa ou preciso me organizar por conta própria?",
      a: [
        <>Toda a alimentação está inclusa em todos os ingressos, independentemente da categoria escolhida.</>,
        <>Os participantes terão almoço servido nos dois dias do congresso, com menu cuidadosamente selecionado, além de <strong>coffee breaks</strong> entre as palestras ao longo de cada período.</>,
        <>A experiência gastronômica foi planejada para que o médico participante não precise se deslocar, perder tempo com a logística das refeições ou sair do ambiente do evento em nenhum momento. Tudo foi pensado para manter a imersão completa no conteúdo, do início ao fim de cada dia.</>
      ]
    },
    {
      q: "04. As palestras internacionais serão ministradas em inglês? Haverá tradução?",
      a: [
        <>Sim. As palestras internacionais serão ministradas em inglês, e todas elas contam com serviço de tradução simultânea.</>,
        <>Isso garante a compreensão integral de cada palestra, independentemente do nível de fluência em inglês do participante. Nenhum conteúdo será perdido por barreira de idioma.</>
      ]
    },
    {
      q: "05. Estou começando a me interessar por medicina regenerativa agora. Vou conseguir acompanhar o nível das palestras?",
      a: [
        <>Sim, com certeza. Essa é uma preocupação válida, e é importante esclarecer: o corpo de palestrantes do <strong>REGENCON</strong> é composto majoritariamente por professores titulares, pesquisadores seniores e docentes com décadas de experiência não apenas em pesquisa de ponta, mas também em ensino e formação de gerações de médicos.</>,
        <>São profissionais que integram o corpo docente de instituições como a <strong>Faculdade de Medicina da USP</strong>, o <strong>InCor, Stanford</strong> e <strong>Duke</strong>, e que formam médicos no mundo inteiro há anos. Isso significa que a capacidade pedagógica desse corpo acadêmico é tão rigorosa quanto a científica. Eles sabem ensinar.</>,
        <>O conteúdo do <strong>REGENCON</strong> foi estruturado para ser acessível e compreensível a quem está dando os primeiros passos na medicina regenerativa, independentemente da especialidade, e, ao mesmo tempo, relevante, aprofundado e atualizado para quem já atua na área. Você sairá do evento com segurança para implementar esse conhecimento e também poderá aprofundá-lo com as demais formações do <strong>Instituto de Terapias Avançadas</strong>.</>
      ]
    },
    {
      q: "06. As palestras serão gravadas? Poderei rever o conteúdo depois?",
      a: [
        <>Sim. Os ingressos <strong>Expert</strong> e <strong>Prime VIP</strong> incluem acesso completo à gravação inteligente de todas as palestras no pós-evento.</>,
        <>Na prática, isso significa que o participante poderá rever qualquer conteúdo apresentado no seu próprio ritmo, pausar e aprofundar pontos específicos, revisitar dados e referências citadas pelos palestrantes e consultar as apresentações sempre que surgir uma dúvida clínica ou uma necessidade de estudo no dia a dia do consultório. É como ter o congresso inteiro disponível como material de referência, sempre à mão.</>
      ]
    },
    {
      q: "07. O evento oferece certificado de participação?",
      a: [
        <>Sim. Todos os ingressos incluem certificado oficial de participação.</>,
        <>O certificado atesta a participação do médico no simpósio de medicina regenerativa de maior credibilidade das Américas, validado por um corpo acadêmico que inclui nomes de instituições como <strong>FMUSP, InCor, Stanford</strong> e <strong>Duke</strong>.</>,
        <>O documento pode ser utilizado para enriquecimento curricular, comprovação de educação médica continuada e como diferencial em processos seletivos, concursos e credenciamento junto a instituições de saúde.</>
      ]
    },
    {
      q: "08. A medicina regenerativa realmente se aplica à minha especialidade?",
      a: [
        <>Sim. O <strong>REGENCON 2026</strong> foi estruturado para entregar ao médico a base obrigatória da medicina regenerativa, independentemente da sua área de atuação.</>,
        <>A medicina regenerativa não se limita a uma única especialidade, nem pertence a um nicho restrito. Trata-se de um campo transversal, que influencia a prática médica em diferentes áreas ao redor do mundo, com impacto sobre reparo tecidual, modulação inflamatória, recuperação funcional, longevidade, metabolismo, dor, estética médica, fertilidade, neurologia, ortopedia, cardiologia, entre outras.</>,
        <>Mais do que discutir terapias isoladas, o congresso oferece uma visão ampla, séria e estrategicamente organizada do campo, com tradução clínica, leitura regulatória e visão de mercado.</>
      ]
    }
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
                maxHeight: openIndex === i ? '1000px' : '0', 
                overflow: 'hidden', 
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <div style={{ padding: '0 0 1.5rem', color: 'var(--text-secondary)' }}>
                  {faq.a.map((para, idx) => (
                    <p key={idx} style={{ lineHeight: 1.6, fontSize: '1.05rem', marginBottom: idx === faq.a.length - 1 ? 0 : '1rem' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

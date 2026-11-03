import React from 'react';
import { Users, UserCheck, PanelsTopLeft, Cpu, Heart } from 'lucide-react';

export default function DiferenciaisSection() {
  const diferenciais = [
    {
      icon: Users,
      title: 'Equipe Multidisciplinar',
      description: 'Fisioterapeutas, educadores físicos, nutricionistas e fonoaudiólogos trabalhando juntos no seu plano terapêutico.',
    },
    {
      icon: UserCheck,
      title: 'Atendimento Personalizado',
      description: 'Sessões individuais focadas no seu diagnóstico específico, evolução contínua e metas funcionais.',
    },
    {
      icon: PanelsTopLeft,
      title: 'Estrutura Premium',
      description: 'Consultórios privativos, estúdio de Pilates completo e ambiente planejado com luz natural para o seu conforto.',
    },
    {
      icon: Cpu,
      title: 'Tecnologia em Reabilitação',
      description: 'Equipamentos de fotobiomodulação (laser), biofeedback e eletroterapia avançada para acelerar a recuperação.',
    },
    {
      icon: Heart,
      title: 'Ambiente Acolhedor',
      description: 'Espaço humanizado com foco no bem-estar físico e mental, proporcionando uma experiência leve e motivadora.',
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-green/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-blue-light/40 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase">
            Por que escolher a Clínica Fisiovita?
          </span>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
            A excelência que o seu corpo merece
          </h2>
          <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Combinamos ciência médica, cuidado humanizado e infraestrutura de ponta para proporcionar uma jornada de reabilitação inovadora e altamente eficaz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-brand-green/40 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm shadow-brand-green/10">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-space font-bold text-lg text-brand-blue group-hover:text-brand-green transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

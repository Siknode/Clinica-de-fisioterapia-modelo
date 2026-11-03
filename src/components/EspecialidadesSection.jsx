import React from 'react';
import { Activity, Heart, Apple, MessageSquare, Dumbbell, ShieldCheck, ArrowRight } from 'lucide-react';

export default function EspecialidadesSection() {
  const especialidades = [
    {
      title: 'Fisioterapia Clínica',
      description: 'Tratamentos ortopédicos, neurológicos e desportivos fundamentados em evidência científica e alta tecnologia para aliviar dores e recuperar movimentos.',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?q=80&w=600&auto=format&fit=crop',
      ctaText: 'Falar com Fisioterapeuta',
      msg: 'Olá! Gostaria de mais informações sobre Fisioterapia Clínica.'
    },
    {
      title: 'Pilates Clínico',
      description: 'Aulas personalizadas para fortalecimento muscular, correção postural, flexibilidade e alívio de tensões, com fisioterapeutas certificados.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
      ctaText: 'Agendar Aula Experimental',
      msg: 'Olá! Gostaria de agendar uma aula experimental de Pilates.'
    },
    {
      title: 'Nutrição Integrativa',
      description: 'Planos alimentares sob medida para reabilitação metabólica, emagrecimento, performance esportiva e melhora da qualidade de vida.',
      icon: Apple,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop',
      ctaText: 'Consultar Nutricionista',
      msg: 'Olá! Gostaria de agendar uma consulta com a nutricionista.'
    },
    {
      title: 'Fonoaudiologia',
      description: 'Prevenção, avaliação e terapia da fala, linguagem, voz e deglutição, tanto para crianças quanto para adultos e idosos.',
      icon: MessageSquare,
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop',
      ctaText: 'Agendar Fonoaudióloga',
      msg: 'Olá! Gostaria de agendar uma avaliação com fonoaudióloga.'
    },
    {
      title: 'Musculação Terapêutica',
      description: 'Exercícios de força sob supervisão técnica com foco na prevenção de lesões, fortalecimento e longevidade muscular ativa.',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      ctaText: 'Conhecer Treinos',
      msg: 'Olá! Gostaria de saber mais sobre Musculação Terapêutica.'
    },
    {
      title: 'Reabilitação Física',
      description: 'Programas intensivos pós-trauma ou pós-cirurgia ortopédica para reconquistar a total funcionalidade e autonomia do paciente.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=600&auto=format&fit=crop',
      ctaText: 'Iniciar Reabilitação',
      msg: 'Olá! Preciso iniciar tratamento de Reabilitação Física pós-operatória.'
    },
    {
      title: 'Atendimento ao Idoso',
      description: 'Fisioterapia geriátrica com foco em equilíbrio, prevenção de quedas, mobilidade ativa e manutenção da independência no dia a dia.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop',
      ctaText: 'Fisioterapia Geriátrica',
      msg: 'Olá! Gostaria de informações sobre atendimento de fisioterapia para idosos.'
    }
  ];

  return (
    <section id="especialidades" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
              Especialidades de alta performance
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              Tratamentos focados nas necessidades individuais de cada paciente, executados por uma equipe multidisciplinar comprometida com a sua evolução.
            </p>
          </div>
          <a
            href="https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20as%20especialidades."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-brand-blue font-bold px-6 py-3 rounded-full text-xs transition-all duration-300 shadow-sm"
          >
            <span>Dúvidas sobre tratamentos?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {especialidades.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-brand-purple/30 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-brand-purple/10 transition-all duration-500 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-white text-brand-purple flex items-center justify-center shadow-lg border border-slate-100 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                    <IconComp className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-space font-bold text-lg text-brand-blue group-hover:text-brand-purple transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/5511999998888?text=${encodeURIComponent(item.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-purple hover:underline transition-all group-hover:translate-x-1 duration-300"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

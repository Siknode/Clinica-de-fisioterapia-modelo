import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function EquipeSection() {
  const equipe = [
    {
      nome: 'Dr. Lucas Andrade',
      cargo: 'Fisioterapeuta Ortopédico & Desportivo',
      registro: 'CREFITO 000.000-F',
      especialidades: ['Terapia Manual', 'Reabilitação de Joelho e Coluna', 'Dry Needling'],
      foto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop'
    },
    {
      nome: 'Dra. Beatriz Santos',
      cargo: 'Especialista em Pilates Clínico & RPG',
      registro: 'CREFITO 000.000-F',
      especialidades: ['Pilates Avançado', 'Reeducação Postural (RPG)', 'Fisioterapia Geriátrica'],
      foto: '/img/beatriz-santos.jpg'
    },
    {
      nome: 'Dra. Camila Rocha',
      cargo: 'Nutricionista Integrativa & Clínica',
      registro: 'CRN 000.000',
      especialidades: ['Nutrição Anti-inflamatória', 'Reabilitação Metabólica', 'Performance Muscular'],
      foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop'
    },
    {
      nome: 'Dr. Felipe Mendes',
      cargo: 'Fonoaudiólogo Clínico',
      registro: 'CRFa 00.000',
      especialidades: ['Terapia da Fala e Voz', 'Deglutição & Disfagia', 'Motricidade Orofacial'],
      foto: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase">Corpo Clínico</span>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
            Especialistas dedicados à sua recuperação
          </h2>
          <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Nossa equipe conta com profissionais altamente qualificados, em constante atualização científica e prontos para prestar o melhor atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipe.map((membro, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 text-center hover:bg-white hover:border-brand-purple/30 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img src={membro.foto} alt={membro.nome} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-space font-bold text-lg text-brand-blue">{membro.nome}</h3>
                  <p className="text-xs font-semibold text-brand-purple mt-0.5">{membro.cargo}</p>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-200/70 text-[10px] font-bold text-slate-600 mt-2">
                    {membro.registro}
                  </span>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-200/60 text-left">
                  {membro.especialidades.map((esp, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>{esp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20${encodeURIComponent(membro.nome)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold transition-colors shadow-sm"
              >
                Agendar Consulta
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

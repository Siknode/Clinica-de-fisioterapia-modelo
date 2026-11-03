import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function ResultadosSection() {
  const depoimentos = [
    {
      nome: 'Roberto Souza',
      tratamento: 'Hérnia de Disco & Pilates',
      texto: 'Cheguei à clínica travado das costas e sem conseguir caminhar direito. Em poucas semanas de fisioterapia e Pilates direcionado, voltei a jogar futebol e viver sem dor. Atendimento nota 1000!',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
      local: 'Cidade Modelo - SP'
    },
    {
      nome: 'Ana Lucia Mendes',
      tratamento: 'Pós-Operatório de Joelho',
      texto: 'A equipe é incrivelmente atenciosa. Fiz a reabilitação pós-cirurgia de ligamento cruzado e me surpreendi com a velocidade do resultado. A estrutura é limpa, ampla e os aparelhos são excelentes.',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop',
      local: 'Bairro Jardim - Cidade Modelo'
    },
    {
      nome: 'Carlos Eduardo Paiva',
      tratamento: 'Atendimento Geriátrico (Mãe)',
      texto: 'Trouxe minha mãe de 74 anos para trabalhar equilíbrio e fortalecimento. O carinho da equipe com os idosos é emocionante. Hoje ela tem muito mais segurança para andar sozinha.',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      local: 'Centro Modelo - SP'
    }
  ];

  return (
    <section id="resultados" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
            A opinião de quem confia em nosso trabalho
          </h2>
          <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Histórias reais de superação, alívio da dor e qualidade de vida devolvida aos nossos pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((dep, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-purple/10 group-hover:text-brand-purple/20 transition-colors" />

              <div className="space-y-4 z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans italic">
                  "{dep.texto}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-6 z-10">
                <img src={dep.foto} alt={dep.nome} className="w-12 h-12 rounded-full object-cover border-2 border-brand-purple/30" />
                <div>
                  <h4 className="font-space font-bold text-sm text-brand-blue flex items-center gap-1.5">
                    <span>{dep.nome}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green fill-brand-green/20" />
                  </h4>
                  <p className="text-xs font-semibold text-brand-purple">{dep.tratamento}</p>
                  <p className="text-[10px] text-slate-400">{dep.local}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

export default function BlogSection() {
  const artigos = [
    {
      titulo: '5 hábitos diários que causam dores na coluna e como evitá-los',
      categoria: 'Saúde da Coluna',
      tempo: '4 min de leitura',
      imagem: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
      resumo: 'Saiba como pequenas mudanças de postura no home office, ao celular e no sono evitam crises de lombalgia.'
    },
    {
      titulo: 'Pilates Clínico: O aliado número 1 no alívio de hérnia de disco',
      categoria: 'Pilates & Reabilitação',
      tempo: '5 min de leitura',
      imagem: 'https://images.unsplash.com/photo-1747240549807-fc3962949818?q=80&w=600&auto=format&fit=crop',
      resumo: 'Entenda os princípios biomecânicos do método Pilates no fortalecimento do core e descompressão discal.'
    },
    {
      titulo: 'Condromalácia patelar: Prevenção, fortalecimento e cuidados',
      categoria: 'Ortopedia',
      tempo: '3 min de leitura',
      imagem: 'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?q=80&w=600&auto=format&fit=crop',
      resumo: 'Descubra como proteger seus joelhos contra o desgaste da cartilagem com exercícios terapêuticos direcionados.'
    },
    {
      titulo: 'Mobilidade e equilíbrio: Como prevenir quedas na terceira idade',
      categoria: 'Fisioterapia Geriátrica',
      tempo: '4 min de leitura',
      imagem: 'https://images.unsplash.com/photo-1773227060944-dc7b00b09ae2?q=80&w=600&auto=format&fit=crop',
      resumo: 'Estratégias práticas e treinos proprioceptivos para manter os idosos seguros, firmes e independentes.'
    },
    {
      titulo: 'Alimentação anti-inflamatória no processo de reabilitação muscular',
      categoria: 'Nutrição Integrativa',
      tempo: '6 min de leitura',
      imagem: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop',
      resumo: 'A sinergia entre boa nutrição e fisioterapia para acelerar a regeneração tecidual e diminuir dores.'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Blog & Artigos</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
              Conteúdo científico traduzido para a sua saúde
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              Dicas de prevenção, artigos explicativos sobre patologias e orientações práticas escritas pelo nosso corpo clínico.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artigos.map((art, idx) => (
            <article
              key={idx}
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={art.imagem}
                    alt={art.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-brand-blue shadow-sm">
                    {art.categoria}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                    <Clock className="w-3 h-3 text-brand-purple" />
                    <span>{art.tempo}</span>
                  </div>
                  <h3 className="font-space font-bold text-base text-brand-blue group-hover:text-brand-purple transition-colors leading-snug">
                    {art.titulo}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {art.resumo}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/5521966052646?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20artigo%20"${encodeURIComponent(art.titulo)}".`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-purple transition-all"
                >
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Maximize2, X, MapPin } from 'lucide-react';

export default function EstruturaSection() {
  const [selectedImg, setSelectedImg] = useState(null);

  const fotos = [
    {
      title: 'Estúdio de Pilates Clínico',
      desc: 'Equipamentos completos de Pilates e acessibilidade total para treinos individuais ou em duplas.',
      src: 'https://images.unsplash.com/photo-1717500252709-05a73fc4f1da?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Consultórios Privativos',
      desc: 'Ambientes climatizados e privativos para avaliações minuciosas e sessões individuais de fisioterapia.',
      src: 'https://images.unsplash.com/photo-1706353399656-210cca727a33?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Área de Reabilitação Física',
      desc: 'Espaço amplo com equipamentos para exercícios funcionais, musculação terapêutica e maca de tração.',
      src: 'https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="estrutura" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Nossa Estrutura</span>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
            Espaço de saúde projetado para o seu bem-estar
          </h2>
          <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Localização privilegiada com estacionamento, acessibilidade total e equipamentos de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fotos.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImg(item)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-auto self-end">
                  <Maximize2 className="w-5 h-5 text-white" />
                </span>
                <h4 className="font-space font-bold text-lg">{item.title}</h4>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">{item.desc}</p>
              </div>

              <div className="p-5 group-hover:hidden">
                <h4 className="font-space font-bold text-base text-brand-blue">{item.title}</h4>
                <p className="text-xs text-brand-muted mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
            <MapPin className="w-4 h-4 text-brand-purple" />
            <span>Av. Exemplo Central, 1000 - Bairro Modelo, Sua Cidade - Estado</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 animate-in fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImg.src} alt={selectedImg.title} className="w-full max-h-[70vh] object-cover" />
            <div className="p-6 text-white bg-slate-900 space-y-2">
              <h3 className="font-space font-bold text-xl text-white">{selectedImg.title}</h3>
              <p className="text-sm text-slate-300">{selectedImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

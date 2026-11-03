import React, { useState } from 'react';
import { ShieldAlert, Sparkles, Activity, ShieldCheck, UserCheck, Heart, UserPlus, ArrowRight } from 'lucide-react';

export default function ParaQuemSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categorias = [
    {
      title: 'Dor Lombar',
      icon: ShieldAlert,
      tagline: 'Alívio seguro para lombalgias agudas e dores ciáticas',
      desc: 'Tratamento de lombalgias agudas e crônicas com foco no fortalecimento do core, reeducação mecânica e descompressão postural.',
      beneficios: ['Redução imediata de espasmos musculares', 'Descompressão da coluna vertebral', 'Fortalecimento dos estabilizadores profundos']
    },
    {
      title: 'Dor Cervical',
      icon: Sparkles,
      tagline: 'Cervicalgia, tensão no pescoço e dores de cabeça tensionais',
      desc: 'Liberação miofascial e exercícios terapêuticos específicos para combater posturas viciosas do uso de telas e estresse.',
      beneficios: ['Alívio de dores irradiadas para os ombros', 'Melhora da amplitude de movimento da cabeça', 'Correção da postura cervical']
    },
    {
      title: 'Hérnia de Disco',
      icon: Activity,
      tagline: 'Reabilitação sem cirurgia baseada em ciência',
      desc: 'Protocolo exclusivo de tração e mobilização neural para reabsorção gradual e retorno rápido às atividades normais.',
      beneficios: ['Descompressão nervosa sem invasividade', 'Redução do formigamento e dormência', 'Manutenção da funcionalidade diária']
    },
    {
      title: 'Artrose e Desgastes',
      icon: ShieldCheck,
      tagline: 'Preservação articular no joelho, quadril e coluna',
      desc: 'Fisioterapia para lubrificação articular, aumento de espaço articular e fortalecimento periarticular.',
      beneficios: ['Alívio da rigidez matinal', 'Aumento do raio de caminhada sem dor', 'Retardo da progressão do desgaste']
    },
    {
      title: 'Pós-Operatório',
      icon: UserCheck,
      tagline: 'Recuperação rápida e segura após intervenções ortopédicas',
      desc: 'Reabilitação pós-cirúrgica de joelho, ombro, quadril e coluna com eletroterapia, controle de edema e treino funcional.',
      beneficios: ['Prevenção de aderências cicatriciais', 'Ganho progressivo de amplitude e força', 'Retorno seguro às rotinas']
    },
    {
      title: 'Atletas',
      icon: Activity,
      tagline: 'Prevenção de lesões e performance esportiva',
      desc: 'Recuperação muscular (recovery), prevenção de estiramentos e retorno ao esporte de alto rendimento.',
      beneficios: ['Avaliação biomecânica computadorizada', 'Recovery acelerado pós-treino', 'Fortalecimento excêntrico preventivo']
    },
    {
      title: 'Idosos (Longevidade)',
      icon: Heart,
      tagline: 'Equilíbrio, prevenção de quedas e autonomia',
      desc: 'Fisioterapia geriátrica humanizada para manter a independência funcional, mobilidade e estabilidade.',
      beneficios: ['Treino de equilíbrio e marcha', 'Fortalecimento muscular seguro', 'Ganho de confiança nos movimentos']
    },
    {
      title: 'Gestantes',
      icon: UserPlus,
      tagline: 'Pré e Pós-parto sem dores pélvicas ou lombares',
      desc: 'Pilates adaptado para gestantes e fisioterapia pélvica/postural para um parto mais tranquilo e rápida recuperação.',
      beneficios: ['Prevenção da diástase abdominal', 'Alívio da pressão pélvica e sacroilíaca', 'Preparo muscular consciente']
    }
  ];

  return (
    <section id="para-quem" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase">
            Para quem é indicado?
          </span>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
            Soluções completas para todas as idades e sintomas
          </h2>
          <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Seja para aliviar uma dor crônica, se recuperar de uma lesão ou melhorar sua postura e bem-estar, nossa clínica possui especialistas prontos para ajudar você.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categorias.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === idx
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Selected Category Feature Display */}
        <div className="bg-gradient-to-br from-brand-blue-light/50 via-white to-brand-purple/5 p-8 md:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tratamento Personalizado</span>
            </div>
            <h3 className="font-space font-bold text-2xl md:text-3xl text-brand-blue">
              {categorias[activeCategory].title}
            </h3>
            <p className="text-sm font-semibold text-brand-purple">
              {categorias[activeCategory].tagline}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {categorias[activeCategory].desc}
            </p>

            <ul className="space-y-2 pt-2">
              {categorias[activeCategory].beneficios.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-md space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              {React.createElement(categorias[activeCategory].icon, { className: "w-8 h-8 stroke-[1.8]" })}
            </div>
            <p className="text-xs font-bold text-slate-800">Pronto para viver sem dor?</p>
            <a
              href={`https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20${encodeURIComponent(categorias[activeCategory].title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-brand-purple hover:bg-brand-purple-dark text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Agendar Avaliação</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

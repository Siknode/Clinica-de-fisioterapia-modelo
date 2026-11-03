import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Play, X, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 lg:pt-40 pb-16 overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-blue-light/30">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold tracking-wide uppercase shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-ping"></span>
            <span>Clínica de Fisioterapia e Pilates Modelo</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold text-brand-blue leading-[1.1] tracking-tight">
            Movimento é <br className="hidden md:inline" />
            <span className="gradient-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-green">
              qualidade de vida.
            </span>
          </h1>

          <p className="text-base md:text-lg text-brand-muted font-sans font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Especialistas em fisioterapia baseada em evidência, pilates clínico, reabilitação física e bem-estar para todas as fases da vida. Sua recuperação começa com um diagnóstico preciso e atendimento humanizado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="https://wa.me/5521966052646?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Clínica%20Fisiovita."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/30 hover:scale-[1.02] transition-all duration-300 group"
            >
              <span>Agendar Avaliação</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#especialidades"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-brand-blue px-8 py-4 rounded-full text-sm font-bold shadow-sm hover:shadow transition-all duration-300"
            >
              <span>Conheça nossos Serviços</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left space-y-1">
              <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-blue font-space font-bold text-xl md:text-2xl">
                <span>12</span>
                <span className="text-brand-purple">+</span>
              </div>
              <div className="text-[10px] md:text-xs font-bold tracking-wide text-brand-blue uppercase">Equipe especializada</div>
              <div className="text-[9px] md:text-[10px] text-brand-muted hidden sm:block">Profissionais pós-graduados</div>
            </div>

            <div className="text-center lg:text-left space-y-1">
              <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-blue font-space font-bold text-xl md:text-2xl">
                <span>98</span>
                <span className="text-brand-purple">%</span>
              </div>
              <div className="text-[10px] md:text-xs font-bold tracking-wide text-brand-blue uppercase">Atendimento humanizado</div>
              <div className="text-[9px] md:text-[10px] text-brand-muted hidden sm:block">Satisfação de pacientes</div>
            </div>

            <div className="text-center lg:text-left space-y-1">
              <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-blue font-space font-bold text-xl md:text-2xl">
                <span>350</span>
                <span className="text-brand-purple">m²</span>
              </div>
              <div className="text-[10px] md:text-xs font-bold tracking-wide text-brand-blue uppercase">Estrutura moderna</div>
              <div className="text-[9px] md:text-[10px] text-brand-muted hidden sm:block">Espaço planejado e climatizado</div>
            </div>
          </div>
        </div>

        {/* Right Column Visual Showcase */}
        <div className="lg:col-span-5 relative z-10 w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
            <img
              src="/img/aluna-pilates.jpg"
              alt="Aluna com tranças nagô fazendo pilates no reformer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent"></div>

            {/* Float Card Overlay */}
            <div className="absolute bottom-3 left-3 right-3 p-3 sm:bottom-6 sm:left-6 sm:right-6 sm:p-5 rounded-2xl glass shadow-xl text-left">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-brand-purple/15 text-brand-purple shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-space font-bold text-sm text-brand-blue">Espaço Pilates Premium</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    Equipamentos de última geração e ambiente climatizado com luz natural para sua total segurança.
                  </p>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center animate-ping absolute"></span>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-16 h-16 rounded-full bg-white hover:bg-brand-purple text-brand-blue hover:text-white shadow-xl flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer"
                aria-label="Ver vídeo corporativo"
              >
                <Play className="w-5 h-5 fill-current ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Presentation Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-8 text-center text-white space-y-4">
              <h3 className="font-space font-bold text-2xl text-white">Conheça a Clínica Fisiovita</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Estrutura completa com mais de 350m², planejada para o seu conforto, reabilitação física e bem-estar integral.
              </p>
              <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1783841193384-4269c68aa050?q=80&w=1000&auto=format&fit=crop"
                  alt="Tour da Clínica Fisiovita"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-brand-blue/40">
                  <Sparkles className="w-12 h-12 text-brand-purple mb-2 animate-bounce" />
                  <p className="font-space font-semibold text-lg text-white">Agende sua visita técnica e avaliação inicial</p>
                  <a
                    href="https://wa.me/5521966052646?text=Olá!%20Quero%20agendar%20uma%20visita%20à%20clínica."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-6 py-2.5 rounded-full bg-brand-purple hover:bg-brand-purple-dark text-white font-bold text-xs shadow-lg"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

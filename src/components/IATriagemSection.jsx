import React, { useState } from 'react';
import { Bot, Sparkles, Send, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';

export default function IATriagemSection() {
  const [step, setStep] = useState(1);
  const [symptom, setSymptom] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resultReady, setResultReady] = useState(false);

  const regiaoOptions = [
    'Coluna Lombar (Costas)',
    'Cervical / Pescoço',
    'Joelho ou Perna',
    'Ombro ou Braço',
    'Quadril / Pélvis',
    'Pós-Operatório recente'
  ];

  const duracaoOptions = [
    'Menos de 7 dias (Aguda)',
    'Entre 1 e 4 semanas',
    'Mais de 1 mês (Crônica)'
  ];

  const intensidadeOptions = [
    'Leve (1 a 3/10)',
    'Moderada (4 a 7/10)',
    'Intensa / Fortíssima (8 a 10/10)'
  ];

  const handleRunTriage = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResultReady(true);
    }, 1200);
  };

  const resetForm = () => {
    setStep(1);
    setSymptom('');
    setDuration('');
    setIntensity('');
    setResultReady(false);
  };

  const getRecommendation = () => {
    if (symptom.includes('Lombar')) {
      return {
        especialidade: 'Fisioterapia Traumato-Ortopédica & Pilates Clínico',
        orientacao: 'Indicamos uma avaliação postural e funcional minuciosa com descompressão articular. Evite ficar muito tempo sentado na mesma posição.',
        prioridade: intensity.includes('Intensa') ? 'Alta - Agendamento prioritário recomendado' : 'Normal'
      };
    }
    if (symptom.includes('Pós-Operatório')) {
      return {
        especialidade: 'Reabilitação Ortopédica Intensiva',
        orientacao: 'Reabilitação cirúrgica guiada para ganho de ADM (Amplitude de Movimento), controle de edema e analgesia.',
        prioridade: 'Alta - Início imediato pós-liberação médica'
      };
    }
    return {
      especialidade: 'Fisioterapia Especializada & Pilates',
      orientacao: 'Protocolo multidisciplinar focado em analgesia e fortalecimento estático/dinâmico.',
      prioridade: intensity.includes('Intensa') ? 'Alta' : 'Normal'
    };
  };

  const recommendation = resultReady ? getRecommendation() : null;

  return (
    <section id="triagem-ia" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold">
            <Bot className="w-4 h-4" />
            <span>Assistente Inteligente para Triagem Rápida</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
            Triagem Virtual Fisiovita
          </h2>
          <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Responda 3 perguntas rápidas para receber uma recomendação preliminar e agilizar seu atendimento com nossa equipe fisioterapêutica.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-900 via-brand-blue-dark to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl border border-slate-800 relative">
          <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-[10px] font-bold">
            <Sparkles className="w-3 h-3 text-brand-purple" />
            <span>IA Triagem Active</span>
          </div>

          {!resultReady ? (
            <div className="space-y-8">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                <span>Passo {step} de 3</span>
                <span>{step === 1 ? 'Região da Dor' : step === 2 ? 'Tempo de Sintomas' : 'Intensidade'}</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-brand-purple to-brand-green h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <h3 className="font-space font-bold text-xl text-white">Qual região do corpo apresenta desconforto?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {regiaoOptions.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSymptom(option);
                          setStep(2);
                        }}
                        className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                          symptom === option
                            ? 'bg-brand-purple border-brand-purple text-white shadow-lg'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <h3 className="font-space font-bold text-xl text-white">Há quanto tempo você sente essa dor?</h3>
                  <div className="space-y-3">
                    {duracaoOptions.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setDuration(option);
                          setStep(3);
                        }}
                        className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                          duration === option
                            ? 'bg-brand-purple border-brand-purple text-white shadow-lg'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <h3 className="font-space font-bold text-xl text-white">Qual a intensidade da sua dor?</h3>
                  <div className="space-y-3">
                    {intensidadeOptions.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => setIntensity(option)}
                        className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                          intensity === option
                            ? 'bg-brand-purple border-brand-purple text-white shadow-lg'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {intensity && (
                    <button
                      onClick={handleRunTriage}
                      disabled={isAnalyzing}
                      className="mt-6 w-full py-4 bg-brand-green hover:bg-emerald-600 text-white font-bold rounded-2xl text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      {isAnalyzing ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Analisando sintomas com IA...</span>
                        </>
                      ) : (
                        <>
                          <span>Gerar Recomendação de Triagem</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-3 text-brand-green">
                <CheckCircle2 className="w-8 h-8 shrink-0" />
                <div>
                  <h3 className="font-space font-bold text-xl text-white">Triagem Concluída</h3>
                  <p className="text-xs text-slate-300">Recomendação gerada com sucesso</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Tratamento Recomendado</span>
                  <span className="text-sm font-bold text-brand-purple">{recommendation.especialidade}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Orientação Preliminar</span>
                  <span className="text-slate-200">{recommendation.orientacao}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Sintomas informados</span>
                  <span className="text-slate-300">{symptom} • {duration} • Intensidade {intensity}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={`https://wa.me/5511999998888?text=${encodeURIComponent(
                    `Olá! Fiz a Triagem Virtual no site da Clínica Fisiovita.\n- Região: ${symptom}\n- Tempo: ${duration}\n- Intensidade: ${intensity}\nGostaria de agendar minha avaliação.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 bg-brand-purple hover:bg-brand-purple-dark text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Triagem para o WhatsApp</span>
                </a>
                <button
                  onClick={resetForm}
                  className="py-3.5 px-4 bg-white/10 hover:bg-white/20 text-slate-300 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Refazer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

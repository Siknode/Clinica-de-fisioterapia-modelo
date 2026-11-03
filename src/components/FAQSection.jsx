import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      pergunta: 'A clínica aceita planos de saúde / convênios?',
      resposta: 'Atendemos na modalidade Particular com emissão de nota fiscal médica para Reembolso junto ao seu plano de saúde (Bradesco Saúde, SulAmérica, Amil, Unimed, etc.). Auxiliamos você com toda a documentação para reembolso integral ou parcial.'
    },
    {
      pergunta: 'Como funciona a primeira sessão de avaliação fisioterapêutica?',
      resposta: 'A avaliação dura aproximadamente 50 minutos. O fisioterapeuta realiza testes funcionais, palpação, análise postural biomecânica e revisa seus exames de imagem. Ao final, traçamos juntos o seu plano de tratamento individualizado.'
    },
    {
      pergunta: 'Qual a diferença entre Pilates Clínico e Pilates tradicional de academia?',
      resposta: 'No nosso Pilates Clínico, todas as aulas são ministradas exclusivamente por Fisioterapeutas graduados e pós-graduados. Cada exercício é adaptado terapeuticamente às suas patologias de coluna, lesões musculares ou metas pós-cirúrgicas com máximo controle de segurança.'
    },
    {
      pergunta: 'Preciso de encaminhamento médico para iniciar a fisioterapia?',
      resposta: 'Não é obrigatório ter o encaminhamento médico prévio para passar por nossa avaliação fisioterapêutica inicial. Caso você já possua laudos de ressonância ou raio-X e receita médica, traga-os na avaliação.'
    },
    {
      pergunta: 'Quais são os horários de atendimento da clínica?',
      resposta: 'Atendemos de Segunda a Sexta-feira das 07:00 às 21:00, e aos Sábados das 08:00 às 12:00 (com agendamento prévio flexível).'
    },
    {
      pergunta: 'Quantas sessões de fisioterapia são necessárias por semana?',
      resposta: 'A frequência recomendada varia de 1 a 3 vezes por semana a depender da fase da lesão (fase aguda ou de manutenção/fortalecimento). Isso é definido logo na primeira avaliação.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
            Perguntas mais comuns sobre nossa clínica
          </h2>
          <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Respostas transparentes para ajudar você a dar o próximo passo na sua reabilitação com tranquilidade.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-light/60 border-brand-purple/30 shadow-md'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-space font-bold text-base md:text-lg text-brand-blue cursor-pointer"
                >
                  <span>{faq.pergunta}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-purple shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-brand-muted leading-relaxed font-sans border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

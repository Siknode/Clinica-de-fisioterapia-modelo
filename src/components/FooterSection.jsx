import React from 'react';
import FisioterapiaLogo from './FisioterapiaLogo';
import { MapPin, Phone, MessageSquare, Clock, Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer id="contato" className="bg-slate-900 text-white pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Brand Info & Physical Therapy Emblem */}
          <div className="lg:col-span-4 space-y-6">
            <FisioterapiaLogo light={true} />
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Clínica Fisiovita — Modelo interativo de fisioterapia baseada em evidências, Pilates Clínico, Fonoaudiologia e Nutrição Integrativa.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-purple hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Modelo"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Modelo"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.869V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-space font-bold text-sm text-white tracking-wider uppercase">Navegação</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#diferenciais" className="hover:text-brand-purple transition-colors">Diferenciais</a></li>
              <li><a href="#especialidades" className="hover:text-brand-purple transition-colors">Especialidades</a></li>
              <li><a href="#para-quem" className="hover:text-brand-purple transition-colors">Para Quem</a></li>
              <li><a href="#estrutura" className="hover:text-brand-purple transition-colors">Estrutura</a></li>
              <li><a href="#equipe" className="hover:text-brand-purple transition-colors">Equipe</a></li>
              <li><a href="#resultados" className="hover:text-brand-purple transition-colors">Resultados</a></li>
              <li><a href="#triagem-ia" className="hover:text-brand-purple transition-colors">IA Triagem</a></li>
              <li><a href="#faq" className="hover:text-brand-purple transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Fictitious Generic Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-space font-bold text-sm text-white tracking-wider uppercase">Endereço Modelo</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                <span>Av. Exemplo Central, 1000 - Bairro Modelo, Sua Cidade - Estado, CEP 00000-000</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-brand-green shrink-0" />
                <a
                  href="https://wa.me/5500999998888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors"
                >
                  WhatsApp Modelo: (00) 99999-8888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-purple shrink-0" />
                <span>Telefone: (00) 99999-8888</span>
              </li>
            </ul>
          </div>

          {/* Fictitious Generic Map & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-space font-bold text-sm text-white tracking-wider uppercase">Mapa Ilustrativo</h4>
            
            {/* Interactive Generic Map Card */}
            <div className="rounded-2xl overflow-hidden border border-white/10 relative group h-28 bg-slate-800">
              <iframe
                title="Mapa Ilustrativo Modelo"
                src="https://maps.google.com/maps?q=-23.55052,-46.633308&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 opacity-60 group-hover:opacity-90 transition-opacity"
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 bg-slate-900/40 pointer-events-none group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Segunda a Sexta-feira</p>
                  <p className="text-slate-400">07:00 às 21:00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Template Modelo Fisioterapia. Todos os direitos reservados. Projeto Modelo sem dados reais.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Símbolo Oficial da Fisioterapia</span>
            <Heart className="w-3.5 h-3.5 text-brand-purple fill-brand-purple/20" />
          </p>
        </div>
      </div>
    </footer>
  );
}

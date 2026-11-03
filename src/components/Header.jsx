import React, { useState, useEffect } from 'react';
import FisioterapiaLogo from './FisioterapiaLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Para Quem', href: '#para-quem' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'IA Triagem', href: '#triagem-ia' },
    { name: 'Conhecimento', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md py-2.5' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with Physical Therapy Symbol */}
        <a href="#" className="flex items-center group">
          <FisioterapiaLogo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 text-slate-600 hover:text-brand-blue hover:bg-white hover:shadow-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Clínica%20Fisiovita."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-md shadow-brand-blue/15 hover:shadow-lg hover:shadow-brand-blue/30 group transition-all duration-300"
          >
            <span>Agendar Avaliação</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-slate-700 hover:text-brand-purple focus:outline-none transition-colors rounded-xl bg-slate-100"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-blue-light/50 hover:text-brand-blue rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Clínica%20Fisiovita."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-purple text-white py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <span>Agendar pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

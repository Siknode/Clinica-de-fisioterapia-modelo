import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DiferenciaisSection from './components/DiferenciaisSection';
import EspecialidadesSection from './components/EspecialidadesSection';
import ParaQuemSection from './components/ParaQuemSection';
import EstruturaSection from './components/EstruturaSection';
import EquipeSection from './components/EquipeSection';
import ResultadosSection from './components/ResultadosSection';
import IATriagemSection from './components/IATriagemSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-blue selection:text-white bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <DiferenciaisSection />
        <EspecialidadesSection />
        <ParaQuemSection />
        <EstruturaSection />
        <EquipeSection />
        <ResultadosSection />
        <IATriagemSection />
        <BlogSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}

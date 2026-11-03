import React from 'react';

export default function FisioterapiaLogo({ className = "", light = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Symbol of Physical Therapy (COFFITO / Trident & Snakes SVG) */}
      <div className="relative group/logo">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-green flex items-center justify-center p-0.5 shadow-md shadow-brand-blue/20 group-hover/logo:scale-105 transition-transform duration-300">
          <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center p-1.5 overflow-hidden relative">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="tridentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#16308F" />
                  <stop offset="100%" stopColor="#A459D8" />
                </linearGradient>
                <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00BB7F" />
                  <stop offset="100%" stopColor="#0D9488" />
                </linearGradient>
                <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#A459D8" />
                </linearGradient>
              </defs>

              {/* Trident (Base & 3 Prongs of Physical Therapy Symbol) */}
              <path
                d="M50 12 V88"
                stroke="url(#tridentGrad)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M50 28 C40 28 32 20 32 14"
                stroke="url(#tridentGrad)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M50 28 C60 28 68 20 68 14"
                stroke="url(#tridentGrad)"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Lightning Bolt / Ray */}
              <polygon
                points="49,15 54,32 46,32 52,50 44,36 51,36"
                fill="url(#rayGrad)"
                className="opacity-90"
              />

              {/* Snakes intertwined */}
              <path
                d="M30 38 C32 46 66 48 66 58 C66 68 34 70 34 80 C34 84 46 86 50 86"
                stroke="url(#snakeGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M70 38 C68 46 34 48 34 58 C34 68 66 70 66 80 C66 84 54 86 50 86"
                stroke="url(#snakeGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />

              <circle cx="31" cy="37" r="3" fill="#00BB7F" />
              <circle cx="69" cy="37" r="3" fill="#00BB7F" />
            </svg>
          </div>
        </div>
      </div>

      {/* Fictitious Brand Text */}
      <div className="flex flex-col leading-none">
        <span className={`text-[10px] md:text-[11px] font-sans font-bold tracking-[0.22em] uppercase ${light ? 'text-slate-300' : 'text-brand-purple'}`}>
          Clínica
        </span>
        <span className={`font-space font-bold tracking-tight text-xl md:text-2xl ${light ? 'text-white' : 'text-brand-blue'}`}>
          FISIOVITA
        </span>
        <span className={`text-[9px] font-semibold tracking-wider ${light ? 'text-slate-400' : 'text-slate-500'}`}>
          FISIOTERAPIA & PILATES
        </span>
      </div>
    </div>
  );
}

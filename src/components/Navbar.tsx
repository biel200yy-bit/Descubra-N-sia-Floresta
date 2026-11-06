import React, { useState } from 'react';
import { Menu, X, Compass, Sun, Moon, Volume2, Type } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenContribution: () => void;
  textSize: 'normal' | 'large';
  setTextSize: (size: 'normal' | 'large') => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenContribution,
  textSize,
  setTextSize,
  highContrast,
  setHighContrast,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'atracoes', label: 'Pontos Turísticos' },
    { id: 'historia', label: 'História' },
    { id: 'cultura', label: 'Cultura & Memória' },
    { id: 'roteiros', label: 'Roteiros' },
    { id: 'mapa', label: 'Mapa Turístico' },
    { id: 'sobre', label: 'Sobre o Projeto' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      {/* Accessibility utility ribbon */}
      <div className="bg-stone-100 text-stone-600 text-xs border-b border-stone-200/70 py-1 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="truncate">
            Plataforma Digital de Turismo e Patrimônio Histórico · Nísia Floresta/RN
          </span>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setTextSize(textSize === 'normal' ? 'large' : 'normal')}
              className="flex items-center gap-1 hover:text-stone-900 transition-colors font-medium cursor-pointer"
              title="Aumentar ou diminuir tamanho do texto"
              aria-label="Alternar tamanho da fonte"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{textSize === 'normal' ? 'A+' : 'A-'}</span>
            </button>
            <span className="text-stone-300" aria-hidden="true">|</span>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className="flex items-center gap-1 hover:text-stone-900 transition-colors font-medium cursor-pointer"
              title="Alternar modo de alto contraste para acessibilidade"
              aria-label="Alternar alto contraste"
            >
              {highContrast ? <Sun className="w-3.5 h-3.5 text-amber-600" /> : <Moon className="w-3.5 h-3.5" />}
              <span>{highContrast ? 'Contraste Normal' : 'Alto Contraste'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar following Top Bar Contract: Brand, Nav links, 1 Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="text-left font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 hover:text-sky-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-sky-600 shrink-0" aria-hidden="true" />
          <span>Descubra Nísia Floresta</span>
        </button>

        {/* Zone 2: 4-5 single line text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                  isActive
                    ? 'text-sky-800 font-semibold border-sky-700'
                    : 'border-transparent hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContribution}
            className="px-4 py-2 text-xs font-semibold text-white bg-sky-800 hover:bg-sky-900 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer flex items-center gap-2"
          >
            <span>Contribuir com Acervo</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 rounded-md transition-colors cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-b border-stone-200 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left py-2 text-base font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === link.id ? 'text-sky-800 font-bold bg-sky-50 px-2' : 'text-stone-700 hover:text-stone-900 px-2'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContribution();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-sky-800 hover:bg-sky-900 rounded-md cursor-pointer"
            >
              Contribuir com Acervo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

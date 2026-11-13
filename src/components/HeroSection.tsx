import React, { useState } from 'react';
import { Search, Compass, BookOpen, ArrowRight, MapPin, Waves, Sparkles } from 'lucide-react';
import { ATTRACTIONS } from '../data/attractions';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onSelectCategory: (category: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onSelectCategory,
  onNavigateTo,
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      onNavigateTo('atracoes');
    }
  };

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Image with carefully calibrated contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/image_5a292807.png"
          alt="Vista aérea do litoral de Nísia Floresta destacando as praias, arrecifes, falésias e lagoas ao fundo"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/55 to-stone-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-900/30" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          {/* Quiet kicker text without pill box */}
          <div className="flex items-center gap-2 text-xs font-medium text-amber-300 tracking-wider uppercase mb-4">
            <span>Rio Grande do Norte</span>
            <span aria-hidden="true">·</span>
            <span>Litoral Sul Potiguar</span>
            <span aria-hidden="true">·</span>
            <span>Patrimônio & Natureza</span>
          </div>

          {/* Exact required phrase as title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
            Descubra Nísia Floresta: uma cidade de histórias, cultura e belezas naturais.
          </h1>

          {/* Exact required presentation text */}
          <p className="text-base sm:text-lg md:text-xl text-stone-200 leading-relaxed font-light mb-8 [text-wrap:balance]">
            Conheça Nísia Floresta, um município do Rio Grande do Norte que reúne paisagens naturais, patrimônio histórico e manifestações culturais. Explore seus principais atrativos, descubra histórias e curiosidades e conheça melhor a identidade cultural da cidade.
          </p>

          {/* Action buttons requested: "Explorar pontos turísticos" and "Conheça nossa história" */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={() => onNavigateTo('atracoes')}
              className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm rounded-md transition-colors shadow-lg shadow-sky-950/30 flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Compass className="w-4 h-4" />
              <span>Explorar pontos turísticos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateTo('historia')}
              className="px-6 py-3.5 bg-stone-800/80 hover:bg-stone-800 text-stone-100 font-medium text-sm rounded-md border border-stone-700/80 transition-colors backdrop-blur-sm flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4" />
              <span>Conheça nossa história</span>
            </button>
          </div>

          {/* Functional search bar right in hero */}
          <form onSubmit={handleSearchSubmit} className="relative max-w-2xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-stone-400 pointer-events-none" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Pesquisar por nome, lagoa, praia, baobá, história..."
                className="w-full pl-12 pr-28 py-3.5 bg-white/95 text-stone-900 placeholder-stone-500 text-sm rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                aria-label="Pesquisar atrações em Nísia Floresta"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
              >
                Buscar
              </button>
            </div>
          </form>

          {/* Interactive filter shortcuts */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-stone-300">
            <span className="text-stone-400">Sugestões rápidas:</span>
            {[
              { label: 'Lagoas', cat: 'lagoas' },
              { label: 'Praias e Arrecifes', cat: 'praias' },
              { label: 'Patrimônio Colonial', cat: 'patrimonio' },
              { label: 'Museus e Memória', cat: 'museus' },
            ].map((item) => (
              <button
                key={item.cat}
                type="button"
                onClick={() => {
                  onSelectCategory(item.cat);
                  onNavigateTo('atracoes');
                }}
                className="hover:text-amber-300 hover:underline transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 section portal jumpers required by spec:
            - Destaques do município
            - História e patrimônio
            - Belezas naturais
            - Cultura e memória local */}
        <div className="mt-16 pt-10 border-t border-stone-700/60 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigateTo('atracoes')}
            className="text-left p-4 rounded-lg bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 transition-all cursor-pointer group"
          >
            <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">01. Explorar</div>
            <div className="font-serif text-lg font-bold text-white group-hover:text-sky-300 transition-colors">Destaques do Município</div>
            <p className="text-xs text-stone-300 mt-1 line-clamp-2">Os cartões-postais e atrações imperdíveis catalogadas.</p>
          </button>

          <button
            onClick={() => onNavigateTo('historia')}
            className="text-left p-4 rounded-lg bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 transition-all cursor-pointer group"
          >
            <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">02. Memória</div>
            <div className="font-serif text-lg font-bold text-white group-hover:text-sky-300 transition-colors">História e Patrimônio</div>
            <p className="text-xs text-stone-300 mt-1 line-clamp-2">Vila de Papary, ferrovia de 1881 e Dionísia Gonçalves Pinto.</p>
          </button>

          <button
            onClick={() => {
              onSelectCategory('lagoas');
              onNavigateTo('atracoes');
            }}
            className="text-left p-4 rounded-lg bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 transition-all cursor-pointer group"
          >
            <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">03. Ecoturismo</div>
            <div className="font-serif text-lg font-bold text-white group-hover:text-sky-300 transition-colors">Belezas Naturais</div>
            <p className="text-xs text-stone-300 mt-1 line-clamp-2">Lagoas cristalinas, arrecifes de Camurupim e falésias.</p>
          </button>

          <button
            onClick={() => onNavigateTo('cultura')}
            className="text-left p-4 rounded-lg bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 transition-all cursor-pointer group"
          >
            <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">04. Identidade</div>
            <div className="font-serif text-lg font-bold text-white group-hover:text-sky-300 transition-colors">Cultura e Memória Local</div>
            <p className="text-xs text-stone-300 mt-1 line-clamp-2">Renda de bilro, gastronomia de frutos do mar e festividades.</p>
          </button>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Compass, BookOpen, Heart, GraduationCap, MapPin, Shield } from 'lucide-react';

interface FooterProps {
  onNavigateTo: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand & Project Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" aria-hidden="true" />
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                Descubra Nísia Floresta
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Plataforma digital de valorização do turismo, patrimônio histórico e identidade cultural do município de Nísia Floresta, Rio Grande do Norte.
            </p>
            <div className="pt-2 text-xs text-stone-400">
              <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Projeto Acadêmico</span>
              </div>
              <p className="italic text-stone-400">
                “Plataforma Digital de Turismo e Patrimônio Histórico: Valorizando o Município de Nísia Floresta-RN”
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-2">
              Navegação Principal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateTo('inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('atracoes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Catálogo de Pontos Turísticos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('historia')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  História de Nísia Floresta
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('cultura')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cultura, Renda de Bilro & Memória
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('roteiros')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Roteiros Turísticos Sugeridos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('mapa')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mapa Interativo do Município
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('sobre')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre o Projeto & Metodologia
                </button>
              </li>
            </ul>
          </div>

          {/* Preservation */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-2">
              Preservação & Patrimônio
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              O turismo consciente garante a conservação da história e da biodiversidade de Nísia Floresta para as futuras gerações.
            </p>
            <div className="pt-1 text-xs text-stone-400 leading-relaxed">
              Preserve o patrimônio: respeite as construções históricas e não polua as lagoas e arrecifes.
            </div>
          </div>
        </div>

        {/* Bottom Bar with Credits, Sources, Date of update */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <span>© 2026 Descubra Nísia Floresta. Todos os direitos reservados.</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Atualizado em Outubro de 2026</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-stone-400">
            <span>Fontes: Prefeitura de Nísia Floresta / IPHAN / IBGE / IHGRN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

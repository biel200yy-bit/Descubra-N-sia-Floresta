import React from 'react';
import { Sparkles, Utensils, HeartHandshake, Compass, MessageSquarePlus, CheckCircle2 } from 'lucide-react';
import { CULTURAL_TRADITIONS, INITIAL_COMMUNITY_CONTRIBUTIONS, CommunityContribution } from '../data/culture';

interface CultureSectionProps {
  onOpenContribution: () => void;
  communityContributions: CommunityContribution[];
}

export const CultureSection: React.FC<CultureSectionProps> = ({
  onOpenContribution,
  communityContributions,
}) => {
  return (
    <div className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-sky-800 font-semibold mb-2">
              Saberes, Fé & Tradições Vivas
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Cultura, Memória e Comunidade
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
              O patrimônio de Nísia Floresta vai além de seus monumentos de pedra e cal: ele vive nas mãos ágeis das rendeiras de Alcaçuz, nos cantos dos jangadeiros, na devoção secular da festa da padroeira e nos sabores inigualáveis do litoral potiguar.
            </p>
          </div>

          <button
            onClick={onOpenContribution}
            className="px-5 py-3 bg-sky-800 hover:bg-sky-900 text-white font-semibold text-xs rounded-md shadow-xs transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 self-start md:self-end"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Enviar Contribuição Comunitária</span>
          </button>
        </div>

        {/* 4 Cultural Expression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CULTURAL_TRADITIONS.map((tradition) => (
            <div
              key={tradition.id}
              className="bg-white rounded-lg border border-stone-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-sky-800 uppercase tracking-wider">
                    {tradition.categoryLabel}
                  </span>
                  <span className="truncate max-w-[160px] text-right">
                    {tradition.localities.join(' · ')}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                  {tradition.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                  {tradition.details}
                </p>

                <div className="bg-stone-50 p-3.5 rounded-md border border-stone-100 text-xs text-stone-600 mb-4">
                  <div className="font-semibold text-stone-800 mb-1">Importância para a Identidade:</div>
                  <p>{tradition.significance}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 italic">
                💡 <strong>Curiosidade:</strong> {tradition.curiosity}
              </div>
            </div>
          ))}
        </div>

        {/* Community Memory & Participation Wall */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-sky-800 font-semibold mb-1">
                Participação Cidadã
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Memórias e Contribuições da Comunidade
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Relatos orais, correções históricas e memórias submetidas por moradores e pesquisadores para enriquecer o acervo do município.
              </p>
            </div>

            <button
              onClick={onOpenContribution}
              className="text-xs font-semibold text-sky-800 hover:text-sky-950 underline flex items-center gap-1 cursor-pointer"
            >
              <span>+ Adicionar minha memória</span>
            </button>
          </div>

          {/* List of Contributions */}
          <div className="space-y-4">
            {communityContributions.map((contrib) => (
              <div
                key={contrib.id}
                className="p-5 rounded-lg border border-stone-200 bg-stone-50/70 space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900">{contrib.authorName}</span>
                    <span className="text-stone-400" aria-hidden="true">·</span>
                    <span className="text-stone-600 font-medium">{contrib.affiliationLabel}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-stone-400">{contrib.dateSubmitted}</span>
                    <span className="text-stone-300">|</span>
                    {contrib.status === 'aprovado' ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Revisado pelo projeto
                      </span>
                    ) : (
                      <span className="text-amber-700 font-semibold">
                        Em análise curatorial
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="font-serif font-bold text-base text-stone-900">
                  {contrib.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {contrib.description}
                </p>

                <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200/60 flex flex-wrap gap-4">
                  <span>
                    <strong>Referência espacial:</strong> {contrib.locationReference}
                  </span>
                  {contrib.historicalSource && (
                    <span>
                      <strong>Fonte/Origem:</strong> {contrib.historicalSource}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { CULTURAL_TRADITIONS } from '../data/culture';

export const CultureSection: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
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

        {/* 4 Cultural Expression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
};

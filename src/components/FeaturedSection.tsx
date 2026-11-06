import React from 'react';
import { ArrowRight, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Attraction } from '../data/attractions';

interface FeaturedSectionProps {
  attractions: Attraction[];
  onSelectAttraction: (attraction: Attraction) => void;
  onViewAll: () => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  attractions,
  onSelectAttraction,
  onViewAll,
}) => {
  const featuredList = attractions.filter((a) => a.isFeatured).slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-sky-800 font-semibold mb-2">
              Patrimônio & Paisagens
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Destaques do Município
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl">
              Seleção dos atrativos mais representativos da história e da natureza privilegiada de Nísia Floresta, verificados pela pesquisa acadêmica.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:text-sky-950 transition-colors whitespace-nowrap cursor-pointer group shrink-0"
          >
            <span>Ver catálogo completo ({attractions.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Image slot with resilient fallback and zoom */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                <img
                  src={item.primaryImage}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-medium text-amber-200 tracking-wide uppercase">
                    {item.categoryLabel}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1 truncate max-w-[140px]">
                      <MapPin className="w-3 h-3 shrink-0 text-stone-400" />
                      <span className="truncate">{item.location.locality.split(',')[0]}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{item.timeToSpend}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-sky-800 transition-colors mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Verificado</span>
                  </div>

                  <button
                    onClick={() => onSelectAttraction(item)}
                    className="text-xs font-semibold text-sky-800 hover:text-sky-950 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

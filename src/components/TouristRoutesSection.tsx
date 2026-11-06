import React, { useState } from 'react';
import { Compass, Clock, Calendar, CheckCircle2, AlertTriangle, ArrowRight, MapPin, Footprints, Info } from 'lucide-react';
import { TOURIST_ROUTES, TouristRoute } from '../data/routes';
import { Attraction, ATTRACTIONS } from '../data/attractions';

interface TouristRoutesSectionProps {
  onSelectAttractionById: (id: string) => void;
}

export const TouristRoutesSection: React.FC<TouristRoutesSectionProps> = ({
  onSelectAttractionById,
}) => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>(TOURIST_ROUTES[0].id);

  const currentRoute = TOURIST_ROUTES.find((r) => r.id === selectedRouteId) || TOURIST_ROUTES[0];

  return (
    <div className="py-16 sm:py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-sky-800 font-semibold mb-2">
            Planejamento & Vivência
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Roteiros Turísticos Sugeridos
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Sugestões estruturadas para vivenciar o patrimônio, as águas doces e o litoral de Nísia Floresta com conforto, segurança e consciência de preservação ambiental.
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {TOURIST_ROUTES.map((route, idx) => {
            const isSelected = route.id === selectedRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setSelectedRouteId(route.id)}
                className={`text-left p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-sky-800 shadow-md ring-1 ring-sky-800'
                    : 'bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <div>
                  <div className="text-[11px] font-bold text-sky-800 uppercase tracking-wider mb-1">
                    Opção 0{idx + 1}
                  </div>
                  <div className="font-serif font-bold text-sm text-stone-900 line-clamp-2 mb-2">
                    {route.title.split(':')[0]}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500 pt-2 border-t border-stone-100">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{route.duration}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Route Detailed Dossier */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          {/* Header of selected route */}
          <div className="max-w-3xl mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-2">
              <span className="font-semibold text-sky-800">{currentRoute.modality}</span>
              <span aria-hidden="true">·</span>
              <span>Duração: {currentRoute.duration}</span>
              <span aria-hidden="true">·</span>
              <span>Época recomendada: {currentRoute.recommendedSeason}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-3">
              {currentRoute.title}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
              {currentRoute.overview}
            </p>

            {/* Academic proposal disclaimer required by prompt */}
            <div className="bg-sky-50 border-l-3 border-sky-700 p-3 rounded-r-md text-xs text-sky-950 flex items-start gap-2">
              <Info className="w-4 h-4 text-sky-800 shrink-0 mt-0.5" />
              <span>
                <strong>Nota metodológica:</strong> {currentRoute.academicNote}
              </span>
            </div>
          </div>

          {/* Sequential Stops Rail */}
          <div className="mb-10">
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
              <Footprints className="w-5 h-5 text-sky-800" />
              <span>Paradas e Ordem Recomendada de Visitação</span>
            </h3>

            <div className="space-y-4">
              {currentRoute.stops.map((stop) => (
                <div
                  key={stop.order}
                  className="p-4 sm:p-5 rounded-lg border border-stone-200 bg-stone-50/60 hover:bg-stone-50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-sky-800 text-white font-serif font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                      {stop.order}
                    </div>

                    <div>
                      <div className="font-serif font-bold text-base text-stone-900">
                        {stop.name}
                      </div>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1">
                        {stop.highlight}
                      </p>
                      <div className="mt-2 text-xs text-stone-500 bg-white inline-block px-2.5 py-1 rounded border border-stone-200">
                        <strong>Dica prática:</strong> {stop.practicalTip}
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-200">
                    <span className="text-xs text-stone-500 font-mono">
                      Tempo: {stop.suggestedDuration}
                    </span>
                    <button
                      onClick={() => onSelectAttractionById(stop.attractionId)}
                      className="text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 cursor-pointer mt-1"
                    >
                      <span>Ver atração</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Essential Advice & Preservation for this route */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-5">
            <h4 className="font-serif font-bold text-amber-950 text-sm mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Orientações Essenciais para o Visitante</span>
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-amber-900">
              {currentRoute.essentialAdvice.map((advice, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>{advice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

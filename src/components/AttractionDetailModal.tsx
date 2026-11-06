import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldAlert,
  Volume2,
  VolumeX,
  Compass,
  BookOpen,
  Sparkles,
  ArrowLeft,
  Navigation,
} from 'lucide-react';
import { Attraction, ATTRACTIONS } from '../data/attractions';

interface AttractionDetailModalProps {
  attraction: Attraction | null;
  onClose: () => void;
  onSelectRelated: (attraction: Attraction) => void;
}

export const AttractionDetailModal: React.FC<AttractionDetailModalProps> = ({
  attraction,
  onClose,
  onSelectRelated,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [attraction]);

  // Clean up speech synthesis on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!attraction) return null;

  // Audio reader simulation using Web Speech API
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não oferece suporte à síntese de voz nativa.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToRead = `${attraction.name}. ${attraction.subtitle}. ${attraction.fullDescription}. História e importância cultural: ${attraction.history}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'pt-BR';
      utterance.rate = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Related attractions in same category
  const relatedAttractions = ATTRACTIONS.filter(
    (item) => item.category === attraction.category && item.id !== attraction.id
  ).slice(0, 3);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="attraction-detail-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden my-auto border border-stone-200 flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-stone-600 hover:text-stone-900 text-xs font-semibold flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-stone-200/60 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao catálogo</span>
            </button>
            <span className="text-stone-300" aria-hidden="true">|</span>
            <span className="text-xs text-stone-500 font-medium">
              {attraction.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Reader button */}
            <button
              onClick={handleToggleSpeech}
              className={`p-2 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isSpeaking
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
              title={isSpeaking ? 'Pausar áudio-descrição' : 'Ouvir áudio-descrição do atrativo'}
              aria-label="Ouvir áudio"
            >
              {isSpeaking ? <VolumeX className="w-4 h-4 text-amber-700" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isSpeaking ? 'Parar Áudio' : 'Ouvir Texto'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-md transition-colors cursor-pointer"
              aria-label="Fechar janela de detalhes"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Gallery and Title Area */}
          <div>
            <div className="relative aspect-16/9 rounded-lg overflow-hidden bg-stone-100 mb-3 border border-stone-200">
              <img
                src={attraction.gallery[activeImageIndex] || attraction.primaryImage}
                alt={attraction.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded">
                Foto {activeImageIndex + 1} de {attraction.gallery.length}
              </div>
            </div>

            {/* Thumbnail switcher if gallery has > 1 */}
            {attraction.gallery.length > 1 && (
              <div className="flex items-center gap-2 mb-6">
                {attraction.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-sky-700 scale-102' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}

            {/* Title & Subtitle */}
            <div className="mt-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-2">
                <span>{attraction.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{attraction.location.locality}</span>
                <span aria-hidden="true">·</span>
                <span>Tempo estimado: {attraction.timeToSpend}</span>
              </div>
              <h2 id="attraction-detail-title" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                {attraction.name}
              </h2>
              <p className="text-base text-stone-600 font-serif italic mt-1">
                {attraction.subtitle}
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-sky-900">
              {attraction.fullDescription}
            </p>
          </div>

          {/* History & Cultural Significance */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-800" />
              <span>História e Importância Cultural</span>
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-lg border border-stone-200/80">
              {attraction.history}
            </p>
          </div>

          {/* Curiosities */}
          {attraction.curiosities.length > 0 && (
            <div className="pt-6 border-t border-stone-200">
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span>Curiosidades e Memórias Locais</span>
              </h3>
              <ul className="space-y-2.5">
                {attraction.curiosities.map((curiosity, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-700 leading-relaxed">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span>{curiosity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Location & Access Info */}
          <div className="pt-6 border-t border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <div className="flex items-center gap-2 font-serif font-bold text-stone-900 text-sm mb-2">
                <MapPin className="w-4 h-4 text-sky-800" />
                <span>Localização & Endereço</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 mb-2">
                {attraction.location.address}
              </p>
              <div className="text-xs text-stone-500 mb-3 font-mono">
                Coordenadas: {attraction.location.coordinates.lat.toFixed(5)}, {attraction.location.coordinates.lng.toFixed(5)}
              </div>
              <a
                href={attraction.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-950 underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Abrir rota no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <div className="flex items-center gap-2 font-serif font-bold text-stone-900 text-sm mb-2">
                <Compass className="w-4 h-4 text-sky-800" />
                <span>Orientações de Acesso</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {attraction.location.accessGuide}
              </p>
            </div>
          </div>

          {/* Visiting Guidelines & Tips */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-sky-800" />
              <span>Informações de Visitação</span>
              {attraction.visiting.statusConfirmed ? (
                <span className="text-xs font-sans font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verificado pela pesquisa
                </span>
              ) : (
                <span className="text-xs font-sans font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Informação a confirmar
                </span>
              )}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs sm:text-sm">
              <div className="p-3 rounded border border-stone-200 bg-white">
                <div className="text-stone-500 text-xs mb-1">Horário de funcionamento:</div>
                <div className="text-stone-800 font-medium">{attraction.visiting.hours}</div>
              </div>
              <div className="p-3 rounded border border-stone-200 bg-white">
                <div className="text-stone-500 text-xs mb-1">Valor de ingresso:</div>
                <div className="text-stone-800 font-medium">{attraction.visiting.fee}</div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs sm:text-sm text-stone-600">
              <div className="font-semibold text-stone-800">Dicas para a visita:</div>
              {attraction.visiting.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-sky-700">✓</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preservation & Conservation Warnings */}
          <div className="pt-6 border-t border-stone-200">
            <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-4 sm:p-5">
              <div className="flex items-center gap-2 font-serif font-bold text-amber-950 text-sm sm:text-base mb-2">
                <ShieldAlert className="w-4 h-4 text-amber-700" />
                <span>Recomendações para Preservação do Patrimônio e Meio Ambiente</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <p>
                  <strong>Meio Ambiente:</strong> {attraction.preservation.environmental}
                </p>
                <p>
                  <strong>Patrimônio Cultural:</strong> {attraction.preservation.heritage}
                </p>
              </div>
            </div>
          </div>

          {/* Academic References */}
          <div className="pt-6 border-t border-stone-200 text-xs text-stone-500">
            <div className="font-semibold text-stone-700 mb-1.5">Referências e Fontes Consultadas:</div>
            <ul className="space-y-1 list-disc list-inside">
              {attraction.references.map((ref, idx) => (
                <li key={idx} className="leading-relaxed">{ref}</li>
              ))}
            </ul>
          </div>

          {/* Related Attractions */}
          {relatedAttractions.length > 0 && (
            <div className="pt-6 border-t border-stone-200">
              <h4 className="font-serif font-bold text-stone-900 text-base mb-3">
                Outros atrativos relacionados nesta categoria
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedAttractions.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="text-left p-3 rounded-lg border border-stone-200 hover:border-sky-600 bg-stone-50 hover:bg-white transition-all cursor-pointer group"
                  >
                    <div className="font-medium text-xs text-stone-900 group-hover:text-sky-800 line-clamp-1">
                      {rel.name}
                    </div>
                    <div className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                      {rel.summary}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-stone-500">
            Projeto Acadêmico Nísia Floresta · 2026
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
          >
            Fechar detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

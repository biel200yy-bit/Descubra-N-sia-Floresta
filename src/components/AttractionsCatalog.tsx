import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, CheckCircle2, AlertCircle, Filter, X, ArrowRight } from 'lucide-react';
import { Attraction } from '../data/attractions';

interface AttractionsCatalogProps {
  attractions: Attraction[];
  initialCategory?: string;
  initialSearchQuery?: string;
  onSelectAttraction: (attraction: Attraction) => void;
}

export const AttractionsCatalog: React.FC<AttractionsCatalogProps> = ({
  attractions,
  initialCategory = 'todas',
  initialSearchQuery = '',
  onSelectAttraction,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);

  const categories = [
    { id: 'todas', label: 'Todas as Atrações' },
    { id: 'lagoas', label: 'Lagoas e Áreas de Lazer' },
    { id: 'patrimonio', label: 'Patrimônio Histórico' },
    { id: 'praias', label: 'Praias e Paisagens Naturais' },
    { id: 'museus', label: 'Museus e Espaços de Memória' },
  ];

  // Filter logic
  const filteredAttractions = useMemo(() => {
    return attractions.filter((item) => {
      const matchesCategory =
        selectedCategory === 'todas' || item.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inName = item.name.toLowerCase().includes(q);
      const inSummary = item.summary.toLowerCase().includes(q);
      const inLocality = item.location.locality.toLowerCase().includes(q);
      const inTags = item.tags.some((t) => t.toLowerCase().includes(q));
      const inHistory = item.history.toLowerCase().includes(q);

      return inName || inSummary || inLocality || inTags || inHistory;
    });
  }, [attractions, selectedCategory, searchQuery]);

  const handleClearFilters = () => {
    setSelectedCategory('todas');
    setSearchQuery('');
  };

  return (
    <div className="py-12 sm:py-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-sky-800 font-semibold mb-2">
            Catálogo Oficial de Atrativos
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Pontos Turísticos e Patrimônio
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Explore as riquezas de Nísia Floresta, catalogadas a partir do levantamento bibliográfico e pesquisa de campo do projeto. Informações verificadas com coordenadas geográficas e contexto memorial.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-lg border border-stone-200 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por nome, lagoa, baobá, ferrovia, praia..."
                className="w-full pl-10 pr-9 py-2.5 bg-stone-50 border border-stone-200 rounded-md text-sm text-stone-900 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                aria-label="Buscar atrações no catálogo"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                  aria-label="Limpar termo de busca"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results count indicator */}
            <div className="text-xs text-stone-500 font-medium shrink-0 flex items-center gap-1.5 self-center">
              <span>{filteredAttractions.length}</span>
              <span>{filteredAttractions.length === 1 ? 'local encontrado' : 'locais encontrados'}</span>
            </div>
          </div>

          {/* Category Tabs (Segmented Button Controls) */}
          <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Categorias:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-sky-800 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clear filters banner if active */}
        {(selectedCategory !== 'todas' || searchQuery) && (
          <div className="mb-6 flex items-center justify-between bg-sky-50/70 border border-sky-100 px-4 py-2.5 rounded-md text-xs text-sky-900">
            <div>
              <span>Filtro ativo: </span>
              {selectedCategory !== 'todas' && (
                <strong className="mr-2">
                  {categories.find((c) => c.id === selectedCategory)?.label}
                </strong>
              )}
              {searchQuery && (
                <span>
                  termo “<strong>{searchQuery}</strong>”
                </span>
              )}
            </div>
            <button
              onClick={handleClearFilters}
              className="text-sky-800 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Limpar todos os filtros</span>
            </button>
          </div>
        )}

        {/* Empty State when no results found */}
        {filteredAttractions.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-lg border border-stone-200 max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-stone-400 mx-auto mb-4" />
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Nenhum local foi encontrado
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
              Não encontramos nenhuma atração correspondente aos termos ou filtros selecionados. Tente buscar por palavras mais amplas como “lagoa”, “igreja”, “maré”, “praia” ou “baobá”.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-sky-800 text-white text-xs font-semibold rounded-md hover:bg-sky-900 transition-colors cursor-pointer"
            >
              Exibir todas as atrações
            </button>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAttractions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                {/* Photo with reliable fallback and category label */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={item.primaryImage}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold text-white bg-stone-900/70 backdrop-blur-xs px-2 py-0.5 rounded-sm">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed metadata line with typographic bullet */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="flex items-center gap-1 truncate max-w-[150px]">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-stone-400" />
                        <span className="truncate">{item.location.locality.split(',')[0]}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 shrink-0">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        <span>{item.timeToSpend}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-sky-800 transition-colors mb-1.5">
                      {item.name}
                    </h3>

                    <p className="text-xs text-stone-500 italic mb-2 line-clamp-1">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    {item.visiting.statusConfirmed ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Dados verificados</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-amber-700 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Acesso sob confirmação</span>
                      </span>
                    )}

                    <button
                      onClick={() => onSelectAttraction(item)}
                      className="text-xs font-semibold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

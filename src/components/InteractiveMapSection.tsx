import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  ArrowRight,
  Layers,
  Eye,
  Key,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Info,
} from 'lucide-react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Attraction } from '../data/attractions';

interface InteractiveMapSectionProps {
  attractions: Attraction[];
  onSelectAttraction: (attraction: Attraction) => void;
}

export const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({
  attractions,
  onSelectAttraction,
}) => {
  const [selectedPin, setSelectedPin] = useState<Attraction>(attractions[0]);
  const [mapCategory, setMapCategory] = useState<string>('todas');
  const [searchMapText, setSearchMapText] = useState<string>('');

  // Key management: environment variable or user-provided runtime key
  const envApiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) || '';
  const [userApiKey, setUserApiKey] = useState<string>(() => {
    try {
      return localStorage.getItem('nisia_google_maps_key') || '';
    } catch {
      return '';
    }
  });
  const [inputKey, setInputKey] = useState<string>('');
  const [showKeyConfigModal, setShowKeyConfigModal] = useState<boolean>(false);

  const activeApiKey = (userApiKey || envApiKey).trim();

  // Map state
  const [mapEngine, setMapEngine] = useState<'google' | 'fallback'>(
    activeApiKey ? 'google' : 'fallback'
  );
  const [isLoadingGoogleMaps, setIsLoadingGoogleMaps] = useState<boolean>(false);
  const [googleMapsError, setGoogleMapsError] = useState<string | null>(null);

  // References for Google Map
  const googleMapDivRef = useRef<HTMLDivElement>(null);
  const googleMapInstanceRef = useRef<google.maps.Map | null>(null);
  const googleMarkersRef = useRef<google.maps.Marker[]>([]);
  const googleInfoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  // References for Leaflet Fallback Map
  const leafletMapDivRef = useRef<HTMLDivElement>(null);
  const leafletMapInstanceRef = useRef<L.Map | null>(null);
  const leafletMarkersLayerRef = useRef<L.LayerGroup | null>(null);

  // Municipal center coordinates for Nísia Floresta / RN
  const centerLat = -6.048;
  const centerLng = -35.172;
  const defaultZoom = 12;

  // Filter attractions for display with strict coordinate validation
  const filteredPins = attractions.filter((a) => {
    const validCoords =
      typeof a.location.coordinates.lat === 'number' &&
      typeof a.location.coordinates.lng === 'number' &&
      !isNaN(a.location.coordinates.lat) &&
      !isNaN(a.location.coordinates.lng);
    if (!validCoords) return false;

    const matchesCategory = mapCategory === 'todas' || a.category === mapCategory;
    if (!matchesCategory) return false;

    if (!searchMapText.trim()) return true;
    const q = searchMapText.toLowerCase().trim();
    return (
      a.name.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.location.locality.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  // Handle saving custom API key
  const handleSaveCustomKey = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputKey.trim();
    if (trimmed) {
      try {
        localStorage.setItem('nisia_google_maps_key', trimmed);
      } catch (err) {
        console.error(err);
      }
      setUserApiKey(trimmed);
      setGoogleMapsError(null);
      setMapEngine('google');
      setShowKeyConfigModal(false);
    }
  };

  const handleClearKey = () => {
    try {
      localStorage.removeItem('nisia_google_maps_key');
    } catch (err) {
      console.error(err);
    }
    setUserApiKey('');
    setInputKey('');
    setGoogleMapsError(null);
    setMapEngine('fallback');
  };

  // Helper to get category colors
  const getCategoryColor = (category: Attraction['category']) => {
    switch (category) {
      case 'lagoas':
        return '#0d9488'; // Teal
      case 'praias':
        return '#0284c7'; // Sky
      case 'patrimonio':
        return '#d97706'; // Amber
      case 'museus':
      case 'cultura':
        return '#be123c'; // Rose
      default:
        return '#0284c7';
    }
  };

  // -------------------------------------------------------------
  // GOOGLE MAPS JAVASCRIPT API INITIALIZATION
  // -------------------------------------------------------------
  useEffect(() => {
    if (mapEngine !== 'google' || !activeApiKey) return;

    let isMounted = true;
    setIsLoadingGoogleMaps(true);
    setGoogleMapsError(null);

    // Global listener for auth failure (e.g. invalid key or billing not enabled)
    (window as any).gm_authFailure = () => {
      if (isMounted) {
        setGoogleMapsError(
          'A chave da Google Maps API foi recusada (verifique se a "Maps JavaScript API" está ativada no Google Cloud e se o faturamento foi associado).'
        );
        setIsLoadingGoogleMaps(false);
      }
    };

    setOptions({
      key: activeApiKey,
      v: 'weekly',
      language: 'pt-BR',
      region: 'BR',
    });

    Promise.all([importLibrary('maps'), importLibrary('marker')])
      .then(([mapsLib, _markerLib]) => {
        if (!isMounted || !googleMapDivRef.current) return;

        const { Map, InfoWindow } = mapsLib;

        // Initialize Google Map
        const map = new Map(googleMapDivRef.current, {
          center: { lat: centerLat, lng: centerLng },
          zoom: defaultZoom,
          mapTypeId: 'roadmap',
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT,
          },
        });

        googleMapInstanceRef.current = map;
        googleInfoWindowRef.current = new InfoWindow();
        setIsLoadingGoogleMaps(false);
      })
      .catch((err: unknown) => {
        console.error('Google Maps Load Error:', err);
        if (isMounted) {
          setGoogleMapsError(
            'Falha ao carregar a Google Maps JavaScript API. Verifique a chave ou sua conexão.'
          );
          setIsLoadingGoogleMaps(false);
        }
      });

    return () => {
      isMounted = false;
      googleMarkersRef.current.forEach((m) => m.setMap(null));
      googleMarkersRef.current = [];
    };
  }, [mapEngine, activeApiKey]);

  // Update Google Maps Markers
  useEffect(() => {
    const map = googleMapInstanceRef.current;
    if (mapEngine !== 'google' || !map || typeof google === 'undefined') return;

    // Clear existing markers
    googleMarkersRef.current.forEach((m) => m.setMap(null));
    googleMarkersRef.current = [];

    const infoWindow = googleInfoWindowRef.current;

    filteredPins.forEach((item) => {
      const pinColor = getCategoryColor(item.category);

      // SVG Pin Icon with category color
      const svgMarker: google.maps.Symbol = {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        fillColor: pinColor,
        fillOpacity: 1,
        strokeWeight: 1.5,
        strokeColor: '#ffffff',
        scale: 1.8,
        anchor: new google.maps.Point(12, 22),
      };

      const marker = new google.maps.Marker({
        position: {
          lat: item.location.coordinates.lat,
          lng: item.location.coordinates.lng,
        },
        map,
        title: item.name,
        icon: svgMarker,
        animation: selectedPin.id === item.id ? google.maps.Animation.BOUNCE : undefined,
      });

      if (selectedPin.id === item.id) {
        setTimeout(() => {
          marker.setAnimation(null);
        }, 1500);
      }

      // Marker click handler: update selected pin and open InfoWindow
      marker.addListener('click', () => {
        setSelectedPin(item);

        if (infoWindow) {
          const contentString = `
            <div style="font-family: sans-serif; max-width: 250px; padding: 4px;">
              <div style="width: 100%; height: 110px; border-radius: 6px; overflow: hidden; margin-bottom: 8px; background: #e5e5e5;">
                <img src="${item.primaryImage}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: ${pinColor}; margin-bottom: 2px;">
                ${item.categoryLabel}
              </div>
              <div style="font-size: 14px; font-weight: bold; color: #1c1917; margin-bottom: 4px;">
                ${item.name}
              </div>
              <p style="font-size: 11px; color: #57534e; line-height: 1.4; margin-bottom: 10px;">
                ${item.summary}
              </p>
              <div style="display: flex; gap: 6px; flex-direction: column;">
                <a href="https://www.google.com/maps/dir/?api=1&destination=${item.location.coordinates.lat},${item.location.coordinates.lng}" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-align: center; font-size: 11px; font-weight: 600; background: #0284c7; color: #ffffff; padding: 6px 10px; border-radius: 4px; text-decoration: none;">
                  Traçar Rota no Google Maps (GPS)
                </a>
              </div>
            </div>
          `;
          infoWindow.setContent(contentString);
          infoWindow.open(map, marker);
        }
      });

      googleMarkersRef.current.push(marker);
    });
  }, [filteredPins, mapEngine, selectedPin]);

  // -------------------------------------------------------------
  // LEAFLET FALLBACK MAP INITIALIZATION (ALWAYS AVAILABLE)
  // -------------------------------------------------------------
  useEffect(() => {
    if (mapEngine !== 'fallback') return;

    if (!leafletMapDivRef.current) return;

    if (!leafletMapInstanceRef.current) {
      const map = L.map(leafletMapDivRef.current, {
        center: [centerLat, centerLng],
        zoom: defaultZoom,
        zoomControl: false,
        attributionControl: false,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          maxZoom: 19,
          subdomains: 'abcd',
        }
      ).addTo(map);

      leafletMarkersLayerRef.current = L.layerGroup().addTo(map);
      leafletMapInstanceRef.current = map;
    }

    return () => {
      if (leafletMapInstanceRef.current) {
        leafletMapInstanceRef.current.remove();
        leafletMapInstanceRef.current = null;
      }
    };
  }, [mapEngine]);

  // Update Leaflet Markers
  useEffect(() => {
    if (mapEngine !== 'fallback') return;
    const map = leafletMapInstanceRef.current;
    const markersLayer = leafletMarkersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    filteredPins.forEach((item) => {
      const isSelected = selectedPin.id === item.id;
      const pinColor = getCategoryColor(item.category);

      const markerHtml = `
        <div style="transform: translate(-50%, -100%); cursor: pointer; display: flex; flex-direction: column; align-items: center;">
          <div style="
            background: ${isSelected ? '#0f172a' : pinColor};
            color: #ffffff;
            width: ${isSelected ? '36px' : '30px'};
            height: ${isSelected ? '36px' : '30px'};
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            border: 2px solid #ffffff;
          ">
            <span style="transform: rotate(45deg); font-size: 13px; line-height: 1;">📍</span>
          </div>
          <div style="
            margin-top: 3px;
            background: rgba(15, 23, 42, 0.9);
            color: #ffffff;
            font-size: 11px;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 4px;
            white-space: nowrap;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            display: ${isSelected ? 'block' : 'none'};
          ">
            ${item.name}
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: markerHtml,
        className: 'custom-leaflet-pin',
        iconSize: [36, 44],
        iconAnchor: [18, 44],
      });

      const marker = L.marker(
        [item.location.coordinates.lat, item.location.coordinates.lng],
        { icon: customIcon, zIndexOffset: isSelected ? 1000 : 100 }
      );

      marker.on('click', () => {
        setSelectedPin(item);
        map.flyTo([item.location.coordinates.lat, item.location.coordinates.lng], 14, {
          duration: 0.6,
        });
      });

      markersLayer.addLayer(marker);
    });
  }, [filteredPins, mapEngine, selectedPin]);

  // Center on pin when clicked from the list
  const handleSelectFromList = useCallback(
    (item: Attraction) => {
      setSelectedPin(item);

      if (mapEngine === 'google' && googleMapInstanceRef.current && typeof google !== 'undefined') {
        const map = googleMapInstanceRef.current;
        map.panTo({
          lat: item.location.coordinates.lat,
          lng: item.location.coordinates.lng,
        });
        map.setZoom(14);

        const matchedMarker = googleMarkersRef.current.find(
          (m) =>
            m.getPosition()?.lat() === item.location.coordinates.lat &&
            m.getPosition()?.lng() === item.location.coordinates.lng
        );
        if (matchedMarker && google.maps.event) {
          google.maps.event.trigger(matchedMarker, 'click');
        }
      } else if (mapEngine === 'fallback' && leafletMapInstanceRef.current) {
        leafletMapInstanceRef.current.flyTo(
          [item.location.coordinates.lat, item.location.coordinates.lng],
          14,
          { duration: 0.6 }
        );
      }
    },
    [mapEngine]
  );

  const handleResetMap = () => {
    if (mapEngine === 'google' && googleMapInstanceRef.current) {
      googleMapInstanceRef.current.setCenter({ lat: centerLat, lng: centerLng });
      googleMapInstanceRef.current.setZoom(defaultZoom);
    } else if (mapEngine === 'fallback' && leafletMapInstanceRef.current) {
      leafletMapInstanceRef.current.flyTo([centerLat, centerLng], defaultZoom);
    }
  };

  const handleZoomIn = () => {
    if (mapEngine === 'google' && googleMapInstanceRef.current) {
      googleMapInstanceRef.current.setZoom(
        (googleMapInstanceRef.current.getZoom() || defaultZoom) + 1
      );
    } else if (mapEngine === 'fallback' && leafletMapInstanceRef.current) {
      leafletMapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapEngine === 'google' && googleMapInstanceRef.current) {
      googleMapInstanceRef.current.setZoom(
        (googleMapInstanceRef.current.getZoom() || defaultZoom) - 1
      );
    } else if (mapEngine === 'fallback' && leafletMapInstanceRef.current) {
      leafletMapInstanceRef.current.zoomOut();
    }
  };

  return (
    <div className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-sky-800 font-semibold mb-2 flex items-center gap-2">
              <span>Georreferenciamento Oficial & Rotas</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-500">Google Maps Platform</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Mapa Turístico Interativo
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
              Consulte a localização exata dos atrativos turísticos, históricos e naturais de Nísia Floresta/RN. Navegue pelo centro colonial, lagoas de água doce e praias com coordenadas verificadas.
            </p>
          </div>

          {/* Engine Selector / Key Config Button */}
          <div className="flex items-center gap-2 shrink-0 self-start md:self-end">
            <button
              onClick={() => setShowKeyConfigModal(true)}
              className="px-3.5 py-2 bg-white hover:bg-stone-100 border border-stone-300 rounded-md text-xs font-semibold text-stone-700 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="Configurar chave da Google Maps API"
            >
              <Key className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {activeApiKey ? 'Chave Google Maps Ativa' : 'Configurar Chave Google Maps'}
              </span>
            </button>
          </div>
        </div>

        {/* Status Notification Banner when Google Maps key is pending or errored */}
        {(!activeApiKey || googleMapsError) && (
          <div className="mb-6 bg-amber-50/90 border border-amber-200 rounded-lg p-4 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-amber-900 text-xs sm:text-sm">
                  {googleMapsError
                    ? 'Aviso da Google Maps JavaScript API'
                    : 'Modo de Visualização Cartográfica Ativo'}
                </div>
                <p className="text-stone-700 mt-0.5 leading-relaxed">
                  {googleMapsError ? (
                    googleMapsError
                  ) : (
                    <span>
                      O mapa interativo está operando normalmente com a base cartográfica municipal de alta precisão. Para utilizar a renderização nativa da <strong>Google Maps JavaScript API</strong>, adicione sua chave de API nas configurações ou no arquivo <code>.env</code> (<code>VITE_GOOGLE_MAPS_API_KEY</code>).
                    </span>
                  )}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowKeyConfigModal(true)}
              className="px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white rounded text-xs font-semibold whitespace-nowrap self-start sm:self-auto cursor-pointer transition-colors"
            >
              Instruções de Configuração
            </button>
          </div>
        )}

        {/* Category Filters Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 bg-white p-3.5 rounded-lg border border-stone-200 shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              Categorias:
            </span>
            {[
              { id: 'todas', label: 'Todas as Atrações' },
              { id: 'lagoas', label: 'Lagoas e Rios' },
              { id: 'praias', label: 'Praias e Falésias' },
              { id: 'patrimonio', label: 'Patrimônio Histórico' },
              { id: 'museus', label: 'Museus e Memória' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setMapCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  mapCategory === cat.id
                    ? 'bg-sky-800 text-white shadow-xs font-semibold'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick search input */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
            <input
              type="text"
              value={searchMapText}
              onChange={(e) => setSearchMapText(e.target.value)}
              placeholder="Buscar no mapa..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-600"
            />
          </div>
        </div>

        {/* Main Grid: Map Viewer + Location Inspector Card & Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Map Container */}
          <div className="lg:col-span-8 bg-stone-100 rounded-xl overflow-hidden border border-stone-200 shadow-sm relative min-h-[500px] sm:min-h-[560px] flex flex-col">
            {/* Loading Indicator */}
            {isLoadingGoogleMaps && (
              <div className="absolute inset-0 z-30 bg-white/80 backdrop-blur-xs flex items-center justify-center gap-2 text-stone-800 text-sm font-medium">
                <RefreshCw className="w-5 h-5 animate-spin text-sky-800" />
                <span>Carregando Google Maps...</span>
              </div>
            )}

            {/* Google Maps Container */}
            {mapEngine === 'google' && !googleMapsError && (
              <div ref={googleMapDivRef} className="w-full h-full min-h-[520px] z-10" />
            )}

            {/* Fallback Leaflet Map Container */}
            {(mapEngine === 'fallback' || googleMapsError) && (
              <div ref={leafletMapDivRef} className="w-full h-full min-h-[520px] z-10" />
            )}

            {/* Floating Top Badge with Municipal Name */}
            <div className="absolute top-3 left-3 z-20 flex flex-col gap-2 pointer-events-none">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-lg shadow-md border border-stone-200 text-xs text-stone-800 flex items-center gap-2 pointer-events-auto">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <span className="font-semibold text-stone-900">
                  Nísia Floresta / RN · Cartografia Turística
                </span>
                <span className="text-stone-300">|</span>
                <span className="text-[11px] text-stone-500 font-mono">
                  {filteredPins.length} locais
                </span>
              </div>
            </div>

            {/* Floating Navigation Controls (Zoom & Reset) */}
            <div className="absolute right-3 top-3 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-md rounded-lg shadow-md border border-stone-200 p-1">
              <button
                onClick={handleZoomIn}
                className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded transition-colors cursor-pointer"
                title="Aproximar zoom (+)"
                aria-label="Aproximar zoom"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded transition-colors cursor-pointer"
                title="Afastar zoom (-)"
                aria-label="Afastar zoom"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <div className="border-t border-stone-200 my-0.5" />
              <button
                onClick={handleResetMap}
                className="p-2 text-stone-700 hover:text-sky-800 hover:bg-stone-100 rounded transition-colors cursor-pointer"
                title="Centralizar Nísia Floresta"
                aria-label="Centralizar mapa"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Map Legend Footer */}
            <div className="bg-white p-3.5 text-xs text-stone-600 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-4 text-[11px] font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-teal-600 inline-block" />
                  Lagoas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-sky-600 inline-block" />
                  Praias & Falésias
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-amber-600 inline-block" />
                  Patrimônio Histórico
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-700 inline-block" />
                  Museus & Memória
                </span>
              </div>
              <span className="text-[11px] text-stone-500 hidden sm:inline">
                Clique nos marcadores para ver informações e obter direções de GPS
              </span>
            </div>
          </div>

          {/* Location Details & Quick Attractions List Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Active Selected Attraction Card */}
            <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-sky-800 uppercase tracking-wider">
                    {selectedPin.categoryLabel}
                  </span>
                  <span className="font-mono text-[11px] text-stone-500">
                    {selectedPin.location.coordinates.lat.toFixed(4)}, {selectedPin.location.coordinates.lng.toFixed(4)}
                  </span>
                </div>

                {/* Photo preview */}
                <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-stone-100 mb-3 border border-stone-200">
                  <img
                    src={selectedPin.primaryImage}
                    alt={selectedPin.imageAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded">
                    {selectedPin.location.locality.split(',')[0]}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  {selectedPin.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="truncate">{selectedPin.location.address}</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-3">
                  {selectedPin.summary}
                </p>

                <div className="bg-stone-50 p-2.5 rounded-md border border-stone-100 text-xs text-stone-600 mb-4 space-y-1">
                  <div>
                    <strong className="text-stone-800">Acesso:</strong> {selectedPin.location.accessGuide}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-100 space-y-2">
                <button
                  onClick={() => onSelectAttraction(selectedPin)}
                  className="w-full py-2.5 px-4 bg-sky-800 hover:bg-sky-900 text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver ficha completa da atração</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedPin.location.coordinates.lat},${selectedPin.location.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-700" />
                  <span>Traçar rota no Google Maps (GPS)</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Quick Attraction Directory List */}
            <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs flex-1 flex flex-col">
              <div className="font-serif font-bold text-sm text-stone-900 mb-2 flex items-center justify-between">
                <span>Lista de Atrações Mapeadas</span>
                <span className="text-xs font-sans text-stone-400 font-normal">
                  {filteredPins.length} locais
                </span>
              </div>

              <div className="overflow-y-auto max-h-[220px] space-y-1.5 pr-1">
                {filteredPins.map((item) => {
                  const isCurrent = selectedPin.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectFromList(item)}
                      className={`w-full text-left p-2 rounded-md transition-all text-xs flex items-center justify-between cursor-pointer ${
                        isCurrent
                          ? 'bg-sky-50 text-sky-900 font-semibold border border-sky-200'
                          : 'hover:bg-stone-50 text-stone-700 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate mr-2">
                        <MapPin
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isCurrent ? 'text-sky-700' : 'text-stone-400'
                          }`}
                        />
                        <span className="truncate">{item.name}</span>
                      </div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider shrink-0 font-medium">
                        {item.categoryLabel.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Configuration Modal */}
      {showKeyConfigModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex justify-center p-4"
        >
          <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden my-auto border border-stone-200 p-6 space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  Configuração da Google Maps API
                </h3>
              </div>
              <button
                onClick={() => setShowKeyConfigModal(false)}
                className="text-stone-400 hover:text-stone-700 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-stone-600 space-y-3 leading-relaxed">
              <p>
                Para habilitar a <strong>Google Maps JavaScript API</strong> no site sem expor credenciais em código público, siga as etapas oficiais:
              </p>

              <ol className="list-decimal list-inside space-y-1.5 pl-1 bg-stone-50 p-3 rounded-lg border border-stone-200 text-stone-700">
                <li>Acesse o <strong>Google Cloud Console</strong> e crie ou selecione seu projeto;</li>
                <li>Ative o faturamento (quando solicitado pelo Google Cloud);</li>
                <li>No menu de APIs, ative a <strong>Maps JavaScript API</strong>;</li>
                <li>Acesse <em>Credenciais</em> e crie uma nova <strong>Chave de API</strong>;</li>
                <li>
                  Adicione restrição de HTTP Referrers para os domínios do seu aplicativo;
                </li>
                <li>
                  Configure a variável de ambiente <code>VITE_GOOGLE_MAPS_API_KEY</code> no seu arquivo <code>.env</code>.
                </li>
              </ol>

              {/* In-app key tester input */}
              <form onSubmit={handleSaveCustomKey} className="pt-2 space-y-3">
                <label className="block font-semibold text-stone-800 text-xs">
                  Ou insira a chave aqui para testar imediatamente na sua sessão:
                </label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className="flex-1 px-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-sky-800 hover:bg-sky-900 text-white font-semibold text-xs rounded transition-colors cursor-pointer"
                  >
                    Aplicar
                  </button>
                </div>
              </form>

              {activeApiKey && (
                <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-[11px]">
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Chave ativa nesta sessão
                  </span>
                  <button
                    onClick={handleClearKey}
                    className="text-red-600 hover:underline cursor-pointer"
                  >
                    Remover chave local
                  </button>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setShowKeyConfigModal(false)}
                className="px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded hover:bg-stone-800 cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

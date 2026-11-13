/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedSection } from './components/FeaturedSection';
import { AttractionsCatalog } from './components/AttractionsCatalog';
import { AttractionDetailModal } from './components/AttractionDetailModal';
import { HistorySection } from './components/HistorySection';
import { InteractiveMapSection } from './components/InteractiveMapSection';
import { TouristRoutesSection } from './components/TouristRoutesSection';
import { CultureSection } from './components/CultureSection';
import { AboutProjectSection } from './components/AboutProjectSection';
import { Footer } from './components/Footer';

import { ATTRACTIONS, Attraction } from './data/attractions';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  // Search & category passed from Hero into Catalog
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('todas');
  const [activeSearchQuery, setActiveSearchQuery] = useState<string>('');

  // Accessibility state
  const [textSize, setTextSize] = useState<'normal' | 'large'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);

  const handleSearchFromHero = (query: string) => {
    setActiveSearchQuery(query);
    setActiveCategoryFilter('todas');
    setActiveTab('atracoes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryFromHero = (category: string) => {
    setActiveCategoryFilter(category);
    setActiveSearchQuery('');
    setActiveTab('atracoes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAttractionById = (id: string) => {
    const target = ATTRACTIONS.find((a) => a.id === id);
    if (target) {
      setSelectedAttraction(target);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-all ${
        highContrast ? 'high-contrast' : ''
      } ${textSize === 'large' ? 'text-lg' : 'text-base'}`}
    >
      {/* Screen Reader Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-sky-900 focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Pular diretamente para o conteúdo principal
      </a>

      {/* Main Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        textSize={textSize}
        setTextSize={setTextSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {activeTab === 'inicio' && (
          <>
            <HeroSection
              onSearch={handleSearchFromHero}
              onSelectCategory={handleCategoryFromHero}
              onNavigateTo={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <FeaturedSection
              attractions={ATTRACTIONS}
              onSelectAttraction={(attr) => setSelectedAttraction(attr)}
              onViewAll={() => {
                setActiveTab('atracoes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <HistorySection />
            <InteractiveMapSection
              attractions={ATTRACTIONS}
              onSelectAttraction={(attr) => setSelectedAttraction(attr)}
            />
            <CultureSection />
            <TouristRoutesSection
              onSelectAttractionById={handleSelectAttractionById}
            />
          </>
        )}

        {activeTab === 'atracoes' && (
          <AttractionsCatalog
            attractions={ATTRACTIONS}
            initialCategory={activeCategoryFilter}
            initialSearchQuery={activeSearchQuery}
            onSelectAttraction={(attr) => setSelectedAttraction(attr)}
          />
        )}

        {activeTab === 'historia' && <HistorySection />}

        {activeTab === 'cultura' && <CultureSection />}

        {activeTab === 'roteiros' && (
          <TouristRoutesSection
            onSelectAttractionById={handleSelectAttractionById}
          />
        )}

        {activeTab === 'mapa' && (
          <InteractiveMapSection
            attractions={ATTRACTIONS}
            onSelectAttraction={(attr) => setSelectedAttraction(attr)}
          />
        )}

        {activeTab === 'sobre' && <AboutProjectSection />}
      </main>

      {/* Footer */}
      <Footer
        onNavigateTo={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Detailed Attraction Modal */}
      <AttractionDetailModal
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
        onSelectRelated={(related) => setSelectedAttraction(related)}
      />
    </div>
  );
}

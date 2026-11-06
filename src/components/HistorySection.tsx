import React, { useState } from 'react';
import { BookOpen, Award, Calendar, Quote, CheckCircle2, ChevronRight, Landmark } from 'lucide-react';
import { TIMELINE_MILESTONES, NISIA_BIOGRAPHY } from '../data/history';

export const HistorySection: React.FC = () => {
  const [timelineFilter, setTimelineFilter] = useState<'tudo' | 'nisia' | 'municipio' | 'patrimonio'>('tudo');

  const filteredMilestones = TIMELINE_MILESTONES.filter((m) => {
    if (timelineFilter === 'tudo') return true;
    return m.category === timelineFilter;
  });

  return (
    <div className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-sky-800 font-semibold mb-2">
            Memória & Identidade Potiguar
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            História de Nísia Floresta
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Das origens indígenas e coloniais do antigo Papary à consagração definitiva da pioneira educadora e escritora feminista Dionísia Gonçalves Pinto, cujo legado moldou a identidade do município.
          </p>
        </div>

        {/* Nísia Floresta Brasileira Augusta - Major Curatorial Profile */}
        <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Curatorial Deck */}
            <div className="lg:col-span-5 bg-stone-900 text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-3">
                  Patrona das Letras Potiguares
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
                  {NISIA_BIOGRAPHY.fullName}
                </h2>
                <div className="text-sm font-serif italic text-stone-300 mb-6">
                  Pseudônimo: “{NISIA_BIOGRAPHY.penName}”
                </div>

                <div className="space-y-3 text-xs text-stone-300 border-t border-stone-800 pt-5">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Nascimento:</span>
                    <span className="font-medium text-white">{NISIA_BIOGRAPHY.birthDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Local:</span>
                    <span className="font-medium text-white text-right">Sítio Floresta, Papary/RN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Falecimento:</span>
                    <span className="font-medium text-white">{NISIA_BIOGRAPHY.deathDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Túmulo / Cripta:</span>
                    <span className="font-medium text-amber-300 text-right">Memorial Nísia Floresta/RN</span>
                  </div>
                </div>
              </div>

              {/* Quote Block */}
              <div className="mt-8 pt-6 border-t border-stone-800">
                <Quote className="w-6 h-6 text-amber-400 mb-2 opacity-80" />
                <p className="font-serif italic text-sm text-stone-200 leading-relaxed">
                  {NISIA_BIOGRAPHY.quote}
                </p>
                <div className="text-[11px] text-stone-400 mt-2">
                  — Nísia Floresta, em Direitos das Mulheres (1832)
                </div>
              </div>
            </div>

            {/* Right Editorial Essay */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                  Pioneirismo Feminista, Educação e Humanismo
                </h3>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                  {NISIA_BIOGRAPHY.significance}
                </p>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                  Em uma época em que a sociedade brasileira destinava às mulheres apenas o aprendizado de costura e etiqueta para o casamento, Nísia Floresta desafiou convenções ao abrir no Rio de Janeiro o inovador <strong>Colégio Augusto</strong>, exigindo para as alunas a mesma erudição científica conferida aos homens.
                </p>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  Sua mente inquieta levou-a também à Europa, onde viveu por anos na França e na Itália, dialogando com intelectuais como o filósofo Auguste Comte. Em 1948, seu nome substituiu definitivamente a denominação secular de “Papary”, transformando o município em símbolo permanente de emancipação e bravura intelectual.
                </p>
              </div>

              {/* Principal Books Published */}
              <div className="pt-6 border-t border-stone-100">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-sky-900 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Principais Obras Publicadas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {NISIA_BIOGRAPHY.mainWorks.slice(0, 4).map((work, idx) => (
                    <div key={idx} className="p-3 bg-stone-50 rounded-md border border-stone-200/80">
                      <div className="flex items-center justify-between text-xs font-bold text-stone-900 mb-1">
                        <span>{work.title}</span>
                        <span className="text-sky-800 font-mono text-[11px]">{work.year}</span>
                      </div>
                      <p className="text-[11px] text-stone-600 line-clamp-2 leading-snug">
                        {work.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Section: Papary to Nísia Floresta & Historical Heritage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg border border-stone-200">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              Origem & Formação
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              O Antigo Povoado de Papary
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              O termo “Papary” remonta à toponímia indígena dos potiguaras, associada a espécies de peixes locais e às águas mansas do complexo lacustre. Desenvolveu-se em torno da capela de Nossa Senhora do Ó erguida por colonos no século XVIII, tornando-se polo mercantil e canavieiro do Vale do Papary.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200">
            <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
              Século XIX & Ferrovias
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              A Vila Imperial e o Apito do Trem
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Elevada a Vila Imperial em 1852, a localidade ganhou novo impulso econômico com a chegada da ferrovia da Great Western em 1881. A Estação de Papary e o monumental Baobá plantado em 1877 tornaram-se marcos visuais da cidade, ligando a província potiguar aos grandes fluxos comerciais.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
              Repatriação & Memória
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
              O Retorno à Terra Natal
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Após falecer na França em 1885, Nísia Floresta repousou por décadas em Bonsecours até a histórica repatriação em 1954. Seus restos mortais foram acolhidos com honras cívicas na cidade natal, repousando hoje na cripta do memorial construído no centro histórico.
            </p>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-stone-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-sky-800 font-semibold mb-1">
                Cronologia Verificável
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Linha do Tempo Histórica
              </h3>
            </div>

            {/* Timeline Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg overflow-x-auto">
              {[
                { id: 'tudo', label: 'Todos os Marcos' },
                { id: 'nisia', label: 'Vida de Nísia' },
                { id: 'municipio', label: 'Município' },
                { id: 'patrimonio', label: 'Patrimônio' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setTimelineFilter(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    timelineFilter === tab.id
                      ? 'bg-white text-stone-900 shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Rail */}
          <div className="relative border-l-2 border-stone-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
            {filteredMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Node dot on rail */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-sky-700 group-hover:bg-sky-700 transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                  <span className="font-mono text-sm sm:text-base font-bold text-sky-900">
                    {milestone.year}
                  </span>
                  <span className="text-xs text-stone-400 font-medium">·</span>
                  <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                    {milestone.categoryLabel}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {milestone.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-2">
                  {milestone.description}
                </p>

                <div className="text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded border border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span>
                    <strong>Contexto:</strong> {milestone.historicalContext}
                  </span>
                  <span className="text-stone-400 shrink-0 italic">
                    Fonte: {milestone.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

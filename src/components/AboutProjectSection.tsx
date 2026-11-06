import React from 'react';
import { GraduationCap, BookOpen, ShieldCheck, HeartHandshake, FileText, CheckCircle2 } from 'lucide-react';

export const AboutProjectSection: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-sky-800 font-semibold mb-2">
            Iniciativa Acadêmica & Extensão
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Sobre a Plataforma Digital
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Conheça os fundamentos, a metodologia e os propósitos do projeto acadêmico “Plataforma Digital de Turismo e Patrimônio Histórico: Valorizando o Município de Nísia Floresta-RN”.
          </p>
        </div>

        {/* Academic Presentation Card */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-10 shadow-xs mb-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Missão e Compromisso Social
              </h2>
              <p>
                A plataforma <strong>“Descubra Nísia Floresta”</strong> nasceu do esforço de sistematizar, catalogar e democratizar o acesso às informações sobre o patrimônio histórico, ambiental e cultural de Nísia Floresta, no Rio Grande do Norte.
              </p>
              <p>
                Muitas vezes ofuscada pelos grandes centros urbanos litorâneos, a cidade de Nísia Floresta possui uma das trajetórias históricas mais singulares da história brasileira — marcada pela memória de sua ilustre patrona, <strong>Dionísia Gonçalves Pinto (Nísia Floresta Brasileira Augusta)</strong>, pelas águas da APA Bonfim-Guaraíras, pelos arrecifes milenares de arenito e pelos antigos engenhos do Vale do Papary.
              </p>
              <p>
                O objetivo central é aproximar moradores, estudantes e turistas da história local, fomentando o turismo de base comunitária, a preservação dos monumentos e a valorização das artesãs da renda de bilro e dos pescadores artesanais.
              </p>
            </div>

            <div className="lg:col-span-4 bg-stone-50 p-6 rounded-lg border border-stone-200 space-y-4 text-xs text-stone-600">
              <div className="font-serif font-bold text-stone-900 text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-800" />
                <span>Ficha do Projeto Acadêmico</span>
              </div>
              <div>
                <strong className="text-stone-800 block">Título do Projeto:</strong>
                <span>Plataforma Digital de Turismo e Patrimônio Histórico: Valorizando o Município de Nísia Floresta-RN</span>
              </div>
              <div>
                <strong className="text-stone-800 block">Área Temática:</strong>
                <span>Turismo, História Regional, Patrimônio Cultural e Inclusão Digital</span>
              </div>
              <div>
                <strong className="text-stone-800 block">Público-Alvo:</strong>
                <span>Comunidade local de Nísia Floresta, pesquisadores, educadores e turistas nacionais e internacionais</span>
              </div>
              <div className="pt-2 border-t border-stone-200 text-[11px] text-emerald-800 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Conteúdos baseados em fontes oficiais verificáveis</span>
              </div>
            </div>
          </div>

          {/* Pillars of the Project */}
          <div className="pt-8 border-t border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80">
              <div className="w-8 h-8 rounded-full bg-sky-800 text-white flex items-center justify-center font-bold text-xs mb-3">
                01
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                Rigor e Confiabilidade
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nenhuma atração, coordenada ou dado histórico é inventado. As informações que demandam confirmação de horário de visitação são claramente identificadas como tal.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80">
              <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-xs mb-3">
                02
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                Acessibilidade Universal
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Desenvolvido com respeito aos padrões WCAG: navegação por teclado, leitor de áudio para descrição dos locais, modo de alto contraste e fontes escaláveis.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80">
              <div className="w-8 h-8 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-xs mb-3">
                03
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                Preservação e Ecoturismo
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Cada atrativo contém recomendações explícitas de preservação ambiental e de respeito ao patrimônio arquitetônico e imaterial do Rio Grande do Norte.
              </p>
            </div>
          </div>
        </div>

        {/* Official References and Consulted Sources */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sky-800" />
            <span>Fontes Bibliográficas e Órgãos Oficiais Consultados</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700">
            <div className="space-y-3">
              <div className="font-semibold text-stone-900 border-b border-stone-100 pb-1">
                Órgãos e Instituições Públicas
              </div>
              <ul className="space-y-2 list-disc list-inside text-stone-600">
                <li>Prefeitura Municipal de Nísia Floresta — Secretaria de Turismo e Cultura.</li>
                <li>Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN / Superintendência RN).</li>
                <li>Instituto Brasileiro de Geografia e Estatística (IBGE Cidades — Nísia Floresta).</li>
                <li>Instituto de Desenvolvimento Sustentável e Meio Ambiente do RN (IDEMA — APA Bonfim-Guaraíras).</li>
                <li>Secretaria de Estado do Turismo do Rio Grande do Norte (SETUR/RN) e EMPROTUR.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-semibold text-stone-900 border-b border-stone-100 pb-1">
                Obras Bibliográficas e Acadêmicas
              </div>
              <ul className="space-y-2 list-disc list-inside text-stone-600">
                <li>DUARTE, Constância Lima. <em>Nísia Floresta: Vida e Obra</em>. São Paulo: Edusp, 1995.</li>
                <li>FLORESTA, Nísia. <em>Direitos das Mulheres e Injustiça dos Homens</em>. Recife, 1832.</li>
                <li>CASCUDO, Luís da Câmara. <em>Dicionário do Folclore Brasileiro</em> e <em>História do Rio Grande do Norte</em>.</li>
                <li>INSTITUTO HISTÓRICO E GEOGRÁFICO DO RIO GRANDE DO NORTE (IHGRN). Revistas e Anais de História Potiguar.</li>
                <li>ARQUIVO PÚBLICO DO ESTADO DO RN. Documentos do Segundo Reinado sobre a Vila Imperial de Papary.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500">
            <p>
              <strong>Créditos de Imagens:</strong> Registros fotográficos do acervo institucional do município de Nísia Floresta, arquivos de patrimônio histórico e fotografias artísticas geradas em alta fidelidade para fins de divulgação cultural e educacional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Info, ShieldCheck } from 'lucide-react';
import { CommunityContribution } from '../data/culture';

interface CommunityParticipationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitContribution: (contribution: CommunityContribution) => void;
}

export const CommunityParticipationModal: React.FC<CommunityParticipationModalProps> = ({
  isOpen,
  onClose,
  onSubmitContribution,
}) => {
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState<CommunityContribution['affiliation']>('morador');
  const [contributionType, setContributionType] = useState<CommunityContribution['contributionType']>('memoria_historica');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [locationReference, setLocationReference] = useState('');
  const [historicalSource, setHistoricalSource] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam trap

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  if (!isOpen) return null;

  const affiliationLabels: Record<CommunityContribution['affiliation'], string> = {
    morador: 'Morador de Nísia Floresta',
    turista: 'Turista / Visitante',
    pesquisador: 'Pesquisador Acadêmico',
    historiador: 'Historiador / Memorialista',
    estudante: 'Estudante',
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!authorName.trim()) errs.authorName = 'Por favor, informe seu nome completo.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Informe um endereço de e-mail válido.';
    if (!title.trim() || title.length < 5) errs.title = 'O título deve conter no mínimo 5 caracteres.';
    if (!description.trim() || description.length < 20) {
      errs.description = 'A descrição deve conter no mínimo 20 caracteres detalhando a informação.';
    }
    if (!locationReference.trim()) {
      errs.locationReference = 'Indique o bairro, comunidade ou ponto de referência no município.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap: bots fill invisible fields
    if (honeypot) {
      console.warn('Spam detected via honeypot.');
      onClose();
      return;
    }

    if (!validateForm()) return;

    const newContrib: CommunityContribution = {
      id: `contrib-${Date.now()}`,
      authorName: authorName.trim(),
      email: email.trim(),
      affiliation,
      affiliationLabel: affiliationLabels[affiliation],
      contributionType,
      title: title.trim(),
      description: description.trim(),
      locationReference: locationReference.trim(),
      historicalSource: historicalSource.trim() || undefined,
      dateSubmitted: 'Enviado hoje',
      status: 'em_analise',
    };

    onSubmitContribution(newContrib);
    setSubmittedSuccessfully(true);

    // Reset fields
    setTimeout(() => {
      setAuthorName('');
      setEmail('');
      setTitle('');
      setDescription('');
      setLocationReference('');
      setHistoricalSource('');
      setSubmittedSuccessfully(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden my-auto border border-stone-200 flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              Contribuição de Memória & Novos Atrativos
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Participe da construção coletiva da plataforma de Nísia Floresta
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-md transition-colors cursor-pointer"
            aria-label="Fechar formulário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {submittedSuccessfully ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h4 className="font-serif text-2xl font-bold text-stone-900">
                Contribuição Registrada com Sucesso!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Muito obrigado por colaborar com a memória e valorização de Nísia Floresta. Sua contribuição foi encaminhada para a comissão curatorial do projeto acadêmico e já consta em sua listagem como <strong>“Em análise curatorial”</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Notice */}
              <div className="bg-sky-50 border border-sky-200 rounded-md p-3 text-sky-900 text-xs flex items-start gap-2">
                <Info className="w-4 h-4 text-sky-800 shrink-0 mt-0.5" />
                <span>
                  Para garantir a confiabilidade histórica e científica da plataforma, todas as sugestões são checadas e revisadas antes de serem incorporadas ao catálogo principal.
                </span>
              </div>

              {/* Honeypot hidden input */}
              <input
                type="text"
                name="website_verification_code"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Author & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Ex: Maria Augusta dos Santos"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                  />
                  {errors.authorName && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.authorName}</span>
                  )}
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    E-mail ou Contato *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Affiliation & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Seu Vínculo com o Município *
                  </label>
                  <select
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value as any)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none cursor-pointer"
                  >
                    <option value="morador">Morador de Nísia Floresta</option>
                    <option value="turista">Turista / Visitante</option>
                    <option value="pesquisador">Pesquisador Acadêmico</option>
                    <option value="historiador">Historiador / Memorialista</option>
                    <option value="estudante">Estudante</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Tipo de Contribuição *
                  </label>
                  <select
                    value={contributionType}
                    onChange={(e) => setContributionType(e.target.value as any)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none cursor-pointer"
                  >
                    <option value="memoria_historica">Relato ou Memória Histórica</option>
                    <option value="novo_atrativo">Sugestão de Novo Atrativo Turístico</option>
                    <option value="registro_cultural">Manifestação Cultural / Saber Tradicional</option>
                    <option value="correcao">Correção ou Atualização de Informação</option>
                  </select>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Título da Contribuição *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Antiga fábrica de sabão ou festejos tradicionais de Alcaçuz"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
                {errors.title && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.title}</span>
                )}
              </div>

              {/* Location Reference */}
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Localização / Referência no Município *
                </label>
                <input
                  type="text"
                  value={locationReference}
                  onChange={(e) => setLocationReference(e.target.value)}
                  placeholder="Ex: Rua Almirante Barroso, próximo à Igreja Matriz ou Distrito de Alcaçuz"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
                {errors.locationReference && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.locationReference}</span>
                )}
              </div>

              {/* Detailed Description */}
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Descrição Detalhada e Histórico *
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descreva detalhadamente a história, o estado atual do local, tradições associadas e por que este elemento é relevante para Nísia Floresta..."
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
                {errors.description && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.description}</span>
                )}
              </div>

              {/* Bibliographic or Oral Source */}
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Fonte ou Origem da Informação (Opcional)
                </label>
                <input
                  type="text"
                  value={historicalSource}
                  onChange={(e) => setHistoricalSource(e.target.value)}
                  placeholder="Ex: Relato oral de meus avós, documento de cartório, livro de Luís da Câmara Cascudo..."
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-stone-300 text-stone-700 text-xs font-semibold rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-sky-800 hover:bg-sky-900 text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar para Revisão</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

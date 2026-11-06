export interface TimelineMilestone {
  year: string;
  title: string;
  category: 'nisia' | 'municipio' | 'patrimonio';
  categoryLabel: string;
  description: string;
  historicalContext: string;
  source: string;
}

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: 'c. 1700',
    title: 'Povoamento inicial e Capela de Nossa Senhora do Ó',
    category: 'municipio',
    categoryLabel: 'Origem do Município',
    description: 'Primeiros núcleos coloniais fixam-se às margens das lagoas de Papary, erguendo a capela primitiva dedicada a Nossa Senhora do Ó, que se tornaria o marco espiritual e urbano do povoado.',
    historicalContext: 'A abundância de água doce e a proximidade com o mar favoreceram o assentamento de lavradores, criadores e pescadores na bacia hidrográfica do Papary.',
    source: 'Livro do Tombo Paroquial / Instituto Histórico e Geográfico do RN'
  },
  {
    year: '1810',
    title: 'Nascimento de Dionísia Gonçalves Pinto (Nísia Floresta)',
    category: 'nisia',
    categoryLabel: 'Vida de Nísia Floresta',
    description: 'Em 12 de outubro de 1810, nasce no Sítio Floresta, no termo de Papary, a menina Dionísia Gonçalves Pinto, filha do advogado português Dionísio Gonçalves Pinto e da brasileira Antônia Clara Freire.',
    historicalContext: 'Dionísia cresceu em contato com a exuberante natureza das matas e lagoas de Papary, que mais tarde inspirariam seu nome literário: "Nísia Floresta Brasileira Augusta".',
    source: 'DUARTE, Constância Lima. Nísia Floresta: Vida e Obra (Edusp)'
  },
  {
    year: '1832',
    title: 'Publicação pioneira de "Direitos das Mulheres e Injustiça dos Homens"',
    category: 'nisia',
    categoryLabel: 'Marco Intelectual',
    description: 'Aos 22 anos, Nísia Floresta publica em Recife sua primeira obra, considerada o texto inaugural do feminismo no Brasil e na América do Sul, reivindicando igualdade de direitos e acesso irrestrito à educação para as mulheres.',
    historicalContext: 'O livro traduz e adapta com voz própria as ideias emancipatórias iluministas, tornando-se um manifesto revolucionário para o contexto do Brasil Imperial.',
    source: 'Acervo da Biblioteca Nacional / IHGRN'
  },
  {
    year: '1838',
    title: 'Fundação do Colégio Augusto no Rio de Janeiro',
    category: 'nisia',
    categoryLabel: 'Educação Feminina',
    description: 'Nísia Floresta funda no Rio de Janeiro uma instituição de ensino inovadora voltada exclusivamente para meninas, oferecendo pela primeira vez um currículo com matemática, ciências, gramática, línguas e história, rompendo com o ensino tradicional limitado a prendas domésticas.',
    historicalContext: 'A escola causou debates acalorados na corte imperial, recebendo elogios de grandes intelectuais e escândalo dos setores mais conservadores da época.',
    source: 'Jornal do Commercio (1838-1845) / Acervo Histórico do MEC'
  },
  {
    year: '1849',
    title: 'Publicação de "A Lágrima de um Caeté" e defesa indígena e abolicionista',
    category: 'nisia',
    categoryLabel: 'Engajamento Social',
    description: 'Nísia publica poema épico em defesa dos povos originários massacrados na colonização e manifesta-se contra a escravidão, consagrando-se como uma intelectual humanista muito à frente de seu tempo.',
    historicalContext: 'Foi uma das primeiras vozes literárias femininas a denunciar publicamente as violências contra indígenas e pessoas escravizadas no Brasil.',
    source: 'Revista do Instituto Histórico e Geográfico Brasileiro'
  },
  {
    year: '1852',
    title: 'Elevação à categoria de Vila Imperial de Papary',
    category: 'municipio',
    categoryLabel: 'Emancipação Política',
    description: 'Em 18 de março de 1852, a Lei Provincial nº 252 eleva a povoação de Papary à categoria de Vila Imperial, com câmara própria e autonomia administrativa em relação a São José de Mipibu.',
    historicalContext: 'O crescimento da produção de cana-de-açúcar nos engenhos locais conferiu peso econômico decisivo para a criação da vila.',
    source: 'Coleção de Leis e Decretos da Província do Rio Grande do Norte'
  },
  {
    year: '1877',
    title: 'Plantio do Baobá centenário na praça central',
    category: 'patrimonio',
    categoryLabel: 'Patrimônio Natural',
    description: 'É plantada a muda de Adansonia digitata trazida do continente africano no centro da vila de Papary, que com o passar das décadas se tornaria o monumental baobá que hoje domina o horizonte da cidade.',
    historicalContext: 'O baobá tornou-se ponto de acolhimento social, descanso à sombra e marco de identidade botânica da comunidade.',
    source: 'Registros da Prefeitura de Nísia Floresta e tradição memorialista'
  },
  {
    year: '1881',
    title: 'Inauguração da Estação Ferroviária de Papary',
    category: 'patrimonio',
    categoryLabel: 'Memória Ferroviária',
    description: 'A Estrada de Ferro Natal a Nova Cruz (Great Western) inaugura a Estação de Papary, integrando o município à malha ferroviária e acelerando o escoamento de açúcar e o trânsito de pessoas.',
    historicalContext: 'O apito das locomotivas a vapor marcou a modernização do transporte potiguar no fim do século XIX.',
    source: 'Arquivo Nacional / Guia Geral das Estradas de Ferro do Brasil'
  },
  {
    year: '1885',
    title: 'Falecimento de Nísia Floresta em Rouen, França',
    category: 'nisia',
    categoryLabel: 'Memória Internacional',
    description: 'Em 24 de abril de 1885, Nísia Floresta falece na cidade francesa de Rouen, aos 74 anos, sendo sepultada no cemitério de Bonsecours, após décadas de interlocução com a vanguarda intelectual europeia.',
    historicalContext: 'Nísia conviveu na Europa com pensadores como Auguste Comte e Alexandre Dumas, deixando publicados escritos em português, francês e italiano.',
    source: 'Certidão de óbito de Rouen / Documentação diplomática brasileira'
  },
  {
    year: '1948',
    title: 'De Papary para Nísia Floresta: a homenagem definitiva',
    category: 'municipio',
    categoryLabel: 'Identidade Municipal',
    description: 'Pelo Decreto-Lei Estadual nº 146 de 23 de dezembro de 1948, o município de Papary tem seu nome oficialmente alterado para Nísia Floresta, honrando a mais célebre filha de sua terra.',
    historicalContext: 'A mudança representou o reconhecimento estadual e nacional do papel pioneiro da escritora na cultura e na luta pelos direitos fundamentais.',
    source: 'Diário Oficial do Estado do Rio Grande do Norte (1948)'
  },
  {
    year: '1954',
    title: 'Repatriação solene e repouso eterno na terra natal',
    category: 'nisia',
    categoryLabel: 'Consagração Histórica',
    description: 'Os restos mortais de Nísia Floresta são transladados da França para o Brasil em uma grande comoção nacional, sendo depositados na cripta memorial de sua cidade natal em Nísia Floresta/RN.',
    historicalContext: 'A comitiva de repatriação mobilizou academias de letras, governantes e cidadãos que prestaram honras cívicas à pioneira das letras brasileiras.',
    source: 'IHGRN / Registros do Ministério das Relações Exteriores'
  }
];

export const NISIA_BIOGRAPHY = {
  fullName: 'Dionísia Gonçalves Pinto',
  penName: 'Nísia Floresta Brasileira Augusta',
  birthDate: '12 de outubro de 1810',
  birthPlace: 'Sítio Floresta, Papary (atual Nísia Floresta), Rio Grande do Norte',
  deathDate: '24 de abril de 1885 (74 anos)',
  deathPlace: 'Rouen, França (restos mortais transladados em 1954 para Nísia Floresta)',
  epitaph: 'Nascida em Papary, sepultada no solo que a viu nascer, sua voz ressoa pela liberdade e dignidade da mulher.',
  significance: 'Considerada a pioneira do feminismo e da pedagogia emancipatória no Brasil e na América Latina. Primeira mulher brasileira a publicar em jornais de grande circulação e a defender abertamente os direitos civis e políticos das mulheres, o fim da escravidão e a proteção aos povos indígenas.',
  mainWorks: [
    {
      title: 'Direitos das Mulheres e Injustiça dos Homens',
      year: '1832',
      details: 'Primeiro manifesto feminista publicado no Brasil, inspirado livremente na obra de Mary Wollstonecraft com adaptações à realidade social brasileira.'
    },
    {
      title: 'Conselhos a Minha Filha',
      year: '1842',
      details: 'Tratado pedagógico e moral escrito para a formação intelectual e ética de sua filha Lívia, que obteve múltiplas edições e traduções internacionais.'
    },
    {
      title: 'Fany ou Os Efeitos do Amor Conjugal',
      year: '1847',
      details: 'Novela moral e social discutindo as relações afetivas e o papel da mulher na família e na sociedade do século XIX.'
    },
    {
      title: 'A Lágrima de um Caeté',
      year: '1849',
      details: 'Poema lírico-épico que denuncia as atrocidades cometidas contra as populações indígenas durante a colonização do Nordeste.'
    },
    {
      title: 'Opúsculo Humanitário',
      year: '1853',
      details: 'Crítica profunda às práticas educacionais do Império do Brasil, condenando a mediocridade do ensino oferecido às meninas e a hipocrisia das elites.'
    },
    {
      title: 'Itinéraire d\'un Voyage en Allemagne',
      year: '1857',
      details: 'Relato de viagem publicado em francês durante suas estadas na Europa, analisando a cultura, arte e organização social germânica.'
    }
  ],
  quote: '“Por que há de a instrução ser privilégio exclusivo dos homens, se as mulheres possuem o mesmo espírito, a mesma inteligência e o mesmo nobre anseio pelo saber?”'
};

export interface CulturalTradition {
  id: string;
  title: string;
  category: 'artesanato' | 'festividades' | 'gastronomia' | 'oralidade';
  categoryLabel: string;
  shortDescription: string;
  details: string;
  significance: string;
  localities: string[];
  curiosity: string;
}

export const CULTURAL_TRADITIONS: CulturalTradition[] = [
  {
    id: 'rendas-de-bilro-e-labirinto',
    title: 'A Arte Secular das Rendeiras de Bilro e Labirinto',
    category: 'artesanato',
    categoryLabel: 'Patrimônio Imaterial',
    shortDescription: 'Tradição artesanal passada por gerações de mulheres em Alcaçuz e comunidades costeiras de Nísia Floresta.',
    details: 'A renda de bilro é produzida com o movimento ritmado de fusos de madeira sobre almofadas de palha ou algodão, enquanto o labirinto desfia e recombina tramas de tecido de linho para criar bordados minuciosos de rara beleza. As mestras artesãs preservam pontos coloniais de matriz portuguesa e reinventam padrões inspirados na flora e fauna da restinga potiguar.',
    significance: 'Representa a autonomia feminina, a soberania cultural das mulheres de comunidades rurais e quilombolas e a identidade expressiva da arte têxtil potiguar.',
    localities: ['Distrito de Alcaçuz', 'Centro', 'Camurupim'],
    curiosity: 'O som cadenciado das pequenas peças de madeira (bilros) batendo umas nas outras é carinhosamente chamado pelas rendeiras de "a música da almofada".'
  },
  {
    id: 'festa-padroeira-nossa-senhora-do-o',
    title: 'Festa da Padroeira Nossa Senhora do Ó (Dezembro)',
    category: 'festividades',
    categoryLabel: 'Festa Religiosa e Comunitária',
    shortDescription: 'Principal celebração religiosa e cívica do município, reunindo novenários, procissões, alvorada e quermesse secular.',
    details: 'Com culminância no dia 18 de dezembro, a festa mobiliza fiéis de todas as comunidades do município e das cidades vizinhas do Vale do Papary. As ruas do centro histórico são enfeitadas com bandeirolas, há queima de fogos tradicionais, missas solenes na Igreja Matriz, feira de comidas típicas na praça e reencontro de conterrâneos ausentes.',
    significance: 'Constitui o mais antigo elo de coesão comunitária e manifestação de fé popular da fundação do município desde os primeiros anos de 1700.',
    localities: ['Centro Histórico', 'Largo da Matriz', 'Praça do Baobá'],
    curiosity: 'Durante o novenário, famílias tradicionais assumem como madrinhas e padrinhos de noites específicas da festa, ofertando doces e bolos caseiros para arrecadar fundos para ações sociais da paróquia.'
  },
  {
    id: 'gastronomia-mar-e-lagoas',
    title: 'Gastronomia Potiguar: Sabores do Mar, da Lagoa e da Terra',
    category: 'gastronomia',
    categoryLabel: 'Culinária Tradicional',
    shortDescription: 'Culinária farta baseada em camarões da costa, peixes frescos grelhados, macaxeira na manteiga da terra e caldos locais.',
    details: 'Nísia Floresta destaca-se como polo de excelência gastronômica graças à abundância de camarões frescos cultivados com rigor ecológico e à pesca artesanal diária. Pratos como camarão ao molho de nata, peixe cioba frito com pirão de caldo de peixe, carne de sol desfiada na macaxeira cozida e a clássica ginga com tapioca nos quiosques praianos encantam o paladar dos visitantes.',
    significance: 'A culinária conecta o trabalho árduo dos pescadores, marisqueiras e agricultores familiares diretamente à mesa receptiva que acolhe os turistas.',
    localities: ['Lagoa de Arituba', 'Praia de Camurupim', 'Barreta', 'Búzios'],
    curiosity: 'Muitos restaurantes familiares à beira das lagoas mantêm receitas secretas de farofa de camarão seco transmitidas de bisavós para netos.'
  },
  {
    id: 'saberes-e-oralidade-pescadores',
    title: 'Memória Oral e Sabedoria dos Pescadores Artesanais',
    category: 'oralidade',
    categoryLabel: 'Tradição Oral e Memória',
    shortDescription: 'O saber tradicional de leitura das marés, ventos, estrelas e navegação em jangadas rústicas da costa sul.',
    details: 'Os mestres jangadeiros e pescadores de Barreta e Camurupim detêm um rico patrimônio imaterial transmitido pela oralidade: a compreensão dos ciclos lunares que regem as marés, a localização de cabeços de pedra submarinos, os cantos de puxada de rede na praia e as narrativas orais sobre assombrações e mistérios das lagoas profundas.',
    significance: 'Salvaguarda de saberes tradicionais ecologicamente adaptados que preservam a biodiversidade costeira há mais de um século.',
    localities: ['Barreta', 'Camurupim', 'Lagoa do Bonfim'],
    curiosity: 'Os pescadores mais antigos conseguem prever a aproximação de tempestades marítimas apenas observando a mudança de cor da arrebentação dos arrecifes ao amanhecer.'
  }
];

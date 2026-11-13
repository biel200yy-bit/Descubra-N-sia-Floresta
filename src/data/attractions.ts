export interface Attraction {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: 'lagoas' | 'patrimonio' | 'praias' | 'cultura' | 'museus';
  categoryLabel: string;
  summary: string;
  fullDescription: string;
  history: string;
  curiosities: string[];
  primaryImage: string;
  imageAlt: string;
  gallery: string[];
  location: {
    address: string;
    locality: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    googleMapsUrl: string;
    accessGuide: string;
  };
  visiting: {
    hours: string;
    fee: string;
    statusConfirmed: boolean;
    tips: string[];
  };
  preservation: {
    environmental: string;
    heritage: string;
  };
  references: string[];
  tags: string[];
  isFeatured: boolean;
  timeToSpend: string;
}

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'baoba-centenario',
    slug: 'baoba-de-nisia-floresta',
    name: 'Baobá de Nísia Floresta',
    subtitle: 'Monumento natural e botânico tombado pelo patrimônio estadual',
    category: 'patrimonio',
    categoryLabel: 'Patrimônio Histórico',
    summary: 'Majestoso baobá centenário com mais de 10 metros de circunferência, um dos maiores e mais emblemáticos exemplares da espécie no Brasil.',
    fullDescription: 'O Baobá de Nísia Floresta (Adansonia digitata) é um verdadeiro símbolo da cidade e um dos mais expressivos patrimônios botânicos do Rio Grande do Norte. Localizado na praça central da sede do município, o exemplar impressiona pelo tronco escultural de grande diâmetro e pela copa frondosa que acolhe moradores e visitantes.',
    history: 'Segundo registros históricos e tradição oral documentada por memorialistas, a muda foi trazida do continente africano e plantada em 1877 no então povoado de Papary. O baobá testemunhou as grandes transformações do município, desde a época da ferrovia imperial até a elevação de Nísia Floresta como polo histórico e cultural. A árvore foi declarada patrimônio natural e imune a corte pela legislação ambiental e de preservação.',
    curiosities: [
      'O baobá é conhecido na cultura africana como a "Árvore da Vida", capaz de armazenar milhares de litros de água em seu tronco espesso.',
      'Diz a lenda popular local que quem abraça o tronco do baobá e faz um pedido renova as energias e fortalece seus laços com a sabedoria ancestral.',
      'O exemplar floresce anualmente com flores brancas pendulares que desabrocham no entardecer e atraem polinizadores noturnos.'
    ],
    primaryImage: '/assets/aistudio/image_b43c8050.png',
    imageAlt: 'Baobá Centenário de Nísia Floresta plantado em 1877 com placa indicativa e grade de proteção na praça central',
    gallery: [
      '/assets/aistudio/image_b43c8050.png'
    ],
    location: {
      address: 'Praça Coronel José de Araújo, Centro Histórico',
      locality: 'Centro, Nísia Floresta - RN',
      coordinates: { lat: -6.091389, lng: -35.209167 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.091389,-35.209167',
      accessGuide: 'Acesso asfaltado pela RN-063, a cerca de 40 km de Natal. O baobá situa-se no centro da cidade, próximo à Igreja Matriz.'
    },
    visiting: {
      hours: 'Espaço público ao ar livre, aberto 24 horas',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Excelente parada fotográfica em qualquer hora do dia.',
        'Visite no final da tarde para contemplar a sombra acolhedora e conversar com os moradores que se reúnem na praça.'
      ]
    },
    preservation: {
      environmental: 'Não suba nos galhos, evite pisoteamento excessivo na raiz principal e não descarte resíduos na base da árvore.',
      heritage: 'Não risque nem entalhe marcas na casca do tronco. Preserve este patrimônio vivo bicentenário para as futuras gerações.'
    },
    references: [
      'Prefeitura Municipal de Nísia Floresta - Secretaria de Turismo e Cultura.',
      'IDEMA/RN - Levantamento de Patrimônio Florístico e Monumentos Naturais.',
      'CASCUDO, Luís da Câmara. Dicionário do Folclore Brasileiro.'
    ],
    tags: ['Árvore sagrada', 'Centro histórico', 'Tombamento', 'Botânica', 'Papary'],
    isFeatured: true,
    timeToSpend: '30 a 45 minutos'
  },
  {
    id: 'lagoa-de-arituba',
    slug: 'lagoa-de-arituba',
    name: 'Lagoa de Arituba',
    subtitle: 'Águas calmas, límpidas e lazer para toda a família no litoral sul',
    category: 'lagoas',
    categoryLabel: 'Lagoas e Áreas de Lazer',
    summary: 'Uma das lagoas mais procuradas do estado, famosa pelas águas doces e mornas, estrutura de quiosques gastronômicos e passeios de caiaque e pedalinho.',
    fullDescription: 'A Lagoa de Arituba é um dos principais cartões-postais de Nísia Floresta. Com águas transparentes, calmas e em tom verde-azulado, oferece um refúgio de água doce a poucas centenas de metros do mar de Camurupim. Conta com estrutura receptiva tradicional com restaurantes que servem o tradicional camarão e peixe fresco da costa potiguar.',
    history: 'A lagoa integra o rico sistema hídrico da restinga potiguar, formado por nascentes e lençóis freáticos que desaguam em lagoas costeiras. Historicamente, serviu como ponto de encontro e subsistência de pescadores artesanais locais antes de consolidar-se como polo turístico ecossustentável na segunda metade do século XX.',
    curiosities: [
      'Mesmo em maré cheia no mar próximo, a lagoa mantém seu nível estável de água doce e morna.',
      'É ponto preferido de famílias com crianças devido à pouca profundidade nas margens de areia alva.',
      'Abriga atividades náuticas não poluentes como stand-up paddle, tirolesa aquática e pedalinhos em formato de cisne.'
    ],
    primaryImage: '/assets/aistudio/image_13008830.png',
    imageAlt: 'Vista aérea panorâmica da Lagoa de Arituba em Nísia Floresta com orla de quiosques, pedalinhos e águas azuis',
    gallery: [
      '/assets/aistudio/image_13008830.png'
    ],
    location: {
      address: 'Estrada da Lagoa de Arituba, próximo à praia de Camurupim',
      locality: 'Litoral de Nísia Floresta - RN',
      coordinates: { lat: -6.046111, lng: -35.114722 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.046111,-35.114722',
      accessGuide: 'Acesso pela Rota do Sol (RN-063), logo após a praia de Tabatinga no sentido sul, com sinalização turística clara.'
    },
    visiting: {
      hours: 'Restaurantes e serviços funcionam diariamente das 08h às 17h',
      fee: 'Acesso público gratuito à lagoa; serviços e aluguel de equipamentos são pagos aos operadores locais',
      statusConfirmed: true,
      tips: [
        'Ideal para almoço à beira da água experimentando a gastronomia local.',
        'Leve protetor solar biodegradável para proteger o ecossistema lacustre.'
      ]
    },
    preservation: {
      environmental: 'Recolha todos os resíduos plásticos e evite o uso de produtos químicos agressivos na água.',
      heritage: 'Respeite as áreas delimitadas de vegetação nativa de restinga que circundam a lagoa.'
    },
    references: [
      'SEMTUR Nísia Floresta - Guia de Atrativos Naturais.',
      'Secretaria de Estado do Turismo do Rio Grande do Norte (SETUR/RN).'
    ],
    tags: ['Água doce', 'Lazer em família', 'Gastronomia', 'Caiaque', 'Restinga'],
    isFeatured: true,
    timeToSpend: '2 a 4 horas'
  },
  {
    id: 'praia-de-camurupim',
    slug: 'praia-de-camurupim',
    name: 'Praia de Camurupim e Pedra Oca',
    subtitle: 'Arrecifes de arenito, piscinas naturais oceânicas e a gruta marinha',
    category: 'praias',
    categoryLabel: 'Praias e Paisagens Naturais',
    summary: 'Praia famosa pelos extensos recifes de arenito que formam piscinas calmas de água do mar e pela Pedra Oca, caverna esculpida pela ação das marés.',
    fullDescription: 'A Praia de Camurupim é um dos litorais mais singulares do Nordeste brasileiro. A presença contínua de arrecifes paralelos à praia funciona como um quebra-mar natural, criando piscinas mornas de água salgada cristalina perfeitas para banho seguro em família. Na maré baixa, é possível caminhar até os arrecifes e adentrar a Pedra Oca, uma gruta natural esculpida pela força das ondas.',
    history: 'A formação rochosa de arenito costeiro em Camurupim foi documentada por viajantes e naturalistas desde o século XIX. O nome "Camurupim" deriva do peixe camurupim (ou tarpão), abundante nas águas da região e fundamental para os primeiros núcleos de pescadores da costa potiguar.',
    curiosities: [
      'A gruta da "Pedra Oca" só fica acessível durante a maré baixa (maré inferior a 0.4m), permitindo que os visitantes fiquem sob a abóbada de pedra natural.',
      'Durante a maré alta, as ondas quebram com força na barreira exterior dos arrecifes gerando o efeito "blowhole" ou jatos de spray marinho.',
      'As piscinas formadas são tão calmas que parecem uma imensa lagoa de água salina aquecida pelo sol tropical.'
    ],
    primaryImage: '/assets/aistudio/image_ff274b7f.png',
    imageAlt: 'Vista aérea panorâmica da orla e arrecifes de arenito com piscinas naturais na Praia de Camurupim',
    gallery: [
      '/assets/aistudio/image_ff274b7f.png'
    ],
    location: {
      address: 'Avenida Beira Mar, Praia de Camurupim',
      locality: 'Camurupim, Nísia Floresta - RN',
      coordinates: { lat: -6.041389, lng: -35.107222 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.041389,-35.107222',
      accessGuide: 'Acesso fácil pela RN-063 (Rota do Sol), a cerca de 30 km ao sul de Ponta Negra, com acesso pavimentado até a orla.'
    },
    visiting: {
      hours: 'Acesso livre 24 horas; barracas funcionam entre 08h30 e 17h00',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Consulte a Tábua de Marés da Marinha do Brasil antes do passeio para aproveitar a maré baixa na Pedra Oca.',
        'Use calçados apropriados para caminhar sobre pedras escorregadias.'
      ]
    },
    preservation: {
      environmental: 'Não retire ouriços, conchas, corais ou algas marinhas fixadas nos arrecifes.',
      heritage: 'Não descarte garrafas de vidro ou latinhas na areia ou fendas de rochas.'
    },
    references: [
      'Empresa Potiguar de Promoção Turística (EMPROTUR).',
      'Atlas Geológico e Geomorfológico Costeiro do RN.'
    ],
    tags: ['Piscinas naturais', 'Pedra Oca', 'Arrecifes', 'Banho tranquilo', 'Litoral sul'],
    isFeatured: true,
    timeToSpend: 'Metade do dia (3 a 5 horas)'
  },
  {
    id: 'igreja-matriz-nossa-senhora-do-o',
    slug: 'igreja-matriz-de-nossa-senhora-do-o',
    name: 'Igreja Matriz de Nossa Senhora do Ó',
    subtitle: 'Marco de fé, arquitetura colonial e centro fundador do antigo Papary',
    category: 'patrimonio',
    categoryLabel: 'Patrimônio Histórico',
    summary: 'Templo histórico do século XVIII/XIX de feição barroca com duas torres sineiras, núcleo espiritual e berço do nascimento do município.',
    fullDescription: 'A Igreja Matriz de Nossa Senhora do Ó é o coração histórico da sede de Nísia Floresta. O templo apresenta volumetria harmoniosa da arquitetura religiosa colonial luso-brasileira, com fachada sóbria ladeada por duas torres sineiras brancas com remates piramidais. No interior, guarda imagens sacras antigas e a devoção secular do povo potiguar à Senhora da Expectação (Nossa Senhora do Ó).',
    history: 'A paróquia original remonta ao início do século XVIII, quando foi erguida uma capela em devoção a Nossa Senhora do Ó no aldeamento de Papary. Em 1833, a freguesia foi oficialmente instituída. O templo atual é fruto de sucessivas reformas e ampliações no século XIX, tendo sido palco de batismos célebres da história potiguar, inclusive de personalidades ligadas à família de Dionísia Gonçalves Pinto.',
    curiosities: [
      'O título "Nossa Senhora do Ó" refere-se às antífonas maiores do Advento que começam sempre com a exclamação "Ó" (Ó Sabedoria, Ó Adonai, Ó Esperança).',
      'A festa da padroeira, celebrada anualmente em 18 de dezembro, mobiliza procissões, novenas e cortejos tradicionais por toda a cidade.',
      'O sino de bronze original ecoava pelas margens das lagoas anunciando reuniões comunitárias e festejos cívicos.'
    ],
    primaryImage: '/assets/aistudio/image_559a04ba.png',
    imageAlt: 'Fachada oficial restaurada da Igreja Matriz de Nossa Senhora do Ó em Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_559a04ba.png'
    ],
    location: {
      address: 'Largo da Matriz, Centro Histórico',
      locality: 'Centro, Nísia Floresta - RN',
      coordinates: { lat: -6.091111, lng: -35.208889 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.091111,-35.208889',
      accessGuide: 'Localizada no centro urbano de Nísia Floresta, a poucos passos da praça do Baobá.'
    },
    visiting: {
      hours: 'Terça a Domingo para visitação contemplativa e missas regulares',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Respeite o silêncio e as celebrações religiosas durante a visita.',
        'Observe os detalhes da talha e dos altares coloniais internos.'
      ]
    },
    preservation: {
      environmental: 'Mantenha as imediações da praça e do átrio da igreja livres de entulhos.',
      heritage: 'Não use flash sobre pinturas ou imagens sacras seculares com tintas históricas sensíveis.'
    },
    references: [
      'Arquidiocese de Natal - Livro do Tombo da Paróquia de Nossa Senhora do Ó.',
      'Fundação José Augusto - Inventário de Monumentos Sacros do Rio Grande do Norte.'
    ],
    tags: ['Arquitetura sacra', 'Barroco', 'Papary', 'Patrimônio colonial', 'Fé'],
    isFeatured: true,
    timeToSpend: '45 minutos a 1 hora'
  },
  {
    id: 'estacao-de-papary',
    slug: 'estacao-ferroviaria-de-papary',
    name: 'Estação Ferroviária de Papary',
    subtitle: 'Monumento da memória ferroviária potiguar do século XIX',
    category: 'patrimonio',
    categoryLabel: 'Patrimônio Histórico',
    summary: 'Construída em 1881 na antiga linha da Great Western, marco do transporte ferroviário e hoje espaço de salvaguarda cultural e artesanato.',
    fullDescription: 'A Estação Ferroviária de Papary é um expressivo patrimônio da arquitetura ferroviária inglesa no Nordeste. Inaugurada durante o Segundo Reinado, a estação conectava o município de Papary à capital Natal e às regiões produtoras de cana-de-açúcar de Nova Cruz e da Paraíba. O edifício de alvenaria com beirais em madeira trabalhada representa o apogeu econômico da era do vapor.',
    history: 'Inaugurada em 1881 pela Estrada de Ferro Natal a Nova Cruz (posteriormente arrendada pela britânica The Great Western of Brazil Railway Co.), a estação transformou Papary em importante entroncamento comercial de cana, algodão e passageiros. O transporte ferroviário foi desativado na segunda metade do século XX, mas a estrutura física foi restaurada como centro de artesanato e memória.',
    curiosities: [
      'O apito do trem da Great Western era o relógio de referência para os operários e estudantes da região.',
      'A arquitetura segue o padrão funcional britânico com trilhos de ferro fundido originais que ainda afloram em trechos do solo.',
      'Hoje abriga feiras de produtos artesanais e eventos comunitários valorizando os saberes locais.'
    ],
    primaryImage: '/assets/aistudio/image_f52856f9.png',
    imageAlt: 'Fachada histórica restaurada da Estação Ferroviária de Papary (1881) em Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_f52856f9.png'
    ],
    location: {
      address: 'Rua da Estação, Centro',
      locality: 'Nísia Floresta - RN',
      coordinates: { lat: -6.089444, lng: -35.211944 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.089444,-35.211944',
      accessGuide: 'Acesso a 500 metros do centro histórico, com sinalização local.'
    },
    visiting: {
      hours: 'Segunda a sexta das 08h às 14h; horário sujeito a confirmação aos finais de semana',
      fee: 'Gratuito',
      statusConfirmed: false,
      tips: [
        'Aproveite para conferir peças do artesanato tradicional de renda e cerâmica.',
        'Confirme a programação cultural junto à Secretaria Municipal de Turismo.'
      ]
    },
    preservation: {
      environmental: 'Conserve o pátio ferroviário e a vegetação ao redor do leito histórico.',
      heritage: 'Proteja os detalhes de ferro fundido e madeira trabalhada contra vandalismo.'
    },
    references: [
      'Estações Ferroviárias do Brasil - Linha Natal a Nova Cruz.',
      'Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN).'
    ],
    tags: ['Ferrovia', 'Great Western', 'Século XIX', 'Patrimônio edificado', 'Trilhos'],
    isFeatured: false,
    timeToSpend: '45 minutos'
  },
  {
    id: 'museu-nisia-floresta',
    slug: 'museu-e-memorial-nisia-floresta',
    name: 'Museu e Memorial Nísia Floresta',
    subtitle: 'Espaço de memória dedicado à pioneira educadora e escritora feminista',
    category: 'museus',
    categoryLabel: 'Museus e Espaços de Memória',
    summary: 'Acervo dedicado à vida e obra de Dionísia Gonçalves Pinto (Nísia Floresta), pioneira dos direitos da mulher e da educação feminina no Brasil.',
    fullDescription: 'O Museu e Memorial Nísia Floresta é um templo cívico e cultural dedicado à memória de Dionísia Gonçalves Pinto (1810–1885). O espaço reúne reproduções de manuscritos, primeiras edições de seus livros, painéis explicativos sobre sua trajetória intelectual no Brasil e na Europa, além de guardar a cripta com seus restos mortais, transladados da França para sua cidade natal.',
    history: 'Inaugurado para perpetuar o pioneirismo de Nísia Floresta, que em 1832 publicou "Direitos das Mulheres e Injustiça dos Homens" — considerado o texto fundador do feminismo brasileiro e sul-americano. Seus restos mortais repousaram na França até 1954, quando foram repatriados em solene cortejo e depositados no memorial erguido em sua homenagem na terra em que nasceu.',
    curiosities: [
      'Nísia Floresta foi a primeira mulher a fundar um colégio no Rio de Janeiro que oferecia às jovens a mesma grade curricular que os rapazes (matemática, ciências, línguas, história).',
      'Foi amiga pessoal e interlocutora intelectual de figuras ilustres como Auguste Comte e Alexandre Dumas.',
      'Adotou o pseudônimo "Nísia Floresta Brasileira Augusta" para afirmar com orgulho suas raízes norte-rio-grandenses e nacionais perante o mundo.'
    ],
    primaryImage: '/assets/aistudio/image_cd4e5206.png',
    imageAlt: 'Fachada histórica amarela do Museu e Memorial Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_cd4e5206.png'
    ],
    location: {
      address: 'Rua Almirante Barroso, Centro',
      locality: 'Nísia Floresta - RN',
      coordinates: { lat: -6.090833, lng: -35.207778 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.090833,-35.207778',
      accessGuide: 'Localizado no centro histórico a cerca de 150 metros da Praça do Baobá.'
    },
    visiting: {
      hours: 'Segunda a sexta das 08h às 14h; visitas guiadas escolares mediante agendamento prévio',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Excelente para estudantes, historiadores e entusiastas do pensamento social brasileiro.',
        'Reserve ao menos uma hora para ler com calma os trechos dos escritos originais da autora.'
      ]
    },
    preservation: {
      environmental: 'Mantenha o silêncio e o respeito no espaço solene do memorial e cripta.',
      heritage: 'Não toque nas vitrines de proteção de documentos e edições fac-similadas.'
    },
    references: [
      'DUARTE, Constância Lima. Nísia Floresta: Vida e Obra. São Paulo: Edusp, 1995.',
      'Prefeitura Municipal de Nísia Floresta - Coordenação de Museus e Patrimônio.',
      'Instituto Histórico e Geográfico do Rio Grande do Norte (IHGRN).'
    ],
    tags: ['Feminismo', 'Literatura', 'Educação', 'História potiguar', 'Memória'],
    isFeatured: true,
    timeToSpend: '1 a 1h30'
  },
  {
    id: 'lagoa-do-bonfim',
    slug: 'lagoa-do-bonfim',
    name: 'Lagoa do Bonfim',
    subtitle: 'A maior lâmina de água doce do estado, polo de esportes náuticos e ecoturismo',
    category: 'lagoas',
    categoryLabel: 'Lagoas e Áreas de Lazer',
    summary: 'Gigantesca lagoa de águas azuis profundas que integra a APA Bonfim-Guaraíras, muito procurada para velejo, windsurf, caiaque e pesca esportiva.',
    fullDescription: 'A Lagoa do Bonfim é a maior lagoa natural do Rio Grande do Norte e a principal componente do complexo hídrico do Litoral Oriental. Situada dentro da Área de Proteção Ambiental (APA) Bonfim-Guaraíras, estende-se por quilômetros de margens recortadas por pontas de restinga, bosques nativos e pequenas praias de água doce. É o refúgio perfeito para esportes de vento e contemplação ecológica.',
    history: 'A bacia da Lagoa do Bonfim desempenhou papel vital desde o período pré-colonial, quando comunidades indígenas potiguaras ocupavam suas margens ricas em recursos pesqueiros e água potável. No século XX, tornou-se reduto pioneiro do ecoturismo potiguar e da preservação dos mananciais que abastecem a região metropolitana.',
    curiosities: [
      'A lâmina d\'água da Lagoa do Bonfim chega a abranger mais de 10 milhões de metros cúbicos em estações chuvosas.',
      'É classificada como um reservatório hidrológico natural estratégico de água doce para todo o leste potiguar.',
      'Sua vastidão cria ondas suaves quando os ventos alísios do Atlântico sopram com intensidade.'
    ],
    primaryImage: '/assets/aistudio/image_e5264877.png',
    imageAlt: 'Vista aérea da imensa lâmina de água azul da Lagoa do Bonfim na APA Bonfim-Guaraíras',
    gallery: [
      '/assets/aistudio/image_e5264877.png'
    ],
    location: {
      address: 'APA Bonfim-Guaraíras, Estrada de Acesso ao Bonfim',
      locality: 'Zona Rural / Bonfim, Nísia Floresta - RN',
      coordinates: { lat: -6.044722, lng: -35.234444 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.044722,-35.234444',
      accessGuide: 'Acesso pela BR-101 e ramal da RN-063 no trecho que liga Parnamirim a Nísia Floresta.'
    },
    visiting: {
      hours: 'Acesso aberto durante o dia; clubes náuticos e marinas operam com horários próprios',
      fee: 'Acesso livre às margens públicas; taxas de marina e locação dependem de cada operador',
      statusConfirmed: true,
      tips: [
        'Excelente para a prática de windsurf, kitesurf e caiaque nas manhãs ensolaradas.',
        'Respeite a velocidade máxima para embarcações a motor em áreas com banhistas.'
      ]
    },
    preservation: {
      environmental: 'Localizada em APA estadual: é terminantemente proibido o descarte de óleos, plásticos e fogueiras na mata ciliar.',
      heritage: 'Ajude os brigadistas voluntários na fiscalização contra queimadas na restinga.'
    },
    references: [
      'IDEMA/RN - Plano de Manejo da APA Bonfim-Guaraíras.',
      'IGARN - Instituto de Gestão das Águas do Rio Grande do Norte.'
    ],
    tags: ['APA', 'Esportes náuticos', 'Ecoturismo', 'Maior lagoa', 'Recurso hídrico'],
    isFeatured: true,
    timeToSpend: '3 a 6 horas'
  },
  {
    id: 'casa-de-pedra-ruinas',
    slug: 'casa-de-pedra-e-ruinas-historicas',
    name: 'Casa de Pedra e Ruínas dos Antigos Engenhos',
    subtitle: 'Vestígios arqueológicos da era colonial e do ciclo açucareiro potiguar',
    category: 'patrimonio',
    categoryLabel: 'Patrimônio Histórico',
    summary: 'Construção histórica de alvenaria em pedra bruta e ruínas de antigas estruturas produtivas da época da colônia e do império.',
    fullDescription: 'A lendária Casa de Pedra e os vestígios dos antigos engenhos de açúcar de Nísia Floresta constituem um precioso sítio de arqueologia histórica no município. As espessas paredes erguidas com pedras irregulares unidas por argamassa de cal e óleo de baleia testemunham as técnicas construtivas dos séculos XVII e XVIII nas propriedades rurais do Vale do Papary.',
    history: 'A bacia dos rios e lagoas de Papary abrigou engenhos canavieiros pioneiros como o Engenho Papary e o Olho d\'Água. Esses engenhos moldaram as relações sociais, a presença de mão de obra escravizada indígena e africana, e a formação das elites agrárias provinciais que deram origem às primeiras povoações.',
    curiosities: [
      'A espessura de algumas paredes da Casa de Pedra ultrapassa 70 centímetros, técnica usada para garantir conforto térmico e segurança.',
      'Histórias locais alimentam lendas sobre passagens subterrâneas e tesouros ocultos durante o período das invasões holandesas no Nordeste.',
      'O local é objeto de estudos acadêmicos sobre a tecnologia construtiva vernacular do período colonial potiguar.'
    ],
    primaryImage: '/assets/aistudio/image_ba92c52b.png',
    imageAlt: 'Vista aérea das ruínas históricas da Casa de Pedra em Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_ba92c52b.png'
    ],
    location: {
      address: 'Região dos antigos engenhos, Zona Rural de Papary',
      locality: 'Nísia Floresta - RN',
      coordinates: { lat: -6.0725, lng: -35.218611 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.0725,-35.218611',
      accessGuide: 'Acesso por estradas vicinais de terra a partir da sede do município. Recomenda-se guia local.'
    },
    visiting: {
      hours: 'Acesso com acompanhamento de moradores e guias; visitação externa em luz diurna',
      fee: 'Gratuito (atenção à preservação e propriedades privadas vizinhas)',
      statusConfirmed: false,
      tips: [
        'Consulte guias credenciados ou condutores locais para melhor compreensão das ruínas.',
        'Use calçados fechados e repelente para caminhadas em área de vegetação campestre.'
      ]
    },
    preservation: {
      environmental: 'Não remova pedras nem perturbe a fauna que nidifica nas fendas da estrutura.',
      heritage: 'Não suba sobre as ruínas, pois as argamassas históricas são frágeis e suscetíveis a desmoronamento.'
    },
    references: [
      'MORAES, Carlos Roberto. Engenhos e Vilas da Capitania do Rio Grande do Norte.',
      'Acervo Arqueológico e Histórico do IHGRN.'
    ],
    tags: ['Arqueologia', 'Engenhos', 'Ciclo da cana', 'Pedra bruta', 'Memória colonial'],
    isFeatured: false,
    timeToSpend: '1 a 2 horas'
  },
  {
    id: 'praia-de-tabatinga',
    slug: 'praia-de-tabatinga-e-mirante-dos-golfinhos',
    name: 'Praia de Tabatinga e Mirante dos Golfinhos',
    subtitle: 'Falésias imponentes e contemplação de golfinhos brincando na arrebentação',
    category: 'praias',
    categoryLabel: 'Praias e Paisagens Naturais',
    summary: 'Famosa pelo Mirante dos Golfinhos situado no alto das falésias avermelhadas, de onde é possível observar botos e golfinhos nadando diariamente bem perto da praia.',
    fullDescription: 'A Praia de Tabatinga impressiona pela dramaticidade de seu relevo, onde falésias vivas em tons de ocre e vermelho encontram as águas esmeraldas do oceano atlântico. No alto do morro da costa encontra-se o famoso Mirante dos Golfinhos, um dos pontos mais procurados do RN para a observação não invasiva da vida marinha costeira.',
    history: 'A palavra Tabatinga tem origem indígena e designa a argila branca ou barro fino encontrado nos paredões costeiros. Por gerações, o local foi posto de vigia dos pescadores nativos, que lá no alto identificavam os cardumes de peixes e a chegada das jangadas tradicionais.',
    curiosities: [
      'Os golfinhos da espécie Sotalia guianensis (conhecidos popularmente como boto-cinza) vêm se alimentar nas águas abrigadas e brincar na ressaca da arrebentação, principalmente pela manhã.',
      'O mirante natural proporciona uma vista panorâmica de quase 180 graus da linha da costa sul potiguar.',
      'A praia combina uma enseada mansa no trecho sul protegida por arrecifes com mar aberto excelente para o surfe no trecho norte.'
    ],
    primaryImage: '/assets/aistudio/image_d175f08f.png',
    imageAlt: 'Falésias avermelhadas e mar límpido da Praia de Tabatinga em Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_d175f08f.png'
    ],
    location: {
      address: 'Alto das Falésias, Mirante de Tabatinga',
      locality: 'Tabatinga, Nísia Floresta - RN',
      coordinates: { lat: -6.060833, lng: -35.101111 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.060833,-35.101111',
      accessGuide: 'Acesso pela Rota do Sol (RN-063), entre Búzios e Camurupim, com estacionamento sinalizado junto ao mirante.'
    },
    visiting: {
      hours: 'Aberto 24 horas; melhor horário para observação de golfinhos: das 07h00 às 10h30',
      fee: 'Acesso livre e gratuito',
      statusConfirmed: true,
      tips: [
        'Leve binóculos ou câmera com zoom para registrar os saltos dos botos no mar.',
        'Mantenha-se atrás das muretas de segurança no topo das falésias para evitar riscos de queda.'
      ]
    },
    preservation: {
      environmental: 'As falésias sofrem erosão marinha natural contínua: não escave nem desmonte as bordas de terra.',
      heritage: 'Não alimente os animais silvestres marinhos e não jogue lixo das encostas.'
    },
    references: [
      'Projeto Cetáceos da Costa Branca / UERN.',
      'Prefeitura de Nísia Floresta - Secretaria Municipal de Turismo.'
    ],
    tags: ['Golfinhos', 'Falésias', 'Mirante', 'Ecoturismo', 'Fotografia'],
    isFeatured: true,
    timeToSpend: '1 a 2 horas'
  },
  {
    id: 'lagoa-de-alcacuz',
    slug: 'lagoa-de-alcacuz',
    name: 'Lagoa de Alcaçuz',
    subtitle: 'Refúgio de águas límpidas cercado de dunas e saberes das rendeiras',
    category: 'lagoas',
    categoryLabel: 'Lagoas e Áreas de Lazer',
    summary: 'Lagoa serena rodeada por dunas brancas de areia fina e vegetação de restinga, próxima à tradicional comunidade das artesãs da renda de bilro e labirinto.',
    fullDescription: 'A Lagoa de Alcaçuz destaca-se pela rusticidade e serenidade intactas. Longe da agitação urbana, suas águas calmas e límpidas descansam emolduradas por dunas e vegetação nativa do litoral potiguar. Além do espetáculo ecológico, a região é berço de uma das mais importantes tradições culturais imateriais do estado: a produção de rendas de bilro e labirinto pelas mestras artesãs da comunidade quilombola e tradicional de Alcaçuz.',
    history: 'A comunidade de Alcaçuz guarda fortes laços com a ancestralidade afrodescendente e indígena potiguar. A lagoa sempre foi fonte de sustento, lavagem de roupas comunitária e inspiração para os cantos e contos que embalam o tecer das almofadas de bilro há mais de dois séculos.',
    curiosities: [
      'O tom da água varia entre verde-claro e azul conforme a inclinação da luz solar ao longo do dia.',
      'O acesso costuma ser feito por passeios ecológicos de bugue ou caminhadas orientadas por trilhas na areia.',
      'As rendeiras locais produzem toalhas, caminhos de mesa e peças de vestuário que são referência nacional de bordado tradicional.'
    ],
    primaryImage: '/assets/aistudio/image_f59b1861.png',
    imageAlt: 'Vista aérea panorâmica da Lagoa de Alcaçuz cercada por dunas e orla de areia branca',
    gallery: [
      '/assets/aistudio/image_f59b1861.png'
    ],
    location: {
      address: 'Distrito de Alcaçuz, Região das Dunas',
      locality: 'Alcaçuz, Nísia Floresta - RN',
      coordinates: { lat: -6.008889, lng: -35.186667 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.008889,-35.186667',
      accessGuide: 'Acesso por vias secundárias a partir da RN-063 ou através de trilhas de veículos 4x4 e bugues cadastrados.'
    },
    visiting: {
      hours: 'Acesso durante o dia até o pôr do sol',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Excelente para quem busca tranquilidade e silêncio longe de caixas de som.',
        'Visite a associação das rendeiras de Alcaçuz para adquirir artesanato autêntico diretamente de quem produz.'
      ]
    },
    preservation: {
      environmental: 'Transite somente em trilhas autorizadas para não degradar a vegetação fixadora das dunas móveis.',
      heritage: 'Valorize o patrimônio imaterial conversando e remunerando dignamente o trabalho das artesãs locais.'
    },
    references: [
      'Associação das Rendeiras de Alcaçuz.',
      'Inventário do Patrimônio Cultural Imaterial Potiguar - IPHAN / FJA.'
    ],
    tags: ['Dunas', 'Rendeiras', 'Alcaçuz', 'Tranquilidade', 'Cultura tradicional'],
    isFeatured: false,
    timeToSpend: '2 a 3 horas'
  },
  {
    id: 'praia-de-barreta',
    slug: 'praia-de-barreta-e-ducha',
    name: 'Praia de Barreta e Ducha Natural',
    subtitle: 'Vila tradicional de pescadores, quebra-mares de pedra e o jato d\'água marinho',
    category: 'praias',
    categoryLabel: 'Praias e Paisagens Naturais',
    summary: 'A praia mais ao sul de Nísia Floresta, famosa pelo clima acolhedor de vila pesqueira, piscinas de maré e o fenômeno hidrodinâmico da Ducha de Barreta.',
    fullDescription: 'A Praia de Barreta marca o limite sul do litoral de Nísia Floresta com o município vizinho de Tibau do Sul. Caracteriza-se pela rica atmosfera de vila pesqueira tradicional, onde jangadas ancoradas e redes ao sol compõem o cenário típico potiguar. Seus arrecifes recortados oferecem um atrativo natural muito procurado: a "Ducha de Barreta", uma abertura rochosa onde a força da onda do mar sobe e espirra como um chuveiro revigorante.',
    history: 'Barreta foi um dos mais antigos entrepostos de pesca costeira do estado. Famílias de jangadeiros mantêm vivos conhecimentos tradicionais sobre a leitura dos ventos, a movimentação dos cardumes de tainha e a navegação rústica por estrelas e marcos geográficos da costa.',
    curiosities: [
      'A Ducha de Barreta é formada por uma falha geológica na barreira de arenito que canaliza a pressão da onda como um esguicho natural.',
      'Na maré baixa, surgem piscininhas naturais com dezenas de pequenos peixes coloridos que encantam os banhistas.',
      'O Carnaval tradicional e os festejos juninos de Barreta reúnem famílias e turistas ao som de marchinhas e forró pé-de-serra.'
    ],
    primaryImage: '/assets/aistudio/image_83c3325b.png',
    imageAlt: 'Orla da Praia de Barreta com quebra-mar de arrecifes e faixa de areia dourada',
    gallery: [
      '/assets/aistudio/image_83c3325b.png'
    ],
    location: {
      address: 'Orla de Barreta, extremo sul do município',
      locality: 'Barreta, Nísia Floresta - RN',
      coordinates: { lat: -6.046944, lng: -35.105278 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.046944,-35.105278',
      accessGuide: 'Acesso ao final da RN-063, após Camurupim. Trecho final asfaltado com ruas calçadas na vila.'
    },
    visiting: {
      hours: 'Acesso permanente; barracas de praia abrem das 08h30 às 17h00',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Aproveite para saborear a tradicional ginga com tapioca ou o caldo de sururu nos quiosques de pescadores.',
        'Visite a Ducha no momento em que a maré está subindo (meia-maré) para ver os jatos mais vigorosos.'
      ]
    },
    preservation: {
      environmental: 'Não suba sobre corais vivos e recolha qualquer plástico trazido pelo passeio.',
      heritage: 'Respeite as áreas de recolhimento de jangadas e redes dos pescadores artesanais.'
    },
    references: [
      'Colônia de Pescadores Z-14 de Nísia Floresta.',
      'Guia Litoral Potiguar - Governo do RN.'
    ],
    tags: ['Ducha de Barreta', 'Pescadores', 'Jangadas', 'Marés', 'Gastronomia caiçara'],
    isFeatured: false,
    timeToSpend: '2 a 4 horas'
  },
  {
    id: 'casarios-historicos-centro',
    slug: 'casarios-historicos-do-centro',
    name: 'Casarios Históricos e Antiga Vila Imperial',
    subtitle: 'Arquitetura civil dos séculos XIX e XX preservada no centro urbano',
    category: 'patrimonio',
    categoryLabel: 'Patrimônio Histórico',
    summary: 'Conjunto arquitetônico de fachadas azulejadas, platibandas decoradas e casas térreas que guardam a história da antiga Vila Imperial de Papary.',
    fullDescription: 'O Centro Histórico de Nísia Floresta abriga um charmoso conjunto de casarios coloniais e do início da República. As fachadas apresentam portas de madeira maciça, janelas em guilhotina, platibandas com elementos ornamentais e ornatos em gesso que refletiam o status social dos comerciantes e proprietários rurais do antigo município de Papary.',
    history: 'A povoação foi elevada à categoria de Vila Imperial de Papary em 1852 pela Lei Provincial nº 252. Durante esse período, os casarios alinharam-se ao longo da atual Rua Almirante Barroso e do entorno da Igreja Matriz, compondo o centro cívico, judiciário e comercial da comarca.',
    curiosities: [
      'Várias residências ainda conservam os antigos ladrilhos hidráulicos no piso e os batentes de cantaria esculpidos à mão.',
      'A caminhada entre os casarios conecta os principais monumentos da cidade: o Baobá, a Igreja Matriz, a Estação de Papary e o Museu Nísia Floresta.',
      'Em 1948, foi nessas mesmas ruas históricas que o povo celebrou a alteração do nome de Papary para o nome da ilustre escritora Nísia Floresta.'
    ],
    primaryImage: '/assets/aistudio/image_efd0799a.png',
    imageAlt: 'Casarios históricos e telhados coloniais do centro antigo de Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_efd0799a.png'
    ],
    location: {
      address: 'Rua Almirante Barroso e Praça Coronel José de Araújo',
      locality: 'Centro, Nísia Floresta - RN',
      coordinates: { lat: -6.091667, lng: -35.208333 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.091667,-35.208333',
      accessGuide: 'Circuito percorrido a pé pelo centro histórico da cidade.'
    },
    visiting: {
      hours: 'Visitação externa diurna permanente',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Recomenda-se um passeio a pé matinal ou no início da tarde para fotografar as fachadas com a iluminação natural.',
        'Muitas casas são residências particulares habitadas: fotografe do espaço público respeitando a privacidade dos moradores.'
      ]
    },
    preservation: {
      environmental: 'Mantenha as calçadas históricas e meio-fio conservados e sem descarte de papéis.',
      heritage: 'Incentivar a conservação das cores originais e detalhes arquitetônicos tradicionais sem reformas descaracterizadoras.'
    },
    references: [
      'Prefeitura de Nísia Floresta - Plano Diretor e Inventário do Patrimônio Edificado.',
      'IPHAN - Levantamento de Núcleos Históricos no Rio Grande do Norte.'
    ],
    tags: ['Arquitetura civil', 'Casarios', 'Vila Imperial', 'Século XIX', 'Papary'],
    isFeatured: false,
    timeToSpend: '45 minutos a 1 hora'
  },
  {
    id: 'lagoa-do-carcara',
    slug: 'lagoa-do-carcara',
    name: 'Lagoa do Carcará',
    subtitle: 'Águas cristalinas em tons de turquesa e areia alva no coração da restinga',
    category: 'lagoas',
    categoryLabel: 'Lagoas e Áreas de Lazer',
    summary: 'Famosa pelas águas mornas, calmas e translúcidas em tonalidades de verde e azul, areia branca fina e ambiente bucólico para banho e caiaque.',
    fullDescription: 'A Lagoa do Carcará é um dos segredos naturais mais deslumbrantes do Rio Grande do Norte. Localizada na zona rural de Nísia Floresta, possui águas excepcionalmente límpidas com visibilidade subaquática impressionante, cercadas por dunas e vegetação nativa de restinga. O ambiente rústico preserva a sensação de um santuário ecológico quase intocado, ideal para banhos relaxantes e esportes a remo.',
    history: 'A lagoa era tradicionalmente utilizada por vaqueiros e agricultores da região para dessedentação de animais e lavouras familiares. Seu nome homenageia o carcará (Caracara plancus), ave de rapina típica e emblemática da caatinga e dos tabuleiros costeiros nordestinos. Nas últimas décadas, sua beleza cênica ganhou destaque no ecoturismo sustentável potiguar.',
    curiosities: [
      'A transparência da água é tão elevada que é possível enxergar os cardumes de pequenos peixes nadando em torno dos pés mesmo a metros da margem.',
      'A profundidade aumenta de forma gradual e suave, tornando-a muito segura e acolhedora para crianças e idosos.',
      'Não há permissão para barcos a motor ou jet skis na lâmina principal, garantindo a tranquilidade acústica e a conservação da fauna aquática.'
    ],
    primaryImage: '/assets/aistudio/image_a7d06602.png',
    imageAlt: 'Balanço decorado nas águas cristalinas e rasas da Lagoa do Carcará em Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_a7d06602.png'
    ],
    location: {
      address: 'Estrada Vicinal da Lagoa do Carcará, Zona Rural',
      locality: 'Zona Rural, Nísia Floresta - RN',
      coordinates: { lat: -6.040833, lng: -35.216667 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.040833,-35.216667',
      accessGuide: 'Acesso a partir da RN-063 por estrada de terra bem demarcada ou em passeios ecológicos de bugue e quadriciclo credenciados.'
    },
    visiting: {
      hours: 'Aberto durante o dia (quiosques rústicos funcionam das 08h30 às 17h00)',
      fee: 'Acesso público gratuito à água; consumação e aluguel de caiaques/pranchas são cobrados à parte',
      statusConfirmed: true,
      tips: [
        'Leve dinheiro em espécie para consumação, pois o sinal de internet pode oscilar na área rural.',
        'Visite durante a semana para desfrutar de um cenário de paz e silêncio absoluto.'
      ]
    },
    preservation: {
      environmental: 'Não utilize protetores solares não biodegradáveis em excesso e recolha 100% de embalagens e lixo pessoal.',
      heritage: 'Respeite as margens arenosas frágeis e evite o tráfego de veículos motorizados junto à borda da água.'
    },
    references: [
      'SEMTUR Nísia Floresta - Inventário de Atrativos Hídricos e Ecoturismo.',
      'IDEMA/RN - Estudos de Bacias Lacustres do Litoral Oriental Potiguar.'
    ],
    tags: ['Água cristalina', 'Carcará', 'Ecoturismo', 'Caiaque', 'Restinga'],
    isFeatured: true,
    timeToSpend: '2 a 4 horas'
  },
  {
    id: 'praia-de-buzios',
    slug: 'praia-de-buzios',
    name: 'Praia de Búzios',
    subtitle: 'Extensa orla de areia dourada, ondas para surfe, dunas costeiras e quiosques',
    category: 'praias',
    categoryLabel: 'Praias e Paisagens Naturais',
    summary: 'Uma das praias mais amplas e dinâmicas de Nísia Floresta, com excelente infraestrutura à beira-mar, dunas para passeios e mar propício ao surfe e banho em maré baixa.',
    fullDescription: 'A Praia de Búzios é um dos destinos litorâneos mais tradicionais do Rio Grande do Norte. Sua costa combina uma faixa de areia larga e batida, ideal para caminhadas matinais e esportes praianos, com trechos de mar aberto que atraem surfistas e praticantes de kitesurf. Ao longo da avenida beira-mar, quiosques servem petiscos de frutos do mar frescos e bebidas refrescantes sob a brisa oceânica.',
    history: 'A praia desenvolveu-se historicamente a partir de um núcleo de pescadores artesanais que aproveitavam a fartura de peixes pelágicos e a proximidade com as lagoas interiores. A partir dos anos 1970 e 1980, transformou-se em um dos principais balneários de veraneio do estado, atraindo famílias potiguares e turistas de todo o país.',
    curiosities: [
      'Na maré seca, formam-se trechos rasos e suaves perfeitos para banho de mar em família.',
      'O morro das dunas móveis atrás da praia proporciona um dos mirantes mais bonitos para contemplar o pôr do sol refletido no oceano.',
      'O nome "Búzios" faz referência às conchas de moluscos marinhos encontradas em grande quantidade nas praias da região pelos antigos moradores.'
    ],
    primaryImage: '/assets/aistudio/image_9d5f84fa.png',
    imageAlt: 'Vista panorâmica a partir das dunas da Praia de Búzios em Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_9d5f84fa.png'
    ],
    location: {
      address: 'Avenida Beira Mar, Praia de Búzios',
      locality: 'Búzios, Nísia Floresta - RN',
      coordinates: { lat: -6.013333, lng: -35.106667 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.013333,-35.106667',
      accessGuide: 'Acesso asfaltado pela Rota do Sol (RN-063), ao sul de Pirangi e ao norte de Tabatinga.'
    },
    visiting: {
      hours: 'Acesso público 24 horas; quiosques e restaurantes operam das 08h às 18h',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Aproveite a maré baixa para caminhadas revigorantes na faixa de areia batida.',
        'Atenção às bandeiras de sinalização de correnteza dos salva-vidas nos trechos de ondas mais fortes.'
      ]
    },
    preservation: {
      environmental: 'Não trafegue com veículos em áreas de desova de tartarugas marinhas e restingas dunares protegidas.',
      heritage: 'Descarte seu lixo nos coletores disponíveis nos quiosques e não deixe plásticos na areia.'
    },
    references: [
      'Prefeitura de Nísia Floresta - Secretaria Municipal de Turismo.',
      'Guia de Praias do Litoral Potiguar - EMPROTUR/RN.'
    ],
    tags: ['Surfe', 'Dunas', 'Veraneio', 'Orla', 'Quiosques'],
    isFeatured: true,
    timeToSpend: 'Metade do dia (3 a 5 horas)'
  },
  {
    id: 'praia-de-pirangi-do-sul',
    slug: 'praia-de-pirangi-do-sul',
    name: 'Praia de Pirangi do Sul',
    subtitle: 'Encontro tranquilo do Rio Pirangi com o mar, barcos de pesca e mar manso',
    category: 'praias',
    categoryLabel: 'Praias e Paisagens Naturais',
    summary: 'Bela praia na divisa com Parnamirim, marcada pela foz do Rio Pirangi, águas calmas e mornas ideais para banho, coqueirais e atmosfera pesqueira autêntica.',
    fullDescription: 'A Praia de Pirangi do Sul localiza-se na margem sul da foz do Rio Pirangi, no município de Nísia Floresta. Ao contrário do lado norte, mais urbanizado, Pirangi do Sul conserva uma atmosfera tranquila e rústica com coqueirais ondulantes, barcos coloridos de pesca ancorados na areia e mar calmo protegido por bancos de areia e arrecifes. É um refúgio acolhedor onde as águas doces do rio se misturam serenamente com o oceano.',
    history: 'A área da foz do Rio Pirangi era ponto de abrigo e atracação de jangadas indígenas e coloniais desde o século XVII. A divisão entre Pirangi do Norte (pertencente a Parnamirim) e Pirangi do Sul (pertencente a Nísia Floresta) ocorreu com a emancipação dos municípios, mas a identidade cultural dos pescadores de ambos os lados mantém laços seculares de vizinhança.',
    curiosities: [
      'Durante a maré baixa, é possível atravessar a pé trechos do banco de areia no encontro do rio com o mar e tomar banho nas bacias calmas de água morna.',
      'A vista a partir de Pirangi do Sul descortina a ponte sobre o Rio Pirangi e o contorno da costa até os parrachos.',
      'É ponto de partida tradicional para passeios de barco e jangada até os parrachos de Pirangi para mergulho livre.'
    ],
    primaryImage: '/assets/aistudio/image_2624bde4.png',
    imageAlt: 'Vista aérea panorâmica da foz do rio e enseada da Praia de Pirangi do Sul em Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_2624bde4.png'
    ],
    location: {
      address: 'Foz do Rio Pirangi, Litoral Norte de Nísia Floresta',
      locality: 'Pirangi do Sul, Nísia Floresta - RN',
      coordinates: { lat: -5.992778, lng: -35.121389 },
      googleMapsUrl: 'https://maps.google.com/?q=-5.992778,-35.121389',
      accessGuide: 'Acesso pela ponte da Rota do Sol (RN-063), logo após atravessar o Rio Pirangi no sentido sul.'
    },
    visiting: {
      hours: 'Acesso público 24 horas; barracas e aluguel de caiaques/passeios das 08h30 às 17h00',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Excelente para quem viaja com crianças pequenas, devido à ausência de ondas fortes na enseada da foz.',
        'Experimente os pastéis de camarão e água de coco fresca comercializados pelas famílias locais.'
      ]
    },
    preservation: {
      environmental: 'Preserve a vegetação de manguezal e restinga na foz do rio, berçário de espécies marinhas e caranguejos.',
      heritage: 'Não mexa nas redes ou apetrechos dos pescadores guardados nas sombras dos coqueiros.'
    },
    references: [
      'Prefeitura Municipal de Nísia Floresta - Secretaria de Turismo.',
      'Comitê da Bacia Hidrográfica do Rio Pirangi / IGARN.'
    ],
    tags: ['Foz do rio', 'Mar calmo', 'Pescadores', 'Família', 'Estuário'],
    isFeatured: true,
    timeToSpend: '2 a 4 horas'
  },
  {
    id: 'lagoa-de-boa-agua',
    slug: 'lagoa-de-boa-agua',
    name: 'Lagoa de Boa Água',
    subtitle: 'Refúgio de água doce límpida, sossego e mata nativa de restinga',
    category: 'lagoas',
    categoryLabel: 'Lagoas e Áreas de Lazer',
    summary: 'Lagoa de águas tranquilas e transparentes, rodeada por coqueirais e vegetação nativa, ideal para banho relaxante, contemplação e contato direto com a natureza.',
    fullDescription: 'A Lagoa de Boa Água é um dos mananciais naturais mais serenos de Nísia Floresta. Localizada na comunidade de Boa Água, destaca-se pela preservação de suas margens arborizadas, águas calmas e límpidas de tom azul-esverdeado e um ritmo de vida acolhedor e bucólico, distante da agitação dos grandes polos turísticos.',
    history: 'A Lagoa de Boa Água faz parte da rica bacia lacustre do Litoral Oriental Potiguar. Historicamente, serviu como ponto de abastecimento de água potável e subsistência para pequenos agricultores e pescadores artesanais da comunidade local, mantendo vivas tradições de convivência harmoniosa com o ecossistema de restinga.',
    curiosities: [
      'O nome "Boa Água" deve-se à qualidade excepcional e pureza de suas águas doces e mornas, alimentadas pelo lençol freático costeiro.',
      'A lagoa é refúgio de diversas espécies de aves aquáticas da mata atlântica potiguar, como garças, jaçanãs e martins-pescadores.',
      'É um dos pontos favoritos de ciclistas e praticantes de caminhada ecológica que percorrem as trilhas rurais entre as lagoas do município.'
    ],
    primaryImage: '/assets/aistudio/image_c88e7ea0.png',
    imageAlt: 'Águas límpidas e cristalinas da Lagoa de Boa Água em Nísia Floresta',
    gallery: [
      '/assets/aistudio/image_c88e7ea0.png'
    ],
    location: {
      address: 'Comunidade de Boa Água, Zona Rural',
      locality: 'Boa Água, Nísia Floresta - RN',
      coordinates: { lat: -6.074722, lng: -35.195278 },
      googleMapsUrl: 'https://maps.google.com/?q=-6.074722,-35.195278',
      accessGuide: 'Acesso a partir da RN-063 por estrada de terra sinalizada que conecta o centro de Nísia Floresta à comunidade de Boa Água.'
    },
    visiting: {
      hours: 'Acesso público aberto durante o período diurno',
      fee: 'Gratuito',
      statusConfirmed: true,
      tips: [
        'Excelente para piqueniques contemplativos e banhos matinais refrescantes.',
        'Traga água e repelente, e certifique-se de recolher todo o lixo pessoal ao final do passeio.'
      ]
    },
    preservation: {
      environmental: 'Não faça fogueiras nas margens arenosas e evite o descarte de qualquer resíduo plástico ou orgânico na água.',
      heritage: 'Respeite a tranquilidade e a privacidade dos moradores da comunidade tradicional de Boa Água.'
    },
    references: [
      'Prefeitura Municipal de Nísia Floresta - Secretaria Municipal de Turismo e Cultura.',
      'IDEMA/RN - Levantamento Hídrico das Bacias Costeiras do RN.'
    ],
    tags: ['Água doce', 'Boa Água', 'Ecoturismo', 'Tranquilidade', 'Restinga'],
    isFeatured: true,
    timeToSpend: '2 a 3 horas'
  }
];

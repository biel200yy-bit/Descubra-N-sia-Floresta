export interface RouteStop {
  order: number;
  attractionId: string;
  name: string;
  highlight: string;
  suggestedDuration: string;
  practicalTip: string;
}

export interface TouristRoute {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  modality: string;
  recommendedSeason: string;
  overview: string;
  stops: RouteStop[];
  academicNote: string;
  essentialAdvice: string[];
}

export const TOURIST_ROUTES: TouristRoute[] = [
  {
    id: 'roteiro-historico-cultural',
    title: 'Roteiro Histórico e Cultural: Memórias de Papary e Nísia Floresta',
    subtitle: 'Uma viagem no tempo pela arquitetura colonial, trilhos imperiais e vida da grande pensadora',
    duration: 'Aproximadamente 4 a 5 horas',
    modality: 'Caminhada a pé no Centro Histórico e deslocamento curto de automóvel',
    recommendedSeason: 'Todo o ano (manhãs com iluminação favorável para casarios)',
    overview: 'Este circuito concentra os monumentos edificados e a memória imaterial do antigo Papary. Ideal para estudantes, historiadores e turistas interessados nas raízes culturais e literárias do Rio Grande do Norte.',
    academicNote: 'Este roteiro é uma sugestão metodológica elaborada pelo projeto acadêmico “Plataforma Digital de Turismo e Patrimônio Histórico: Valorizando o Município de Nísia Floresta-RN”, com o objetivo de articular pontos de relevante valor memorial.',
    stops: [
      {
        order: 1,
        attractionId: 'estacao-de-papary',
        name: 'Estação Ferroviária de Papary (1881)',
        highlight: 'Arquitetura inglesa em madeira e ferro fundido, trilhos originais e centro de artesanato local.',
        suggestedDuration: '45 minutos',
        practicalTip: 'Inicie pela manhã para encontrar o espaço de artesanato aberto e conversar com os mestres locais.'
      },
      {
        order: 2,
        attractionId: 'baoba-centenario',
        name: 'Baobá de Nísia Floresta (1877)',
        highlight: 'Árvore monumental com mais de 10 metros de circunferência na praça central.',
        suggestedDuration: '30 minutos',
        practicalTip: 'Aproveite a sombra para ler a placa comemorativa e contemplar as raízes esculturais.'
      },
      {
        order: 3,
        attractionId: 'igreja-matriz-nossa-senhora-do-o',
        name: 'Igreja Matriz de Nossa Senhora do Ó',
        highlight: 'Fachada barroca colonial, torres sineiras brancas e acervo de imagens sacras seculares.',
        suggestedDuration: '45 minutos',
        practicalTip: 'Verifique se não há celebração em andamento caso deseje fotografar o interior do templo.'
      },
      {
        order: 4,
        attractionId: 'casarios-historicos-centro',
        name: 'Casarios Históricos da Antiga Vila Imperial',
        highlight: 'Passeio a pé pela Rua Almirante Barroso observando platibandas, telhas coloniais e portas trabalhadas.',
        suggestedDuration: '45 minutos',
        practicalTip: 'Observe as fachadas coloridas mantidas com esmero pelas famílias moradoras da cidade.'
      },
      {
        order: 5,
        attractionId: 'museu-nisia-floresta',
        name: 'Museu e Memorial Nísia Floresta',
        highlight: 'Acervo bibliográfico, escritos originais e a cripta solene da patrona do feminismo brasileiro.',
        suggestedDuration: '1 hora',
        practicalTip: 'Encerre a manhã mergulhando nos textos de Dionísia Gonçalves Pinto e suas cartas históricas.'
      }
    ],
    essentialAdvice: [
      'Use calçados confortáveis para caminhada em ruas com calçamento de paralelepípedos.',
      'Leve garrafa de água reutilizável e chapéu para os trechos de sol na praça.',
      'Respeite os espaços memoriais e o silêncio nas imediações da cripta e da igreja.'
    ]
  },
  {
    id: 'roteiro-das-aguas-doces',
    title: 'Roteiro das Águas Doces: Circuito das Grandes Lagoas',
    subtitle: 'Banho de água doce cristalina, dunas alvas e contemplação ecológica na APA Bonfim-Guaraíras',
    duration: 'Dia inteiro (6 a 7 horas)',
    modality: 'Veículo automotor ou transfer ecológico entre lagoas',
    recommendedSeason: 'Dias ensolarados (setembro a março oferecem menor índice de chuvas)',
    overview: 'Nísia Floresta abriga o mais rico complexo lacustre do leste potiguar. Este roteiro conecta lagoas de diferentes características — da imponência náutica da Lagoa do Bonfim à serenidade de Alcaçuz e ao lazer estruturado de Arituba.',
    academicNote: 'Sugestão formulada para valorizar a bacia hidrográfica costeira e alertar sobre a importância da preservação das matas ciliares e dos lençóis freáticos que abastecem a região.',
    stops: [
      {
        order: 1,
        attractionId: 'lagoa-do-bonfim',
        name: 'Lagoa do Bonfim (APA Bonfim-Guaraíras)',
        highlight: 'Maior lagoa do estado, brisa revigorante e vista panorâmica para velejo e caiaque.',
        suggestedDuration: '2 horas',
        practicalTip: 'Excelente início matinal para caminhada ecológica nas margens preservadas da APA.'
      },
      {
        order: 2,
        attractionId: 'lagoa-de-alcacuz',
        name: 'Lagoa de Alcaçuz e Dunas',
        highlight: 'Águas límpidas cercadas por areias brancas e proximidade com a tradição das rendeiras de bilro.',
        suggestedDuration: '1h30',
        practicalTip: 'Aproveite o silêncio e agende uma visita ao núcleo de artesanato de renda de labirinto no povoado.'
      },
      {
        order: 3,
        attractionId: 'lagoa-de-arituba',
        name: 'Lagoa de Arituba (Almoço e Lazer)',
        highlight: 'Águas mornas e mansas, infraestrutura de quiosques gastronômicos e pedalinhos.',
        suggestedDuration: '2 horas',
        practicalTip: 'Parada perfeita para o almoço com peixe frito ou camarão na brisa da tarde.'
      },
      {
        order: 4,
        attractionId: 'lagoa-do-carcara',
        name: 'Lagoa do Carcará',
        highlight: 'Águas cristalinas em tons verde e turquesa e areia alva no coração da restinga.',
        suggestedDuration: '1h30',
        practicalTip: 'Visite no meio da tarde para relaxar nas águas transparentes e passear de caiaque.'
      }
    ],
    essentialAdvice: [
      'Use filtro solar biodegradável para minimizar impacto químico nos ecossistemas límnicos.',
      'Não alimente os peixes com restos de comida humana.',
      'Traga sacolas para recolher rigorosamente 100% dos resíduos gerados.'
    ]
  },
  {
    id: 'roteiro-litoral-arrecifes',
    title: 'Roteiro Litoral e Arrecifes: Do Mirante dos Golfinhos à Pedra Oca',
    subtitle: 'Encontro com a vida marinha no alto das falésias e piscinas mornas de maré',
    duration: 'Aproximadamente 5 a 6 horas (condicionado à maré)',
    modality: 'Automóvel pela RN-063 (Rota do Sol) e caminhadas à beira-mar',
    recommendedSeason: 'Ano inteiro, imperativo coordenar o horário com a Tábua de Marés baixas',
    overview: 'Um itinerário que celebra o relevo costeiro, a geologia dos recifes de arenito e a biodiversidade marinha. O dia começa avistando golfinhos e encerra-se relaxando nas piscinas formadas pela barreira de pedra.',
    academicNote: 'Roteiro elaborado para destacar a fragilidade dos ecossistemas coralíneos e arrecifais e a coexistência com as comunidades pesqueiras históricas.',
    stops: [
      {
        order: 1,
        attractionId: 'praia-de-pirangi-do-sul',
        name: 'Praia de Pirangi do Sul (Foz do Rio)',
        highlight: 'Encontro sereno do Rio Pirangi com o mar, barcos tradicionais e enseada calma.',
        suggestedDuration: '1 hora',
        practicalTip: 'Inicie a descida do litoral norte pela foz do rio observando os pescadores artesanais.'
      },
      {
        order: 2,
        attractionId: 'praia-de-buzios',
        name: 'Praia de Búzios e Dunas',
        highlight: 'Extensa orla de areia dourada, quiosques com água de coco e mar aberto.',
        suggestedDuration: '1h30',
        practicalTip: 'Caminhe pela praia na maré baixa ou aproveite o mirante das dunas costeiras.'
      },
      {
        order: 3,
        attractionId: 'praia-de-tabatinga',
        name: 'Mirante dos Golfinhos (Tabatinga)',
        highlight: 'Observação matinal de botos-cinza nas águas calmas abaixo das falésias coloridas.',
        suggestedDuration: '1 hora',
        practicalTip: 'Chegue entre 08h30 e 10h30, quando a incidência solar frontal favorece a visualização dos golfinhos.'
      },
      {
        order: 4,
        attractionId: 'praia-de-camurupim',
        name: 'Praia de Camurupim e Gruta da Pedra Oca',
        highlight: 'Banho nas piscinas salgadas sem ondas e caminhada até a caverna marinha na maré baixa.',
        suggestedDuration: '2 horas',
        practicalTip: 'Acesse a gruta da Pedra Oca exatamente no pico da maré baixa (entre 0.0m e 0.4m).'
      },
      {
        order: 5,
        attractionId: 'praia-de-barreta',
        name: 'Praia de Barreta e Ducha Natural',
        highlight: 'Clima de vila de pescadores, esguicho da ducha natural e orla acolhedora.',
        suggestedDuration: '1 hora',
        practicalTip: 'Aprecie os pescadores artesanais no retorno de suas jangadas ao entardecer.'
      }
    ],
    essentialAdvice: [
      'Calçado com sola emborrachada para caminhar com firmeza sobre as pedras dos recifes.',
      'Nunca pisar em tocas de caranguejos ou sobre formações de algas vivas sensíveis.',
      'Atenção às correntes em maré enchente ao retornar dos arrecifes para a faixa de areia.'
    ]
  },
  {
    id: 'roteiro-dia-completo',
    title: 'Roteiro de Um Dia Completo: O Melhor de Nísia Floresta',
    subtitle: 'A síntese perfeita: memória no centro histórico pela manhã e encanto das águas à tarde',
    duration: 'Dia completo (8 horas com pausas para refeições)',
    modality: 'Automóvel próprio ou excursão guiada',
    recommendedSeason: 'Qualquer época do ano com céu aberto',
    overview: 'Projetado para quem tem apenas um dia no município e deseja compreender a alma de Nísia Floresta: sua dimensão literária e cívica pela manhã e seus atrativos naturais mais emblemáticos à tarde.',
    academicNote: 'Síntese elaborada pelo projeto acadêmico para orientar agências comunitárias, receptivos e viajantes autônomos.',
    stops: [
      {
        order: 1,
        attractionId: 'baoba-centenario',
        name: 'Centro Histórico: Baobá e Matriz de N. Sra. do Ó',
        highlight: 'Foto sob o baobá de 1877 e contemplação do largo colonial da matriz.',
        suggestedDuration: '1 hora',
        practicalTip: 'Horário ideal: 08h30. O ar da manhã no centro é tranquilo e acolhedor.'
      },
      {
        order: 2,
        attractionId: 'museu-nisia-floresta',
        name: 'Museu e Memorial Nísia Floresta',
        highlight: 'A história emocionante de Dionísia Gonçalves Pinto e sua luta precursora pelos direitos da mulher.',
        suggestedDuration: '1 hora',
        practicalTip: 'Horário: 09h45 às 10h45. Entrada gratuita.'
      },
      {
        order: 3,
        attractionId: 'lagoa-de-arituba',
        name: 'Almoço e Banho na Lagoa de Arituba',
        highlight: 'Água morna de lagoa, almoço com moqueca ou peixe frito ao som da brisa nos coqueiros.',
        suggestedDuration: '2h30',
        practicalTip: 'Horário: 11h30 às 14h00. Aproveite para descansar nas cadeiras à beira d\'água.'
      },
      {
        order: 4,
        attractionId: 'praia-de-camurupim',
        name: 'Tarde e Pôr do Sol em Camurupim e Pedra Oca',
        highlight: 'Piscinas mornas de água salgada, caminhada nos arrecifes e entardecer espetacular.',
        suggestedDuration: '2 horas',
        practicalTip: 'Horário: 14h30 às 16h45. O mar calmo é um bálsamo para fechar o dia.'
      },
      {
        order: 5,
        attractionId: 'praia-de-tabatinga',
        name: 'Despedida no Mirante dos Golfinhos',
        highlight: 'Vista panorâmica do pôr do sol no litoral sul a partir do topo das falésias.',
        suggestedDuration: '45 minutos',
        practicalTip: 'Encerre contemplando a vastidão do Atlântico e guardando memórias inesquecíveis.'
      }
    ],
    essentialAdvice: [
      'Comece cedo para aproveitar com calma cada uma das etapas do dia.',
      'Adquira artesanato de renda diretamente das famílias para valorizar a economia criativa do município.',
      'Siga a máxima ambiental: "Daqui nada se tira além de fotos, nada se deixa além de pegadas, nada se leva além de lembranças".'
    ]
  }
];

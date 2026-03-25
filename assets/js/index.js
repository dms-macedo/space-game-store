const navprofile = document.querySelector(".hide-nav-profile");
const avatarimageprofile = document.querySelector("header nav img");

// Garante que o menu comece escondido quando a página carrega
navprofile.style.display = "none";

// Criamos uma única função para o clique
const toggleMenu = () => {
  // Se o display for "none" ou estiver vazio (padrão do CSS), ele muda para "grid"
  if (navprofile.style.display === "none" || navprofile.style.display === "") {
    navprofile.style.display = "grid";
  } else {
    // Se já estiver aparecendo, ele esconde
    navprofile.style.display = "none";
  }
};

// Adicionamos apenas um ouvinte de clique
avatarimageprofile.addEventListener("click", toggleMenu);

document.addEventListener("click", (event) => {
  const menuEstaAberto = navprofile.style.display === "grid";
  const clicouForaDoMenu = !navprofile.contains(event.target);
  const clicouForaDoAvatar = event.target !== avatarimageprofile;

  if (menuEstaAberto && clicouForaDoMenu && clicouForaDoAvatar) {
    navprofile.style.display = "none";
  }
});

const iconsStore = document.querySelector(".icons-store");
const button_icon_remove = document.querySelector("#btn-toggle-store");

button_icon_remove.textContent = "<<";

button_icon_remove.addEventListener("click", (event) => {
  if (iconsStore.style.left === "-62px") {
    iconsStore.style.left = "20px";
    event.target.textContent = "<<";
  } else {
    iconsStore.style.left = "-62px";
    event.target.textContent = ">>";
  }
});

const jogosJSON = `[
  {
    "id": 1,
    "nome": "God of War Ragnarök",
    "dataLancamento": "2022-11-09",
    "descricao": "Kratos e Atreus embarcam em uma jornada mítica e profundamente emocional pelos Nove Reinos, enfrentando deuses nórdicos e feras lendárias. Enquanto as forças de Asgard se preparam para a guerra profetizada que trará o fim do mundo, Kratos deve lutar para proteger sua família e superar os fantasmas do seu passado. Explore paisagens deslumbrantes, domine o combate visceral com o Machado Leviatã e as Lâminas do Caos, e descubra respostas vitais antes que o Fimbulwinter congele tudo.",
    "plataformas": ["PlayStation"],
    "genero": "Ação e Aventura",
    "tags": ["Mitologia", "História Rica", "Hack and Slash", "Linear"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "18",
    "tamanhoGB": 84,
    "notaMetacritic": 94,
    "preco": 299.90,
    "emPromocao": false,
    "desenvolvedora": "Santa Monica Studio",
    "imagemCapa": "../../assets/images/god-of-war-ragnarok.png"
  },
  {
    "id": 2,
    "nome": "Red Dead Redemption 2",
    "dataLancamento": "2018-10-26",
    "descricao": "Uma narrativa épica sobre honra e lealdade no alvorecer da era moderna, ambientada no implacável coração dos Estados Unidos. Após um assalto que dá muito errado, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver. Viva uma imersão sem precedentes, explore ecossistemas vivos, crie vínculos com o seu cavalo e sinta o peso de cada decisão no declínio do Velho Oeste.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Ação e Aventura",
    "tags": ["Mundo Aberto", "Faroeste", "História Rica", "Tiro"],
    "modosDeJogo": ["Singleplayer", "Multiplayer"],
    "classificacao": "18",
    "tamanhoGB": 105,
    "notaMetacritic": 97,
    "precoOriginal": 249.90,
    "preco": 149.90,
    "emPromocao": true,
    "desenvolvedora": "Rockstar Games",
    "imagemCapa": "../../assets/images/red-dead-redemption-2.jpg"
  },
  {
    "id": 3,
    "nome": "Minecraft: Bedrock Edition",
    "dataLancamento": "2011-11-18",
    "descricao": "Prepare-se para uma aventura de possibilidades infinitas. No Minecraft, o mundo é gerado de forma procedural, oferecendo biomas vastos que vão desde montanhas nevadas até cavernas profundas e perigosas. No Modo Criativo, você tem recursos ilimitados para construir desde cabanas simples até castelos majestosos e maquinários complexos. Já no Modo Sobrevivência, você precisará minerar, forjar armas, cultivar alimentos e se defender das terríveis criaturas noturnas. Jogue sozinho ou una-se a amigos em qualquer plataforma para criar a sua própria realidade.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Sobrevivência",
    "tags": ["Sandbox", "Mundo Aberto", "Construção", "Criativo"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "Livre",
    "tamanhoGB": 2,
    "notaMetacritic": 90,
    "preco": 99.50,
    "emPromocao": false,
    "desenvolvedora": "Mojang Studios",
    "imagemCapa": "../../assets/images/minecraft.png"
  },
  {
    "id": 4,
    "nome": "Halo Infinite",
    "dataLancamento": "2021-12-08",
    "descricao": "Quando a esperança é perdida e o destino da humanidade está em risco, o Master Chief está pronto para encarar o inimigo mais cruel que já enfrentou. A lendária série Halo retorna com a campanha mais expansiva já criada, ambientada no vasto anel de Zeta Halo. Explore acampamentos inimigos, resgate fuzileiros navais, utilize o novo e dinâmico Gancho para travessia tática e recupere a instalação das garras da implacável facção dos Banidos. Conta também com um multiplayer robusto e totalmente gratuito.",
    "plataformas": ["Xbox"],
    "genero": "Tiro",
    "tags": ["FPS", "Ficção Científica", "Mundo Aberto", "Competitivo"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "14",
    "tamanhoGB": 50,
    "notaMetacritic": 87,
    "precoOriginal": 299.00,
    "preco": 249.00,
    "emPromocao": true,
    "desenvolvedora": "343 Industries",
    "imagemCapa": "halo_infinite.jpg"
  },
  {
    "id": 5,
    "nome": "Marvel's Spider-Man 2",
    "dataLancamento": "2023-10-20",
    "descricao": "A cidade de Nova York está maior e mais vibrante do que nunca. Os Homens-Aranha Peter Parker e Miles Morales retornam para uma aventura eletrizante, onde você pode alternar rapidamente entre os dois heróis. Experimente novas habilidades, use as Asas de Teia para planar pelos arranha-céus e enfrente um elenco icônico de vilões, incluindo o brutal caçador Kraven, o destrutivo Lagarto e a monstruosa ameaça do Venom. Equilibre o dever de proteger a cidade com os complexos dramas pessoais da vida de cada herói.",
    "plataformas": ["PlayStation"],
    "genero": "Ação e Aventura",
    "tags": ["Mundo Aberto", "Super-heróis", "Combate Fluido"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "14",
    "tamanhoGB": 86,
    "notaMetacritic": 90,
    "preco": 349.90,
    "emPromocao": false,
    "desenvolvedora": "Insomniac Games",
    "imagemCapa": "spiderman2.jpg"
  },
  {
    "id": 6,
    "nome": "Marvel's Avengers",
    "dataLancamento": "2020-09-04",
    "descricao": "Após uma tragédia no Dia A que resulta em enorme destruição e na separação da equipe, o mundo proíbe os super-heróis. Anos mais tarde, a jovem Kamala Khan descobre uma conspiração global liderada pela corporação AIM e decide que é hora de reunir os Heróis Mais Poderosos da Terra. Controle o Capitão América, Homem de Ferro, Hulk, Viúva Negra e Thor, melhore suas habilidades em combates estilo looter-shooter e jogue missões cooperativas online para proteger o planeta contra ameaças escalonáveis.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Ação",
    "tags": ["Super-heróis", "Looter Shooter", "Combate"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "14",
    "tamanhoGB": 74,
    "notaMetacritic": 67,
    "precoOriginal": 299.90,
    "preco": 199.90,
    "emPromocao": true,
    "desenvolvedora": "Crystal Dynamics",
    "imagemCapa": "avengers.jpg"
  },
  {
    "id": 7,
    "nome": "Forza Horizon 5",
    "dataLancamento": "2021-11-09",
    "descricao": "Pegue o volante das centenas dos melhores e mais incríveis carros do mundo em uma expedição inesquecível pelo México. Experimente desertos vivos, selvas ricas, cidades históricas, ruínas escondidas, praias paradisíacas e um imponente vulcão coberto de neve. Os eventos climáticos são espetaculares e mudam dinamicamente a cada semana. Participe de corridas de rua, ralis na lama, desafios de derrapagem e eventos colaborativos online neste que é o pináculo dos jogos de corrida em mundo aberto.",
    "plataformas": ["Xbox"],
    "genero": "Corrida",
    "tags": ["Mundo Aberto", "Simulação Arcade", "Esportes"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "Livre",
    "tamanhoGB": 110,
    "notaMetacritic": 92,
    "preco": 249.00,
    "emPromocao": false,
    "desenvolvedora": "Playground Games",
    "imagemCapa": "forza5.jpg"
  },
  {
    "id": 8,
    "nome": "Elden Ring",
    "dataLancamento": "2022-02-25",
    "descricao": "Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino. Criado pela FromSoftware com a construção de mundo assinada por George R. R. Martin (autor de As Crônicas de Gelo e Fogo), este colossal RPG de ação desafia você a explorar as impressionantes e obscuras Terras Intermédias. Cavalgue pelo vasto mapa em seu corcel fantasma Torrente, enfrente semideuses aterrorizantes, explore imensas masmorras legadas e personalize sua build com um arsenal gigante de armas, feitiços e invocações de espíritos.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "RPG de Ação",
    "tags": ["Mundo Aberto", "Souls-like", "Fantasia Sombria", "Difícil"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "16",
    "tamanhoGB": 60,
    "notaMetacritic": 96,
    "preco": 279.90,
    "emPromocao": false,
    "desenvolvedora": "FromSoftware",
    "imagemCapa": "eldenring.jpg"
  },
  {
    "id": 9,
    "nome": "The Last of Us Part I",
    "dataLancamento": "2022-09-02",
    "descricao": "Experimente a narrativa emocional que definiu uma geração, reconstruída do zero para a tecnologia mais recente. Em uma civilização devastada por uma pandemia fúngica brutal e governada por facções militares e sobreviventes implacáveis, Joel, um contrabandista endurecido pelo trauma, é contratado para escoltar Ellie, uma garota de 14 anos com um segredo vital, para fora de uma zona de quarentena. O que começa como um simples trabalho logo se transforma em uma jornada brutal e inesquecível pelo coração em ruínas dos Estados Unidos.",
    "plataformas": ["PlayStation"],
    "genero": "Ação e Sobrevivência",
    "tags": ["História Rica", "Furtividade", "Pós-apocalíptico", "Linear"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "18",
    "tamanhoGB": 70,
    "notaMetacritic": 88,
    "precoOriginal": 399.90,
    "preco": 349.90,
    "emPromocao": true,
    "desenvolvedora": "Naughty Dog",
    "imagemCapa": "tlou1.jpg"
  },
  {
    "id": 10,
    "nome": "Starfield",
    "dataLancamento": "2023-09-06",
    "descricao": "No ano de 2330, a humanidade se aventurou além do nosso sistema solar, colonizando novos planetas e vivendo como um povo de viajantes espaciais. Junte-se à Constelação – o último grupo de exploradores espaciais em busca de artefatos raros em toda a galáxia – e navegue pela vasta extensão do espaço. Crie seu próprio personagem de forma livre, construa e personalize as naves dos seus sonhos, e aterrisse em mais de mil planetas únicos com histórias, facções conflitantes, combates táticos e mistérios fascinantes.",
    "plataformas": ["Xbox"],
    "genero": "RPG",
    "tags": ["Espaço", "Ficção Científica", "Mundo Aberto", "Exploração"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "16",
    "tamanhoGB": 125,
    "notaMetacritic": 83,
    "preco": 299.00,
    "emPromocao": false,
    "desenvolvedora": "Bethesda Game Studios",
    "imagemCapa": "starfield.jpg"
  },
  {
    "id": 11,
    "nome": "Cyberpunk 2077",
    "dataLancamento": "2020-12-10",
    "descricao": "Torne-se V, um mercenário urbano equipado com melhorias cibernéticas, e construa sua lenda nas ruas de Night City, uma imensa megalópole obcecada por poder, glamour e modificação corporal. O jogo agora conta com melhorias profundas de gameplay que redefiniram o combate corpo a corpo, direção, inteligência artificial da polícia e árvores de habilidades. Embarque em uma missão arriscada em busca de um implante que é a chave para a imortalidade, lide com corporações cruéis e sinta a companhia de um rockstar digital interpretado por Keanu Reeves.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "RPG de Ação",
    "tags": ["Mundo Aberto", "Cyberpunk", "Primeira Pessoa", "Escolhas Importam"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "18",
    "tamanhoGB": 70,
    "notaMetacritic": 86,
    "precoOriginal": 249.90,
    "preco": 159.90,
    "emPromocao": true,
    "desenvolvedora": "CD Projekt Red",
    "imagemCapa": "cyberpunk.jpg"
  },
  {
    "id": 12,
    "nome": "The Witcher 3: Wild Hunt",
    "dataLancamento": "2015-05-19",
    "descricao": "Assuma o papel de Geralt de Rívia, um mercenário caçador de monstros conhecido como Bruxo. O continente, devastado pela guerra e repleto de bestas aterrorizantes, é seu para explorar. Sua missão atual é a mais perigosa de todas: rastrear Ciri, a Criança da Profecia, uma arma viva capaz de alterar o formato do mundo. Interaja com personagens inesquecíveis, desvende tramas políticas complexas, decida destinos com suas escolhas morais cinzentas e cace monstros gigantescos utilizando espadas duplas, magias alquímicas e muito preparo.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "RPG",
    "tags": ["Mundo Aberto", "Fantasia", "História Rica", "Magia"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "16",
    "tamanhoGB": 50,
    "notaMetacritic": 92,
    "precoOriginal": 149.90,
    "preco": 79.90,
    "emPromocao": true,
    "desenvolvedora": "CD Projekt Red",
    "imagemCapa": "witcher3.jpg"
  },
  {
    "id": 13,
    "nome": "Ghost of Tsushima",
    "dataLancamento": "2020-07-17",
    "descricao": "No final do século 13, o império mongol destruiu nações inteiras em sua campanha para conquistar o Oriente. A ilha de Tsushima é tudo o que resta entre o Japão continental e uma imensa frota invasora mongol liderada pelo impiedoso Khotun Khan. O samurai Jin Sakai sobrevive e percebe que as táticas tradicionais não o levarão à vitória. Ele precisa forjar um novo caminho, o caminho do Fantasma, e travar uma guerra não convencional e furtiva para libertar seu povo e recuperar seu lar em meio a um deslumbrante Japão feudal.",
    "plataformas": ["PlayStation"],
    "genero": "Ação e Aventura",
    "tags": ["Mundo Aberto", "Samurai", "Furtividade", "Histórico"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "18",
    "tamanhoGB": 50,
    "notaMetacritic": 83,
    "preco": 199.90,
    "emPromocao": false,
    "desenvolvedora": "Sucker Punch",
    "imagemCapa": "ghost_tsushima.jpg"
  },
  {
    "id": 14,
    "nome": "Gears 5",
    "dataLancamento": "2019-09-10",
    "descricao": "Com o mundo desmoronando sob a fúria do enxame, Kait Diaz se afasta das missões do esquadrão principal para descobrir sua misteriosa e sombria conexão com o inimigo, e logo percebe que ela pode ser o grande perigo que Sera teme. O jogo eleva a clássica jogabilidade de tiro e cobertura da franquia, oferecendo cenários abertos deslumbrantes no veículo Skiff, batalhas ainda mais brutais contra monstros gosmentos e modos incrivelmente divertidos para jogar com amigos, incluindo a aclamada campanha cooperativa e os intensos modos Horda e Fuga.",
    "plataformas": ["Xbox"],
    "genero": "Tiro",
    "tags": ["Terceira Pessoa", "Ficção Científica", "Ação", "Gore"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "18",
    "tamanhoGB": 80,
    "notaMetacritic": 84,
    "precoOriginal": 249.00,
    "preco": 199.00,
    "emPromocao": true,
    "desenvolvedora": "The Coalition",
    "imagemCapa": "gears5.jpg"
  },
  {
    "id": 15,
    "nome": "Horizon Forbidden West",
    "dataLancamento": "2022-02-18",
    "descricao": "Junte-se à audaciosa guerreira Aloy em sua jornada por um Oeste Proibido belo, vibrante e letal para investigar uma misteriosa e catastrófica praga. Nesta sequência espetacular, você cruzará planícies imensas, mergulhará em profundezas marinhas cristalinas e voará pelos céus em montarias robóticas. O combate é mais fluído e as tribos mais complexas, tudo enquanto tenta descobrir os segredos esquecidos do passado da humanidade e forjar alianças essenciais para parar o fim iminente da biosfera da Terra.",
    "plataformas": ["PlayStation"],
    "genero": "RPG de Ação",
    "tags": ["Mundo Aberto", "Ficção Científica", "Pós-apocalíptico", "Máquinas"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "14",
    "tamanhoGB": 98,
    "notaMetacritic": 88,
    "preco": 299.90,
    "emPromocao": false,
    "desenvolvedora": "Guerrilla Games",
    "imagemCapa": "horizon_fw.jpg"
  },
  {
    "id": 16,
    "nome": "Sea of Thieves",
    "dataLancamento": "2018-03-20",
    "descricao": "O mar chama por você neste simulador definitivo de pirataria! Reúna seus amigos e opere navios autênticos onde cada jogador deve gerenciar as velas, o leme e os canhões em sincronia. Navegue por um oceano compartilhado e encontre outras tripulações formadas por jogadores reais: elas serão amigáveis ou inimigos perigosos de olho no seu saque? Descubra tesouros enterrados em ilhas tropicais repletas de enigmas, enfrente frotas de esqueletos amaldiçoados, o gigantesco Megalodon ou até mesmo o aterrorizante Kraken em batalhas marítimas imprevisíveis.",
    "plataformas": ["Xbox", "PlayStation"],
    "genero": "Ação e Aventura",
    "tags": ["Mundo Aberto", "Piratas", "Exploração", "PvPvE"],
    "modosDeJogo": ["Multiplayer", "Co-op"],
    "classificacao": "12",
    "tamanhoGB": 50,
    "notaMetacritic": 69,
    "preco": 199.00,
    "emPromocao": false,
    "desenvolvedora": "Rare",
    "imagemCapa": "sea_of_thieves.jpg"
  },
  {
    "id": 17,
    "nome": "Bloodborne",
    "dataLancamento": "2015-03-24",
    "descricao": "Viaje para a antiga e macabra cidade de Yharnam, um lugar amaldiçoado por uma endemia terrível que se espalha pelas ruas como fogo. O perigo e a loucura estão por toda parte neste mundo repleto de abominações sombrias inspiradas em literatura cósmica e terror vitoriano. A jogabilidade exige precisão agressiva: aqui você não se esconde atrás de um escudo. Use armas de truque transformáveis na mão direita e armas de fogo na esquerda para desferir golpes devastadores e banhar-se no sangue das criaturas do pesadelo.",
    "plataformas": ["PlayStation"],
    "genero": "RPG de Ação",
    "tags": ["Souls-like", "Terror", "Fantasia Sombria", "Lovecraftiano"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "16",
    "tamanhoGB": 30,
    "notaMetacritic": 92,
    "precoOriginal": 149.90,
    "preco": 99.90,
    "emPromocao": true,
    "desenvolvedora": "FromSoftware",
    "imagemCapa": "bloodborne.jpg"
  },
  {
    "id": 18,
    "nome": "Ori and the Will of the Wisps",
    "dataLancamento": "2020-03-11",
    "descricao": "O pequeno espírito Ori não é estranho ao perigo, mas quando um voo fatídico coloca a corujinha Ku em risco, será preciso mais do que bravura para reunir uma família e curar uma terra despedaçada. Mergulhe neste belíssimo metroidvania desenhado à mão e elogiado pela crítica, que combina plataformas de precisão milimétrica, combate fluido aéreo e terrestre, e uma trilha sonora orquestral que é pura emoção. Encare chefes grandiosos e explore cantos inesquecíveis da floresta para desvendar o verdadeiro destino de Ori.",
    "plataformas": ["Xbox"],
    "genero": "Plataforma",
    "tags": ["Metroidvania", "Trilha Sonora", "Emocionante", "Desafiador"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "Livre",
    "tamanhoGB": 15,
    "notaMetacritic": 90,
    "preco": 129.00,
    "emPromocao": false,
    "desenvolvedora": "Moon Studios",
    "imagemCapa": "ori.jpg"
  },
  {
    "id": 19,
    "nome": "Demon's Souls",
    "dataLancamento": "2020-11-12",
    "descricao": "Mergulhe nas origens do gênero Souls-like com este remake magistral construído desde o alicerce para aproveitar o máximo do hardware de nova geração. O reino de Boletaria foi engolido por um nevoeiro incolor após seu rei despertar o Ancião, uma entidade demoníaca colossal. Como um guerreiro solitário desafiando o nevoeiro mortal, você terá que enfrentar o indizível para ganhar o título de Matador de Demônios e colocar a entidade letal para dormir novamente. Gráficos incríveis, áudio imersivo e combates de alta punição e recompensa o aguardam.",
    "plataformas": ["PlayStation"],
    "genero": "RPG de Ação",
    "tags": ["Souls-like", "Remake", "Fantasia Sombria", "Difícil"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "16",
    "tamanhoGB": 66,
    "notaMetacritic": 92,
    "preco": 349.90,
    "emPromocao": false,
    "desenvolvedora": "Bluepoint Games",
    "imagemCapa": "demons_souls.jpg"
  },
  {
    "id": 20,
    "nome": "Microsoft Flight Simulator",
    "dataLancamento": "2020-08-18",
    "descricao": "Viaje o planeta todo neste simulador fotorrealista que recriou a Terra inteira usando dados de satélite incrivelmente avançados e inteligência artificial baseada na nuvem. Pilote desde aeronaves leves super detalhadas até jatos comerciais colossais. Crie o seu plano de voo e voe para qualquer parte do planeta enquanto enfrenta condições climáticas em tempo real altamente precisas, passando pelas 2 milhões de cidades da Terra e todos os aeroportos, montanhas, estradas, rios e trânsito do mundo verdadeiro.",
    "plataformas": ["Xbox"],
    "genero": "Simulação",
    "tags": ["Aviação", "Mundo Aberto", "Realista", "Relaxante"],
    "modosDeJogo": ["Singleplayer", "Multiplayer"],
    "classificacao": "Livre",
    "tamanhoGB": 150,
    "notaMetacritic": 91,
    "preco": 249.00,
    "emPromocao": false,
    "desenvolvedora": "Asobo Studio",
    "imagemCapa": "flight_sim.jpg"
  },
  {
    "id": 21,
    "nome": "Grand Theft Auto V",
    "dataLancamento": "2013-09-17",
    "descricao": "Quando um jovem malandro que vive nas ruas, um ladrão de bancos aposentado e um psicopata aterrorizante se veem envolvidos com alguns dos elementos mais assustadores e desequilibrados do submundo do crime, do governo dos EUA e da indústria do entretenimento, eles precisam realizar uma série de golpes perigosos para sobreviver numa cidade impiedosa. Los Santos é um parque de diversões imenso: jogue golfe, roube caças militares, faça saltos de paraquedas, explore o fundo do mar e desfrute de horas infinitas de diversão no revolucionário modo online GTA Online.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Ação e Aventura",
    "tags": ["Mundo Aberto", "Crime", "Sátira", "Condução"],
    "modosDeJogo": ["Singleplayer", "Multiplayer"],
    "classificacao": "18",
    "tamanhoGB": 95,
    "notaMetacritic": 97,
    "precoOriginal": 199.90,
    "preco": 149.90,
    "emPromocao": true,
    "desenvolvedora": "Rockstar North",
    "imagemCapa": "gtav.jpg"
  },
  {
    "id": 22,
    "nome": "Marvel's Guardians of the Galaxy",
    "dataLancamento": "2021-10-26",
    "descricao": "Coloque a sua bota a jato e chame os seus amigos, porque você é o Senhor das Estrelas! Neste jogo de ação e aventura em terceira pessoa com narrativa intensa, você dita os comandos para o Groot, Rocket, Gamora e Drax durante o combate em tempo real. Graças às suas péssimas decisões de liderança, vocês desencadearam uma série de eventos catastróficos que ameaçam o universo inteiro. Equipe-se com blasters elementais, ouça uma trilha sonora sensacional de rock anos 80 e tente não destruir o universo neste jogo repleto de muito coração e risadas.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Ação e Aventura",
    "tags": ["Super-heróis", "Espaço", "Narrativa", "Humor"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "14",
    "tamanhoGB": 80,
    "notaMetacritic": 80,
    "precoOriginal": 299.90,
    "preco": 199.90,
    "emPromocao": true,
    "desenvolvedora": "Eidos-Montréal",
    "imagemCapa": "guardians.jpg"
  },
  {
    "id": 23,
    "nome": "Returnal",
    "dataLancamento": "2021-04-30",
    "descricao": "Após um pouso forçado neste mundo alienígena que muda de forma constante, a astronauta Selene precisa lutar com unhas e dentes para sobreviver. Derrotada diversas vezes, ela se vê forçada a reiniciar a sua jornada repetidamente a cada vez que morre. Com o viciante combate roguelike tipo bullet-hell e uso revolucionário de feedback tátil e áudio 3D, Returnal te convida a dominar armas futuristas brutais e descobrir os misteriosos horrores cósmicos do planeta Átropos enquanto tenta preservar sua própria sanidade.",
    "plataformas": ["PlayStation"],
    "genero": "Tiro",
    "tags": ["Roguelike", "Ficção Científica", "Terceira Pessoa", "Bullet Hell"],
    "modosDeJogo": ["Singleplayer", "Co-op"],
    "classificacao": "16",
    "tamanhoGB": 56,
    "notaMetacritic": 86,
    "preco": 349.90,
    "emPromocao": false,
    "desenvolvedora": "Housemarque",
    "imagemCapa": "returnal.jpg"
  },
  {
    "id": 24,
    "nome": "State of Decay 2",
    "dataLancamento": "2018-05-22",
    "descricao": "Os mortos se levantaram e a civilização colapsou. Nem os militares conseguiram deter a ameaça zumbi. Agora, cabe a você formar uma comunidade de sobreviventes unidos por um propósito maior. Procure por recursos escassos, recrute indivíduos gerados aleatoriamente (cada um com habilidades, histórias e personalidades únicas) e construa e melhore a sua própria base. Suas escolhas têm peso permanente e cada expedição pode ser a última: a morte permamente dos personagens faz deste mundo um lugar tenso e taticamente exigente.",
    "plataformas": ["Xbox"],
    "genero": "Sobrevivência",
    "tags": ["Zumbis", "Mundo Aberto", "Gestão de Base", "Permadeath"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "18",
    "tamanhoGB": 30,
    "notaMetacritic": 69,
    "precoOriginal": 199.00,
    "preco": 149.00,
    "emPromocao": true,
    "desenvolvedora": "Undead Labs",
    "imagemCapa": "state_decay2.jpg"
  },
  {
    "id": 25,
    "nome": "Sekiro: Shadows Die Twice",
    "dataLancamento": "2019-03-22",
    "descricao": "Embarque numa jornada de vingança sangrenta pelo Japão do final dos anos 1500, no auge do violento período Sengoku. Você é o 'Lobo de Um Braço Só', um guerreiro desfigurado resgatado da beira da morte. Armado com uma mortal prótese shinobi equipada com diversas ferramentas e uma katana poderosa, o foco aqui é a agressividade e precisão. Destrua a postura de combate dos seus inimigos parando e desviando cada ataque num sistema de combate revolucionário para resgatar o seu mestre herdeiro que foi sequestrado.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Ação e Aventura",
    "tags": ["Souls-like", "Furtividade", "Samurai", "Difícil"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "18",
    "tamanhoGB": 25,
    "notaMetacritic": 90,
    "preco": 199.90,
    "emPromocao": false,
    "desenvolvedora": "FromSoftware",
    "imagemCapa": "sekiro.jpg"
  },
  {
    "id": 26,
    "nome": "Ratchet & Clank: Em Uma Outra Dimensão",
    "dataLancamento": "2021-06-11",
    "descricao": "A dupla intergaláctica mais famosa dos videogames retorna mais brilhante e explosiva do que nunca. Um imperador robótico maligno está conquistando mundos dimensionais e a própria malha do espaço-tempo está se rasgando. Alterne sem interrupções entre cenários e planetas caóticos enquanto descarrega um arsenal de armas malucas, criativas e espetaculares. Além de controlar Ratchet, você também jogará com Rivet, uma lombax fêmea da resistência de outra dimensão. Um verdadeiro espetáculo de plataforma para aproveitar no sofá.",
    "plataformas": ["PlayStation"],
    "genero": "Plataforma",
    "tags": ["Ação", "Tiro", "Ficção Científica", "Família"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "Livre",
    "tamanhoGB": 40,
    "notaMetacritic": 88,
    "preco": 349.90,
    "emPromocao": false,
    "desenvolvedora": "Insomniac Games",
    "imagemCapa": "ratchet.jpg"
  },
  {
    "id": 27,
    "nome": "Fable",
    "dataLancamento": "2025-10-01",
    "descricao": "O retorno de uma lenda! Albion reabre as portas com todo aquele charme, magia e senso de humor sombrio que você já conhece e ama. Crie e molde a vida do seu herói (ou vilão) através de decisões significativas num gigantesco RPG de ação recheado de personagens irreverentes, histórias extravagantes e um folclore que não se leva nem um pouco a sério. Torne-se forte balançando espadas gigantes ou resolva os problemas chutando galinhas — o nível do caos que moldará este mundo mágico está inteiramente nas suas mãos.",
    "plataformas": ["Xbox"],
    "genero": "RPG de Ação",
    "tags": ["Fantasia", "Humor", "Mundo Aberto", "Escolhas Importam"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "16",
    "tamanhoGB": 80,
    "notaMetacritic": 0,
    "preco": 349.00,
    "emPromocao": false,
    "desenvolvedora": "Playground Games",
    "imagemCapa": "fable.jpg"
  },
  {
    "id": 28,
    "nome": "Death Stranding Director's Cut",
    "dataLancamento": "2021-09-24",
    "descricao": "Do lendário criador Hideo Kojima, surge uma experiência revolucionária que desafia todos os gêneros estabelecidos. Após os eventos catastróficos do 'Death Stranding' abrirem uma porta entre o mundo dos vivos e dos mortos, criaturas espectrais da vida após a morte passam a vagar por um planeta devastado. Como Sam Bridges, o seu dever é restabelecer a comunicação cruzando um terreno brutal carregando os restos do futuro da humanidade em suas costas. A Director's Cut adiciona novas missões de combate e de furtividade, além de novas opções para organizar as entregas.",
    "plataformas": ["PlayStation"],
    "genero": "Ação",
    "tags": ["Exploração", "Ficção Científica", "Mundo Aberto", "Atmosférico"],
    "modosDeJogo": ["Singleplayer", "Multiplayer Assíncrono"],
    "classificacao": "16",
    "tamanhoGB": 70,
    "notaMetacritic": 85,
    "precoOriginal": 349.90,
    "preco": 249.90,
    "emPromocao": true,
    "desenvolvedora": "Kojima Productions",
    "imagemCapa": "death_stranding.jpg"
  },
  {
    "id": 29,
    "nome": "Grounded",
    "dataLancamento": "2022-09-27",
    "descricao": "O mundo é vasto, lindo e perigoso — especialmente quando você e seus amigos foram encolhidos para o tamanho de uma formiga! Neste jogo colaborativo de sobrevivência, o quintal de casa vira uma selva assustadora. Explore esconderijos imensos debaixo da grama, crie defesas ao redor da raiz da árvore de carvalho e lute para sobreviver às hordas de insetos gigantes liderados pelas letais Aranhas-lobo. Crie armaduras divertidas com folhas e cascos, monte armadilhas geniais e tente descobrir como voltar ao tamanho normal.",
    "plataformas": ["Xbox", "PlayStation"],
    "genero": "Sobrevivência",
    "tags": ["Construção", "Co-op", "Mundo Aberto", "Insetos"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "10",
    "tamanhoGB": 10,
    "notaMetacritic": 82,
    "preco": 199.00,
    "emPromocao": false,
    "desenvolvedora": "Obsidian Entertainment",
    "imagemCapa": "grounded.jpg"
  },
  {
    "id": 30,
    "nome": "Resident Evil 4",
    "dataLancamento": "2023-03-24",
    "descricao": "Um dos jogos mais reverenciados da história foi repensado do zero com recursos visuais absurdamente bonitos, controles modernos e um enredo aprimorado. Seis anos após o pesadelo em Raccoon City, o agente Leon S. Kennedy viaja para um recôndito e hostil vilarejo na Europa para resgatar a filha sequestrada do presidente americano. Encare cultistas ensandecidos movidos pelo temível parasita Las Plagas em confrontos muito intensos de gerenciamento de recursos, onde errar um único tiro de espingarda pode ser fatal.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Survival Horror",
    "tags": ["Ação", "Terror", "Remake", "Zumbis"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "18",
    "tamanhoGB": 60,
    "notaMetacritic": 93,
    "preco": 259.90,
    "emPromocao": false,
    "desenvolvedora": "Capcom",
    "imagemCapa": "re4_remake.jpg"
  },
  {
    "id": 31,
    "nome": "God of War (2018)",
    "dataLancamento": "2018-04-20",
    "descricao": "Sua vingança contra os Deuses do Olimpo é passado. Agora Kratos vive como um mortal nas terras sombrias dos monstros e deuses Nórdicos e age como guardião do seu filho Atreus. Este é um mundo implacável onde o protagonista deve lutar para sobreviver e, ao mesmo tempo, ensinar o filho a fazer o mesmo, impedindo-o de cometer os erros sedentos de sangue do Espartano. A fantástica câmera sem cortes permite uma imersão espetacular numa história sobre legado, divindade e paternidade brutal.",
    "plataformas": ["PlayStation"],
    "genero": "Ação e Aventura",
    "tags": ["Mitologia", "História Rica", "Hack and Slash", "Linear"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "18",
    "tamanhoGB": 45,
    "notaMetacritic": 94,
    "precoOriginal": 149.90,
    "preco": 99.90,
    "emPromocao": true,
    "desenvolvedora": "Santa Monica Studio",
    "imagemCapa": "gow_2018.jpg"
  },
  {
    "id": 32,
    "nome": "Halo: The Master Chief Collection",
    "dataLancamento": "2014-11-11",
    "descricao": "A jornada de Master Chief e a guerra contra a facção Covenant compiladas na maior coleção já oferecida num disco de videogame. Aproveite 6 jogos repletos de nostalgia e excelência: Halo: Reach, Combat Evolved Anniversary, Halo 2 Anniversary, Halo 3, Halo 3: ODST e Halo 4, tudo na mais alta taxa de quadros. Reviva a glória do modo multijogador competitivo com uma enorme coleção de todos os mapas já lançados na história da franquia, mantendo servidores lotados e divertidos.",
    "plataformas": ["Xbox"],
    "genero": "Tiro",
    "tags": ["FPS", "Ficção Científica", "Coletânea", "Competitivo"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "14",
    "tamanhoGB": 130,
    "notaMetacritic": 85,
    "precoOriginal": 249.00,
    "preco": 199.00,
    "emPromocao": true,
    "desenvolvedora": "343 Industries",
    "imagemCapa": "halo_mcc.jpg"
  },
  {
    "id": 33,
    "nome": "Assassin's Creed Valhalla",
    "dataLancamento": "2020-11-10",
    "descricao": "Torne-se Eivor, uma temível lenda viking criada por meio de contos de glória e batalha. Explore um belo e dinâmico mundo aberto construído sobre o pano de fundo da Idade das Trevas inglesa no século IX. Faça grandes invasões por rios em sua embarcação (Drakkar), lute com um sistema de combate repaginado permitindo usar machados com as duas mãos e faça sua própria comunidade viking crescer ganhando influência política para conquistar os reinos anglo-saxões num jogo imenso que garantirá mais de cem horas de diversão.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "RPG de Ação",
    "tags": ["Mundo Aberto", "Vikings", "Histórico", "Furtividade"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "18",
    "tamanhoGB": 110,
    "notaMetacritic": 80,
    "precoOriginal": 279.90,
    "preco": 199.90,
    "emPromocao": true,
    "desenvolvedora": "Ubisoft",
    "imagemCapa": "ac_valhalla.jpg"
  },
  {
    "id": 34,
    "nome": "Batman: Arkham Knight",
    "dataLancamento": "2015-06-23",
    "descricao": "No explosivo último capítulo da consagrada série Arkham, Batman encara a maior de todas as ameaças contra Gotham. O Espantalho retornou e uniu todos os supervilões do Asilo — incluindo o Pinguim, Duas-Caras, Arlequina e a misteriosa figura conhecida apenas como Arkham Knight — para eliminar definitivamente o Homem-Morcego. Além de gráficos de cair o queixo que simulam tempestades e o clima noir pesado da cidade, você finalmente poderá dirigir o icônico e indestrutível Batmóvel, que se transforma num verdadeiro tanque nas ruas de Gotham.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Ação e Aventura",
    "tags": ["Super-heróis", "Mundo Aberto", "Furtividade", "Investigação"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "16",
    "tamanhoGB": 60,
    "notaMetacritic": 87,
    "precoOriginal": 119.90,
    "preco": 89.90,
    "emPromocao": true,
    "desenvolvedora": "Rocksteady Studios",
    "imagemCapa": "batman_arkham.jpg"
  },
  {
    "id": 35,
    "nome": "DOOM Eternal",
    "dataLancamento": "2020-03-20",
    "descricao": "Os exércitos do inferno invadiram a Terra e mais da metade da população global já foi extinta. Torne-se o próprio Slayer da condenação e rasgue as criaturas demoníacas através de diversas dimensões para deter a destruição definitiva do mundo. O balé de sangue do DOOM retorna de forma indescritivelmente caótica: use um gancho de carne anexado à super escopeta para voar até os inimigos e lance-chamas no ombro para torrar capangas e recuperar vida, balas e escudo numa dança rápida, fluida e extasiante embalada por heavy metal pesadíssimo.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Tiro",
    "tags": ["FPS", "Ação Frenética", "Demônios", "Gore"],
    "modosDeJogo": ["Singleplayer", "Multiplayer"],
    "classificacao": "18",
    "tamanhoGB": 80,
    "notaMetacritic": 88,
    "preco": 149.90,
    "emPromocao": false,
    "desenvolvedora": "id Software",
    "imagemCapa": "doom_eternal.jpg"
  },
  {
    "id": 36,
    "nome": "Gran Turismo 7",
    "dataLancamento": "2022-03-04",
    "descricao": "Quer você seja um piloto experiente que adora colecionar relíquias do automobilismo ou se apenas curte modificar o design de carros velozes e curtir dezenas de minigames, a campanha clássica de Gran Turismo voltou para celebrar o romance e a história do automobilismo. Colecione, ajuste, acelere e personalize centenas de veículos incrivelmente detalhados num simulador que dita a referência para corridas modernas com tecnologias de traçado de raios (Ray-Tracing), som in-game que te diz se a pista está molhada ou seca e inteligência artificial realista.",
    "plataformas": ["PlayStation"],
    "genero": "Corrida",
    "tags": ["Simulação", "Esportes", "Competitivo", "Realista"],
    "modosDeJogo": ["Singleplayer", "Multiplayer"],
    "classificacao": "Livre",
    "tamanhoGB": 120,
    "notaMetacritic": 87,
    "preco": 349.90,
    "emPromocao": false,
    "desenvolvedora": "Polyphony Digital",
    "imagemCapa": "gt7.jpg"
  },
  {
    "id": 37,
    "nome": "Senua's Saga: Hellblade II",
    "dataLancamento": "2024-05-21",
    "descricao": "Nesta sequência aclamada mundialmente pelo uso de tecnologias fotorrealistas de ponta da Unreal Engine 5, Senua retorna para o brutal mito de sobrevivência através da dura Islândia viking do século X. Determinada a salvar as vítimas dos horrores infligidos pela tirania despótica de sua terra, Senua continua a enfrentar as terríveis batalhas travadas não só fora de seu corpo contra guerreiros cruéis, mas também dentro da própria mente através das perigosas e alucinantes vozes de sua psicose. Use fones de ouvido para uma experiência de som 3D perturbadora e inesquecível.",
    "plataformas": ["Xbox"],
    "genero": "Ação e Aventura",
    "tags": ["Psicológico", "Narrativa", "Fantasia Sombria", "Linear"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "18",
    "tamanhoGB": 50,
    "notaMetacritic": 81,
    "preco": 249.00,
    "emPromocao": false,
    "desenvolvedora": "Ninja Theory",
    "imagemCapa": "hellblade2.jpg"
  },
  {
    "id": 38,
    "nome": "It Takes Two",
    "dataLancamento": "2021-03-26",
    "descricao": "Embarque numa jornada de cair o queixo construída pura e exclusivamente para ser jogada a dois. Jogue no papel do casal conturbado Cody e May, dois humanos que foram magicamente transformados em bonequinhos de pano. Presos em um mundo fantástico onde o inexplicável se esconde em cada cantinho, eles são desafiados a superar a fraturada relação que possuem e se ajudar em mecânicas completamente criativas a cada fase. Convide qualquer pessoa para jogar a campanha com você via Passe de Amigo Online (gratuitamente).",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Aventura",
    "tags": ["Co-op", "Plataforma", "Quebra-cabeça", "Família"],
    "modosDeJogo": ["Co-op"],
    "classificacao": "12",
    "tamanhoGB": 45,
    "notaMetacritic": 89,
    "precoOriginal": 249.90,
    "preco": 199.90,
    "emPromocao": true,
    "desenvolvedora": "Hazelight Studios",
    "imagemCapa": "it_takes_two.jpg"
  },
  {
    "id": 39,
    "nome": "Final Fantasy VII Rebirth",
    "dataLancamento": "2024-02-29",
    "descricao": "O aguardado segundo capítulo da trilogia remake de uma das obras-primas da cultura pop. Após escaparem da gigantesca e distópica cidade de Midgar, o ex-soldado mercenário Cloud e seus valorosos amigos (Tifa, Barret, Aerith e Red XIII) caem na estrada em busca da maior e mais ameaçadora figura deste planeta: Sephiroth. Embarque em missões espetaculares pelas vastas e luxuriantes regiões do planeta Gaia, corra com chocobos vibrantes, crie táticas mágicas incríveis baseadas em Materias e encante-se com horas de dezenas de minigames fantásticos.",
    "plataformas": ["PlayStation"],
    "genero": "RPG de Ação",
    "tags": ["Mundo Aberto", "Fantasia", "Grupo", "História Rica"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "14",
    "tamanhoGB": 145,
    "notaMetacritic": 92,
    "preco": 349.90,
    "emPromocao": false,
    "desenvolvedora": "Square Enix",
    "imagemCapa": "ff7_rebirth.jpg"
  },
  {
    "id": 40,
    "nome": "Age of Empires IV",
    "dataLancamento": "2021-10-28",
    "descricao": "Uma das franquias de estratégia em tempo real mais queridas de todos os tempos retorna trazendo incríveis formas e batalhas épicas no conforto do seu controle de Xbox. Apresentando mecânicas baseadas em fatos e documentários do mundo real (com vídeos em 4k reais do The History Channel entre cada missão), crie táticas e lidere impérios grandiosos até a glória e a sobrevivência — desde os ingleses, chineses modernos até o grande Sultanato de Délhi — construindo castelos impenetráveis, coletando madeira e administrando ouro de forma meticulosa e cirúrgica.",
    "plataformas": ["Xbox"],
    "genero": "Estratégia",
    "tags": ["RTS", "Histórico", "Gestão", "Competitivo"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "12",
    "tamanhoGB": 50,
    "notaMetacritic": 81,
    "precoOriginal": 249.00,
    "preco": 199.00,
    "emPromocao": true,
    "desenvolvedora": "Relic Entertainment",
    "imagemCapa": "aoe4.jpg"
  },
  {
    "id": 41,
    "nome": "Hogwarts Legacy",
    "dataLancamento": "2023-02-10",
    "descricao": "Você finalmente recebeu a sua carta de aceitação, mas o ano letivo é por volta dos anos 1800. Vivencie a magia de Hogwarts e do Mundo Bruxo em um imersivo e espetacular RPG de ação ambientado quase 100 anos antes do Menino Que Sobreviveu colocar os pés na escola. Crie seu próprio bruxo adolescente, passe pelo Chapéu Seletor, assista às maravilhosas aulas de poções e defesas contras as artes das trevas, dome hipogrifos no gigantesco mapa aberto ao redor do castelo e lute contra bruxos nefastos enquanto guarda o segredo da perigosa magia ancestral.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "RPG de Ação",
    "tags": ["Mundo Aberto", "Magia", "Fantasia", "Customização"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "12",
    "tamanhoGB": 85,
    "notaMetacritic": 84,
    "preco": 299.90,
    "emPromocao": false,
    "desenvolvedora": "Avalanche Software",
    "imagemCapa": "hogwarts_legacy.jpg"
  },
  {
    "id": 42,
    "nome": "Uncharted 4: A Thief's End",
    "dataLancamento": "2016-05-10",
    "descricao": "Três anos após os eventos do terceiro jogo, o nosso caçador de fortunas Nathan Drake deixou de vez o mundo de ladrões para ter uma vida pacata. Porém, o destino bate violentamente à sua porta quando Sam, seu irmão considerado morto, ressurge de repente pedindo ajuda desesperada para salvar a própria vida. A promessa é tentadora: caçar o maior tesouro e espólio dos piratas de Libertalia. Esta aventura globetrotting fantástica e graficamente belíssima ditará os testes finais não só do vigor físico de Nathan, mas os sacrifícios dolorosos da sua vida pessoal.",
    "plataformas": ["PlayStation"],
    "genero": "Ação e Aventura",
    "tags": ["Exploração", "Tiro", "História Rica", "Linear"],
    "modosDeJogo": ["Singleplayer", "Multiplayer"],
    "classificacao": "14",
    "tamanhoGB": 65,
    "notaMetacritic": 93,
    "precoOriginal": 149.90,
    "preco": 99.90,
    "emPromocao": true,
    "desenvolvedora": "Naughty Dog",
    "imagemCapa": "uncharted4.jpg"
  },
  {
    "id": 43,
    "nome": "Psychonauts 2",
    "dataLancamento": "2021-08-25",
    "descricao": "Misturando missões completamente inusitadas com quebra-cabeças muito bem elaborados e conspirações secretas, Razputin, o carismático garoto acrobata e superpoderoso telepata, enfim consegue entrar na sede secreta de espionagem mundial conhecida como Psiconautas. Porém a organização não anda nada bem com rumores de uma grande figura nefasta querendo trazer de volta à vida os velhos necromantes do crime mundial. Pule, role e use levitação telepática nesta super e colorida homenagem de plataforma aos mundos imaginativos da nossa própria saúde mental.",
    "plataformas": ["Xbox", "PlayStation"],
    "genero": "Plataforma",
    "tags": ["Aventura 3D", "Comédia", "Surreal", "Colecionathon"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "10",
    "tamanhoGB": 30,
    "notaMetacritic": 87,
    "preco": 249.00,
    "emPromocao": false,
    "desenvolvedora": "Double Fine Productions",
    "imagemCapa": "psychonauts2.jpg"
  },
  {
    "id": 44,
    "nome": "Call of Duty: Modern Warfare III",
    "dataLancamento": "2023-11-10",
    "descricao": "O Capitão John Price, Gaz, Soap e Ghost estão de volta na grandiosa continuação focada em deter as ações cada vez mais agressivas e mundiais do ultranacionalista e temível Vladimir Makarov, o vilão supremo das franquias. A Força-Tarefa 141 atuará nas trevas e será forçada a lutar até o limite para evitar que o planeta entre no colapso trágico da Terceira Guerra Mundial. Além do frenesi competitivo famoso que todos amam com a movimentação lisa de mapas icônicos refeitos, há agora uma imensa e aberta área de zumbis multijogador.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Tiro",
    "tags": ["FPS", "Militar", "Competitivo", "Zumbis"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Co-op"],
    "classificacao": "18",
    "tamanhoGB": 140,
    "notaMetacritic": 56,
    "preco": 349.90,
    "emPromocao": false,
    "desenvolvedora": "Sledgehammer Games",
    "imagemCapa": "cod_mw3.jpg"
  },
  {
    "id": 45,
    "nome": "Spider-Man: Miles Morales",
    "dataLancamento": "2020-11-12",
    "descricao": "Na nova (e maravilhosa) era focada numa gelada Nova York em época de Natal, o adolescente afro-latino Miles Morales descobre que sua aranha deu a ele superpoderes completamente diferentes e ainda mais perigosos que os de seu mentor, Peter Parker. Tendo que proteger o bairro quente do Harlem nas ausências do grande Homem Aranha Original e precisando encarar sozinho a gigantesca megacorporação tecnológica corrupta da Roxxon, Miles vai mergulhar fundo nos dilemas maravilhosos sobre como amadurecer a própria personalidade ao herdar grandes responsabilidades nas costas.",
    "plataformas": ["PlayStation"],
    "genero": "Ação e Aventura",
    "tags": ["Mundo Aberto", "Super-heróis", "Combate Fluido", "História Rica"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "14",
    "tamanhoGB": 50,
    "notaMetacritic": 85,
    "precoOriginal": 349.90,
    "preco": 249.90,
    "emPromocao": true,
    "desenvolvedora": "Insomniac Games",
    "imagemCapa": "miles_morales.jpg"
  },
  {
    "id": 46,
    "nome": "Quantum Break",
    "dataLancamento": "2016-04-05",
    "descricao": "Neste aclamadíssimo misto ambicioso e bizarro entre série live-action interativa estilo televisão real com seriados hollywoodianos de alta qualidade e com um enredo espetacular de ficção, assuma o personagem interpretado pelo ator real e icônico Shawn Ashmore na pele de Jack Joyce. Quando uma complexa máquina do tempo universitária dá defeito quebrando severamente a continuidade do tempo mundial em pedaços e fraturas, use superpoderes como frear o tempo contra agentes fortemente armados para evitar uma hecatombe total e inescapável que destruirá tudo o que existe.",
    "plataformas": ["Xbox"],
    "genero": "Ação",
    "tags": ["Ficção Científica", "Viagem no Tempo", "Narrativa", "Tiro"],  
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "16",
    "tamanhoGB": 60,
    "notaMetacritic": 77,
    "precoOriginal": 149.00,
    "preco": 99.00,
    "emPromocao": true,
    "desenvolvedora": "Remedy Entertainment",
    "imagemCapa": "quantum_break.jpg"
  },
  {
    "id": 47,
    "nome": "Control: Ultimate Edition",
    "dataLancamento": "2021-02-02",
    "descricao": "Depois que um terrível fenômeno extradimensional sem face e completamente maligno invade covardemente as entranhas da importantíssima Agência Federal de Controle e Controle (FBC) dos EUA em Nova York, você assume os sapatos misteriosos de Jesse Faden (que foi eleita por conta própria não só heroína como nova Agente Diretora Federal no caos total) enquanto aprende e se fortalece brutalmente controlando superpoderes que variam da brutal telecinese de arrancar pedras das paredes e arremessar mobílias a de dar pulos flutuantes, controlando e resolvendo enigmáticos puzzles paranormais gigantes.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Ação e Aventura",
    "tags": ["Metroidvania", "Sobrenatural", "Ficção Científica", "Terceira Pessoa"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "16",
    "tamanhoGB": 45,
    "notaMetacritic": 85,
    "precoOriginal": 199.90,
    "preco": 149.90,
    "emPromocao": true,
    "desenvolvedora": "Remedy Entertainment",
    "imagemCapa": "control.jpg"
  },
  {
    "id": 48,
    "nome": "Stray",
    "dataLancamento": "2022-07-19",
    "descricao": "Solitário, perdido misteriosamente de sua matilha em meio a chuva e completamente separado do seu lar através da dolorosa parede de muralhas do subsolo esquecido do planeta, o pequeno, silencioso mas carismático gatinho vira-lata, precisa desvendar as obscuras revelações deixadas pelo tempo antigo em meio a distritos e neons apagados de cibercidades longes. Mije nos tapetes digitais dos simpáticos e carentes androides depressivos robóticos que agora moram abandonados na cidade, derrube objetos da prateleira com a patinha despretensiosa, miê no botão certo e evite ratos de pura luz bacteriana alienígena.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Aventura",
    "tags": ["Cyberpunk", "Quebra-cabeça", "Exploração", "Linear"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "10",
    "tamanhoGB": 10,
    "notaMetacritic": 83,
    "preco": 149.90,
    "emPromocao": false,
    "desenvolvedora": "BlueTwelve Studio",
    "imagemCapa": "stray.jpg"
  },
  {
    "id": 49,
    "nome": "Detroit: Become Human",
    "dataLancamento": "2018-05-25",
    "descricao": "Numa utópica (e ao mesmo passo distópica) cidade vizinha moderna e realistica do ano distante de 2038 nas terras de Michigan, os engenheiros finalmente aprenderam a como criar andróides de fibra óptica em série para tarefas simples de rotina mundana pesada para os humanos da vida social complexa. Mas a revolução se torna tensa quando as máquinas do caos e a submissão abrem falhas na consciência humana para uma verdadeira consciência autoconsciente. Controle de vez a jornada pesadíssima através dos dramas dos andróides detetives Connor, Cara e Marcus numa imensa árvore de bifurcação literária narrativa onde qualquer decisão menor sua ditará brutalmente não apenas quem dos amigos morre em prol de um erro humano trágico, mas até mesmo o próprio futuro caótico do planeta terra real que se reergue como civilização num roteiro brilhante estilo cinema.",
    "plataformas": ["PlayStation"],
    "genero": "Aventura Narrativa",
    "tags": ["Ficção Científica", "Escolhas Importam", "Cyberpunk", "Investigação"],
    "modosDeJogo": ["Singleplayer"],
    "classificacao": "16",
    "tamanhoGB": 55,
    "notaMetacritic": 78,
    "precoOriginal": 199.90,
    "preco": 149.90,
    "emPromocao": true,
    "desenvolvedora": "Quantic Dream",
    "imagemCapa": "detroit.jpg"
  },
  {
    "id": 50,
    "nome": "Mortal Kombat 1",
    "dataLancamento": "2023-09-19",
    "descricao": "Após sua sangrenta e magnífica ascensão e conquista na forma majestosa de divindade cósmica como o super Deus de Fogo e das Forças Primordiais do Tempo, Liu Kang reiniciou não somente todas as terras como resetou e reinstituiu inteiramente toda e qualquer ordem conhecida num grandioso universo perfeitamente apaziguado dos velhos amigos eternos rivais e novos parentes mortais, unindo Raiden contra sub-zero e Scorpion em prol das batalhas agora com os novíssimos combates de auxílio em duplas Kameo brutais para uma arena gloriosa que vai transbordar e arrancar litros incontáveis de carnificina numa beleza e realismo incrivelmente nojentos e majestosos que somente o maior lutador competitivo das telonas pode oferecer para esmagar nos controles pesados.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Luta",
    "tags": ["Artes Marciais", "Gore", "Competitivo", "Multiplayer Local"],
    "modosDeJogo": ["Singleplayer", "Multiplayer", "Local Co-op"],
    "classificacao": "18",
    "tamanhoGB": 100,
    "notaMetacritic": 83,
    "preco": 299.90,
    "emPromocao": false,
    "desenvolvedora": "NetherRealm Studios",
    "imagemCapa": "mk1.jpg"
  },
  {
    "id": 51,
    "nome": "Red Dead Redemption",
    "dataLancamento": "2010-05-18",
    "descricao": "Um dos clássicos mundiais que definiu por conta inteira como amamos grandes games. Neste épico e aterrorizante bang-bang atemporal sob os grandiosos desertos de fronteiras mexicanas da morte nas mãos dos últimos cartéis, jogue incansavelmente na pele icônica, velha de guerra e eternizada lenda de John Marston que foi violentamente coagido sob as amarras do impiedoso governo central a matar antigos amigos de longa data no fim mortal dos velhos homens livres numa tragédia emocionante sem precedentes que conta de fato o preço sangrento de tentar pagar e lavar toda sua dívida suja deixada pela vida nos dias escuros.",
    "plataformas": ["PlayStation", "Xbox"],
    "genero": "Ação e Aventura",
    "tags": ["Mundo Aberto", "Faroeste", "Tiro", "História Rica"],
    "modosDeJogo": ["Singleplayer", "Multiplayer"],
    "classificacao": "18",
    "tamanhoGB": 10,
    "notaMetacritic": 95,
    "precoOriginal": 249.90,
    "preco": 149.90,
    "emPromocao": true,
    "desenvolvedora": "Rockstar Games",
    "imagemCapa": "rdr1.jpg"
  }
]`;

/* Loja */

const games = JSON.parse(jogosJSON);
const shopContent = document.querySelector(".shop-content");
const buttonsFilter = document.querySelectorAll(".buttons-shop-filter button");

//Componentes:

const ConverterParaReal = (valor) => {
  const valorConvertido = valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return valorConvertido;
};

const fecharModal = () => {
          if (document.body.contains(BuyContentCardInfos)) {
            document.body.removeChild(BuyContentCardInfos);
            document.body.classList.remove("no-scroll");
            // Limpamos o ouvinte do teclado para ele não ficar rodando de fundo
            document.removeEventListener("keydown", fecharComEsc);
          }
        };

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RenderizarJogos = async (Jogos) => {
  shopContent.innerHTML = "";

  for (let game of Jogos) {
    // ==========================================
    // 1. ESTRUTURA DO CARD DO JOGO
    // ==========================================
    const contentCard = document.createElement("div");
    contentCard.classList.add("card-content");

        // --- Imagem do Card ---
        const cardImage = document.createElement("img");
        cardImage.classList.add("image-card");
        cardImage.src = game.imagemCapa;
        cardImage.alt = game.nome;
        contentCard.appendChild(cardImage);

        // --- Textos do Card ---
        const CardTextsContent = document.createElement("div");
        CardTextsContent.classList.add("card-texts-content");
        contentCard.appendChild(CardTextsContent);

            const titleCard = document.createElement("h1");
            titleCard.classList.add("title-card");
            titleCard.textContent = game.nome;
            CardTextsContent.appendChild(titleCard);

            const DevEnterpriseCard = document.createElement("h2");
            DevEnterpriseCard.classList.add("enterprise-card");
            DevEnterpriseCard.textContent = game.desenvolvedora;
            CardTextsContent.appendChild(DevEnterpriseCard);

            const buttonBuyCard = document.createElement("button");
            buttonBuyCard.classList.add("button-buy-card");
            buttonBuyCard.textContent = "Comprar";
            CardTextsContent.appendChild(buttonBuyCard);

        // --- Preços do Card ---
        const precoCardContent = document.createElement("div");
        precoCardContent.classList.add("preco-card-content");
        contentCard.appendChild(precoCardContent);

            const precoOriginalCard = document.createElement("h3");
            precoOriginalCard.classList.add("preco-original-card");

            const precoCard = document.createElement("h3");
            precoCard.classList.add("preco-card");

            if (game.emPromocao && game.precoOriginal) {
              const percentPrice = Math.round(((game.precoOriginal - game.preco) / game.precoOriginal) * 100);
              precoOriginalCard.textContent = `${ConverterParaReal(game.precoOriginal)}`;
              precoCard.textContent = `${ConverterParaReal(game.preco)} `;
              
              precoCardContent.appendChild(precoOriginalCard);
              precoCardContent.appendChild(precoCard);
            } else {
              precoCard.textContent = ConverterParaReal(game.preco);
              precoCardContent.appendChild(precoCard);
            }

        // Variável criada no seu código original, mas não anexada ao DOM:
        const consoleIconsContent = document.createElement("div");
        consoleIconsContent.classList.add("console-icons-content");


    // ==========================================
    // 2. ESTRUTURA DO MODAL DE COMPRA
    // ==========================================
    const BuyContentCardInfos = document.createElement("div");
    BuyContentCardInfos.classList.add("buy-content");

            const BuyBoxCardInfos = document.createElement("div");
            BuyBoxCardInfos.classList.add("buy-content-box");
            BuyContentCardInfos.appendChild(BuyBoxCardInfos);

            //Classificação Indicativa:
            const imageLivre = "../../assets/images/Livre.png"
            const image6 = "../../assets/images/6y.png"
            const image10 = "../../assets/images/10y.png"
            const image12 = "../../assets/images/12y.png"
            const image14 = "../../assets/images/14y.png"
            const image16 = "../../assets/images/16y.png"
            const image18 = "../../assets/images/18y.png"
                
            const ImageCLassification = document.createElement("img")
            switch (game.classificacao) {
              case "Livre":
                ImageCLassification.src = imageLivre
                break
              case "6":
                ImageCLassification.src = image6
                break
              case "10":
                ImageCLassification.src = image10
                break
              case "12":
                ImageCLassification.src = image12
                break
              case "14":
                ImageCLassification.src = image14
                break
              case "16":
                ImageCLassification.src = image16
                break
              case "18":
                ImageCLassification.src = image18
                break
            }
            ImageCLassification.classList.add("image-classification")
            BuyBoxCardInfos.appendChild(ImageCLassification)

            // --- Imagem do Modal ---
            const imageBuyBox = document.createElement("img");
            imageBuyBox.classList.add("image-buy-box");
            imageBuyBox.src = game.imagemCapa;
            BuyBoxCardInfos.appendChild(imageBuyBox);

            // --- Caixa de Textos do Modal ---
            const contentTextsBuyBox = document.createElement("div");
            contentTextsBuyBox.classList.add("content-texts-buy-box");
            BuyBoxCardInfos.appendChild(contentTextsBuyBox);

                // Botão de Fechar
                const buttonExitBoxBuy = document.createElement("button");
                buttonExitBoxBuy.classList.add("button-exit-box-buy");
                buttonExitBoxBuy.textContent = "x";
                contentTextsBuyBox.appendChild(buttonExitBoxBuy);

                // Cabeçalho do Modal
                const headerContentTextsBuyBox = document.createElement("div");
                headerContentTextsBuyBox.classList.add("header-box-buy");
                contentTextsBuyBox.appendChild(headerContentTextsBuyBox);

                    const NameGameBoxBuy = document.createElement("h1");
                    NameGameBoxBuy.classList.add("name-game-box");
                    NameGameBoxBuy.textContent = game.nome;
                    headerContentTextsBuyBox.appendChild(NameGameBoxBuy);

                    const DevGameBoxBuy = document.createElement("h2");
                    DevGameBoxBuy.classList.add("dev-game-box-infos");
                    DevGameBoxBuy.textContent = game.desenvolvedora;
                    headerContentTextsBuyBox.appendChild(DevGameBoxBuy);

                // Conteúdo Principal do Modal
                const InfosGameBuyBox = document.createElement("div");
                InfosGameBuyBox.classList.add("infos-game-box-buy");
                contentTextsBuyBox.appendChild(InfosGameBuyBox);

                    // Sessão da Sinopse
                    const DescriptionInfoContent = document.createElement("div");
                    DescriptionInfoContent.classList.add("description-info-content");
                    InfosGameBuyBox.appendChild(DescriptionInfoContent);

                        const DescriptionTitleGameBoxBuy = document.createElement("h2");
                        DescriptionTitleGameBoxBuy.classList.add("titles-infos-card-box");
                        DescriptionTitleGameBoxBuy.textContent = "Sinopse:";
                        DescriptionInfoContent.appendChild(DescriptionTitleGameBoxBuy);

                        const DescriptionGameBoxBuy = document.createElement("h3");
                        DescriptionGameBoxBuy.classList.add("description-game-box-infos");
                        DescriptionGameBoxBuy.textContent = game.descricao;
                        DescriptionInfoContent.appendChild(DescriptionGameBoxBuy);

                    // Sessão de Informações Extras
                    const InfosContentBox = document.createElement("div");
                    InfosContentBox.classList.add("infos-content-box");
                    InfosGameBuyBox.appendChild(InfosContentBox);

                        const InfosTitleGameBoxBuy = document.createElement("h2");
                        InfosTitleGameBoxBuy.classList.add("titles-infos-card-box");
                        InfosTitleGameBoxBuy.textContent = "Informações:";
                        InfosContentBox.appendChild(InfosTitleGameBoxBuy);

                        const InfosGameContent = document.createElement("div");
                        InfosGameContent.classList.add("content-info-box");
                        InfosContentBox.appendChild(InfosGameContent);

                            // Data de Lançamento
                            const ContentDate = document.createElement("div");
                            ContentDate.classList.add("contents-infos-tip");
                            InfosGameContent.appendChild(ContentDate);

                                const ImageDate = document.createElement("img");
                                ImageDate.classList.add("images-infos-tip");
                                ImageDate.src = "../../assets/images/calendario.png";
                                ContentDate.appendChild(ImageDate);

                                const DataGameBoxBuy = document.createElement("time");
                                DataGameBoxBuy.classList.add("data-game-box-infos", "data-lancamento");
                                const [ano, mes, dia] = game.dataLancamento.split("-");
                                DataGameBoxBuy.setAttribute("datetime", game.dataLancamento);
                                DataGameBoxBuy.textContent = `Lançamento: ${dia}/${mes}/${ano}`;
                                ContentDate.appendChild(DataGameBoxBuy);

                            // Tamanho em GB
                            const ContentGB = document.createElement("div");
                            ContentGB.classList.add("contents-infos-tip");
                            InfosGameContent.appendChild(ContentGB);

                                const ImageGB = document.createElement("img");
                                ImageGB.classList.add("images-infos-tip");
                                ImageGB.src = "../../assets/images/download.png";
                                ContentGB.appendChild(ImageGB);

                                const tamanhoGameBoxBuy = document.createElement("p");
                                tamanhoGameBoxBuy.textContent = `Tamanho: ${game.tamanhoGB}GB`;
                                ContentGB.appendChild(tamanhoGameBoxBuy);

                        // Tags
                        const contentTags = document.createElement("div")
                        contentTags.classList.add("content-tags")
                        InfosContentBox.appendChild(contentTags)

                          const TitleTags = document.createElement("h1")
                          TitleTags.classList.add("title-tags")
                          TitleTags.textContent = "Tags:"
                          contentTags.appendChild(TitleTags)

                          const TagContent = document.createElement("div")
                          TagContent.classList.add("tag-content")
                          contentTags.appendChild(TagContent)

                            for (let tag of game.tags) {
                              const tagcard = document.createElement("p")
                              tagcard.classList.add("tag-card")
                              tagcard.textContent = tag
                              TagContent.appendChild(tagcard)
                            }
                  
                /* {
                  "id": 51,
                  "nome": "Red Dead Redemption",
                  "dataLancamento": "2010-05-18",
                  "descricao": "Um dos clássicos mundiais que definiu por conta inteira como amamos grandes games. Neste épico e aterrorizante bang-bang atemporal sob os grandiosos desertos de fronteiras mexicanas da morte nas mãos dos últimos cartéis, jogue incansavelmente na pele icônica, velha de guerra e eternizada lenda de John Marston que foi violentamente coagido sob as amarras do impiedoso governo central a matar antigos amigos de longa data no fim mortal dos velhos homens livres numa tragédia emocionante sem precedentes que conta de fato o preço sangrento de tentar pagar e lavar toda sua dívida suja deixada pela vida nos dias escuros.",
                  "plataformas": ["PlayStation", "Xbox"],
                  "genero": "Ação e Aventura",
                  "tags": ["Mundo Aberto", "Faroeste", "Tiro", "História Rica"],
                  "modosDeJogo": ["Singleplayer", "Multiplayer"],
                  "classificacao": "18",
                  "tamanhoGB": 10,
                  "notaMetacritic": 95,
                  "precoOriginal": 249.90,
                  "preco": 149.90,
                  "emPromocao": true,
                  "desenvolvedora": "Rockstar Games",
                  "imagemCapa": "rdr1.jpg"
                } */

                // Variáveis criadas no seu código original, mas não anexadas ao DOM:
                const GeneroGameBoxBuy = document.createElement("h2");
                GeneroGameBoxBuy.classList.add("genero-game-box-infos");

                const MetacriticGameBoxBuy = document.createElement("h1");
                MetacriticGameBoxBuy.classList.add("metacritic-note");
                MetacriticGameBoxBuy.textContent = game.notaMetacritic;



    // ==========================================
    // 3. EVENTOS E INSERÇÃO FINAL NO DOM
    // ==========================================
    
    const Fechar = () => {
      if (document.body.contains(BuyContentCardInfos)) {
        document.body.removeChild(BuyContentCardInfos)
        document.body.classList.remove("no-scroll")
        document.removeEventListener("keydown", fecharEsc)
      }
    }

    const fecharEsc = (event) => {
      if(event.key === "Escape") {
        Fechar()
      }
    }

    // Evento de abrir o modal
    buttonBuyCard.addEventListener("click", (event) => {
      document.body.appendChild(BuyContentCardInfos);
      document.body.classList.add("no-scroll");
      document.addEventListener("keydown", fecharEsc)
    });

    buttonExitBoxBuy.addEventListener("click", Fechar)

    // Anexando o Card pronto na Loja
    shopContent.appendChild(contentCard);
  }
};

buttonsFilter.forEach((button) => {
  button.addEventListener("click", (event) => {
    let jogosFiltrados = [];
    const categoria = event.target.textContent;

    if (categoria === "Todos") {
      jogosFiltrados = games;
    } else if (categoria === "PlayStation") {
      jogosFiltrados = games.filter((game) =>
        game.plataformas.includes("PlayStation"),
      );
    } else if (categoria === "Xbox") {
      jogosFiltrados = games.filter((game) =>
        game.plataformas.includes("Xbox"),
      );
    } else if (categoria === "Promoções") {
      jogosFiltrados = games.filter((game) => game.emPromocao === true);
    }

    RenderizarJogos(jogosFiltrados);
  });
});

RenderizarJogos(games);

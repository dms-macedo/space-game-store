const navprofile = document.querySelector(".hide-nav-profile");
const avatarimageprofile = document.querySelector("header nav img");

// Garante que o menu comece escondido quando a página carrega
navprofile.style.display = "none";

// Criamos uma única função para o clique
const toggleMenu = () => {
  if (navprofile.style.display === "none" || navprofile.style.display === "") {
    navprofile.style.display = "grid";
  } else {
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

const jogosJSON = `[
  {
    "id": 1,
    "nome": "God of War Ragnarök",
    "dataLancamento": "2022-11-09",
    "descricao": "Kratos e Atreus embarcam em uma jornada mítica e profundamente emocional...",
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
    "imagemCapa": "./assets/images/god-of-war-ragnarok.png"
  },
  {
    "id": 2,
    "nome": "Red Dead Redemption 2",
    "dataLancamento": "2018-10-26",
    "descricao": "Uma narrativa épica sobre honra e lealdade...",
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
    "imagemCapa": "./assets/images/red-dead-redemption-2.jpg"
  },
  {
    "id": 3,
    "nome": "Minecraft: Bedrock Edition",
    "dataLancamento": "2011-11-18",
    "descricao": "Prepare-se para uma aventura de possibilidades infinitas...",
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
    "imagemCapa": "./assets/images/minecraft.png"
  },
  {
    "id": 4,
    "nome": "Halo Infinite",
    "dataLancamento": "2021-12-08",
    "descricao": "Quando a esperança é perdida...",
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
    "imagemCapa": "./assets/images/halo_infinite.jpg"
  },
  {
    "id": 5,
    "nome": "Marvel's Spider-Man 2",
    "dataLancamento": "2023-10-20",
    "descricao": "A cidade de Nova York está maior e mais vibrante do que nunca...",
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
    "imagemCapa": "./assets/images/marvels-spider-man-2.jpg"
  },
  {
    "id": 6,
    "nome": "Marvel's Avengers",
    "dataLancamento": "2020-09-04",
    "descricao": "Após uma tragédia no Dia A...",
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
    "imagemCapa": "./assets/images/avengers.jpg"
  },
  {
    "id": 7,
    "nome": "Forza Horizon 5",
    "dataLancamento": "2021-11-09",
    "descricao": "Pegue o volante das centenas dos melhores carros...",
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
    "imagemCapa": "./assets/images/forza5.jpg"
  },
  {
    "id": 8,
    "nome": "Elden Ring",
    "dataLancamento": "2022-02-25",
    "descricao": "Levante-se, Maculado...",
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
    "imagemCapa": "./assets/images/eldenring.jpg"
  },
  {
    "id": 9,
    "nome": "The Last of Us Part I",
    "dataLancamento": "2022-09-02",
    "descricao": "Experimente a narrativa emocional que definiu uma geração...",
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
    "imagemCapa": "./assets/images/tlou1.jpg"
  },
  {
    "id": 10,
    "nome": "Starfield",
    "dataLancamento": "2023-09-06",
    "descricao": "No ano de 2330, a humanidade se aventurou além...",
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
    "imagemCapa": "./assets/images/starfield.jpg"
  },
  {
    "id": 11,
    "nome": "Cyberpunk 2077",
    "dataLancamento": "2020-12-10",
    "descricao": "Torne-se V, um mercenário urbano...",
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
    "imagemCapa": "./assets/images/cyberpunk.jpg"
  },
  {
    "id": 12,
    "nome": "The Witcher 3: Wild Hunt",
    "dataLancamento": "2015-05-19",
    "descricao": "Assuma o papel de Geralt de Rívia...",
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
    "imagemCapa": "./assets/images/witcher3.jpg"
  },
  {
    "id": 13,
    "nome": "Ghost of Tsushima",
    "dataLancamento": "2020-07-17",
    "descricao": "No final do século 13, o império mongol destruiu nações...",
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
    "imagemCapa": "./assets/images/ghost_tsushima.jpg"
  },
  {
    "id": 14,
    "nome": "Gears 5",
    "dataLancamento": "2019-09-10",
    "descricao": "Com o mundo desmoronando sob a fúria do enxame...",
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
    "imagemCapa": "./assets/images/gears5.jpg"
  },
  {
    "id": 15,
    "nome": "Horizon Forbidden West",
    "dataLancamento": "2022-02-18",
    "descricao": "Junte-se à audaciosa guerreira Aloy...",
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
    "imagemCapa": "./assets/images/horizon_fw.jpg"
  },
  {
    "id": 16,
    "nome": "Sea of Thieves",
    "dataLancamento": "2018-03-20",
    "descricao": "O mar chama por você neste simulador definitivo de pirataria...",
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
    "imagemCapa": "./assets/images/sea_of_thieves.jpg"
  },
  {
    "id": 17,
    "nome": "Bloodborne",
    "dataLancamento": "2015-03-24",
    "descricao": "Viaje para a antiga e macabra cidade de Yharnam...",
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
    "imagemCapa": "./assets/images/bloodborne.jpg"
  },
  {
    "id": 18,
    "nome": "Ori and the Will of the Wisps",
    "dataLancamento": "2020-03-11",
    "descricao": "O pequeno espírito Ori não é estranho ao perigo...",
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
    "imagemCapa": "./assets/images/ori.jpg"
  },
  {
    "id": 19,
    "nome": "Demon's Souls",
    "dataLancamento": "2020-11-12",
    "descricao": "Mergulhe nas origens do gênero Souls-like...",
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
    "imagemCapa": "./assets/images/demons_souls.jpg"
  },
  {
    "id": 20,
    "nome": "Microsoft Flight Simulator",
    "dataLancamento": "2020-08-18",
    "descricao": "Viaje o planeta todo neste simulador fotorrealista...",
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
    "imagemCapa": "./assets/images/flight_sim.jpg"
  },
  {
    "id": 21,
    "nome": "Grand Theft Auto V",
    "dataLancamento": "2013-09-17",
    "descricao": "Quando um jovem malandro que vive nas ruas...",
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
    "imagemCapa": "./assets/images/gtav.jpg"
  },
  {
    "id": 22,
    "nome": "Marvel's Guardians of the Galaxy",
    "dataLancamento": "2021-10-26",
    "descricao": "Coloque a sua bota a jato e chame os seus amigos...",
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
    "imagemCapa": "./assets/images/guardians.jpg"
  },
  {
    "id": 23,
    "nome": "Returnal",
    "dataLancamento": "2021-04-30",
    "descricao": "Após um pouso forçado neste mundo alienígena...",
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
    "imagemCapa": "./assets/images/returnal.jpg"
  },
  {
    "id": 24,
    "nome": "State of Decay 2",
    "dataLancamento": "2018-05-22",
    "descricao": "Os mortos se levantaram e a civilização colapsou...",
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
    "imagemCapa": "./assets/images/state_decay2.jpg"
  },
  {
    "id": 25,
    "nome": "Sekiro: Shadows Die Twice",
    "dataLancamento": "2019-03-22",
    "descricao": "Embarque numa jornada de vingança sangrenta...",
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
    "imagemCapa": "./assets/images/sekiro.jpg"
  },
  {
    "id": 26,
    "nome": "Ratchet & Clank: Em Uma Outra Dimensão",
    "dataLancamento": "2021-06-11",
    "descricao": "A dupla intergaláctica mais famosa dos videogames retorna...",
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
    "imagemCapa": "./assets/images/ratchet.jpg"
  },
  {
    "id": 27,
    "nome": "Fable",
    "dataLancamento": "2025-10-01",
    "descricao": "O retorno de uma lenda! Albion reabre as portas...",
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
    "imagemCapa": "./assets/images/fable.jpg"
  },
  {
    "id": 28,
    "nome": "Death Stranding Director's Cut",
    "dataLancamento": "2021-09-24",
    "descricao": "Do lendário criador Hideo Kojima...",
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
    "imagemCapa": "./assets/images/death_stranding.jpg"
  },
  {
    "id": 29,
    "nome": "Grounded",
    "dataLancamento": "2022-09-27",
    "descricao": "O mundo é vasto, lindo e perigoso...",
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
    "imagemCapa": "./assets/images/grounded.jpg"
  },
  {
    "id": 30,
    "nome": "Resident Evil 4",
    "dataLancamento": "2023-03-24",
    "descricao": "Um dos jogos mais reverenciados da história...",
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
    "imagemCapa": "./assets/images/re4_remake.jpg"
  },
  {
    "id": 31,
    "nome": "God of War (2018)",
    "dataLancamento": "2018-04-20",
    "descricao": "Sua vingança contra os Deuses do Olimpo é passado...",
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
    "imagemCapa": "./assets/images/gow_2018.jpg"
  },
  {
    "id": 32,
    "nome": "Halo: The Master Chief Collection",
    "dataLancamento": "2014-11-11",
    "descricao": "A jornada de Master Chief e a guerra contra a facção Covenant...",
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
    "imagemCapa": "./assets/images/halo_mcc.jpg"
  },
  {
    "id": 33,
    "nome": "Assassin's Creed Valhalla",
    "dataLancamento": "2020-11-10",
    "descricao": "Torne-se Eivor, uma temível lenda viking...",
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
    "imagemCapa": "./assets/images/ac_valhalla.jpg"
  },
  {
    "id": 34,
    "nome": "Batman: Arkham Knight",
    "dataLancamento": "2015-06-23",
    "descricao": "No explosivo último capítulo da consagrada série Arkham...",
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
    "imagemCapa": "./assets/images/batman_arkham.jpg"
  },
  {
    "id": 35,
    "nome": "DOOM Eternal",
    "dataLancamento": "2020-03-20",
    "descricao": "Os exércitos do inferno invadiram a Terra...",
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
    "imagemCapa": "./assets/images/doom_eternal.jpg"
  },
  {
    "id": 36,
    "nome": "Gran Turismo 7",
    "dataLancamento": "2022-03-04",
    "descricao": "Quer você seja um piloto experiente que adora colecionar...",
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
    "imagemCapa": "./assets/images/gt7.jpg"
  },
  {
    "id": 37,
    "nome": "Senua's Saga: Hellblade II",
    "dataLancamento": "2024-05-21",
    "descricao": "Nesta sequência aclamada mundialmente...",
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
    "imagemCapa": "./assets/images/hellblade2.jpg"
  },
  {
    "id": 38,
    "nome": "It Takes Two",
    "dataLancamento": "2021-03-26",
    "descricao": "Embarque numa jornada de cair o queixo...",
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
    "imagemCapa": "./assets/images/it_takes_two.jpg"
  },
  {
    "id": 39,
    "nome": "Final Fantasy VII Rebirth",
    "dataLancamento": "2024-02-29",
    "descricao": "O aguardado segundo capítulo da trilogia remake...",
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
    "imagemCapa": "./assets/images/ff7_rebirth.jpg"
  },
  {
    "id": 40,
    "nome": "Age of Empires IV",
    "dataLancamento": "2021-10-28",
    "descricao": "Uma das franquias de estratégia em tempo real mais queridas...",
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
    "imagemCapa": "./assets/images/aoe4.jpg"
  },
  {
    "id": 41,
    "nome": "Hogwarts Legacy",
    "dataLancamento": "2023-02-10",
    "descricao": "Você finalmente recebeu a sua carta de aceitação...",
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
    "imagemCapa": "./assets/images/hogwarts_legacy.jpg"
  },
  {
    "id": 42,
    "nome": "Uncharted 4: A Thief's End",
    "dataLancamento": "2016-05-10",
    "descricao": "Três anos após os eventos do terceiro jogo...",
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
    "imagemCapa": "./assets/images/uncharted4.jpg"
  },
  {
    "id": 43,
    "nome": "Psychonauts 2",
    "dataLancamento": "2021-08-25",
    "descricao": "Misturando missões completamente inusitadas...",
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
    "imagemCapa": "./assets/images/psychonauts2.jpg"
  },
  {
    "id": 44,
    "nome": "Call of Duty: Modern Warfare III",
    "dataLancamento": "2023-11-10",
    "descricao": "O Capitão John Price, Gaz, Soap e Ghost estão de volta...",
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
    "imagemCapa": "./assets/images/cod_mw3.jpg"
  },
  {
    "id": 45,
    "nome": "Spider-Man: Miles Morales",
    "dataLancamento": "2020-11-12",
    "descricao": "Na nova (e maravilhosa) era focada numa gelada Nova York...",
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
    "imagemCapa": "./assets/images/miles_morales.jpg"
  },
  {
    "id": 46,
    "nome": "Quantum Break",
    "dataLancamento": "2016-04-05",
    "descricao": "Neste aclamadíssimo misto ambicioso e bizarro...",
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
    "imagemCapa": "./assets/images/quantum_break.jpg"
  },
  {
    "id": 47,
    "nome": "Control: Ultimate Edition",
    "dataLancamento": "2021-02-02",
    "descricao": "Depois que um terrível fenômeno extradimensional...",
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
    "imagemCapa": "./assets/images/control.jpg"
  },
  {
    "id": 48,
    "nome": "Stray",
    "dataLancamento": "2022-07-19",
    "descricao": "Solitário, perdido misteriosamente de sua matilha...",
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
    "imagemCapa": "./assets/images/stray.jpg"
  },
  {
    "id": 49,
    "nome": "Detroit: Become Human",
    "dataLancamento": "2018-05-25",
    "descricao": "Numa utópica (e ao mesmo passo distópica) cidade vizinha...",
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
    "imagemCapa": "./assets/images/detroit.jpg"
  },
  {
    "id": 50,
    "nome": "Mortal Kombat 1",
    "dataLancamento": "2023-09-19",
    "descricao": "Após sua sangrenta e magnífica ascensão...",
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
    "imagemCapa": "./assets/images/mk1.jpg"
  },
  {
    "id": 51,
    "nome": "Red Dead Redemption",
    "dataLancamento": "2010-05-18",
    "descricao": "Um dos clássicos mundiais que definiu por conta inteira...",
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
    "imagemCapa": "./assets/images/rdr1.jpg"
  }
]`;

/* Loja */
const games = JSON.parse(jogosJSON);
const shopContent = document.querySelector(".shop-content");
const buttonsFilter = document.querySelectorAll(".buttons-shop-filter button");

const ConverterParaReal = (valor) => {
  const valorConvertido = valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return valorConvertido;
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
              precoOriginalCard.textContent = `${ConverterParaReal(game.precoOriginal)}`;
              precoCard.textContent = `${ConverterParaReal(game.preco)} `;
              
              precoCardContent.appendChild(precoOriginalCard);
              precoCardContent.appendChild(precoCard);
            } else {
              precoCard.textContent = ConverterParaReal(game.preco);
              precoCardContent.appendChild(precoCard);
            }

        // --- Logos Consoles --- 
        const ImageConsolesContent = document.createElement("div")
        ImageConsolesContent.classList.add("images-consoles-card")
        contentCard.appendChild(ImageConsolesContent)

        const imagePlayStation = document.createElement("img")
        imagePlayStation.src = "./assets/images/playstation.png"

        const imageXbox = document.createElement("img")
        imageXbox.src = "./assets/images/xbox.png"
        
        if (game.plataformas.includes("PlayStation") && game.plataformas.includes("Xbox")) {
          ImageConsolesContent.appendChild(imagePlayStation)
          ImageConsolesContent.appendChild(imageXbox)
        } else if (game.plataformas.includes("PlayStation") && !game.plataformas.includes("Xbox")) {
          ImageConsolesContent.appendChild(imagePlayStation)
        } else if (game.plataformas.includes("Xbox") && !game.plataformas.includes("PlayStation")) {
          ImageConsolesContent.appendChild(imageXbox)
        }

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
            const imageLivre = "./assets/images/Livre.png"
            const image6 = "./assets/images/6y.png"
            const image10 = "./assets/images/10y.png"
            const image12 = "./assets/images/12y.png"
            const image14 = "./assets/images/14y.png"
            const image16 = "./assets/images/16y.png"
            const image18 = "./assets/images/18y.png"
                
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

                // Tags
                const contentTags = document.createElement("div")
                contentTags.classList.add("content-tags")

                  const TagContent = document.createElement("div")
                  TagContent.classList.add("tag-content")
                  contentTags.appendChild(TagContent)

                    for (let tag of game.tags) {
                      const tagcard = document.createElement("p")
                      tagcard.classList.add("tag-card")
                      tagcard.textContent = tag
                      TagContent.appendChild(tagcard)
                    }

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
                                ImageDate.src = "./assets/images/calendario.png";
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
                                ImageGB.src = "./assets/images/download.png";
                                ContentGB.appendChild(ImageGB);

                                const tamanhoGameBoxBuy = document.createElement("p");
                                tamanhoGameBoxBuy.textContent = `Tamanho: ${game.tamanhoGB}GB`;
                                ContentGB.appendChild(tamanhoGameBoxBuy);
                  
              //Preço:
              const percentPrice = Math.round(((game.precoOriginal - game.preco) / game.precoOriginal) * 100);
              const PriceContent = document.createElement("div")
              PriceContent.classList.add("price-content")
              contentTextsBuyBox.appendChild(PriceContent)

                    if (game.emPromocao === true) {
                      const originalPrice = document.createElement("p")
                      originalPrice.classList.add("original-price")
                      originalPrice.textContent = ConverterParaReal(game.precoOriginal)
                      PriceContent.appendChild(originalPrice)

                      const PriceWithDiscount = document.createElement("p")
                      PriceWithDiscount.classList.add("price")
                      PriceWithDiscount.textContent = ConverterParaReal(game.preco)
                      PriceContent.appendChild(PriceWithDiscount)
                      
                      const PricePercentDiscount = document.createElement("p")
                      PricePercentDiscount.classList.add("price-percent-discount")
                      PricePercentDiscount.textContent = `${percentPrice}%`
                      contentTextsBuyBox.appendChild(PricePercentDiscount)

                      if (percentPrice <= 15) {
                        PricePercentDiscount.style.backgroundColor = "#3B82F6"
                      } else if (percentPrice <= 30) {
                        PricePercentDiscount.style.backgroundColor = "#10B981"
                      } else if (percentPrice <= 50) {
                        PricePercentDiscount.style.backgroundColor = "#F59E0B"
                      } else if (percentPrice <= 70) {
                        PricePercentDiscount.style.backgroundColor = "#EA580C"
                      } else {
                        PricePercentDiscount.style.backgroundColor = "#E11D48"
                      }


                    } else {
                      const originalPrice = document.createElement("p")
                      originalPrice.classList.add("price")
                      originalPrice.textContent = ConverterParaReal(game.preco)
                      PriceContent.appendChild(originalPrice)
                    }

              //Botão Compra
              const BuyButton = document.createElement("button")
              BuyButton.classList.add("buy-button-modal")
              BuyButton.textContent = "Comprar"
              contentTextsBuyBox.appendChild(BuyButton)

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
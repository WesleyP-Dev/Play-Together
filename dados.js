// banco de dados de jogos

let dados = [
    {
        titulo: "Deep Rock Galactic",
        descricao: "Deep Rock Galactic é um jogo de tiro em primeira pessoa de ficção científica cooperativo que inclui anões espaciais sinistros, ambientes 100% destrutíveis, cavernas aleatórias e hordas infinitas de monstros alienígenas.",
        link: "https://store.steampowered.com/app/548430/Deep_Rock_Galactic/",
        tags: "Todos Cooperativo Aventura",
        imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202010/1407/2JSde8PFCF6B4nO2EECrcR1m.png"
    },
    {
        titulo: "ARK: Survival Evolved",
        descricao: "Como um homem ou uma mulher abandonado nu, congelando e morrendo de fome nas margens de uma misteriosa ilha chamada ARK, você precisa caçar, recolher recursos, construir itens, cultivar, pesquisar tecnologias, e construir abrigos para resistir aos elementos. Use sua astúcia e recursos para matar ou domar & criar os dinossauros leviathans e outras criaturas primitivas andando por aí.",
        link: "https://store.steampowered.com/app/346110/ARK_Survival_Evolved/",
        tags: "Todos Cooperativo Sobrevivência ",
        imagem: "https://cdn6.aptoide.com/imgs/d/4/b/d4b8cde877c563a67564f6e00eb1f1ad_icon.png"
    },
    {
        titulo: "Among Us",
        descricao: "Among Us é um jogo de dedução social onde os jogadores trabalham juntos para completar tarefas em uma nave espacial, enquanto impostores tentam sabotar e eliminar a tripulação.",
        link: "https://store.steampowered.com/app/945360/Among_Us/",
        tags: "Todos Cooperativo",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6O_PorvZhyV-fuDkF3K7hTR4miobjqCyvWw&s"
    },
    {
        titulo: "Overcooked! 2",
        descricao: "Overcooked! 2 é um jogo de simulação de cozinha cooperativo onde os jogadores devem trabalhar juntos para preparar, cozinhar e servir pedidos em uma variedade de cozinhas caóticas.",
        link: "https://store.steampowered.com/app/728880/Overcooked_2/",
        tags: "Todos Cooperativo",
        imagem: "https://external-preview.redd.it/QJm0EukzER02okLQTv_2n9x8mWLyBlUprx3-a10cWQY.jpg?width=640&crop=smart&auto=webp&s=502118e2460d831a7ede3887f701339a254182d0"
    },
    {
        titulo: "Rocket League",
        descricao: "compita no jogo estilo arcade híbrido de futebol e caos automobilístico! Desbloqueie itens no Rocket Pass, suba nos rankings competitivos, participe de torneios, complete desafios, tire vantagem da progressão multiplataforma e muito mais! O campo está esperando! Chute ao gol!",
        link: "https://store.steampowered.com/app/252950/Rocket_League/",
        tags: "Todos Competitivo",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg"
    },
    {
        titulo: "Destiny 2",
        descricao: "Mergulhe no mundo de Destiny 2 para explorar os mistérios do sistema solar e vivenciar combates de tiro em primeira pessoa. Libere poderosas habilidades elementares, colecione equipamentos singulares para personalizar o visual e estilo de jogo do seu Guardião. Vivencie a história cinematográfica de Destiny 2, missões cooperativas desafiadoras, e competições em diversos modos PvP, só ou com amigos.",
        link: "https://store.steampowered.com/app/1085660/Destiny_2/",
        tags: "Todos Cooperativo RPG Aventura ",
        imagem: "https://cdn2.steamgriddb.com/icon_thumb/1b308c0bf9f1e621437a73c326840a20.png"
    },
    {
        titulo: "Chained Together",
        descricao: "Das profundezas do inferno, escale acorrentado aos seus amigos através de mundos diversos. Solo ou em cooperação, tente alcançar o cume e descubra o que te espera lá...",
        link: "https://store.steampowered.com/app/2567870/Chained_Together/",
        tags: "Todos Competitivo Aventura",
        imagem: "https://cdn2.steamgriddb.com/grid/df2d438b6caf4b7ab0adc96d2085abe5.jpg"
    },
    {
        titulo: "Phasmophobia",
        descricao: "Phasmophobia é um jogo de terror cooperativo onde os jogadores trabalham juntos como caçadores de fantasmas para investigar locais assombrados e coletar evidências do paranormal.",
        link: "https://store.steampowered.com/app/739630/Phasmophobia/",
        tags: "Todos Cooperativo Terror Quebra-Cabeça ",
        imagem: "https://steamuserimages-a.akamaihd.net/ugc/1848179050040022588/6029B87EDA147D5A879ABCB040C97AC7FE5F8425/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    },
    {
        titulo: "Minecraft",
        descricao: "Minecraft é um jogo de construção e sobrevivência onde os jogadores podem explorar mundos infinitos, construir estruturas e sobreviver contra criaturas perigosas.",
        link: "https://store.steampowered.com/app/323910/Minecraft/",
        tags: "Todos Cooperativo Mundo Aberto Sobrevivência Aventura",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvYDPXIl43fFZV5gNO8vpLNV901rfeO6nMg&s"
    },
    {
        titulo: "UNO",
        descricao: "É uma corrida para terminar conforme você tenta esvaziar sua mão antes de todo mundo. Jogue com amigos e familiares do jeito que quiser com uma gama de regras da casa e, pela primeira vez, temas com visual atualizado e novas cartas temáticas que introduzem efeitos e poderes loucos ao jogo.",
        link: "https://store.steampowered.com/app/470220/UNO/",
        tags: "Todos Competitivo ",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1bW_sZpxNcLIBjYJICKomSUEVa05O1sq1g&s"
    },
    {
        titulo: "Sea of Thieves",
        descricao: "Sea of Thieves é um jogo de aventura onde os jogadores formam tripulações de piratas para explorar ilhas, buscar tesouros e enfrentar outros piratas em batalhas navais.",
        link: "https://store.steampowered.com/app/1172620/Sea_of_Thieves/",
        tags: "Todos Cooperativo Aventura ",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWQfwio83oiCpkEdGC0vLq6SeGbIC7RrKpA&s"
    },
    {
        titulo: "Left 4 Dead 2",
        descricao: "Left 4 Dead 2 é um jogo de tiro em primeira pessoa cooperativo onde os jogadores enfrentam hordas de zumbis enquanto tentam sobreviver e completar missões.",
        link: "https://store.steampowered.com/app/550/Left_4_Dead_2/",
        tags: "Todos Cooperativo Terror ",
        imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70f6a344-b180-4dab-8d66-0186e23da070/d8z2w1r-4b22d24b-6f93-4f6b-9192-0bcb87dd8e88.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwZjZhMzQ0LWIxODAtNGRhYi04ZDY2LTAxODZlMjNkYTA3MFwvZDh6Mncxci00YjIyZDI0Yi02ZjkzLTRmNmItOTE5Mi0wYmNiODdkZDhlODgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eUEpfD-RxhhM4Umpsc2GVUMn5rnAQSydeJd4xJt41cE"
    },
    {
        titulo: "Borderlands 3",
        descricao: "Borderlands 3 é um jogo de tiro em primeira pessoa com elementos de RPG onde os jogadores exploram planetas, completam missões e coletam armas e equipamentos.",
        link: "https://store.steampowered.com/app/397540/Borderlands_3/",
        tags: "Todos Cooperativo RPG ",
        imagem: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08025_00/2/i_282052c0284d44dfc8a1c011fde114ea1a280f9f387f1be3bd204a65b5be322e/i/icon0.png"
    },
    {
        titulo: "Tricky Towers",
        descricao: "De robe brilhante e forças encantadas, é tempo de construir torres reforçadas! Empilhe blocos nesta terra louvável - qual torre de fábula será mais estável? Batalhe contra amigos e alcance a fama, neste jogo de grupo onde a física clama.",
        link: "https://store.steampowered.com/app/437920/Tricky_Towers/",
        tags: "Todos Competitivo Quebra-Cabeça ",
        imagem: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA05186_00/5/i_918e6b94f1ecd7b25fa73f8686b9f492dcd03fb6f4d6c5713baa8862d24a1a13/i/icon0.png"
    },
    {
        titulo: "Terraria",
        descricao: "Terraria é um jogo de aventura e construção onde os jogadores exploram mundos gerados aleatoriamente, coletam recursos e constroem estruturas.",
        link: "https://store.steampowered.com/app/105600/Terraria/",
        tags: "Todos Cooperativo Aventura mundo aberto RPG",
        imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b7754e1-f678-4408-bb97-95b392ad6810/de23puz-8936d385-bffa-4c38-adb8-47657443f130.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiNzc1NGUxLWY2NzgtNDQwOC1iYjk3LTk1YjM5MmFkNjgxMFwvZGUyM3B1ei04OTM2ZDM4NS1iZmZhLTRjMzgtYWRiOC00NzY1NzQ0M2YxMzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0OofH2x6AjYXFZfsll_LrTveL8aBP9dcVSaGR6hj268"
    },
    {
        titulo: "Stardew Valley",
        descricao: "Stardew Valley é um jogo de simulação agrícola onde os jogadores cultivam plantas, criam animais e interagem com os habitantes da cidade.",
        link: "https://store.steampowered.com/app/413150/Stardew_Valley/",
        tags: "Todos Cooperativo Avetura ",
        imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d55ae41-e76d-4375-b2d9-5b40b36a2f82/dehzxxr-72b13630-0a09-4aa5-b442-1d752c6f6971.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkNTVhZTQxLWU3NmQtNDM3NS1iMmQ5LTViNDBiMzZhMmY4MlwvZGVoenh4ci03MmIxMzYzMC0wYTA5LTRhYTUtYjQ0Mi0xZDc1MmM2ZjY5NzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gQRDyl3DhBW2uywDMwt8CD4hYRqI5JG2GWHBBGNphJY"
    },
    {
        titulo: "Raft",
        descricao: "Raft é um jogo de sobrevivência cooperativo onde os jogadores começam em uma pequena jangada no meio do oceano. Eles devem coletar recursos flutuantes, expandir sua jangada e sobreviver aos perigos do mar.",
        link: "https://store.steampowered.com/app/648800/Raft/",
        tags: "Todos Cooperativo Sobrevivência Mundo Aberto Aventura",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZF90-kUfugolHSovGsVKFr_aMt4UH_qee9Q&s"
    },
    {
        titulo: "Satisfactory",
        descricao: "Satisfactory é um jogo de construção e gerenciamento de fábricas em primeira pessoa. Os jogadores exploram um planeta alienígena, coletam recursos e constroem complexas linhas de produção para automatizar a fabricação de itens.",
        link: "https://store.steampowered.com/app/526870/Satisfactory/",
        tags: "Todos Cooperativo Aventura Mundo Aberto",
        imagem: "https://preview.redd.it/i-made-satisfactory-icon-if-anyone-wants-v0-koftdwzlupfb1.png?width=563&format=png&auto=webp&s=731d8c7773fb9a143913632ed7bcc8ee636ac884"
    },
    {
        titulo: "Portal",
        descricao: "Portal é um jogo de quebra-cabeça em primeira pessoa onde os jogadores resolvem desafios usando um dispositivo que cria portais interespaciais. Situado nos misteriosos Laboratórios Aperture Science, o jogo oferece uma experiência inovadora e envolvente.",
        link: "https://store.steampowered.com/app/400/Portal/",
        tags: "Todos Cooperativo Quebra-Cabeça Aventura",
        imagem: "https://cdn2.steamgriddb.com/icon/9a4400501febb2a95e79248486a5f6d3/32/256x256.png"
    },
    {
        titulo: "Portal 2",
        descricao: "Portal 2 é a sequência do aclamado Portal, expandindo a fórmula de jogabilidade inovadora com novos personagens, elementos de quebra-cabeça e uma campanha cooperativa única. Os jogadores exploram áreas inéditas dos Laboratórios Aperture Science e enfrentam desafios ainda mais complexos.",
        link: "https://store.steampowered.com/app/620/Portal_2/",
        tags: "Todos Cooperativo Quebra-Cabeça Aventura",
        imagem: "https://cdn2.steamgriddb.com/icon/b6f3e7f18747593bf763f07ee4e260c0/32/256x256.png"
    },
    {
        titulo: "Content Warning",
        descricao: "Content Warning é um jogo de horror cooperativo onde você e seus amigos filmam eventos assustadores para tentar se tornar famosos no SpöökTube. Personalize seu personagem, compre equipamentos e explore o Velho Mundo enfrentando monstros e relíquias amaldiçoadas.",
        link: "https://store.steampowered.com/app/2881650/Content_Warning/",
        tags: "Todos Cooperativo Terror Aventura ",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwwrdqE6EHBzY-5_zFzrxhGdjXEnzp2JJCg&s"
    },
    {
        titulo: "Devour",
        descricao: "Devour é um jogo de sobrevivência de horror cooperativo para 1-4 jogadores. Os jogadores devem impedir que cultistas possuídos os arrastem para o inferno, trabalhando juntos para realizar rituais e banir o demônio Azazel.",
        link: "https://store.steampowered.com/app/1274570/DEVOUR/",
        tags: "Todos Cooperativo Terror Aventura Quebra-Cabeça",
        imagem: "https://cdn2.steamgriddb.com/icon_thumb/f42fff7bf91c9292a6a6dd4ee86eee6c.png"
    },
    {
        titulo: "Don't Starve Together",
        descricao: "Don't Starve Together é a expansão multijogador do jogo de sobrevivência na selva, Don't Starve. Os jogadores devem explorar um mundo estranho e cheio de perigos, coletar recursos e construir estruturas para sobreviver.",
        link: "https://store.steampowered.com/app/322330/Dont_Starve_Together/",
        tags: "Todos Cooperativo Sobrevivência mundo aberto Aventura",
        imagem: "https://cdn2.steamgriddb.com/icon/f18e1e190060ee0af7d043f41d1f28df.png",
    },
    {
        titulo: "Pico Park",
        descricao: "Pico Park é um jogo de quebra-cabeça cooperativo para 2-8 jogadores, onde todos devem trabalhar juntos para resolver desafios e avançar pelos níveis. Cada nível ajusta sua dificuldade com base no número de jogadores.",
        link: "https://store.steampowered.com/app/1509960/PICO_PARK/",
        tags: "Todos Cooperativo Quebra-cabeça Avetura",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLImRy3MY2vPw1-CyrEyZfOnn-Uy84HbVanw&s"
    },
    {
        titulo: "Unrailed",
        descricao: "Unrailed é um jogo cooperativo de construção de trilhos de trem, onde os jogadores devem trabalhar juntos para construir uma ferrovia através de mundos gerados proceduralmente, enfrentando desafios aleatórios e evitando que o trem descarrile.",
        link: "https://store.steampowered.com/app/1016920/Unrailed/",
        tags: "Todos Cooperativo Aventura",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPjEUzXlaK_ZJF6kmj0D4oio17OoFjGv8cQ&s"
    },
    {
        titulo: "Unsolved Case",
        descricao: "Unsolved Case é um jogo de quebra-cabeça cooperativo para dois jogadores, onde você e um amigo assumem os papéis de detetives tentando resolver um caso antigo. Trabalhem juntos para decifrar códigos, resolver enigmas e capturar o assassino enigmático.",
        link: "https://store.steampowered.com/app/2084050/Unsolved_Case/",
        tags: "Todos Cooperativo Quebra-cabeça ",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvYVoojA8Tw0dhBCObmhBfBGfIavG63XzBw&s"
    },
    {
        titulo: "Unboxing the Cryptic Killer",
        descricao: "Unboxing the Cryptic Killer é um jogo de quebra-cabeça cooperativo onde dois jogadores devem trabalhar juntos para resolver enigmas e escapar das armadilhas de um assassino enigmático. A comunicação e a colaboração são essenciais para desvendar os mistérios e sobreviver.",
        link: "https://store.steampowered.com/app/2069040/Unboxing_the_Cryptic_Killer/",
        tags: "Todos Cooperativo Quebra-cabeça ",
        imagem: "https://img.itch.zone/aW1nLzE0NDA5MDU5LnBuZw==/original/stMEBp.png"
    },
    {
        titulo: "Outriders",
        descricao: "Outriders é um jogo de tiro em terceira pessoa com elementos de RPG, ambientado em um universo de ficção científica sombrio. Os jogadores podem escolher entre quatro classes únicas, cada uma com habilidades especiais, e personalizar suas armas e equipamentos para sobreviver e explorar o planeta hostil de Enoch.",
        link: "https://store.steampowered.com/app/680420/OUTRIDERS/",
        tags: "Todos Cooperativo RPG Avetura",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5HmHbSkRJ9ILccaL_EdkPEtxIUA0I548lQ&s"
    },
];
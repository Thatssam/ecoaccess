function imagemReserva(nomeParque) {
  const svg = `<svg xmlns="http://w3.org" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="#14361d"/><circle cx="680" cy="90" r="45" fill="#4ade80" opacity="0.25"/><path d="M0 310 Q220 220 450 300 T800 270 L800 400 L0 400 Z" fill="#1b5e20"/><text x="400" y="205" font-family="sans-serif" font-size="30" font-weight="bold" fill="#86efac" text-anchor="middle">${nomeParque}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

const parques = [
  {
    id: 1,
    nome: "Parque Ibirapuera",
    cidade: "Vila Mariana (Zona Sul) - São Paulo, SP",
    descricao: "Circuito plano e amplo com empréstimo gratuito de cadeiras motorizadas, mapas táteis e sanitários adaptados em todos os portões.",
    imagem: "Imagens/ibirapuera.jpg",
    altImagem: "Vista aérea do Parque Ibirapuera mostrando o lago com chafariz, marquise e pistas largas pavimentadas",
    categorias: ["mobilidade", "visual", "auditiva", "neurodivergente"],
    selos: ["#TrilhasPavimentadas", "#BanheiroAdaptado", "#PisoTátil", "#Braille"],
    infraestrutura: "Possui rotas 100% planas e asfaltadas, empréstimo gratuito de cadeiras de rodas motorizadas no Portão 3, mapas táteis nos principais acessos e sanitários familiares acessíveis.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Mariana Silva", perfil: "Cadeirante", texto: "Asfalto liso na maior parte do circuito principal e banheiros muito limpos." },
      { autor: "Carlos Eduardo", perfil: "Deficiência Visual", texto: "O piso tátil próximo aos auditórios ajuda bastante na orientação." }
    ]
  },
  {
    id: 2,
    nome: "Parque Villa-Lobos",
    cidade: "Alto de Pinheiros (Zona Oeste) - São Paulo, SP",
    descricao: "Área extremamente plana com passarela elevada acessível (Orquidário), brinquedos inclusivos e rotas largas sem degraus.",
    imagem: "Imagens/villalobos.jpg",
    altImagem: "Entrada principal plana e ampla do Parque Villa-Lobos com visitantes caminhando sob céu azul",
    categorias: ["mobilidade", "visual", "neurodivergente"],
    selos: ["#100%Plano", "#BrinquedosInclusivos", "#RampasSuaves", "#ÁreasSilenciosas"],
    infraestrutura: "Todo o parque foi projetado em terreno plano. Conta com circuito das árvores elevado com rampa acessível, vagas reservadas próximas às entradas e bosques tranquilos.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Patrícia Lima", perfil: "Cadeirante", texto: "Um dos parques mais fáceis de circular em São Paulo, praticamente zero inclinação." }
    ]
  },
  {
    id: 3,
    nome: "Jardim Botânico de São Paulo",
    cidade: "Água Funda (Zona Sul) - São Paulo, SP",
    descricao: "Conta com Jardim Sensorial com plantas aromáticas e placas em Braille, além de passarelas de madeira niveladas sobre o lago.",
    imagem: "Imagens/botanico.jpg",
    altImagem: "Fachada principal nivelada do Jardim Botânico de São Paulo cercada por palmeiras e árvores",
    categorias: ["mobilidade", "visual", "neurodivergente"],
    selos: ["#JardimSensorial", "#SinalizaçãoBraille", "#AmbienteCalmo", "#PassarelaNivelada"],
    infraestrutura: "Espaço silencioso ideal para regulação sensorial. Possui Jardim dos Sentidos com identificação tátil e em Braille, além de carrinhos elétricos para apoio a pessoas com mobilidade reduzida.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Lucas Teixeira", perfil: "Autista", texto: "Muito silencioso, sem som alto ou multidões, ótimo para passear com calma." }
    ]
  },
  {
    id: 4,
    nome: "Parque do Carmo",
    cidade: "Itaquera (Zona Leste) - São Paulo, SP",
    descricao: "Vastas áreas arborizadas com vias principais asfaltadas, estacionamento acessível e espaços amplos longe do barulho urbano.",
    imagem: "Imagens/carmo.webp",
    altImagem: "Amplo gramado cercado por árvores altas no Parque do Carmo em dia ensolarado",
    categorias: ["mobilidade", "neurodivergente"],
    selos: ["#ViasAsfaltadas", "#EstacionamentoReservado", "#BanheiroAdaptado", "#BaixoEstímulo"],
    infraestrutura: "Possui extensas alamedas pavimentadas ao redor dos lagos, sanitários adaptados próximos à administração e áreas de piquenique com acesso nivelado.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Roberto Mendes", perfil: "Mobilidade Reduzida", texto: "Excelente opção na Zona Leste, dá para chegar de carro bem perto das áreas planas." }
    ]
  },
  {
    id: 5,
    nome: "Parque Ceret",
    cidade: "Jardim Anália Franco / Tatuapé (Zona Leste) - São Paulo, SP",
    descricao: "Complexo recreativo plano com pistas largas de caminhada, piscina adaptada, vestiários acessíveis e espaços sombreados.",
    imagem: "Imagens/ceret.jpg",
    altImagem: "Vista das pistas pavimentadas e campos do Parque Ceret cercados por árvores",
    categorias: ["mobilidade", "auditiva", "neurodivergente"],
    selos: ["#PistasLargas", "#VestiárioAdaptado", "#EstacionamentoFácil", "#ÁreasSombreadas"],
    infraestrutura: "Oferece calçadas amplas sem degraus entre os bosques e quadras, além de sanitários e vestiários com barras de apoio e vagas exclusivas logo na entrada.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Juliana Costa", perfil: "Cadeirante", texto: "Calçadas bem largas e niveladas, muito fácil de se locomover sem ajuda." }
    ]
  },
  {
    id: 6,
    nome: "Parque da Juventude",
    cidade: "Santana (Zona Norte) - São Paulo, SP",
    descricao: "Conectado ao metrô Carandiru com rampas acessíveis, piso tátil completo, elevadores na biblioteca e passarelas niveladas.",
    imagem: "Imagens/juventude.jpeg",
    altImagem: "Vista aérea de caminhos pavimentados, áreas verdes e quadras acessíveis no Parque da Juventude",
    categorias: ["mobilidade", "visual", "auditiva"],
    selos: ["#AcessoMetrô", "#PisoTátilCompleto", "#RampasAcessíveis", "#SinalizaçãoVisual"],
    infraestrutura: "Um dos parques com melhor integração ao transporte público acessível. Possui rotas com piso tátil direcional, rampas suaves nas ruínas e sinalização visual clara.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Andréia Nascimento", perfil: "Deficiência Visual", texto: "Sair do metrô e entrar no parque seguindo o piso tátil dá muita autonomia." }
    ]
  },
  {
    id: 7,
    nome: "Parque Ecológico do Tietê",
    cidade: "Engenheiro Goulart (Zona Leste) - São Paulo, SP",
    descricao: "Extensas alamedas planas em meio à natureza, ambiente tranquilo para observação de fauna e áreas de descanso sombreadas.",
    imagem: "Imagens/tiete.webp",
    altImagem: "Vista panorâmica do lago e das amplas áreas verdes planas do Parque Ecológico do Tietê",
    categorias: ["mobilidade", "neurodivergente"],
    selos: ["#AlamedasPlanas", "#ContatoComNatureza", "#BaixoRuído", "#BanheiroAdaptado"],
    infraestrutura: "Conta com vias principais niveladas de fácil circulação, núcleo de educação ambiental acessível e vastas áreas silenciosas longe do trânsito.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Thiago Ferreira", perfil: "Autista", texto: "Lugar enorme e muito calmo, ótimo para caminhar ouvindo os pássaros sem estresse." }
    ]
  },
  {
    id: 8,
    nome: "Parque Burle Marx",
    cidade: "Panamby (Zona Sul) - São Paulo, SP",
    descricao: "Jardins projetados com caminhos pavimentados, ambiente silencioso, trilhas sombreadas e banheiros acessíveis próximos à entrada.",
    imagem: "Imagens/burlemarx.jpg",
    altImagem: "Caminho pavimentado nivelado ao lado do gramado central arborizado do Parque Burle Marx",
    categorias: ["mobilidade", "neurodivergente"],
    selos: ["#AmbienteSilencioso", "#JardinsPlanos", "#SombraNatural", "#BanheiroAdaptado"],
    infraestrutura: "Ambiente extremamente tranquilo com restrição de ruídos. O jardim principal e a área do espelho d'água contam com piso nivelado e bancos para descanso.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Beatriz Monteiro", perfil: "Mobilidade Reduzida", texto: "A parte dos jardins principais é toda plana, muito bonita e tranquila." }
    ]
  },
  {
    id: 9,
    nome: "Parque da Independência",
    cidade: "Ipiranga (Zona Sul) - São Paulo, SP",
    descricao: "Jardins franceses com rampas laterais de acesso, piso tátil direcional e sinalização visual clara integrada ao Museu do Ipiranga.",
    imagem: "Imagens/independencia.jpg",
    altImagem: "Jardins geométricos do Parque da Independência com o edifício do Museu do Ipiranga ao fundo",
    categorias: ["mobilidade", "visual", "auditiva"],
    selos: ["#RampasLaterais", "#PisoTátil", "#SinalizaçãoVisual", "#AcessoIntegrado"],
    infraestrutura: "Requalificado recentemente com rampas acessíveis vencendo os desníveis do jardim, piso tátil alerta e direcional, além de comunicação visual de alto contraste.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Fernanda Rocha", perfil: "Surda", texto: "Placas bem posicionadas e visuais em todo o trajeto entre o parque e o museu." }
    ]
  },
  {
    id: 10,
    nome: "Parque Água Branca",
    cidade: "Perdizes (Zona Oeste) - São Paulo, SP",
    descricao: "Ambiente acolhedor com trilhas sombreadas, animais soltos e sinalização pictográfica de fácil compreensão.",
    imagem: "Imagens/aguabranca.jpg",
    altImagem: "Área arborizada e sombreada com construções históricas no Parque Água Branca",
    categorias: ["auditiva", "neurodivergente"],
    selos: ["#SinalizaçãoPictográfica", "#SombraNatural", "#BanheiroFamiliar", "#SemSomAlto"],
    infraestrutura: "Proíbe equipamentos sonoros no interior do parque, garantindo conforto acústico. Conta com rotas sombreadas e mapas visuais ilustrados nas entradas.",
    mapaLink: "https://google.com",
    avaliacoes: [
      { autor: "Camila Almeida", perfil: "Mãe de criança autista", texto: "Meu filho ama ver os animais e o ambiente é super tranquilo e sombreado." }
    ]
  }
];
const gridParques = document.getElementById("grid-parques");
const inputBusca = document.getElementById("input-busca");
const checkboxes = document.querySelectorAll(".filtro-check");
const btnLimpar = document.getElementById("btn-limpar");
const contadorResultados = document.getElementById("contador-resultados");
const btnContraste = document.getElementById("btn-contraste");
const btnVoiceOver = document.getElementById("btn-voiceover");
const avisoVoiceOver = document.getElementById("aviso-voiceover");
const modal = document.getElementById("modal-detalhes");
const modalCorpo = document.getElementById("modal-corpo");
const btnFecharModal = document.getElementById("btn-fechar-modal");

function obterIniciais(nome) {
  const partes = nome.trim().split(/\s+/);
  if (partes.length === 1) {
    return partes[0].charAt(0).toUpperCase();
  }
  const primeiraLetra = partes[0].charAt(0);
  const ultimaLetra = partes[partes.length - 1].charAt(0);
  return (primeiraLetra + ultimaLetra).toUpperCase();
}

function calcularCompatibilidade(parque, filtrosAtivos) {
  if (filtrosAtivos.length === 0) return "100% Recomendado";
  const atendidos = filtrosAtivos.filter(f => parque.categorias.includes(f));
  const porcentagem = Math.round((atendidos.length / filtrosAtivos.length) * 100);
  return `${porcentagem}% Compatível com seu perfil`;
}

function renderizarParques() {
  const termo = inputBusca.value.toLowerCase().trim();
  const filtrosAtivos = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const filtrados = parques.filter(parque => {
    const bateTexto = parque.nome.toLowerCase().includes(termo) || 
                      parque.cidade.toLowerCase().includes(termo) ||
                      parque.descricao.toLowerCase().includes(termo);
    const bateFiltro = filtrosAtivos.length === 0 || 
                       filtrosAtivos.some(f => parque.categorias.includes(f));
    return bateTexto && bateFiltro;
  });

  contadorResultados.textContent = `${filtrados.length} ${filtrados.length === 1 ? 'local encontrado' : 'locais encontrados'}`;
  gridParques.innerHTML = "";

  if (filtrados.length === 0) {
    gridParques.innerHTML = `<p>Nenhum parque encontrado com os filtros selecionados. Tente remover algum filtro.</p>`;
    return;
  }

  filtrados.forEach(parque => {
    const compatibilidade = calcularCompatibilidade(parque, filtrosAtivos);
    const card = document.createElement("article");
    card.className = "card-parque";

    const selosHTML = parque.selos
      .map(selo => `<li class="selo">${selo}</li>`)
      .join("");

    card.innerHTML = `
      <img src="${parque.imagem}" alt="${parque.altImagem}" class="card-img" onerror="this.onerror=null; this.src=imagemReserva('${parque.nome}');">
      <div class="card-corpo">
        <span class="compatibilidade-badge">${compatibilidade}</span>
        <h3>${parque.nome}</h3>
        <p class="localizacao">${parque.cidade}</p>
        <p class="descricao-curta">${parque.descricao}</p>
        <ul class="lista-selos" aria-label="Tags de acessibilidade">
          ${selosHTML}
        </ul>
        <button type="button" class="btn-primario" onclick="abrirDetalhes(${parque.id})">
          Ver detalhes de acessibilidade
        </button>
      </div>
    `;
    gridParques.appendChild(card);
  });
}

function gerarHTMLAvaliacoes(avaliacoes) {
  return avaliacoes.map(av => `
    <div class="avaliacao-item">
      <div class="avaliacao-cabecalho">
        <div class="avatar-usuario" aria-hidden="true">${obterIniciais(av.autor)}</div>
        <div class="avaliacao-meta">
          <strong>${av.autor}</strong>
          <span class="avaliacao-perfil">${av.perfil}</span>
        </div>
      </div>
      <p>${av.texto}</p>
    </div>
  `).join("");
}

function abrirDetalhes(id) {
  const parque = parques.find(p => p.id === id);
  if (!parque) return;

  modalCorpo.innerHTML = `
    <h3 id="modal-titulo">${parque.nome}</h3>
    <p class="localizacao">${parque.cidade}</p>
    
    <div class="secao-modal">
      <h4>Infraestrutura e Acessos</h4>
      <p>${parque.infraestrutura}</p>
    </div>

    <div class="secao-modal">
      <h4>Tags de Acessibilidade</h4>
      <ul class="lista-selos">
        ${parque.selos.map(s => `<li class="selo">${s}</li>`).join("")}
      </ul>
    </div>

    <div class="secao-modal">
      <h4>Localização e Rotas</h4>
      <a href="${parque.mapaLink}" target="_blank" rel="noopener noreferrer" class="btn-texto">
        Abrir rota acessível no Google Maps (nova aba)
      </a>
    </div>

    <div class="secao-modal">
      <h4>Avaliações de Usuários</h4>
      <div id="lista-avaliacoes-modal">
        ${gerarHTMLAvaliacoes(parque.avaliacoes)}
      </div>
    </div>

    <div class="secao-modal">
      <h4>Deixe sua avaliação!</h4>
      <form id="form-nova-avaliacao" class="form-avaliacao">
        <div class="campo-form">
          <label for="av-nome">Seu nome completo:</label>
          <input type="text" id="av-nome" required placeholder="Ex: João Pedro Santos">
        </div>
        <div class="campo-form">
          <label for="av-perfil">Seu perfil de acessibilidade:</label>
          <select id="av-perfil" required>
            <option value="Cadeirante">Cadeirante</option>
            <option value="Mobilidade Reduzida">Mobilidade Reduzida</option>
            <option value="Deficiência Visual">Deficiência Visual</option>
            <option value="Deficiência Auditiva / Surdo(a)">Deficiência Auditiva / Surdo(a)</option>
            <option value="Autista / Neurodivergente">Autista / Neurodivergente</option>
            <option value="Acompanhante / Familiar">Acompanhante / Familiar</option>
          </select>
        </div>
        <div class="campo-form">
          <label for="av-texto">Seu comentário sobre o local:</label>
          <textarea id="av-texto" rows="3" required placeholder="Conte como foi sua experiência com os acessos..."></textarea>
        </div>
        <button type="submit" class="btn-primario">Publicar avaliação</button>
      </form>
    </div>
  `;

  const formAvaliacao = document.getElementById("form-nova-avaliacao");
  formAvaliacao.addEventListener("submit", (e) => {
    e.preventDefault();
    const novoAutor = document.getElementById("av-nome").value.trim();
    const novoPerfil = document.getElementById("av-perfil").value;
    const novoTexto = document.getElementById("av-texto").value.trim();

    if (!novoAutor || !novoTexto) return;

    parque.avaliacoes.push({
      autor: novoAutor,
      perfil: novoPerfil,
      texto: novoTexto
    });

    document.getElementById("lista-avaliacoes-modal").innerHTML = gerarHTMLAvaliacoes(parque.avaliacoes);
    formAvaliacao.reset();
  });

  if (!modal.open) {
    modal.showModal();
  }
}

btnFecharModal.addEventListener("click", () => modal.close());

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

inputBusca.addEventListener("input", renderizarParques);
checkboxes.forEach(cb => cb.addEventListener("change", renderizarParques));

btnLimpar.addEventListener("click", () => {
  inputBusca.value = "";
  checkboxes.forEach(cb => cb.checked = false);
  renderizarParques();
});

btnContraste.addEventListener("click", () => {
  const ativo = document.body.classList.toggle("alto-contraste");
  btnContraste.setAttribute("aria-pressed", ativo);
});

btnVoiceOver.addEventListener("click", () => {
  avisoVoiceOver.hidden = !avisoVoiceOver.hidden;
});

renderizarParques();

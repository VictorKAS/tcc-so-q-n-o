// ═══════════════════════════════════════════════════════════
//  PMBOK QUIZ — Níveis, Batalhas e Sistema de Cartas Suporte
// ═══════════════════════════════════════════════════════════

const LEVELS = {
  // ── LEVEL 1: FÁCIL ──────────────────────────────────────
  1: [
    {
      group: '1 - PMBOK é...',
      text: 'O que é o PMBOK?',
      opts: [
        'a) Um software de gestão de projetos',
        'b) Um guia de boas práticas em gerenciamento de projetos',
        'c) Uma metodologia ágil de desenvolvimento',
        'd) Um framework exclusivo para TI',
      ],
      correct: 1,
    },
    {
      group: '2 - Grupos de Processos',
      text: 'Quantos grupos de processos existem no PMBOK?',
      opts: ['a) 3', 'b) 4', 'c) 5', 'd) 6'],
      correct: 2,
    },
    {
      group: '3 - Iniciação',
      text: 'Qual documento autoriza formalmente o início de um projeto?',
      opts: [
        'a) Plano de Gerenciamento do Projeto',
        'b) Registro de Riscos',
        'c) Termo de Abertura do Projeto',
        'd) Estrutura Analítica do Projeto',
      ],
      correct: 2,
    },
    {
      group: '4 - Escopo',
      text: 'O que significa a sigla EAP?',
      opts: [
        'a) Estratégia de Ação do Projeto',
        'b) Estimativa de Alto nível do Projeto',
        'c) Estrutura Analítica do Projeto',
        'd) Escopo e Avaliação do Projeto',
      ],
      correct: 2,
    },
    {
      group: '5 - Ordem dos Grupos',
      text: 'Qual grupo de processos ocorre primeiro em um projeto?',
      opts: [
        'a) Planejamento',
        'b) Execução',
        'c) Monitoramento e Controle',
        'd) Iniciação',
      ],
      correct: 3,
    },
    {
      group: '6 - Gerente de Projetos',
      text: 'O gerente de projetos é responsável por:',
      opts: [
        'a) Financiar o projeto integralmente',
        'b) Liderar a equipe para atingir os objetivos do projeto',
        'c) Executar todas as tarefas técnicas',
        'd) Aprovar o orçamento corporativo',
      ],
      correct: 1,
    },
    {
      group: '7 - Cronograma',
      text: 'O que é um cronograma de projeto?',
      opts: [
        'a) Lista de riscos identificados',
        'b) Relatório de custos do projeto',
        'c) Representação das atividades e seus prazos',
        'd) Documento de encerramento do projeto',
      ],
      correct: 2,
    },
    {
      group: '8 - Encerramento',
      text: 'Qual grupo de processos inclui "Encerrar o Projeto ou Fase"?',
      opts: [
        'a) Execução',
        'b) Monitoramento e Controle',
        'c) Planejamento',
        'd) Encerramento',
      ],
      correct: 3,
    },
    {
      group: '9 - Partes Interessadas',
      text: 'O que são partes interessadas (stakeholders)?',
      opts: [
        'a) Apenas os membros da equipe do projeto',
        'b) Somente os patrocinadores financeiros',
        'c) Pessoas ou grupos que afetam ou são afetados pelo projeto',
        'd) Fornecedores externos contratados',
      ],
      correct: 2,
    },
    {
      group: '10 - Áreas de Conhecimento',
      text: 'Quantas áreas de conhecimento o PMBOK 6ª edição possui?',
      opts: ['a) 8', 'b) 9', 'c) 10', 'd) 12'],
      correct: 2,
    },
  ],

  // ── LEVEL 2: MÉDIO ──────────────────────────────────────
  2: [
    {
      group: '1 - Linha de Base',
      text: 'O que compõe a linha de base do escopo?',
      opts: [
        'a) Cronograma + orçamento + riscos',
        'b) EAP + dicionário da EAP + declaração do escopo',
        'c) Termo de abertura + plano de projeto',
        'd) Registro de partes interessadas + plano de comunicações',
      ],
      correct: 1,
    },
    {
      group: '2 - Estimativas',
      text: 'Qual técnica usa 3 pontos (otimista, pessimista e mais provável) para estimar duração?',
      opts: [
        'a) Análise de Monte Carlo',
        'b) Estimativa análoga',
        'c) Estimativa paramétrica',
        'd) Estimativa PERT / Três Pontos',
      ],
      correct: 3,
    },
    {
      group: '3 - Valor Agregado',
      text: 'O Índice de Desempenho de Custo (IDC) é calculado como:',
      opts: [
        'a) Custo Real / Valor Planejado',
        'b) Valor Agregado / Custo Real',
        'c) Valor Planejado / Custo Real',
        'd) Custo Real / Valor Agregado',
      ],
      correct: 1,
    },
    {
      group: '4 - Monit. e Controle',
      text: 'Qual processo pertence exclusivamente ao grupo de Monitoramento e Controle?',
      opts: [
        'a) Orientar e Gerenciar o Trabalho',
        'b) Desenvolver o Cronograma',
        'c) Controlar o Cronograma',
        'd) Encerrar as Aquisições',
      ],
      correct: 2,
    },
    {
      group: '5 - Riscos',
      text: 'O que é a reserva de contingência?',
      opts: [
        'a) Verba extra para riscos desconhecidos-desconhecidos',
        'b) Recurso alocado para lidar com riscos identificados (conhecidos-desconhecidos)',
        'c) Custo total de gerenciamento de riscos',
        'd) Percentual fixo de 10% do orçamento total',
      ],
      correct: 1,
    },
    {
      group: '6 - Qualidade',
      text: 'Qual ferramenta é usada para identificar causas-raiz de problemas de qualidade?',
      opts: [
        'a) Gráfico de Gantt',
        'b) Análise SWOT',
        'c) Diagrama de Ishikawa (espinha de peixe)',
        'd) Matriz de responsabilidades (RACI)',
      ],
      correct: 2,
    },
    {
      group: '7 - Plano de Projeto',
      text: 'O que é o Plano de Gerenciamento do Projeto?',
      opts: [
        'a) Somente o cronograma detalhado',
        'b) Documento que define como o projeto será executado, monitorado e encerrado',
        'c) Relatório de status para o patrocinador',
        'd) Lista de entregas aprovadas pelo cliente',
      ],
      correct: 1,
    },
    {
      group: '8 - Aquisições',
      text: 'Qual é o principal objetivo do processo "Realizar Aquisições"?',
      opts: [
        'a) Criar o plano de gerenciamento de contratos',
        'b) Definir os critérios de seleção de fornecedores',
        'c) Obter respostas de fornecedores e selecionar o mais adequado',
        'd) Encerrar os contratos vigentes',
      ],
      correct: 2,
    },
    {
      group: '9 - Escopo',
      text: 'A Declaração do Escopo do Projeto descreve:',
      opts: [
        'a) O cronograma macro do projeto',
        'b) A estrutura hierárquica das entregas',
        'c) Os riscos identificados na fase de planejamento',
        'd) O trabalho a ser realizado e as exclusões do projeto',
      ],
      correct: 3,
    },
    {
      group: '10 - Registro de Riscos',
      text: 'Em qual processo o Registro de Riscos é criado pela primeira vez?',
      opts: [
        'a) Planejar o Gerenciamento dos Riscos',
        'b) Identificar os Riscos',
        'c) Realizar a Análise Qualitativa de Riscos',
        'd) Planejar as Respostas aos Riscos',
      ],
      correct: 1,
    },
  ],

  // ── LEVEL 3: DIFÍCIL ────────────────────────────────────
  3: [
    {
      group: '1 - Índice de Prazo',
      text: 'O Índice de Desempenho de Prazo (IDP) é calculado como:',
      opts: [
        'a) Custo Real / Valor Planejado',
        'b) Valor Planejado / Valor Agregado',
        'c) Valor Agregado / Valor Planejado',
        'd) Valor Agregado / Custo Real',
      ],
      correct: 2,
    },
    {
      group: '2 - Interpretação IDC',
      text: 'Se o IDC de um projeto é 0,80, isso significa que:',
      opts: [
        'a) O projeto está 20% adiantado no prazo',
        'b) Para cada R$1,00 gasto, apenas R$0,80 de valor foi entregue',
        'c) O projeto está 80% concluído',
        'd) O orçamento tem 20% de sobra',
      ],
      correct: 1,
    },
    {
      group: '3 - Risco vs Problema',
      text: 'Qual é a diferença fundamental entre risco e problema (issue) no PMBOK?',
      opts: [
        'a) Riscos têm impacto maior que problemas',
        'b) Problemas são documentados, riscos não',
        'c) Risco é um evento incerto futuro; problema já ocorreu',
        'd) Riscos afetam custo; problemas afetam prazo',
      ],
      correct: 2,
    },
    {
      group: '4 - Caminho Crítico',
      text: 'O que o método do Caminho Crítico (CPM) determina?',
      opts: [
        'a) O custo mais eficiente do projeto',
        'b) A sequência mais longa de atividades que define a duração mínima do projeto',
        'c) A lista de riscos críticos do projeto',
        'd) Os recursos críticos do projeto',
      ],
      correct: 1,
    },
    {
      group: '5 - Comunicações',
      text: 'Qual processo cria o Plano de Gerenciamento das Comunicações?',
      opts: [
        'a) Gerenciar as Comunicações',
        'b) Monitorar as Comunicações',
        'c) Planejar o Gerenciamento das Comunicações',
        'd) Identificar as Partes Interessadas',
      ],
      correct: 2,
    },
    {
      group: '6 - Estimativa no Término',
      text: 'A Estimativa no Término (ENT) representa:',
      opts: [
        'a) O valor já gasto no projeto até o momento',
        'b) O custo total previsto para concluir todo o projeto',
        'c) O valor que falta gastar para terminar o projeto',
        'd) A diferença entre o orçamento e o custo real',
      ],
      correct: 1,
    },
    {
      group: '7 - Fórmula VA',
      text: 'A fórmula correta do Valor Agregado (VA) é:',
      opts: [
        'a) Custo Real × % Concluído',
        'b) Orçamento no Término - Custo Real',
        'c) % Concluído × Orçamento no Término (ONT)',
        'd) Valor Planejado × % Concluído',
      ],
      correct: 2,
    },
    {
      group: '8 - Riscos Residuais',
      text: 'O que são riscos residuais?',
      opts: [
        'a) Riscos eliminados após o planejamento',
        'b) Novos riscos surgidos durante a execução',
        'c) Riscos que permanecem após a implementação das respostas planejadas',
        'd) Riscos transferidos para o fornecedor',
      ],
      correct: 2,
    },
    {
      group: '9 - Compressão de Cronograma',
      text: 'Qual técnica de compressão adiciona recursos para reduzir a duração sem alterar o escopo?',
      opts: [
        'a) Fast tracking (paralelismo)',
        'b) Crashing (compressão)',
        'c) Goldratt (corrente crítica)',
        'd) Nivelamento de recursos',
      ],
      correct: 1,
    },
    {
      group: '10 - Análise de Monte Carlo',
      text: 'A análise de Monte Carlo é usada para:',
      opts: [
        'a) Calcular o caminho crítico do projeto',
        'b) Identificar partes interessadas ocultas',
        'c) Simular cenários e avaliar a probabilidade de atingir objetivos de custo e prazo',
        'd) Determinar o índice de desempenho de custo futuro',
      ],
      correct: 2,
    },
  ],
};

// ─── BASE DE DADOS DAS CARTAS DE SUPORTE ────────────────────
const CARDS_DB = [
  // COMUM (Amarelo)
  { id: 'comum_espada', name: 'Espada Simples', type: 'sword', rarity: 'comum', desc: '+1 de Dano', value: 1 },
  { id: 'comum_escudo', name: 'Escudo Simples', type: 'shield', rarity: 'comum', desc: 'Metade do Dano', value: 0.5 },
  { id: 'comum_bota', name: 'Bota Velha', type: 'boots', rarity: 'comum', desc: 'Pular Questão', value: 0 },
  
  // RARO (Azul)
  { id: 'raro_espada', name: 'Espada Dupla', type: 'sword', rarity: 'raro', desc: '+1.5 de Dano', value: 1.5 },
  { id: 'raro_bota', name: 'Bota Ágil', type: 'boots', rarity: 'raro', desc: 'Pular Questão', value: 0 },
  { id: 'raro_pocao', name: 'Poção Dupla', type: 'potion', rarity: 'raro', desc: 'Curar 1.5 Vida', value: 1.5 },

  // ÉPICO (Roxo)
  { id: 'epico_espada', name: 'Três Espadas', type: 'sword', rarity: 'epico', desc: '+2 de Dano', value: 2 },
  { id: 'epico_escudo', name: 'Escudo de Grifo', type: 'shield', rarity: 'epico', desc: 'Bloquear Dano', value: 0 }, 
  { id: 'epico_pocao', name: 'Frasco Triplo', type: 'potion', rarity: 'epico', desc: 'Curar 2.5 Vida', value: 2.5 },

  // LENDÁRIO (Laranja)
  { id: 'lendario_pocao', name: 'Elixir Ancestral', type: 'potion', rarity: 'lendario', desc: 'Curar Total', value: 5 }
];

// ─── MAPEAMENTO DIRETO DOS ARQUIVOS PNG DO PROJETO ──────────
const CARD_IMAGES = {
  comum_espada: 'input_file_4.png',
  comum_escudo: 'input_file_10.png',
  comum_bota: 'input_file_9.png',
  raro_espada: 'input_file_2.png',
  raro_bota: 'input_file_1.png',
  raro_pocao: 'input_file_8.png',
  epico_espada: 'input_file_3.png',
  epico_escudo: 'input_file_5.png',
  epico_pocao: 'input_file_6.png',
  lendario_pocao: 'input_file_7.png'
};

// ─── CONFIGURAÇÃO ──────────────────────────────────────────
const MAX_HP   = 5;
const MAX_LEVEL = 3;

const LEVEL_LABELS = {
  1: '⚔ Level 1 — Fácil',
  2: '🔥 Level 2 — Médio',
  3: '💀 Level 3 — Difícil',
};

// ─── ESTADO ────────────────────────────────────────────────
let state = {
  level:     1,
  qIndex:    0,
  selected:  null,
  confirmed: false,
  heroHp:    MAX_HP,
  monsterHp: MAX_HP,
  score:     0,       
  totalScore: 0,      
  hand:      [],      
  activeCardIndex: null, 
};

// ─── REFS ──────────────────────────────────────────────────
const $ = id => document.getElementById(id);

// ─── BOOT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  startLevel(state.level);
  $('btn-confirm').addEventListener('click', onConfirm);
  $('btn-back').addEventListener('click', () => history.back());
  $('btn-result-back').addEventListener('click', () => history.back());
});

// ─── SHUFFLE ───────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── DRAW SYSTEM (Raridades e Distribuição Ponderada) ──────
function getRarityByProbability() {
  const roll = Math.random() * 100;
  if (roll < 5) return 'lendario';   
  if (roll < 20) return 'epico';     
  if (roll < 50) return 'raro';      
  return 'comum';                    
}

function generateSupportCards() {
  const selectedCards = [];
  const dbShuffled = shuffle(CARDS_DB);

  while (selectedCards.length < 3) {
    const desiredRarity = getRarityByProbability();
    const found = dbShuffled.find(c => c.rarity === desiredRarity && !selectedCards.some(sc => sc.id === c.id));
    
    if (found) {
      selectedCards.push({ ...found, used: false });
    } else {
      const fallback = dbShuffled.find(c => !selectedCards.some(sc => sc.id === c.id));
      if (fallback) selectedCards.push({ ...fallback, used: false });
    }
  }
  state.hand = selectedCards;
  state.activeCardIndex = null;
  renderSupportHand();
}

// ─── START / RESTART ───────────────────────────────────────
function startLevel(lvl) {
  state.level     = lvl;
  state.qIndex    = 0;
  state.heroHp    = MAX_HP;
  state.monsterHp = MAX_HP;
  state.score     = 0;
  state.selected  = null;
  state.confirmed = false;
  state.questions = shuffle(LEVELS[lvl]); 
  
  updateHpBars();
  generateSupportCards(); 
  renderQuestion();
}

function restartLevel() { startLevel(state.level); }

function advanceLevel() {
  if (state.level < MAX_LEVEL) {
    startLevel(state.level + 1);
  } else {
    showResult('champion');
  }
}

// ─── RENDER QUESTION ───────────────────────────────────────
function renderQuestion() {
  const questions = state.questions;
  const q         = questions[state.qIndex];

  state.selected  = null;
  state.confirmed = false;

  $('q-label').textContent  = `${state.qIndex + 1} - ${q.group.replace(/^\d+\s*-\s*/, '')}`;
  $('q-text').textContent   = q.text;
  $('q-counter').textContent = `${state.qIndex + 1} / ${questions.length}`;
  $('feedback').textContent  = '';
  $('feedback').className    = '';
  $('level-badge').textContent = LEVEL_LABELS[state.level];
  $('level-badge').dataset.lvl = state.level;

  const card = $('quiz-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';

  const opts = $('options');
  opts.innerHTML = '';
  q.opts.forEach((text, i) => {
    const btn       = document.createElement('button');
    btn.className   = 'opt';
    btn.textContent = text;
    btn.dataset.idx = i;
    btn.addEventListener('click', () => onSelect(i));
    opts.appendChild(btn);
  });

  $('btn-confirm').disabled = true;
}

// ─── SELECT ────────────────────────────────────────────────
function onSelect(idx) {
  if (state.confirmed) return;
  state.selected = idx;
  document.querySelectorAll('.opt').forEach((b, i) =>
    b.classList.toggle('selected', i === idx)
  );
  $('btn-confirm').disabled = false;
}

// ─── INTERAÇÃO COM CARTAS SUPORTE ──────────────────────────
function selectCard(idx) {
  if (state.confirmed) return;
  const card = state.hand[idx];
  if (!card || card.used) return;

  // 1. POÇÃO (Consumo Instantâneo de Vida)
  if (card.type === 'potion') {
    card.used = true;
    const oldHp = state.heroHp;
    state.heroHp = Math.min(MAX_HP, state.heroHp + card.value);
    const healAmount = (state.heroHp - oldHp).toFixed(1);
    
    updateHpBars();
    spawnDmg('hero-wrap', 'hit', `+${healAmount} ♥`);
    triggerHit('hero', 'do-hit');
    renderSupportHand();
    return;
  }

  // 2. BOTA (Uso Instantâneo: Pula a rodada atual)
  if (card.type === 'boots') {
    card.used = true;
    renderSupportHand();
    spawnDmg('hero-wrap', 'hit', `Esquiva!`);
    
    setTimeout(() => {
      state.qIndex++;
      if (state.qIndex >= state.questions.length) {
        showResult(state.score >= 6 ? 'victory' : 'defeat');
      } else {
        renderQuestion();
      }
    }, 600);
    return;
  }

  // 3. ESPADAS / ESCUDOS (Ativação para o Próximo Turno de Combate)
  if (state.activeCardIndex === idx) {
    state.activeCardIndex = null;
  } else {
    state.activeCardIndex = idx;
  }
  renderSupportHand();
}

// ─── RENDERIZAR INTERFACE DAS CARTAS (Usando os arquivos PNG) ───
function renderSupportHand() {
  const handDiv = $('support-hand');
  if (!handDiv) return;
  handDiv.innerHTML = '';

  state.hand.forEach((card, idx) => {
    const cardEl = document.createElement('div');
    const isActive = state.activeCardIndex === idx;
    
    cardEl.className = `support-card card-${card.rarity} ${isActive ? 'active' : ''} ${card.used ? 'used' : ''}`;
    
    // Obtém o nome exato do arquivo PNG associado à carta
    const imgFilename = CARD_IMAGES[card.id] || 'input_file_4.png';
    cardEl.style.backgroundImage = `url('${imgFilename}')`;

    // Renderiza títulos e descrições diretamente nos pergaminhos superiores e inferiores da imagem
    cardEl.innerHTML = `
      <div class="card-header-overlay">${card.name}</div>
      <div class="card-desc-overlay">${card.desc}</div>
    `;

    if (!card.used) {
      cardEl.addEventListener('click', () => selectCard(idx));
    }
    handDiv.appendChild(cardEl);
  });
}

// ─── CONFIRM ───────────────────────────────────────────────
function onConfirm() {
  if (state.selected === null || state.confirmed) return;
  state.confirmed = true;

  const q       = state.questions[state.qIndex];
  const correct = state.selected === q.correct;

  document.querySelectorAll('.opt').forEach((b, i) => {
    b.disabled = true;
    b.classList.remove('selected');
    if (i === q.correct)           b.classList.add('correct');
    else if (i === state.selected) b.classList.add('wrong');
  });
  $('btn-confirm').disabled = true;

  let bonusDmg = 0;
  let dmgReductionFactor = 1; 

  if (state.activeCardIndex !== null) {
    const activeCard = state.hand[state.activeCardIndex];
    if (activeCard.type === 'sword') {
      bonusDmg = activeCard.value;
    } else if (activeCard.type === 'shield') {
      dmgReductionFactor = activeCard.value;
    }
    activeCard.used = true; 
  }

  if (correct) {
    state.score++;
    state.totalScore++;
    
    const damage = 1 + bonusDmg;
    state.monsterHp -= damage;
    
    $('feedback').textContent = `✔ Correto! Monstro sofreu ${damage} HP de dano!`;
    $('feedback').className   = 'ok';
    
    triggerAttack('hero',    'do-attack-r');
    triggerHit   ('monster', 'do-hit');
    spawnDmg('monster-wrap', 'hit', `-${damage} ♥`);
  } else {
    const rawDmg = 1;
    const finalDmg = rawDmg * dmgReductionFactor;
    state.heroHp -= finalDmg;
    
    if (finalDmg > 0) {
      $('feedback').textContent = `✘ Errado! Herói recebeu ${finalDmg.toFixed(1)} HP de dano!`;
      $('feedback').className   = 'ko';
      triggerAttack('monster', 'do-attack-l');
      triggerHit   ('hero',    'do-hit');
      spawnDmg('hero-wrap', 'miss', `-${finalDmg} ♥`);
    } else {
      $('feedback').textContent = '✘ Errado! O escudo bloqueou todo o dano!';
      $('feedback').className   = 'ok';
      triggerAttack('monster', 'do-attack-l');
      spawnDmg('hero-wrap', 'hit', 'Bloqueado!');
    }
  }

  state.activeCardIndex = null;
  updateHpBars();
  renderSupportHand();

  if (state.monsterHp <= 0) {
    setTimeout(() => showResult('victory'), 900);
    return;
  }
  if (state.heroHp <= 0) {
    setTimeout(() => showResult('defeat'), 900);
    return;
  }

  setTimeout(() => {
    state.qIndex++;
    if (state.qIndex >= state.questions.length) {
      const outcome = state.score >= 6 ? 'victory' : 'defeat';
      showResult(outcome);
    } else {
      renderQuestion();
    }
  }, 1100);
}

// ─── HP BARS ───────────────────────────────────────────────
function updateHpBars() {
  $('hero-hp-bar').style.width    = Math.max(0, (state.heroHp    / MAX_HP) * 100) + '%';
  $('monster-hp-bar').style.width = Math.max(0, (state.monsterHp / MAX_HP) * 100) + '%';
}

// ─── ANIMATIONS ────────────────────────────────────────────
function triggerAttack(who, cls) {
  const el = $(who + '-fighter');
  el.classList.remove('do-attack-r', 'do-attack-l', 'do-hit');
  void el.offsetWidth;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 460);
}
function triggerHit(who, cls) {
  const el = $(who + '-fighter');
  setTimeout(() => {
    el.classList.remove('do-attack-r', 'do-attack-l', 'do-hit');
    void el.offsetWidth;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), 460);
  }, 210);
}
function spawnDmg(wrapperId, type, text) {
  const wrap = $(wrapperId);
  const d    = document.createElement('div');
  d.className   = `dmg ${type}`;
  d.textContent = text;
  wrap.appendChild(d);
  setTimeout(() => d.remove(), 950);
}

// ─── RESULT MODAL ──────────────────────────────────────────
function showResult(outcome) {
  const nextLevel = state.level + 1;
  const isLast    = state.level >= MAX_LEVEL;

  const configs = {
    victory: {
      icon:  isLast ? '🏆' : '⚔️',
      title: isLast ? 'Mestre do PMBOK!' : `Level ${state.level} Vencido!`,
      score: `${state.score} / ${state.questions.length}`,
      msg:   isLast
        ? `Parabéns! Você completou todos os níveis!\nTotal de acertos: ${state.totalScore} / 30`
        : `Você derrotou o monstro!\nPrepare-se para o ${LEVEL_LABELS[nextLevel]}!`,      
      btnLabel: isLast ? 'Jogar Novamente' : `Próximo Level ▶`,
      btnOutcome: isLast ? 'restart-all' : 'next',
    },
    defeat: {
      icon:  '💀',
      title: 'Derrota!',
      score: `${state.score} / ${state.questions.length}`,
      msg:   `O monstro foi mais forte desta vez.\nAcertou ${state.score} de ${state.questions.length}.\nTente novamente!`,
      btnLabel: 'Tentar Novamente',
      btnOutcome: 'retry',
    },
    champion: {
      icon:  '🏆',
      title: 'Campeão!',
      score: `${state.totalScore} / 30`,
      msg:   'Você completou todos os níveis!\nVerdadeiro mestre do PMBOK!',
      btnLabel: 'Jogar Novamente',
      btnOutcome: 'restart-all',
    },
  };

  const cfg = configs[outcome] || configs.defeat;

  $('result-icon').textContent  = cfg.icon;
  $('result-title').textContent = cfg.title;
  $('result-score').textContent = cfg.score;
  $('result-msg').textContent   = cfg.msg;
  $('btn-result-close').textContent    = cfg.btnLabel;
  $('btn-result-close').dataset.outcome = cfg.btnOutcome;

  $('result-overlay').classList.add('open');
}

// btn-result-close handler (set in DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
  $('btn-result-close').addEventListener('click', () => {
    $('result-overlay').classList.remove('open');
    const outcome = $('btn-result-close').dataset.outcome;
    if (outcome === 'next')        advanceLevel();
    else if (outcome === 'retry')  restartLevel();
    else { state.totalScore = 0; startLevel(1); }
  });
});
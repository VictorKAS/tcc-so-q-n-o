// ═══════════════════════════════════════════════
//  PMBOK QUIZ — perguntas e lógica do jogo
// ═══════════════════════════════════════════════

const QUESTIONS = [
  {
    group: '1 - PMBOK é...',
    text: 'O que é o PMBOK?',
    opts: [
      'Um software de gestão de projetos',
      'Um guia de boas práticas em gerenciamento de projetos',
      'Uma metodologia ágil de desenvolvimento',
      'Um framework exclusivo para TI',
    ],
    correct: 1,
  },
  {
    group: '2 - Grupos de Processos',
    text: 'Quantos grupos de processos existem no PMBOK?',
    opts: ['3', '4', '5', '6'],
    correct: 2,
  },
  {
    group: '3 - Iniciação',
    text: 'Qual documento autoriza formalmente o início de um projeto?',
    opts: [
      'Plano de Gerenciamento do Projeto',
      'Registro de Riscos',
      'Termo de Abertura do Projeto',
      'Estrutura Analítica do Projeto (EAP)',
    ],
    correct: 2,
  },
  {
    group: '4 - Planejamento',
    text: 'O que é a EAP (Estrutura Analítica do Projeto)?',
    opts: [
      'Um gráfico de barras para o cronograma',
      'Uma lista de partes interessadas',
      'Uma decomposição hierárquica do trabalho do projeto',
      'Um relatório de desempenho',
    ],
    correct: 2,
  },
  {
    group: '5 - Planejamento',
    text: 'Qual processo pertence ao grupo de Planejamento?',
    opts: [
      'Orientar e Gerenciar o Trabalho',
      'Encerrar o Projeto ou Fase',
      'Desenvolver o Cronograma',
      'Monitorar e Controlar o Trabalho',
    ],
    correct: 2,
  },
  {
    group: '6 - Execução',
    text: 'O grupo de Execução é responsável por:',
    opts: [
      'Criar o cronograma detalhado',
      'Identificar e registrar os riscos',
      'Coordenar pessoas e recursos para executar o plano',
      'Encerrar contratos e formalizar entregas',
    ],
    correct: 2,
  },
  {
    group: '7 - Monit. e Controle',
    text: 'A análise de Valor Agregado (VA) é usada para:',
    opts: [
      'Identificar partes interessadas',
      'Medir o desempenho de custo e prazo do projeto',
      'Planejar as aquisições',
      'Encerrar fases do projeto',
    ],
    correct: 1,
  },
  {
    group: '8 - Monit. e Controle',
    text: 'O processo "Controlar o Cronograma" busca:',
    opts: [
      'Criar a linha de base do cronograma',
      'Identificar riscos de atraso',
      'Monitorar desvios e aplicar ações corretivas',
      'Encerrar atividades concluídas',
    ],
    correct: 2,
  },
  {
    group: '9 - Encerramento',
    text: 'O que o processo "Encerrar o Projeto ou Fase" inclui?',
    opts: [
      'Definição do escopo do projeto',
      'Identificação de novas partes interessadas',
      'Obtenção de aceitação formal e registro de lições aprendidas',
      'Planejamento detalhado dos riscos',
    ],
    correct: 2,
  },
  {
    group: '10 - Áreas de Conhecimento',
    text: 'Quantas áreas de conhecimento o PMBOK 6ª edição possui?',
    opts: ['8', '9', '10', '12'],
    correct: 2,
  },
];

// ─── ESTADO ────────────────────────────────────────
const MAX_HP    = 5;   // hits para matar
const HP_PCT    = 100; // barra em %

let state = {
  qIndex:    0,
  selected:  null,
  confirmed: false,
  heroHp:    MAX_HP,
  monsterHp: MAX_HP,
  level:     1,
  score:     0,
};

// ─── REFS ──────────────────────────────────────────
const $ = id => document.getElementById(id);

// ─── BOOT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderQuestion();
  updateHpBars();
  $('btn-confirm').addEventListener('click', onConfirm);
  $('btn-back').addEventListener('click', () => history.back());
  $('btn-result-close').addEventListener('click', () => {
    $('result-overlay').classList.remove('open');
    resetGame();
  });
  $('btn-result-back').addEventListener('click', () => history.back());
});

// ─── RENDER QUESTION ───────────────────────────────
function renderQuestion() {
  const q = QUESTIONS[state.qIndex];
  state.selected  = null;
  state.confirmed = false;

  $('q-label').textContent   = q.group;
  $('q-text').textContent    = q.text;
  $('q-counter').textContent = `${state.qIndex + 1} / ${QUESTIONS.length}`;
  $('feedback').textContent  = '';
  $('feedback').className    = '';
  $('quiz-card').style.animation = 'none';
  requestAnimationFrame(() => {
    $('quiz-card').style.animation = '';
  });

  const opts = $('options');
  opts.innerHTML = '';
  q.opts.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className   = 'opt';
    btn.textContent = `${String.fromCharCode(97 + i)}) ${text}`;
    btn.dataset.idx = i;
    btn.addEventListener('click', () => onSelect(i));
    opts.appendChild(btn);
  });

  $('btn-confirm').disabled = true;
  $('level-badge').textContent = `Level ${state.level}`;
}

// ─── SELECT OPTION ─────────────────────────────────
function onSelect(idx) {
  if (state.confirmed) return;
  state.selected = idx;
  document.querySelectorAll('.opt').forEach((b, i) => {
    b.classList.toggle('selected', i === idx);
  });
  $('btn-confirm').disabled = false;
}

// ─── CONFIRM ───────────────────────────────────────
function onConfirm() {
  if (state.selected === null || state.confirmed) return;
  state.confirmed = true;

  const q       = QUESTIONS[state.qIndex];
  const correct = state.selected === q.correct;

  // Highlight options
  document.querySelectorAll('.opt').forEach((b, i) => {
    b.disabled = true;
    b.classList.remove('selected');
    if (i === q.correct)         b.classList.add('correct');
    else if (i === state.selected) b.classList.add('wrong');
  });
  $('btn-confirm').disabled = true;

  if (correct) {
    state.score++;
    state.monsterHp--;
    $('feedback').textContent = '✔ Correto! Monstro atacado!';
    $('feedback').className   = 'ok';
    triggerAttack('hero',    'do-attack-r');
    triggerHit   ('monster', 'do-hit');
    spawnDmg('monster-wrap', 'hit', '-1 ♥');
    updateHpBars();
    if (state.monsterHp <= 0) {
      setTimeout(() => showResult('victory'), 900);
      return;
    }
  } else {
    state.heroHp--;
    $('feedback').textContent = '✘ Errado! Herói recebeu dano!';
    $('feedback').className   = 'ko';
    triggerAttack('monster', 'do-attack-l');
    triggerHit   ('hero',    'do-hit');
    spawnDmg('hero-wrap', 'miss', '-1 ♥');
    updateHpBars();
    if (state.heroHp <= 0) {
      setTimeout(() => showResult('defeat'), 900);
      return;
    }
  }

  // Advance
  setTimeout(() => {
    state.qIndex++;
    if (state.qIndex >= QUESTIONS.length) {
      showResult(state.monsterHp > 0 ? 'draw' : 'victory');
    } else {
      renderQuestion();
    }
  }, 1100);
}

// ─── HP BARS ───────────────────────────────────────
function updateHpBars() {
  const heroPct    = Math.max(0, (state.heroHp    / MAX_HP) * 100);
  const monsterPct = Math.max(0, (state.monsterHp / MAX_HP) * 100);
  $('hero-hp-bar').style.width    = heroPct    + '%';
  $('monster-hp-bar').style.width = monsterPct + '%';
}

// ─── ANIMATION HELPERS ─────────────────────────────
function triggerAttack(who, cls) {
  const el = $(who + '-fighter');
  el.classList.remove('do-attack-r', 'do-attack-l', 'do-hit');
  void el.offsetWidth;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 450);
}
function triggerHit(who, cls) {
  const el = $(who + '-fighter');
  setTimeout(() => {
    el.classList.remove('do-attack-r', 'do-attack-l', 'do-hit');
    void el.offsetWidth;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), 450);
  }, 200);
}
function spawnDmg(wrapperId, type, text) {
  const wrap = $(wrapperId);
  const d    = document.createElement('div');
  d.className   = `dmg ${type}`;
  d.textContent = text;
  wrap.appendChild(d);
  setTimeout(() => d.remove(), 900);
}

// ─── RESULT MODAL ──────────────────────────────────
function showResult(outcome) {
  const icons   = { victory: '🏆', defeat: '💀', draw: '⚔️' };
  const titles  = { victory: 'Vitória!',  defeat: 'Derrota!',  draw: 'Empate!' };
  const msgs    = {
    victory: `Você derrotou o monstro!\nAcertou ${state.score} de ${QUESTIONS.length} perguntas.`,
    defeat:  `O monstro venceu desta vez!\nAcertou ${state.score} de ${QUESTIONS.length} perguntas.`,
    draw:    `Batalha encerrada!\nAcertou ${state.score} de ${QUESTIONS.length} perguntas.`,
  };

  if (outcome === 'victory') state.level++;

  $('result-icon').textContent  = icons[outcome];
  $('result-title').textContent = titles[outcome];
  $('result-score').textContent = `${state.score} / ${QUESTIONS.length}`;
  $('result-msg').textContent   = msgs[outcome];
  $('result-overlay').classList.add('open');
}

function resetGame() {
  state.qIndex    = 0;
  state.selected  = null;
  state.confirmed = false;
  state.heroHp    = MAX_HP;
  state.monsterHp = MAX_HP;
  state.score     = 0;
  updateHpBars();
  renderQuestion();
}

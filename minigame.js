// ─── DADOS DO JOGO ───────────────────────────────────────────
const PROCESSOS = [
  { id: 'p1',  text: 'Termo de\nAbertura',              grupo: 'iniciacao'     },
  { id: 'p2',  text: 'Identificar\nPartes Interessadas', grupo: 'iniciacao'     },
  { id: 'p3',  text: 'Plano de\nGerenciamento',          grupo: 'planejamento'  },
  { id: 'p4',  text: 'Planejar\nos Riscos',              grupo: 'planejamento'  },
  { id: 'p5',  text: 'Orientar o\nTrabalho',             grupo: 'execucao'      },
  { id: 'p6',  text: 'Gerenciar\na Qualidade',           grupo: 'execucao'      },
  { id: 'p7',  text: 'Monitorar o\nTrabalho',            grupo: 'monitoramento' },
  { id: 'p8',  text: 'Controlar o\nCronograma',          grupo: 'monitoramento' },
  { id: 'p9',  text: 'Encerrar o\nProjeto',              grupo: 'encerramento'  },
  { id: 'p10', text: 'Encerrar\nAquisições',             grupo: 'encerramento'  },
];

const MAX_PER_ZONE = 2;

// Estado do jogo
let level        = 0;
let draggedId    = null;
let draggedFrom  = null; // 'list' | zone-id
let checked      = false;

// ─── UTILITÁRIOS ─────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── ESTADO REATIVO ──────────────────────────────────────────
// processosList: ids presentes no painel esquerdo
// zones: { zoneId: [id, id] }
let processosList = [];
let zones = {
  iniciacao:     [],
  planejamento:  [],
  execucao:      [],
  monitoramento: [],
  encerramento:  [],
};

// ─── INICIALIZAÇÃO ───────────────────────────────────────────
function init() {
  checked = false;
  processosList = shuffle(PROCESSOS).map(p => p.id);
  zones = {
    iniciacao:     [],
    planejamento:  [],
    execucao:      [],
    monitoramento: [],
    encerramento:  [],
  };
  render();
  document.getElementById('score-display').classList.remove('visible');
  document.getElementById('level-display').textContent = `Level ${level}`;
}

// ─── RENDER ──────────────────────────────────────────────────
function render() {
  renderList();
  Object.keys(zones).forEach(zid => renderZone(zid));
}

function makeCardEl(id, inZone = false) {
  const proc = PROCESSOS.find(p => p.id === id);
  const el = document.createElement('div');
  el.className = 'card' + (inZone ? ' placed' : '');
  el.dataset.id = id;
  el.draggable = true;
  el.textContent = proc.text;
  // style newlines as line breaks
  el.style.whiteSpace = 'pre-line';

  if (checked) {
    const correct = isCorrect(id, inZone ? getZoneOfCard(id) : null);
    if (inZone) el.classList.add(correct ? 'correct' : 'wrong');
  }

  el.addEventListener('dragstart', onDragStart);
  el.addEventListener('dragend',   onDragEnd);

  // Touch support
  el.addEventListener('touchstart', onTouchStart, { passive: false });
  el.addEventListener('touchmove',  onTouchMove,  { passive: false });
  el.addEventListener('touchend',   onTouchEnd);

  return el;
}

function renderList() {
  const list = document.getElementById('processos-list');
  list.innerHTML = '';
  processosList.forEach(id => {
    list.appendChild(makeCardEl(id, false));
  });
}

function renderZone(zoneId) {
  const container = document.querySelector(`[data-zone="${zoneId}"] .drop-zone-cards`);
  if (!container) return;
  container.innerHTML = '';
  zones[zoneId].forEach(id => {
    container.appendChild(makeCardEl(id, true));
  });
  // Placeholders
  const remaining = MAX_PER_ZONE - zones[zoneId].length;
  for (let i = 0; i < remaining; i++) {
    const ph = document.createElement('div');
    ph.className = 'slot-placeholder';
    container.appendChild(ph);
  }
  // Mark zone full
  const zone = document.querySelector(`[data-zone="${zoneId}"]`);
  zone.classList.toggle('full', zones[zoneId].length >= MAX_PER_ZONE);
}

// ─── DRAG & DROP (Mouse) ─────────────────────────────────────
function onDragStart(e) {
  draggedId   = e.currentTarget.dataset.id;
  draggedFrom = getSourceOf(draggedId);
  e.currentTarget.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', draggedId);
  // Invisible default ghost
  const ghost = document.createElement('div');
  ghost.style.position = 'fixed'; ghost.style.top = '-9999px';
  document.body.appendChild(ghost);
  e.dataTransfer.setDragImage(ghost, 0, 0);
  setTimeout(() => ghost.remove(), 0);
  showGhost(e.clientX, e.clientY, PROCESSOS.find(p => p.id === draggedId).text);
}

function onDragEnd(e) {
  e.currentTarget.classList.remove('dragging');
  draggedId   = null;
  draggedFrom = null;
  hideGhost();
}

// Drop zones
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const zoneId = zone.dataset.zone;
      handleDrop(zoneId);
    });
  });

  // Drop back to list
  const list = document.getElementById('processos-list');
  list.addEventListener('dragover', e => { e.preventDefault(); list.style.outline = '2px dashed rgba(0,255,136,0.4)'; });
  list.addEventListener('dragleave', () => list.style.outline = '');
  list.addEventListener('drop', e => {
    e.preventDefault();
    list.style.outline = '';
    handleDropToList();
  });

  // Mouse move for ghost
  document.addEventListener('dragover', e => moveGhost(e.clientX, e.clientY));
});

function handleDrop(zoneId) {
  if (!draggedId) return;
  if (zones[zoneId].length >= MAX_PER_ZONE) return;

  // Remove from source
  removeFromSource(draggedId, draggedFrom);

  // Add to zone
  zones[zoneId].push(draggedId);
  checked = false;
  render();
}

function handleDropToList() {
  if (!draggedId || draggedFrom === 'list') return;
  removeFromSource(draggedId, draggedFrom);
  processosList.push(draggedId);
  checked = false;
  render();
}

function removeFromSource(id, source) {
  if (source === 'list') {
    processosList = processosList.filter(i => i !== id);
  } else {
    zones[source] = zones[source].filter(i => i !== id);
  }
}

function getSourceOf(id) {
  if (processosList.includes(id)) return 'list';
  for (const [zid, ids] of Object.entries(zones)) {
    if (ids.includes(id)) return zid;
  }
  return null;
}

function getZoneOfCard(id) {
  for (const [zid, ids] of Object.entries(zones)) {
    if (ids.includes(id)) return zid;
  }
  return null;
}

// ─── GHOST ELEMENT ───────────────────────────────────────────
const ghost = document.getElementById('drag-ghost');
function showGhost(x, y, text) {
  ghost.style.display = 'block';
  ghost.textContent = text;
  ghost.style.whiteSpace = 'pre-line';
  moveGhost(x, y);
}
function moveGhost(x, y) {
  if (ghost.style.display === 'none') return;
  ghost.style.left = x + 'px';
  ghost.style.top  = y + 'px';
}
function hideGhost() {
  ghost.style.display = 'none';
}

// ─── TOUCH DRAG ──────────────────────────────────────────────
let touchCard = null;
let touchStartX = 0, touchStartY = 0;

function onTouchStart(e) {
  touchCard = e.currentTarget;
  draggedId   = touchCard.dataset.id;
  draggedFrom = getSourceOf(draggedId);
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  touchCard.classList.add('dragging');
  showGhost(touchStartX, touchStartY, PROCESSOS.find(p => p.id === draggedId).text);
}

function onTouchMove(e) {
  e.preventDefault();
  const t = e.touches[0];
  moveGhost(t.clientX, t.clientY);
}

function onTouchEnd(e) {
  hideGhost();
  if (touchCard) touchCard.classList.remove('dragging');

  const t = e.changedTouches[0];
  const target = document.elementFromPoint(t.clientX, t.clientY);
  if (!target) { draggedId = draggedFrom = null; touchCard = null; return; }

  const zone = target.closest('.drop-zone');
  const list = target.closest('#processos-list') || target.closest('#processos-panel');

  if (zone) {
    handleDrop(zone.dataset.zone);
  } else if (list) {
    handleDropToList();
  }

  draggedId = draggedFrom = null;
  touchCard = null;
}

// ─── CONFERIR RESULTADO ──────────────────────────────────────
function checkResult() {
  checked = true;
  let acertos = 0;
  Object.entries(zones).forEach(([zid, ids]) => {
    ids.forEach(id => {
      if (isCorrect(id, zid)) acertos++;
    });
  });
  render();

  const total = PROCESSOS.length;
  const scoreEl = document.getElementById('score-display');
  scoreEl.textContent = `Acertou ${acertos} de ${total}`;
  scoreEl.classList.add('visible');

  // Show result modal
  const msg = acertos === total
    ? 'Perfeito! Você domina o PMBOK!'
    : acertos >= 7
    ? 'Muito bem! Quase lá, aventureiro!'
    : acertos >= 4
    ? 'Continue praticando, herói!'
    : 'Não desanime! Tente novamente!';

  document.getElementById('result-score').textContent = `${acertos} / ${total}`;
  document.getElementById('result-msg').textContent   = msg;
  document.getElementById('result-overlay').classList.add('open');

  if (acertos === total) level++;
  document.getElementById('level-display').textContent = `Level ${level}`;
}

function isCorrect(id, zoneId) {
  const proc = PROCESSOS.find(p => p.id === id);
  return proc && proc.grupo === zoneId;
}

// ─── RESET ───────────────────────────────────────────────────
function resetGame() {
  init();
}

function closeResult() {
  document.getElementById('result-overlay').classList.remove('open');
}

// ─── BOOT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);

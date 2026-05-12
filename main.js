// ─── STARS ───────────────────────────────────────────────────
const starsLayer = document.getElementById('stars-layer');
for (let i = 0; i < 80; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 2.5 + 0.8;
  s.style.cssText = `
    left:${Math.random() * 100}%;
    top:${Math.random() * 45}%;
    width:${size}px; height:${size}px;
    animation-delay:${Math.random() * 4}s;
    animation-duration:${2 + Math.random() * 3}s;
    opacity:${Math.random() * 0.6 + 0.2}
  `;
  starsLayer.appendChild(s);
}

// ─── CLOUDS ──────────────────────────────────────────────────
const cloudsLayer = document.getElementById('clouds-layer');
const cloudData = [
  { w: 280, h: 70,  top: 8,  delay: 0,  dur: 55 },
  { w: 200, h: 50,  top: 14, delay: 20, dur: 70 },
  { w: 340, h: 80,  top: 5,  delay: 35, dur: 85 },
  { w: 160, h: 45,  top: 20, delay: 10, dur: 60 },
  { w: 220, h: 60,  top: 18, delay: 45, dur: 75 },
];
cloudData.forEach(c => {
  const el = document.createElement('div');
  el.className = 'cloud';
  el.style.cssText = `
    width:${c.w}px; height:${c.h}px;
    top:${c.top}%;
    animation-duration:${c.dur}s;
    animation-delay:-${c.delay}s;
  `;
  cloudsLayer.appendChild(el);
});

// ─── PARTICLES / FIREFLIES ───────────────────────────────────
const pLayer = document.getElementById('particles-layer');
function spawnParticle() {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 5 + 3;
  const dur  = Math.random() * 3 + 3;
  p.style.cssText = `
    left:${10 + Math.random() * 80}%;
    bottom:${25 + Math.random() * 25}%;
    width:${size}px; height:${size}px;
    animation-duration:${dur}s;
    animation-delay:0s;
  `;
  pLayer.appendChild(p);
  setTimeout(() => p.remove(), dur * 1000);
}
setInterval(spawnParticle, 350);

// ─── MODAL CADASTRO ──────────────────────────────────────────
function showCadastroModal() {
  document.getElementById('modal-cadastro-overlay').classList.add('open');
}
function closeCadastroModal() {
  document.getElementById('modal-cadastro-overlay').classList.remove('open');
}
function handleCadastroOverlayClick(e) {
  if (e.target === document.getElementById('modal-cadastro-overlay')) closeCadastroModal();
}

// ─── MODAL LOGIN ─────────────────────────────────────────────
function showLoginModal() {
  document.getElementById('modal-login-overlay').classList.add('open');
}
function closeLoginModal() {
  document.getElementById('modal-login-overlay').classList.remove('open');
}
function handleLoginOverlayClick(e) {
  if (e.target === document.getElementById('modal-login-overlay')) closeLoginModal();
}

// ─── ALTERNÂNCIA ENTRE MODAIS ────────────────────────────────
function switchToLogin() {
  closeCadastroModal();
  setTimeout(showLoginModal, 200);
}
function switchToCadastro() {
  closeLoginModal();
  setTimeout(showCadastroModal, 200);
}

// ─── ESC FECHA QUALQUER MODAL ABERTO ────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCadastroModal();
    closeLoginModal();
  }
});
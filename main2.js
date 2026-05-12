// ─── DUST / MOTE PARTICLES ───────────────────────────────────
const scene = document.getElementById('scene');

function spawnDust() {
  const d = document.createElement('div');
  d.className = 'dust';
  const size = Math.random() * 2.5 + 1;
  const dur  = Math.random() * 6 + 5;
  const startX = 5 + Math.random() * 35; // left side near fire
  const startY = 30 + Math.random() * 40;
  d.style.cssText = `
    left:${startX}%;
    bottom:${startY}%;
    width:${size}px; height:${size}px;
    animation-duration:${dur}s;
    animation-delay:${Math.random() * 4}s;
    opacity:0;
  `;
  scene.appendChild(d);
  setTimeout(() => d.remove(), (dur + 4) * 1000);
}
setInterval(spawnDust, 500);

// ─── CANDLE FLICKER (CSS variable driven) ────────────────────
// Randomly shifts the warm glow intensity on the scene bg
const sceneBg = document.getElementById('scene-bg');
if (sceneBg) {
  setInterval(() => {
    const intensity = 0.85 + Math.random() * 0.15;
    sceneBg.style.opacity = intensity;
  }, 80);
}
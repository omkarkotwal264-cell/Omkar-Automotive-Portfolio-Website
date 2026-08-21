const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const modeBtn = document.querySelector('.mode-btn');
const modal = document.querySelector('#modal');
const modalTitle = document.querySelector('#modal-title');
const modalContent = document.querySelector('#modal-content');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
modeBtn.addEventListener('click', () => { document.body.classList.toggle('light'); modeBtn.textContent = document.body.classList.contains('light') ? '☀' : '◐'; });

const projects = {
  "Automotive Innovation Hub": "A visual-first automotive concept built to practise semantic HTML, responsive CSS, spacing, cards, typography and polished UI details.",
  "TaskFlow": "A JavaScript learning project focused on DOM selection, click events, state changes and useful user feedback.",
  "Performance Calculator": "A practical JavaScript exercise that turns user inputs into a calculated result and presents it in a simple interface."
};
const cars = {
  "BMW M4": { engine: "3.0L Twin Turbo", power: "503 to 523 HP", accel: "3.5 sec", speed: "250 km/h", type: "Sports Coupe" },
  "Porsche 911": { engine: "3.0L Twin Turbo", power: "473 HP", accel: "3.7 sec", speed: "293 km/h", type: "Performance" },
  "Mercedes AMG GT": { engine: "4.0L V8 Biturbo", power: "577 HP", accel: "3.2 sec", speed: "315 km/h", type: "Grand Tourer" }
};
document.querySelectorAll('.demo-btn').forEach(btn => btn.addEventListener('click', () => {
  modalTitle.textContent = btn.dataset.project;
  modalContent.innerHTML = `<p>${projects[btn.dataset.project]}</p>`;
  modal.classList.add('open');
}));
document.querySelectorAll('.details-btn').forEach(btn => btn.addEventListener('click', () => {
  const c = cars[btn.dataset.car];
  modalTitle.textContent = cars[btn.dataset.car] ? btn.dataset.car : 'Car Details';
  modalContent.innerHTML = `<p>A sample interactive specification panel for the automotive card.</p><div class="detail-grid"><div><small>POWER</small><b>${c.power}</b></div><div><small>0–100</small><b>${c.accel}</b></div><div><small>TOP SPEED</small><b>${c.speed}</b></div><div><small>ENGINE</small><b>${c.engine}</b></div></div>`;
  modal.classList.add('open');
}));
document.querySelector('.close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal() });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() });
function closeModal() { modal.classList.remove('open'); }

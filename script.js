// Matrix Rain
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 20;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f0';
  ctx.font = `${fontSize}px VT323, monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);

// Redimensionar canvas
window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

// Terminal Interativo
const terminalOutput = document.getElementById('terminal-output');

// Dados que serão exibidos
const terminalData = [
  '> Iniciando sistema... [OK]',
  '> Nome: Leonardo Brandão',
  '> Ocupação: Desenvolvedor Mobile',
  '> Habilidades: HTML, CSS, JavaScript, Python, Flutter, Java, C#',
  '> Missão: Sempre querer aprender novas tecnologias para criar soluções digitais'
];

function displayTerminalLines() {
  terminalData.forEach((line, index) => {
    setTimeout(() => {
      const p = document.createElement('p');
      p.textContent = line;
      terminalOutput.appendChild(p);
      setTimeout(() => {
        p.classList.add('animate');
      }, 100);
    }, index * 2500);
  });
}

// Inicia o terminal quando a página carrega
window.addEventListener('load', () => {
  displayTerminalLines();
});
0const themeToggle = document.getElementById('theme-toggle');
const messageButton = document.getElementById('message-button');
const messageOutput = document.getElementById('message-output');

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  themeToggle.textContent = isDark ? 'Tema claro' : 'Tema oscuro';
}

function showMessage() {
  messageOutput.textContent = '¡Listo! Este proyecto ya incluye HTML, CSS y JavaScript.';
}

themeToggle.addEventListener('click', toggleTheme);
messageButton.addEventListener('click', showMessage);

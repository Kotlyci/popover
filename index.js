const btn = document.getElementById('popover-btn');
const popover = document.getElementById('popover');

btn.addEventListener('click', (e) => {
  popover.classList.toggle('hidden');
  // Позиционирование popover относительно кнопки
  const rect = btn.getBoundingClientRect();
  popover.style.top = `${rect.bottom + window.scrollY + 5}px`;
  popover.style.left = `${rect.left + window.scrollX}px`;
});

// Скрытие popover при клике вне его
document.addEventListener('click', (e) => {
  if (!btn.contains(e.target) && !popover.contains(e.target)) {
    popover.classList.add('hidden');
  }
});
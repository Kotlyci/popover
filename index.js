import './style.css';

export function initPopover() {
  const btn = document.getElementById('popover-btn');
  const popover = document.getElementById('popover');

  if (!btn || !popover) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    popover.classList.toggle('hidden');
    const rect = btn.getBoundingClientRect();
    popover.style.top = `${rect.bottom + window.scrollY + 5}px`;
    popover.style.left = `${rect.left + window.scrollX}px`;
  });

  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !popover.contains(e.target)) {
      popover.classList.add('hidden');
    }
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initPopover);
}
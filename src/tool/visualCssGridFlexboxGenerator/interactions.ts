import type { LayoutMode } from './logic';

export function setupSpanHandler(
  canvas: HTMLElement,
  modeFn: () => LayoutMode,
  itemPrefix: string,
  onUpdate: () => void,
) {
  canvas.addEventListener('dblclick', (e: MouseEvent) => {
    const item = (e.target as HTMLElement).closest('.vcg-item') as HTMLElement | null;
    if (!item || modeFn() !== 'grid') return;
    const cur = Number(item.dataset.span ?? '1');
    const next = cur >= 3 ? 1 : cur + 1;
    item.dataset.span = String(next);
    const label = item.querySelector('span');
    if (label) {
      const num = item.dataset.item;
      label.textContent = next > 1 ? `${itemPrefix} ${num} (${next}x)` : `${itemPrefix} ${num}`;
    }
    onUpdate();
  });
}

export function spawnConfetti(x: number, y: number) {
  const container = document.createElement('div');
  container.className = 'vcg-confetti-container';
  const colors = ['#2dd4bf', '#fbbf24', '#6366f1', '#f472b6', '#34d399', '#f97316', '#a78bfa', '#22d3ee', '#fde047'];
  for (let i = 0; i < 32; i++) {
    const p = document.createElement('div');
    p.className = 'vcg-confetti-piece';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]!;
    p.style.width = `${5 + Math.random() * 7}px`;
    p.style.height = `${5 + Math.random() * 7}px`;
    const a = Math.random() * Math.PI * 2;
    const d = 40 + Math.random() * 80;
    p.style.setProperty('--cx', `${Math.cos(a) * d}px`);
    p.style.setProperty('--cy', `${Math.sin(a) * d - 30}px`);
    p.style.setProperty('--cr', `${Math.random() * 720 - 360}deg`);
    container.append(p);
  }
  document.body.append(container);
  setTimeout(() => container.remove(), 900);
}

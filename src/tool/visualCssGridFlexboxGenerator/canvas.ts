import type { LayoutMode, LayoutState } from './logic';

export function getAllItems(canvas: HTMLElement): HTMLElement[] {
  return Array.from(canvas.querySelectorAll<HTMLElement>('.vcg-item'));
}

export function getItemSpans(canvas: HTMLElement): Record<string, number> {
  const spans: Record<string, number> = {};
  for (const item of getAllItems(canvas)) {
    const s = Number(item.dataset.span ?? '1');
    if (s > 1) spans[item.dataset.item ?? ''] = s;
  }
  return spans;
}

export function refreshItemLabels(canvas: HTMLElement, itemPrefix: string) {
  getAllItems(canvas).forEach((item, index) => {
    item.dataset.item = String(index + 1);
    const label = item.querySelector('span');
    if (label) label.textContent = `${itemPrefix} ${index + 1}`;
  });
}

export function makeItem(index: number, itemPrefix: string): HTMLElement {
  const item = document.createElement('div');
  const label = document.createElement('span');
  item.className = 'vcg-item vcg-enter';
  item.dataset.item = String(index);
  item.dataset.span = '1';
  label.textContent = `${itemPrefix} ${index}`;
  item.append(label);
  item.addEventListener('animationend', () => item.classList.remove('vcg-enter'));
  return item;
}

function paintGridItem(item: HTMLElement, state: LayoutState) {
  const span = Number(item.dataset.span ?? '1');
  item.style.minWidth = `${state.itemSize}px`;
  item.style.minHeight = `${state.itemSize}px`;
  item.style.gridColumn = span > 1 ? `span ${span}` : '';
  item.classList.toggle('vcg-spanned', span > 1);
}

function paintFlexItem(item: HTMLElement, state: LayoutState) {
  item.style.minWidth = `${state.itemSize}px`;
  item.style.minHeight = `${state.itemSize}px`;
  item.style.gridColumn = '';
  item.classList.remove('vcg-spanned');
}

export function paintCanvas(canvas: HTMLElement, state: LayoutState) {
  canvas.style.display = state.mode;
  canvas.style.gap = `${state.gap}px`;
  canvas.style.justifyContent = state.justifyContent;
  canvas.style.alignItems = state.alignItems;
  canvas.style.width = `${state.width}px`;
  canvas.style.minHeight = `${state.height}px`;

  if (state.mode === 'grid') {
    canvas.style.gridTemplateColumns = `repeat(${state.columns}, minmax(0, 1fr))`;
    canvas.style.flexDirection = '';
    canvas.style.flexWrap = '';
    canvas.style.alignContent = '';
  } else {
    canvas.style.gridTemplateColumns = '';
    canvas.style.flexDirection = state.flexDirection;
    canvas.style.flexWrap = state.flexWrap;
    canvas.style.alignContent = state.flexWrap !== 'nowrap' ? state.alignContent : '';
  }

  const painter = state.mode === 'grid' ? paintGridItem : paintFlexItem;
  getAllItems(canvas).forEach((item) => painter(item, state));
}

export function toggleVisibility(mode: LayoutMode, wrapValue: string) {
  document.querySelectorAll<HTMLElement>('.vcg-grid-only').forEach((el) => {
    el.classList.toggle('vcg-hidden', mode !== 'grid');
  });
  document.querySelectorAll<HTMLElement>('.vcg-flex-only').forEach((el) => {
    el.classList.toggle('vcg-hidden', mode !== 'flex');
  });
  const acw = document.getElementById('vcg-align-content-wrap');
  if (acw && mode === 'flex') {
    acw.classList.toggle('vcg-hidden', wrapValue === 'nowrap');
  }
}

export function setLabelText(id: string, text: string) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

export function updateLabels(state: LayoutState) {
  setLabelText('vcg-gap-value', `${state.gap}px`);
  setLabelText('vcg-columns-value', String(state.columns));
  setLabelText('vcg-width-value', `${state.width}px`);
  setLabelText('vcg-height-value', `${state.height}px`);
  setLabelText('vcg-item-size-value', `${state.itemSize}px`);
}

export function clearPresetActive() {
  document.querySelectorAll('.vcg-preset-button').forEach((b) => b.classList.remove('vcg-preset-active'));
}

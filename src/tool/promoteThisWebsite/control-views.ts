import { activeLabel } from './evaluator';
import type { CompositionState, LayerKey } from './logic';
import type { PromoteThisWebsiteUI } from './ui';

const labels: Record<LayerKey, keyof PromoteThisWebsiteUI> = { background: 'backgroundLayer', tool: 'toolLayer', brand: 'logoLayer', mascot: 'mascotLayer', title: 'titleLayer' };

function query<T extends HTMLElement>(root: HTMLElement, selector: string): T | null {
  return root.querySelector(selector) as T | null;
}

function syncValue(root: HTMLElement, selector: string, value: string): void {
  const control = query<HTMLInputElement>(root, selector);
  if (control) control.value = value;
}

function setMenuPlacement(trigger: HTMLElement, menu: HTMLElement): void {
  const triggerRect = trigger.getBoundingClientRect();
  const roomBelow = window.innerHeight - triggerRect.bottom;
  const roomAbove = triggerRect.top;
  menu.dataset.placement = roomBelow < 260 && roomAbove > roomBelow ? 'top' : 'bottom';
}

function syncCustomValue(root: HTMLElement, key: string, value: string): void {
  const control = query<HTMLElement>(root, `[data-promote-select="${key}"]`);
  if (!control) return;
  control.dataset.value = value;
  const option = query<HTMLElement>(control, `[data-value="${value}"]`);
  const label = query<HTMLElement>(control, '[data-select-label]');
  if (label && option) label.textContent = option.textContent;
  control.querySelectorAll<HTMLElement>('[role="option"]').forEach((item) => { item.setAttribute('aria-selected', String(item.dataset.value === value)); });
}

export function bindCustomSelect(root: HTMLElement, key: string, onChange: (value: string) => void): void {
  const control = query<HTMLElement>(root, `[data-promote-select="${key}"]`);
  const trigger = query<HTMLButtonElement>(control || root, '.promote-select-trigger');
  const menu = query<HTMLElement>(control || root, '.promote-select-menu');
  if (!control || !trigger || !menu) return;
  const close = () => { menu.hidden = true; trigger.setAttribute('aria-expanded', 'false'); };
  const open = () => {
    setMenuPlacement(trigger, menu);
    root.querySelectorAll<HTMLElement>('.promote-select-menu').forEach((item) => { item.hidden = true; });
    root.querySelectorAll<HTMLButtonElement>('.promote-select-trigger').forEach((item) => { item.setAttribute('aria-expanded', 'false'); });
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
  };
  const choose = (option: HTMLElement) => {
    const value = option.dataset.value;
    if (!value) return;
    syncCustomValue(root, key, value);
    close();
    onChange(value);
  };
  trigger.addEventListener('click', () => { if (menu.hidden) open(); else close(); });
  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
    if (event.key === 'Escape') close();
  });
  menu.querySelectorAll<HTMLElement>('[role="option"]').forEach((option) => option.addEventListener('click', () => choose(option)));
  root.addEventListener('click', (event) => { if (!control.contains(event.target as Node)) close(); });
}

export function syncControls(root: HTMLElement, state: CompositionState, ui: PromoteThisWebsiteUI): void {
  syncValue(root, '#promote-url', state.sourceUrl);
  syncCustomValue(root, 'format', state.format);
  syncValue(root, '#promote-title', state.title);
  syncValue(root, '#promote-title-size', state.titleFontSize.toString());
  syncValue(root, '#promote-title-box-size', state.scale.title.toString());
  syncCustomValue(root, 'title-style', state.titleStyle);
  syncCustomValue(root, 'brand', state.brand);
  syncCustomValue(root, 'brand-style', state.brandStyle);
  syncLayerControls(root, state);
  const label = query<HTMLElement>(root, '#promote-active');
  if (label) label.textContent = `${ui.activeLayer}: ${activeLabel(state, Object.fromEntries(Object.entries(labels).map(([key, value]) => [key, ui[value]])) as Record<LayerKey, string>)}`;
}

function syncLayerControls(root: HTMLElement, state: CompositionState): void {
  (Object.keys(state.visible) as LayerKey[]).forEach((key) => {
    const visible = query<HTMLInputElement>(root, `#promote-${key}-visible`);
    if (visible) visible.checked = state.visible[key];
    const scale = query<HTMLInputElement>(root, `#promote-${key}-scale`);
    if (scale) scale.value = state.scale[key].toString();
  });
}

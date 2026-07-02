import type { LayoutMode } from './logic';
import { getAllItems, clearPresetActive } from './canvas';

type PresetCfg = Partial<{
  mode: LayoutMode;
  gap: number; columns: number; width: number; height: number; itemSize: number;
  justifyContent: string; alignItems: string; flexDirection: string;
  flexWrap: string; alignContent: string;
}>;

export const PRESETS: Record<string, PresetCfg> = {
  navbar: { mode: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: 12, justifyContent: 'space-between', alignItems: 'center', alignContent: 'stretch', width: 760, height: 220, itemSize: 80 },
  cards: { mode: 'grid', columns: 3, gap: 24, justifyContent: 'center', alignItems: 'center', width: 760, height: 420, itemSize: 100 },
  hero: { mode: 'flex', flexDirection: 'column', flexWrap: 'nowrap', gap: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: 600, height: 500, itemSize: 120 },
  sidebar: { mode: 'grid', columns: 2, gap: 16, justifyContent: 'start', alignItems: 'stretch', width: 760, height: 460, itemSize: 100 },
  gallery: { mode: 'grid', columns: 4, gap: 12, justifyContent: 'center', alignItems: 'start', width: 760, height: 400, itemSize: 80 },
};

interface PresetCtrls {
  gapInput: HTMLInputElement;
  columnsInput: HTMLInputElement;
  widthInput: HTMLInputElement;
  heightInput: HTMLInputElement;
  itemSizeInput: HTMLInputElement;
  justifySelect: HTMLSelectElement;
  alignSelect: HTMLSelectElement;
  directionSelect: HTMLSelectElement;
  wrapSelect: HTMLSelectElement;
  alignContentSelect: HTMLSelectElement;
}

const KEY_MAP: Record<string, keyof PresetCtrls> = {
  gap: 'gapInput', columns: 'columnsInput', width: 'widthInput', height: 'heightInput',
  itemSize: 'itemSizeInput', justifyContent: 'justifySelect', alignItems: 'alignSelect',
  flexDirection: 'directionSelect', flexWrap: 'wrapSelect', alignContent: 'alignContentSelect',
};

interface PresetContext {
  canvas: HTMLElement;
  ctrls: PresetCtrls;
  setMode: (m: LayoutMode) => void;
  update: () => void;
}

export function applyPreset(name: string, ctx: PresetContext) {
  const cfg = PRESETS[name];
  if (!cfg) return;

  clearPresetActive();
  const btn = document.querySelector(`[data-preset="${name}"]`);
  if (btn) btn.classList.add('vcg-preset-active');

  getAllItems(ctx.canvas).forEach((item) => { item.dataset.span = '1'; });
  if (cfg.mode) ctx.setMode(cfg.mode);

  for (const [key, value] of Object.entries(cfg)) {
    if (key === 'mode') continue;
    const ck = KEY_MAP[key] as keyof PresetCtrls | undefined;
    if (ck && ctx.ctrls[ck]) ctx.ctrls[ck].value = String(value);
  }

  ctx.update();
}

import type { LayoutMode, LayoutState } from './logic';
import { buildLayoutCss } from './logic';
import type { VisualCssGridFlexboxGeneratorUI } from './ui';
import {
  getAllItems, getItemSpans, paintCanvas, updateLabels, toggleVisibility,
  refreshItemLabels, makeItem, clearPresetActive,
} from './canvas';
import { applyPreset } from './presets';

export { setupSpanHandler, spawnConfetti } from './interactions';

interface Ctrls {
  canvas: HTMLElement;
  code: HTMLElement;
  codePanel: HTMLElement;
  gap: HTMLInputElement;
  cols: HTMLInputElement;
  width: HTMLInputElement;
  height: HTMLInputElement;
  size: HTMLInputElement;
  justify: HTMLSelectElement;
  align: HTMLSelectElement;
  direction: HTMLSelectElement;
  wrap: HTMLSelectElement;
  alignContent: HTMLSelectElement;
}

export interface Workspace {
  readState(): LayoutState;
  update(): void;
  setMode(mode: LayoutMode): void;
  addItem(): void;
  removeItem(): void;
  resetLayout(): void;
  applyPreset(name: string): void;
  canvas: HTMLElement;
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
  code: HTMLElement;
  codePanel: HTMLElement;
}

class WorkspaceImpl implements Workspace {
  private mode: LayoutMode = 'flex';
  private c: Ctrls;
  private t: VisualCssGridFlexboxGeneratorUI;
  private root: HTMLElement;
  private flexBtn: HTMLButtonElement;
  private gridBtn: HTMLButtonElement;

  get canvas() { return this.c.canvas; }
  get gapInput() { return this.c.gap; }
  get columnsInput() { return this.c.cols; }
  get widthInput() { return this.c.width; }
  get heightInput() { return this.c.height; }
  get itemSizeInput() { return this.c.size; }
  get justifySelect() { return this.c.justify; }
  get alignSelect() { return this.c.align; }
  get directionSelect() { return this.c.direction; }
  get wrapSelect() { return this.c.wrap; }
  get alignContentSelect() { return this.c.alignContent; }
  get code() { return this.c.code; }
  get codePanel() { return this.c.codePanel; }

  constructor(root: HTMLElement, t: VisualCssGridFlexboxGeneratorUI) {
    this.root = root;
    this.t = t;
    this.c = {
      canvas: document.getElementById('vcg-canvas') as HTMLElement,
      code: document.getElementById('vcg-code') as HTMLElement,
      codePanel: document.getElementById('vcg-code-panel') as HTMLElement,
      gap: document.getElementById('vcg-gap') as HTMLInputElement,
      cols: document.getElementById('vcg-columns') as HTMLInputElement,
      width: document.getElementById('vcg-width') as HTMLInputElement,
      height: document.getElementById('vcg-height') as HTMLInputElement,
      size: document.getElementById('vcg-item-size') as HTMLInputElement,
      justify: document.getElementById('vcg-justify') as HTMLSelectElement,
      align: document.getElementById('vcg-align') as HTMLSelectElement,
      direction: document.getElementById('vcg-direction') as HTMLSelectElement,
      wrap: document.getElementById('vcg-wrap') as HTMLSelectElement,
      alignContent: document.getElementById('vcg-align-content') as HTMLSelectElement,
    };
    this.flexBtn = document.getElementById('vcg-flex') as HTMLButtonElement;
    this.gridBtn = document.getElementById('vcg-grid') as HTMLButtonElement;
    this.setupResizeObserver();
  }

  private setupResizeObserver() {
    new ResizeObserver((entries) => {
      if (!entries[0]) return;
      const r = entries[0].contentRect;
      const rw = String(Math.round(r.width));
      const rh = String(Math.round(r.height));
      if (rw !== this.c.width.value || rh !== this.c.height.value) {
        this.c.width.value = rw;
        this.c.height.value = rh;
        this.update();
      }
    }).observe(this.c.canvas);
  }

  readState(): LayoutState {
    return {
      mode: this.mode, gap: Number(this.c.gap.value),
      columns: Number(this.c.cols.value), width: Number(this.c.width.value),
      height: Number(this.c.height.value), itemSize: Number(this.c.size.value),
      justifyContent: this.c.justify.value, alignItems: this.c.align.value,
      flexDirection: this.c.direction.value, flexWrap: this.c.wrap.value,
      alignContent: this.c.alignContent.value,
      itemSpans: getItemSpans(this.c.canvas),
    };
  }

  private flushCss(state: LayoutState) {
    this.c.code.textContent = buildLayoutCss(state);
    this.c.codePanel.classList.remove('vcg-code-updated');
    requestAnimationFrame(() => this.c.codePanel.classList.add('vcg-code-updated'));
  }

  update() {
    const state = this.readState();
    paintCanvas(this.c.canvas, state);
    updateLabels(state);
    toggleVisibility(this.mode, this.c.wrap.value);
    this.flushCss(state);
  }

  setMode(nextMode: LayoutMode) {
    this.mode = nextMode;
    this.flexBtn.classList.toggle('vcg-active', nextMode === 'flex');
    this.gridBtn.classList.toggle('vcg-active', nextMode === 'grid');
    this.flexBtn.setAttribute('aria-pressed', String(nextMode === 'flex'));
    this.gridBtn.setAttribute('aria-pressed', String(nextMode === 'grid'));
    this.root.dataset.mode = nextMode;
    clearPresetActive();
    this.update();
  }

  addItem() {
    if (getAllItems(this.c.canvas).length >= 9) return;
    this.c.canvas.append(makeItem(getAllItems(this.c.canvas).length + 1, this.t.itemPrefix));
    this.update();
  }

  removeItem() {
    const items = getAllItems(this.c.canvas);
    if (items.length <= 2) return;
    const last = items[items.length - 1]!;
    last.classList.add('vcg-exit');
    last.addEventListener('animationend', () => {
      last.remove();
      refreshItemLabels(this.c.canvas, this.t.itemPrefix);
      this.update();
    }, { once: true });
  }

  resetLayout() {
    this.c.gap.value = '24'; this.c.cols.value = '3';
    this.c.width.value = '760'; this.c.height.value = '380'; this.c.size.value = '104';
    this.c.justify.value = 'center'; this.c.align.value = 'center';
    this.c.direction.value = 'row'; this.c.wrap.value = 'wrap'; this.c.alignContent.value = 'stretch';
    getAllItems(this.c.canvas).forEach((item) => { item.dataset.span = '1'; });
    this.setMode('flex');
  }

  applyPreset(name: string) {
    applyPreset(name, {
      canvas: this.c.canvas,
      ctrls: {
        gapInput: this.c.gap, columnsInput: this.c.cols,
        widthInput: this.c.width, heightInput: this.c.height, itemSizeInput: this.c.size,
        justifySelect: this.c.justify, alignSelect: this.c.align,
        directionSelect: this.c.direction, wrapSelect: this.c.wrap,
        alignContentSelect: this.c.alignContent,
      },
      setMode: (m) => this.setMode(m),
      update: () => this.update(),
    });
  }
}

export function createWorkspace(root: HTMLElement, t: VisualCssGridFlexboxGeneratorUI): Workspace {
  return new WorkspaceImpl(root, t);
}

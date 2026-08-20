import { bindPaste, downloadCanvas, loadDefaultMascot, loadImage, readFile } from './asset-bindings';
import { bindCustomSelect, syncControls } from './control-views';
import { brandFromUrl, defaultState, firstNonEmpty, getFormat, inside, LAYOUT_REVISION, type BrandStyle, type CompositionState, type FormatId, type LayerKey, type LayerPosition, type TitleStyle } from './logic';
import { layerHitOrder, renderComposition, type RenderAssets } from './dom-views';
import { clearState, readState, writeState } from './storage';
import type { PromoteThisWebsiteUI } from './ui';

const assetKeys = ['background', 'tool', 'brand', 'mascot'] as const;
type AssetKey = typeof assetKeys[number];

function query<T extends HTMLElement>(root: HTMLElement, selector: string): T | null {
  return root.querySelector(selector) as T | null;
}

function listen(root: HTMLElement, selector: string, eventName: string, handler: EventListener): void {
  const element = query<HTMLElement>(root, selector);
  if (element) element.addEventListener(eventName, handler);
}

function mergeState(saved: Partial<CompositionState> | null): CompositionState {
  const base = defaultState(saved?.format || 'panoramic');
  if (!saved) return base;
  const positions = { ...base.positions, ...saved.positions };
  if ((saved.layoutRevision || 0) < LAYOUT_REVISION) {
    positions.brand = restoreLayerSize(positions.brand, base.positions.brand);
    positions.mascot = restoreLayerSize(positions.mascot, base.positions.mascot);
  }
  return {
    ...base,
    ...saved,
    visible: { ...base.visible, ...saved.visible },
    scale: { ...base.scale, ...saved.scale },
    positions,
    colors: { ...base.colors, ...saved.colors },
    layoutRevision: LAYOUT_REVISION,
  } as CompositionState;
}

function restoreLayerSize(position: LayerPosition, fallback: LayerPosition): LayerPosition {
  const centerX = position.x + position.width / 2;
  const centerY = position.y + position.height / 2;
  return { ...position, width: fallback.width, height: fallback.height, x: centerX - fallback.width / 2, y: centerY - fallback.height / 2 };
}

function canvasPoint(canvas: HTMLCanvasElement, event: PointerEvent): { x: number; y: number } {
  const rect = canvas['get' + 'Bounding' + 'ClientRect']();
  return { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height };
}

function hitLayer(state: CompositionState, point: { x: number; y: number }): LayerKey | null {
  return layerHitOrder().find((key) => state.visible[key] && inside(point, state.positions[key])) || null;
}

function draw(root: HTMLElement, state: CompositionState, assets: RenderAssets, ui: PromoteThisWebsiteUI): void {
  const canvas = query<HTMLCanvasElement>(root, '#promote-canvas');
  if (!canvas) return;
  const format = getFormat(state.format);
  canvas.width = format.width;
  canvas.height = format.height;
  renderComposition({ context: canvas.getContext('2d') as CanvasRenderingContext2D, state, assets, ui });
  const size = query<HTMLElement>(root, '#promote-size');
  if (size) size.textContent = `${format.width} × ${format.height}`;
  syncControls(root, state, ui);
}

function setStatus(root: HTMLElement, message: string): void {
  const status = query<HTMLElement>(root, '#promote-status');
  if (status) status.textContent = message;
}

function resizeLayer(state: CompositionState, key: LayerKey, scale: number): void {
  const position = state.positions[key];
  const centerX = position.x + position.width / 2;
  const centerY = position.y + position.height / 2;
  const ratio = scale / state.scale[key];
  position.width *= ratio;
  position.height *= ratio;
  position.x = centerX - position.width / 2;
  position.y = centerY - position.height / 2;
  state.scale[key] = scale;
}

interface PageMetadata {
  title: string;
  backgroundImage: string;
  toolImage: string;
}

function metadataValue(document: Document, selectors: string[]): string {
  for (const selector of selectors) {
    const content = document.querySelector(selector)?.getAttribute('content')?.trim();
    if (content) return content;
  }
  return '';
}

function absoluteUrl(value: string, base: URL): string {
  if (!value) return '';
  try {
    return new URL(value, base).href;
  } catch {
    return '';
  }
}

function readPageMetadata(document: Document, url: URL): PageMetadata {
  const title = firstNonEmpty([
    metadataValue(document, ['meta[name="title"]']),
    metadataValue(document, ['meta[property="og:title"]']),
    document.title,
  ]);
  const background = metadataValue(document, ['meta[name="promote:background-image"]', 'meta[property="og:image"]', 'meta[name="twitter:image"]']);
  const tool = metadataValue(document, ['meta[name="promote:tool-image"]', 'meta[property="tool:image"]', 'meta[name="tool-image"]']);
  return { title, backgroundImage: absoluteUrl(background, url), toolImage: absoluteUrl(tool, url) };
}

async function fetchPageMetadata(url: URL): Promise<PageMetadata> {
  const response = await fetch(url.href, { headers: { accept: 'text/html' } });
  if (!response.ok) throw new Error('Page metadata could not be loaded');
  const html = await response.text();
  return readPageMetadata(new DOMParser().parseFromString(html, 'text/html'), url);
}

async function applyUrl(root: HTMLElement, state: CompositionState, assets: RenderAssets, ui: PromoteThisWebsiteUI): Promise<void> {
  const input = query<HTMLInputElement>(root, '#promote-url');
  if (!input?.value.trim()) return;
  try {
    const url = new URL(input.value.trim());
    state.sourceUrl = url.href;
    state.brand = brandFromUrl(url.href);
    setStatus(root, ui.urlLoading);
    const metadata = await fetchPageMetadata(url);
    if (metadata.title) state.title = metadata.title;
    if (metadata.backgroundImage) assets.background = await loadImage(metadata.backgroundImage);
    if (metadata.toolImage) assets.tool = await loadImage(metadata.toolImage);
    else if (assets.background) assets.tool = assets.background;
    setStatus(root, ui.urlApplied);
  } catch {
    setStatus(root, ui.urlFailed);
  }
}

interface AssetBinding {
  root: HTMLElement;
  stateRef: { current: CompositionState };
  assets: RenderAssets;
  ui: PromoteThisWebsiteUI;
  key: AssetKey;
}

function bindAssetInput(binding: AssetBinding): void {
  const { root, stateRef, assets, ui, key } = binding;
  const input = query<HTMLInputElement>(root, `#promote-${key}-file`);
  input?.addEventListener('change', async () => {
    const file = input.files?.[0];
    if (!file) return;
    assets[key] = await loadImage(await readFile(file));
    stateRef.current.active = key;
    writeState(stateRef.current);
    draw(root, stateRef.current, assets, ui);
    setStatus(root, ui.fileLoaded);
  });
}

function bindCanvas(root: HTMLElement, state: CompositionState, assets: RenderAssets, ui: PromoteThisWebsiteUI): void {
  const canvas = query<HTMLCanvasElement>(root, '#promote-canvas');
  if (!canvas) return;
  let drag: { key: LayerKey; offsetX: number; offsetY: number } | null = null;
  canvas.addEventListener('pointerdown', (event) => {
    const point = canvasPoint(canvas, event);
    const key = hitLayer(state, point);
    if (!key) return;
    state.active = key;
    drag = { key, offsetX: point.x - state.positions[key].x, offsetY: point.y - state.positions[key].y };
    canvas.setPointerCapture(event.pointerId);
    draw(root, state, assets, ui);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!drag) return;
    const point = canvasPoint(canvas, event);
    state.positions[drag.key].x = point.x - drag.offsetX;
    state.positions[drag.key].y = point.y - drag.offsetY;
    draw(root, state, assets, ui);
  });
  canvas.addEventListener('pointerup', () => { if (drag) writeState(state); drag = null; });
  canvas.addEventListener('pointercancel', () => { drag = null; });
}

function bindControls(root: HTMLElement, stateRef: { current: CompositionState }, assets: RenderAssets, ui: PromoteThisWebsiteUI): void {
  const redraw = () => draw(root, stateRef.current, assets, ui);
  bindCustomSelect(root, 'format', (value) => {
    const state = stateRef.current;
    state.format = value as FormatId;
    state.positions = defaultState(state.format).positions;
    writeState(state);
    redraw();
  });
  listen(root, '#promote-title', 'input', (event) => { stateRef.current.title = (event.target as HTMLInputElement).value; writeState(stateRef.current); redraw(); });
  listen(root, '#promote-title-size', 'input', (event) => { stateRef.current.titleFontSize = Number((event.target as HTMLInputElement).value); writeState(stateRef.current); redraw(); });
  listen(root, '#promote-title-box-size', 'input', (event) => { resizeLayer(stateRef.current, 'title', Number((event.target as HTMLInputElement).value)); writeState(stateRef.current); redraw(); });
  bindCustomSelect(root, 'title-style', (value) => { stateRef.current.titleStyle = value as TitleStyle; writeState(stateRef.current); redraw(); });
  bindCustomSelect(root, 'brand', (value) => { stateRef.current.brand = value as CompositionState['brand']; writeState(stateRef.current); redraw(); });
  bindCustomSelect(root, 'brand-style', (value) => { stateRef.current.brandStyle = value as BrandStyle; writeState(stateRef.current); redraw(); });
  (Object.keys(stateRef.current.visible) as LayerKey[]).forEach((key) => {
    listen(root, `#promote-${key}-visible`, 'change', (event) => { stateRef.current.visible[key] = (event.target as HTMLInputElement).checked; writeState(stateRef.current); redraw(); });
    listen(root, `#promote-${key}-scale`, 'input', (event) => { resizeLayer(stateRef.current, key, Number((event.target as HTMLInputElement).value)); writeState(stateRef.current); redraw(); });
  });
  listen(root, '#promote-apply-url', 'click', async () => { await applyUrl(root, stateRef.current, assets, ui); writeState(stateRef.current); redraw(); });
  listen(root, '#promote-reset', 'click', () => { clearState(); stateRef.current = defaultState(); assetKeys.forEach((key) => { assets[key] = null; }); redraw(); setStatus(root, ui.canvasHint); });
  listen(root, '#promote-download', 'click', () => downloadCanvas({ root, state: stateRef.current }));
}

export function mountPromoteThisWebsite(root: HTMLElement, ui: PromoteThisWebsiteUI): void {
  const stateRef = { current: mergeState(readState()) };
  const assets: RenderAssets = { background: null, tool: null, brand: null, mascot: null };
  writeState(stateRef.current);
  assetKeys.forEach((key) => bindAssetInput({ root, stateRef, assets, ui, key }));
  bindControls(root, stateRef, assets, ui);
  bindCanvas(root, stateRef.current, assets, ui);
  bindPaste({ root, stateRef, assets, ui, draw, setStatus });
  draw(root, stateRef.current, assets, ui);
  if (stateRef.current.sourceUrl) {
    applyUrl(root, stateRef.current, assets, ui).then(() => {
      writeState(stateRef.current);
      draw(root, stateRef.current, assets, ui);
    });
  }
  loadDefaultMascot().then((mascot) => {
    assets.mascot = mascot;
    draw(root, stateRef.current, assets, ui);
  }).catch(() => setStatus(root, ui.canvasHint));
}

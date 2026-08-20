import type { CompositionState } from './logic';
import type { RenderAssets } from './dom-views';
import { writeState } from './storage';
import type { PromoteThisWebsiteUI } from './ui';

function query<T extends HTMLElement>(root: HTMLElement, selector: string): T | null {
  return root.querySelector(selector) as T | null;
}

export function loadImage(source: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    if (source.startsWith('http')) image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Image could not be loaded'));
    image.src = source;
  });
}

export function loadDefaultMascot(): Promise<HTMLImageElement> {
  return loadImage(new URL('./pixel-cat.png', import.meta.url).href);
}

export function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

interface CanvasDownload {
  root: HTMLElement;
  state: CompositionState;
}

export function downloadCanvas(input: CanvasDownload): void {
  const canvas = query<HTMLCanvasElement>(input.root, '#promote-canvas');
  if (!canvas) return;
  canvas.toBlob((blob) => {
    if (!blob) return;
    const link = document.createElement('a');
    link.download = `promote-this-website-${input.state.format}.png`;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }, 'image/png');
}

interface PasteBinding {
  root: HTMLElement;
  stateRef: { current: CompositionState };
  assets: RenderAssets;
  ui: PromoteThisWebsiteUI;
  draw: (root: HTMLElement, state: CompositionState, assets: RenderAssets, ui: PromoteThisWebsiteUI) => void;
  setStatus: (root: HTMLElement, message: string) => void;
}

export function bindPaste(binding: PasteBinding): void {
  document.addEventListener('paste', async (event) => {
    const item = Array.from(event.clipboardData?.items || []).find((entry) => entry.type.startsWith('image/'));
    if (!item) return;
    event.preventDefault();
    const file = item.getAsFile();
    if (!file) return;
    binding.assets.tool = await loadImage(await readFile(file));
    binding.stateRef.current.active = 'tool';
    writeState(binding.stateRef.current);
    binding.draw(binding.root, binding.stateRef.current, binding.assets, binding.ui);
    binding.setStatus(binding.root, binding.ui.pasted);
  });
}

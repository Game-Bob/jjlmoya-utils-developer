import { auditLogo, buildPreviewState, DEFAULT_SETTINGS, sanitiseSettings, type AndroidShape, type IconPreviewSettings, type IosAppearance, type LogoAudit, type LogoAuditMetrics } from './logic';
import { renderPreview } from './dom-views';
import { loadStoredSettings, saveStoredSettings } from './storage';
import type { DualOsIconPreviewUI } from './ui';

interface ControllerOptions {
  ui: DualOsIconPreviewUI;
}

interface ControllerState {
  settings: IconPreviewSettings;
  logoUrl: string;
  audit: LogoAudit | null;
}

function getElement<T extends HTMLElement>(selector: string): T | null {
  return document.querySelector<T>(selector);
}

function readSettings(): IconPreviewSettings {
  const stored = loadStoredSettings();
  return sanitiseSettings({ ...DEFAULT_SETTINGS, ...stored });
}

function updateView(state: ControllerState, ui: DualOsIconPreviewUI): void {
  renderPreview({ state: buildPreviewState(state.settings, Boolean(state.logoUrl), state.audit), ui, logoUrl: state.logoUrl });
  saveStoredSettings(state.settings);
}

function setPressed(selector: string, attribute: string, value: string): void {
  document.querySelectorAll<HTMLButtonElement>(selector).forEach((button) => {
    button.setAttribute('aria-pressed', String(button.getAttribute(attribute) === value));
  });
}

function bindSettingButtons(state: ControllerState, ui: DualOsIconPreviewUI): void {
  document.querySelectorAll<HTMLButtonElement>('[data-ios-value]').forEach((button) => {
    button.addEventListener('click', () => {
      state.settings.iosAppearance = button.dataset.iosValue as IosAppearance;
      setPressed('[data-ios-value]', 'data-ios-value', state.settings.iosAppearance);
      updateView(state, ui);
    });
  });
  document.querySelectorAll<HTMLButtonElement>('[data-android-value]').forEach((button) => {
    button.addEventListener('click', () => {
      state.settings.androidShape = button.dataset.androidValue as AndroidShape;
      setPressed('[data-android-value]', 'data-android-value', state.settings.androidShape);
      updateView(state, ui);
    });
  });
}

function bindFileInput(state: ControllerState, ui: DualOsIconPreviewUI): void {
  const input = getElement<HTMLInputElement>('[data-logo-input]');
  const error = getElement<HTMLElement>('[data-file-error]');
  input?.addEventListener('change', () => {
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      if (error) error.textContent = ui.fileError;
      return;
    }
    readLogoFile(file).then((logo) => {
      state.logoUrl = logo.url;
      state.audit = logo.audit;
      if (error) error.textContent = '';
      updateView(state, ui);
    }).catch(() => { if (error) error.textContent = ui.fileError; });
  });
}

function readDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error('image-read')));
    reader.addEventListener('error', () => reject(new Error('image-read')));
    reader.readAsDataURL(file);
  });
}

function findOpaqueBounds(data: Uint8ClampedArray, width: number, height: number): LogoAuditMetrics {
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  let visiblePixels = 0;
  for (let alphaIndex = 3; alphaIndex < data.length; alphaIndex += 4) {
    if ((data[alphaIndex] ?? 0) <= 12) continue;
    const pixel = (alphaIndex - 3) / 4;
    const x = pixel % width;
    const y = Math.floor(pixel / width);
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
    visiblePixels += 1;
  }
  return { width, height, leftMargin: minX, rightMargin: maxX < 0 ? 0 : width - maxX - 1, topMargin: minY, bottomMargin: maxY < 0 ? 0 : height - maxY - 1, visiblePixels };
}

function measureLogo(url: string): Promise<LogoAuditMetrics> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d');
      if (!context) { reject(new Error('canvas-unavailable')); return; }
      context.drawImage(image, 0, 0);
      resolve(findOpaqueBounds(context.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height));
    });
    image.addEventListener('error', () => reject(new Error('image-load')));
    image.src = url;
  });
}

async function readLogoFile(file: File): Promise<{ url: string; audit: LogoAudit }> {
  const url = await readDataUrl(file);
  return { url, audit: auditLogo(await measureLogo(url)) };
}

function bindTextInput(state: ControllerState, ui: DualOsIconPreviewUI): void {
  getElement<HTMLInputElement>('[data-app-name-input]')?.addEventListener('input', (event) => {
    state.settings.appName = (event.target as HTMLInputElement).value;
    updateView(state, ui);
  });
  getElement<HTMLInputElement>('[data-brand-input]')?.addEventListener('input', (event) => {
    state.settings.brandColor = (event.target as HTMLInputElement).value;
    updateView(state, ui);
  });
  getElement<HTMLInputElement>('[data-themed-input]')?.addEventListener('change', (event) => {
    state.settings.androidThemed = (event.target as HTMLInputElement).checked;
    updateView(state, ui);
  });
}

function syncInputs(settings: IconPreviewSettings): void {
  const appName = getElement<HTMLInputElement>('[data-app-name-input]');
  const brand = getElement<HTMLInputElement>('[data-brand-input]');
  const themed = getElement<HTMLInputElement>('[data-themed-input]');
  if (appName) appName.value = settings.appName;
  if (brand) brand.value = settings.brandColor;
  if (themed) themed.checked = settings.androidThemed;
  setPressed('[data-ios-value]', 'data-ios-value', settings.iosAppearance);
  setPressed('[data-android-value]', 'data-android-value', settings.androidShape);
}

export function initDualOsIconPreview(options: ControllerOptions): void {
  const state: ControllerState = { settings: readSettings(), logoUrl: '', audit: null };
  syncInputs(state.settings);
  bindSettingButtons(state, options.ui);
  bindFileInput(state, options.ui);
  bindTextInput(state, options.ui);
  getElement<HTMLButtonElement>('[data-upload-action]')?.addEventListener('click', () => getElement<HTMLInputElement>('[data-logo-input]')?.click());
  updateView(state, options.ui);
}

import type { IconPreviewSettings } from './logic';

const STORAGE_KEY = 'jjlmoya:dual-os-icon-preview';

export function loadStoredSettings(): Partial<IconPreviewSettings> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Partial<IconPreviewSettings> : {};
  } catch {
    return {};
  }
}

export function saveStoredSettings(settings: IconPreviewSettings): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}

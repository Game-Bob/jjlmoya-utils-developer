import type { CompositionState } from './logic';

const STORAGE_KEY = 'promote-this-website-state-v2';

export function readState(): Partial<CompositionState> | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Partial<CompositionState> : null;
  } catch {
    return null;
  }
}

export function writeState(state: CompositionState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}

export function clearState(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
}

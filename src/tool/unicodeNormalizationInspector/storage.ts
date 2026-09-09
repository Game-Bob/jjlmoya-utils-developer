const STORAGE_KEY = "jjlmoya-unicode-normalization-inspector";

export interface InspectorState {
  left: string;
  right: string;
}

export function loadState(): InspectorState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Partial<InspectorState>;
    if (typeof value.left !== "string" || typeof value.right !== "string")
      return null;
    return { left: value.left, right: value.right };
  } catch {
    return null;
  }
}

export function saveState(state: InspectorState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

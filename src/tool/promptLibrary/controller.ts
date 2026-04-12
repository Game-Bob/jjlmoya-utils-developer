export interface PromptItem {
  id: string;
  title: string;
  content: string;
  tags: string[];
  isStarred?: boolean;
}

const STORAGE_KEY = 'jjlmoya_prompts';

function sortByStarred(a: PromptItem, b: PromptItem): number {
  if (a.isStarred && !b.isStarred) return -1;
  if (!a.isStarred && b.isStarred) return 1;
  return 0;
}

export function loadPrompts(): PromptItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const parsed = data ? (JSON.parse(data) as PromptItem[]) : [];
    return parsed.sort(sortByStarred);
  } catch (e) {
    console.error('Error loading prompts', e);
    return [];
  }
}

export function savePrompts(items: PromptItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function addPrompt(item: Omit<PromptItem, 'id'>): void {
  const items = loadPrompts();
  items.unshift({ ...item, id: crypto.randomUUID() });
  savePrompts(items);
}

export function updatePrompt(id: string, updates: Partial<PromptItem>): void {
  const items = loadPrompts();
  const index = items.findIndex((p) => p.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...updates };
    savePrompts(items);
  }
}

export function deletePrompt(id: string): void {
  savePrompts(loadPrompts().filter((p) => p.id !== id));
}

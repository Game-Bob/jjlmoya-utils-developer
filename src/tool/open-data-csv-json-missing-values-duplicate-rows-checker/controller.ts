import { exampleCsv, formatProfileMarkdown, parseTabularText, profileRows, type DataProfile } from './logic';
import { clearProfile, loadProfile, saveProfile } from './storage';
import { renderEmptyState, renderProfile } from './dom-views';
import type { CsvJsonDataQualityCheckerUI } from './ui';

interface ControllerOptions {
  root: HTMLElement;
  ui: CsvJsonDataQualityCheckerUI;
  locale: string;
}

interface ProcessInput extends ControllerOptions {
  source: string;
  name: string;
}

const readFormat = (name: string, source: string): 'csv' | 'json' | null => {
  const lowerName = name.toLowerCase();
  if (lowerName.endsWith('.json') || source.trim().startsWith('[') || source.trim().startsWith('{')) return 'json';
  if (lowerName.endsWith('.csv') || source.includes(',')) return 'csv';
  return null;
};

const setStatus = (root: HTMLElement, value: string, kind: string): void => {
  const status = root.querySelector<HTMLElement>('[data-status]');
  if (status) {
    status.textContent = value;
    status.dataset.statusKind = kind;
  }
};

const valueOf = (root: HTMLElement, selector: string): string => root.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector)?.value ?? '';

const showInlineMessage = (root: HTMLElement, value: string): void => {
  const message = root.querySelector<HTMLElement>('[data-inline-message]');
  if (message) {
    message.textContent = value;
    message.removeAttribute('hidden');
  }
};

const setReview = (root: HTMLElement, profile: DataProfile, ui: CsvJsonDataQualityCheckerUI): void => {
  const review = root.querySelector<HTMLTextAreaElement>('[data-review]');
  if (!review) return;
  review.value = formatProfileMarkdown(profile);
  saveProfile(profile, review.value);
  setStatus(root, ui.statusLoaded, 'loaded');
};

const processText = ({ root, ui, locale, source, name }: ProcessInput): void => {
  const format = readFormat(name, source);
  if (!format) {
    setStatus(root, ui.errorFormat, 'error');
    showInlineMessage(root, ui.errorFormat);
    return;
  }
  setStatus(root, ui.statusWorking, 'working');
  const parsed = parseTabularText(source, format);
  const profile = profileRows(parsed, name, source);
  renderProfile({ root, ui, profile, locale });
  setReview(root, profile, ui);
};

const bindFileInput = (root: HTMLElement, ui: CsvJsonDataQualityCheckerUI, locale: string): void => {
  const input = root.querySelector<HTMLInputElement>('#file-input');
  const fileName = root.querySelector<HTMLElement>('[data-file-name]');
  input?.addEventListener('change', async () => {
    const file = input.files?.[0];
    if (!file) return;
    if (fileName) fileName.textContent = file.name;
    processText({ root, ui, locale, source: await file.text(), name: file.name });
  });
};

const bindDropZone = (root: HTMLElement, ui: CsvJsonDataQualityCheckerUI, locale: string): void => {
  const zone = root.querySelector<HTMLElement>('[data-drop-zone]');
  if (!zone) return;
  zone.addEventListener('dragover', (event) => {
    event.preventDefault();
    zone.dataset.dragging = 'true';
  });
  zone.addEventListener('dragleave', () => delete zone.dataset.dragging);
  zone.addEventListener('drop', async (event) => {
    event.preventDefault();
    delete zone.dataset.dragging;
    const file = event.dataTransfer?.files[0];
    if (!file) return;
    const input = root.querySelector<HTMLInputElement>('#file-input');
    if (input) input.files = event.dataTransfer?.files ?? null;
    const fileName = root.querySelector<HTMLElement>('[data-file-name]');
    if (fileName) fileName.textContent = file.name;
    processText({ root, ui, locale, source: await file.text(), name: file.name });
  });
};

const bindActions = (root: HTMLElement, ui: CsvJsonDataQualityCheckerUI, locale: string): void => {
  root.querySelector('[data-action="example"]')?.addEventListener('click', () => {
    const paste = root.querySelector<HTMLTextAreaElement>('#paste-input');
    if (paste) paste.value = exampleCsv;
    processText({ root, ui, locale, source: exampleCsv, name: 'example.csv' });
  });
  root.querySelector('[data-action="clear"]')?.addEventListener('click', () => {
    clearProfile();
    root.querySelector<HTMLFormElement>('[data-profile-form]')?.reset();
    renderEmptyState(root, ui);
    setStatus(root, ui.statusReady, 'ready');
    showInlineMessage(root, '');
  });
  root.querySelector('[data-action="copy"]')?.addEventListener('click', async () => {
    const review = valueOf(root, '[data-review]');
    try {
      await navigator.clipboard.writeText(review);
      showInlineMessage(root, ui.copySuccess);
    } catch {
      showInlineMessage(root, ui.copyFailure);
    }
  });
  root.querySelector('[data-action="print"]')?.addEventListener('click', () => {
    showInlineMessage(root, ui.printHint);
    window.print();
  });
};

export const attachController = ({ root, ui, locale }: ControllerOptions): void => {
  renderEmptyState(root, ui);
  bindFileInput(root, ui, locale);
  bindDropZone(root, ui, locale);
  bindActions(root, ui, locale);
  root.querySelector<HTMLFormElement>('[data-profile-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const source = valueOf(root, '#paste-input').trim();
    if (!source) {
      setStatus(root, ui.errorEmpty, 'error');
      showInlineMessage(root, ui.errorEmpty);
      return;
    }
    processText({ root, ui, locale, source, name: ui.sourceName });
  });
  const stored = loadProfile();
  if (stored) {
    renderProfile({ root, ui, profile: stored.profile, locale });
    const review = root.querySelector<HTMLTextAreaElement>('[data-review]');
    if (review) review.value = stored.review;
    setStatus(root, ui.statusLoaded, 'loaded');
  } else {
    setStatus(root, ui.statusReady, 'ready');
  }
};

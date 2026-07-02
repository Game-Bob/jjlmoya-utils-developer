import { DESCRIPTION_LIMIT, getTitleLimit, ratioToPercent, type SerpDevice } from './logic';
import type { SerpPixelSimulatorUI } from './ui';

interface StoredState {
  title?: string;
  url?: string;
  description?: string;
  device?: SerpDevice;
  favicon?: string;
}

interface Elements {
  titleInput: HTMLInputElement;
  urlInput: HTMLInputElement;
  fetchButton: HTMLButtonElement;
  fetchMessage: HTMLElement;
  descriptionInput: HTMLTextAreaElement;
  desktopButton: HTMLButtonElement;
  mobileButton: HTMLButtonElement;
  serpCard: HTMLElement;
  faviconFallback: HTMLElement;
  faviconImage: HTMLImageElement;
  previewTitle: HTMLElement;
  previewUrl: HTMLElement;
  previewDescription: HTMLElement;
  titleMeter: HTMLElement;
  descriptionMeter: HTMLElement;
  titleFill: HTMLElement;
  descriptionFill: HTMLElement;
  titleCount: HTMLElement;
  descriptionCount: HTMLElement;
  titleStatus: HTMLElement;
  descriptionStatus: HTMLElement;
}

interface MeterParts {
  meter: HTMLElement;
  fill: HTMLElement;
  count: HTMLElement;
  status: HTMLElement;
}

interface FetchResult {
  response: Response;
  url: string;
}

const storageKey = 'serpPixelSimulator:lastState';
const titleFont = '20px Arial, Helvetica, sans-serif';
const descriptionFont = '14px Arial, Helvetica, sans-serif';

function getElement<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

function collectElements(): Elements {
  return {
    titleInput: getElement<HTMLInputElement>('sps-title'),
    urlInput: getElement<HTMLInputElement>('sps-url'),
    fetchButton: getElement<HTMLButtonElement>('sps-fetch'),
    fetchMessage: getElement('sps-fetch-message'),
    descriptionInput: getElement<HTMLTextAreaElement>('sps-description'),
    desktopButton: getElement<HTMLButtonElement>('sps-desktop'),
    mobileButton: getElement<HTMLButtonElement>('sps-mobile'),
    serpCard: getElement('sps-serp'),
    faviconFallback: getElement('sps-favicon-fallback'),
    faviconImage: getElement<HTMLImageElement>('sps-favicon-image'),
    previewTitle: getElement('sps-preview-title'),
    previewUrl: getElement('sps-preview-url'),
    previewDescription: getElement('sps-preview-description'),
    titleMeter: getElement('sps-title-meter'),
    descriptionMeter: getElement('sps-description-meter'),
    titleFill: getElement('sps-title-fill'),
    descriptionFill: getElement('sps-description-fill'),
    titleCount: getElement('sps-title-count'),
    descriptionCount: getElement('sps-description-count'),
    titleStatus: getElement('sps-title-status'),
    descriptionStatus: getElement('sps-description-status'),
  };
}

function measure(context: CanvasRenderingContext2D, text: string, font: string): number {
  context.font = font;
  return context.measureText(text).width;
}

function trimToPixels(context: CanvasRenderingContext2D, text: string, limit: number, font: string, suffix: string): string {
  if (measure(context, text, font) <= limit) return text;
  let low = 0;
  let high = text.length;
  while (low < high) {
    const middle = Math.ceil((low + high) / 2);
    const candidate = `${text.slice(0, middle).trimEnd()}${suffix}`;
    if (measure(context, candidate, font) <= limit) low = middle;
    else high = middle - 1;
  }
  return `${text.slice(0, low).trimEnd()}${suffix}`;
}

function displayUrl(rawUrl: string, fallbackUrl: string): string {
  if (!rawUrl.trim()) return fallbackUrl;
  try {
    const url = new URL(rawUrl);
    return `${url.hostname}${url.pathname === '/' ? '' : url.pathname}`;
  } catch {
    return rawUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') || fallbackUrl;
  }
}

function setMessage(el: HTMLElement, message: string, tone: string): void {
  el.textContent = message;
  el.dataset.tone = tone;
}

function normalizedUrl(rawUrl: string): string | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;
  const value = /^[a-z][a-z\d+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    return new URL(value).toString();
  } catch {
    return null;
  }
}

function candidateUrls(rawUrl: string): string[] {
  const trimmed = rawUrl.trim();
  if (!trimmed) return [];
  if (/^[a-z][a-z\d+.-]*:\/\//i.test(trimmed)) {
    const url = normalizedUrl(trimmed);
    return url ? [url] : [];
  }
  return ['https://', 'http://'].flatMap((protocol) => {
    try {
      return [new URL(`${protocol}${trimmed}`).toString()];
    } catch {
      return [];
    }
  });
}

function extractMetaDescription(doc: Document): string {
  const selectors = ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]'];
  for (const selector of selectors) {
    const value = doc.querySelector(selector)?.getAttribute('content')?.trim();
    if (value) return value;
  }
  return '';
}

function extractFavicon(doc: Document, pageUrl: string): string {
  const selectors = ['link[rel~="icon"][href]', 'link[rel="shortcut icon"][href]', 'link[rel="apple-touch-icon"][href]', 'link[rel="apple-touch-icon-precomposed"][href]'];
  for (const selector of selectors) {
    const href = doc.querySelector(selector)?.getAttribute('href')?.trim();
    if (!href) continue;
    try {
      return new URL(href, pageUrl).toString();
    } catch {
      return '';
    }
  }
  return new URL('/favicon.ico', pageUrl).toString();
}

function stateFromElements(elements: Elements, device: SerpDevice): StoredState {
  return {
    title: elements.titleInput.value,
    url: elements.urlInput.value,
    description: elements.descriptionInput.value,
    device,
    favicon: elements.faviconImage.classList.contains('sps-hidden') ? '' : elements.faviconImage.src,
  };
}

function saveState(elements: Elements, device: SerpDevice): void {
  try {
    localStorage.setItem(storageKey, JSON.stringify(stateFromElements(elements, device)));
  } catch {
    return;
  }
}

function readState(): StoredState | null {
  try {
    const rawState = localStorage.getItem(storageKey);
    return rawState ? (JSON.parse(rawState) as StoredState) : null;
  } catch {
    localStorage.removeItem(storageKey);
    return null;
  }
}

function setDevice(elements: Elements, device: SerpDevice): void {
  elements.desktopButton.setAttribute('aria-pressed', String(device === 'desktop'));
  elements.mobileButton.setAttribute('aria-pressed', String(device === 'mobile'));
  elements.serpCard.classList.toggle('sps-mobile', device === 'mobile');
}

function setFavicon(elements: Elements, src: string): void {
  elements.faviconImage.src = src;
  elements.faviconImage.hidden = false;
  elements.faviconImage.removeAttribute('hidden');
  elements.faviconImage.classList.remove('sps-hidden');
  elements.faviconFallback.hidden = false;
  elements.faviconFallback.removeAttribute('hidden');
  elements.faviconFallback.classList.add('sps-hidden');
}

function restoreState(elements: Elements): SerpDevice {
  const state = readState();
  if (!state) return 'desktop';
  if (typeof state.title === 'string') elements.titleInput.value = state.title;
  if (typeof state.url === 'string') elements.urlInput.value = state.url;
  if (typeof state.description === 'string') elements.descriptionInput.value = state.description;
  if (typeof state.favicon === 'string' && state.favicon) setFavicon(elements, state.favicon);
  return state.device === 'mobile' ? 'mobile' : 'desktop';
}

function updateMeter(parts: MeterParts, width: number, limit: number, unit: string, okText: string, tooLongText: string): void {
  const isOver = width > limit;
  parts.meter.classList.toggle('sps-over', isOver);
  parts.fill.style.width = `${ratioToPercent(width, limit)}%`;
  parts.count.textContent = `${Math.round(width)} ${unit} / ${Math.round(limit)} ${unit}`;
  parts.status.textContent = isOver ? tooLongText : okText;
}

function updatePreview(elements: Elements, context: CanvasRenderingContext2D, ui: SerpPixelSimulatorUI, device: SerpDevice): void {
  const title = elements.titleInput.value.trim() || ui.emptyTitle;
  const description = elements.descriptionInput.value.trim() || ui.emptyDescription;
  const titleLimit = getTitleLimit(device);
  elements.previewTitle.textContent = trimToPixels(context, title, titleLimit, titleFont, ui.ellipsis);
  elements.previewDescription.textContent = trimToPixels(context, description, DESCRIPTION_LIMIT, descriptionFont, ui.ellipsis);
  elements.previewUrl.textContent = displayUrl(elements.urlInput.value, ui.fallbackUrl);
  updateMeter({ meter: elements.titleMeter, fill: elements.titleFill, count: elements.titleCount, status: elements.titleStatus }, measure(context, title, titleFont), titleLimit, ui.pixelUnit, ui.goodLabel, ui.tooLongLabel);
  updateMeter({ meter: elements.descriptionMeter, fill: elements.descriptionFill, count: elements.descriptionCount, status: elements.descriptionStatus }, measure(context, description, descriptionFont), DESCRIPTION_LIMIT, ui.pixelUnit, ui.goodLabel, ui.tooLongLabel);
}

async function fetchFirst(urls: string[]): Promise<FetchResult> {
  let lastError: unknown = null;
  for (const url of urls) {
    try {
      return { response: await fetch(url, { method: 'GET', mode: 'cors', credentials: 'omit' }), url };
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError instanceof Error ? lastError : new TypeError('Fetch failed');
}

function applyFetched(elements: Elements, doc: Document, url: string): boolean {
  const title = doc.querySelector('title')?.textContent?.trim() ?? '';
  const description = extractMetaDescription(doc);
  if (!title && !description) return false;
  if (title) elements.titleInput.value = title;
  if (description) elements.descriptionInput.value = description;
  setFavicon(elements, extractFavicon(doc, url));
  elements.urlInput.value = url;
  return true;
}

export function initSerpPixelSimulator(root: HTMLElement): void {
  const ui = JSON.parse(root.dataset.i18n ?? '{}') as SerpPixelSimulatorUI;
  const elements = collectElements();
  const context = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
  let device = restoreState(elements);
  const render = () => updatePreview(elements, context, ui, device);
  const persistAndRender = () => {
    setMessage(elements.fetchMessage, '', 'neutral');
    saveState(elements, device);
    render();
  };

  setDevice(elements, device);
  elements.titleInput.addEventListener('input', persistAndRender);
  elements.urlInput.addEventListener('input', persistAndRender);
  elements.descriptionInput.addEventListener('input', persistAndRender);
  elements.desktopButton.addEventListener('click', () => {
    device = 'desktop';
    setDevice(elements, device);
    persistAndRender();
  });
  elements.mobileButton.addEventListener('click', () => {
    device = 'mobile';
    setDevice(elements, device);
    persistAndRender();
  });
  elements.faviconImage.addEventListener('error', () => {
    elements.faviconImage.removeAttribute('src');
    elements.faviconImage.classList.add('sps-hidden');
    elements.faviconFallback.classList.remove('sps-hidden');
    saveState(elements, device);
  });
  elements.fetchButton.addEventListener('click', () => {
    void fetchMetadata(elements, ui, device, context);
  });
  render();
}

async function fetchMetadata(elements: Elements, ui: SerpPixelSimulatorUI, device: SerpDevice, context: CanvasRenderingContext2D): Promise<void> {
  const urls = candidateUrls(elements.urlInput.value);
  if (urls.length === 0) {
    setMessage(elements.fetchMessage, ui.fetchInvalidUrlError, 'error');
    saveState(elements, device);
    return;
  }
  elements.fetchButton.disabled = true;
  elements.fetchButton.textContent = ui.fetchLoadingLabel;
  setMessage(elements.fetchMessage, '', 'neutral');
  try {
    const result = await fetchFirst(urls);
    if (!result.response.ok) throw new Error(`HTTP ${result.response.status}`);
    const doc = new DOMParser().parseFromString(await result.response.text(), 'text/html');
    if (!applyFetched(elements, doc, result.url)) setMessage(elements.fetchMessage, ui.fetchNoMetadataError, 'error');
    else setMessage(elements.fetchMessage, ui.fetchSuccessLabel, 'success');
  } catch (error) {
    setMessage(elements.fetchMessage, error instanceof TypeError ? ui.fetchCorsError : ui.fetchGenericError, 'error');
  } finally {
    elements.fetchButton.disabled = false;
    elements.fetchButton.textContent = ui.fetchButtonLabel;
    saveState(elements, device);
    updatePreview(elements, context, ui, device);
  }
}

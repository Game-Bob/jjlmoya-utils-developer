export type FormatId = 'panoramic' | 'instagram' | 'square' | 'story';
export type LayerKey = 'background' | 'tool' | 'brand' | 'mascot' | 'title';
export type TitleStyle = 'paper' | 'ribbon' | 'ink' | 'poster' | 'ticket' | 'marker' | 'split' | 'capsule' | 'corner' | 'vertical';
export type BrandStyle = 'plain' | 'plaque' | 'ticket' | 'stamp' | 'neon' | 'ribbon' | 'corner' | 'pixel' | 'halo' | 'editorial';
export const LAYOUT_REVISION = 2;

export interface FormatPreset {
  width: number;
  height: number;
}

export interface LayerPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CompositionState {
  layoutRevision: number;
  format: FormatId;
  sourceUrl: string;
  title: string;
  titleFontSize: number;
  titleStyle: TitleStyle;
  brandStyle: BrandStyle;
  brand: 'jjlmoya.es' | 'GameBob.dev';
  active: LayerKey;
  visible: Record<LayerKey, boolean>;
  scale: Record<LayerKey, number>;
  positions: Record<LayerKey, LayerPosition>;
  colors: {
    fill: string;
    text: string;
    accent: string;
    frame: string;
  };
}

export const FORMAT_PRESETS: Record<FormatId, FormatPreset> = {
  panoramic: { width: 1536, height: 1024 },
  instagram: { width: 1080, height: 1350 },
  square: { width: 1080, height: 1080 },
  story: { width: 1080, height: 1920 },
};

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function containRect(imageWidth: number, imageHeight: number, box: LayerPosition): LayerPosition {
  const ratio = Math.min(box.width / imageWidth, box.height / imageHeight);
  const width = imageWidth * ratio;
  const height = imageHeight * ratio;
  return { x: box.x + (box.width - width) / 2, y: box.y + (box.height - height) / 2, width, height };
}

export function getFormat(format: FormatId): FormatPreset {
  return FORMAT_PRESETS[format];
}

export function brandFromUrl(value: string): 'jjlmoya.es' | 'GameBob.dev' {
  try {
    const hostname = new URL(value).hostname.toLowerCase();
    return hostname.includes('gamebob') ? 'GameBob.dev' : 'jjlmoya.es';
  } catch {
    return value.toLowerCase().includes('gamebob') ? 'GameBob.dev' : 'jjlmoya.es';
  }
}

export function firstNonEmpty(values: string[], fallback = ''): string {
  return values.map((value) => value.trim()).find(Boolean) || fallback;
}

export function defaultPositions(format: FormatId): Record<LayerKey, LayerPosition> {
  const { width, height } = getFormat(format);
  const panelWidth = width * 0.7;
  const panelHeight = height * 0.54;
  return {
    background: { x: 0, y: 0, width, height },
    tool: { x: width * 0.2, y: height * 0.2, width: panelWidth, height: panelHeight },
    brand: { x: width * 0.62, y: height * 0.86, width: width * 0.30, height: height * 0.07 },
    mascot: { x: width * 0.84, y: height * 0.75, width: width * 0.13, height: width * 0.13 },
    title: { x: width * 0.28, y: height * 0.08, width: width * 0.44, height: height * 0.12 },
  };
}

export function defaultState(format: FormatId = 'panoramic'): CompositionState {
  return {
    layoutRevision: LAYOUT_REVISION,
    format,
    sourceUrl: '',
    title: '',
    titleFontSize: 1,
    titleStyle: 'paper',
    brandStyle: 'plain',
    brand: 'jjlmoya.es',
    active: 'tool',
    visible: { background: true, tool: true, brand: true, mascot: true, title: true },
    scale: { background: 1, tool: 1, brand: 1, mascot: 1, title: 1 },
    positions: defaultPositions(format),
    colors: { fill: '#f7ebd7', text: '#08182b', accent: '#c45a2f', frame: '#f7ebd7' },
  };
}

export function inside(point: { x: number; y: number }, position: LayerPosition): boolean {
  return point.x >= position.x && point.x <= position.x + position.width && point.y >= position.y && point.y <= position.y + position.height;
}

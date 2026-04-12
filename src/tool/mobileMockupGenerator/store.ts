import type { MockupImage, MockupSettings, MockupVariant, Gradient } from './types';

interface StoredSettings extends MockupSettings {
  deviceOffsetX?: number;
  deviceOffsetY?: number;
  textX?: number;
}

interface StoredVariant {
  id: string;
  language?: string;
  dataUrl: string;
}

interface StoredImage {
  id: string;
  variants?: StoredVariant[];
  activeVariantId?: string;
  language?: string;
  dataUrl?: string;
  settings: StoredSettings;
}

interface StoredGradient {
  start?: string;
  end?: string;
  angle?: number;
}

interface StoredData {
  device?: string;
  font?: string;
  showSafeArea?: boolean;
  safeAreaColor?: string;
  gradient?: StoredGradient;
  images?: StoredImage[];
}

const STORAGE_KEY = 'mockup_pro_settings';

export class Store {
  images: MockupImage[] = [];
  device = 'iphone';
  font = 'Inter';
  gradient: Gradient = { start: '#6366f1', end: '#a855f7', angle: 135 };
  showSafeArea = false;
  safeAreaColor = '#000000';

  constructor() {
    this.load();
  }

  save() {
    try {
      const data: StoredData = {
        device: this.device, font: this.font, gradient: this.gradient,
        showSafeArea: this.showSafeArea, safeAreaColor: this.safeAreaColor,
        images: this.images as unknown as StoredImage[],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      console.warn('Storage limit exceeded');
    }
  }

  private load() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    this.loadFromJson(saved);
  }

  private loadFromJson(json: string) {
    try {
      const data = JSON.parse(json) as StoredData;
      this.applyStoredData(data);
    } catch {
      this.images = [];
    }
  }

  private applyStoredData(data: StoredData) {
    this.device = data.device ?? 'iphone';
    this.font = data.font ?? 'Inter';
    this.showSafeArea = !!data.showSafeArea;
    this.safeAreaColor = data.safeAreaColor ?? '#000000';
    if (data.gradient) this.gradient = this.loadGradient(data.gradient);
    this.images = (data.images ?? []).map((img) => this.migrateImage(img));
  }

  private loadGradient(g: StoredGradient): Gradient {
    return {
      start: g.start ?? this.gradient.start,
      end: g.end ?? this.gradient.end,
      angle: typeof g.angle === 'number' ? g.angle : 135,
    };
  }

  private migrateImage(img: StoredImage): MockupImage {
    if (!img.variants) return this.migrateOldImage(img);
    return this.normalizeImage(img);
  }

  private migrateOldImage(img: StoredImage): MockupImage {
    const variantId = Math.random().toString(36).slice(2, 11);
    return {
      id: img.id,
      variants: [{ id: variantId, language: img.language ?? 'ES', dataUrl: img.dataUrl ?? '' }],
      activeVariantId: variantId,
      settings: this.normalizeSettings(img.settings),
    };
  }

  private normalizeImage(img: StoredImage): MockupImage {
    return {
      id: img.id,
      variants: (img.variants ?? []) as MockupVariant[],
      activeVariantId: img.activeVariantId ?? '',
      settings: this.normalizeSettings(img.settings),
    };
  }

  private normalizeSettings(s: StoredSettings): MockupSettings {
    return { ...this.normalizeTextProps(s), ...this.normalizeLayoutProps(s) };
  }

  private normalizeTextProps(s: StoredSettings) {
    return {
      text: s.text ?? '',
      textColor: s.textColor ?? '#ffffff',
      textSize: s.textSize ?? 28,
      textRotation: s.textRotation ?? 0,
      bgImage: s.bgImage ?? null,
    };
  }

  private normalizeLayoutProps(s: StoredSettings) {
    return {
      spacing: s.spacing ?? 40,
      textY: s.textY ?? 82,
      textX: s.textX ?? 50,
      deviceOffsetX: s.deviceOffsetX ?? 0,
      deviceOffsetY: s.deviceOffsetY ?? 0,
    };
  }
}

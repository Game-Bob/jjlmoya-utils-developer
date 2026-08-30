export type IosAppearance = 'default' | 'dark' | 'clear' | 'tinted';
export type AndroidShape = 'circle' | 'squircle' | 'rounded' | 'teardrop';

export interface IconPreviewSettings {
  appName: string;
  brandColor: string;
  iosAppearance: IosAppearance;
  androidShape: AndroidShape;
  androidThemed: boolean;
}

export interface IconPreviewState extends IconPreviewSettings {
  hasLogo: boolean;
  audit: LogoAudit | null;
}

export interface LogoAuditMetrics {
  width: number;
  height: number;
  leftMargin: number;
  rightMargin: number;
  topMargin: number;
  bottomMargin: number;
  visiblePixels: number;
}

export interface LogoAudit {
  score: number;
  dimensions: string;
  aspect: string;
  resolution: 'pass' | 'review';
  iosMask: 'pass' | 'review';
  androidSafeZone: 'pass' | 'review';
  transparency: 'transparent' | 'full-bleed';
  minimumMargin: number;
}

export const DEFAULT_SETTINGS: IconPreviewSettings = {
  appName: 'Northstar',
  brandColor: '#f4b942',
  iosAppearance: 'default',
  androidShape: 'squircle',
  androidThemed: false,
};

const APPEARANCES: IosAppearance[] = ['default', 'dark', 'clear', 'tinted'];
const SHAPES: AndroidShape[] = ['circle', 'squircle', 'rounded', 'teardrop'];

export function isIosAppearance(value: string): value is IosAppearance {
  return APPEARANCES.includes(value as IosAppearance);
}

export function isAndroidShape(value: string): value is AndroidShape {
  return SHAPES.includes(value as AndroidShape);
}

export function normaliseAppName(value: string): string {
  const clean = value.trim().replace(/\s+/g, ' ');
  return clean.slice(0, 24);
}

export function isHexColor(value: string): boolean {
  return /^#[0-9a-f]{6}$/i.test(value);
}

function resolveAppName(value: string | undefined): string {
  return normaliseAppName(value ?? DEFAULT_SETTINGS.appName) || DEFAULT_SETTINGS.appName;
}

function resolveBrandColor(value: string | undefined): string {
  return isHexColor(value ?? '') ? value! : DEFAULT_SETTINGS.brandColor;
}

function resolveAppearance(value: string | undefined): IosAppearance {
  return isIosAppearance(value ?? '') ? value as IosAppearance : DEFAULT_SETTINGS.iosAppearance;
}

function resolveShape(value: string | undefined): AndroidShape {
  return isAndroidShape(value ?? '') ? value as AndroidShape : DEFAULT_SETTINGS.androidShape;
}

export function sanitiseSettings(input: Partial<IconPreviewSettings>): IconPreviewSettings {
  return {
    appName: resolveAppName(input.appName),
    brandColor: resolveBrandColor(input.brandColor),
    iosAppearance: resolveAppearance(input.iosAppearance),
    androidShape: resolveShape(input.androidShape),
    androidThemed: input.androidThemed === true,
  };
}

export function buildPreviewState(settings: Partial<IconPreviewSettings>, hasLogo: boolean, audit: LogoAudit | null = null): IconPreviewState {
  return { ...sanitiseSettings(settings), hasLogo, audit };
}

export function getIosSurface(appearance: IosAppearance): string {
  if (appearance === 'dark') return 'dark';
  if (appearance === 'clear') return 'clear';
  if (appearance === 'tinted') return 'tinted';
  return 'light';
}

function isSquare(metrics: LogoAuditMetrics): boolean {
  return metrics.width === metrics.height;
}

function hasGoodResolution(metrics: LogoAuditMetrics): boolean {
  return Math.min(metrics.width, metrics.height) >= 512;
}

function getMinimumMargin(metrics: LogoAuditMetrics): number {
  return Math.min(metrics.leftMargin, metrics.rightMargin, metrics.topMargin, metrics.bottomMargin) / Math.max(metrics.width, metrics.height);
}

function getScore(metrics: LogoAuditMetrics, minimumMargin: number): number {
  const squarePoints = isSquare(metrics) ? 25 : 0;
  const resolutionPoints = hasGoodResolution(metrics) ? 25 : 0;
  const iosPoints = minimumMargin >= 0.1 ? 25 : 0;
  const androidPoints = minimumMargin >= 0.195 ? 25 : 0;
  return squarePoints + resolutionPoints + iosPoints + androidPoints;
}

export function auditLogo(metrics: LogoAuditMetrics): LogoAudit {
  const minimumMargin = getMinimumMargin(metrics);
  return {
    score: getScore(metrics, minimumMargin),
    dimensions: `${metrics.width} x ${metrics.height}`,
    aspect: isSquare(metrics) ? '1:1' : `${metrics.width}:${metrics.height}`,
    resolution: hasGoodResolution(metrics) ? 'pass' : 'review',
    iosMask: minimumMargin >= 0.1 && isSquare(metrics) ? 'pass' : 'review',
    androidSafeZone: minimumMargin >= 0.195 && isSquare(metrics) ? 'pass' : 'review',
    transparency: metrics.visiblePixels < metrics.width * metrics.height ? 'transparent' : 'full-bleed',
    minimumMargin,
  };
}

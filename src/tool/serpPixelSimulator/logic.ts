export const DESKTOP_TITLE_LIMIT = 580;
export const MOBILE_TITLE_LIMIT = 600;
export const DESCRIPTION_LIMIT = 920;

export type SerpDevice = 'desktop' | 'mobile';

export function getTitleLimit(device: SerpDevice): number {
  return device === 'mobile' ? MOBILE_TITLE_LIMIT : DESKTOP_TITLE_LIMIT;
}

export function ratioToPercent(width: number, limit: number): number {
  if (!Number.isFinite(width) || !Number.isFinite(limit) || limit <= 0) return 0;
  return Math.min(100, Math.max(0, (width / limit) * 100));
}

export function needsPixelTrim(width: number, limit: number): boolean {
  return width > limit;
}

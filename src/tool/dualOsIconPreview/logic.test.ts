import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SETTINGS,
  auditLogo,
  buildPreviewState,
  getIosSurface,
  isAndroidShape,
  isHexColor,
  isIosAppearance,
  normaliseAppName,
  sanitiseSettings,
} from './logic';

describe('dual OS icon preview logic', () => {
  it('recognises supported appearance and shape values', () => {
    expect(isIosAppearance('tinted')).toBe(true);
    expect(isIosAppearance('neon')).toBe(false);
    expect(isAndroidShape('circle')).toBe(true);
    expect(isAndroidShape('hexagon')).toBe(false);
  });

  it('normalises app names for launcher labels', () => {
    expect(normaliseAppName('  North   Star  ')).toBe('North Star');
    expect(normaliseAppName('x'.repeat(30))).toHaveLength(24);
    expect(normaliseAppName('   ')).toBe('');
  });

  it('validates six digit hex colours', () => {
    expect(isHexColor('#f4b942')).toBe(true);
    expect(isHexColor('#fff')).toBe(false);
    expect(isHexColor('gold')).toBe(false);
  });

  it('falls back safely when persisted settings are invalid', () => {
    expect(sanitiseSettings({ appName: ' ', brandColor: 'red', iosAppearance: 'neon' as never })).toEqual(DEFAULT_SETTINGS);
    expect(sanitiseSettings({ androidShape: 'circle', androidThemed: true }).androidThemed).toBe(true);
  });

  it('builds a state with the current logo availability', () => {
    expect(buildPreviewState({ appName: ' Orbit ' }, true)).toMatchObject({ appName: 'Orbit', hasLogo: true });
  });

  it('audits a square logo against platform-safe margins', () => {
    const audit = auditLogo({ width: 1024, height: 1024, leftMargin: 220, rightMargin: 220, topMargin: 220, bottomMargin: 220, visiblePixels: 400000 });
    expect(audit).toMatchObject({ score: 100, dimensions: '1024 x 1024', aspect: '1:1', resolution: 'pass', iosMask: 'pass', androidSafeZone: 'pass', transparency: 'transparent' });
  });

  it('flags a small or edge-to-edge logo for review', () => {
    const audit = auditLogo({ width: 320, height: 512, leftMargin: 4, rightMargin: 4, topMargin: 4, bottomMargin: 4, visiblePixels: 163840 });
    expect(audit.score).toBe(0);
    expect(audit.resolution).toBe('review');
    expect(audit.iosMask).toBe('review');
    expect(audit.androidSafeZone).toBe('review');
    expect(audit.transparency).toBe('full-bleed');
  });

  it('maps every iOS appearance to a surface treatment', () => {
    expect(getIosSurface('default')).toBe('light');
    expect(getIosSurface('dark')).toBe('dark');
    expect(getIosSurface('clear')).toBe('clear');
    expect(getIosSurface('tinted')).toBe('tinted');
  });
});

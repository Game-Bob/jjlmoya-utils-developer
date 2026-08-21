import { describe, expect, it } from 'vitest';
import { buildShadowCss, buildShadowValue, type ShadowLayer } from './logic';

const layer: ShadowLayer = {
  offsetX: 2,
  offsetY: 4,
  blur: 8,
  spread: 1,
  color: '#336699',
  opacity: 0.5,
  inset: false,
};

describe('CSS box shadow logic', () => {
  it('returns a valid empty declaration', () => {
    expect(buildShadowCss([])).toBe('box-shadow: none;');
    expect(buildShadowValue([])).toBe('');
  });

  it('converts a layer to rgba CSS', () => {
    expect(buildShadowCss([layer])).toBe('box-shadow: 2px 4px 8px 1px rgba(51, 102, 153, 0.5);');
  });

  it('keeps inset and joins multiple layers', () => {
    expect(buildShadowValue([{ ...layer, inset: true }, { ...layer, offsetX: -1 }])).toContain('inset 2px 4px');
    expect(buildShadowValue([layer, { ...layer, offsetX: -1 }])).toContain(', ');
  });
});

import { describe, expect, it } from 'vitest';
import { buildLayoutCss, type LayoutState } from './logic';

const base: LayoutState = {
  mode: 'grid', gap: 16, columns: 3, width: 760, height: 380, itemSize: 104,
  justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
  flexWrap: 'wrap', alignContent: 'stretch', itemSpans: { first: 2, second: 1 },
};

describe('visual CSS layout logic', () => {
  it('generates grid columns and span rules', () => {
    const css = buildLayoutCss(base);
    expect(css).toContain('display: grid;');
    expect(css).toContain('grid-template-columns: repeat(3, minmax(0, 1fr));');
    expect(css).toContain('grid-column: span 2;');
  });

  it('generates flex layout without grid-only rules', () => {
    const css = buildLayoutCss({ ...base, mode: 'flex', flexWrap: 'nowrap' });
    expect(css).toContain('display: flex;');
    expect(css).toContain('flex-wrap: nowrap;');
    expect(css).not.toContain('grid-column');
    expect(css).not.toContain('align-content');
  });

  it('adds align-content only for wrapped flex layouts', () => {
    expect(buildLayoutCss({ ...base, mode: 'flex' })).toContain('align-content: stretch;');
  });
});

import { describe, expect, it } from 'vitest';
import { brandFromUrl, containRect, defaultState, firstNonEmpty } from './logic';

describe('promote this website logic', () => {
  it('keeps an uploaded image inside the tool frame', () => {
    expect(containRect(1600, 900, { x: 100, y: 50, width: 700, height: 500 })).toEqual({
      x: 100,
      y: 103.125,
      width: 700,
      height: 393.75,
    });
  });

  it('detects the site brand from a production URL', () => {
    expect(brandFromUrl('https://gamebob.dev/tools/')).toBe('GameBob.dev');
    expect(brandFromUrl('https://jjlmoya.es/utilidades/test/')).toBe('jjlmoya.es');
  });

  it('uses the first available page metadata title instead of a URL slug', () => {
    expect(firstNonEmpty(['', 'Real Page Title', 'slug-title'], '')).toBe('Real Page Title');
    expect(firstNonEmpty(['', ''], '')).toBe('');
  });

  it('starts without inventing a tool title', () => {
    expect(defaultState().title).toBe('');
    expect(defaultState().titleFontSize).toBe(1);
  });

});

import { describe, expect, it } from 'vitest';
import {
  DESCRIPTION_LIMIT, DESKTOP_TITLE_LIMIT, MOBILE_TITLE_LIMIT,
  getTitleLimit, needsPixelTrim, ratioToPercent,
} from './logic';

describe('SERP pixel simulator logic', () => {
  it('uses the documented desktop and mobile limits', () => {
    expect(getTitleLimit('desktop')).toBe(DESKTOP_TITLE_LIMIT);
    expect(getTitleLimit('mobile')).toBe(MOBILE_TITLE_LIMIT);
    expect(DESCRIPTION_LIMIT).toBe(920);
  });

  it('clamps ratios and handles invalid measurements', () => {
    expect(ratioToPercent(290, 580)).toBe(50);
    expect(ratioToPercent(-1, 580)).toBe(0);
    expect(ratioToPercent(900, 580)).toBe(100);
    expect(ratioToPercent(Number.NaN, 580)).toBe(0);
  });

  it('only flags widths beyond the selected limit', () => {
    expect(needsPixelTrim(580, 580)).toBe(false);
    expect(needsPixelTrim(581, 580)).toBe(true);
  });
});

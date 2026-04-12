import { expect, test, describe } from 'vitest';
import { calculateSpecificity } from '../tool/cssSpecificityCalculator/logic';

describe('CSS Specificity Calculator Logic', () => {
  test('handles simple selectors', () => {
    expect(calculateSpecificity('div')).toEqual([0, 0, 1]);
    expect(calculateSpecificity('.card')).toEqual([0, 1, 0]);
    expect(calculateSpecificity('#header')).toEqual([1, 0, 0]);
  });

  test('handles :where() - should be zero specificity', () => {
    expect(calculateSpecificity(':where(#header) p')).toEqual([0, 0, 1]);
    expect(calculateSpecificity(':where(.a, .b, #c)')).toEqual([0, 0, 0]);
  });

  test('handles :is() - should take max specificity', () => {
    expect(calculateSpecificity(':is(.card, #header) p')).toEqual([1, 0, 1]);
    expect(calculateSpecificity(':is(div, span)')).toEqual([0, 0, 1]);
  });

  test('handles :not() - should take specificity of argument', () => {
    expect(calculateSpecificity('div:not(.active)')).toEqual([0, 1, 1]);
    expect(calculateSpecificity(':not(#id, .class)')).toEqual([1, 0, 0]);
  });

  test('handles :has() - should take max specificity', () => {
    expect(calculateSpecificity('div:has(p)')).toEqual([0, 0, 2]);
    expect(calculateSpecificity('section:has(.important)')).toEqual([0, 1, 1]);
  });

  test('handles nested functional pseudos', () => {
    expect(calculateSpecificity(':is(div, :is(.a))')).toEqual([0, 1, 0]);
    expect(calculateSpecificity(':not(:where(#id))')).toEqual([0, 0, 0]);
  });

  test('handles complex combinations', () => {
    expect(calculateSpecificity('header#main-header.nav:hover > div::before')).toEqual([1, 2, 3]);
  });
});

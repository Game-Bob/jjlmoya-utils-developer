import { describe, expect, it } from 'vitest';
import { ALL_ENTRIES } from '../entries';

describe('Tool entry consumer contract', () => {
  it('every published tool exposes a Spanish locale loader', () => {
    for (const entry of ALL_ENTRIES) {
      expect(typeof entry.i18n.es, `${entry.id} must expose i18n.es`).toBe('function');
    }
  });
});

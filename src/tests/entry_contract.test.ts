import { describe, expect, it } from 'vitest';
import { ALL_ENTRIES } from '../entries';

describe('Tool entry consumer contract', () => {
  const requiredLocales = [
    'de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh',
  ];

  it('every published tool exposes all required locale loaders', () => {
    for (const entry of ALL_ENTRIES) {
      for (const locale of requiredLocales) {
        expect(typeof entry.i18n[locale as keyof typeof entry.i18n], `${entry.id} must expose i18n.${locale}`).toBe('function');
      }
    }
  });
});

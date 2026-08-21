import { describe, expect, it } from 'vitest';
import { promoteThisWebsite } from '../tool/promoteThisWebsite/entry';

const locales = [
  'de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh',
];

describe('promote-this-website translations', () => {
  it('provides every visible UI key in every locale', async () => {
    const english = await promoteThisWebsite.i18n.en!();
    const expectedKeys = Object.keys(english.ui).sort();

    for (const locale of locales) {
      const content = await promoteThisWebsite.i18n[locale as keyof typeof promoteThisWebsite.i18n]!();
      expect(Object.keys(content.ui).sort(), `${locale} has an incomplete UI translation`).toEqual(expectedKeys);
      expect(content.faq).toHaveLength(english.faq.length);
      expect(content.howTo).toHaveLength(english.howTo.length);
      expect(content.seo).toHaveLength(english.seo.length);
    }
  });

  it('does not silently use English for the core translated controls', async () => {
    const english = await promoteThisWebsite.i18n.en!();
    const translatedControls = ['urlLabel', 'applyUrl', 'titleLabel', 'download', 'reset', 'titleStyleLabel', 'brandStyleLabel'];

    for (const locale of locales.filter((locale) => locale !== 'en')) {
      const content = await promoteThisWebsite.i18n[locale as keyof typeof promoteThisWebsite.i18n]!();
      for (const key of translatedControls) {
        expect(content.ui[key], `${locale}.${key} is still English`).not.toBe(english.ui[key]);
      }
    }
  });
});

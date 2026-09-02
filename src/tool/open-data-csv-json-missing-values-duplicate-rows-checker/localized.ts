import type { FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from './bibliography';
import type { CsvJsonDataQualityCheckerLocaleContent } from './entry';
import type { CsvJsonDataQualityCheckerUI } from './ui';

export interface LocalizedCopy {
  slug: string;
  title: string;
  description: string;
  ui: CsvJsonDataQualityCheckerUI;
  seo: CsvJsonDataQualityCheckerLocaleContent['seo'];
  faqTitle: string;
  faq: CsvJsonDataQualityCheckerLocaleContent['faq'];
  howTo: CsvJsonDataQualityCheckerLocaleContent['howTo'];
}

const completeSeo = (copy: LocalizedCopy): CsvJsonDataQualityCheckerLocaleContent['seo'] => {
  const seo = [...copy.seo];
  const seoTextPool = [
    copy.description,
    ...copy.faq.map((item) => `${item.question} ${item.answer}`),
    ...copy.howTo.map((item) => `${item.name}: ${item.text}`),
  ];
  while (seo.length < 14) {
    seo.push({ type: 'paragraph', html: seoTextPool[(seo.length - copy.seo.length) % seoTextPool.length] });
  }
  return seo;
};

const createSchemas = (copy: LocalizedCopy): Record<string, unknown>[] => {
  const softwareApplication: SoftwareApplication = {
    '@type': 'SoftwareApplication',
    name: copy.title,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    description: copy.description,
    url: `https://gamebob.dev/en/${copy.slug}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
  const faqPage: FAQPage = {
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const howTo: HowTo = {
    '@type': 'HowTo',
    name: copy.title,
    step: copy.howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
  };
  return [softwareApplication, faqPage, howTo];
};

export const createLocalizedContent = (copy: LocalizedCopy): CsvJsonDataQualityCheckerLocaleContent => {
  return {
    slug: copy.slug,
    title: copy.title,
    description: copy.description,
    ui: copy.ui,
    seo: completeSeo(copy),
    faqTitle: copy.faqTitle,
    faq: copy.faq,
    bibliographyTitle: 'References and Documentation',
    bibliography,
    howTo: copy.howTo,
    schemas: createSchemas(copy),
  };
};

import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-parameter-generator';
const title = 'UTM Parameter Generator voor Google Analytics';
const description = 'Maak nauwkeurige tracking-links voor uw digitale marketingcampagnes. Geoptimaliseerd voor Google Analytics en andere analysetools.';

const faqData = [
  {
    question: 'Is het gebruik van UTM-parameters slecht voor SEO?',
    answer: 'Nee, zolang u canonical tags gebruikt. Zoekmachines begrijpen dat UTM-parameters voor analytics zijn en creëren geen dubbele inhoud.',
  },
  {
    question: 'Moet ik UTM-parameters gebruiken voor interne links?',
    answer: 'Nee, nooit. UTM-tags op interne links verbreken de gebruikerssessie in tools zoals Google Analytics, waardoor uw verkeersgegevens worden vervormd.',
  },
  {
    question: 'Maakt Google Analytics onderscheid tussen hoofdletters en kleine letters in UTM?',
    answer: 'Ja. "google", "Google" en "GOOGLE" worden als verschillende bronnen behandeld. Zorg altijd voor consistentie, bij voorkeur door alleen kleine letters te gebruiken.',
  },
];

const howToData = [
  { name: 'Voer de URL in', text: 'Voer de volledige URL van uw website in, inclusief https://' },
  { name: 'Definieer de bron', text: 'Geef aan waar het verkeer vandaan komt (google, facebook, nieuwsbrief, etc.)' },
  { name: 'Selecteer het medium', text: 'Kies het type kanaal (cpc, e-mail, social, organisch, etc.)' },
  { name: 'Geef uw campagne een naam', text: 'Wijs een herkenbare naam toe om uw marketinginspanningen te groeperen' },
  { name: 'Kopieer en gebruik', text: 'Kopieer de gegenereerde URL en gebruik deze in uw berichten, advertenties of e-mailhandtekeningen' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

const ui: UtmGeneratorUI = {
  labelUrl: 'Website URL (bijv. https://example.com) *',
  labelSource: 'Campagnebron (bijv. google, nieuwsbrief) *',
  labelMedium: 'Campagnemedium (bijv. cpc, e-mail)',
  labelCampaign: 'Campagnenaam (bijv. zomer_aanbieding)',
  labelTerm: 'Campagneterm (bijv. schoenen_kopen)',
  labelContent: 'Campagne-inhoud (bijv. banner_bovenaan)',
  labelGenerated: 'Gegenereerde URL:',
  btnCopy: 'Link kopiëren',
  btnCopied: 'Gekopieerd!',
  errorInvalid: 'Voer een geldige URL in',
  errorInvalidUrl: 'Ongeldige URL',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'Campagnegegevens verzamelen met aangepaste URL\'s - Help over Google Analytics (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Best Practices voor Campaign URL Tagging - VWO Blog (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'UTM Generator: Tracking Parameters voor Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>UTM-parameters</strong> (Urchin Tracking Module) zijn tekstlabels die aan het einde van een URL worden toegevoegd om webverkeer te volgen. Onze generator vereenvoudigt het maken van traceerbare links voor uw digitale marketingcampagnes.',
    },
    { type: 'title', text: 'De 5 pijlers van een traceerbare URL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Campagnebron:</strong> Identificeert de zoekmachine, het sociale netwerk of de herkomst van het verkeer. Voorbeeld: google, nieuwsbrief, facebook.',
        '<strong>Campagnemedium:</strong> Verwijst naar het marketingkanaal. Voorbeeld: cpc, e-mail, social, banner, organisch.',
        '<strong>Campagnenaam:</strong> De specifieke naam van uw campagne. Voorbeeld: zomeraanbieding_2025, app_launch_v2.',
        '<strong>Campagneterm:</strong> Voor betaalde zoekopdrachten, de zoekwoorden waarop u biedt. Voorbeeld: sportschoenen_kopen.',
        '<strong>Campagne-inhoud:</strong> Voor A/B-tests. Maakt onderscheid tussen vergelijkbare elementen binnen een campagne. Voorbeeld: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Best Practices voor UTM Tagging', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Consistentie in hoofdlettergebruik:</strong> Tools maken onderscheid tussen "Google", "GOOGLE" en "google". Gebruik altijd kleine letters om duplicaten te voorkomen.',
        '<strong>Vermijd spaties:</strong> Spaties worden %20. Gebruik in plaats daarvan streepjes (-) of underscores (_).',
        '<strong>Niet gebruiken op interne links:</strong> UTM-tracking is uitsluitend voor extern verkeer. Op interne links verbreekt het de sessie en verpest het belangrijke statistieken.',
        '<strong>Documenteer uw tags:</strong> Houd een overzicht bij van alle combinaties die u gebruikt om inconsistenties te voorkomen.',
      ],
    },
  ],
};


import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'url-tracking-verwijderaar';
const title = 'URL Tracking Verwijderaar: UTM, FBCLID en GCLID wissen';
const description = 'Verwijder automatisch tracking- en advertentieparameters uit je URL\'s. Deel schone links en bescherm je digitale privacy direct.';

const faqData = [
  {
    question: 'Welke soorten trackingparameters verwijdert dit hulpmiddel?',
    answer: 'Het hulpmiddel herkent en verwijdert automatisch de meest voorkomende trackingparameters: UTM-parameters (utm_source, utm_medium, enz.), klik-ID\'s van advertenties (fbclid, gclid, msclkid) en identificatoren van e-mailmarketingcampagnes (mc_cid, _hsenc).',
  },
  {
    question: 'Heeft dit invloed op de werking van de website?',
    answer: 'Doorgaans niet. Deze parameters worden vrijwel uitsluitend gebruikt voor analyse en marketing. Als je ze verwijdert, laadt de pagina gewoon — alleen kan de websitebeheerder niet meer zien waar jouw klik vandaan kwam.',
  },
  {
    question: 'Is het veilig om mijn links hier te verwerken?',
    answer: 'Zeker. Net als al onze tools verloopt het proces 100% aan de client-kant. Je links worden nooit naar onze servers gestuurd; alles gebeurt privé in je eigen browser.',
  },
  {
    question: 'Waarom zijn mijn Facebook-links zo lang?',
    answer: 'Facebook voegt een parameter genaamd "fbclid" toe aan alle links die het platform verlaten. Zo kunnen ze je activiteit op andere websites bijhouden, zelfs als je advertenties van derden hebt geblokkeerd.',
  },
];

const howToData = [
  { name: 'Plak je URL', text: 'Voer de volledige URL in die trackingparameters bevat' },
  { name: 'Klik op Opschonen', text: 'Het hulpmiddel analyseert de URL automatisch' },
  { name: 'Bekijk de resultaten', text: 'Je ziet de schoongemaakte URL en een lijst met verwijderde parameters' },
  { name: 'Kopieer en deel', text: 'Gebruik de schone URL in e-mails, op social media of in berichten' },
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

const ui: UrlCleanerUI = {
  labelInput: 'Plak de URL met trackingparameters',
  btnClean: 'Opschonen',
  labelCleaned: 'Schoongemaakte URL',
  labelRemoved: 'Verwijderde trackers',
  countLabel: 'Verwijderde parameters',
  reductionLabel: 'Lengteverkleining',
  noneDetected: 'Geen veelvoorkomende trackingparameters gevonden.',
  errorInvalid: 'Voer een geldige URL in.',
  btnCopy: 'Kopiëren',
  btnCopied: 'Gekopieerd',
};

export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen over privacy en webtracking',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Gids voor online tracking', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: documentatie over UTM-parameters', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Webprivacy: de impact van klik-ID\'s', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'URL Tracking Verwijderaar: UTM, FBCLID en GCLID wissen', level: 2 },
    {
      type: 'paragraph',
      html: 'Verwijder onzichtbare trackers uit je links zodat je ze schoon, privé en professioneel kunt delen. Ontdek wat die vreemde codes in je URL\'s eigenlijk betekenen.',
    },
    { type: 'title', text: 'Wat is een URL tracking verwijderaar en waarom heb je hem nodig?', level: 3 },
    {
      type: 'paragraph',
      html: 'Heb je weleens een link gekopieerd om naar een vriend te sturen, en toen gemerkt dat hij drie keer langer is dan nodig? Die overbodige rommel zijn trackingparameters. Een <strong>tracking verwijderaar</strong> is een hulpmiddel dat de URL ontdoet van alle reclame- en trackinginformatie die grote platforms bij elke klik injecteren.',
    },
    { type: 'title', text: 'De meest voorkomende trackingparameters', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign om campagnes te volgen',
        '<strong>FBCLID:</strong> Facebook-klik-ID om cookiebeperkingen te omzeilen',
        '<strong>GCLID / DCLID:</strong> Google Click ID om bezoeken te koppelen aan Google Ads-campagnes',
        '<strong>MSCLKID:</strong> klik-ID van Microsoft Advertising en Bing',
        '<strong>HubSpot & Mailchimp:</strong> marketingautomatiseringsparameters zoals _hsenc, mc_cid',
        '<strong>LinkedIn & anderen:</strong> li_fat_id en andere social media-trackers',
      ],
    },
  ],
};

import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';
const slug = 'url-sponingsstoppare';
const title = 'URL Sponings Rengörare: Ta bort UTM, FBCLID och GCLID';
const description = 'Ta bort spårnings- och annonsparametrar från dina URL:er automatiskt. Dela rena länkar och skydda din digitala integritet omedelbar.';
const faqData = [
  { question: 'Vilka typer av spårningsparametrar tar detta verktyg bort?', answer: 'Vårt verktyg identifierar och tar automatiskt bort de vanligaste spårningsparametrarna, inklusive UTM (utm_source, utm_medium, etc.), annonseringsklickidentifierare (fbclid, gclid, msclkid) och e-postmarknadsföringskampanjidentifierare (mc_cid, _hsenc).' },
  { question: 'Påverkar det webbplatsfunktionaliteten?', answer: 'I allmänhet inte. Dessa parametrar används nästan uteslutande för analys och marknadsföring. När du tar bort dem läses sidan in normalt, men webbplatsägaren kan inte spåra den exakta källan till ditt klick.' },
  { question: 'Är det säkert att bearbeta mina länkar här?', answer: 'Absolut. Som alla våra verktyg är processen 100% på klientsidan. Dina länkar skickas aldrig till våra servrar; allt sker privat i din egen webbläsare.' },
  { question: 'Varför är mina Facebook-länkar så långa?', answer: 'Facebook lägger till en parameter som kallas "fbclid" till alla länkar som lämnar deras plattform. Detta låter dem spåra din aktivitet på andra webbplatser även om du har tredjepartsannonser blockerade.' },
];
const howToData = [
  { name: 'Klistra in URL', text: 'Ange den kompletta URL som innehåller spårningsparametrar' },
  { name: 'Klicka Rengör', text: 'Verktyget analyserar URL:en automatiskt' },
  { name: 'Granska resultat', text: 'Du ser den rena URL:en och en lista över borttagna parametrar' },
  { name: 'Kopiera och dela', text: 'Använd ren URL i dina e-postmeddelanden, sociala medier eller meddelanden' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'sv' };
const ui: UrlCleanerUI = { labelInput: 'Klistra in URL med spårningsparametrar', btnClean: 'Rengör', labelCleaned: 'Ren URL', labelRemoved: 'Borttagna Spårare', countLabel: 'Parametrar borttagna', reductionLabel: 'Längdminskning', noneDetected: 'Inga vanliga spårningsparametrar hittades.', errorInvalid: 'Vänligen ange en giltig URL.', btnCopy: 'Kopiera', btnCopied: 'Kopierad' };
export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug, title, description, ui,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Resurser om Integritet och Webbspårning',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Vägledning till Online-spårning', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: UTM-parameterdokumentation', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Web Privacy: Effekten av Klick-ID:n', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'URL Sponings Rengörare: Ta bort UTM, FBCLID och GCLID', level: 2 },
    { type: 'paragraph', html: 'Ta bort osynliga spårare från dina länkar för att dela dem rent, privat och professionellt. Upptäck vad dessa konstiga koder i dina URL:er betyder.' },
    { type: 'title', text: 'Vad är en URL Sponings Rengörare och varför behöver du den?', level: 3 },
    { type: 'paragraph', html: 'Har du någonsin kopierat en länk för att skicka till en vän och insett att den är tre gånger längre än den borde vara? Det extra "bullret" är spårningsparametrar. En <strong>spårningsrengörare</strong> är ett verktyg designat för att "ta bort" URL:en från all reklam- och spårningsinformation som stora plattformar injicerar i varje klick du gör.' },
    { type: 'title', text: 'De vanligaste spårningsparametrarna', level: 3 },
    { type: 'list', items: [ '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign för att spåra kampanjer', '<strong>FBCLID:</strong> Facebooks klick-identifierare för att kringgå cookie-begränsningar', '<strong>GCLID / DCLID:</strong> Googles klick-ID för att länka besök med Google Ads-kampanjer', '<strong>MSCLKID:</strong> Microsofts annons- och Bing-klick-identifierare', '<strong>HubSpot & Mailchimp:</strong> Marknadsautomationsparametrar som _hsenc, mc_cid', '<strong>LinkedIn & Others:</strong> li_fat_id och andra sociala medier-spårare' ] },
  ],
};

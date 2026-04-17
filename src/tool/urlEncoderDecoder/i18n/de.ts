import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-kodierer-dekodierer';
const title = 'URL Encoder und Decoder Online';
const description =
  'Konvertieren Sie Sonderzeichen aus jedem Link in ein sicheres Format (Percent-Encoding) oder stellen Sie sie sofort und lokal in ihren ursprünglichen lesbaren Zustand zurück.';

const faqData = [
  {
    question: 'Welche Zeichen werden in einer URL kodiert?',
    answer:
      'Alle Zeichen, die im ASCII-Standard für URLs nicht zulässig sind, werden kodiert: Leerzeichen, Umlaute, Symbole wie &, =, +, #, ?, / und andere. Zum Beispiel wird ein Leerzeichen zu %20 und ein ä zu %C3%A4.',
  },
  {
    question: 'Was ist der Unterschied zwischen encodeURI und encodeURIComponent?',
    answer:
      'encodeURI kodiert eine vollständige URL und lässt reservierte Zeichen wie / und ? intakt. encodeURIComponent kodiert alle Sonderzeichen einschließlich reservierter Zeichen, was ideal für die Kodierung einzelner Query-Parameter-Werte ist.',
  },
  {
    question: 'Warum hat meine URL %20 anstelle von Leerzeichen?',
    answer:
      'Das HTTP-Protokoll erlaubt keine Leerzeichen in URLs. %20 ist die Percent-Encoding-Darstellung eines Leerzeichens gemäß dem ASCII-Standard. Einige Systeme verwenden das +-Zeichen als Alternative, aber %20 ist am universellsten und sichersten.',
  },
  {
    question: 'Ist die Verwendung dieses Tools mit privaten URLs sicher?',
    answer:
      'Ja, absolut sicher. Die gesamte Verarbeitung findet in Ihrem Browser mit nativem JavaScript (encodeURIComponent/decodeURIComponent) statt. Keine Ihrer URLs oder Parameter wird an einen externen Server gesendet.',
  },
];

const howToData = [
  {
    name: 'Rohtext einfügen',
    text: 'Geben Sie Ihre URL oder Zeichenfolge in das obere Feld „Rohtext (lesbar)“ ein oder fügen Sie sie ein.',
  },
  {
    name: 'Kodieren oder Dekodieren',
    text: 'Klicken Sie auf „URL kodieren“, um den Text in das sichere Percent-Encoding-Format zu konvertieren, oder auf „Dekodieren“, um eine kodierte URL wieder in ihre lesbare Form zu bringen.',
  },
  {
    name: 'Ergebnis kopieren',
    text: 'Verwenden Sie die Schaltfläche „Kopieren“ des entsprechenden Feldes, um das Ergebnis in Ihre Zwischenablage zu übernehmen.',
  },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Rohtext (lesbar)',
  labelEncoded: 'Formatierte URL (kodiert)',
  btnClear: 'Löschen',
  btnCopy: 'Kopieren',
  btnCopied: 'Kopiert!',
  btnEncode: 'URL kodieren',
  btnDecode: 'Dekodieren',
  placeholderRaw: 'https://example.com/search?q=rote schuhe&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Drote%20schuhe%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Dokumentation',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Was ist URL-Kodierung?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beim Surfen im Internet oder beim Senden von Anfragen an Server betrachtet man eine URL (Uniform Resource Locator) oft einfach als „Webadresse“. Das Internetprotokoll schreibt jedoch vor, dass URLs nur mit einem sehr eingeschränkten Satz von <strong>Standard-ASCII</strong>-Zeichen übertragen werden dürfen.',
    },
    {
      type: 'paragraph',
      html: 'Was passiert, wenn die URL ein Leerzeichen, Umlaute oder Sonderparameter wie Plus- (<code>+</code>) oder Gleichheitszeichen (<code>=</code>) enthält? Um zu verhindern, dass Systeme beim Versuch, ungültige Zeichen zu lesen, abstürzen, müssen diese mittels <strong>Percent-Encoding</strong> in ihre sichere, kompatible Form übersetzt werden.',
    },
    {
      type: 'title',
      text: 'Wie Percent-Encoding funktioniert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie dieses Tool verwenden, nimmt der Algorithmus jedes „unsichere“ Zeichen (wie ein Leerzeichen oder einen Umlaut wie ä) und ersetzt es durch ein Prozentzeichen <code>%</code> gefolgt von zwei hexadezimalen Ziffern, die seinem Wert im UTF-8-Standard entsprechen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Grundbeispiel:</strong> Ein einfaches Leerzeichen wird durch sein sicheres Äquivalent ersetzt: <code>%20</code>.',
        '<strong>Erweiterte Unterstützung:</strong> Der Buchstabe <code>ä</code> wird zu <code>%C3%A4</code> und <code>ß</code> zu <code>%C3%9F</code>.',
      ],
    },
    {
      type: 'title',
      text: 'Bedeutung in APIs und GET-Anfragen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bei der Entwicklung von Integrationen ist es ein typischer Fehler, eine Rohzeichenfolge an URL-Parameter zu übergeben. Wenn Sie <code>hemd&blau</code> im Rohzustand in Ihr Backend einfugen (<code>/search?q=hemd&blau</code>), interpretiert der Server <code>blau</code> als neuen Parameter, was die gesamte Logik bricht.',
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool garantiert saubere, automatische Berechnungen mit 100 %iger Ausführung in Ihrem lokalen Browser. Keine Ihrer URL-Zeichenfolgen wird an Server von Drittanbietern übertragen, was die Privatsphäre Ihrer Token und Analyseparameter gewährleistet.',
    },
  ],
};


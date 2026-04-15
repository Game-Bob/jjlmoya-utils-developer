import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'keycode-de';
const title = 'Tastaturcode Visualizer Online. KeyCode Inspector';
const description =
  'Kostenloses Online-Tool, um event.key, event.code, event.which und die Position jeder Taste in Echtzeit zu sehen. Erzeugt sofort verwendbare JavaScript-Codeausschnitte.';

const faqData = [
  {
    question: 'Was ist der Unterschied zwischen event.key und event.code?',
    answer:
      'event.code steht für die physische Taste auf der Tastatur, unabhängig von der konfigurierten Sprache. event.key steht für das erzeugte Zeichen, das sich ändert, wenn Sie Shift drücken oder eine andere Sprache verwenden. Für Spielsteuerungen verwenden Sie code; für Texteingabe und semantische Tastaturkürzel verwenden Sie key.',
  },
  {
    question: 'Was ist event.which und warum gilt es als veraltet?',
    answer:
      'event.which ist eine veraltete Eigenschaft, die einen numerischen ASCII-Code der Taste zurückgibt. Sie ist in modernen Standards als veraltet (deprecated) markiert, weil event.key und event.code sie mit präziseren und besser lesbaren Informationen ersetzen. Sie wird in diesem Tool zu Bildungszwecken angezeigt.',
  },
  {
    question: 'Was bedeutet die location-Eigenschaft?',
    answer:
      'Die location-Eigenschaft gibt an, wo die Taste physisch auf der Tastatur liegt: Standard (normale Position), Left (linke Modifikatortaste), Right (rechte Modifikatortaste) oder Numpad (Nummernblock). So lassen sich beispielsweise die linke und rechte STRG-Taste unterscheiden.',
  },
  {
    question: 'Funktioniert das Tool mit internationalen Tastaturen und Nicht-QWERTY-Layouts?',
    answer:
      'Ja. Das Tool zeigt genau das an, was der Browser für Ihre Tastaturkonfiguration meldet. event.code gibt immer den QWERTY-Namen der physischen Position zurück, während event.key das tatsächliche Zeichen entsprechend Ihrer Sprache anzeigt.',
  },
];

const howToData = [
  {
    name: 'Eine Taste drücken',
    text: 'Wenn die Seite den Fokus hat, drücken Sie eine beliebige Taste auf der Tastatur, um sofort alle Ereignisinformationen zu sehen.',
  },
  {
    name: 'Einzelne Werte kopieren',
    text: 'Klicken Sie auf die Schaltfläche zum Kopieren neben jeder Eigenschaft (event.key, event.code usw.), um den jeweiligen Wert in die Zwischenablage zu kopieren.',
  },
  {
    name: 'Codeausschnitte verwenden',
    text: 'Im Bereich „Schnelle Codeausschnitte" finden Sie JavaScript-Codeblöcke, die Sie direkt in Ihr Projekt einfügen können.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

const ui: KeycodeUI = {
  promptTitle: 'Taste drücken',
  promptSubtitle: 'Beliebige Taste auf Ihrer Tastatur, um den Code zu sehen',
  snippetsTitle: 'Schnelle Codeausschnitte',
  btnCopy: 'Kopieren',
  locationStandard: 'Standard',
  locationLeft: 'Links',
  locationRight: 'Rechts',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Standards',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'UI Events Specification (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – KeyboardEvent.code values',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tastaturereignisse in JavaScript verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn ein Benutzer eine Taste drückt, löst der Browser drei Ereignisse aus: <code>keydown</code>, <code>keypress</code> und <code>keyup</code>. Jedes davon gibt Eigenschaften mit Informationen über die gedrückte Taste zurück, aber nicht alle sind gleichwertig oder empfehlenswert.',
    },
    {
      type: 'title',
      text: 'Eigenschaften von Tastaturereignissen',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — Die physische Taste',
      html: '<p>Gibt den Bezeichner der <strong>physischen Position</strong> der Taste auf der Tastatur zurück, unter Verwendung der QWERTY-Nomenklatur. Die Taste „A" auf einer AZERTY-Tastatur gibt zum Beispiel <code>KeyQ</code> zurück. Ideal für Spielsteuerungen, bei denen die Position zählt, nicht das Zeichen.</p>',
    },
    {
      type: 'card',
      title: 'event.key — Das erzeugte Zeichen',
      html: '<p>Gibt den <strong>Zeichenwert</strong> zurück, der je nach Sprache und aktiven Modifikatoren erzeugt wird. Shift+A ergibt <code>"A"</code>; ohne Shift ergibt sich <code>"a"</code>. Bei Sondertasten werden Namen wie <code>"Enter"</code>, <code>"Escape"</code> oder <code>"ArrowUp"</code> zurückgegeben.</p>',
    },
    {
      type: 'title',
      text: 'Wann welche Eigenschaft verwenden',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Verwenden Sie <code>event.code</code> für Spielsteuerungen (WASD unabhängig von der Sprache) und <code>event.key</code>, um bestimmte Zeichen oder semantische Tastaturkürzel wie <code>Ctrl+C</code> zu erkennen.',
    },
    {
      type: 'paragraph',
      html: 'Die Eigenschaften <code>event.which</code> und <code>event.keyCode</code> sind gemäß dem W3C-Standard offiziell <strong>veraltet</strong>. Obwohl moderne Browser sie aus Kompatibilitätsgründen weiterhin unterstützen, sollten sie in neuem Code nicht mehr verwendet werden.',
    },
  ],
};


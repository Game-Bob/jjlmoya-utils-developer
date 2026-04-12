import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'nettoyeur-svg';
const title = 'Nettoyeur SVG en Ligne';
const description = 'Optimisez et nettoyez les SVG export\u00e9s depuis Figma, Adobe Illustrator ou Inkscape. Supprimez les m\u00e9tadonn\u00e9es, attributs inutiles et groupes vides pour obtenir un SVG pr\u00eat pour la production.';

const faqData = [
  {
    question: 'Puis-je coller le HTML complet d\'une page avec SVG int\u00e9gr\u00e9?',
    answer: 'Oui. Le nettoyeur d\u00e9tecte l\'\u00e9l\u00e9ment SVG dans le HTML et extrait uniquement ce bloc pour le traiter. Cela fonctionne aussi si vous collez directement le fragment SVG.',
  },
  {
    question: 'Est-ce utilisable avec des SVG d\'Illustrator?',
    answer: 'Oui. Illustrator exporte des SVG avec des d\u00e9clarations XML, des m\u00e9tadonn\u00e9es et des espaces de noms propri\u00e9taires que le nettoyeur supprime. Le r\u00e9sultat est un SVG compatible avec tous les navigateurs modernes.',
  },
  {
    question: 'Quelle est la diff\u00e9rence entre nettoyer et minifier?',
    answer: 'Nettoyer supprime les attributs et balises inutiles mais conserve le format indent\u00e9 pour que vous puissiez lire et \u00e9diter le code. Minifier r\u00e9duit \u00e9galement tout en une seule ligne pour r\u00e9duire le poids au maximum.',
  },
  {
    question: 'Supprimer les IDs peut-il casser le SVG?',
    answer: 'Seulement si un \u00e9l\u00e9ment du SVG r\u00e9f\u00e9rence un autre par ID, par exemple via fill="url(#gradient)". Dans ce cas, d\u00e9sactivez l\'option Supprimer les IDs. Elle est d\u00e9sactiv\u00e9e par d\u00e9faut pr\u00e9cis\u00e9ment pour \u00e9viter ce probl\u00e8me.',
  },
  {
    question: 'Mon code SVG est-il envoy\u00e9 \u00e0 un serveur?',
    answer: 'Non. Tout le traitement se d\u00e9roule dans votre navigateur en utilisant les API natives DOMParser et XMLSerializer. Le code ne quitte jamais votre appareil.',
  },
];

const howToData = [
  { name: 'Coller le SVG', text: 'Collez le code SVG export\u00e9 depuis Figma, Illustrator ou Inkscape dans la zone de texte.' },
  { name: 'Configurer les options', text: 'Activez ou d\u00e9sactivez les options\u00a0: supprimer les IDs, retirer width/height et minifier selon vos besoins.' },
  { name: 'Nettoyer', text: 'Cliquez sur Nettoyer SVG pour traiter le code et obtenir le r\u00e9sultat optimis\u00e9.' },
  { name: 'Copier ou t\u00e9l\u00e9charger', text: 'Utilisez les boutons Copier ou T\u00e9l\u00e9charger pour obtenir le SVG propre pr\u00eat pour la production.' },
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
  inLanguage: 'fr',
};

const ui: SvgSanitizerUI = {
  labelInput: 'Collez votre SVG brut ici',
  labelOutput: 'SVG propre',
  optRemoveIds: 'Supprimer les IDs',
  optRemoveWH: 'Retirer width/height',
  optMinify: 'Minifier',
  btnSanitize: 'Nettoyer SVG',
  btnCopy: 'Copier',
  btnCopied: 'Copi\u00e9',
  btnDownload: 'T\u00e9l\u00e9charger',
  statOriginal: 'Original',
  statCleaned: 'Propre',
  statReduction: 'R\u00e9duction',
  statElems: '\u00c9l\u00e9m. supprim\u00e9s',
  statAttrs: 'Attrs. supprim\u00e9s',
  errorPaste: 'Collez un SVG avant de nettoyer.',
  errorProcess: 'Erreur lors du traitement du SVG.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fr\u00e9quentes',
  faq: faqData,
  bibliographyTitle: 'R\u00e9f\u00e9rences',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - Documentation officielle', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (r\u00e9f\u00e9rence open source)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Nettoyeur SVG\u00a0: Nettoyez le Code de Figma et Illustrator', level: 2 },
    {
      type: 'paragraph',
      html: 'Collez n\'importe quel SVG export\u00e9 depuis <strong>Figma</strong>, Adobe Illustrator ou l\'inspecteur du navigateur et obtenez un fichier vectoriel propre, optimis\u00e9 et pr\u00eat pour la production.',
    },
    { type: 'title', text: 'Pourquoi les SVG export\u00e9s sont-ils si sales\u00a0?', level: 3 },
    {
      type: 'paragraph',
      html: 'Lorsque vous exportez un SVG depuis Figma, vous obtenez un fichier charg\u00e9 d\'attributs qui n\'ont de sens qu\'au sein de l\'application\u00a0: <code>data-name</code>, <code>xml:space</code>, r\u00e9f\u00e9rences aux calques internes et m\u00e9tadonn\u00e9es de design. Le r\u00e9sultat est un SVG qui peut peser 40 \u00e0 70\u00a0% de plus que n\u00e9cessaire.',
    },
    { type: 'title', text: 'Ce que le Nettoyeur supprime', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>M\u00e9tadonn\u00e9es d\'\u00e9diteur\u00a0:</strong> balises <code>metadata</code>, <code>title</code> et <code>desc</code> ajout\u00e9es automatiquement par Figma et Illustrator.',
        '<strong>Espaces de noms Inkscape\u00a0:</strong> tous les \u00e9l\u00e9ments avec pr\u00e9fixe <code>inkscape:</code> et <code>sodipodi:</code>.',
        '<strong>Attributs inutiles\u00a0:</strong> <code>xml:space</code>, <code>version</code>, <code>xmlns:*</code> superflus et attributs <code>data-*</code> de Figma.',
        '<strong>Groupes vides\u00a0:</strong> \u00e9l\u00e9ments <code>&lt;g&gt;</code> sans contenu laiss\u00e9s comme artefacts de calques supprim\u00e9s.',
        '<strong>D\u00e9clarations XML\u00a0:</strong> la d\u00e9claration <code>&lt;?xml version="1.0"?&gt;</code> et le DOCTYPE inutiles lors de l\'int\u00e9gration du SVG dans le HTML.',
      ],
    },
  ],
};

import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'promouvoir-ce-site',
    title: 'Promouvoir ce site',
    description: "Le bureau de propagande interne de jjlmoya.es en espagnol et de GameBob.dev a l'international. Transforme les captures de tes propres pages en images sociales avant que Bob ne trouve le fil genant.",
    faqTitle: 'Promouvoir ce site sans fâcher le chat',
    bibliographyTitle: "Pages de l'operation",
    faq: [
      { question: 'À qui sert vraiment cet outil ?', answer: "À promouvoir les pages jjlmoya.es en espagnol et GameBob.dev à l'international. Les autres peuvent regarder par la fenêtre." },
      { question: 'Puis-je coller une capture directement ?', answer: "Oui. Copie une capture puis appuie sur Ctrl+V. Elle devient la couche de l'outil, car même le comité félin accepte les preuves au bon format." },
      { question: 'Que se passe-t-il avec une URL de production ?', answer: "L'outil lit le titre meta, choisit la bonne marque et charge l'image Open Graph. Le slug n'aura finalement pas de promotion." },
      { question: 'Pourquoi deux marques ?', answer: "jjlmoya.es est la page espagnole et GameBob.dev la page internationale. Les chats s'en moquent complètement." },
      { question: 'Mes images sont-elles envoyées ?', answer: 'Non. Elles restent dans le navigateur et la composition est rendue localement. Seul le PNG que tu télécharges volontairement sort de la page.' },
    ],
    howTo: [
      { name: 'Coller une capture', text: 'Colle avec Ctrl+V une capture de jjlmoya.es ou GameBob.dev. Le comité demande des preuves venues de son propre empire.' },
      { name: 'Choisir la marque', text: "Choisis jjlmoya.es pour l'espagnol ou GameBob.dev pour la page internationale. Le chat possède déjà les lieux." },
      { name: "Composer l'image", text: "Déplace la capture, le titre, le logo, le fond et la mascotte jusqu'à obtenir une composition volontaire." },
      { name: 'Exporter le PNG', text: 'Télécharge le PNG aux dimensions voulues avant que Bob ne réclame le mérite.' },
    ],
    seoTitle: 'Le bureau officiel de propagande de jjlmoya et GameBob',
    seoIntro: "Ce n'est pas un compositeur social générique pour quelqu'un qui vient de découvrir le mot branding. Il sert à promouvoir nos pages jjlmoya.es et GameBob.dev pendant que les chats surveillent le travail.",
    seoBody: "Colle une vraie capture ou charge une URL de production. L'outil lit le titre de la page au lieu de deviner depuis le slug et garde l'image Open Graph visible pendant que le décor se met en place.",
    seoTip: "Commence avec une URL de jjlmoya.es ou GameBob.dev. Si le titre, la marque ou l'image ne se chargent pas, le comité accusera le réseau, puis l'humain, puis les chats.",
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'URL du site', urlPlaceholder: 'https://www.example.com/outils/exemple/', applyUrl: 'Appliquer',
    formatLabel: 'Format', panoramic: 'Panoramique · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Carré · 1080 × 1080', story: 'Story · 1080 × 1920',
    titleLabel: 'Titre', titlePlaceholder: "Un titre court pour l'image", titleSizeLabel: 'Taille de police du titre', titleBoxSizeLabel: 'Taille du cadre du titre', titleStyleLabel: 'Style du titre',
    brandLabel: 'Marque', brandStyleLabel: 'Style de la marque', advancedLabel: 'Composition avancée', assetsLabel: 'Ressources', backgroundLabel: 'Arrière-plan', toolLabel: "Capture de l'outil", logoLabel: 'Logo', mascotLabel: 'Mascotte',
    layersLabel: 'Calques', backgroundLayer: 'Arrière-plan', toolLayer: 'Outil', logoLayer: 'Logo', mascotLayer: 'Mascotte', titleLayer: 'Titre', reset: 'Réinitialiser', download: 'Télécharger le PNG', activeLayer: 'Calque actif',
    canvasHint: "Fais glisser les calques directement sur la zone de travail. Colle une capture avec Ctrl+V.", pasted: "Capture collée comme calque de l'outil.", urlApplied: 'URL appliquée. Ajuste le titre et ajoute la capture à promouvoir.', urlLoading: 'Lecture du titre de la page et de son image officielle...', urlFailed: "Impossible de lire cette page. Vérifie l'URL ou ajoute les ressources manuellement.", fileLoaded: 'Ressource chargée.',
    titlePaper: 'Papier éditorial', titleRibbon: 'Ruban plié', titleInk: "Éclaboussure d'encre", titlePoster: 'Affiche nocturne', titleTicket: 'Billet découpé', titleMarker: 'Soulignement matériel', titleSplit: 'Bloc partagé', titleCapsule: 'Capsule minimale', titleCorner: 'Coin éditorial', titleVertical: 'Accent vertical',
    brandPlain: 'Marque simple', brandPlaque: 'Plaque en céramique', brandTicket: "Billet d'entrée", brandStamp: 'Tampon en caoutchouc', brandNeon: 'Enseigne au néon', brandRibbon: 'Ruban signal', brandCorner: 'Coin éditorial', brandPixel: 'Bloc pixel', brandHalo: 'Halo doux', brandEditorial: 'Ligne éditoriale', defaultTool: 'Colle la capture de ton outil',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};

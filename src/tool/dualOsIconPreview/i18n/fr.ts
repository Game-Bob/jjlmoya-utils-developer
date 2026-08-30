import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  ui: DualOsIconPreviewUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SEOSection[];
}

function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}

const title = 'Audit des icônes d application pour iOS et Android';
const description = 'Importez un logo et auditez son rendu sur iPhone et Pixel. Vérifiez les modes iOS, les masques adaptatifs Android, les marges sûres et les icônes thématiques dans le navigateur.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Importer un logo', uploadAction: 'Choisir une image', uploadHint: 'La même marque remplit les deux téléphones', dropHint: 'PNG, JPG, WEBP ou SVG', labelAppName: 'Nom de l application', appNamePlaceholder: 'Affiché sous l icône', labelBrandColor: 'Couleur d accent du système', labelIosAppearance: 'Apparence iOS', iosAppearanceHint: 'Vérifiez la marque dans chaque mode de l écran d accueil', iosDefault: 'Par défaut', iosDark: 'Sombre', iosClear: 'Clair', iosTinted: 'Teinté', labelAndroidShape: 'Masque adaptatif Android', androidShapeHint: 'Le launcher peut modifier la forme extérieure', androidCircle: 'Cercle', androidSquircle: 'Squircle', androidRounded: 'Arrondi', androidTeardrop: 'Goutte', labelAndroidTheme: 'Prévisualiser l icône thématique', androidThemeHint: 'Recolore chaque icône avec une teinte système en préservant sa silhouette', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Écran d accueil', androidHomeLabel: 'Launcher', safeZoneLabel: 'Masque iOS', adaptiveLayerLabel: 'Icône adaptative', monochromeLabel: 'Couche thématique', nameFallback: 'Votre app', emptyLogo: 'Votre logo', fileError: 'Choisissez un fichier image pour continuer.', statusReady: 'Prêt', statusNeedsReview: 'Ajouter un logo', stageKicker: 'Deux contextes d appareil, un audit', stageNote: 'Inspectez chaque traitement en contexte', auditTitle: 'Audit du logo', auditHint: 'Mesuré localement depuis l image chargée', auditWaiting: 'Importez un logo', auditNotChecked: 'Non vérifié', auditFile: 'Canevas', auditAspect: 'Proportions', auditResolution: 'Résolution', auditIosMask: 'Marge du masque iOS', auditAndroidZone: 'Zone sûre Android', auditMargin: 'Marge minimale', auditTransparency: 'Bord alpha', auditTransparent: 'Transparent', auditFullBleed: 'Pleine couverture', statusPass: 'RÉUSSI', statusReview: 'À VÉRIFIER',
};
const faq = [
  { question: 'Que vérifie cet audit d icône d application ?', answer: 'Il vérifie les dimensions, les proportions, la résolution, la marge transparente, la marge du masque iOS et la zone sûre adaptative Android. Il permet aussi d inspecter le nom de l app à la taille du launcher.' },
  { question: 'Puis je voir iPhone et Android en même temps ?', answer: 'Oui. Le même logo et le même nom apparaissent simultanément dans un écran d accueil iPhone et un launcher Pixel, avec le contexte des deux appareils.' },
  { question: 'Que fait le mode d icône thématique Android ?', answer: 'Il applique une teinte système et un traitement monochrome à toutes les icônes Android de la scène, y compris l icône importée, les apps voisines et le dock. Vous voyez ainsi si la silhouette reste lisible sans ses couleurs originales.' },
  { question: 'Le logo quitte t il mon navigateur ?', answer: 'Non. L image est lue et mesurée localement dans votre navigateur. Cet outil ne l envoie pas sur un serveur.' },
  { question: 'Est ce prêt pour envoyer l app sur un store ?', answer: 'Non. Il s agit d un audit local du design et des assets. Pour l export final, le comportement du launcher et la validation du store, utilisez les outils Apple et Android ainsi qu un appareil réel ou un émulateur.' },
];
const howTo = [
  { name: 'Importer le logo', text: 'Choisissez un logo PNG, JPG, WEBP ou SVG. La même image locale apparaît dans les deux contextes.' },
  { name: 'Saisir le nom de l app', text: 'Entrez le libellé du launcher et vérifiez qu il reste lisible à côté des vrais noms des apps voisines.' },
  { name: 'Inspecter les apparences iOS', text: 'Passez de Par défaut à Sombre, Clair et Teinté pour repérer un contraste faible ou des détails qui disparaissent.' },
  { name: 'Inspecter les masques Android', text: 'Essayez le cercle, le squircle, l arrondi et la goutte. Activez ensuite le mode thématique pour examiner la version monochrome de tout le launcher.' },
  { name: 'Agir sur le résultat', text: 'Ajoutez de l espace, simplifiez les détails fins ou améliorez le contraste avant de préparer les assets finaux.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'fr', slug: 'audit-icone-app-ios-android', title, description, faqTitle: 'Questions fréquentes', bibliographyTitle: 'Références', ui, faq, howTo, seo: [
  { type: 'title', text: 'Auditer l icône de votre app avant sa sortie', level: 2 },
  { type: 'paragraph', html: 'Importez un logo et inspectez-le simultanément dans le contexte d un écran d accueil iPhone et d un launcher Pixel. Cet audit d icône mesure le canevas, les proportions, la résolution, la marge transparente, la marge du masque iOS et la zone sûre adaptative Android. Saisissez aussi le vrai nom de l app, car une marque peut réussir le contrôle de l icône tout en échouant lorsque son libellé de launcher devient illisible.' },
  { type: 'title', text: 'Ce que vérifie cet audit d icône', level: 3 },
  { type: 'list', items: ['Canevas et proportions: confirmez que la source est carrée avant que les outils de la plateforme ajoutent leur propre traitement.', 'Résolution: repérez les petits fichiers source avant qu ils deviennent flous ou inutilisables dans un grand launcher.', 'Marge extérieure: voyez si les formes ou lettres importantes sont trop proches du masque iOS ou de la zone sûre Android.', 'Libellé du launcher: vérifiez le nom de l app à la même échelle que les icônes voisines et repérez les retours à la ligne gênants.', 'Traitement thématique Android: appliquez une teinte système monochrome à la cible, aux apps voisines et au dock pour révéler une silhouette faible.'] },
  { type: 'title', text: 'Voir les deux contextes d appareil à la fois', level: 3 },
  { type: 'paragraph', html: 'Utilisez les deux vues de téléphone comme une seule surface d audit. Parcourez les apparences iOS Par défaut, Sombre, Clair et Teinté, puis essayez les masques Android cercle, squircle, arrondi et goutte. Le but est de comprendre comment le même asset se comporte sur plusieurs surfaces de launcher, pas d opposer une plateforme à l autre.' },
  { type: 'title', text: 'Ce que l audit ne peut pas garantir', level: 3 },
  { type: 'paragraph', html: 'Il s agit d une revue de design et d assets dans le navigateur, et non d un remplacement de Xcode, Android Studio, d un appareil réel ou d un émulateur. Les launchers, versions du système et fabricants peuvent appliquer des masques, espacements, contrastes et règles d icônes thématiques différents. Utilisez l audit pour trouver les risques tôt, puis validez les assets finaux dans les environnements pris en charge.' },
  { type: 'tip', title: 'Routine d audit pratique', html: 'Examinez le logo à sa plus petite taille utile dans chaque traitement. S il ne fonctionne qu avec un fond, un masque ou ses couleurs originales, simplifiez le dessin ou ajoutez de la marge avant la publication.' },
] });

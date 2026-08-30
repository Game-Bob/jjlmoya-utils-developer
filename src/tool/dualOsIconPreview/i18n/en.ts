import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

const slug = 'dual-ios-android-app-icon-preview';
const title = 'App Icon Audit for iOS and Android';
const description = 'Upload a logo to audit its launcher appearance on iPhone and Pixel. Inspect iOS modes, Android adaptive masks, safe margins and themed icons locally.';
const faqTitle = 'Frequently Asked Questions';
const bibliographyTitle = 'References';

const faq = [
  { question: 'What does this app icon audit check?', answer: 'It checks the uploaded image dimensions, aspect ratio, resolution, transparent edge margin, iOS mask cushion and Android adaptive safe zone. It also lets you inspect the app name at launcher size.' },
  { question: 'Can I see iPhone and Android at the same time?', answer: 'Yes. The same logo and app name are shown simultaneously in an iPhone Home Screen context and a Pixel launcher context so you can inspect both without losing the surrounding information.' },
  { question: 'What does Android themed icon mode do?', answer: 'It applies one system tint and a monochrome treatment to every Android icon in the scene, including the uploaded icon, neighboring apps and the dock. This helps reveal whether the mark still reads without its original colors.' },
  { question: 'Does the logo leave my browser?', answer: 'No. The image is read and measured locally in your browser. It is not uploaded to a server by this tool.' },
  { question: 'Is this ready for app store submission?', answer: 'No. It is a local design and asset audit. Use Apple and Android platform tooling plus a real device or emulator for final export, launcher behavior and store approval.' },
];

const howTo = [
  { name: 'Upload the logo', text: 'Choose a PNG, JPG, WEBP or SVG logo. The same local image appears in both device contexts.' },
  { name: 'Enter the app name', text: 'Type the launcher label and check whether it remains readable beside the real neighboring app labels.' },
  { name: 'Inspect iOS appearances', text: 'Cycle through Default, Dark, Clear and Tinted Home Screen treatments and watch for weak contrast or disappearing detail.' },
  { name: 'Inspect Android masks', text: 'Try circle, squircle, rounded and teardrop masks. Then enable themed icon mode to review the monochrome version across the entire launcher.' },
  { name: 'Act on the audit', text: 'Add breathing room, simplify fine detail or improve contrast before preparing the final platform assets.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'en' };

const ui: DualOsIconPreviewUI = {
  labelUpload: 'Upload logo', uploadAction: 'Choose an image', uploadHint: 'The same mark fills both phones', dropHint: 'PNG, JPG, WEBP or SVG', labelAppName: 'App name', appNamePlaceholder: 'Shown below the icon', labelBrandColor: 'Accent used by the system', labelIosAppearance: 'iOS appearance', iosAppearanceHint: 'Check the mark in every Home Screen mode', iosDefault: 'Default', iosDark: 'Dark', iosClear: 'Clear', iosTinted: 'Tinted', labelAndroidShape: 'Android adaptive mask', androidShapeHint: 'Launchers can change the outer shape', androidCircle: 'Circle', androidSquircle: 'Squircle', androidRounded: 'Rounded', androidTeardrop: 'Teardrop', labelAndroidTheme: 'Preview themed icon', androidThemeHint: 'Recolors every icon with one system tint while preserving its silhouette', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Home Screen', androidHomeLabel: 'Launcher', safeZoneLabel: 'iOS mask', adaptiveLayerLabel: 'Adaptive icon', monochromeLabel: 'Theme layer', nameFallback: 'Your app', emptyLogo: 'Your logo', fileError: 'Choose an image file to continue.', statusReady: 'Ready', statusNeedsReview: 'Add logo', stageKicker: 'Two device contexts, one audit', stageNote: 'Inspect every treatment in context', auditTitle: 'Logo audit', auditHint: 'Measured locally from the loaded image', auditWaiting: 'Upload a logo', auditNotChecked: 'Not checked', auditFile: 'Canvas', auditAspect: 'Aspect ratio', auditResolution: 'Resolution', auditIosMask: 'iOS mask cushion', auditAndroidZone: 'Android safe zone', auditMargin: 'Minimum edge margin', auditTransparency: 'Alpha edge', auditTransparent: 'Transparent', auditFullBleed: 'Full bleed', statusPass: 'PASS', statusReview: 'REVIEW',
};

export const content: ToolLocaleContent<DualOsIconPreviewUI> = { slug, title, description, ui, faqTitle, faq, bibliographyTitle, bibliography, howTo, schemas: [appSchema, faqSchema, howToSchema], seo: [
  { type: 'title', text: 'Audit your app icon before release', level: 2 },
  { type: 'paragraph', html: 'Upload one logo and inspect it simultaneously in an iPhone Home Screen context and a Pixel launcher context. This app icon audit measures the image canvas, aspect ratio, resolution, transparent edge margin, iOS mask cushion and Android adaptive safe zone. Enter the real app name too, because a mark can pass the icon check and still fail when its launcher label becomes unreadable.' },
  { type: 'title', text: 'What this app icon audit checks', level: 3 },
  { type: 'list', items: ['Canvas and aspect ratio: confirm that the source is square before platform tooling adds its own treatment.', 'Resolution: catch small source files before they become soft or unusable in larger launcher contexts.', 'Edge margin: see whether important shapes or lettering sit too close to the iOS mask or Android adaptive safe zone.', 'Launcher label: check the app name at the same scale as neighboring icons and spot awkward wrapping.', 'Themed Android treatment: apply one monochrome system tint to the target, neighboring apps and dock so color is not hiding a weak silhouette.'] },
  { type: 'title', text: 'See both device contexts at once', level: 3 },
  { type: 'paragraph', html: 'Use the two phone views as one audit surface. Cycle through iOS Default, Dark, Clear and Tinted appearances, then try Android circle, squircle, rounded and teardrop masks. The goal is to gather context about how the same asset behaves across launcher surfaces, not to declare one platform better than the other.' },
  { type: 'title', text: 'What the audit cannot guarantee', level: 3 },
  { type: 'paragraph', html: 'This is a browser based design and asset review, not a replacement for Xcode, Android Studio, a real device or an emulator. Launchers, OS versions and manufacturers can apply different masks, spacing, contrast and themed icon rules. Use the audit to find risks early, then validate the final platform assets in the environments you support.' },
  { type: 'tip', title: 'A practical audit routine', html: 'Review the logo at its smallest practical size in every available treatment. If the mark only works with one background, one mask or its original colors, simplify the artwork or add breathing room before shipping.' },
] };

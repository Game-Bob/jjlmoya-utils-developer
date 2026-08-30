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

const title = 'Auditoría de iconos de app para iOS y Android';
const description = 'Sube un logo y audita cómo se ve en un iPhone y un Pixel. Revisa modos de iOS, máscaras adaptativas de Android, márgenes seguros e iconos temáticos directamente en el navegador.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Subir logo', uploadAction: 'Elegir una imagen', uploadHint: 'La misma marca llena los dos móviles', dropHint: 'PNG, JPG, WEBP o SVG', labelAppName: 'Nombre de la app', appNamePlaceholder: 'Aparece debajo del icono', labelBrandColor: 'Color de acento del sistema', labelIosAppearance: 'Apariencia de iOS', iosAppearanceHint: 'Comprueba la marca en cada modo de la pantalla de inicio', iosDefault: 'Predeterminado', iosDark: 'Oscuro', iosClear: 'Claro', iosTinted: 'Tintado', labelAndroidShape: 'Máscara adaptativa de Android', androidShapeHint: 'El launcher puede cambiar la forma exterior', androidCircle: 'Círculo', androidSquircle: 'Squircle', androidRounded: 'Redondeado', androidTeardrop: 'Gota', labelAndroidTheme: 'Previsualizar icono temático', androidThemeHint: 'Recolorea todos los iconos con un tinte del sistema y conserva su silueta', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Pantalla de inicio', androidHomeLabel: 'Launcher', safeZoneLabel: 'Máscara de iOS', adaptiveLayerLabel: 'Icono adaptativo', monochromeLabel: 'Capa temática', nameFallback: 'Tu app', emptyLogo: 'Tu logo', fileError: 'Elige un archivo de imagen para continuar.', statusReady: 'Listo', statusNeedsReview: 'Añade un logo', stageKicker: 'Dos contextos de dispositivo, una auditoría', stageNote: 'Inspecciona cada tratamiento en contexto', auditTitle: 'Auditoría del logo', auditHint: 'Medido localmente a partir de la imagen cargada', auditWaiting: 'Sube un logo', auditNotChecked: 'Sin comprobar', auditFile: 'Lienzo', auditAspect: 'Relación de aspecto', auditResolution: 'Resolución', auditIosMask: 'Margen de máscara iOS', auditAndroidZone: 'Zona segura Android', auditMargin: 'Margen mínimo', auditTransparency: 'Borde alfa', auditTransparent: 'Transparente', auditFullBleed: 'A sangre', statusPass: 'PASA', statusReview: 'REVISAR',
};
const faq = [
  { question: '¿Qué comprueba esta auditoría de iconos de app?', answer: 'Comprueba las dimensiones, la relación de aspecto, la resolución, el margen transparente, el margen de la máscara de iOS y la zona segura adaptativa de Android. También permite inspeccionar el nombre de la app al tamaño del launcher.' },
  { question: '¿Puedo ver iPhone y Android a la vez?', answer: 'Sí. El mismo logo y nombre aparecen simultáneamente en un contexto de pantalla de inicio de iPhone y en un launcher de Pixel para conservar toda la información alrededor.' },
  { question: '¿Qué hace el modo de icono temático de Android?', answer: 'Aplica un tinte del sistema y un tratamiento monocromo a todos los iconos Android de la escena, incluido el icono subido, las apps vecinas y el dock. Así puedes comprobar si la silueta sigue leyendo sin sus colores originales.' },
  { question: '¿El logo sale de mi navegador?', answer: 'No. La imagen se lee y se mide localmente en tu navegador. Esta herramienta no la sube a ningún servidor.' },
  { question: '¿Está listo para enviar la app a una tienda?', answer: 'No. Es una auditoría local de diseño y assets. Para la exportación final, el comportamiento del launcher y la aprobación de la tienda necesitas las herramientas de Apple y Android, además de un dispositivo real o un emulador.' },
];
const howTo = [
  { name: 'Sube el logo', text: 'Elige un logo PNG, JPG, WEBP o SVG. La misma imagen local aparece en los dos contextos de dispositivo.' },
  { name: 'Escribe el nombre de la app', text: 'Introduce la etiqueta del launcher y comprueba si sigue siendo legible junto a los nombres reales de las apps vecinas.' },
  { name: 'Inspecciona las apariencias de iOS', text: 'Alterna entre Predeterminado, Oscuro, Claro y Tintado y busca contraste débil o detalles que desaparecen.' },
  { name: 'Inspecciona las máscaras de Android', text: 'Prueba círculo, squircle, redondeado y gota. Después activa el modo temático para revisar la versión monocroma en todo el launcher.' },
  { name: 'Actúa sobre la auditoría', text: 'Añade aire alrededor, simplifica los detalles pequeños o mejora el contraste antes de preparar los assets finales de cada plataforma.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'es', slug: 'auditoria-iconos-app-ios-android', title, description, faqTitle: 'Preguntas frecuentes', bibliographyTitle: 'Referencias', ui, faq, howTo, seo: [
  { type: 'title', text: 'Audita el icono de tu app antes de publicarlo', level: 2 },
  { type: 'paragraph', html: 'Sube un logo y revísalo simultáneamente en un contexto de pantalla de inicio de iPhone y en un launcher de Pixel. Esta auditoría de iconos mide el lienzo, la relación de aspecto, la resolución, el margen transparente, el margen de la máscara de iOS y la zona segura adaptativa de Android. Escribe también el nombre real de la app, porque una marca puede pasar la comprobación del icono y fallar cuando su etiqueta del launcher deja de ser legible.' },
  { type: 'title', text: 'Qué comprueba esta auditoría de iconos', level: 3 },
  { type: 'list', items: ['Lienzo y relación de aspecto: confirma que el archivo de origen es cuadrado antes de que las herramientas de la plataforma añadan su propio tratamiento.', 'Resolución: detecta archivos pequeños antes de que se vean borrosos o resulten inutilizables en contextos de launcher más grandes.', 'Margen exterior: comprueba si las formas o letras importantes quedan demasiado cerca de la máscara de iOS o de la zona segura de Android.', 'Etiqueta del launcher: revisa el nombre de la app a la misma escala que los iconos vecinos y detecta saltos de línea incómodos.', 'Tratamiento temático de Android: aplica un tinte monocromo del sistema al icono, las apps vecinas y el dock para que el color no esconda una silueta débil.'] },
  { type: 'title', text: 'Mira los dos contextos de dispositivo a la vez', level: 3 },
  { type: 'paragraph', html: 'Usa las dos vistas de móvil como una sola superficie de auditoría. Recorre las apariencias Predeterminado, Oscuro, Claro y Tintado de iOS y prueba después las máscaras círculo, squircle, redondeado y gota de Android. El objetivo es reunir información sobre cómo se comporta el mismo asset en distintas superficies de launcher, no declarar una plataforma mejor que la otra.' },
  { type: 'title', text: 'Qué no puede garantizar esta auditoría', level: 3 },
  { type: 'paragraph', html: 'Es una revisión de diseño y assets basada en el navegador, no sustituye a Xcode, Android Studio, un dispositivo real o un emulador. Los launchers, las versiones del sistema y los fabricantes pueden aplicar máscaras, espaciados, contraste y reglas de iconos temáticos diferentes. Usa la auditoría para encontrar riesgos pronto y valida después los assets finales en los entornos que admitas.' },
  { type: 'tip', title: 'Rutina práctica de auditoría', html: 'Revisa el logo en su tamaño práctico más pequeño y en todos los tratamientos disponibles. Si solo funciona con un fondo, una máscara o sus colores originales, simplifica el diseño o añade margen antes de publicarlo.' },
] });

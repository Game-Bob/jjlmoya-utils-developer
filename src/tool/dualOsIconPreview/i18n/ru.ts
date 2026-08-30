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

const title = 'Аудит иконки приложения для iOS и Android';
const description = 'Загрузите логотип и проверьте его вид на iPhone и Pixel. Исследуйте режимы iOS, адаптивные маски Android, безопасные отступы и тематические иконки прямо в браузере.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Загрузить логотип', uploadAction: 'Выбрать изображение', uploadHint: 'Один знак отображается на обоих телефонах', dropHint: 'PNG, JPG, WEBP или SVG', labelAppName: 'Название приложения', appNamePlaceholder: 'Показывается под иконкой', labelBrandColor: 'Системный акцентный цвет', labelIosAppearance: 'Вид iOS', iosAppearanceHint: 'Проверьте знак во всех режимах домашнего экрана', iosDefault: 'По умолчанию', iosDark: 'Тёмный', iosClear: 'Светлый', iosTinted: 'Тонированный', labelAndroidShape: 'Адаптивная маска Android', androidShapeHint: 'Лаунчер может изменить внешнюю форму', androidCircle: 'Круг', androidSquircle: 'Сквиркл', androidRounded: 'Скруглённый', androidTeardrop: 'Капля', labelAndroidTheme: 'Предпросмотр тематической иконки', androidThemeHint: 'Перекрашивает все иконки одним системным оттенком и сохраняет силуэт', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Домашний экран', androidHomeLabel: 'Лаунчер', safeZoneLabel: 'Маска iOS', adaptiveLayerLabel: 'Адаптивная иконка', monochromeLabel: 'Слой темы', nameFallback: 'Ваше приложение', emptyLogo: 'Ваш логотип', fileError: 'Выберите файл изображения, чтобы продолжить.', statusReady: 'Готово', statusNeedsReview: 'Добавьте логотип', stageKicker: 'Два контекста устройства, один аудит', stageNote: 'Проверяйте каждую обработку в контексте', auditTitle: 'Аудит логотипа', auditHint: 'Измерено локально по загруженному изображению', auditWaiting: 'Загрузите логотип', auditNotChecked: 'Не проверено', auditFile: 'Холст', auditAspect: 'Соотношение сторон', auditResolution: 'Разрешение', auditIosMask: 'Отступ маски iOS', auditAndroidZone: 'Безопасная зона Android', auditMargin: 'Минимальный отступ', auditTransparency: 'Альфа край', auditTransparent: 'Прозрачный', auditFullBleed: 'Полное заполнение', statusPass: 'ПРОЙДЕНО', statusReview: 'ПРОВЕРИТЬ',
};
const faq = [
  { question: 'Что проверяет этот аудит иконки приложения?', answer: 'Он проверяет размеры изображения, соотношение сторон, разрешение, прозрачный отступ по краям, запас маски iOS и адаптивную безопасную зону Android. Также можно посмотреть название приложения в размере лаунчера.' },
  { question: 'Можно ли одновременно видеть iPhone и Android?', answer: 'Да. Один и тот же логотип и название одновременно показаны на домашнем экране iPhone и в лаунчере Pixel, поэтому контекст обоих устройств остаётся видимым.' },
  { question: 'Что делает режим тематических иконок Android?', answer: 'Он применяет один системный оттенок и монохромную обработку ко всем иконкам Android в сцене, включая загруженную иконку, соседние приложения и док. Так видно, остаётся ли силуэт читаемым без исходных цветов.' },
  { question: 'Логотип покидает мой браузер?', answer: 'Нет. Изображение читается и измеряется локально в браузере. Инструмент не отправляет его на сервер.' },
  { question: 'Можно ли сразу отправить результат в магазин приложений?', answer: 'Нет. Это локальный аудит дизайна и ассетов. Для финального экспорта, поведения лаунчера и проверки магазина используйте инструменты Apple и Android, а также реальное устройство или эмулятор.' },
];
const howTo = [
  { name: 'Загрузите логотип', text: 'Выберите логотип PNG, JPG, WEBP или SVG. Одно локальное изображение появится в обоих контекстах устройства.' },
  { name: 'Введите название приложения', text: 'Введите подпись лаунчера и проверьте, остаётся ли она читаемой рядом с настоящими подписями соседних приложений.' },
  { name: 'Проверьте виды iOS', text: 'Переключайтесь между режимами По умолчанию, Тёмный, Светлый и Тонированный, чтобы найти слабый контраст или исчезающие детали.' },
  { name: 'Проверьте маски Android', text: 'Попробуйте круг, сквиркл, скруглённую форму и каплю. Затем включите тематические иконки и оцените монохромную версию всего лаунчера.' },
  { name: 'Исправьте найденные риски', text: 'Добавьте свободное пространство, упростите мелкие детали или улучшите контраст перед подготовкой финальных ассетов.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'ru', slug: 'audit-ikonki-prilozheniya-ios-android', title, description, faqTitle: 'Часто задаваемые вопросы', bibliographyTitle: 'Источники', ui, faq, howTo, seo: [
  { type: 'title', text: 'Проверьте иконку приложения до публикации', level: 2 },
  { type: 'paragraph', html: 'Загрузите один логотип и одновременно проверьте его в контексте домашнего экрана iPhone и лаунчера Pixel. Этот аудит иконки приложения измеряет холст, соотношение сторон, разрешение, прозрачный отступ, запас маски iOS и адаптивную безопасную зону Android. Введите настоящее название приложения: знак может пройти проверку иконки, но стать непонятным, если подпись лаунчера плохо читается.' },
  { type: 'title', text: 'Что проверяет аудит иконки приложения', level: 3 },
  { type: 'list', items: ['Холст и соотношение сторон: убедитесь, что исходник квадратный, прежде чем инструменты платформы добавят собственную обработку.', 'Разрешение: найдите маленькие исходные файлы до того, как они станут размытыми в крупном лаунчере.', 'Отступ от края: проверьте, не расположены ли важные формы или буквы слишком близко к маске iOS или безопасной зоне Android.', 'Подпись лаунчера: посмотрите название приложения в том же масштабе, что и соседние иконки, и найдите неудачные переносы.', 'Тематическая обработка Android: примените монохромный системный оттенок к цели, соседним иконкам и доку, чтобы цвет не скрывал слабый силуэт.'] },
  { type: 'title', text: 'Смотрите оба контекста устройства одновременно', level: 3 },
  { type: 'paragraph', html: 'Используйте два вида телефона как одну поверхность аудита. Переключайте режимы iOS По умолчанию, Тёмный, Светлый и Тонированный, а затем пробуйте маски Android Круг, Сквиркл, Скруглённая и Капля. Цель состоит в том, чтобы понять поведение одного ассета на разных поверхностях лаунчера, а не объявить одну платформу лучше другой.' },
  { type: 'title', text: 'Чего аудит не может гарантировать', level: 3 },
  { type: 'paragraph', html: 'Это проверка дизайна и ассетов в браузере, а не замена Xcode, Android Studio, реального устройства или эмулятора. Лаунчеры, версии операционной системы и производители могут по-разному применять маски, отступы, контраст и правила тематических иконок. Используйте аудит для раннего поиска рисков, затем проверьте финальные ассеты платформы в поддерживаемых средах.' },
  { type: 'tip', title: 'Практический порядок аудита', html: 'Проверяйте логотип в самом маленьком практическом размере и во всех доступных режимах. Если он работает только с одним фоном, маской или исходными цветами, упростите графику или добавьте отступ перед публикацией.' },
] });

import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'generator-mobilnykh-maketov';
const title = 'Генератор Мобильных Макетов для App Store. iPhone и Google Pixel';
const description = 'Создавайте профессиональные презентации для App Store и Google Play. Макеты iPhone и Pixel с пользовательскими фонами, панорамными макетами и массовым экспортом высокого разрешения.';

const faqData = [
  { question: 'Эти скриншоты действительны для App Store и Google Play?', answer: 'Да, созданные изображения соответствуют требованиям пропорций и качества магазинов приложений. Просто выберите правильное устройство (iPhone для iOS, Pixel для Android) перед экспортом.' },
  { question: 'Могу ли я использовать свои собственные пользовательские фоны?', answer: 'Конечно. Помимо нашей премиум-библиотеки градиентов, вы можете загрузить любое изображение с вашего компьютера в качестве фона окружения для ваших макетов.' },
  { question: 'Это бесплатно для коммерческого использования?', answer: 'Да, вы можете использовать созданные макеты для коммерческих проектов, портфолио или презентаций без затрат и без водяных знаков.' },
  { question: 'Мои скриншоты сохраняются на каком-либо сервере?', answer: 'Нет. Генератор работает 100% локально в вашем браузере. Ваши частные изображения никогда не покидают ваш компьютер.' },
];

const howToData = [
  { name: 'Загрузите скриншоты', text: 'Перетащите или выберите скриншоты вашего мобильного приложения, которые вы хотите представить.' },
  { name: 'Выберите устройство', text: 'Выберите модель смартфона (iPhone 15 Pro Max или Google Pixel 8) в соответствии с целевым магазином.' },
  { name: 'Настройте окружение', text: 'Отрегулируйте фон, угол устройства, добавьте текст маркетинга и выберите макет композиции.' },
  { name: 'Загрузите в HD', text: 'Экспортируйте все результаты в формате WebP высокого разрешения, готовые для загрузки в магазин приложений.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ru',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Загрузить Скриншоты',
  dropHint: 'Перетащите ваши изображения сюда',
  dropFormats: 'PNG, JPG или WEBP',
  btnMassReplace: 'Массовая Замена (Пакет)',
  massReplaceHint: 'Заменяет текущие изображения, сохраняя ваши предустановки и текст. Идеально для быстрых итераций.',
  labelSettings: 'Глобальные Параметры',
  labelDevice: 'Устройство',
  labelFont: 'Типографика',
  labelBackground: 'Фон',
  titleSwapColors: 'Поменять цвета',
  labelAngle: 'Угол',
  labelSafeArea: 'Безопасная Зона (Верх/Низ)',
  labelSafeAreaColor: 'Цвет зоны',
  emptyTitle: 'Изображений еще нет',
  emptySubtitle: 'Загрузите ваши скриншоты для начала проектирования',
  btnClearAll: 'Очистить Canvas',
  btnExport: 'Экспортировать Все (.zip)',
  cardTitleDuplicate: 'Дублировать Сцену',
  cardTitleReplace: 'Заменить Текущий Скриншот',
  cardSectionLayouts: 'Главные Макеты',
  cardSectionBranding: 'Брендинг и Копия',
  cardTitleResetText: 'Сбросить Текст',
  cardLabelColor: 'Цвет',
  cardTextPlaceholder: 'Напишите текст здесь...',
  cardSectionDevice: 'Макет Устройства',
  cardTitleResetDevice: 'Сбросить Позицию',
  cardSectionScene: 'Реквизит и Фон',
  cardBtnSpecialBg: 'Специальный Фон',
  cardBtnDeleteScene: 'Удалить Сцену',
  cardRangeLabelSize: 'Размер',
  cardRangeLabelX: 'Ось X',
  cardRangeLabelY: 'Ось Y',
  cardRangeLabelRotation: 'Вращение',
  cardRangeLabelScale: 'Масштаб',
  presetClassic: 'Классический',
  presetMobileBottom: 'Мобильный Низ',
  presetMobileTop: 'Мобильный Верх',
  presetFocus: 'Фокус',
  presetDynamic: 'Динамический',
  presetSplitLeft: 'Разделение Слева',
  presetSplitRight: 'Разделение Справа',
  presetImageLeft: 'Изображение Слева',
  presetImageRight: 'Изображение Справа',
  confirmClear: 'Вы уверены, что хотите удалить все макеты?',
  processingExport: 'Обработка...',
  exportDone: 'Готово!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Справки',
  bibliography: [
    { name: 'Требования к скриншотам Apple App Store', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Требования к скриншотам Google Play', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Поднимите ваши скриншоты на следующий уровень', level: 2 },
    { type: 'paragraph', html: 'Не ограничивайте себя простыми скриншотами. Наш инструмент макета позволяет разработчикам и дизайнерам создавать высокоударные визуальные активы без необходимости Photoshop или Figma.' },
    { type: 'title', text: 'Мощь главных макетов', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store и Google Play', html: '<p>Оптимизируйте коэффициент конверсии. Макеты iPhone 15 Pro Max и Pixel 8 - мировой стандарт для листинга магазинов приложений.</p>' },
    { type: 'card', title: 'Pitch Decks и Маркетинг', html: '<p>Представьте свои идеи с авторитетом. Идеально для презентаций инвесторов, кампаний социальных сетей и профессиональных портфолио UI/UX дизайна.</p>' },
    { type: 'title', text: 'Профессиональный рабочий процесс', level: 3 },
    { type: 'tip', html: 'Используйте предустановки "Разделение слева" и "Разделение справа" для создания непрерывных макетов, которые скользят от одного изображения к другому в карусялях Instagram или скриншотах App Store.' },
  ],
};

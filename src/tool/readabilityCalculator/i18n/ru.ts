import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';
const slug = 'kalkulyator-vizualnoj-chitaemosti';
const title = 'Калькулятор Визуальной Читаемости WCAG и APCA';
const description = 'Проверьте реальный контраст ваших дизайнов с APCA (WCAG 3.0). Анализируйте, как вес и размер шрифта влияют на фактическую читаемость.';
const faqData = [
  { question: 'Что такое APCA и почему она отличается от WCAG 2.1?', answer: 'APCA - это Алгоритм Расширенного Перцептивного Контраста, разработанный для WCAG 3.0. В отличие от старой простой формулы, APCA использует математические модели, которые имитируют, как человеческий мозг воспринимает контраст.' },
  { question: 'Что означает значение Lc?', answer: 'Lc (Lightness Contrast) - это значение контраста, сгенерированное APCA. Значение 100 представляет идеальный максимальный контраст, а значения ниже 60 начинают быть критическими для непрерывного чтения текста.' },
  { question: 'Как вес шрифта влияет на читаемость?', answer: 'Тонкие/Светлые шрифты требуют гораздо более высокого контраста для читаемости. APCA штрафует шрифты низкого веса, указывая, что дизайн, прошедший WCAG с шрифтом weight-100, может быть нечитаемым на практике.' },
  { question: 'Этот калькулятор приватный?', answer: 'Да, все расчеты выполняются локально в вашем браузере. Цвета и настройки, которые вы анализируете, никогда не отправляются на какой-либо сервер, гарантируя полную конфиденциальность.' },
];
const howToData = [
  { name: 'Выберите Цвета', text: 'Используйте средства выбора цвета для установки цвета текста и цвета фона вашего дизайна.' },
  { name: 'Отрегулируйте Типографику', text: 'Переместите ползунки размера и веса шрифта, чтобы смоделировать вашу реальную типографику.' },
  { name: 'Прочитайте Результаты', text: 'Проверьте коэффициент WCAG 2.1 и значение Lc APCA, чтобы узнать, доступен ли ваш дизайн.' },
  { name: 'Просмотрите Рекомендации', text: 'Проверьте рекомендации для основного текста, мелкого текста и элементов UI.' },
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
  inLanguage: 'ru',
};
const ui: ReadabilityCalculatorUI = {
  labelColors: 'Базовые Цвета',
  labelText: 'Текст',
  labelBg: 'Фон',
  labelTypo: 'Типографика',
  labelFontSize: 'Размер Шрифта',
  labelFontWeight: 'Вес',
  labelCompare: 'Сравнение Контраста',
  labelPreview: 'Перцептивный Предпросмотр',
  labelApcaRecs: 'Рекомендации APCA',
  labelBody: 'Основной Текст',
  labelSmall: 'Мелкий Текст',
  labelUi: 'UI / Кнопки',
  statusYes: 'Да',
  statusNo: 'Нет',
  wcagAAA: 'Проходит AAA',
  wcagAA: 'Проходит AA',
  wcagLarge: 'Только Крупный Текст',
  wcagFail: 'Не Проходит',
  apcaExcellent: 'Отличное',
  apcaGood: 'Хорошее',
  apcaMinimal: 'Минимальное',
  apcaPoor: 'Плохое',
  previewText: 'Визуальная читаемость - это не только математика. Это то, как свет и тень взаимодействуют с вашими глазами.',
  wcagRatioLabel: 'Коэффициент WCAG 2.1',
  apcaLcLabel: 'APCA Lc (WCAG 3)',
};
export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Ресурсы о Контрасте и APCA',
  bibliography: [
    { name: 'W3C: WCAG 3.0 Draft (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: Справочное Руководство APCA', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Доступность и Контраст Цвета', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Калькулятор Визуальной Читаемости (WCAG vs APCA)', level: 2 },
    { type: 'paragraph', html: 'Поймите, как ваши цвета и типографика влияют на реальное чтение с новым стандартом доступности восприятия. WCAG 2.1 использует простую математическую формулу 2008 года. <strong>APCA</strong> - это новая модель, предложенная для <strong>WCAG 3.0</strong>, которая имитирует человеческое восприятие.' },
    { type: 'title', text: 'Ключевые Моменты APCA', level: 3 },
    { type: 'list', items: [ '<strong>Полярность:</strong> Понимает, что Темный режим воспринимается иначе, чем Светлый режим.', '<strong>Вес Шрифта:</strong> Назначает определенные уровни контраста (Lc) на основе веса типографики.', '<strong>Линейность:</strong> Исправляет математические неточности в модели относительной яркости 2008 года.' ] },
    { type: 'title', text: 'Рекомендуемые Уровни APCA', level: 3 },
    { type: 'list', items: [ '<strong>Lc 90+:</strong> Идеально для очень мелкого текста или низкого веса.', '<strong>Lc 75:</strong> Стандарт для основного текста для чтения.', '<strong>Lc 60:</strong> Минимум для читаемого контента среднего размера.', '<strong>Lc 45:</strong> Минимум для крупных или декоративных элементов.' ] },
  ],
};

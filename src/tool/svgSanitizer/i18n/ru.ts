import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'svg-ochishchatel';
const title = 'Онлайн SVG Очиститель';
const description = 'Оптимизируйте и очищайте SVG, экспортированные из Figma, Adobe Illustrator или Inkscape. Удаляйте метаданные, ненужные атрибуты и пустые группы, чтобы получить готовый к продакшену SVG.';

const faqData = [
  {
    question: 'Могу ли я вставить полный HTML страницы с встроенным SVG?',
    answer: 'Да. Очиститель обнаружит SVG-элемент внутри HTML и извлечёт только этот блок для обработки. Также работает, если вставить SVG-фрагмент напрямую.',
  },
  {
    question: 'Работает ли это с SVG из Illustrator?',
    answer: 'Да. Illustrator экспортирует SVG с XML-объявлениями, метаданными и собственными пространствами имён, которые очиститель удаляет. Результат — это SVG, совместимый со всеми современными браузерами.',
  },
  {
    question: 'Какая разница между очисткой и минификацией?',
    answer: 'Очистка удаляет ненужные атрибуты и теги, но сохраняет отступы, чтобы вы могли читать и редактировать код. Минификация также свёртывает всё в одну строку, чтобы максимально уменьшить размер файла.',
  },
  {
    question: 'Может ли удаление ID-элементов повредить SVG?',
    answer: 'Только если элемент в SVG ссылается на другой по ID, например через fill="url(#gradient)". В этом случае отключите опцию «Удалить ID». Она отключена по умолчанию именно чтобы избежать этой проблемы.',
  },
  {
    question: 'Передаётся ли код SVG на какой-нибудь сервер?',
    answer: 'Нет. Вся обработка происходит в вашем браузере с помощью встроенных API DOMParser и XMLSerializer. Код никогда не покидает ваше устройство.',
  },
];

const howToData = [
  { name: 'Вставьте SVG', text: 'Вставьте код SVG, экспортированный из Figma, Illustrator или Inkscape, в текстовое поле.' },
  { name: 'Настройте параметры', text: 'Включите или отключите опции: удалить ID, убрать ширину/высоту и минифицировать в зависимости от ваших нужд.' },
  { name: 'Очистите', text: 'Нажмите «Очистить SVG», чтобы обработать код и получить оптимизированный результат.' },
  { name: 'Скопируйте или скачайте', text: 'Используйте кнопки копирования или загрузки, чтобы получить чистый SVG, готовый для продакшена.' },
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
  inLanguage: 'ru',
};

const ui: SvgSanitizerUI = {
  labelInput: 'Вставьте грязный SVG здесь',
  labelOutput: 'Чистый SVG',
  optRemoveIds: 'Удалить ID',
  optRemoveWH: 'Убрать ширину/высоту',
  optMinify: 'Минифицировать',
  btnSanitize: 'Очистить SVG',
  btnCopy: 'Копировать',
  btnCopied: 'Скопировано',
  btnDownload: 'Скачать',
  statOriginal: 'Оригинал',
  statCleaned: 'Очищено',
  statReduction: 'Сокращение',
  statElems: 'Элементов удалено',
  statAttrs: 'Атрибутов удалено',
  errorPaste: 'Вставьте SVG перед очисткой.',
  errorProcess: 'Ошибка обработки SVG.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки',
  bibliography: [
    { name: 'SVG Specification — W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export — Official Documentation', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO — SVG Optimizer (open source reference)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SVG Очиститель: Чистый код из Figma и Illustrator', level: 2 },
    {
      type: 'paragraph',
      html: 'Вставьте любой SVG, экспортированный из <strong>Figma</strong>, Adobe Illustrator или инспектора браузера, и получите чистый, оптимизированный векторный файл, готовый к продакшену.',
    },
    { type: 'title', text: 'Почему экспортированные SVG такие грязные?', level: 3 },
    {
      type: 'paragraph',
      html: 'Когда вы экспортируете SVG из Figma, вы получаете файл, перегруженный атрибутами, которые имеют смысл только внутри приложения: <code>data-name</code>, <code>xml:space</code>, ссылки на внутренние слои и метаданные дизайна. Результат — это SVG, весящий на 40-70% больше необходимого.',
    },
    { type: 'title', text: 'Что удаляет очиститель', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Метаданные редактора:</strong> теги <code>metadata</code>, <code>title</code> и <code>desc</code>, которые Figma и Illustrator добавляют автоматически.',
        '<strong>Пространства имён Inkscape:</strong> все элементы с префиксом <code>inkscape:</code> и <code>sodipodi:</code>.',
        '<strong>Ненужные атрибуты:</strong> <code>xml:space</code>, <code>version</code>, лишние <code>xmlns:*</code> и Figma <code>data-*</code> атрибуты.',
        '<strong>Пустые группы:</strong> элементы <code>&lt;g&gt;</code> без содержимого, оставшиеся от удалённых слоёв.',
        '<strong>XML объявления:</strong> объявление <code>&lt;?xml version="1.0"?&gt;</code> и DOCTYPE, ненужные при встраивании SVG в HTML.',
      ],
    },
  ],
};


import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'prodvigat-etot-sayt',
    title: 'Продвигать этот сайт',
    description: 'Внутренний отдел пропаганды jjlmoya.es на испанском и GameBob.dev для международной аудитории. Превращайте снимки собственных страниц в изображения для соцсетей, пока Боб не решил, что лента выглядит неловко.',
    faqTitle: 'Продвигайте сайт, не сердя кошку',
    bibliographyTitle: 'Страницы операции',
    faq: [
      { question: 'Для кого предназначен этот инструмент?', answer: 'Для продвижения страниц jjlmoya.es на испанском и GameBob.dev для международной аудитории. Остальные могут смотреть из окна.' },
      { question: 'Можно ли вставить снимок экрана?', answer: 'Да. Скопируйте снимок и нажмите Ctrl+V. Он станет слоем инструмента: кошачий совет принимает доказательства в правильном формате.' },
      { question: 'Что происходит с рабочим URL?', answer: 'Инструмент читает метатег заголовка, выбирает бренд и загружает изображение Open Graph. У slug больше нет шансов на повышение.' },
      { question: 'Зачем нужны два бренда?', answer: 'jjlmoya.es - испанская страница, а GameBob.dev - международная. Кошки полностью игнорируют это различие.' },
      { question: 'Мои изображения загружаются?', answer: 'Нет. Они остаются в браузере, а композиция создаётся локально. Страницу покидает только скачанный вами PNG.' },
    ],
    howTo: [
      { name: 'Вставьте снимок', text: 'Вставьте Ctrl+V снимок страницы jjlmoya.es или GameBob.dev. Совет требует доказательств из собственной империи.' },
      { name: 'Выберите бренд', text: 'Выберите jjlmoya.es для испанского или GameBob.dev для международной страницы. Кошка уже владеет помещением.' },
      { name: 'Соберите изображение', text: 'Перетащите снимок, заголовок, логотип, фон и маскот, чтобы композиция выглядела намеренной.' },
      { name: 'Экспортируйте PNG', text: 'Скачайте PNG нужного размера, пока Боб не присвоил себе заслугу.' },
    ],
    seoTitle: 'Официальный отдел пропаганды jjlmoya и GameBob',
    seoIntro: 'Это не универсальный редактор социальных изображений для человека, который только узнал слово branding. Он нужен для продвижения наших страниц jjlmoya.es и GameBob.dev под наблюдением кошек.',
    seoBody: 'Вставьте настоящий снимок или загрузите рабочий URL. Инструмент читает заголовок страницы, а не угадывает его по slug, и оставляет официальное изображение Open Graph видимым.',
    seoTip: 'Начните с рабочего URL jjlmoya.es или GameBob.dev. Если заголовок, бренд или изображение не загрузились, совет обвинит сеть, человека и наконец кошек.',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'URL сайта', urlPlaceholder: 'https://www.example.com/tools/example/', applyUrl: 'Применить',
    formatLabel: 'Формат', panoramic: 'Панорама · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Квадрат · 1080 × 1080', story: 'История · 1080 × 1920',
    titleLabel: 'Заголовок', titlePlaceholder: 'Короткий заголовок для изображения', titleSizeLabel: 'Размер шрифта заголовка', titleBoxSizeLabel: 'Размер блока заголовка', titleStyleLabel: 'Стиль заголовка',
    brandLabel: 'Бренд', brandStyleLabel: 'Стиль бренда', advancedLabel: 'Расширенная композиция', assetsLabel: 'Материалы', backgroundLabel: 'Фон', toolLabel: 'Снимок инструмента', logoLabel: 'Логотип', mascotLabel: 'Маскот',
    layersLabel: 'Слои', backgroundLayer: 'Фон', toolLayer: 'Инструмент', logoLayer: 'Логотип', mascotLayer: 'Маскот', titleLayer: 'Заголовок', reset: 'Сбросить', download: 'Скачать PNG', activeLayer: 'Активный слой',
    canvasHint: 'Перетаскивайте слои прямо по холсту. Вставьте снимок клавишами Ctrl+V.', pasted: 'Снимок вставлен как слой инструмента.', urlApplied: 'URL применён. Настройте заголовок и добавьте нужный снимок.', urlLoading: 'Читаем заголовок страницы и официальное изображение...', urlFailed: 'Не удалось прочитать страницу. Проверьте URL или добавьте материалы вручную.', fileLoaded: 'Материал загружен.',
    titlePaper: 'Редакционная бумага', titleRibbon: 'Сложенная лента', titleInk: 'Брызги чернил', titlePoster: 'Ночной плакат', titleTicket: 'Оторванный билет', titleMarker: 'Материальное подчёркивание', titleSplit: 'Разделённый блок', titleCapsule: 'Минимальная капсула', titleCorner: 'Редакционный угол', titleVertical: 'Вертикальный акцент',
    brandPlain: 'Простой знак', brandPlaque: 'Керамическая табличка', brandTicket: 'Входной билет', brandStamp: 'Резиновый штамп', brandNeon: 'Неоновая вывеска', brandRibbon: 'Сигнальная лента', brandCorner: 'Редакционный угол', brandPixel: 'Пиксельный блок', brandHalo: 'Мягкое свечение', brandEditorial: 'Редакционная линия', defaultTool: 'Вставьте снимок инструмента',
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
  inLanguage: 'ru',
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

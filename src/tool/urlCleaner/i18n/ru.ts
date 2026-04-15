import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';
const slug = 'ochishchatel-url-otsledzivaniya';
const title = 'Очиститель URL Отслеживания: Удалить UTM, FBCLID и GCLID';
const description = 'Автоматически удаляйте параметры отслеживания и рекламы из своих URL-адресов. Делитесь чистыми ссылками и защищайте свою цифровую приватность мгновенно.';
const faqData = [
  { question: 'Какие типы параметров отслеживания удаляет эта инструмент?', answer: 'Наша инструмент автоматически обнаруживает и удаляет наиболее распространенные параметры отслеживания, включая UTM (utm_source, utm_medium и т.д.), идентификаторы клика рекламы (fbclid, gclid, msclkid) и идентификаторы кампаний email маркетинга (mc_cid, _hsenc).' },
  { question: 'Влияет ли это на функциональность веб-сайта?', answer: 'Обычно нет. Эти параметры используются почти исключительно для аналитики и маркетинга. Когда вы их удаляете, страница загружается нормально, но владелец веб-сайта не сможет отследить точный источник вашего клика.' },
  { question: 'Безопасно ли обрабатывать мои ссылки здесь?', answer: 'Абсолютно. Как и все наши инструменты, процесс 100% на стороне клиента. Ваши ссылки никогда не отправляются на наши серверы; все происходит приватно в вашем собственном браузере.' },
  { question: 'Почему мои ссылки Facebook такие длинные?', answer: 'Facebook добавляет параметр "fbclid" ко всем ссылкам, которые покидают их платформу. Это позволяет им отслеживать вашу активность на других веб-сайтах, даже если у вас заблокирована сторонняя реклама.' },
];
const howToData = [
  { name: 'Вставьте URL', text: 'Введите полный URL-адрес, содержащий параметры отслеживания' },
  { name: 'Нажмите Очистить', text: 'Инструмент автоматически проанализирует URL-адрес' },
  { name: 'Просмотрите результаты', text: 'Вы увидите очищенный URL-адрес и список удаленных параметров' },
  { name: 'Копируйте и делитесь', text: 'Используйте чистый URL-адрес в своих письмах, социальных сетях или сообщениях' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ru' };
const ui: UrlCleanerUI = { labelInput: 'Вставьте URL с параметрами отслеживания', btnClean: 'Очистить', labelCleaned: 'Очищенный URL', labelRemoved: 'Удаленные Трекеры', countLabel: 'Удалено параметров', reductionLabel: 'Сокращение длины', noneDetected: 'Не обнаружены распространенные параметры отслеживания.', errorInvalid: 'Пожалуйста, введите действительный URL.', btnCopy: 'Копировать', btnCopied: 'Скопировано' };
export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug, title, description, ui,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Ресурсы по Приватности и Веб-Отслеживанию',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Руководство по Онлайн-отслеживанию', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: Документация по Параметру UTM', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Web Privacy: Влияние Click ID', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Очиститель URL Отслеживания: Удалить UTM, FBCLID и GCLID', level: 2 },
    { type: 'paragraph', html: 'Удаляйте невидимые трекеры из своих ссылок, чтобы делиться ими чистым, приватным и профессиональным образом. Узнайте, что означают эти странные коды в ваших URL-адресах.' },
    { type: 'title', text: 'Что такое Очиститель URL Отслеживания и почему вам нужен?', level: 3 },
    { type: 'paragraph', html: 'Когда-нибудь скопировали ссылку, чтобы отправить другу, и заметили, что она в три раза длиннее, чем должна быть? Этот лишний "шум" - это параметры отслеживания. <strong>Очиститель отслеживания</strong> - это инструмент, предназначенный для "удаления" URL-адреса со всей информации об объявлениях и отслеживании, которую крупные платформы внедряют в каждый ваш клик.' },
    { type: 'title', text: 'Наиболее распространенные параметры отслеживания', level: 3 },
    { type: 'list', items: [ '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign для отслеживания кампаний', '<strong>FBCLID:</strong> Идентификатор клика Facebook для обхода ограничений печенья', '<strong>GCLID / DCLID:</strong> Google Click ID для связи посещений с кампаниями Google Ads', '<strong>MSCLKID:</strong> Идентификатор клика Microsoft Advertising и Bing', '<strong>HubSpot & Mailchimp:</strong> Параметры автоматизации маркетинга, такие как _hsenc, mc_cid', '<strong>LinkedIn & Others:</strong> li_fat_id и другие трекеры социальных сетей' ] },
  ],
};

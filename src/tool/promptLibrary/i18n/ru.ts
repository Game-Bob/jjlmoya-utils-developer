import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'chastnaya-biblioteka-promptov';
const title = 'Частная Библиотека AI Промптов';
const description = 'Организуйте, пометьте и сохраняйте свои промпты ChatGPT, Midjourney и Claude в частном порядке. Ваш собственный банк промптов в localStorage.';

const faqData = [
  { question: 'Где сохраняются мои промпты?', answer: 'Ваши промпты сохраняются исключительно в localStorage вашего браузера. Мы не используем внешние серверы, поэтому ваши данные 100% приватны.' },
  { question: 'Что произойдет, если я очищу куки или историю браузера?', answer: 'Если вы очистите данные сайта или localStorage, вы потеряете сохраненные промпты. Мы рекомендуем делать резервные копии, если вы часто очищаете свой браузер.' },
  { question: 'Могу ли я использовать это для Midjourney, ChatGPT или DALL-E?', answer: 'Да, он совместим с любым типом инструкции ИИ. Вы можете создать специфические теги для организации команд и легко копировать их в свой предпочитаемый инструмент ИИ.' },
];

const howToData = [
  { name: 'Создайте промпт', text: 'Нажмите кнопку "Новый промпт" и введите заголовок и инструкцию.' },
  { name: 'Добавьте теги', text: 'Введите теги, разделенные пробелом или запятой, для классификации ваших промптов.' },
  { name: 'Используйте переменные', text: 'Используйте скобки [ВОТ ТАК] в тексте для создания заполняемых полей на карточке.' },
  { name: 'Копируйте и делитесь', text: 'Скопируйте в буфер обмена одним щелчком или поделитесь прямой ссылкой с помощью кнопки поделиться.' },
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

const ui: PromptLibraryUI = {
  placeholderSearch: 'Поиск по ключевому слову или тегу...',
  btnNew: 'Новый Промпт',
  emptyTitle: 'Ваша библиотека пуста',
  emptyDesc: 'Создайте свой первый промпт и начните строить свой приватный репозиторий ИИ.',
  btnAddFirst: 'Добавьте первый',
  modalTitleCreate: 'Создать Новый Промпт',
  modalTitleEdit: 'Редактировать Промпт',
  labelTitle: 'Идентификационный заголовок',
  placeholderTitle: 'Напр.: Эксперт по маркетингу SEO',
  labelContent: 'Инструкция (Промпт)',
  placeholderContent: 'Напишите подробные инструкции для ИИ здесь...',
  hintContent: 'Совет: используйте скобки [ВОТ ТАКИЕ] для заполнения переменных позже.',
  labelTags: 'Теги',
  placeholderTags: 'Напр.: маркетинг, seo (пробел или запятая для добавления)',
  btnCancel: 'Отменить',
  btnSave: 'Сохранить Локально',
  ariaLabelStar: 'Отметить промпт',
  ariaLabelEdit: 'Редактировать промпт',
  ariaLabelShare: 'Поделиться промптом',
  ariaLabelCopy: 'Копировать промпт',
  ariaLabelDelete: 'Удалить промпт',
  varsTitle: 'Требуемые переменные',
  noResults: 'Промпты не найдены для этого поиска.',
  confirmTitle: 'Удалить промпт?',
  confirmDesc: 'Это действие не может быть отменено.',
  btnCancelDelete: 'Отменить',
  btnConfirmDelete: 'Удалить окончательно',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Справки по Инженерии Промптов',
  bibliography: [
    { name: 'Путеводитель по Инженерии Промптов (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'Что такое инженерия промптов (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Почему вам нужна Библиотека Промптов?', level: 2 },
    { type: 'paragraph', html: 'Если вы регулярно работаете с инструментами ИИ, такими как ChatGPT, Claude или Midjourney, вы, вероятно, обнаружили, что повторяете одни и те же инструкции. <strong>Библиотека промптов</strong> - это окончательное решение, чтобы перестать терять время на переписывание своих любимых команд.' },
    { type: 'title', text: 'Преимущества организации ваших промптов', level: 3 },
    { type: 'list', items: [ '<strong>Мгновенный поиск:</strong> Найдите эту конкретную инструкцию, которую вы использовали месяцы назад, с помощью простого поиска по тексту.', '<strong>Классификация по тегам:</strong> Помечайте свои промпты как "маркетинг", "программирование" или "копирайтинг" для быстрой фильтрации.', '<strong>Копирование одним щелчком:</strong> Скопируйте весь текст в буфер обмена одним щелчком.', '<strong>Полная приватность:</strong> Все ваши данные хранятся локально в вашем браузере через localStorage.' ] },
    { type: 'title', text: 'Переменные в ваших промптах', level: 3 },
    { type: 'paragraph', html: 'Используйте обозначение <strong>[ПЕРЕМЕННАЯ]</strong> в ваших промптах для создания динамически заполняемых полей. Когда вы открываете карточку, появляются входы для каждой определенной переменной. Промпт копируется с заполненными значениями, готовый вставить в вашу ИИ.' },
    { type: 'title', text: 'Обмен промптами', level: 3 },
    { type: 'paragraph', html: 'Каждый промпт можно поделить через URL. Кнопка поделиться генерирует ссылку, которая при открытии показывает форму создания, предварительно заполненную содержимым промпта.' },
  ],
};

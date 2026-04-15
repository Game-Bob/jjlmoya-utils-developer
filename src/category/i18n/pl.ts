import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'programowanie-webowe',
  title: 'Programowanie Webowe',
  description:
    'Darmowe narzędzia dla programistów: formatery, kalkulatory CSS, generatory i użyteczne narzędzia dla deweloperów frontend i backend.',
  seo: [
    {
      type: 'summary',
      title: 'Narzędzia Programistyczne',
      items: [
        'Formatery i walidatory kodu',
        'Kalkulatory CSS i narzędzia wizualne',
        'Generatory konfiguracji i bezpieczeństwa',
        'Przetwarzanie 100% lokalne i prywatne',
      ],
    },
    {
      type: 'title',
      text: 'Niezbędne Narzędzia do Programowania Webowego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zestaw narzędzi zaprojektowanych w celu przyspieszenia pracy programistów webowych. Od walidacji JSON po kalkulatory specyficzności CSS, każde narzędzie zostało stworzone, aby rozwiązywać realne problemy w codziennej pracy programisty.',
    },
    {
      type: 'tip',
      title: 'Gwarancja prywatności',
      html: 'Wszystkie narzędzia przetwarzają dane lokalnie w Twojej przeglądarce. Żaden kod, dane ani pliki nie są wysyłane na zewnętrzne serwery.',
    },
  ],
};

import type { DeveloperToolEntry, ToolLocaleContent } from '../../types';
import type { PromoteThisWebsiteUI } from './ui';

export type PromoteThisWebsiteLocaleContent = ToolLocaleContent<PromoteThisWebsiteUI>;

export const promoteThisWebsite: DeveloperToolEntry<PromoteThisWebsiteUI> = {
  id: 'promote-this-website',
  icons: {
    bg: 'mdi:bullhorn-outline',
    fg: 'mdi:image-multiple-outline',
  },
  i18n: {
    en: async () => (await import('./i18n/en')).content,
    es: async () => (await import('./i18n/es')).content,
  },
};

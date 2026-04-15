import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'sviluppo-web',
  title: 'Sviluppo Web',
  description:
    'Strumenti gratuiti per lo sviluppo web: formattatori, calcolatori CSS, generatori e utilità per sviluppatori frontend e backend.',
  seo: [
    {
      type: 'summary',
      title: 'Strumenti per Sviluppatori',
      items: [
        'Formattatori e validatori di codice',
        'Calcolatori CSS e strumenti visuali',
        'Generatori di configurazione e sicurezza',
        'Elaborazione 100% locale e privata',
      ],
    },
    {
      type: 'title',
      text: 'Utility Essenziali per lo Sviluppo Web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una collezione di strumenti progettati per accelerare il flusso di lavoro degli sviluppatori web. Dalla validazione JSON ai calcolatori di specificità CSS, ogni utility è pensata per risolvere problemi reali nello sviluppo quotidiano.',
    },
    {
      type: 'tip',
      title: 'Privacy garantita',
      html: 'Tutti gli strumenti elaborano i dati localmente nel tuo browser. Nessun codice, dato o file viene inviato a server esterni.',
    },
  ],
};

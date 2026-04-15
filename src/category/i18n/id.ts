import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'pengembangan-web',
  title: 'Pengembangan Web',
  description:
    'Alat pengembangan web gratis: pemformat, kalkulator CSS, generator, dan utilitas untuk pengembang frontend dan backend.',
  seo: [
    {
      type: 'summary',
      title: 'Alat Pengembang',
      items: [
        'Pemformat dan validator kode',
        'Kalkulator CSS dan alat visual',
        'Generator konfigurasi dan keamanan',
        'Pemrosesan 100% lokal dan pribadi',
      ],
    },
    {
      type: 'title',
      text: 'Utilitas Esensial untuk Pengembangan Web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Koleksi alat yang dirancang untuk mempercepat alur kerja pengembang web. Dari validasi JSON hingga kalkulator spesifisitas CSS, setiap utilitas dibuat untuk menyelesaikan masalah pengembangan sehari-hari.',
    },
    {
      type: 'tip',
      title: 'Privasi terjamin',
      html: 'Semua alat memproses data secara lokal di browser Anda. Tidak ada kode, data, atau file yang dikirim ke server eksternal mana pun.',
    },
  ],
};

import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'web-gelistirme',
  title: 'Web Geliştirme',
  description:
    'Ücretsiz web geliştirme araçları: frontend ve backend geliştiricileri için formatlayıcılar, CSS hesaplayıcılar, jeneratörler ve yardımcı programlar.',
  seo: [
    {
      type: 'summary',
      title: 'Geliştirici Araçları',
      items: [
        'Kod formatlayıcılar ve doğrulayıcılar',
        'CSS hesaplayıcılar ve görsel araçlar',
        'Yapılandırma ve güvenlik jeneratörleri',
        '%100 yerel ve gizli işleme',
      ],
    },
    {
      type: 'title',
      text: 'Web Geliştirme İçin Temel Yardımcı Programlar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Web geliştiricilerinin iş akışlarını hızlandırmak için tasarlanmış bir araç koleksiyonu. JSON doğrulamasından CSS özgüllük hesaplayıcılarına kadar her yardımcı program, günlük geliştirmedeki gerçek sorunları çözmek için hazırlanmıştır.',
    },
    {
      type: 'tip',
      title: 'Gizlilik garantili',
      html: 'Tüm araçlar verileri tarayıcınızda yerel olarak işler. Hiçbir kod, veri veya dosya herhangi bir harici sunucuya gönderilmez.',
    },
  ],
};

import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'security-txt-generator-rfc-9116';
const title = 'Security.txt Generator RFC 9116';
const description = 'Create your professional security.txt file to facilitate vulnerability reporting and comply with international web security standards.';

const faqData = [
  {
    question: 'What is the security.txt file?',
    answer: 'It is a standard (RFC 9116) that allows websites to define how security researchers should contact them to responsibly report vulnerabilities.',
  },
  {
    question: 'Where should the security.txt file be placed?',
    answer: 'The recommended standard location is in the /.well-known/ folder of your domain, resulting in the URL https://example.com/.well-known/security.txt.',
  },
  {
    question: 'Why is the expiration date mandatory?',
    answer: 'To ensure that contact information does not become outdated. If the file does not have a valid expiration date, researchers may not trust that communication channels remain active.',
  },
  {
    question: 'What fields are required in a security.txt?',
    answer: 'According to RFC 9116, the required fields are "Contact" (with an email address or URL) and "Expires" (with a future date in ISO 8601 format).',
  },
];

const howToData = [
  { name: 'Fill in the fields', text: 'Complete your email address or contact URL and select an expiration date.' },
  { name: 'Add optional fields', text: 'Include additional information such as your PGP key, security policy or job board.' },
  { name: 'Download or copy the file', text: 'Click on "Download .txt" or copy the content and save it as security.txt.' },
  { name: 'Upload to server', text: 'Place the file in the /.well-known/ folder of your domain.' },
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
  inLanguage: 'en',
};

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Required Fields',
  labelContact: 'Contact (Email or URL)',
  placeholderContact: 'mailto:security@example.com or https://example.com/contact',
  contactTip: 'Address where vulnerability reports should be sent.',
  labelExpires: 'Expiration Date',
  expiresTip: 'Should not exceed one year in the future.',
  titleOptionalFields: 'Optional Fields',
  labelEncryption: 'Public Key',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Link to your PGP key for encrypted reports.',
  labelPolicy: 'Security Policy',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: 'Page detailing how to handle vulnerabilities.',
  labelAcknowledgments: 'Acknowledgments',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: 'Page thanking security researchers.',
  labelHiring: 'Job Board',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'Link to security job openings.',
  resultTitle: 'Preview (security.txt)',
  btnCopy: 'Copy Code',
  btnDownload: 'Download .txt',
  copiedMessage: 'Copied',
  generatingMessage: 'Generating security.txt file...',
  comment: 'Generated',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical Resources on Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'What is a Security.txt file and why do you need to generate one?', level: 2 },
    {
      type: 'paragraph',
      html: 'In today\'s cybersecurity landscape, transparency and communication are essential. If you\'re a system administrator, web developer, or digital business owner, you\'re probably already familiar with text files that help machines understand your website, like <code>robots.txt</code> or <code>ads.txt</code>. However, there is a lesser-known but vital standard for your platform\'s integrity: <strong>Security.txt</strong>, defined by <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'The purpose of <strong>generating a security.txt file</strong> is to provide security researchers with a standardized way to contact your website\'s administrators when they discover a vulnerability. Without this file, an ethical hacker who finds a flaw in your system might not know who to report it to, which often results in the information being lost, published without notice, or exploited by malicious actors.',
    },
    { type: 'title', text: 'How to create and install the Security.txt file following RFC 9116', level: 2 },
    {
      type: 'paragraph',
      html: 'The <strong>security researcher contact standard</strong> dictates that this file must reside in a specific location on your server: the <code>/.well-known/</code> folder. Therefore, the final path is usually <code>https://yourdomain.com/.well-known/security.txt</code>. Although it is also allowed to place it in the root (<code>/security.txt</code>), the first option is preferred by automatic scanning tools.',
    },
    { type: 'title', text: 'Required fields you cannot miss', level: 3 },
    {
      type: 'paragraph',
      html: 'When <strong>obtaining your security.txt code</strong>, you must ensure it includes at least two critical elements:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> The email address or URL of a form where reports should be sent. Must start with <code>mailto:</code> or <code>https://</code>.',
        '<strong>Expires:</strong> A date in ISO 8601 format that indicates when the file\'s information is no longer valid. It is recommended not to set a date more than one year away.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Optional fields for advanced security', level: 3 },
    {
      type: 'paragraph',
      html: 'For sites seeking more robust <strong>website protection</strong>, the standard offers additional fields:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> A link to your PGP public key so researchers can send you encrypted and secure information.',
        '<strong>Policy:</strong> A link to your security policy page where you explain the responsible disclosure process.',
        '<strong>Acknowledgments:</strong> A link to your "Hall of Fame" or appreciation wall for researchers.',
        '<strong>Hiring:</strong> A link to your cybersecurity job openings.',
      ],
    },
    { type: 'title', text: 'Benefits of using our free Security.txt generator', level: 2 },
    {
      type: 'paragraph',
      html: 'Many people wonder <strong>how to get a website\'s security contact</strong> quickly. By using our tool, you ensure strict compliance with RFC 9116 format without having to read complex technical documents.',
    },
    {
      type: 'paragraph',
      html: 'Using a generator saves you common syntax errors. For example, forgetting the <code>mailto:</code> prefix or incorrectly formatting the timezone in the expiration date can cause researchers\' automated tools to ignore your file.',
    },
    { type: 'title', text: 'Impact on SEO and web reputation', level: 3 },
    {
      type: 'paragraph',
      html: 'Although the <code>security.txt</code> file is not a direct ranking factor in Google like page speed or HTTPS, it does have an indirect impact. A website that manages vulnerabilities well avoids noisy hacks (defacement, spam injections) that ruin SEO in hours. Additionally, many corporate security rating platforms (such as SecurityScorecard or BitSight) award extra points to domains that implement this standard.',
    },
    { type: 'title', text: 'Conclusion: A simple step for a more secure web', level: 2 },
    {
      type: 'paragraph',
      html: 'In summary, <strong>downloading security.txt</strong> and uploading it to your server is one of the fastest and most effective security maintenance tasks you can perform today. You make it easy for the "good guys", discourage the curious, and show the world that you take user privacy and data seriously.',
    },
    {
      type: 'paragraph',
      html: 'Don\'t wait for a security breach to regret not providing a communication channel. Use our <strong>online security.txt generator</strong> now and keep your digital ecosystem under control.',
    },
  ],
};

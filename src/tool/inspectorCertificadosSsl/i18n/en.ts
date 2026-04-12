import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'ssl-tls-certificate-inspector';
const title = 'Online SSL/TLS Certificate Inspector View PEM and CRT Files';
const description = 'Analyze SSL certificate files (.pem, .crt, .der) locally. Check expiration dates, issuers, subjects and SHA-256 fingerprints without your data leaving your browser.';

const faqData = [
  {
    question: 'Is it safe to analyze my SSL certificate on this website?',
    answer: 'Absolutely. This utility runs 100% client-side. When you drag your .pem or .crt file, the browser reads the data locally and never sends it to any server. Complete privacy.',
  },
  {
    question: 'What certificate formats are supported?',
    answer: 'The tool supports the most common formats: PEM (Base64 encoded with "BEGIN CERTIFICATE" headers) and DER (binary format), which typically have .pem, .crt, .cer or .der extensions.',
  },
  {
    question: 'Can I see the expiration date of a .crt file?',
    answer: 'Yes, when you load the file you\'ll immediately see the "Validity Status" section which shows the exact expiration date and whether the certificate is still valid today.',
  },
  {
    question: 'What does the certificate issuer do?',
    answer: 'The issuer (Issuer) indicates which Certificate Authority (CA) validated the site\'s identity. It\'s essential to know if the certificate will be recognized by commercial browsers.',
  },
  {
    question: 'How are SHA-256 fingerprints calculated?',
    answer: 'They are calculated by applying a hash algorithm directly to the certificate\'s binary content. They serve to verify that the file has not been tampered with and matches what the server expects.',
  },
];

const howToData = [
  { name: 'Find your file', text: 'Locate the file with extension .pem, .crt, .cer or .der on your computer.' },
  { name: 'Drag and drop', text: 'Simply drag the file over the dotted area above.' },
  { name: 'View results', text: 'Instantly you\'ll see who issued the certificate, who it\'s for, when it expires, and its fingerprints.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Analyze Certificate',
  dragDropText: 'Drag your .pem, .crt or .cer file here',
  dragDropSubtext: '(100% local processing in your browser)',
  cardStatusTitle: 'Validity Status',
  cardSubjectTitle: 'Subject (Owner)',
  cardIssuerTitle: 'Issuer (CA)',
  cardFingerprintsTitle: 'Fingerprints',
  cardTechnicalTitle: 'Technical Details',
  labelValidityStatus: 'Status:',
  labelExpiryDate: 'Expires on',
  labelIssueDate: 'Issued on',
  labelSha256: 'SHA-256 Fingerprint',
  labelSha1: 'SHA-1 Fingerprint',
  labelSignatureAlgorithm: 'Signature Algorithm',
  labelVersion: 'X.509 Version',
  labelSerialNumber: 'Serial Number',
  labelCommonName: 'Common Name',
  labelOrganization: 'Organization',
  labelOrgUnit: 'Org. Unit',
  labelLocality: 'Locality',
  labelState: 'State/Province',
  labelCountry: 'Country',
  labelEmail: 'Email',
  statusValid: 'Valid',
  statusExpired: 'Expired',
  errorMessageInvalid: 'Invalid file.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical Resources on SSL/TLS Certificates',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'What is an SSL/TLS Certificate Inspector and why do you need one?', level: 2 },
    {
      type: 'paragraph',
      html: 'In the world of web development and cybersecurity, <strong>SSL (Secure Sockets Layer) and TLS (Transport Layer Security) certificates</strong> are the cornerstone of trust. A digital certificate is nothing more than a file that links a cryptographic key to an organization or domain\'s data. However, these files often come in binary formats (.der) or Base64 encoded (.pem, .crt) that are not readable at first glance.',
    },
    {
      type: 'paragraph',
      html: 'Our <strong>SSL/TLS Certificate Inspector</strong> allows you to "open" these files visually and safely. Unlike tools that query a public domain (like the famous SSL Labs test), this utility works directly with the file you have on your device. This is vital when you\'re configuring Nginx, Apache servers or loading certificates into an AWS or Google Cloud Load Balancer, and you need to verify that the file in your hand is correct before uploading it.',
    },
    { type: 'title', text: 'How to inspect a .pem or .crt file step by step', level: 2 },
    {
      type: 'paragraph',
      html: 'Analyzing a certificate with our tool is extremely simple and doesn\'t require console (OpenSSL) knowledge. Follow these steps:',
    },
    {
      type: 'list',
      items: [
        '<strong>Find your file:</strong> Locate the file with .pem, .crt, .cer or .der extension on your computer.',
        '<strong>Drag and drop:</strong> Simply drag the file over the dotted area above.',
        '<strong>View results:</strong> Instantly you\'ll see who issued the certificate, who it\'s for, when it expires, and its fingerprints.',
      ],
    },
    {
      type: 'tip',
      title: 'Complete Privacy',
      html: 'The most important part of this process is <strong>privacy</strong>. The file is never uploaded to our servers. All parsing of the certificate\'s ASN.1 structure happens within your own browser\'s RAM. Complete security for your public keys.',
    },
    { type: 'title', text: 'Key fields you\'ll see when analyzing your certificate', level: 2 },
    {
      type: 'paragraph',
      html: 'When analyzing your certificate, we break down the most relevant technical information so you can verify it at a glance:',
    },
    {
      type: 'list',
      items: [
        '<strong>Subject:</strong> Shows the owner\'s data, including the Common Name (CN), organization and location.',
        '<strong>Issuer:</strong> Identifies the Certificate Authority (CA) that signed the certificate (e.g., Let\'s Encrypt, DigiCert).',
        '<strong>Validity Period:</strong> Shows the exact issue date and critical expiration date.',
        '<strong>Fingerprints:</strong> SHA-256 and SHA-1 fingerprints serve to verify the file\'s integrity.',
      ],
    },
    { type: 'title', text: 'Supported formats: PEM, CRT, CER and DER', level: 2 },
    {
      type: 'paragraph',
      html: 'There are several certificate file formats and sometimes it\'s confusing. Our tool is compatible with the most common ones:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> The most common format in Linux and web servers. Starts with the line <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> The binary format. Heavily used in Windows environments (Java, Active Directory) and is usually harder to read without specialized tools.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Even if your file has an unusual extension, if the internal structure is a standard X.509 certificate, our <strong>node-forge</strong> powered engine will be able to interpret it without problems.',
    },
    { type: 'title', text: 'Why use this tool instead of OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL is the Swiss Army knife of cryptography, but its commands are hard to remember. To view a certificate from the console you would have to write:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Our tool offers clear advantages for daily workflow:',
    },
    {
      type: 'list',
      items: [
        '<strong>Speed:</strong> No need to open the terminal or remember complex flags.',
        '<strong>Visual:</strong> We format field names (Locality, Organization) to be readable and not short codes like "L" or "O".',
        '<strong>Validity alerts:</strong> We automatically calculate whether the certificate is valid today, saving you from manually checking the current date against the certificate date.',
        '<strong>Cross-platform:</strong> Works on any operating system with a modern browser, no dependencies to install.',
      ],
    },
    { type: 'title', text: 'Security and Privacy: Your certificate never leaves your RAM', level: 2 },
    {
      type: 'paragraph',
      html: 'As a developer, I know how critical it is to handle this type of information. Although a certificate is technically <strong>public information</strong> (sent to any browser that visits your website), it\'s still good practice not to upload files to external servers unnecessarily.',
    },
    {
      type: 'paragraph',
      html: 'This utility uses JavaScript that runs strictly on the client. When you drag the file, we read its contents and process it locally. You can verify this by disconnecting your internet: the tool will continue to work exactly the same.',
    },
    { type: 'title', text: 'Common use cases for the SSL Inspector', level: 2 },
    {
      type: 'paragraph',
      html: 'When would bookmarking this page be helpful?',
    },
    {
      type: 'list',
      items: [
        '<strong>Server debugging:</strong> When you install a certificate and the website keeps giving errors, to verify that you haven\'t accidentally loaded the old certificate.',
        '<strong>Chain verification:</strong> To see if a file contains the end certificate or an intermediate certificate.',
        '<strong>Asset audit:</strong> To check which Certificate Authority was used in an old project.',
        '<strong>Copy integrity:</strong> When moving certificates between servers, to ensure the file isn\'t corrupted by comparing its SHA-256 fingerprint.',
      ],
    },
  ],
};

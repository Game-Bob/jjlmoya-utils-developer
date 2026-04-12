import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'excel-csv-html-table-converter';
const title = 'Excel and CSV to HTML Table Converter Code Generator';
const description = 'Convert your Excel or CSV data to clean, semantic HTML tables instantly. Free tool for developers and content creators.';

const faqData = [
  {
    question: 'How do I convert an Excel file (.xlsx) to HTML?',
    answer: 'First, open your file in Excel and save it as CSV (comma-delimited). Then, upload that CSV file to our tool or paste its content to get the HTML table code.',
  },
  {
    question: 'Does the generated code include CSS styles?',
    answer: 'The generator produces clean HTML with optional classes for borders and zebra stripes. Final visual styles depend on your website\'s own CSS, ensuring perfect integration.',
  },
  {
    question: 'Can I upload very large CSV files?',
    answer: 'Yes, our tool processes data locally in your browser. This means it\'s very fast and secure, as your data never travels over the internet.',
  },
  {
    question: 'Is it compatible with Google Sheets?',
    answer: 'Absolutely. In Google Sheets, go to File > Download > Comma separated values (.csv) and use that file with our tool.',
  },
];

const howToData = [
  {
    name: 'Prepare your data',
    text: 'Have your Excel or CSV file ready. Make sure the data is clean.',
  },
  {
    name: 'Load the data',
    text: 'Paste the CSV text in the input area or drag the file directly to the converter.',
  },
  {
    name: 'Configure the table',
    text: 'Choose whether you want to use the first row as a header and if you want basic styles.',
  },
  {
    name: 'Copy the code',
    text: 'Switch to the "HTML Code" tab and copy the result to paste on your website.',
  },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Paste your CSV here',
  csvInputPlaceholder: 'Name,Age,City\nJohn,25,Madrid\nAna,30,Barcelona',
  uploadLabel: 'Or upload your file (CSV)',
  dragDropLabel: 'Drag and drop your file here',
  headerCheckboxLabel: 'Use first row as header',
  bordersCheckboxLabel: 'Add borders',
  stripeCheckboxLabel: 'Zebra stripes',
  previewTabLabel: 'Preview',
  codeTabLabel: 'HTML Code',
  emptyStateLabel: 'Enter data to see the table',
  copyButtonLabel: 'Copy Code',
  copiedLabel: 'Copied!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Resources on HTML Tables and Data Formats',
  bibliography: [
    { name: 'W3C: HTML Tables', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: HTML table element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: CSV Format', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Download your data', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Convert Excel and CSV to HTML Tables Easily', level: 2 },
    {
      type: 'paragraph',
      html: 'In modern web development, presenting tabular data is one of the most effective ways to convey structured information. However, manually converting data from a spreadsheet like <strong>Excel</strong> or a <strong>CSV</strong> file to HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, and <code>&lt;td&gt;</code> tags is tedious and error-prone.',
    },
    { type: 'title', text: 'Why use semantic HTML tables?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Accessibility:</strong> Screen readers can interpret the structure and help users with visual disabilities.',
        '<strong>SEO:</strong> Search engines index cell content, improving your data\'s ranking.',
        '<strong>Responsiveness:</strong> With some CSS, HTML tables can adapt to mobile devices.',
        '<strong>Maintainability:</strong> It\'s much easier to edit data in HTML than to regenerate an entire image.',
      ],
    },
    { type: 'title', text: 'How the Excel to HTML Converter Works', level: 3 },
    {
      type: 'paragraph',
      html: 'Our utility uses a native text parser that processes comma-separated files (CSV). Most spreadsheet programs, including Microsoft Excel, Google Sheets, and LibreOffice Calc, allow you to export your data in CSV format.',
    },
  ],
};

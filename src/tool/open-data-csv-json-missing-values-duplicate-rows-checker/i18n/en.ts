import type { FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { CsvJsonDataQualityCheckerLocaleContent } from '../entry';
import { ui } from '../ui';

const softwareApplication: SoftwareApplication = {
  '@type': 'SoftwareApplication',
  name: 'Open Data CSV Missing Values Checker',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  description: 'Check a CSV or JSON table locally for missing values, duplicate rows, mixed types, parse failures and numeric outliers.',
  url: 'https://gamebob.dev/en/open-data-csv-json-missing-values-duplicate-rows-checker',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: FAQPage = {
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What files can the profiler inspect?', acceptedAnswer: { '@type': 'Answer', text: 'It accepts a CSV file with a header row or JSON containing an array of objects. A JSON object may also contain that array under data, rows, or records.' } },
    { '@type': 'Question', name: 'How does it distinguish missing, null, blank, and zero?', acceptedAnswer: { '@type': 'Answer', text: 'An omitted JSON property is missing, JSON null is null, an empty or whitespace-only string is blank, and numeric zero remains a measured zero. The distinctions are kept in the column table.' } },
    { '@type': 'Question', name: 'How are numeric outliers calculated?', acceptedAnswer: { '@type': 'Answer', text: 'For columns with numeric values, the profiler calculates the first and third quartiles and flags values below Q1 minus 1.5 times the IQR or above Q3 plus 1.5 times the IQR. It reports the rows but does not label them errors.' } },
    { '@type': 'Question', name: 'Does this prove that a dataset is high quality?', acceptedAnswer: { '@type': 'Answer', text: 'No. It measures structural signals in the supplied file. It cannot prove semantic correctness, accuracy, provenance, legal openness, absence of bias, privacy compliance, or fitness for a particular use.' } },
  ],
};

const howTo: HowTo = {
  '@type': 'HowTo',
  name: 'Profile an open data table',
  step: [
    { '@type': 'HowToStep', name: 'Prepare the table', text: 'Use one CSV header row and one record per line, or provide a JSON array of objects. Keep the source context and field definitions available.' },
    { '@type': 'HowToStep', name: 'Load the data', text: 'Choose a CSV or JSON file, paste the text, or inspect the included example. The file is read locally in the browser.' },
    { '@type': 'HowToStep', name: 'Read the signals', text: 'Check row and column counts, then inspect missing, null, blank, unique, mixed-type, duplicate, and outlier signals.' },
    { '@type': 'HowToStep', name: 'Trace the source rows', text: 'Use the duplicate row numbers and the column-level counts to return to the original file and verify each finding.' },
    { '@type': 'HowToStep', name: 'Edit the review', text: 'Add the dataset purpose and decisions to the review note, then copy it or print it to PDF alongside the source file.' },
  ],
};

export const content: CsvJsonDataQualityCheckerLocaleContent = {
  slug: 'open-data-csv-json-missing-values-duplicate-rows-checker',
  title: 'Open Data CSV Missing Values Checker',
  description: 'Check CSV and JSON tables locally for missing values, duplicate rows, mixed types, parse failures and numeric outliers before reusing the data.',
  ui,
  seo: [
    { type: 'title', text: 'Find Structural Problems Before Reusing an Open Data Table', level: 2 },
    { type: 'paragraph', html: 'A table can look tidy while still hiding blank fields, duplicate records, mixed value types, malformed rows, or extreme numeric values. This profiler reads a CSV or JSON table in the browser and turns those structural signals into counts that can be traced back to the supplied rows.' },
    { type: 'paragraph', html: 'The purpose is triage, not a universal quality score. A blank value may be an intentional not-applicable value, a duplicate may represent a repeated event, and an outlier may be a real observation. The useful result is a short list of questions to take back to the dataset owner or documentation.' },
    { type: 'title', text: 'What the Profiler Measures', level: 2 },
    { type: 'table', headers: ['Signal', 'How it is measured', 'What to verify next'], rows: [['Missing', 'An object property is absent from a row', 'Was the field expected for this record?'], ['Null', 'The value is explicitly null', 'Does null have a defined meaning in the source schema?'], ['Blank', 'The value is an empty or whitespace-only string', 'Should blank text be converted, rejected, or kept?'], ['Duplicate rows', 'All normalized values match across the row columns', 'Is the repeated record a duplicate or a valid repeated event?'], ['Mixed type', 'More than one non-empty inferred value type occurs in a column', 'Which type does the source definition require?'], ['IQR outlier', 'A number falls outside the Tukey 1.5 IQR fences', 'Can the source or domain explain the unusual value?']] },
    { type: 'paragraph', html: 'Numeric summaries show the count, minimum, maximum, mean, median, quartiles, and interquartile range for values that parse as numbers. Numeric strings such as 12.5 are included, while values with other text are retained as source values and can trigger a mixed-type or parse warning.' },
    { type: 'title', text: 'Prepare a Reviewable Data Boundary', level: 2 },
    { type: 'paragraph', html: 'Keep the original file name, collection period, units, definitions, and intended use beside the profile. Those facts determine whether a structural signal matters. The profiler does not infer whether a column is a valid address, a complete population, a lawful disclosure, or a trustworthy measurement.' },
    { type: 'list', items: ['Use a stable header row for CSV and avoid merged cells or presentation-only labels.', 'Keep missing, null, blank, and zero values distinct while checking the source documentation.', 'Investigate duplicate row numbers before deduplicating because repetition can be meaningful.', 'Read mixed-type and outlier warnings with domain context instead of deleting values automatically.', 'Save the edited review with the source file and record every transformation made afterward.'] },
    { type: 'tip', title: 'An outlier is a question, not a verdict', html: 'The IQR rule is a reproducible screening method for numeric distributions. It does not know the unit, the expected range, the sampling design, or whether a rare event is important. Confirm unusual rows against the source and the purpose of the analysis.' },
    { type: 'title', text: 'What the Tool Cannot Establish', level: 2 },
    { type: 'paragraph', html: 'A structural profile cannot establish accuracy because accuracy requires a trusted reference or real-world verification. It cannot establish completeness because the profiler sees only the file supplied, not the records that should exist. It also cannot decide whether two fields are semantically comparable when their labels happen to look alike.' },
    { type: 'paragraph', html: 'The profile is therefore best used as an intake record for a data review. Pair it with the publisher documentation, provenance, licensing information, update history, validation rules, and the requirements of the project that will reuse the data.' },
    { type: 'tip', title: 'Keep the measured facts separate from guidance', html: 'The review area intentionally separates counts derived from the file from the actions a human reviewer should consider. Edit the guidance to reflect your project, but do not turn a measurable warning into a claim about the people or process that produced the data.' },
  ],
  faq: [
    { question: 'What files can the profiler inspect?', answer: 'It accepts a CSV file with a header row or JSON containing an array of objects. A JSON object may also contain the array under data, rows, or records.' },
    { question: 'How does it distinguish missing, null, blank, and zero?', answer: 'An omitted JSON property is missing, JSON null is null, an empty string is blank, and numeric zero remains zero.' },
    { question: 'How are numeric outliers calculated?', answer: 'The tool uses Tukey 1.5 IQR fences and reports the affected rows without calling them errors.' },
    { question: 'Does this prove that a dataset is high quality?', answer: 'No. It measures structural signals and cannot prove semantic correctness, accuracy, provenance, openness, privacy compliance, or fitness for a use.' },
  ],
  faqTitle: 'Questions About Table Checks',
  bibliographyTitle: 'References and Documentation',
  bibliography,
  howTo: [
    { name: 'Prepare the table', text: 'Use a stable CSV header and one record per row, or a JSON array of objects. Keep definitions and source context nearby.' },
    { name: 'Load the data', text: 'Choose a local file, paste the text, or inspect the included example.' },
    { name: 'Read the signals', text: 'Inspect counts for missing, null, blank, unique, mixed-type, duplicate, and outlier signals.' },
    { name: 'Trace the source rows', text: 'Return to the original file using the duplicate row numbers and column findings.' },
    { name: 'Edit the review', text: 'Add purpose and decisions to the note, then copy or print it alongside the source.' },
  ],
  schemas: [softwareApplication, faqPage, howTo] as unknown as Record<string, unknown>[],
};

export const englishContent = content;

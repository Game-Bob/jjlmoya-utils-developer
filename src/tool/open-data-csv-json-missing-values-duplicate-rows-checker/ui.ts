export interface CsvJsonDataQualityCheckerUI {
  [key: string]: string;
  fileLabel: string;
  fileAria: string;
  pasteLabel: string;
  pastePlaceholder: string;
  exampleButton: string;
  profileButton: string;
  clearButton: string;
  copyButton: string;
  printButton: string;
  noFile: string;
  dropHint: string;
  localBoundary: string;
  intakeTitle: string;
  emptyTitle: string;
  emptyText: string;
  factsTitle: string;
  signalTitle: string;
  signalIntro: string;
  completenessLabel: string;
  completenessNote: string;
  duplicationNote: string;
  typeDriftLabel: string;
  typeDriftNote: string;
  outlierSignalNote: string;
  ledgerTitle: string;
  ledgerHint: string;
  guidanceTitle: string;
  rowsLabel: string;
  columnsLabel: string;
  duplicateRowsLabel: string;
  outlierCellsLabel: string;
  formatLabel: string;
  columnTitle: string;
  typeTitle: string;
  missingTitle: string;
  nullTitle: string;
  blankTitle: string;
  uniqueTitle: string;
  outlierTitle: string;
  numericTitle: string;
  noNumeric: string;
  warningsTitle: string;
  noWarnings: string;
  sourceRowsLabel: string;
  noSourceRows: string;
  numericTo: string;
  medianLabel: string;
  meanLabel: string;
  methodLabel: string;
  methodText: string;
  limitsLabel: string;
  limitsText: string;
  edgeCasesLabel: string;
  edgeCasesText: string;
  reviewTitle: string;
  reviewHint: string;
  copySuccess: string;
  copyFailure: string;
  printHint: string;
  statusReady: string;
  statusWorking: string;
  statusLoaded: string;
  errorFormat: string;
  errorEmpty: string;
  kindMissing: string;
  kindNull: string;
  kindBlank: string;
  kindNumber: string;
  kindString: string;
  kindBoolean: string;
  kindDate: string;
  kindMixed: string;
  kindEmpty: string;
  guidanceMissing: string;
  guidanceDuplicates: string;
  guidanceTypes: string;
  guidanceOutliers: string;
  guidanceContext: string;
  sourceName: string;
  fileInput: string;
  pasteInput: string;
}

export const ui: CsvJsonDataQualityCheckerUI = {
  fileLabel: 'Load a CSV or JSON table',
  fileAria: 'Choose a local CSV or JSON file',
  pasteLabel: 'Or paste a table',
  pastePlaceholder: 'Paste CSV text or a JSON array of objects',
  exampleButton: 'Inspect the example',
  profileButton: 'Profile this data',
  clearButton: 'Clear profile',
  copyButton: 'Copy review',
  printButton: 'Print or save PDF',
  noFile: 'No file selected',
  dropHint: 'Drop a file here or choose one from your device',
  localBoundary: 'Your file stays in this browser. Nothing is uploaded.',
  intakeTitle: 'Bring a table to the bench',
  emptyTitle: 'The inspection bench is ready',
  emptyText: 'Load a table to see measurable signals, source rows, and review guidance.',
  factsTitle: 'Facts measured from your data',
  signalTitle: 'Signal map',
  signalIntro: 'Start with the signals that need a human decision.',
  completenessLabel: 'Completeness',
  completenessNote: 'missing, null, or blank cells',
  duplicationNote: 'rows sharing an exact signature',
  typeDriftLabel: 'Type drift',
  typeDriftNote: 'mixed or failed parses',
  outlierSignalNote: 'numeric values outside IQR fences',
  ledgerTitle: 'Column ledger',
  ledgerHint: 'Open for field-level detail',
  guidanceTitle: 'Guidance for your review',
  rowsLabel: 'Rows',
  columnsLabel: 'Columns',
  duplicateRowsLabel: 'Rows in duplicate groups',
  outlierCellsLabel: 'IQR outlier cells',
  formatLabel: 'Format',
  columnTitle: 'Column',
  typeTitle: 'Inferred type',
  missingTitle: 'Missing',
  nullTitle: 'Null',
  blankTitle: 'Blank',
  uniqueTitle: 'Unique',
  outlierTitle: 'Outliers',
  numericTitle: 'Numeric range',
  noNumeric: 'No numeric values detected',
  warningsTitle: 'Signals requiring context',
  noWarnings: 'No measurable warning was found in the loaded structure.',
  sourceRowsLabel: 'Source rows',
  noSourceRows: 'none flagged',
  numericTo: 'to',
  medianLabel: 'median',
  meanLabel: 'mean',
  methodLabel: 'Method applied',
  methodText: 'Structural profiling with exact counts, inferred types, duplicate signatures, and Tukey 1.5 IQR fences for numeric outlier signals.',
  limitsLabel: 'What this tool does not prove',
  limitsText: 'It cannot establish semantic correctness, accuracy, provenance, legal openness, privacy compliance, absence of bias, or fitness for a particular use.',
  edgeCasesLabel: 'Edge cases and data warnings',
  edgeCasesText: 'Review mixed schemas, nested JSON, empty files, high-cardinality fields, dates, locale-specific numbers, and small samples with the source documentation.',
  reviewTitle: 'Editable review note',
  reviewHint: 'Edit the wording, add context, then copy it or print it as a PDF-friendly review.',
  copySuccess: 'Review copied to the clipboard.',
  copyFailure: 'Clipboard access failed. Select the review text and copy it manually.',
  printHint: 'The print dialog can save this review as a PDF.',
  statusReady: 'Ready for a local table',
  statusWorking: 'Reading the table',
  statusLoaded: 'Profile updated',
  errorFormat: 'Use CSV or JSON tabular data.',
  errorEmpty: 'The table has no rows to inspect.',
  kindMissing: 'Missing',
  kindNull: 'Null',
  kindBlank: 'Blank',
  kindNumber: 'Number',
  kindString: 'Text',
  kindBoolean: 'Boolean',
  kindDate: 'Date',
  kindMixed: 'Mixed',
  kindEmpty: 'Empty',
  guidanceMissing: 'Decide whether missing, null, or blank values are expected for each field before analysis.',
  guidanceDuplicates: 'Inspect duplicate row numbers before removing anything; repeated records may represent valid events.',
  guidanceTypes: 'Resolve mixed types or parse failures with the source schema and document any conversion.',
  guidanceOutliers: 'Check IQR outliers against the source and domain context; an unusual value is not automatically an error.',
  guidanceContext: 'Keep the source, collection period, definitions, and intended use beside this profile.',
  sourceName: 'Pasted table',
  fileInput: 'file-input',
  pasteInput: 'paste-input',
};

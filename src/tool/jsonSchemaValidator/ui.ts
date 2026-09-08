export interface JsonSchemaValidatorUI extends Record<string, string> {
  schemaLabel: string;
  dataLabel: string;
  schemaPlaceholder: string;
  dataPlaceholder: string;
  validateButton: string;
  exampleButton: string;
  clearButton: string;
  copyButton: string;
  validTitle: string;
  invalidTitle: string;
  waitingTitle: string;
  waitingText: string;
  validText: string;
  invalidText: string;
  errorsTitle: string;
  noErrors: string;
  pathLabel: string;
  ruleLabel: string;
  messageLabel: string;
  copiedMessage: string;
  parseError: string;
  schemaError: string;
  inputEmpty: string;
}

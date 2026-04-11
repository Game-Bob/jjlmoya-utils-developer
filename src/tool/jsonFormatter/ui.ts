export interface JsonFormatterUI extends Record<string, string> {
  labelInput: string;
  labelOutput: string;
  btnMinify: string;
  btnBeautify: string;
  btnFix: string;
  btnCopy: string;
  statusWaiting: string;
  statusValid: string;
  statusInvalid: string;
  toastCopied: string;
  toastFixed: string;
  toastFixFailed: string;
  placeholder: string;
}

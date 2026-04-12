export interface SvgSanitizerUI extends Record<string, string> {
  labelInput: string;
  labelOutput: string;
  optRemoveIds: string;
  optRemoveWH: string;
  optMinify: string;
  btnSanitize: string;
  btnCopy: string;
  btnCopied: string;
  btnDownload: string;
  statOriginal: string;
  statCleaned: string;
  statReduction: string;
  statElems: string;
  statAttrs: string;
  errorPaste: string;
  errorProcess: string;
}

export interface UnicodeNormalizationInspectorUI extends Record<
  string,
  string
> {
  sampleCanonical: string;
  sampleCompatibility: string;
  clear: string;
  leftLabel: string;
  rightLabel: string;
  leftPlaceholder: string;
  rightPlaceholder: string;
  compare: string;
  waitingTitle: string;
  waitingText: string;
  exactTitle: string;
  canonicalTitle: string;
  compatibilityTitle: string;
  differentTitle: string;
  exactText: string;
  canonicalText: string;
  compatibilityText: string;
  differentText: string;
  normalizedEqual: string;
  notNormalizedEqual: string;
  formLabel: string;
  leftResult: string;
  rightResult: string;
  codePointsTitle: string;
  visibleCharacter: string;
  codePoint: string;
  category: string;
  flags: string;
  noFlags: string;
  invisible: string;
  combining: string;
  control: string;
  format: string;
  whitespace: string;
  copied: string;
  copyReport: string;
  reportTitle: string;
}

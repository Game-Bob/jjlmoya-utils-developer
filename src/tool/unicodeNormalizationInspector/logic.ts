export type NormalizationForm = "NFC" | "NFD" | "NFKC" | "NFKD";

export type CharacterFlag =
  | "invisible"
  | "combining"
  | "control"
  | "format"
  | "whitespace";

export interface CodePointRecord {
  index: number;
  character: string;
  display: string;
  codePoint: string;
  category: string;
  flags: CharacterFlag[];
}

export interface FormComparison {
  form: NormalizationForm;
  left: string;
  right: string;
  equal: boolean;
}

export type ComparisonKind =
  | "same"
  | "canonical"
  | "compatibility"
  | "different";

export interface UnicodeComparison {
  left: string;
  right: string;
  exactEqual: boolean;
  kind: ComparisonKind;
  forms: FormComparison[];
  leftCodePoints: CodePointRecord[];
  rightCodePoints: CodePointRecord[];
}

const forms: NormalizationForm[] = ["NFC", "NFD", "NFKC", "NFKD"];

function hasFlag(character: string, pattern: RegExp): boolean {
  return pattern.test(character);
}

function characterFlags(character: string): CharacterFlag[] {
  const flags: CharacterFlag[] = [];
  if (hasFlag(character, /\p{Cc}/u)) flags.push("control");
  if (hasFlag(character, /\p{Cf}/u)) flags.push("format");
  if (hasFlag(character, /\p{M}/u)) flags.push("combining");
  if (hasFlag(character, /\p{Zs}/u) || /[\t\n\r]/u.test(character))
    flags.push("whitespace");
  if (flags.length > 0) flags.push("invisible");
  return flags;
}

function displayCharacter(character: string): string {
  const displays: Record<string, string> = {
    " ": "SP",
    "\t": "TAB",
    "\n": "LF",
    "\r": "CR",
  };
  return displays[character] ?? character;
}

function categoryFor(character: string): string {
  if (hasFlag(character, /\p{Cc}/u)) return "Control";
  if (hasFlag(character, /\p{Cf}/u)) return "Format";
  if (hasFlag(character, /\p{M}/u)) return "Mark";
  if (hasFlag(character, /\p{Zs}/u)) return "Space";
  if (hasFlag(character, /\p{L}/u)) return "Letter";
  if (hasFlag(character, /\p{N}/u)) return "Number";
  if (hasFlag(character, /\p{P}/u)) return "Punctuation";
  return "Symbol";
}

export function inspectCodePoints(value: string): CodePointRecord[] {
  return Array.from(value).map((character, index) => ({
    index,
    character,
    display: displayCharacter(character),
    codePoint: `U+${character.codePointAt(0)?.toString(16).toUpperCase().padStart(4, "0") ?? "0000"}`,
    category: categoryFor(character),
    flags: characterFlags(character),
  }));
}

function comparisonKind(
  left: string,
  right: string,
  comparisons: FormComparison[],
): ComparisonKind {
  if (left === right) return "same";
  const canonical = comparisons.find(
    (item) => (item.form === "NFC" || item.form === "NFD") && item.equal,
  );
  if (canonical) return "canonical";
  const compatibility = comparisons.find(
    (item) => (item.form === "NFKC" || item.form === "NFKD") && item.equal,
  );
  return compatibility ? "compatibility" : "different";
}

export function inspectPair(left: string, right: string): UnicodeComparison {
  const comparisons = forms.map((form) => ({
    form,
    left: left.normalize(form),
    right: right.normalize(form),
    equal: left.normalize(form) === right.normalize(form),
  }));
  return {
    left,
    right,
    exactEqual: left === right,
    kind: comparisonKind(left, right, comparisons),
    forms: comparisons,
    leftCodePoints: inspectCodePoints(left),
    rightCodePoints: inspectCodePoints(right),
  };
}

export function reportText(
  comparison: UnicodeComparison,
  title = "Unicode comparison report",
): string {
  const formLines = comparison.forms.map(
    (item) => `${item.form}: ${item.equal ? "equal" : "different"}`,
  );
  const leftPoints = comparison.leftCodePoints
    .map((item) => `${item.index}: ${item.codePoint} ${item.category}`)
    .join(", ");
  const rightPoints = comparison.rightCodePoints
    .map((item) => `${item.index}: ${item.codePoint} ${item.category}`)
    .join(", ");
  return [
    title,
    `Result: ${comparison.kind}`,
    ...formLines,
    `Left code points: ${leftPoints}`,
    `Right code points: ${rightPoints}`,
  ].join("\n");
}

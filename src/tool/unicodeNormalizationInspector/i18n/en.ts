import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { UnicodeNormalizationInspectorUI } from "../ui";

const ui: UnicodeNormalizationInspectorUI = {
  sampleCanonical: "Canonical pair",
  sampleCompatibility: "Compatibility pair",
  clear: "Clear",
  compare: "Compare strings",
  leftLabel: "String A",
  rightLabel: "String B",
  leftPlaceholder: "Paste or type the first string...",
  rightPlaceholder: "Paste or type the second string...",
  waitingTitle: "Place two strings under the lens",
  waitingText:
    "The inspector will compare their exact code points and four Unicode normalization forms.",
  exactTitle: "Exact match",
  canonicalTitle: "Canonical equivalents",
  compatibilityTitle: "Compatibility equivalents",
  differentTitle: "Different strings",
  exactText: "Both strings contain the same sequence of Unicode code points.",
  canonicalText:
    "The sequences differ, but NFC and NFD treat them as canonically equivalent.",
  compatibilityText:
    "The strings become equal under a compatibility form. Review whether that information loss is acceptable.",
  differentText:
    "None of the four normalization forms makes these strings equal.",
  normalizedEqual: "equal after normalization",
  notNormalizedEqual: "still different",
  formLabel: "Normalization lens",
  leftResult: "String A",
  rightResult: "String B",
  codePointsTitle: "Code point specimens",
  visibleCharacter: "Display",
  codePoint: "Code point",
  category: "Category",
  flags: "Signals",
  noFlags: "none",
  invisible: "invisible",
  combining: "combining mark",
  control: "control",
  format: "format",
  whitespace: "whitespace",
  copied: "Report copied",
  copyReport: "Copy report",
  reportTitle: "Unicode comparison report",
};

const faq = [
  {
    question: "Why can two strings look identical but compare as different?",
    answer:
      "A visible character can be stored as one precomposed code point or as a base character followed by combining marks. The glyph can look the same while the underlying sequences differ. This inspector exposes both sequences and tests their normalized forms.",
  },
  {
    question:
      "What is the difference between canonical and compatibility equivalence?",
    answer:
      "Canonical normalization preserves the intended character identity, such as a precomposed accented letter and its decomposed sequence. Compatibility normalization also folds some presentation or legacy variants, such as fullwidth forms, and may discard distinctions that matter to an identifier.",
  },
  {
    question: "Which form should I use for search or comparison?",
    answer:
      "Choose a form as part of the application contract and apply it consistently to both values before comparing. NFC is a common choice for general text, while NFKC requires extra care because compatibility folding can change distinctions. The right choice depends on the data, not on which output happens to be shorter.",
  },
  {
    question: "Does this tool fix my database or filenames?",
    answer:
      "No. It only produces evidence in the browser. Use the code point and normalization result to decide what to change in your own application, then test that decision against the language, storage system and identifier rules involved.",
  },
];

const howTo = [
  {
    name: "Add both values",
    text: "Paste the two strings that appear equal or fail to match into String A and String B.",
  },
  {
    name: "Inspect the verdict",
    text: "Read whether the pair is exact, canonically equivalent, compatibility equivalent or genuinely different.",
  },
  {
    name: "Read the normalization lens",
    text: "Compare NFC, NFD, NFKC and NFKD to see the first form that makes the pair equal, if any.",
  },
  {
    name: "Follow the code point trail",
    text: "Check the displayed code points and signals for combining marks, format controls, whitespace or other invisible characters before changing your comparison rule.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Inspect two Unicode strings",
  description: "Compare code points and normalization forms in the browser.",
  step: howTo.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Unicode Normalization Inspector",
  description:
    "Inspect invisible Unicode differences and compare normalization forms locally.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "en",
};

export const content: ToolLocaleContent<UnicodeNormalizationInspectorUI> = {
  slug: "unicode-normalization-inspector",
  title: "Unicode Normalization Inspector",
  description:
    "Compare two strings by code point, expose invisible characters and test NFC, NFD, NFKC and NFKD normalization in your browser.",
  ui,
  faqTitle: "Unicode normalization questions",
  faq,
  bibliographyTitle: "Unicode normalization references",
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: "title",
      text: "Find the character that your eyes cannot see",
      level: 2,
    },
    {
      type: "paragraph",
      html: "When two names, slugs or search terms look identical but fail an equality check, the useful evidence is usually below the glyph. A string is a sequence of Unicode code points, and the same visible text can be represented by different sequences. Paste both values into the inspector to see the exact sequence, the character category and the normalization forms that bring them together.",
    },
    { type: "title", text: "Read the four normalization lenses", level: 2 },
    {
      type: "paragraph",
      html: "NFC composes compatible canonical sequences where a precomposed character exists. NFD decomposes canonical characters into their component sequence. NFKC and NFKD additionally apply compatibility mappings, which can turn presentation variants such as fullwidth letters into ordinary letters. That extra folding can be useful for search, but it can also erase distinctions that an identifier or security-sensitive comparison needs to preserve.",
    },
    {
      type: "table",
      headers: ["Form", "What it emphasizes", "Useful question"],
      rows: [
        [
          "NFC",
          "Canonical composition",
          "Do both values use a consistent composed representation?",
        ],
        [
          "NFD",
          "Canonical decomposition",
          "Do base characters and combining marks line up?",
        ],
        [
          "NFKC",
          "Compatibility composition",
          "Would compatibility variants be treated as the same?",
        ],
        [
          "NFKD",
          "Compatibility decomposition",
          "Which compatibility distinctions are being unfolded?",
        ],
      ],
    },
    { type: "title", text: "A practical debugging sequence", level: 2 },
    {
      type: "list",
      items: [
        "Confirm whether exact equality fails before changing the application.",
        "Inspect both code point trails for combining marks, format controls, tabs and spaces.",
        "Use the first normalization result that matches as evidence, not as an automatic instruction.",
        "Choose and document one comparison policy for the specific field, then test it with real language data.",
      ],
    },
    {
      type: "tip",
      title: "Normalization is not a universal cleanup rule",
      html: "Compatibility forms can make distinct characters compare equal. That may improve a user-facing search, but it may be wrong for usernames, passwords, file names, signed data or protocol fields. The Unicode standard and the data contract should decide the policy.",
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "What this inspector cannot prove",
      html: "The result does not identify the correct policy for your product, rewrite a database or guarantee that two strings have the same visual appearance in every font. It reports code points and browser normalization behavior so you can make and test that decision in context.",
    },
  ],
};

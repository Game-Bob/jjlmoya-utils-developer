import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';

const INVERTED_PUNCTUATION_LOCALES = {
  es: {
    language: 'Spanish',
    questionStart: '¿',
    questionEnd: '?',
    exclamationStart: '¡',
    exclamationEnd: '!',
  },
} as const;

type InvertedPunctuationLocale = keyof typeof INVERTED_PUNCTUATION_LOCALES;

const TRANSLATABLE_KEYS = ['title', 'description', 'ui', 'seo', 'faq', 'howTo'] as const;

function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (!value || typeof value !== 'object') return [];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  return Object.values(value).flatMap(collectStrings);
}

function translatableStrings(content: Record<string, unknown>): string[] {
  return TRANSLATABLE_KEYS.flatMap((key) => collectStrings(content[key]));
}

function sentenceStart(text: string, endIndex: number): string {
  const beforeMark = text.slice(0, endIndex).trimEnd();

  const boundaries = [
    ...[...beforeMark.matchAll(/\.(?=\s|$)/g)].map((m) => m.index ?? 0),
    ...[...beforeMark.matchAll(/:(?=\s|$)/g)].map((m) => m.index ?? 0),
    ...[...beforeMark.matchAll(/;(?=\s|$)/g)].map((m) => m.index ?? 0),
  ];

  const lastBoundary = boundaries.length > 0
    ? Math.max(...boundaries)
    : -1;

  const nlBoundary = beforeMark.lastIndexOf('\n');
  const boundary = Math.max(lastBoundary, nlBoundary);

  return beforeMark.slice(boundary + 1).trimStart();
}

function isCodeContext(text: string, index: number, mark: string): boolean {
  if (mark === '!') {
    const after = text.slice(index + 1, index + 10);
    return /^important\b/.test(after);
  }
  if (mark === '?') {
    const before = text.slice(Math.max(0, index - 2), index);
    return /[,#\/&+=]/.test(before) || / y $/.test(text.slice(0, index));
  }
  return false;
}

function findMissingInvertedMarks(
  text: string,
  startMark: string,
  endMark: string,
  _toolId: string,
): string[] {
  const cleaned = text.replace(/<code>.*?<\/code>/g, '');

  return [...cleaned.matchAll(new RegExp(`\\${endMark}`, 'g'))]
    .filter((match) => !isCodeContext(cleaned, match.index ?? 0, endMark))
    .map((match) => sentenceStart(cleaned, match.index ?? 0))
    .filter((segment) => {
      if (segment.length === 0) return false;
      if (segment.includes(startMark)) return false;
      if (endMark === '?' && /:\/\//.test(segment)) return false;
      return true;
    })
    .map((segment) => `${segment}${endMark}`);
}

describe('Inverted punctuation validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(INVERTED_PUNCTUATION_LOCALES).forEach((locale) => {
        it(`${locale} uses opening punctuation marks for questions and exclamations`, async () => {
          const typedLocale = locale as InvertedPunctuationLocale;
          const loader = tool.entry.i18n[typedLocale];
          if (!loader) return;

          const rule = INVERTED_PUNCTUATION_LOCALES[typedLocale];
          const content = await loader();
          const strings = translatableStrings(content as Record<string, unknown>);
          const toolId = tool.entry.id;
          const missingQuestions = strings.flatMap((text) =>
            findMissingInvertedMarks(text, rule.questionStart, rule.questionEnd, toolId)
          );
          const missingExclamations = strings.flatMap((text) =>
            findMissingInvertedMarks(text, rule.exclamationStart, rule.exclamationEnd, toolId)
          );
          const failures = [...missingQuestions, ...missingExclamations];

          expect(
            failures,
            [
              `Missing opening punctuation marks in ${tool.entry.id}/${typedLocale} (${rule.language}).`,
              `Questions must use ${rule.questionStart}...${rule.questionEnd} and exclamations must use ${rule.exclamationStart}...${rule.exclamationEnd}.`,
              `Examples: ${failures.slice(0, 5).join(' | ')}`,
            ].join(' '),
          ).toHaveLength(0);
        });
      });
    });
  });
});

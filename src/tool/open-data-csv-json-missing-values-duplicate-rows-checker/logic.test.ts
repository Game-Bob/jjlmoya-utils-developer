import { describe, expect, it } from 'vitest';
import {
  escapeMarkdown,
  formatProfileMarkdown,
  parseCsv,
  parseJson,
  parseTabularText,
  profileRows,
} from './logic';

describe('open data quality profiler logic', () => {
  it('parses quoted CSV fields and preserves special characters', () => {
    const parsed = parseCsv('name,note\n"Ada, Lovelace","5% | ready"');
    expect(parsed.rows).toEqual([{ name: 'Ada, Lovelace', note: '5% | ready' }]);
  });

  it('reports malformed CSV row widths', () => {
    const parsed = parseCsv('id,value\n1,2,3');
    expect(parsed.warnings[0]?.code).toBe('column-count');
    expect(parsed.rows[0]).toEqual({ id: '1', value: '2' });
  });

  it('keeps missing, null, blank, zero, and mixed values distinct', () => {
    const parsed = parseJson('[{"id":1,"value":0},{"id":2,"value":null},{"id":3,"value":""},{"id":4},{"id":5,"value":"unknown"}]');
    const profile = profileRows(parsed, 'sample.json', '');
    const value = profile.columnProfiles.find((column) => column.name === 'value');
    expect(value?.zeros).toBe(1);
    expect(value?.nulls).toBe(1);
    expect(value?.blanks).toBe(1);
    expect(value?.missing).toBe(1);
    expect(value?.inferredType).toBe('mixed');
  });

  it('detects duplicate rows and Tukey IQR outliers', () => {
    const parsed = parseTabularText('key,score\na,1\na,1\nb,2\nc,100', 'csv');
    const profile = profileRows(parsed, 'sample.csv', '');
    expect(profile.duplicateGroups).toEqual([{ rows: [1, 2], count: 2 }]);
    expect(profile.columnProfiles.find((column) => column.name === 'score')?.numeric?.outlierRows).toEqual([4]);
    expect(profile.warnings.find((warning) => warning.code === 'outliers')?.rows).toEqual([4]);
    expect(profile.warnings.find((warning) => warning.code === 'duplicate-rows')?.rows).toEqual([1, 2]);
  });

  it('handles invalid JSON and non-object rows', () => {
    expect(parseJson('{broken').warnings[0]?.code).toBe('invalid-json');
    const parsed = parseJson('[1,{"name":"ok"}]');
    expect(parsed.warnings[0]?.code).toBe('non-object-row');
    expect(parsed.rows[0]).toEqual({ value: 1 });
  });

  it('escapes markdown metacharacters and creates an editable review', () => {
    expect(escapeMarkdown('a|b *c*')).toBe('a\\|b \\*c\\*');
    const profile = profileRows(parseCsv('a\n<unsafe>'), '<unsafe>.csv', '');
    expect(formatProfileMarkdown(profile)).toContain('&lt;unsafe&gt;');
    expect(formatProfileMarkdown(profile)).toContain('## Guidance to review');
  });

  it('profiles empty input with explicit warnings', () => {
    const profile = profileRows(parseCsv(''), 'empty.csv', '');
    expect(profile.rows).toBe(0);
    expect(profile.warnings.map((warning) => warning.code)).toContain('empty-data');
  });
});

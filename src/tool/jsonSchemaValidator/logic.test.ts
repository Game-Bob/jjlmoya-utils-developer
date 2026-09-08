import { describe, expect, it } from 'vitest';
import { parseJson, validateJsonSchema } from './logic';

describe('JSON Schema validator logic', () => {
  it('accepts a valid object and validates nested constraints', () => {
    const result = validateJsonSchema(
      { name: 'Ada', age: 36, tags: ['one', 'two'] },
      { type: 'object', required: ['name'], properties: { name: { type: 'string', minLength: 2 }, age: { type: 'integer', minimum: 18 }, tags: { type: 'array', uniqueItems: true } } },
    );
    expect(result).toEqual({ valid: true, errors: [] });
  });

  it('reports required, type, format and additional property errors', () => {
    const result = validateJsonSchema(
      { email: 'not-an-email', active: 'yes', extra: true },
      { type: 'object', required: ['name'], properties: { name: { type: 'string' }, email: { type: 'string', format: 'email' }, active: { type: 'boolean' } }, additionalProperties: false },
    );
    expect(result.valid).toBe(false);
    expect(result.errors.map((error) => error.keyword)).toEqual(['required', 'format', 'type', 'additionalProperties']);
  });

  it('supports local references and combinators', () => {
    const schema = { $defs: { id: { type: 'string', pattern: '^[A-Z]{2}-\\d+$' } }, allOf: [{ type: 'object', required: ['id'] }, { properties: { id: { $ref: '#/$defs/id' } } }] };
    expect(validateJsonSchema({ id: 'ES-42' }, schema).valid).toBe(true);
    expect(validateJsonSchema({ id: 'bad' }, schema).errors[0]?.keyword).toBe('pattern');
    expect(validateJsonSchema('yes', { anyOf: [{ type: 'number' }, { type: 'boolean' }] }).valid).toBe(false);
  });

  it('parses JSON and returns a useful syntax error', () => {
    expect(parseJson('{"ok":true}').value).toEqual({ ok: true });
    expect(parseJson('{bad}').error).toBeTypeOf('string');
    expect(parseJson(' ').error).toBe('Input is empty');
  });
});

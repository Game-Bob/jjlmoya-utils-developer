import { describe, expect, it } from 'vitest';
import { decodeJwt, formatClaimDate, formatClaimValue, formatJson } from './logic';

function encode(value: Record<string, unknown>): string {
  return btoa(JSON.stringify(value)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

describe('JWT decoder logic', () => {
  it('decodes a valid signed-looking token and marks expired claims', () => {
    const token = `${encode({ alg: 'HS256', typ: 'JWT' })}.${encode({ sub: '42', exp: 1 })}.signature`;
    const result = decodeJwt(token);
    expect(result.valid).toBe(true);
    expect(result.payload.sub).toBe('42');
    expect(result.expired).toBe(true);
    expect(result.unsigned).toBe(false);
  });

  it('recognizes unsigned tokens and invalid structures', () => {
    const unsigned = `${encode({ alg: 'none' })}.${encode({ role: 'reader' })}.`;
    expect(decodeJwt(unsigned).unsigned).toBe(true);
    expect(decodeJwt('not-a-jwt').error).toBe('invalid-segments');
    expect(decodeJwt('e30.invalid-json.signature').error).toBe('invalid-json');
  });

  it('formats JSON, claims and dates without inventing values', () => {
    expect(formatJson({ ok: true })).toContain('"ok": true');
    expect(formatClaimValue(['a', 2])).toBe('a, 2');
    expect(formatClaimValue(null)).toBeNull();
    expect(formatClaimDate(0)).toBeTypeOf('string');
    expect(formatClaimDate('0')).toBeNull();
  });
});

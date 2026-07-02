export interface DecodedJwt {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  signature: string;
  valid: boolean;
  unsigned: boolean;
  expired: boolean;
  error?: 'invalid-segments' | 'invalid-json';
}

const textDecoder = new TextDecoder();

function decodeBase64Url(segment: string): string {
  const normalized = segment.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return textDecoder.decode(bytes);
}

function parseJsonSegment(segment: string): Record<string, unknown> {
  const decoded = decodeBase64Url(segment);
  const parsed = JSON.parse(decoded) as unknown;

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('invalid-json');
  }

  return parsed as Record<string, unknown>;
}

function invalidJwt(error: DecodedJwt['error']): DecodedJwt {
  return {
    header: {},
    payload: {},
    signature: '',
    valid: false,
    unsigned: false,
    expired: false,
    error,
  };
}

function hasValidSegments(parts: string[]): boolean {
  return parts.length === 3 && Boolean(parts[0]) && Boolean(parts[1]);
}

function buildDecodedJwt(header: Record<string, unknown>, payload: Record<string, unknown>, signature: string): DecodedJwt {
  const unsigned = signature.length === 0 || header['alg'] === 'none';
  const exp = typeof payload['exp'] === 'number' ? payload['exp'] : undefined;

  return {
    header,
    payload,
    signature,
    valid: true,
    unsigned,
    expired: typeof exp === 'number' && exp * 1000 < Date.now(),
  };
}

export function decodeJwt(token: string): DecodedJwt {
  const parts = token.trim().split('.');

  if (!hasValidSegments(parts)) return invalidJwt('invalid-segments');

  try {
    const header = parseJsonSegment(parts[0]);
    const payload = parseJsonSegment(parts[1]);
    return buildDecodedJwt(header, payload, parts[2] ?? '');
  } catch {
    return invalidJwt('invalid-json');
  }
}

export function formatJson(value: Record<string, unknown>): string {
  return JSON.stringify(value, null, 2);
}

export function formatClaimDate(value: unknown): string | null {
  if (typeof value !== 'number') return null;

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(new Date(value * 1000));
}

export function formatClaimValue(value: unknown): string | null {
  if (value === undefined || value === null || value === '') return null;
  if (Array.isArray(value)) return value.map(String).join(', ');
  if (typeof value === 'object') return JSON.stringify(value);

  return String(value);
}

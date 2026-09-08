export interface ValidationError {
  instancePath: string;
  schemaPath: string;
  keyword: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export interface ParseResult {
  value?: unknown;
  error?: string;
}

export const SAMPLE_SCHEMA = `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "email", "age"],
  "properties": {
    "name": { "type": "string", "minLength": 2 },
    "email": { "type": "string", "format": "email" },
    "age": { "type": "integer", "minimum": 18, "maximum": 120 },
    "roles": {
      "type": "array",
      "items": { "type": "string", "enum": ["admin", "editor", "viewer"] },
      "uniqueItems": true
    }
  },
  "additionalProperties": false
}`;

export const SAMPLE_DATA = `{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "age": 36,
  "roles": ["editor", "viewer"]
}`;

export function parseJson(text: string): ParseResult {
  if (!text.trim()) return { error: 'Input is empty' };
  try {
    return { value: JSON.parse(text) };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Invalid JSON' };
  }
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function equalArrays(left: unknown[], right: unknown[]): boolean {
  return left.length === right.length && left.every((item, index) => deepEqual(item, right[index]));
}

function equalObjects(left: Record<string, unknown>, right: Record<string, unknown>): boolean {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  return leftKeys.length === rightKeys.length && leftKeys.every((key) => key in right && deepEqual(left[key], right[key]));
}

function deepEqual(left: unknown, right: unknown): boolean {
  if (Object.is(left, right)) return true;
  if (!sameNonNullType(left, right)) return false;
  if (Array.isArray(left)) return equalArrays(left, right as unknown[]);
  if (isObject(left)) return equalObjects(left, right as Record<string, unknown>);
  return false;
}

function sameNonNullType(left: unknown, right: unknown): boolean {
  if (typeof left !== typeof right) return false;
  if (left === null || right === null) return false;
  return Array.isArray(left) === Array.isArray(right);
}

function jsonType(value: unknown): string {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'number' && Number.isInteger(value)) return 'integer';
  return typeof value;
}

function pointerPart(value: string): string {
  return value.replace(/~/g, '~0').replace(/\//g, '~1');
}

function instancePath(path: string, key: string | number): string {
  return `${path}/${pointerPart(String(key))}`;
}

function resolvePointer(root: unknown, pointer: string): unknown {
  if (pointer === '#') return root;
  if (!pointer.startsWith('#/')) return undefined;
  const parts = pointer.slice(2).split('/').map((part) => part.replace(/~1/g, '/').replace(/~0/g, '~'));
  let current = root;
  for (const part of parts) { if (!isObject(current) && !Array.isArray(current)) return undefined; current = (current as Record<string, unknown>)[part]; }
  return current;
}

interface ValidationContext {
  value: unknown;
  schema: unknown;
  root: unknown;
  path: string;
  schemaPath: string;
  errors: ValidationError[];
  depth: number;
}

function addError(context: ValidationContext, error: { keyword: string; message: string; path?: string; schemaPath?: string }): void {
  if (context.errors.length >= 100) return;
  context.errors.push({ instancePath: error.path || context.path || '/', schemaPath: error.schemaPath || context.schemaPath || '#', keyword: error.keyword, message: error.message });
}

function matchesFormat(value: string, format: string): boolean {
  const patterns: Record<string, RegExp> = { email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, hostname: /^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$/, ipv6: /^[0-9a-f:]+$/i, uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, uri: /^[a-z][a-z0-9+.-]*:[^\s]+$/i, 'date-time': /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, date: /^\d{4}-\d{2}-\d{2}$/, time: /^\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/ };
  const pattern = patterns[format];
  if (!pattern) return true;
  if (!pattern.test(value)) return false;
  if (format === 'date' || format === 'date-time') return !Number.isNaN(Date.parse(value));
  return true;
}

function childContext(context: ValidationContext, overrides: Partial<Pick<ValidationContext, 'value' | 'schema' | 'path' | 'schemaPath' | 'errors'>>): ValidationContext {
  return { ...context, ...overrides, depth: context.depth + 1 };
}

function validateReference(context: ValidationContext, schema: Record<string, unknown>): boolean {
  if (typeof schema.$ref !== 'string') return false;
  const target = resolvePointer(context.root, schema.$ref);
  if (target === undefined) addError(context, { keyword: '$ref', message: `cannot resolve reference ${schema.$ref}` });
  else validateSchema(childContext(context, { value: context.value, schema: target, path: context.path, schemaPath: schema.$ref }));
  return true;
}

function validateType(context: ValidationContext, schema: Record<string, unknown>): boolean {
  if (schema.type === undefined) return true;
  const allowed = Array.isArray(schema.type) ? schema.type : [schema.type];
  const actual = jsonType(context.value);
  if (allowed.includes(actual)) return true;
  addError(context, { keyword: 'type', message: `must be ${allowed.join(' or ')}, got ${actual}` });
  return false;
}

function validateValueAssertions(context: ValidationContext, schema: Record<string, unknown>): void {
  if ('const' in schema && !deepEqual(context.value, schema.const)) addError(context, { keyword: 'const', message: 'must equal the constant value' });
  if (Array.isArray(schema.enum) && !schema.enum.some((item) => deepEqual(context.value, item))) addError(context, { keyword: 'enum', message: 'must be one of the allowed values' });
}

function validateString(context: ValidationContext, schema: Record<string, unknown>): void {
  if (typeof context.value !== 'string') return;
  validateStringLength(context, schema, [...context.value].length);
  validateStringPattern(context, schema);
  validateStringFormat(context, schema);
}

function validateStringLength(context: ValidationContext, schema: Record<string, unknown>, length: number): void { if (typeof schema.minLength === 'number' && length < schema.minLength) addError(context, { keyword: 'minLength', message: `must contain at least ${schema.minLength} characters` }); if (typeof schema.maxLength === 'number' && length > schema.maxLength) addError(context, { keyword: 'maxLength', message: `must contain at most ${schema.maxLength} characters` }); }

function validateStringPattern(context: ValidationContext, schema: Record<string, unknown>): void { if (typeof schema.pattern !== 'string') return; try { if (!new RegExp(schema.pattern).test(String(context.value))) addError(context, { keyword: 'pattern', message: 'must match the required pattern' }); } catch { addError(context, { keyword: 'pattern', message: 'contains an invalid regular expression' }); } }

function validateStringFormat(context: ValidationContext, schema: Record<string, unknown>): void { if (typeof schema.format === 'string' && !matchesFormat(String(context.value), schema.format)) addError(context, { keyword: 'format', message: `must match format ${schema.format}` }); }

function validateNumber(context: ValidationContext, schema: Record<string, unknown>): void { if (typeof context.value !== 'number' || !Number.isFinite(context.value)) return; const value = context.value; const rules = [{ key: 'multipleOf', test: typeof schema.multipleOf === 'number' && Math.abs(value / Number(schema.multipleOf) - Math.round(value / Number(schema.multipleOf))) > 1e-10, message: `must be a multiple of ${schema.multipleOf}` }, { key: 'minimum', test: typeof schema.minimum === 'number' && value < Number(schema.minimum), message: `must be greater than or equal to ${schema.minimum}` }, { key: 'maximum', test: typeof schema.maximum === 'number' && value > Number(schema.maximum), message: `must be less than or equal to ${schema.maximum}` }, { key: 'exclusiveMinimum', test: typeof schema.exclusiveMinimum === 'number' && value <= Number(schema.exclusiveMinimum), message: `must be greater than ${schema.exclusiveMinimum}` }, { key: 'exclusiveMaximum', test: typeof schema.exclusiveMaximum === 'number' && value >= Number(schema.exclusiveMaximum), message: `must be less than ${schema.exclusiveMaximum}` }]; rules.forEach((rule) => { if (rule.test) addError(context, { keyword: rule.key, message: rule.message }); }); }

function validateArray(context: ValidationContext, schema: Record<string, unknown>): void {
  if (!Array.isArray(context.value)) return;
  validateArrayLength(context, schema);
  validateArrayUniqueness(context, schema);
  validateArrayItems(context, schema);
  validateArrayContains(context, schema);
}

function validateArrayLength(context: ValidationContext, schema: Record<string, unknown>): void { const length = Array.isArray(context.value) ? context.value.length : 0; if (typeof schema.minItems === 'number' && length < schema.minItems) addError(context, { keyword: 'minItems', message: `must contain at least ${schema.minItems} items` }); if (typeof schema.maxItems === 'number' && length > schema.maxItems) addError(context, { keyword: 'maxItems', message: `must contain at most ${schema.maxItems} items` }); }

function validateArrayUniqueness(context: ValidationContext, schema: Record<string, unknown>): void { const value = context.value as unknown[]; if (schema.uniqueItems === true && value.some((item, index) => value.slice(0, index).some((previous) => deepEqual(previous, item)))) addError(context, { keyword: 'uniqueItems', message: 'must contain unique items' }); }

function validateArrayItems(context: ValidationContext, schema: Record<string, unknown>): void { const value = context.value as unknown[]; if (schema.items !== undefined && !Array.isArray(schema.items)) value.forEach((item, index) => validateSchema(childContext(context, { value: item, schema: schema.items, path: instancePath(context.path, index), schemaPath: `${context.schemaPath}/items` }))); }

function validateArrayContains(context: ValidationContext, schema: Record<string, unknown>): void { const value = context.value as unknown[]; const containsSchema = schema.contains; if (containsSchema !== undefined && !value.some((item, index) => isValid(childContext(context, { value: item, schema: containsSchema, path: instancePath(context.path, index), schemaPath: `${context.schemaPath}/contains`, errors: [] })))) addError(context, { keyword: 'contains', message: 'must contain at least one matching item' }); }

function validateObject(context: ValidationContext, schema: Record<string, unknown>): void {
  if (!isObject(context.value)) return;
  const value = context.value;
  validateObjectLength(context, schema, Object.keys(value).length);
  validateRequiredProperties(context, schema, value);
  Object.keys(value).forEach((key) => validateObjectProperty(context, key));
}

function validateObjectLength(context: ValidationContext, schema: Record<string, unknown>, length: number): void { if (typeof schema.minProperties === 'number' && length < schema.minProperties) addError(context, { keyword: 'minProperties', message: `must contain at least ${schema.minProperties} properties` }); if (typeof schema.maxProperties === 'number' && length > schema.maxProperties) addError(context, { keyword: 'maxProperties', message: `must contain at most ${schema.maxProperties} properties` }); }

function validateRequiredProperties(context: ValidationContext, schema: Record<string, unknown>, value: Record<string, unknown>): void { if (!Array.isArray(schema.required)) return; schema.required.forEach((key) => { if (typeof key === 'string' && !(key in value)) addError(context, { keyword: 'required', message: `must have required property ${key}`, schemaPath: `${context.schemaPath}/required` }); }); }

function validateObjectProperty(context: ValidationContext, key: string): void {
  const value = context.value as Record<string, unknown>;
  const schema = context.schema as Record<string, unknown>;
  const properties = isObject(schema.properties) ? schema.properties : {};
  const patternProperties = isObject(schema.patternProperties) ? schema.patternProperties : {};
  const matched = validateNamedProperty(context, key, value, properties) || validatePatternProperties(context, key, value, patternProperties);
  validateAdditionalProperty(context, key, matched);
}

function validateNamedProperty(context: ValidationContext, key: string, value: Record<string, unknown>, properties: Record<string, unknown>): boolean {
  if (key in properties) {
    validateSchema(childContext(context, { value: value[key], schema: properties[key], path: instancePath(context.path, key), schemaPath: `${context.schemaPath}/properties/${pointerPart(key)}` }));
    return true;
  }
  return false;
}

function validatePatternProperties(context: ValidationContext, key: string, value: Record<string, unknown>, patternProperties: Record<string, unknown>): boolean {
  let matched = false;
  Object.entries(patternProperties).forEach(([pattern, schema]) => {
    try {
      if (new RegExp(pattern).test(key)) {
        matched = true;
        validateSchema(childContext(context, { value: value[key], schema, path: instancePath(context.path, key), schemaPath: `${context.schemaPath}/patternProperties/${pointerPart(pattern)}` }));
      }
    } catch {
      addError(context, { keyword: 'patternProperties', message: 'contains an invalid regular expression' });
    }
  });
  return matched;
}

function validateAdditionalProperty(context: ValidationContext, key: string, matched: boolean): void {
  if (matched) return;
  const value = context.value as Record<string, unknown>;
  const additionalProperties = (context.schema as Record<string, unknown>).additionalProperties;
  if (additionalProperties === false) addError(context, { keyword: 'additionalProperties', message: 'must not have additional properties', path: instancePath(context.path, key), schemaPath: `${context.schemaPath}/additionalProperties` });
  if (additionalProperties !== undefined && additionalProperties !== true && additionalProperties !== false) validateSchema(childContext(context, { value: value[key], schema: additionalProperties, path: instancePath(context.path, key), schemaPath: `${context.schemaPath}/additionalProperties` }));
}

function isValid(context: ValidationContext): boolean {
  const errors: ValidationError[] = [];
  validateSchema({ ...context, errors });
  return errors.length === 0;
}

function validateCombinators(context: ValidationContext, schema: Record<string, unknown>): void {
  validateAllOf(context, schema);
  validateAnyOf(context, schema);
  validateOneOf(context, schema);
  validateNot(context, schema);
  validateConditional(context, schema);
}

function validateAllOf(context: ValidationContext, schema: Record<string, unknown>): void {
  if (Array.isArray(schema.allOf)) schema.allOf.forEach((child, index) => validateSchema(childContext(context, { value: context.value, schema: child, path: context.path, schemaPath: `${context.schemaPath}/allOf/${index}` })));
}

function validateAnyOf(context: ValidationContext, schema: Record<string, unknown>): void {
  if (Array.isArray(schema.anyOf) && !schema.anyOf.some((child) => isValid(childContext(context, { value: context.value, schema: child, path: context.path, schemaPath: `${context.schemaPath}/anyOf`, errors: [] })))) addError(context, { keyword: 'anyOf', message: 'must match at least one schema' });
}

function validateOneOf(context: ValidationContext, schema: Record<string, unknown>): void {
  if (!Array.isArray(schema.oneOf)) return;
  const matches = schema.oneOf.filter((child) => isValid(childContext(context, { value: context.value, schema: child, path: context.path, schemaPath: `${context.schemaPath}/oneOf`, errors: [] }))).length;
  if (matches !== 1) addError(context, { keyword: 'oneOf', message: `must match exactly one schema, matched ${matches}` });
}

function validateNot(context: ValidationContext, schema: Record<string, unknown>): void {
  if (schema.not !== undefined && isValid(childContext(context, { value: context.value, schema: schema.not, path: context.path, schemaPath: `${context.schemaPath}/not`, errors: [] }))) addError(context, { keyword: 'not', message: 'must not match the nested schema' });
}

function validateConditional(context: ValidationContext, schema: Record<string, unknown>): void {
  if (schema.if === undefined) return;
  const condition = isValid(childContext(context, { value: context.value, schema: schema.if, path: context.path, schemaPath: `${context.schemaPath}/if`, errors: [] }));
  const branch = condition ? schema.then : schema.else;
  if (branch !== undefined) validateSchema(childContext(context, { value: context.value, schema: branch, path: context.path, schemaPath: `${context.schemaPath}/${condition ? 'then' : 'else'}` }));
}

function validateSchema(context: ValidationContext): void {
  if (context.depth > 30 || context.errors.length >= 100) return;
  if (typeof context.schema === 'boolean') {
    if (!context.schema) addError(context, { keyword: 'false schema', message: 'must not be valid' });
    return;
  }
  if (!isObject(context.schema)) return;
  if (validateReference(context, context.schema)) return;
  validateValueAssertions(context, context.schema);
  if (!validateType(context, context.schema)) return;
  validateString(context, context.schema);
  validateNumber(context, context.schema);
  validateArray(context, context.schema);
  validateObject(context, context.schema);
  validateCombinators(context, context.schema);
}

export function validateJsonSchema(data: unknown, schema: unknown): ValidationResult {
  const errors: ValidationError[] = [];
  validateSchema({ value: data, schema, root: schema, path: '', schemaPath: '#', errors, depth: 0 });
  return { valid: errors.length === 0, errors };
}

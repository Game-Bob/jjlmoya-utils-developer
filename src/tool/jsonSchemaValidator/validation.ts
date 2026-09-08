export const validationEvidence = {
  reviewedAt: '2026-09-08',
  methodology: 'The validator implements common JSON Schema 2020-12 assertions in a pure browser-safe module and exposes each failure with its instance path, schema path and keyword.',
  sources: ['https://json-schema.org/draft/2020-12/json-schema-core.html', 'https://json-schema.org/draft/2020-12/json-schema-validation.html'],
  referenceCases: ['Valid object with required fields', 'Missing property and wrong type', 'Local $ref with allOf', 'Invalid email format', 'Array uniqueness'],
  limitations: 'This focused client-side implementation does not load remote references, execute custom formats, or replace a full server-side contract test suite for production APIs.',
};

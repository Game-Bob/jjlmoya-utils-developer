import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jwt-decoder-parser-and-claims-inspector';
const title = 'JWT Decoder, Parser and Claims Inspector';
const description = 'Paste a JSON Web Token, decode its header and payload instantly, inspect registered claims, spot expired tokens, and copy clean JSON for debugging authentication flows.';

const howTo = [
  {
    name: 'Paste the JWT',
    text: 'Copy a token from an Authorization header, cookie, log entry or identity provider and paste it into the input field.',
  },
  {
    name: 'Read the decoded header and payload',
    text: 'The tool splits the token into header, payload and signature, then renders the JSON segments in separate panels for fast inspection.',
  },
  {
    name: 'Check important claims',
    text: 'Review algorithm, issuer, audience, subject, issued-at time, not-before time and expiration time without manually converting Unix timestamps.',
  },
  {
    name: 'Copy the data you need',
    text: 'Copy one decoded section or the complete decoded output when you need to share a sanitized debugging snapshot with your team.',
  },
];

const faq = [
  {
    question: 'Does decoding a JWT prove that the token is valid?',
    answer: 'No. Decoding only reveals the base64url-encoded header and payload. A token is trustworthy only after the signature, issuer, audience, expiration and related claims are validated by the application or identity provider.',
  },
  {
    question: 'Can I use this JWT decoder for access tokens and ID tokens?',
    answer: 'Yes. The decoder is useful for inspecting OAuth access tokens, OpenID Connect ID tokens, session tokens and service-to-service tokens, as long as they use the standard three-part JWT format.',
  },
  {
    question: 'Why does the signature panel not verify the token?',
    answer: 'JWT verification requires the correct secret, public key or JWKS configuration. This tool intentionally focuses on decoding and inspection so developers can see token contents without pretending that a visible signature string is proof of validity.',
  },
  {
    question: 'What should I check first when debugging a JWT?',
    answer: 'Start with exp, nbf, iss, aud and alg. Most real production issues come from expired tokens, clock skew, wrong audience values, unexpected issuer URLs or insecure algorithm assumptions.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWT token',
  tokenPlaceholder: 'Paste a JWT here: header.payload.signature',
  sampleButton: 'Load sample',
  clearButton: 'Clear',
  statusWaiting: 'Paste a token to decode its JSON header, payload and claims.',
  statusValid: 'JWT decoded successfully.',
  statusInvalid: 'This does not look like a valid three-part JWT.',
  statusExpired: 'JWT decoded, but the exp claim is already expired.',
  statusUnsigned: 'JWT decoded, but it is unsigned or uses alg none.',
  headerTitle: 'Header',
  payloadTitle: 'Payload',
  signatureTitle: 'Signature',
  claimsTitle: 'Registered claims',
  copyHeader: 'Copy decoded header',
  copyPayload: 'Copy decoded payload',
  copySignature: 'Copy signature',
  copyAll: 'Copy all',
  copiedLabel: 'Copied',
  invalidTokenTitle: 'Invalid JWT',
  invalidTokenBody: 'Check that the token has three dot-separated base64url segments.',
  invalidSegmentError: 'Check that the token has three dot-separated base64url segments.',
  invalidDecodeError: 'The header or payload could not be decoded as valid JSON.',
  emptyJson: '{}',
  signaturePresent: 'Signature segment is present; verify it in your auth layer with the correct key.',
  signatureMissing: 'No signature segment',
  algorithmLabel: 'Algorithm',
  typeLabel: 'Type',
  issuerLabel: 'Issuer',
  subjectLabel: 'Subject',
  audienceLabel: 'Audience',
  issuedAtLabel: 'Issued at',
  notBeforeLabel: 'Not before',
  expiresAtLabel: 'Expires at',
  claimMissing: 'Not present',
  privacyNote: 'Decoding runs in your browser session. Do not paste production secrets into any tool unless your security policy allows it.',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'JWT decoder FAQ',
  faq,
  bibliographyTitle: 'JWT specifications and security references',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Decode JWTs without losing the security context',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A JSON Web Token looks compact, but it often carries the exact detail that explains an authentication failure: the signing algorithm, issuer, audience, subject, issued-at time, not-before time, expiration and application-specific authorization claims. This <strong>JWT decoder, parser and claims inspector</strong> turns the three token segments into readable JSON so you can debug auth flows faster.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Decoded does not mean trusted',
      html: 'Anyone can base64url-decode a JWT. Trust begins only after your application verifies the signature with the correct secret, public key or JWKS, then validates issuer, audience, expiration and any domain-specific claims. Use this tool to inspect data, not to accept a token as authentic.',
    },
    {
      type: 'title',
      text: 'What each JWT segment tells you',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Typical content', 'Debugging value'],
      rows: [
        ['Header', 'Algorithm, token type and optional key id', 'Shows whether the token expects HS256, RS256, ES256 or another verification strategy.'],
        ['Payload', 'Registered claims and application claims', 'Reveals identity, tenant, scopes, roles, expiration and audience mismatches.'],
        ['Signature', 'Cryptographic signature bytes encoded as base64url', 'Confirms that a signature segment exists, but must be verified with the right key elsewhere.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims that usually explain broken authentication',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> if the token expired, refresh logic or clock settings may be wrong.',
        '<strong>nbf:</strong> if the token is not active yet, server and identity provider clocks may be out of sync.',
        '<strong>iss:</strong> if the issuer URL differs from configuration, the token may come from the wrong tenant or environment.',
        '<strong>aud:</strong> if the audience does not match the API identifier, the token was minted for another resource.',
        '<strong>alg:</strong> if the algorithm is unexpected, your verifier may reject the token or expose a dangerous configuration mistake.',
      ],
    },
    {
      type: 'title',
      text: 'Use cases for a JWT parser during development',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frontend debugging',
          description: 'Inspect ID tokens and access tokens received after login to confirm scopes, roles and profile claims.',
          icon: 'mdi:monitor-dashboard',
          points: ['Check profile claims', 'Confirm scopes and roles', 'Compare login environments'],
        },
        {
          title: 'Backend API QA',
          description: 'Compare expected issuer and audience values with the token actually sent in an Authorization header.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Validate audience shape', 'Spot issuer mismatches', 'Inspect bearer tokens'],
        },
        {
          title: 'Identity provider setup',
          description: 'Check whether claims from Auth0, Azure AD, Cognito, Keycloak or a custom provider are shaped as your app expects.',
          icon: 'mdi:account-key',
          points: ['Review tenant data', 'Check custom claims', 'Compare provider mappings'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Common JWT mistakes this inspector makes obvious',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Fast checks versus trust decisions',
      items: [
        {
          pro: 'See malformed tokens immediately.',
          con: 'It cannot know your expected audience or issuer.',
        },
        {
          pro: 'Convert Unix timestamp claims into readable dates.',
          con: 'It cannot verify a signature without the real key material.',
        },
        {
          pro: 'Spot missing issuer, audience, subject or type values.',
          con: 'It cannot prove that scopes and roles are safe for your application.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Best practice workflow',
      items: [
        'Decode the token to understand what the client or API actually received.',
        'Check exp, nbf, iss, aud, sub and alg before chasing application logic.',
        'Verify signatures and trust decisions only in your auth layer.',
        'Avoid sharing sensitive production JWTs in tickets, logs or screenshots.',
      ],
    },
  ],
};

export type Specificity = [number, number, number];

export function compareSpecificity(a: Specificity, b: Specificity): number {
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) return 1;
    if (a[i] < b[i]) return -1;
  }
  return 0;
}

function getFunctionalPseudoContent(s: string, start: number): { content: string; endIndex: number } | null {
  let level = 1;
  let i = start;
  while (i < s.length && level > 0) {
    if (s[i] === '(') level++;
    else if (s[i] === ')') level--;
    i++;
  }
  if (level === 0) return { content: s.substring(start, i - 1), endIndex: i };
  return null;
}

function splitByComma(s: string): string[] {
  const result: string[] = [];
  let current = '';
  let level = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') level++;
    else if (s[i] === ')') level--;
    if (s[i] === ',' && level === 0) {
      result.push(current.trim());
      current = '';
    } else {
      current += s[i];
    }
  }
  if (current.trim()) result.push(current.trim());
  return result;
}

function addSubSpecificity(content: string, total: Specificity): void {
  const subs = splitByComma(content);
  let max: Specificity = [0, 0, 0];
  for (const sub of subs) {
    const s = calculateSpecificity(sub);
    if (compareSpecificity(s, max) > 0) max = s;
  }
  total[0] += max[0];
  total[1] += max[1];
  total[2] += max[2];
}

function processPseudo(s: string, pseudo: string, total: Specificity): string | null {
  const idx = s.indexOf(pseudo);
  if (idx === -1) return null;
  const res = getFunctionalPseudoContent(s, idx + pseudo.length);
  if (!res) return null;
  if (pseudo !== ':where(') addSubSpecificity(res.content, total);
  return s.substring(0, idx) + ' ' + s.substring(res.endIndex);
}

function applyFunctionalPseudos(s: string, total: Specificity): string {
  const pseudos = [':is(', ':not(', ':where(', ':has('];
  let found = true;
  while (found) {
    found = false;
    for (const pseudo of pseudos) {
      const result = processPseudo(s, pseudo, total);
      if (result !== null) { s = result; found = true; }
    }
  }
  return s;
}

function countMatches(s: string, regex: RegExp): number {
  return (s.match(regex) ?? []).length;
}

function countParts(s: string): number {
  const parts = s.replace(/[*+>~,]/g, ' ').trim().split(/\s+/);
  return parts[0] ? parts.length : 0;
}

export function calculateSpecificity(selector: string): Specificity {
  if (!selector.trim()) return [0, 0, 0];
  const total: Specificity = [0, 0, 0];
  let s = applyFunctionalPseudos(selector, total);
  total[0] += countMatches(s, /#[\w-]+/g);
  s = s.replace(/#[\w-]+/g, ' ');
  total[1] += countMatches(s, /\.[\w-]+/g);
  s = s.replace(/\.[\w-]+/g, ' ');
  total[1] += countMatches(s, /\[[^\]]+\]/g);
  s = s.replace(/\[[^\]]+\]/g, ' ');
  total[2] += countMatches(s, /::[\w-]+/g);
  s = s.replace(/::[\w-]+/g, ' ');
  total[1] += countMatches(s, /:[\w-]+(\([^)]*\))?/g);
  s = s.replace(/:[\w-]+(\([^)]*\))?/g, ' ');
  total[2] += countParts(s);
  return total;
}

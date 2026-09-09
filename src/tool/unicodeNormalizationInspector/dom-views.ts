import type { Evaluation } from "./evaluator";
import type { CodePointRecord, UnicodeComparison } from "./logic";

function query<T extends HTMLElement>(
  root: HTMLElement,
  selector: string,
): T | null {
  return root.querySelector<T>(selector);
}

function renderCodePoints(
  target: HTMLElement | null,
  records: CodePointRecord[],
  labels: Record<string, string>,
): void {
  if (!target) return;
  target.replaceChildren();
  records.forEach((record) => {
    const row = document.createElement("li");
    row.className = "uni-codepoint-row";
    const glyph = document.createElement("span");
    glyph.className = "uni-glyph";
    glyph.textContent = record.display;
    const details = document.createElement("span");
    details.className = "uni-codepoint-details";
    details.textContent = `${record.codePoint} ${record.category}`;
    const flags = document.createElement("span");
    flags.className = "uni-flags";
    flags.textContent =
      record.flags.map((flag) => labels[flag] ?? flag).join(", ") ||
      labels.noFlags ||
      "none";
    row.append(glyph, details, flags);
    target.appendChild(row);
  });
}

function renderForms(
  root: HTMLElement,
  comparison: UnicodeComparison,
  copy: Record<string, string>,
): void {
  const target = query<HTMLElement>(root, "[data-forms]");
  if (!target) return;
  target.replaceChildren();
  comparison.forms.forEach((item) => {
    const row = document.createElement("div");
    row.className = `uni-form-row ${item.equal ? "is-equal" : "is-different"}`;
    const form = document.createElement("strong");
    form.textContent = item.form;
    const state = document.createElement("span");
    state.textContent = item.equal
      ? copy.normalizedEqual || "equal"
      : copy.notNormalizedEqual || "different";
    const left = document.createElement("code");
    left.textContent = item.left;
    const right = document.createElement("code");
    right.textContent = item.right;
    row.append(form, state, left, right);
    target.appendChild(row);
  });
}

export function renderWaiting(root: HTMLElement, evaluation: Evaluation): void {
  const verdict = query<HTMLElement>(root, "[data-verdict]");
  verdict?.classList.remove(
    "is-exact",
    "is-canonical",
    "is-compatibility",
    "is-different",
  );
  verdict?.classList.add("is-waiting");
  const title = query<HTMLElement>(root, "[data-verdict-title]");
  const text = query<HTMLElement>(root, "[data-verdict-text]");
  if (title) title.textContent = evaluation.title;
  if (text) text.textContent = evaluation.text;
  query<HTMLElement>(root, "[data-forms]")?.replaceChildren();
  query<HTMLElement>(root, "[data-left-codepoints]")?.replaceChildren();
  query<HTMLElement>(root, "[data-right-codepoints]")?.replaceChildren();
}

export function renderComparison(
  root: HTMLElement,
  comparison: UnicodeComparison,
  evaluation: Evaluation,
  copy: Record<string, string>,
): void {
  renderVerdict(root, evaluation);
  renderForms(root, comparison, copy);
  renderCodePoints(
    query(root, "[data-left-codepoints]"),
    comparison.leftCodePoints,
    copy,
  );
  renderCodePoints(
    query(root, "[data-right-codepoints]"),
    comparison.rightCodePoints,
    copy,
  );
}

function renderVerdict(root: HTMLElement, evaluation: Evaluation): void {
  const verdict = query<HTMLElement>(root, "[data-verdict]");
  verdict?.classList.remove(
    "is-waiting",
    "is-exact",
    "is-canonical",
    "is-compatibility",
    "is-different",
  );
  verdict?.classList.add(`is-${evaluation.tone}`);
  const title = query<HTMLElement>(root, "[data-verdict-title]");
  const text = query<HTMLElement>(root, "[data-verdict-text]");
  if (title) title.textContent = evaluation.title;
  if (text) text.textContent = evaluation.text;
}

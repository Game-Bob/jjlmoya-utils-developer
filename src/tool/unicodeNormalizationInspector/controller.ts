import { evaluate, type EvaluationCopy } from "./evaluator";
import { renderComparison, renderWaiting } from "./dom-views";
import { inspectPair, reportText } from "./logic";
import { loadState, saveState } from "./storage";

interface ControllerCopy extends EvaluationCopy {
  normalizedEqual: string;
  notNormalizedEqual: string;
  noFlags: string;
  invisible: string;
  combining: string;
  control: string;
  format: string;
  whitespace: string;
  copied: string;
}

function copyLabels(copy: ControllerCopy): Record<string, string> {
  return {
    ...copy,
    invisible: copy.invisible,
    combining: copy.combining,
    control: copy.control,
    format: copy.format,
    whitespace: copy.whitespace,
  };
}

function setValue(root: HTMLElement, selector: string, value: string): void {
  const input = root.querySelector<HTMLTextAreaElement>(selector);
  if (input) input.value = value;
}

async function copyReport(
  text: string,
  message: string,
  root: HTMLElement,
): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    const feedback = root.querySelector<HTMLElement>("[data-feedback]");
    if (feedback) feedback.textContent = message;
  } catch {
    const feedback = root.querySelector<HTMLElement>("[data-feedback]");
    if (feedback) feedback.textContent = text;
  }
}

export function mountUnicodeInspector(
  root: HTMLElement,
  copy: ControllerCopy,
): void {
  const leftInput = root.querySelector<HTMLTextAreaElement>(
    '[data-input="left"]',
  );
  const rightInput = root.querySelector<HTMLTextAreaElement>(
    '[data-input="right"]',
  );
  const state = loadState();
  if (state) restoreState(root, state.left, state.right);
  const evaluateCurrent = createEvaluator(root, copy, leftInput, rightInput);
  bindActions(root, copy, { leftInput, rightInput }, evaluateCurrent);
  evaluateCurrent();
}

function createEvaluator(
  root: HTMLElement,
  copy: ControllerCopy,
  leftInput: HTMLTextAreaElement | null,
  rightInput: HTMLTextAreaElement | null,
): () => void {
  return (): void => {
    const left = leftInput?.value ?? "";
    const right = rightInput?.value ?? "";
    saveState({ left, right });
    if (!left && !right) return renderWaiting(root, evaluate("waiting", copy));
    const comparison = inspectPair(left, right);
    renderComparison(
      root,
      comparison,
      evaluate(comparison.kind, copy),
      copyLabels(copy),
    );
  };
}

function restoreState(root: HTMLElement, left: string, right: string): void {
  setValue(root, '[data-input="left"]', left);
  setValue(root, '[data-input="right"]', right);
}

function bindAction(
  root: HTMLElement,
  action: string,
  handler: () => void,
): void {
  root
    .querySelector(`[data-action="${action}"]`)
    ?.addEventListener("click", handler);
}

function bindPreset(
  root: HTMLElement,
  preset: { action: string; left: string; right: string },
  evaluateCurrent: () => void,
): void {
  bindAction(root, preset.action, () => {
    restoreState(root, preset.left, preset.right);
    evaluateCurrent();
  });
}

function bindActions(
  root: HTMLElement,
  copy: ControllerCopy,
  inputs: {
    leftInput: HTMLTextAreaElement | null;
    rightInput: HTMLTextAreaElement | null;
  },
  evaluateCurrent: () => void,
): void {
  bindAction(root, "compare", evaluateCurrent);
  [inputs.leftInput, inputs.rightInput].forEach((input) =>
    input?.addEventListener("input", evaluateCurrent),
  );
  bindPreset(
    root,
    { action: "canonical", left: "café", right: "cafe\u0301" },
    evaluateCurrent,
  );
  bindPreset(
    root,
    { action: "compatibility", left: "ＡＢＣ１２３", right: "ABC123" },
    evaluateCurrent,
  );
  bindPreset(root, { action: "clear", left: "", right: "" }, evaluateCurrent);
  bindCopy(root, copy, inputs);
}

function bindCopy(
  root: HTMLElement,
  copy: ControllerCopy,
  inputs: {
    leftInput: HTMLTextAreaElement | null;
    rightInput: HTMLTextAreaElement | null;
  },
): void {
  bindAction(root, "copy", () => {
    const left = inputs.leftInput?.value ?? "";
    const right = inputs.rightInput?.value ?? "";
    if (left || right)
      void copyReport(
        reportText(inspectPair(left, right), copy.reportTitle),
        copy.copied,
        root,
      );
  });
}

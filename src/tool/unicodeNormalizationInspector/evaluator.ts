import type { ComparisonKind } from "./logic";

export interface EvaluationCopy {
  waitingTitle: string;
  exactTitle: string;
  canonicalTitle: string;
  compatibilityTitle: string;
  differentTitle: string;
  waitingText: string;
  exactText: string;
  canonicalText: string;
  compatibilityText: string;
  differentText: string;
}

export interface Evaluation {
  title: string;
  text: string;
  tone: "waiting" | "exact" | "canonical" | "compatibility" | "different";
}

function result(
  title: string,
  text: string,
  tone: Evaluation["tone"],
): Evaluation {
  return { title, text, tone };
}

export function evaluate(
  kind: ComparisonKind | "waiting",
  copy: EvaluationCopy,
): Evaluation {
  const values = {
    waiting: result(copy.waitingTitle, copy.waitingText, "waiting"),
    same: result(copy.exactTitle, copy.exactText, "exact"),
    canonical: result(copy.canonicalTitle, copy.canonicalText, "canonical"),
    compatibility: result(
      copy.compatibilityTitle,
      copy.compatibilityText,
      "compatibility",
    ),
    different: result(copy.differentTitle, copy.differentText, "different"),
  };
  return values[kind];
}

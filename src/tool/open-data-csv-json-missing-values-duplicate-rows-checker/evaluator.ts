import type { DataProfile } from './logic';

export type EvaluationSeverity = 'clear' | 'review' | 'attention';

export interface EvaluationCheck {
  code: string;
  severity: EvaluationSeverity;
  count: number;
}

export interface EvaluationSummary {
  severity: EvaluationSeverity;
  checks: EvaluationCheck[];
}

const summarySeverity = (checks: EvaluationCheck[]): EvaluationSeverity => {
  if (checks.some((check) => check.severity === 'attention')) return 'attention';
  if (checks.some((check) => check.severity === 'review')) return 'review';
  return 'clear';
};

export const evaluateProfile = (profile: DataProfile): EvaluationSummary => {
  const checks: EvaluationCheck[] = [
    { code: 'parse', severity: profile.warnings.some((warning) => warning.code === 'invalid-json' || warning.code === 'column-count') ? 'attention' : 'clear', count: profile.warnings.filter((warning) => warning.code === 'invalid-json' || warning.code === 'column-count').length },
    { code: 'completeness', severity: profile.warnings.some((warning) => warning.code === 'incomplete-column') ? 'review' : 'clear', count: profile.warnings.filter((warning) => warning.code === 'incomplete-column').length },
    { code: 'uniqueness', severity: profile.duplicateGroups.length > 0 ? 'review' : 'clear', count: profile.duplicateGroups.length },
    { code: 'types', severity: profile.warnings.some((warning) => warning.code === 'mixed-type' || warning.code === 'parse-failure') ? 'review' : 'clear', count: profile.warnings.filter((warning) => warning.code === 'mixed-type' || warning.code === 'parse-failure').length },
    { code: 'outliers', severity: profile.outlierCells > 0 ? 'review' : 'clear', count: profile.outlierCells },
  ];
  return { severity: summarySeverity(checks), checks };
};

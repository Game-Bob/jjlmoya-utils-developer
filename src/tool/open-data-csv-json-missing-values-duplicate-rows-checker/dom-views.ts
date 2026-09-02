import type { CsvJsonDataQualityCheckerUI } from './ui';
import type { ColumnProfile, DataProfile } from './logic';
import { evaluateProfile } from './evaluator';

interface ViewOptions {
  root: HTMLElement;
  ui: CsvJsonDataQualityCheckerUI;
  profile: DataProfile;
  locale: string;
}

const setText = (root: HTMLElement, selector: string, value: string): void => {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
};

const formatNumber = (value: number, locale: string): string => new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(value);

const typeLabel = (type: ColumnProfile['inferredType'], ui: CsvJsonDataQualityCheckerUI): string => {
  const labels = {
    missing: ui.kindMissing,
    null: ui.kindNull,
    blank: ui.kindBlank,
    number: ui.kindNumber,
    string: ui.kindString,
    boolean: ui.kindBoolean,
    date: ui.kindDate,
    mixed: ui.kindMixed,
    empty: ui.kindEmpty,
  } satisfies Record<ColumnProfile['inferredType'], string>;
  return labels[type];
};

const createCell = (tag: 'td' | 'th', text: string): HTMLTableCellElement => {
  const cell = document.createElement(tag);
  cell.textContent = text;
  return cell;
};

const renderColumnTable = (root: HTMLElement, profile: DataProfile, ui: CsvJsonDataQualityCheckerUI): void => {
  const body = root.querySelector<HTMLTableSectionElement>('[data-columns-body]');
  if (!body) return;
  body.replaceChildren();
  profile.columnProfiles.forEach((column) => {
    const row = document.createElement('tr');
    const numeric = column.numeric;
    [column.name, typeLabel(column.inferredType, ui), String(column.missing), String(column.nulls), String(column.blanks), String(column.unique), String(numeric?.outlierRows.length ?? 0)].forEach((value, index) => {
      row.append(createCell(index === 0 ? 'th' : 'td', value));
    });
    body.append(row);
  });
};

const renderNumeric = (root: HTMLElement, profile: DataProfile, ui: CsvJsonDataQualityCheckerUI, locale: string): void => {
  const list = root.querySelector<HTMLElement>('[data-numeric-list]');
  if (!list) return;
  list.replaceChildren();
  profile.columnProfiles.filter((column) => column.numeric).forEach((column) => {
    const item = document.createElement('li');
    const numeric = column.numeric;
    if (!numeric) return;
    item.textContent = `${column.name}: ${formatNumber(numeric.min, locale)} ${ui.numericTo} ${formatNumber(numeric.max, locale)} · ${ui.medianLabel} ${formatNumber(numeric.median, locale)} · ${ui.meanLabel} ${formatNumber(numeric.mean, locale)}`;
    list.append(item);
  });
  if (list.childElementCount === 0) {
    const item = document.createElement('li');
    item.textContent = ui.noNumeric;
    list.append(item);
  }
};

const renderWarnings = (root: HTMLElement, profile: DataProfile, ui: CsvJsonDataQualityCheckerUI): void => {
  const list = root.querySelector<HTMLElement>('[data-warnings-list]');
  if (!list) return;
  list.replaceChildren();
  const messages: string[] = [];
  const codes = new Set(profile.warnings.map((warning) => warning.code));
  if (codes.has('incomplete-column')) messages.push(ui.guidanceMissing);
  if (codes.has('duplicate-rows')) messages.push(ui.guidanceDuplicates);
  if (codes.has('mixed-type') || codes.has('parse-failure')) messages.push(ui.guidanceTypes);
  if (codes.has('outliers')) messages.push(ui.guidanceOutliers);
  messages.push(ui.guidanceContext);
  messages.forEach((message) => {
    const item = document.createElement('li');
    item.textContent = message;
    list.append(item);
  });
  setText(root, '[data-warning-count]', String(profile.warnings.length));
};

const renderSources = (root: HTMLElement, profile: DataProfile, ui: CsvJsonDataQualityCheckerUI): void => {
  const source = root.querySelector<HTMLElement>('[data-source-rows]');
  if (!source) return;
  source.replaceChildren();
  profile.duplicateGroups.forEach((group) => {
    const item = document.createElement('li');
    item.textContent = `${ui.sourceRowsLabel}: ${group.rows.join(', ')}`;
    source.append(item);
  });
  if (source.childElementCount === 0) {
    const item = document.createElement('li');
    item.textContent = `${ui.sourceRowsLabel}: ${ui.noSourceRows}`;
    source.append(item);
  }
};

export const renderEmptyState = (root: HTMLElement, ui: CsvJsonDataQualityCheckerUI): void => {
  setText(root, '[data-empty-title]', ui.emptyTitle);
  setText(root, '[data-empty-text]', ui.emptyText);
  root.querySelector('[data-empty-state]')?.removeAttribute('hidden');
  root.querySelector('[data-profile-state]')?.setAttribute('hidden', '');
};

export const renderProfile = ({ root, ui, profile, locale }: ViewOptions): void => {
  const evaluation = evaluateProfile(profile);
  const incompleteCells = profile.columnProfiles.reduce((total, column) => total + column.missing + column.nulls + column.blanks, 0);
  const totalCells = profile.rows * profile.columns;
  const completeness = totalCells === 0 ? 100 : Math.max(0, Math.round(((totalCells - incompleteCells) / totalCells) * 100));
  const typeWarnings = profile.warnings.filter((warning) => warning.code === 'mixed-type' || warning.code === 'parse-failure').length;
  setText(root, '[data-stat-rows]', String(profile.rows));
  setText(root, '[data-stat-columns]', String(profile.columns));
  setText(root, '[data-stat-format]', profile.format.toUpperCase());
  setText(root, '[data-signal-completeness]', `${completeness}%`);
  setText(root, '[data-signal-duplicates]', String(profile.duplicateRows));
  setText(root, '[data-signal-types]', String(typeWarnings));
  setText(root, '[data-signal-outliers]', String(profile.outlierCells));
  setText(root, '[data-source-name]', profile.sourceName);
  setText(root, '[data-warning-severity]', evaluation.severity === 'clear' ? ui.noWarnings : ui.warningsTitle);
  renderColumnTable(root, profile, ui);
  renderNumeric(root, profile, ui, locale);
  renderWarnings(root, profile, ui);
  renderSources(root, profile, ui);
  root.querySelector('[data-empty-state]')?.setAttribute('hidden', '');
  root.querySelector('[data-profile-state]')?.removeAttribute('hidden');
};

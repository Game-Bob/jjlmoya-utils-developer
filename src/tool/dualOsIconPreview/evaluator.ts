import type { IconPreviewState } from './logic';
import type { DualOsIconPreviewUI } from './ui';

export interface PreviewBadge {
  label: string;
  detail: string;
  tone: 'ready' | 'review' | 'quiet';
}

export function evaluatePreview(state: IconPreviewState, ui: DualOsIconPreviewUI): PreviewBadge[] {
  if (!state.hasLogo) {
    return [{ label: ui.statusNeedsReview, detail: ui.emptyLogo, tone: 'review' }];
  }
  const badges: PreviewBadge[] = [
    { label: ui.statusReady, detail: ui.safeZoneLabel, tone: 'ready' },
    { label: ui.statusReady, detail: ui.adaptiveLayerLabel, tone: 'ready' },
  ];
  if (state.androidThemed) badges.push({ label: ui.monochromeLabel, detail: ui.androidThemeHint, tone: 'quiet' });
  return badges;
}

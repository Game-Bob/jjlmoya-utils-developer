import { evaluatePreview } from './evaluator';
import { getIosSurface, type IconPreviewState, type LogoAudit } from './logic';
import type { DualOsIconPreviewUI } from './ui';

interface RenderPayload {
  state: IconPreviewState;
  ui: DualOsIconPreviewUI;
  logoUrl: string;
}

function setText(selector: string, text: string): void {
  document.querySelectorAll<HTMLElement>(selector).forEach((node) => { node.textContent = text; });
}

function setLogo(logoUrl: string, hasLogo: boolean): void {
  document.querySelectorAll<HTMLImageElement>('[data-logo-image]').forEach((image) => {
    image.src = logoUrl;
    image.hidden = !hasLogo;
  });
  document.querySelectorAll<HTMLElement>('[data-empty-logo]').forEach((node) => { node.hidden = hasLogo; });
}

function renderBadges(payload: RenderPayload): void {
  const target = document.querySelector<HTMLElement>('[data-preview-badges]');
  if (!target) return;
  target.replaceChildren(...evaluatePreview(payload.state, payload.ui).map((badge) => {
    const node = document.createElement('span');
    node.className = `preview-badge preview-badge-${badge.tone}`;
    node.textContent = `${badge.label} / ${badge.detail}`;
    return node;
  }));
}

function setAuditValue(selector: string, value: string, status: string | null): void {
  const node = document.querySelector<HTMLElement>(selector);
  if (!node) return;
  node.textContent = value;
  if (status) {
    node.dataset.auditStatus = status;
  } else {
    delete node.dataset.auditStatus;
  }
}

function renderAuditScore(audit: LogoAudit, ui: DualOsIconPreviewUI): void {
  setAuditValue('[data-audit-score]', `${audit.score}/100`, audit.score === 100 ? 'pass' : 'review');
  setAuditValue('[data-audit-resolution]', audit.resolution === 'pass' ? ui.statusPass : ui.statusReview, audit.resolution);
  setAuditValue('[data-audit-ios]', audit.iosMask === 'pass' ? ui.statusPass : ui.statusReview, audit.iosMask);
  setAuditValue('[data-audit-android]', audit.androidSafeZone === 'pass' ? ui.statusPass : ui.statusReview, audit.androidSafeZone);
}

function renderAuditMetrics(audit: LogoAudit, ui: DualOsIconPreviewUI): void {
  setAuditValue('[data-audit-file]', audit.dimensions, null);
  setAuditValue('[data-audit-aspect]', audit.aspect, audit.aspect === '1:1' ? 'pass' : 'review');
  setAuditValue('[data-audit-margin]', `${Math.round(audit.minimumMargin * 100)}%`, audit.androidSafeZone);
  setAuditValue('[data-audit-transparency]', audit.transparency === 'transparent' ? ui.auditTransparent : ui.auditFullBleed, null);
}

function renderAudit(audit: LogoAudit | null, ui: DualOsIconPreviewUI): void {
  const report = document.querySelector<HTMLElement>('[data-audit-report]');
  if (!report) return;
  report.dataset.auditState = audit ? 'ready' : 'waiting';
  if (!audit) {
    setAuditValue('[data-audit-score]', ui.auditWaiting, null);
    return;
  }
  renderAuditScore(audit, ui);
  renderAuditMetrics(audit, ui);
}

export function renderPreview(payload: RenderPayload): void {
  const root = document.querySelector<HTMLElement>('[data-icon-preview]');
  if (!root) return;
  root.dataset.iosAppearance = getIosSurface(payload.state.iosAppearance);
  root.dataset.androidShape = payload.state.androidShape;
  root.dataset.androidThemed = String(payload.state.androidThemed);
  root.style.setProperty('--n-brand', payload.state.brandColor);
  setText('[data-app-name]', payload.state.appName || payload.ui.nameFallback);
  setLogo(payload.logoUrl, payload.state.hasLogo);
  renderBadges(payload);
  renderAudit(payload.state.audit, payload.ui);
}

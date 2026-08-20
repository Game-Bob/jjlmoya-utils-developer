import type { CompositionState, LayerKey } from './logic';

export function activeLabel(state: CompositionState, labels: Record<LayerKey, string>): string {
  return `${labels[state.active]}`;
}

export function visibleLayerCount(state: CompositionState): number {
  return Object.values(state.visible).filter(Boolean).length;
}

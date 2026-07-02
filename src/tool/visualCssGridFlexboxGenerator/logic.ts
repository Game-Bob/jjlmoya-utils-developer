export type LayoutMode = 'flex' | 'grid';

export interface LayoutState {
  mode: LayoutMode;
  gap: number;
  columns: number;
  width: number;
  height: number;
  itemSize: number;
  justifyContent: string;
  alignItems: string;
  flexDirection: string;
  flexWrap: string;
  alignContent: string;
  itemSpans: Record<string, number>;
}

function buildSpanRules(spans: Record<string, number>): string[] {
  const lines: string[] = [];
  for (const [id, span] of Object.entries(spans)) {
    if (span > 1) {
      lines.push(`.layout-item[data-item="${id}"] {`, `  grid-column: span ${span};`, '}');
    }
  }
  return lines;
}

export function buildLayoutCss(state: LayoutState): string {
  const lines: string[] = ['.layout-playground {'];

  if (state.mode === 'grid') {
    lines.push('  display: grid;', `  grid-template-columns: repeat(${state.columns}, minmax(0, 1fr));`);
  } else {
    lines.push('  display: flex;', `  flex-direction: ${state.flexDirection};`, `  flex-wrap: ${state.flexWrap};`);
  }

  lines.push(`  gap: ${state.gap}px;`, `  justify-content: ${state.justifyContent};`, `  align-items: ${state.alignItems};`);

  if (state.mode === 'flex' && state.flexWrap !== 'nowrap') {
    lines.push(`  align-content: ${state.alignContent};`);
  }

  lines.push(`  width: ${state.width}px;`, `  min-height: ${state.height}px;`, '}', '', '.layout-item {', `  min-width: ${state.itemSize}px;`, `  min-height: ${state.itemSize}px;`, '}');

  if (state.mode === 'grid') {
    lines.push(...buildSpanRules(state.itemSpans));
  }
  return lines.join('\n');
}

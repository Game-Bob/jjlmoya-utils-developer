export interface ShadowLayer {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inset: boolean;
}

export function buildShadowCss(layers: ShadowLayer[]): string {
  if (layers.length === 0) return 'box-shadow: none;';

  const parts = layers.map((l) => {
    const rr = parseInt(l.color.slice(1, 3), 16) || 0;
    const gg = parseInt(l.color.slice(3, 5), 16) || 0;
    const bb = parseInt(l.color.slice(5, 7), 16) || 0;
    const inset = l.inset ? 'inset ' : '';
    return `${inset}${l.offsetX}px ${l.offsetY}px ${l.blur}px ${l.spread}px rgba(${rr}, ${gg}, ${bb}, ${l.opacity})`;
  });

  const value = parts.join(', ');
  return `box-shadow: ${value};`;
}

export function buildShadowValue(layers: ShadowLayer[]): string {
  const parts = layers.map((l) => {
    const rr = parseInt(l.color.slice(1, 3), 16) || 0;
    const gg = parseInt(l.color.slice(3, 5), 16) || 0;
    const bb = parseInt(l.color.slice(5, 7), 16) || 0;
    const inset = l.inset ? 'inset ' : '';
    return `${inset}${l.offsetX}px ${l.offsetY}px ${l.blur}px ${l.spread}px rgba(${rr}, ${gg}, ${bb}, ${l.opacity})`;
  });
  return parts.join(', ');
}

import { clamp, type CompositionState, type LayerPosition, type TitleStyle } from './logic';

interface TitlePalette {
  fill: string;
  text: string;
  accent: string;
}

const palettes: Record<TitleStyle, TitlePalette> = {
  paper: { fill: '#f7ebd7', text: '#08182b', accent: '#c45a2f' },
  ribbon: { fill: '#c45a2f', text: '#fffaf0', accent: '#f7ebd7' },
  ink: { fill: '#172a3c', text: '#f7ebd7', accent: '#11d6c4' },
  poster: { fill: '#071226', text: '#fffaf0', accent: '#11d6c4' },
  ticket: { fill: '#f1dfc4', text: '#08182b', accent: '#577b86' },
  marker: { fill: '#f4f6fb', text: '#08182b', accent: '#11a99d' },
  split: { fill: '#08182b', text: '#fffaf0', accent: '#11d6c4' },
  capsule: { fill: '#fffaf0', text: '#08182b', accent: '#c45a2f' },
  corner: { fill: '#10283b', text: '#fffaf0', accent: '#f0b45b' },
  vertical: { fill: '#172a3c', text: '#fffaf0', accent: '#c45a2f' },
};

function roundedRect(context: CanvasRenderingContext2D, position: LayerPosition, radius: number): void {
  const r = Math.min(radius, position.width / 2, position.height / 2);
  context.beginPath();
  context.roundRect(position.x, position.y, position.width, position.height, r);
}

function wrapLines(context: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';
  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (current && context.measureText(candidate).width > maxWidth) {
      lines.push(current);
      current = word;
    } else current = candidate;
  });
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function drawPaper(context: CanvasRenderingContext2D, palette: TitlePalette, position: LayerPosition): void {
  roundedRect(context, position, 16);
  context.fill();
  context.stroke();
  context.fillStyle = palette.accent;
  context.fillRect(position.x + position.width * 0.09, position.y + position.height * 0.78, position.width * 0.24, 6);
}

function drawRibbon(context: CanvasRenderingContext2D, position: LayerPosition): void {
  context.beginPath();
  context.moveTo(position.x + 28, position.y);
  context.lineTo(position.x + position.width - 28, position.y);
  context.lineTo(position.x + position.width, position.y + position.height / 2);
  context.lineTo(position.x + position.width - 28, position.y + position.height);
  context.lineTo(position.x + 28, position.y + position.height);
  context.lineTo(position.x, position.y + position.height / 2);
  context.closePath();
  context.fill();
  context.stroke();
}

function drawInk(context: CanvasRenderingContext2D, position: LayerPosition): void {
  context.save();
  context.translate(position.x + position.width / 2, position.y + position.height / 2);
  context.rotate(-0.025);
  const width = position.width;
  const height = position.height;
  context.beginPath();
  context.moveTo(-width * 0.48, -height * 0.05);
  context.bezierCurveTo(-width * 0.43, -height * 0.46, -width * 0.12, -height * 0.58, width * 0.25, -height * 0.45);
  context.bezierCurveTo(width * 0.54, -height * 0.36, width * 0.55, height * 0.08, width * 0.32, height * 0.34);
  context.bezierCurveTo(width * 0.04, height * 0.62, -width * 0.36, height * 0.46, -width * 0.48, -height * 0.05);
  context.fill();
  context.stroke();
  context.fillStyle = '#11d6c4';
  context.beginPath();
  context.arc(width * 0.34, height * 0.34, Math.max(4, height * 0.08), 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawPoster(context: CanvasRenderingContext2D, position: LayerPosition): void {
  context.fillRect(position.x, position.y, position.width, position.height);
  context.strokeRect(position.x, position.y, position.width, position.height);
}

function drawTicket(context: CanvasRenderingContext2D, position: LayerPosition): void {
  roundedRect(context, position, 20);
  context.fill();
  context.stroke();
  context.save();
  context.globalCompositeOperation = 'destination-out';
  context.beginPath();
  context.arc(position.x, position.y + position.height / 2, Math.min(14, position.height * 0.22), 0, Math.PI * 2);
  context.arc(position.x + position.width, position.y + position.height / 2, Math.min(14, position.height * 0.22), 0, Math.PI * 2);
  context.fill();
  context.restore();
  context.fillStyle = '#577b86';
  context.fillRect(position.x, position.y + position.height * 0.15, 8, position.height * 0.7);
  context.setLineDash([6, 10]);
  context.beginPath();
  context.moveTo(position.x + position.width * 0.78, position.y + 12);
  context.lineTo(position.x + position.width * 0.78, position.y + position.height - 12);
  context.stroke();
  context.setLineDash([]);
}

function drawMarker(context: CanvasRenderingContext2D, palette: TitlePalette, position: LayerPosition): void {
  roundedRect(context, position, 14);
  context.fill();
  context.stroke();
  context.fillStyle = palette.accent;
  context.fillRect(position.x + position.width * 0.08, position.y + position.height * 0.78, position.width * 0.38, 7);
}

function drawSplit(context: CanvasRenderingContext2D, palette: TitlePalette, position: LayerPosition): void {
  roundedRect(context, position, 8);
  context.fillStyle = palette.fill;
  context.fill();
  context.save();
  context.beginPath();
  context.rect(position.x + position.width * 0.58, position.y, position.width * 0.42, position.height);
  context.clip();
  context.fillStyle = palette.accent;
  context.fillRect(position.x + position.width * 0.58, position.y, position.width * 0.42, position.height);
  context.restore();
  context.stroke();
}

function drawCapsule(context: CanvasRenderingContext2D, position: LayerPosition): void {
  roundedRect(context, position, position.height / 2);
  context.fill();
  context.stroke();
}

function drawCorner(context: CanvasRenderingContext2D, palette: TitlePalette, position: LayerPosition): void {
  context.fillRect(position.x, position.y, position.width, position.height);
  context.fillStyle = palette.accent;
  context.fillRect(position.x, position.y + position.height - 8, position.width * 0.3, 8);
}

function drawVertical(context: CanvasRenderingContext2D, palette: TitlePalette, position: LayerPosition): void {
  context.fillRect(position.x, position.y, position.width, position.height);
  context.fillStyle = palette.accent;
  context.fillRect(position.x + position.width - 10, position.y + 12, 4, position.height - 24);
  context.beginPath();
  context.arc(position.x + position.width - 8, position.y + 8, 3, 0, Math.PI * 2);
  context.fill();
}

function drawShape(context: CanvasRenderingContext2D, style: TitleStyle, palette: TitlePalette, position: LayerPosition): void {
  const drawers: Record<TitleStyle, () => void> = {
    paper: () => drawPaper(context, palette, position), ribbon: () => drawRibbon(context, position), ink: () => drawInk(context, position), poster: () => drawPoster(context, position), ticket: () => drawTicket(context, position), marker: () => drawMarker(context, palette, position), split: () => drawSplit(context, palette, position), capsule: () => drawCapsule(context, position), corner: () => drawCorner(context, palette, position), vertical: () => drawVertical(context, palette, position),
  };
  drawers[style]();
}

function drawTitleText(context: CanvasRenderingContext2D, state: CompositionState, palette: TitlePalette, position: LayerPosition): void {
  const fontSize = clamp(position.height * 0.34 * state.titleFontSize, 12, 74);
  const textTop = state.titleStyle === 'marker' ? 0.24 : 0.18;
  context.font = `800 ${fontSize}px Georgia, serif`;
  context.textAlign = 'left';
  context.textBaseline = 'top';
  const lines = wrapLines(context, state.title, position.width * 0.82);
  lines.forEach((line, index) => {
    const y = position.y + position.height * textTop + index * fontSize * 1.05;
    if (state.titleStyle !== 'split') {
      context.fillStyle = palette.text;
      context.fillText(line, position.x + position.width * 0.09, y);
      return;
    }
    context.save();
    context.beginPath();
    context.rect(position.x, position.y, position.width * 0.58, position.height);
    context.clip();
    context.fillStyle = palette.text;
    context.fillText(line, position.x + position.width * 0.09, y);
    context.restore();
    context.save();
    context.beginPath();
    context.rect(position.x + position.width * 0.58, position.y, position.width * 0.42, position.height);
    context.clip();
    context.fillStyle = '#fffaf0';
    context.fillText(line, position.x + position.width * 0.09, y);
    context.restore();
  });
}

export function drawTitle(context: CanvasRenderingContext2D, state: CompositionState): void {
  if (!state.title.trim()) return;
  const position = state.positions.title;
  const palette = palettes[state.titleStyle];
  context.save();
  context.shadowColor = 'rgba(4, 11, 24, 0.25)';
  context.shadowBlur = 22;
  context.shadowOffsetY = 10;
  context.fillStyle = palette.fill;
  context.strokeStyle = palette.accent;
  context.lineWidth = 3;
  drawShape(context, state.titleStyle, palette, position);
  context.shadowColor = 'transparent';
  drawTitleText(context, state, palette, position);
  context.restore();
}

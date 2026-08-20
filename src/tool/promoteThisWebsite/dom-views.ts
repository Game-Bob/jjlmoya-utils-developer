/* eslint-disable max-lines */
import { containRect, type BrandStyle, type CompositionState, type LayerKey, type LayerPosition } from './logic';
import type { PromoteThisWebsiteUI } from './ui';
import { drawTitle } from './title-view';

export interface RenderAssets {
  background: HTMLImageElement | null;
  tool: HTMLImageElement | null;
  brand: HTMLImageElement | null;
  mascot: HTMLImageElement | null;
}

export interface RenderInput {
  context: CanvasRenderingContext2D;
  state: CompositionState;
  assets: RenderAssets;
  ui: PromoteThisWebsiteUI;
}

interface BrandPalette {
  fill: string;
  text: string;
  accent: string;
  stroke: string;
}

const brandPalettes: Record<BrandStyle, BrandPalette> = {
  plain: { fill: 'transparent', text: '#071226', accent: '#c45a2f', stroke: '#071226' },
  plaque: { fill: '#f7ebd7', text: '#071226', accent: '#c45a2f', stroke: '#c45a2f' },
  ticket: { fill: '#172a3c', text: '#fffaf0', accent: '#f0b45b', stroke: '#f7ebd7' },
  stamp: { fill: '#f7ebd7', text: '#071226', accent: '#c45a2f', stroke: '#c45a2f' },
  neon: { fill: '#071226', text: '#fffaf0', accent: '#11d6c4', stroke: '#11d6c4' },
  ribbon: { fill: '#071226', text: '#fffaf0', accent: '#c45a2f', stroke: '#f7ebd7' },
  corner: { fill: '#f7ebd7', text: '#071226', accent: '#c45a2f', stroke: '#071226' },
  pixel: { fill: '#071226', text: '#fffaf0', accent: '#11d6c4', stroke: '#11d6c4' },
  halo: { fill: '#071226', text: '#fffaf0', accent: '#11d6c4', stroke: '#11d6c4' },
  editorial: { fill: '#f7ebd7', text: '#071226', accent: '#c45a2f', stroke: '#071226' },
};

function roundedRect(context: CanvasRenderingContext2D, position: LayerPosition, radius: number): void {
  const r = Math.min(radius, position.width / 2, position.height / 2);
  context.beginPath();
  context.roundRect(position.x, position.y, position.width, position.height, r);
}

function drawFallbackBackground(context: CanvasRenderingContext2D, width: number, height: number): void {
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#091426');
  gradient.addColorStop(0.52, '#203e55');
  gradient.addColorStop(1, '#d48d53');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  context.fillStyle = 'rgba(247, 235, 215, 0.82)';
  for (let index = 0; index < 90; index += 1) {
    const x = (index * 173) % width;
    const y = (index * 97) % height;
    const radius = index % 5 === 0 ? 3 : 1.2;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }
}

function drawImage(context: CanvasRenderingContext2D, image: HTMLImageElement, position: LayerPosition, mode: 'contain' | 'cover'): LayerPosition {
  const ratio = mode === 'contain'
    ? Math.min(position.width / image.naturalWidth, position.height / image.naturalHeight)
    : Math.max(position.width / image.naturalWidth, position.height / image.naturalHeight);
  const fitted = { x: position.x + (position.width - image.naturalWidth * ratio) / 2, y: position.y + (position.height - image.naturalHeight * ratio) / 2, width: image.naturalWidth * ratio, height: image.naturalHeight * ratio };
  context.drawImage(image, fitted.x, fitted.y, fitted.width, fitted.height);
  return fitted;
}

interface BackgroundInput {
  context: CanvasRenderingContext2D;
  state: CompositionState;
  assets: RenderAssets;
}

function drawBackground(input: BackgroundInput): void {
  const { context, state, assets } = input;
  if (assets.background) drawImage(context, assets.background, state.positions.background, 'cover');
  else drawFallbackBackground(context, context.canvas.width, context.canvas.height);
}

function drawTool(context: CanvasRenderingContext2D, state: CompositionState, assets: RenderAssets, ui: PromoteThisWebsiteUI): void {
  const box = state.positions.tool;
  const imageBox = assets.tool ? containRect(assets.tool.naturalWidth, assets.tool.naturalHeight, box) : box;
  context.save();
  context.shadowColor = 'rgba(4, 11, 24, 0.42)';
  context.shadowBlur = 28;
  context.shadowOffsetY = 16;
  context.fillStyle = '#071226';
  roundedRect(context, imageBox, 22);
  context.fill();
  context.shadowColor = 'transparent';
  context.clip();
  if (assets.tool) context.drawImage(assets.tool, imageBox.x, imageBox.y, imageBox.width, imageBox.height);
  else drawToolFallback(context, imageBox, ui);
  context.restore();
  context.save();
  context.strokeStyle = state.colors.frame;
  context.lineWidth = 5;
  roundedRect(context, imageBox, 22);
  context.stroke();
  context.restore();
}

function drawToolFallback(context: CanvasRenderingContext2D, box: LayerPosition, ui: PromoteThisWebsiteUI): void {
  context.fillStyle = '#0e1a30';
  context.fillRect(box.x, box.y, box.width, box.height);
  context.strokeStyle = 'rgba(247, 235, 215, 0.55)';
  context.lineWidth = 4;
  context.setLineDash([18, 14]);
  roundedRect(context, { x: box.x + 22, y: box.y + 22, width: box.width - 44, height: box.height - 44 }, 18);
  context.stroke();
  context.setLineDash([]);
  context.fillStyle = '#f7ebd7';
  context.font = `700 ${Math.max(22, box.width * 0.028)}px sans-serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(ui.defaultTool, box.x + box.width / 2, box.y + box.height / 2);
  context.textAlign = 'left';
  context.textBaseline = 'alphabetic';
}

function fitBrandFont(context: CanvasRenderingContext2D, brand: 'jjlmoya.es' | 'GameBob.dev', box: LayerPosition): void {
  let fontSize = Math.max(14, box.height * 0.55);
  const maxWidth = box.width * 0.82;
  context.font = `800 ${fontSize}px sans-serif`;
  const sample = brand === 'jjlmoya.es' ? 'jjlmoya.es' : 'GameBob.dev';
  while (context.measureText(sample).width > maxWidth && fontSize > 10) {
    fontSize *= 0.9;
    context.font = `800 ${fontSize}px sans-serif`;
  }
}

function drawJjlmoyaBrand(context: CanvasRenderingContext2D, box: LayerPosition, textColor: string): void {
  const scale = Math.min(1, box.width * 0.82 / context.measureText('jjlmoya.es').width);
  context.save();
  context.translate(box.x + box.width / 2, box.y + box.height / 2);
  context.scale(scale, 1);
  context.fillStyle = textColor;
  context.textAlign = 'center';
  context.fillText('jjlmoya.es', 0, 0);
  context.restore();
}

function drawGameBobBrand(context: CanvasRenderingContext2D, box: LayerPosition, textColor: string, accent: string): void {
  const gameWidth = context.measureText('Game').width;
  const bobWidth = context.measureText('Bob').width;
  const devWidth = context.measureText('.dev').width;
  const totalWidth = gameWidth + bobWidth + devWidth;
  const scale = Math.min(1, box.width * 0.82 / totalWidth);
  const start = -totalWidth / 2;
  context.save();
  context.translate(box.x + box.width / 2, box.y + box.height / 2);
  context.scale(scale, 1);
  context.textAlign = 'left';
  context.fillStyle = textColor;
  context.fillText('Game', start, 0);
  context.fillStyle = accent;
  context.fillText('Bob', start + gameWidth, 0);
  context.fillStyle = textColor;
  context.fillText('.dev', start + gameWidth + bobWidth, 0);
  context.restore();
}

function drawBrandShape(context: CanvasRenderingContext2D, style: BrandStyle, palette: BrandPalette, box: LayerPosition): void {
  const shapes: Record<BrandStyle, () => void> = {
    plain: () => undefined,
    plaque: () => { roundedRect(context, box, box.height * 0.45); context.fill(); context.stroke(); },
    ticket: () => drawBrandTicket(context, box),
    stamp: () => drawBrandStamp(context, box),
    neon: () => drawBrandNeon(context, palette, box),
    ribbon: () => drawBrandRibbon(context, palette, box),
    corner: () => drawBrandCorner(context, palette, box),
    pixel: () => drawBrandPixel(context, palette, box),
    halo: () => drawBrandHalo(context, palette, box),
    editorial: () => drawBrandEditorial(context, palette, box),
  };
  shapes[style]();
}

function drawBrandTicket(context: CanvasRenderingContext2D, box: LayerPosition): void {
  roundedRect(context, box, 14);
  context.fill();
  context.stroke();
  context.setLineDash([7, 9]);
  context.beginPath();
  context.moveTo(box.x + box.width * 0.76, box.y);
  context.lineTo(box.x + box.width * 0.76, box.y + box.height);
  context.stroke();
  context.setLineDash([]);
}

function drawBrandStamp(context: CanvasRenderingContext2D, box: LayerPosition): void {
  context.save();
  context.translate(box.x + box.width / 2, box.y + box.height / 2);
  context.rotate(-0.04);
  roundedRect(context, { x: -box.width / 2, y: -box.height / 2, width: box.width, height: box.height }, 10);
  context.fill();
  context.stroke();
  context.restore();
}

function drawBrandNeon(context: CanvasRenderingContext2D, palette: BrandPalette, box: LayerPosition): void {
  context.shadowColor = palette.accent;
  context.shadowBlur = 20;
  roundedRect(context, box, box.height / 2);
  context.stroke();
  context.shadowColor = 'transparent';
}

function drawBrandRibbon(context: CanvasRenderingContext2D, palette: BrandPalette, box: LayerPosition): void {
  roundedRect(context, box, 12);
  context.fill();
  context.save();
  context.clip();
  context.fillStyle = palette.accent;
  context.fillRect(box.x, box.y + box.height * 0.18, box.width, box.height * 0.64);
  context.restore();
  context.stroke();
}

function drawBrandCorner(context: CanvasRenderingContext2D, palette: BrandPalette, box: LayerPosition): void {
  roundedRect(context, box, 10);
  context.fillStyle = palette.fill;
  context.fill();
  context.stroke();
  context.fillStyle = palette.accent;
  context.fillRect(box.x, box.y, box.width * 0.22, 6);
}

function drawBrandPixel(context: CanvasRenderingContext2D, palette: BrandPalette, box: LayerPosition): void {
  roundedRect(context, box, Math.min(14, box.height * 0.24));
  context.fillStyle = palette.fill;
  context.fill();
  context.strokeStyle = palette.stroke;
  context.lineWidth = 4;
  context.setLineDash([7, 5]);
  roundedRect(context, { x: box.x + 5, y: box.y + 5, width: box.width - 10, height: box.height - 10 }, Math.min(10, box.height * 0.18));
  context.stroke();
  context.setLineDash([]);
}

function drawBrandHalo(context: CanvasRenderingContext2D, palette: BrandPalette, box: LayerPosition): void {
  context.shadowColor = palette.accent;
  context.shadowBlur = 24;
  context.globalAlpha = 0.28;
  context.beginPath();
  context.ellipse(box.x + box.width / 2, box.y + box.height / 2, box.width / 2, box.height * 0.72, 0, 0, Math.PI * 2);
  context.fill();
  context.shadowColor = 'transparent';
  context.globalAlpha = 1;
}

function drawBrandEditorial(context: CanvasRenderingContext2D, palette: BrandPalette, box: LayerPosition): void {
  roundedRect(context, box, 8);
  context.fill();
  context.stroke();
  context.fillRect(box.x, box.y + box.height * 0.82, box.width, 5);
  context.fillStyle = palette.accent;
  context.fillRect(box.x, box.y + box.height * 0.82, box.width * 0.28, 5);
}

function narrowBrandBox(position: LayerPosition): LayerPosition {
  const height = Math.min(position.height, position.width * 0.22);
  return { ...position, y: position.y + (position.height - height) / 2, height };
}

function drawBrand(context: CanvasRenderingContext2D, state: CompositionState, assets: RenderAssets): void {
  const box = narrowBrandBox(state.positions.brand);
  const palette = brandPalettes[state.brandStyle];
  context.save();
  fitBrandFont(context, state.brand, box);
  context.textBaseline = 'middle';
  context.shadowColor = 'rgba(0, 0, 0, 0.35)';
  context.shadowBlur = 8;
  context.fillStyle = palette.fill;
  context.strokeStyle = palette.stroke;
  context.lineWidth = 3;
  drawBrandShape(context, state.brandStyle, palette, box);
  if (assets.brand) drawImage(context, assets.brand, box, 'contain');
  else {
    if (state.brand === 'jjlmoya.es') drawJjlmoyaBrand(context, box, palette.text);
    else drawGameBobBrand(context, box, palette.text, palette.accent);
  }
  context.restore();
}

function drawMascot(context: CanvasRenderingContext2D, assets: RenderAssets, position: LayerPosition): void {
  if (assets.mascot) drawImage(context, assets.mascot, position, 'contain');
}

function drawBackgroundLayer(input: RenderInput): void {
  if (input.state.visible.background) drawBackground({ context: input.context, state: input.state, assets: input.assets });
}

function drawToolLayer(input: RenderInput): void {
  if (input.state.visible.tool) drawTool(input.context, input.state, input.assets, input.ui);
}

function drawForegroundLayers(input: RenderInput): void {
  const { context, state, assets } = input;
  if (state.visible.title) drawTitle(context, state);
  if (state.visible.mascot) drawMascot(context, assets, state.positions.mascot);
  if (state.visible.brand) drawBrand(context, state, assets);
}

export function renderComposition(input: RenderInput): void {
  const { context, state, assets, ui } = input;
  const width = context.canvas.width;
  const height = context.canvas.height;
  context.clearRect(0, 0, width, height);
  drawBackgroundLayer({ context, state, assets, ui });
  drawToolLayer({ context, state, assets, ui });
  drawForegroundLayers({ context, state, assets, ui });
}

export function layerHitOrder(): LayerKey[] {
  return ['title', 'mascot', 'brand', 'tool', 'background'];
}

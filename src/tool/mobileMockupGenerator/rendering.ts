import type { DeviceConfig, MockupImage } from './types';
import { EXPORT_WIDTH, EXPORT_HEIGHT, CANVAS_ASPECT } from './constants';

interface CanvasDims { w: number; h: number; }
interface Rect { x: number; y: number; w: number; h: number; }
interface SafeAreaBounds { targetY: number; targetH: number; }

interface GlobalSettings {
  gradient: { start: string; end: string; angle: number };
  font: string;
  safeArea: { show: boolean; color: string };
}

interface DrawState {
  ctx: CanvasRenderingContext2D;
  image: MockupImage;
  gs: GlobalSettings;
  scale: number;
}

export interface DrawMockupOpts {
  dataUrl: string;
  device: DeviceConfig;
  gs: GlobalSettings;
  isExport?: boolean;
}

export class RenderingEngine {
  static async drawMockup(canvas: HTMLCanvasElement, image: MockupImage, opts: DrawMockupOpts) {
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    const dims = this.initCanvas(canvas, ctx, opts.isExport ?? false);
    const { scale, devBounds } = this.calcDeviceLayout(image, opts.device, dims);
    const s: DrawState = { ctx, image, gs: opts.gs, scale };
    await this.drawBackground(s, dims);
    this.drawDeviceShadow(s, devBounds, opts.device.radius);
    const screen = this.getScreenBounds(devBounds, scale);
    await this.drawScreenContent(s, opts.dataUrl, opts.device, screen);
    if (opts.device.notch) this.drawNotch(s, opts.device, devBounds);
    this.drawText(s, dims);
  }

  private static initCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, isExport: boolean): CanvasDims {
    if (isExport) return { w: EXPORT_WIDTH, h: EXPORT_HEIGHT };
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || canvas.width / dpr;
    const h = w / CANVAS_ASPECT;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    return { w, h };
  }

  private static async drawBackground(s: DrawState, dims: CanvasDims) {
    if (s.image.settings.bgImage) {
      const bgImg = await this.loadImage(s.image.settings.bgImage);
      s.ctx.drawImage(bgImg, 0, 0, dims.w, dims.h);
      return;
    }
    const angleRad = (s.gs.gradient.angle - 90) * (Math.PI / 180);
    const cx = dims.w / 2;
    const cy = dims.h / 2;
    const len = Math.abs(dims.w * Math.cos(angleRad)) + Math.abs(dims.h * Math.sin(angleRad));
    const grad = s.ctx.createLinearGradient(cx - Math.cos(angleRad) * len / 2, cy - Math.sin(angleRad) * len / 2, cx + Math.cos(angleRad) * len / 2, cy + Math.sin(angleRad) * len / 2);
    grad.addColorStop(0, s.gs.gradient.start);
    grad.addColorStop(1, s.gs.gradient.end);
    s.ctx.fillStyle = grad;
    s.ctx.fillRect(0, 0, dims.w, dims.h);
  }

  private static calcDeviceLayout(image: MockupImage, device: DeviceConfig, dims: CanvasDims) {
    const paddingScale = 0.85 - (image.settings.spacing / 100) * 0.35;
    const scale = Math.min((dims.w * paddingScale) / device.width, (dims.h * paddingScale) / device.height);
    const dW = device.width * scale;
    const dH = device.height * scale;
    const dX = (dims.w - dW) / 2 + (dims.w * (image.settings.deviceOffsetX ?? 0)) / 100;
    const dY = (dims.h - dH) / 2 + (dims.h * (image.settings.deviceOffsetY ?? 0)) / 100;
    return { scale, devBounds: { x: dX, y: dY, w: dW, h: dH } };
  }

  private static drawDeviceShadow(s: DrawState, devBounds: Rect, radius: number) {
    s.ctx.save();
    s.ctx.shadowColor = 'rgba(0,0,0,0.4)';
    s.ctx.shadowBlur = 40 * s.scale;
    s.ctx.shadowOffsetY = 20 * s.scale;
    s.ctx.fillStyle = '#0f172a';
    this.roundRect(s.ctx, devBounds, radius * s.scale);
    s.ctx.fill();
    s.ctx.restore();
  }

  private static getScreenBounds(devBounds: Rect, scale: number): Rect {
    const inset = 8 * scale;
    return { x: devBounds.x + inset, y: devBounds.y + inset, w: devBounds.w - inset * 2, h: devBounds.h - inset * 2 };
  }

  private static async drawScreenContent(s: DrawState, dataUrl: string, device: DeviceConfig, screen: Rect) {
    const imgEl = await this.loadImage(dataUrl);
    s.ctx.save();
    this.roundRect(s.ctx, screen, (device.radius - 8) * s.scale);
    s.ctx.clip();
    if (s.gs.safeArea.show) {
      s.ctx.fillStyle = s.gs.safeArea.color;
      s.ctx.fillRect(screen.x, screen.y, screen.w, screen.h);
    }
    const saBounds = this.calcSafeAreaBounds(device, screen, s.gs.safeArea.show, s.scale);
    const dr = this.calcImageDrawRect(imgEl, screen, saBounds, s.gs.safeArea.show);
    s.ctx.drawImage(imgEl, dr.x, dr.y, dr.w, dr.h);
    if (s.gs.safeArea.show) this.drawSafeAreaOverlay(s.ctx, device, screen, { scale: s.scale, color: s.gs.safeArea.color });
    s.ctx.restore();
  }

  private static calcSafeAreaBounds(device: DeviceConfig, screen: Rect, show: boolean, scale: number): SafeAreaBounds {
    if (!show) return { targetY: screen.y, targetH: screen.h };
    return {
      targetY: screen.y + device.safeAreaTop * scale,
      targetH: screen.h - (device.safeAreaTop + device.safeAreaBottom) * scale,
    };
  }

  private static calcImageDrawRect(img: HTMLImageElement, screen: Rect, bounds: SafeAreaBounds, hasSafeArea: boolean): Rect {
    const iA = img.width / img.height;
    const sA = screen.w / bounds.targetH;
    if (hasSafeArea) {
      if (iA > sA) return { x: screen.x, y: bounds.targetY + (bounds.targetH - screen.w / iA) / 2, w: screen.w, h: screen.w / iA };
      return { x: screen.x + (screen.w - bounds.targetH * iA) / 2, y: bounds.targetY, w: bounds.targetH * iA, h: bounds.targetH };
    }
    if (iA > sA) return { x: screen.x - (screen.h * iA - screen.w) / 2, y: screen.y, w: screen.h * iA, h: screen.h };
    return { x: screen.x, y: screen.y - (screen.w / iA - screen.h) / 2, w: screen.w, h: screen.w / iA };
  }

  private static drawSafeAreaOverlay(ctx: CanvasRenderingContext2D, device: DeviceConfig, screen: Rect, opts: { scale: number; color: string }) {
    ctx.fillStyle = opts.color;
    if (device.safeAreaTop > 0) ctx.fillRect(screen.x, screen.y, screen.w, device.safeAreaTop * opts.scale);
    if (device.safeAreaBottom > 0) ctx.fillRect(screen.x, screen.y + screen.h - device.safeAreaBottom * opts.scale, screen.w, device.safeAreaBottom * opts.scale);
  }

  private static drawNotch(s: DrawState, device: DeviceConfig, devBounds: Rect) {
    if (!device.notch) return;
    s.ctx.fillStyle = '#0f172a';
    const nW = 120 * s.scale;
    const nH = 35 * s.scale;
    const nR = 18 * s.scale;
    this.roundRect(s.ctx, { x: devBounds.x + (devBounds.w - nW) / 2, y: devBounds.y + 12 * s.scale, w: nW, h: nH }, nR);
    s.ctx.fill();
  }

  private static drawText(s: DrawState, dims: CanvasDims) {
    if (!s.image.settings.text) return;
    s.ctx.save();
    s.ctx.translate(dims.w * (s.image.settings.textX / 100), dims.h * (s.image.settings.textY / 100));
    s.ctx.rotate((s.image.settings.textRotation * Math.PI) / 180);
    s.ctx.font = `bold ${s.image.settings.textSize}px ${s.gs.font}`;
    s.ctx.fillStyle = s.image.settings.textColor;
    s.ctx.textAlign = 'center';
    s.ctx.textBaseline = 'middle';
    const lines = this.wrapText(s.ctx, s.image.settings.text, dims.w * 0.85);
    const lineH = s.image.settings.textSize * 1.2;
    lines.forEach((line, i) => s.ctx.fillText(line, 0, i * lineH - ((lines.length - 1) * lineH) / 2));
    s.ctx.restore();
  }

  private static wrapText(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let current = words[0];
    for (let i = 1; i < words.length; i++) {
      const test = current + ' ' + words[i];
      if (ctx.measureText(test).width < maxW) { current = test; }
      else { lines.push(current); current = words[i]; }
    }
    lines.push(current);
    return lines;
  }

  private static roundRect(ctx: CanvasRenderingContext2D, bounds: Rect, r: number) {
    ctx.beginPath();
    ctx.roundRect(bounds.x, bounds.y, bounds.w, bounds.h, r);
    ctx.closePath();
  }

  private static loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = url;
    });
  }
}
